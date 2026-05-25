/* ============================================================
   3D Gaming Portfolio — main.js
   Application State, Gamification Logic & UI Manager
   ============================================================ */

class Application {
    constructor() {
        this.state = {
            xp: 0,
            level: 1,
            xpPerLevel: 350,
            visited: { pc: false, mobile: false, console: false },
            inspected: [], // Array of game IDs clicked
            isMuted: false,
            achievements: {
                boot: { id: "boot", name: "SYSTEM BOOTED", desc: "Successfully initialize Neural Link.", unlocked: false, icon: "🔌", bonus: 100 },
                pc_view: { id: "pc_view", name: "PC SECTOR MOUNTED", desc: "Access the PC Sector mainframe.", unlocked: false, icon: "🖥️", bonus: 100 },
                mob_view: { id: "mob_view", name: "HANDHELD SYNCED", desc: "Establish sync with Mobile Sector.", unlocked: false, icon: "📱", bonus: 100 },
                con_view: { id: "con_view", name: "CONTROLLER BOUND", desc: "Unlock local Console console.", unlocked: false, icon: "🎮", bonus: 100 },
                explorer: { id: "explorer", name: "GAME EXPLORER", desc: "Explore details of 5 games.", unlocked: false, icon: "🔍", bonus: 150 },
                veteran: { id: "veteran", name: "GAME VETERAN", desc: "Explore details of 15 games.", unlocked: false, icon: "🏆", bonus: 250 },
                completionist: { id: "completionist", name: "GRANDMASTER", desc: "Explore all sectors & review 20 games.", unlocked: false, icon: "👑", bonus: 500 }
            }
        };

        this.activePlatform = null;

        // Bind contexts
        window.appInstance = this;
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.runStartupLoader();
    }

    cacheDOM() {
        this.dom = {
            loader: document.getElementById('loader'),
            loaderBar: document.getElementById('loader-bar'),
            loaderPercent: document.getElementById('loader-percent'),
            loaderText: document.getElementById('loader-text'),
            loaderLogs: document.getElementById('loader-logs'),
            landingPage: document.getElementById('landing-page'),
            pressStart: document.getElementById('press-start'),
            gameInterface: document.getElementById('game-interface'),
            
            // HUD
            playerLevel: document.getElementById('player-level'),
            playerXP: document.getElementById('player-xp'),
            xpBar: document.getElementById('xp-bar'),
            badgesCount: document.getElementById('badge-count'),
            exitBtn: document.getElementById('exit-to-landing'),
            audioMuteBtn: document.getElementById('audio-mute'),

            // Nav
            navBtns: document.querySelectorAll('.nav-btn'),
            minimapCells: document.querySelectorAll('.minimap-cell'),

            // Achievement Panel
            achToggle: document.getElementById('ach-toggle'),
            achModal: document.getElementById('ach-modal'),
            achClose: document.getElementById('ach-close'),
            achList: document.getElementById('ach-list'),
            achNotification: document.getElementById('ach-popup'),
            achPopTitle: document.getElementById('ach-popup-title'),

            // Games directory
            gamesPane: document.getElementById('games-pane'),
            gamesTitle: document.getElementById('games-pane-title'),
            gamesCount: document.getElementById('games-count'),
            closePaneBtn: document.getElementById('close-pane-btn'),
            gamesGrid: document.getElementById('games-grid'),

            // Game Inspector
            inspector: document.getElementById('inspector'),
            inspectClose: document.getElementById('inspect-close'),
            inspectTitle: document.getElementById('inspect-title'),
            inspectPlatform: document.getElementById('inspect-platform'),
            inspectGenre: document.getElementById('inspect-genre'),
            inspectQAStatus: document.getElementById('inspect-qa-status'),
            inspectQANotes: document.getElementById('inspect-qa-notes'),
            inspectHeaderArt: document.getElementById('inspector-header-art'),

            // Overlays
            sysFlash: document.getElementById('system-flash')
        };
    }

