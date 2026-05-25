/* ============================================================
   3D Gaming Portfolio — Game Database
   Contains categorized games and QA Tester Notes.
   ============================================================ */

const GAMES_DATA = [
    // PC PLATFORM (14 games)
    {
        id: "minecraft",
        title: "Minecraft",
        category: "pc",
        platform: "PC",
        genre: "Sandbox / Survival",
        theme: {
            from: "#2c5e2e",
            to: "#a0522d",
            glow: "#39ff14"
        },
        qaNotes: [
            "Tested boundary conditions of chunk rendering and loading delays during rapid movement.",
            "Verified tick-rate calculations of redstone repeater circuits and piston activation timings.",
            "Investigated physics engine interactions, specifically voxel collision meshes and item-dropping velocity.",
            "Audited memory leak patterns under high entity-count spawns and optimized chunk storage limits."
        ]
    },
    {
        id: "prototype-1-2",
        title: "Prototype 1 & 2",
        category: "pc",
        platform: "PC",
        genre: "Action-Adventure / Hack & Slash",
        theme: {
            from: "#4a0d0d",
            to: "#1a0404",
            glow: "#ff0000"
        },
        qaNotes: [
            "Evaluated action combat input buffering during rapid, multi-key combo execution.",
            "Monitored ragdoll physics stability and mesh deformation during dense, high-impact environment destruction.",
            "Tested camera occlusion systems and pitch/yaw speed curves in tight alleys and skyscrapers.",
            "Analyzed frame-pacing and texture streaming during high-speed gliding across Manhattan."
        ]
    },
    {
        id: "green-hell",
        title: "Green Hell",
        category: "pc",
        platform: "PC",
        genre: "Survival Simulation",
        theme: {
            from: "#1e3f20",
            to: "#0d1a0e",
            glow: "#32cd32"
        },
        qaNotes: [
            "Verified survival status calculations (macronutrients: fats, carbs, proteins) against in-game timers.",
            "Tested animal AI pathfinding meshes on extremely rugged, vertical jungle terrain and water interfaces.",
            "Audited dynamic weather shader transitions (sun to heavy rain) for performance drops and asset popping.",
            "Checked item storage collision boxes, ensuring items dropped inside shelters do not clip through terrain."
        ]
    },
    {
        id: "csgo",
        title: "CS:GO / Counter-Strike 2",
        category: "pc",
        platform: "PC",
        genre: "Tactical FPS",
        theme: {
            from: "#1a2c3a",
            to: "#de9b35",
            glow: "#ffd700"
        },
        qaNotes: [
            "Analyzed weapon recoil pattern spray consistency across varying tick rates (64-tick vs 128-tick servers).",
            "Tested hitbox registration on climbing animations, ladder transitions, and jumping states.",
            "Investigated smoke grenade particle opacity levels, checking for rendering exploitation and mesh clipping.",
            "Audited sound propagation physics, testing spatial audio occlusion through walls and differing surface materials."
        ]
    },
    {
        id: "pubg-pc",
        title: "PUBG (PC)",
        category: "pc",
        platform: "PC",
        genre: "Battle Royale",
        theme: {
            from: "#2e3b2e",
            to: "#1c1c1c",
            glow: "#e58a13"
        },
        qaNotes: [
            "Tested vehicle suspension physics stability and tipping thresholds over highly uneven terrain.",
            "Audited long-range Level of Detail (LOD) assets, verifying terrain meshes match physical collision limits.",
            "Tested client-server replication of projectile trajectory physics, wind resistance, and gravity drops.",
            "Investigated camera clipping through buildings while in prone position against structural corners."
        ]
    },
    {
        id: "rainbow-six-siege-pc",
        title: "Rainbow Six Siege (PC & Mobile)",
        category: "pc",
        platform: "PC / Mobile",
        genre: "Tactical Shooter",
        theme: {
            from: "#0e1a30",
            to: "#1c2e4a",
            glow: "#4da6ff"
        },
        qaNotes: [
            "Tested procedural wall destruction calculations, verifying clipping physics for debris and line-of-sight.",
            "Audited sound propagation pathways, checking how auditory cues travel around door frames and bullet holes.",
            "Cross-platform synchronization testing, validating match state integrity and server latency.",
            "Verified UI scaling and button layout responsiveness across high-DPI PC monitors and mobile screens."
        ]
    },
    {
        id: "burnout",
        title: "Burnout",
        category: "pc",
        platform: "PC",
        genre: "Racing / Arcade",
        theme: {
            from: "#a8201a",
            to: "#141115",
            glow: "#ff5500"
        },
        qaNotes: [
            "Tested collision bounding boxes during high-speed intersections to trigger 'Takedown' events.",
            "Verified action-camera transitions (slow-motion cinematic triggers) for stability and visual artifacting.",
            "Checked motion blur shader pipelines under maximum speed thresholds to ensure frame rates remain above 60fps.",
            "Audited force feedback telemetry signals to steering controllers, testing polling responsiveness."
        ]
    },
    {
        id: "nfs-underground",
        title: "NFS Underground",
        category: "pc",
        platform: "PC",
        genre: "Racing / Street",
        theme: {
            from: "#22092c",
            to: "#000000",
            glow: "#ff00ff"
        },
        qaNotes: [
            "Tested car modification skeletal meshes, identifying cosmetic part clipping across 50+ body kits.",
            "Verified nitrous-oxide (NOS) speed multipliers, camera FOV changes, and tail-light trail shaders.",
            "Audited wet asphalt reflection shaders and rain drop particle systems under rapid speed adjustments.",
            "Inspected environment barrier collision zones, ensuring vehicles do not phase out of track boundaries."
        ]
    },
    {
        id: "standoff-2",
        title: "Standoff 2",
        category: "pc",
        platform: "PC (Emulated)",
        genre: "First-Person Shooter",
        theme: {
            from: "#3c1518",
            to: "#1a0607",
            glow: "#da1e28"
        },
        qaNotes: [
            "Tested touch-to-key emulator mapping configs for input latency and command queue conflicts.",
            "Checked weapon recoil consistency when running at high frame rates (120 FPS+ emulated layout).",
            "Audited visual rendering performance and HUD scaling on virtualized Android operating systems.",
            "Monitored network packet loss recovery systems during rapid rotation of character view."
        ]
    },
    {
        id: "starcraft",
        title: "Starcraft",
        category: "pc",
        platform: "PC",
        genre: "Real-Time Strategy",
        theme: {
            from: "#003b46",
            to: "#07575b",
            glow: "#66fcf1"
        },
        qaNotes: [
            "Audited unit pathfinding algorithms in extreme bottle-neck chokepoints with 200+ active units.",
            "Tested Fog-of-War grid updates, verifying map-uncover delays do not leak enemy coordinates in memory.",
            "Tested APM (Actions Per Minute) high-input buffer queues, ensuring commands are not dropped or corrupted.",
            "Checked UI selection box bounding volumes under high sprite density environments."
        ]
    },
    {
        id: "war-thunder-mobile",
        title: "War Thunder (Mobile & PC)",
        category: "pc",
        platform: "PC / Mobile",
        genre: "Vehicular Combat",
        theme: {
            from: "#2b2d42",
            to: "#1d3557",
            glow: "#e63946"
        },
        qaNotes: [
            "Validated flight physics modeling, testing lift, drag, and stall calculations against mock aeronautic tables.",
            "Verified volumetric armor penetration calculations, ensuring shell angles match displacement formulas.",
            "Audited tank tread physics over mud, ice, and pavement terrain variables on mobile processors.",
            "Tested touchscreen joystick sensitivity curves against physical mouse flight mapping."
        ]
    },
    {
        id: "resident-evil-4",
        title: "Resident Evil 4",
        category: "pc",
        platform: "PC",
        genre: "Survival Horror / Action",
        theme: {
            from: "#1c1c1c",
            to: "#2d0b00",
            glow: "#b30000"
        },
        qaNotes: [
            "Tested third-person over-the-shoulder camera positioning, preventing clipping through thin wall surfaces.",
            "Verified Quick-Time Event (QTE) input frame windows, checking for differences between 30 and 60 FPS modes.",
            "Audited interactive laser pointer rendering logic and distance hit-check raycast ranges.",
            "Checked keyframe skeletal animation transitions when interrupting reloads with melee kicks."
        ]
    },
    {
        id: "gta-san-andreas",
        title: "GTA San Andreas",
        category: "pc",
        platform: "PC",
        genre: "Open World / Action",
        theme: {
            from: "#1e351f",
            to: "#000000",
            glow: "#00ff66"
        },
        qaNotes: [
            "Tested legacy physics bugs (e.g., swimming speed, vehicle weight) running on modern 60+ FPS configs.",
            "Audited ambient audio sound-trigger zone grids, identifying spatial fading volume bugs.",
            "Investigated cheat code script interpreter queues, checking for game memory heap corruption.",
            "Tested local police spawning algorithms, verifying visibility occlusion bounds function correctly."
        ]
    },
    {
        id: "gta-v",
        title: "GTA V",
        category: "pc",
        platform: "PC",
        genre: "Open World / Action",
        theme: {
            from: "#102d15",
            to: "#0b0c10",
            glow: "#1f2833"
        },
        qaNotes: [
            "Measured dynamic character-switching load timelines, identifying texture-load bottleneck points.",
            "Verified script state transitions during complex multi-stage heist missions under player deviation.",
            "Audited underwater buoyancy physics meshes and vehicle control constraints.",
            "Checked AI traffic pathfinding responses to road blockages and player-generated hazards."
        ]
    },

    // MOBILE PLATFORM (23 games)
    {
        id: "chess",
        title: "Chess",
        category: "mobile",
        platform: "Mobile",
        genre: "Abstract Strategy",
        theme: {
            from: "#2c3e50",
            to: "#1a252f",
            glow: "#ffffff"
        },
        qaNotes: [
            "Validated complete move rule evaluation logic (castling, en passant, promotion, checkmate, stalemate).",
            "Tested action undo/redo history stacks, verifying state persistence and memory allocation.",
            "Audited network board synchronicity, verifying move parsing under unstable cellular packet drop conditions.",
            "Checked board interaction coordinates, ensuring drag-and-drop actions align with grid cells."
        ]
    },
    {
        id: "game-of-the-generals",
        title: "Game of the Generals",
        category: "mobile",
        platform: "Mobile",
        genre: "Board / Strategy",
        theme: {
            from: "#1b4d3e",
            to: "#0d2b20",
            glow: "#00ff88"
        },
        qaNotes: [
            "Verified hidden ranking mask integrity, ensuring piece ranks are never exposed in client RAM.",
            "Tested referee arbiter comparison logic, verifying correct win/loss/draw outcomes for all pieces.",
            "Checked drag-and-drop touch response latencies on screen edges and notch overlays.",
            "Audited game-room setup states, testing matchmaking lobby persistence on disconnected reconnects."
        ]
    },
    {
        id: "call-of-war",
        title: "Call of War",
        category: "mobile",
        platform: "Mobile",
        genre: "Grand Strategy / RTS",
        theme: {
            from: "#3e2723",
            to: "#1b0000",
            glow: "#d32f2f"
        },
        qaNotes: [
            "Tested database sync consistency for multi-day, real-time strategy campaigns with 500+ active entities.",
            "Verified push notification service triggers, ensuring correct timestamp matching for resource finishes.",
            "Audited map camera zoom levels and coordinate scrolling performance on low-spec mobile chips.",
            "Tested server reconnect algorithms, verifying user commands queue correctly when offline."
        ]
    },
    {
        id: "albion-online",
        title: "Albion Online",
        category: "mobile",
        platform: "Mobile / PC",
        genre: "MMORPG / Sandbox",
        theme: {
            from: "#5d4037",
            to: "#2d1b10",
            glow: "#ffb300"
        },
        qaNotes: [
            "Evaluated mobile HUD element layout and scaling on small screens during high-density player events.",
            "Tested touch-based spell target indicators, validating drag-to-aim accuracy and ground mesh projection.",
            "Monitored dynamic asset streaming from local storage over cellular connections during zone transitions.",
            "Checked virtual joystick drift boundaries, verifying navigation logic returns to zero state."
        ]
    },
    {
        id: "toram-online",
        title: "Toram Online",
        category: "mobile",
        platform: "Mobile",
        genre: "MMORPG / Anime",
        theme: {
            from: "#4a148c",
            to: "#1a0033",
            glow: "#e040fb"
        },
        qaNotes: [
            "Tested skeletal mesh scaling and outfit combination clipping for highly customized characters.",
            "Verified battle action state syncing in multiplayer party raid instances under varied ping rates.",
            "Audited localized language strings, checking for UI text truncation and word wrap in menus.",
            "Tested asset memory garbage collection during teleportation across 10+ distinct world zones."
        ]
    },
    {
        id: "dragon-raja",
        title: "Dragon Raja",
        category: "mobile",
        platform: "Mobile",
        genre: "MMORPG / Cyberpunk",
        theme: {
            from: "#006064",
            to: "#001a1c",
            glow: "#00e5ff"
        },
        qaNotes: [
            "Evaluated Unreal Engine mobile graphics profiles, monitoring thermal impact and battery depletion curves.",
            "Tested camera pitch/yaw collision rules against interior walls and character models.",
            "Audited auto-pathing navigation meshes, ensuring player character does not get caught on geometry edges.",
            "Checked physics-based hair and clothing animations during action combat frame transitions."
        ]
    },
    {
        id: "mobile-legends",
        title: "Mobile Legends: Bang Bang",
        category: "mobile",
        platform: "Mobile",
        genre: "MOBA",
        theme: {
            from: "#0d47a1",
            to: "#001b44",
            glow: "#29b6f6"
        },
        qaNotes: [
            "Tested hit-registration grids of skillshots and auto-attacks during high-frequency 5v5 teamfights.",
            "Audited network ping compensation buffers, checking for desync between visual indicators and server states.",
            "Tested touch virtual joystick tracking area responsiveness and dynamic centering.",
            "Verified frame pacing and GPU load scaling on mid-tier mobile chipsets."
        ]
    },
    {
        id: "arena-breakout",
        title: "Arena Breakout",
        category: "mobile",
        platform: "Mobile",
        genre: "Tactical Extraction Shooter",
        theme: {
            from: "#212121",
            to: "#0a0a0a",
            glow: "#757575"
        },
        qaNotes: [
            "Audited positional sound design and audio occlusion, verifying footstep directionality and range.",
            "Tested touchscreen weapon recoil control, sway calculations, and ADS transition timings.",
            "Checked grid-based inventory drag-and-drop systems, testing for item merging or duplication bugs.",
            "Verified server-side hit validation and lag compensation algorithms under variable mobile ping."
        ]
    },
    {
        id: "farlight-84",
        title: "Farlight / Farlight 84",
        category: "mobile",
        platform: "Mobile",
        genre: "Battle Royale / Hero Shooter",
        theme: {
            from: "#ff6f00",
            to: "#2d0f00",
            glow: "#ffab40"
        },
        qaNotes: [
            "Tested Jetpack boosting physics trajectories, wall collision detection, and air-dash frame resets.",
            "Verified vehicle weapon collision volumes and passenger seating placement transitions.",
            "Audited screen frame pacing and thermal throttling patterns on high-end Android devices.",
            "Checked hero skill trigger animations, verifying action cancels and cooldown timers."
        ]
    },
    {
        id: "pokemon-unite",
        title: "Pokémon Unite",
        category: "mobile",
        platform: "Mobile / Switch",
        genre: "MOBA",
        theme: {
            from: "#311b92",
            to: "#0a0033",
            glow: "#7c4dff"
        },
        qaNotes: [
            "Tested score-depositing animation frames, verifying interruption logic by basic attacks and status effects.",
            "Checked spawn timers and navigation behavior of wild Pokemon objectives (Rayquaza, Registeel).",
            "Audited held-item stat modifier multipliers, validating math calculations match UI info cards.",
            "Tested cross-platform lobby integrations, checking chat message formatting and invite links."
        ]
    },
    {
        id: "bapbap",
        title: "Bapbap",
        category: "mobile",
        platform: "Mobile",
        genre: "Top-down Battle Royale",
        theme: {
            from: "#1b5e20",
            to: "#002700",
            glow: "#66bb6a"
        },
        qaNotes: [
            "Tested top-down twin-stick action control mapping and projectile direction line indicators.",
            "Verified end-of-round score multipliers, currency awards, and database update transactions.",
            "Audited memory allocation overhead, checking for memory leaks during long multi-game sessions.",
            "Checked hitbox bounds of obstacles, ensuring project objects bounce cleanly without clipping."
        ]
    },
    {
        id: "cytus-2",
        title: "Cytus II",
        category: "mobile",
        platform: "Mobile",
        genre: "Rhythm",
        theme: {
            from: "#212121",
            to: "#002d33",
            glow: "#00e5ff"
        },
        qaNotes: [
            "Validated beat-map sound sync accuracy across multiple Android audio latency engine configurations.",
            "Tested multi-touch hit detection (up to 5 simultaneous touch points) and score multiplier zones.",
            "Audited visual scan-line animation frame alignment, verifying it matches audio tracks within 5ms.",
            "Checked system interrupt notifications (incoming calls, alarms) and automatic game pause triggers."
        ]
    },
    {
        id: "shadow-fight",
        title: "Shadow Fight",
        category: "mobile",
        platform: "Mobile",
        genre: "Fighting / Action RPG",
        theme: {
            from: "#1a1a1a",
            to: "#05080c",
            glow: "#50b3ff"
        },
        qaNotes: [
            "Tested physics-based procedural animation blending, verifying weapon impact recoil poses.",
            "Checked weapon-specific collision hitboxes and visual frame timings for blocks and parries.",
            "Audited AI behavioral trees, verifying block/attack cycles across 5 difficulty presets.",
            "Tested equipment stat progression formulas, verifying calculations against damage numbers."
        ]
    },
    {
        id: "tekken-mobile",
        title: "Tekken Mobile",
        category: "mobile",
        platform: "Mobile",
        genre: "Fighting",
        theme: {
            from: "#4a0000",
            to: "#110000",
            glow: "#ff2a2a"
        },
        qaNotes: [
            "Evaluated frames-per-second lock consistency under heavy particle attack triggers.",
            "Tested input buffer queue for rapid combo commands, verifying animation execution order.",
            "Checked character select textures, auditing texture streaming delays and model swap states.",
            "Verified touchscreen hit/hurtbox interaction geometry during special move sets."
        ]
    },
    {
        id: "pubg-mobile",
        title: "PUBG Mobile",
        category: "mobile",
        platform: "Mobile",
        genre: "Battle Royale",
        theme: {
            from: "#3e2723",
            to: "#1c0d02",
            glow: "#ffaa00"
        },
        qaNotes: [
            "Tested mobile gyroscope aiming precision, drift correction, and axis scaling settings.",
            "Audited client-side drawing limitations, checking rendering distances of players and grass objects.",
            "Tested vehicle controls, monitoring frame pacing drops when vehicles impact map objects.",
            "Checked voice communication channel latency and audio quality under mobile data connections."
        ]
    },
    {
        id: "master-duel",
        title: "Master Duel",
        category: "mobile",
        platform: "Mobile / PC / Console",
        genre: "Card / Strategy",
        theme: {
            from: "#1b2d3c",
            to: "#050e14",
            glow: "#ffd700"
        },
        qaNotes: [
            "Verified card effect sequence triggers (Chain Links), ensuring correct execution order.",
            "Tested turn phase timer limits, validating client-server state checks during phase transitions.",
            "Audited local database image caching, checking load times of high-res card artwork textures.",
            "Tested card deck editor UI grid sorting, searching, and filter performance."
        ]
    },
    {
        id: "smash-legends",
        title: "Smash Legends",
        category: "mobile",
        platform: "Mobile / PC",
        genre: "Action / Brawler",
        theme: {
            from: "#4a148c",
            to: "#004d40",
            glow: "#00e676"
        },
        qaNotes: [
            "Tested arena ring-out boundaries, checking knockback vector calculations on low HP levels.",
            "Verified knockback distance scaling against character health percentages.",
            "Audited matchmaking queue stability and automated fill algorithms.",
            "Tested skill cooldown visual indicators, verifying animations align with active timers."
        ]
    },
    {
        id: "crossfire-legends",
        title: "Crossfire Legends",
        category: "mobile",
        platform: "Mobile",
        genre: "First-Person Shooter",
        theme: {
            from: "#263238",
            to: "#10171a",
            glow: "#cfd8dc"
        },
        qaNotes: [
            "Tested firing rate frame synchronization across mobile processor architectures.",
            "Verified headshot hitbox geometry alignment, tracking camera view adjustments.",
            "Audited transition duration and network sync from lobby screen to active game state.",
            "Checked touch movement drag sensitivity scaling on multi-touch devices."
        ]
    },
    {
        id: "one-piece-bounty-rush",
        title: "One Piece Bounty Rush",
        category: "mobile",
        platform: "Mobile",
        genre: "Action / MOBA",
        theme: {
            from: "#004d40",
            to: "#001b10",
            glow: "#a7ffeb"
        },
        qaNotes: [
            "Tested capture point bar animation scaling and capture zone bounds.",
            "Verified network replication systems for real-time character positioning and rotation.",
            "Audited dynamic map hazard trigger zones (e.g., rising water, falling rocks) for correct timing.",
            "Tested target lock-on camera behavior in crowded character zones."
        ]
    },
    {
        id: "garena-delta-force",
        title: "Garena Delta Force",
        category: "mobile",
        platform: "Mobile",
        genre: "Tactical FPS",
        theme: {
            from: "#2e3b2e",
            to: "#0c150c",
            glow: "#76ff03"
        },
        qaNotes: [
            "Evaluated tactical device deployment physics and mesh collision boundaries.",
            "Tested projectile trajectory replication algorithms on server and clients.",
            "Audited mobile graphical presets, benchmarking performance profiles across varying configurations.",
            "Checked touchscreen aiming drag coefficient calculations under high target velocities."
        ]
    },
    {
        id: "sao-integral-factor",
        title: "SAO Integral Factor",
        category: "mobile",
        platform: "Mobile",
        genre: "Action RPG",
        theme: {
            from: "#1a237e",
            to: "#000030",
            glow: "#5c6bc0"
        },
        qaNotes: [
            "Checked quest objective trigger points, ensuring state machine logs resolve correctly on map transitions.",
            "Tested multi-player dungeon party loading, auditing scene asset management.",
            "Audited character skill cooldown timers, verifying local HUD display matches server records.",
            "Tested virtual button hitbox bounds for multi-touch finger inputs."
        ]
    },
    {
        id: "mir4",
        title: "Mir4",
        category: "mobile",
        platform: "Mobile / PC",
        genre: "MMORPG / Blockchain",
        theme: {
            from: "#3e2723",
            to: "#0d0600",
            glow: "#d84315"
        },
        qaNotes: [
            "Tested auto-mining and auto-combat pathfinding navigation meshes in complex caves.",
            "Verified PVP flag state changes, checking attack authorization boundaries in safe/hostile zones.",
            "Audited database transaction queues during high volume character item inventory trades.",
            "Tested server replication logs for massive, open-world boss fights."
        ]
    },
    {
        id: "cod-mobile",
        title: "Call of Duty Mobile",
        category: "mobile",
        platform: "Mobile",
        genre: "First-Person Shooter",
        theme: {
            from: "#1c2833",
            to: "#05080c",
            glow: "#f39c12"
        },
        qaNotes: [
            "Analyzed slide-jump movement mechanics, testing animation frames and velocity decay formulas.",
            "Tested target aim-assist tracking curves, checking magnet range tolerances on multiple zoom scopes.",
            "Audited map sound design propagation, ensuring steps reflect spatial coordinates accurately.",
            "Checked weapons loadout asset loading speeds, checking for gun-model pop-in during warmups."
        ]
    },

    // CONSOLE PLATFORM (3 games)
    {
        id: "the-warriors",
        title: "The Warriors",
        category: "console",
        platform: "Console (PS2 / Xbox)",
        genre: "Beat 'em Up / Action",
        theme: {
            from: "#3e0d00",
            to: "#1a0500",
            glow: "#ff5500"
        },
        qaNotes: [
            "Tested local cooperative split-screen performance, monitoring dynamic camera division bounds.",
            "Verified environment interaction bounds, auditing grabbing and throwing objects physics.",
            "Audited combat combo buffer windows, checking for drop frame impacts on inputs.",
            "Tested mini-game input timers (lock picking, spray painting), validating timing curves."
        ]
    },
    {
        id: "def-jam",
        title: "Def Jam: Fight for NY",
        category: "console",
        platform: "Console (PS2 / Xbox)",
        genre: "Fighting / Wrestling",
        theme: {
            from: "#1c2321",
            to: "#000000",
            glow: "#888888"
        },
        qaNotes: [
            "Verified interactive crowd collision boundaries and environmental weapon mechanics.",
            "Tested skeletal deformation meshes and character models during grapple submission holds.",
            "Audited ring-out trigger zones, verifying victory conditions are reached immediately.",
            "Checked audio trigger consistency during cinematic knockout sequence playbacks."
        ]
    },
    {
        id: "guitar-hero",
        title: "Guitar Hero",
        category: "console",
        platform: "Console (PS2 / Xbox / Wii)",
        genre: "Rhythm",
        theme: {
            from: "#2d004d",
            to: "#0c0014",
            glow: "#a600ff"
        },
        qaNotes: [
            "Tested peripheral hardware input polling frequency, checking for input drop frames.",
            "Verified note chart scroll speed calibration, testing delay adjust settings down to 1ms.",
            "Audited multitrack audio stems, verifying correct volume mute/unmute states on missed notes.",
            "Checked multiplier star power triggers, validating graphics performance when overlays load."
        ]
    }
];
