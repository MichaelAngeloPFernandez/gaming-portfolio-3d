# 🕹️ Interactive 3D Gaming Portfolio

An interactive, gamified 3D portfolio website showcasing video games played, categorized by platform (PC, Mobile, Console). This project is custom-tailored to highlight system analytical thinking, passion, and readiness for a **Junior Video Game QA Tester** role.

## 🌟 Key Features

* **3D Platform Sectors (Three.js)**: Features three floating, glowing wireframe models representing platforms (PC Rig, Smartphone, Gamepad Sphere) inside a space dust particle field. Hovering or clicking triggers dynamic camera transitions.
* **QA Tester Perspective**: Every game entry features dedicated **QA Tester Notes** highlighting specific mechanics, edge cases, and performance attributes audited (e.g. redstone repeating delay ticks in Minecraft, frame-pacing in GTA V, move undo stacks in Chess).
* **Gamified HUD**: Includes a level-up XP bar, stat chips tracking badges unlocked, and a progress status map.
* **Synthesized 8-Bit Audio (Web Audio API)**: Sound effects are synthesized programmatically in real-time. Includes chiptune boot sound, click ticks, level-up arpeggios, and achievement fanfares.
* **Achievements System**: Features 7 unlockable badges reflecting exploration and auditing metrics:
  1. `SYSTEM BOOTED` (Started the app)
  2. `PC RIG MOUNTED` (Accessed PC sector)
  3. `HANDHELD SYNCED` (Synchronized Mobile sector)
  4. `CONTROLLER BOUND` (Mounted Console sector)
  5. `QA ASSISTANT` (Inspected 3 game QA notes)
  6. `QA LEAD TESTER` (Inspected 10 game QA notes)
  7. `GRANDMASTER` (Viewed all sectors and audited 15 games)
* **High-Fidelity Aesthetics**: Sleek glassmorphic components, cyber neon status glow accents, header glitches, and responsive screen-scaling layouts.

## 📂 Project Structure

```
gaming-portfolio-3d/
├── index.html          # Main HTML entry and HUD framework
├── README.md           # Documentation
├── push.bat            # Helper script to initialize and link Git repository
├── assets/
│   └── icons/          # Vector SVG icons for platforms and badges
│       ├── pc.svg
│       ├── mobile.svg
│       ├── console.svg
│       ├── trophy.svg
│       └── logo.svg
├── games/
│   └── games-data.js   # Game database and custom QA Tester Notes
├── styles/
│   ├── theme.css       # Core styling variables, colors, and fonts
│   └── main.css        # HUD overlays, animations, cards, and breakpoints
└── scripts/
    ├── main.js         # Application state, XP calculations, and achievements
    ├── audio.js        # Web Audio API synthesizers for 8-bit sound effects
    └── three-scene.js  # Three.js rendering, particles, raycasting, and lerps
```

## 🚀 Running Locally

This project is built using vanilla web technologies (HTML5, CSS3, Javascript, Three.js). Since it imports CDN assets and performs raycasting / coordinate projection on local canvases, running via a local web server is highly recommended to prevent CORS blocks:

### Option 1: Python (Easiest)
If you have Python installed, run this command in the project directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 2: NodeJS / NPX
If you have NodeJS installed, run:
```bash
npx http-server . -p 8000
```
Then visit `http://localhost:8000`.

## 📦 Pushing to GitHub

We have included a helper batch script `push.bat` to initialize and configure Git. Follow these steps to upload:

1. Create a new empty repository named `gaming-portfolio-3d` on your GitHub account (`https://github.com/MichaelAngeloPFernandez`). **Do not check initialize with README/License**.
2. Run `push.bat` in this directory, or run the following commands manually:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of 3D Gaming Portfolio website"
   git branch -M main
   git remote add origin https://github.com/MichaelAngeloPFernandez/gaming-portfolio-3d.git
   ```
3. Run this final command to push:
   ```bash
   git push -u origin main
   ```