    bindEvents() {
        // Landing transitions
        this.dom.pressStart.addEventListener('click', () => this.startGame());

        // Platform navigations (UI tabs & Minimap)
        this.dom.navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.playClickSound();
                const platform = e.currentTarget.dataset.platform;
                this.selectPlatform(platform);
            });
        });

        this.dom.minimapCells.forEach(cell => {
            cell.addEventListener('click', (e) => {
                this.playClickSound();
                const platform = e.currentTarget.dataset.target;
                this.selectPlatform(platform);
            });
        });

        // Close panels
        this.dom.closePaneBtn.addEventListener('click', () => {
            this.playClickSound();
            this.deselectPlatform();
        });

        this.dom.exitBtn.addEventListener('click', () => {
            this.playClickSound();
            this.exitGame();
        });

        // Achievements Modal
        this.dom.achToggle.addEventListener('click', () => {
            this.playClickSound();
            this.dom.achModal.classList.toggle('show');
            this.renderAchievementsList();
        });
        
        this.dom.achClose.addEventListener('click', () => {
            this.playClickSound();
            this.dom.achModal.classList.remove('show');
        });

        // Inspector Modal
        this.dom.inspectClose.addEventListener('click', () => {
            this.playClickSound();
            this.dom.inspector.classList.remove('show');
        });

        this.dom.inspector.addEventListener('click', (e) => {
            if (e.target === this.dom.inspector) {
                this.playClickSound();
                this.dom.inspector.classList.remove('remove');
                this.dom.inspector.classList.remove('show');
            }
        });

        // Audio Mute toggle
        this.dom.audioMuteBtn.addEventListener('click', () => {
            this.toggleAudioMute();
        });

        // Global keybindings
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.dom.inspector.classList.contains('show')) {
                    this.dom.inspector.classList.remove('show');
                } else if (this.activePlatform) {
                    this.deselectPlatform();
                } else if (this.dom.achModal.classList.contains('show')) {
                    this.dom.achModal.classList.remove('show');
                }
            }
        });
    }

    runStartupLoader() {
        const logs = [
            "Initializing Core Engine...",
            "Loading shaders: PC/Mobile/Console...",
            "Parsing database indices: 42 entries found...",
            "Compiling chiptune sound generator...",
            "Mapping interactive 3D layout bounds...",
            "Connecting to MichaelAngeloPFernandez.github.io...",
            "System online. Calibration successful."
        ];

        const labels = [
            "CONNECTING...",
            "LOADING SHADERS...",
            "MOUNTING DATABASE...",
            "MOUNTING AUDIO...",
            "BUILDING 3D CANVAS...",
            "SYNCHRONIZING...",
            "COMPLETE."
        ];

        let progress = 0;
        let logIndex = 0;

        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 8) + 2;

            if (progress > (logIndex + 1) * 14 && logIndex < logs.length) {
                const line = document.createElement('div');
                line.className = 'log-line';
                line.textContent = `[ OK ] ${logs[logIndex]}`;
                this.dom.loaderLogs.appendChild(line);
                this.dom.loaderLogs.scrollTop = this.dom.loaderLogs.scrollHeight;

                this.dom.loaderText.textContent = labels[logIndex];
                logIndex++;
            }

            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);

                setTimeout(() => {
                    this.triggerFlash();
                    if (window.audioManager) window.audioManager.playBoot();
                    
                    this.dom.loader.style.opacity = '0';
                    setTimeout(() => {
                        this.dom.loader.remove();
                    }, 600);
                }, 500);
            }

            this.dom.loaderBar.style.width = `${progress}%`;
            this.dom.loaderPercent.textContent = `${progress}%`;

        }, 120);
    }

    triggerFlash() {
        this.dom.sysFlash.classList.add('flash-active');
        setTimeout(() => {
            this.dom.sysFlash.classList.remove('flash-active');
        }, 500);
    }

    startGame() {
        if (window.audioManager) window.audioManager.playBoot();
        this.triggerFlash();

        this.dom.landingPage.style.opacity = '0';
        setTimeout(() => {
            this.dom.landingPage.classList.add('hidden');
            this.dom.gameInterface.classList.remove('hidden');
            
            // Initialize 3D Scene
            if (window.portfolio3D) {
                window.portfolio3D.init();
            }

            // Award Boot Achievement
            setTimeout(() => {
                this.unlockAchievement('boot');
            }, 1000);
        }, 600);
    }

    exitGame() {
        this.deselectPlatform();
        this.triggerFlash();

        this.dom.landingPage.classList.remove('hidden');
        this.dom.gameInterface.classList.add('hidden');
        setTimeout(() => {
            this.dom.landingPage.style.opacity = '1';
        }, 50);
    }

    selectPlatform(platform) {
        if (this.activePlatform === platform) return;
        this.activePlatform = platform;

        // 1. Update 3D Camera target
        if (window.portfolio3D) {
            window.portfolio3D.zoomTo(platform);
        }

        // 2. Award Explore XP
        if (!this.state.visited[platform]) {
            this.state.visited[platform] = true;
            this.awardXP(150);
            this.updateHUDStats();
            
            // Unlock view achievement
            this.unlockAchievement(`${platform}_view`);
        }

        // 3. Update HUD Nav styling
        this.dom.navBtns.forEach(btn => {
            if (btn.dataset.platform === platform) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 4. Update Minimap active cell
        this.dom.minimapCells.forEach(cell => {
            if (cell.dataset.target === platform) {
                cell.classList.add('active');
            } else {
                cell.classList.remove('active');
            }
        });

        // 5. Build and slide in platform directory list
        this.renderPlatformGames(platform);
        this.dom.gamesPane.classList.add('show');
    }

    deselectPlatform() {
        this.activePlatform = null;

        // Reset Camera
        if (window.portfolio3D) {
            window.portfolio3D.resetZoom();
        }

        // Reset Nav selection
        this.dom.navBtns.forEach(btn => btn.classList.remove('active'));
        this.dom.minimapCells.forEach(cell => cell.classList.remove('active'));

        // Hide directory pane
        this.dom.gamesPane.classList.remove('show');
    }

    renderPlatformGames(platform) {
        // Filter games in database
        const filteredGames = GAMES_DATA.filter(g => g.category === platform);
        
        // Setup pane titles
        this.dom.gamesTitle.textContent = `${platform.toUpperCase()} MAIN DIRECTORY`;
        this.dom.gamesTitle.className = `games-pane-title title-${platform}`;
        this.dom.gamesCount.textContent = `${filteredGames.length} GAMES`;

        // Render card grids
        this.dom.gamesGrid.innerHTML = '';
        filteredGames.forEach((g, idx) => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.dataset.id = g.id;
            card.style.setProperty('--card-glow', g.theme.glow);
            // Set real background cover image
            card.style.backgroundImage = `linear-gradient(to bottom, rgba(6, 9, 19, 0.2) 0%, rgba(6, 9, 19, 0.9) 100%), url('${g.image}')`;
            card.style.animationDelay = `${idx * 40}ms`;

            // Custom indicator layout inside card
            card.innerHTML = `
                <div class="card-icon-overlay">🎮</div>
                <div class="card-content">
                    <h4 class="card-title">${g.title}</h4>
                    <div class="card-meta">
                        <span class="card-genre">${g.genre}</span>
                        <span class="card-badge card-badge-${g.category}">${g.platform}</span>
                    </div>
                </div>
            `;

            // Click listener
            card.addEventListener('click', (e) => {
                this.playClickSound();
                this.inspectGame(g.id);
            });

            this.dom.gamesGrid.appendChild(card);
        });
    }

    inspectGame(gameId) {
        const game = GAMES_DATA.find(g => g.id === gameId);
        if (!game) return;

        // 1. Populate details
        this.dom.inspectTitle.textContent = game.title;
        this.dom.inspectPlatform.textContent = game.platform;
        this.dom.inspectGenre.textContent = game.genre;
        // Set real cover image for inspector header
        this.dom.inspectHeaderArt.style.backgroundImage = `linear-gradient(to bottom, rgba(6, 9, 19, 0.2) 0%, rgba(6, 9, 19, 0.95) 100%), url('${game.image}')`;
        
        // Setup color styling variables for inspector
        this.dom.inspector.style.setProperty('--inspector-color', game.theme.glow);
        // Translate hex to rgb
        const hex = game.theme.glow.replace('#','');
        const r = parseInt(hex.substring(0,2), 16);
        const g = parseInt(hex.substring(2,4), 16);
        const b = parseInt(hex.substring(4,6), 16);
        this.dom.inspector.style.setProperty('--inspector-rgb', `${r}, ${g}, ${b}`);

        // Inject simple game description instead of QA notes list
        this.dom.inspectQANotes.innerHTML = `
            <p class="inspect-desc-text" style="font-family: var(--font-body); font-size: 19px; line-height: 1.5; color: var(--text-muted); padding: 5px 0;">
                ${game.description}
            </p>
        `;

        // 2. Open Modal
        this.dom.inspector.classList.add('show');

        // 3. Award Inspect XP
        if (!this.state.inspected.includes(gameId)) {
            this.state.inspected.push(gameId);
            this.awardXP(50);
            this.updateHUDStats();
            
            // Check milestones
            this.checkInspectMilestones();
        }
    }

    awardXP(amount) {
        this.state.xp += amount;
        
        // Calculate dynamic level
        const newLevel = Math.floor(this.state.xp / this.state.xpPerLevel) + 1;
        if (newLevel > this.state.level) {
            this.state.level = newLevel;
            this.triggerLevelUp();
        }
    }

    triggerLevelUp() {
        if (window.audioManager) window.audioManager.playLevelUp();
        
        // visual flash on level-badge
        const badge = document.querySelector('.level-badge') || this.dom.playerLevel.parentElement;
        badge.style.animation = 'none';
        void badge.offsetWidth; // Reflow
        badge.style.animation = 'level-glow 1.5s ease-out';

        // Add dynamically injected level keyframe styling
        if (!document.getElementById('level-animation-style')) {
            const style = document.createElement('style');
            style.id = 'level-animation-style';
            style.textContent = `
                @keyframes level-glow {
                    0% { box-shadow: 0 0 0px var(--neon-cyan); scale: 1; border-color: var(--neon-cyan); }
                    30% { box-shadow: 0 0 25px var(--neon-gold), inset 0 0 10px var(--neon-gold); scale: 1.2; border-color: var(--neon-gold); color: var(--neon-gold); }
                    100% { box-shadow: 0 0 0px var(--neon-cyan); scale: 1; border-color: var(--neon-cyan); }
                }
            `;
            document.head.appendChild(style);
        }

        this.updateHUDStats();
    }

    updateHUDStats() {
        this.dom.playerLevel.textContent = this.state.level;
        this.dom.playerXP.textContent = this.state.xp;
        
        const xpInCurrentLevel = this.state.xp % this.state.xpPerLevel;
        const pct = (xpInCurrentLevel / this.state.xpPerLevel) * 100;
        this.dom.xpBar.style.width = `${pct}%`;

        // Update badges unlocked (number of achievements)
        const unlockedCount = Object.values(this.state.achievements).filter(a => a.unlocked).length;
        this.dom.badgesCount.textContent = `${unlockedCount}/7`;
    }

    checkInspectMilestones() {
        const count = this.state.inspected.length;
        
        if (count >= 5) {
            this.unlockAchievement('explorer');
        }
        if (count >= 15) {
            this.unlockAchievement('veteran');
        }
        
        // Grandmaster completion check
        const visitedAll = Object.values(this.state.visited).every(v => v === true);
        if (visitedAll && count >= 20) {
            this.unlockAchievement('completionist');
        }
    }

    unlockAchievement(id) {
        const ach = this.state.achievements[id];
        if (!ach || ach.unlocked) return;

        ach.unlocked = true;
        this.awardXP(ach.bonus);
        this.updateHUDStats();

        // Play Synthesized sound
        if (window.audioManager) window.audioManager.playAchievement();

        // Show top notification
        this.dom.achPopTitle.textContent = ach.name;
        this.dom.achNotification.classList.remove('show');
        void this.dom.achNotification.offsetWidth; // Reflow trigger
        this.dom.achNotification.classList.add('show');

        setTimeout(() => {
            this.dom.achNotification.classList.remove('show');
        }, 4000);

        // Check if completionist is unlocked now
        if (id !== 'completionist') {
            this.checkInspectMilestones();
        }
    }

    renderAchievementsList() {
        this.dom.achList.innerHTML = '';
        
        Object.values(this.state.achievements).forEach(ach => {
            const item = document.createElement('div');
            item.className = `ach-item ${ach.unlocked ? 'unlocked' : 'locked'}`;

            item.innerHTML = `
                <div class="ach-badge-icon">${ach.icon}</div>
                <div class="ach-meta">
                    <div class="ach-name">${ach.name}</div>
                    <div class="ach-desc">${ach.desc}</div>
                </div>
                <div class="ach-xp-reward" style="font-family: var(--font-mono); font-size: 11px; color: ${ach.unlocked ? 'var(--neon-gold)' : 'var(--text-muted)'}">
                    +${ach.bonus} XP
                </div>
            `;
            this.dom.achList.appendChild(item);
        });
    }

    toggleAudioMute() {
        const isMuted = window.audioManager.toggleMute();
        this.state.isMuted = isMuted;

        if (isMuted) {
            this.dom.audioMuteBtn.classList.add('muted');
            this.dom.audioMuteBtn.innerHTML = '🔇';
        } else {
            this.dom.audioMuteBtn.classList.remove('muted');
            this.dom.audioMuteBtn.innerHTML = '🔊';
            // Play a click as confirmation
            this.playClickSound();
        }
    }

    playClickSound() {
        if (window.audioManager) window.audioManager.playClick();
    }
}

// Instantiate on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const app = new Application();
    app.init();
    app.updateHUDStats();
});
