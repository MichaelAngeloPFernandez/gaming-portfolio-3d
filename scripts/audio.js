/* ============================================================
   3D Gaming Portfolio — audio.js
   Web Audio API Chiptune sound effects synthesizer
   ============================================================ */

class AudioManager {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
    }

    init() {
        if (this.ctx) return;
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.error("Web Audio API not supported in this browser.", e);
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        return this.isMuted;
    }

    createOscillator(type, freq, duration, gainStart, gainEnd = 0.001) {
        if (this.isMuted) return null;
        this.init();
        if (!this.ctx) return null;

        // Resume context if suspended (browser security autoplays blocker)
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gainNode.gain.setValueAtTime(gainStart, this.ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(gainEnd, this.ctx.currentTime + duration);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        return { osc, gainNode };
    }

    playClick() {
        const sound = this.createOscillator('square', 600, 0.08, 0.05);
        if (!sound) return;
        
        sound.osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.08);
        sound.osc.start(this.ctx.currentTime);
        sound.osc.stop(this.ctx.currentTime + 0.08);
    }

    playSelect() {
        const sound = this.createOscillator('sine', 880, 0.1, 0.08);
        if (!sound) return;
        
        sound.osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.1);
        sound.osc.start(this.ctx.currentTime);
        sound.osc.stop(this.ctx.currentTime + 0.1);
    }

    playBoot() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5 arpeggio
        const tempo = 0.08;

        notes.forEach((freq, idx) => {
            const time = this.ctx.currentTime + idx * tempo;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, time);

            gain.gain.setValueAtTime(0.06, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(time);
            osc.stop(time + 0.25);
        });
    }

    playLevelUp() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const notes = [
            { f: 523.25, d: 0.1 },  // C5
            { f: 587.33, d: 0.1 },  // D5
            { f: 659.25, d: 0.1 },  // E5
            { f: 698.46, d: 0.1 },  // F5
            { f: 783.99, d: 0.15 }, // G5
            { f: 880.00, d: 0.15 }, // A5
            { f: 987.77, d: 0.15 }, // B5
            { f: 1046.50, d: 0.3 }  // C6
        ];

        let accTime = 0;
        notes.forEach((note) => {
            const time = now + accTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'square';
            osc.frequency.setValueAtTime(note.f, time);

            gain.gain.setValueAtTime(0.04, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + note.d);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(time);
            osc.stop(time + note.d);
            accTime += note.d * 0.85;
        });
    }

    playAchievement() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        // Heroic fanfare chords
        const chords = [
            [523.25, 659.25, 783.99], // C Major
            [587.33, 739.99, 880.00], // D Major
            [783.99, 987.77, 1174.66] // G Major (high)
        ];
        const durations = [0.15, 0.15, 0.45];
        const deltas = [0.15, 0.15, 0.45];

        let accTime = 0;
        chords.forEach((chord, step) => {
            const time = now + accTime;
            const duration = durations[step];

            chord.forEach((freq) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, time);

                // Add slight detune for chorus synth effect
                osc.detune.setValueAtTime((Math.random() - 0.5) * 8, time);

                gain.gain.setValueAtTime(0.02, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(time);
                osc.stop(time + duration);
            });
            accTime += deltas[step];
        });
    }
}

// Global instance
const audioManager = new AudioManager();
GAMES_DATA.audio = audioManager; // Make it accessible globally
window.audioManager = audioManager;
