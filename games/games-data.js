/* ============================================================
   3D Gaming Portfolio — Game Database
   Contains categorized games, descriptions, and cover image URLs.
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
            to: "#1a0e0d",
            glow: "#39ff14"
        },
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=500&q=80",
        description: "A creative voxel sandbox game where players mine resources, craft tools, and build structures in a procedurally generated open-world environment."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/115320/header.jpg",
        description: "An action-heavy open-world game following shape-shifting protagonists who run up buildings, consume enemies, and fight biological infections in Manhattan."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/815370/header.jpg",
        description: "A hyper-realistic survival simulator set in the Amazon jungle, demanding careful management of physical health, nutrition, and mental stability."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
        description: "A premiere competitive 5v5 tactical first-person shooter centered on bomb defusal and hostage rescue, demanding precise team coordination and recoil aiming control."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
        description: "The pioneer battle royale game where 100 players parachute onto a massive map, loot weapons, and fight to be the last survivor as the play zone shrinks."
    },
    {
        id: "rainbow-six-siege-pc",
        title: "Rainbow Six Siege",
        category: "pc",
        platform: "PC / Mobile",
        genre: "Tactical Shooter",
        theme: {
            from: "#0e1a30",
            to: "#1c2e4a",
            glow: "#4da6ff"
        },
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg",
        description: "A highly tactical team shooter focusing on close-quarters combat, breach-and-defend operators, and procedurally destructible walls and floors."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1238080/header.jpg",
        description: "An arcade racing game famous for aggressive speed limits, crash-heavy mechanics, takedowns, and spectacular slow-motion crash cinematics."
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
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=500&q=80",
        description: "A legendary street racing game focusing on tuner car culture, nighttime neon tracks, extensive cosmetic car customization, and high-speed drift events."
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
        image: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&w=500&q=80",
        description: "A legendary sci-fi real-time strategy game focusing on resource gathering, base building, and massive skirmishes between Terran, Zerg, and Protoss factions."
    },
    {
        id: "war-thunder-mobile",
        title: "War Thunder",
        category: "pc",
        platform: "PC / Mobile",
        genre: "Vehicular Combat",
        theme: {
            from: "#2b2d42",
            to: "#1d3557",
            glow: "#e63946"
        },
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236390/header.jpg",
        description: "A massive multiplayer vehicular combat simulator featuring detailed WW2 and modern tanks, fighter jets, and naval fleets in cooperative maps."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
        description: "An action-survival horror masterpiece following agent Leon S. Kennedy on a rescue mission in a rural European village overrun by parasitic cultists."
    },
    {
        id: "resident-evil-4-mobile",
        title: "Resident Evil 4",
        category: "mobile",
        platform: "iPhone / Mobile",
        genre: "Survival Horror / Action",
        theme: {
            from: "#1c1c1c",
            to: "#2d0b00",
            glow: "#b30000"
        },
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
        description: "An action-survival horror masterpiece following agent Leon S. Kennedy on a rescue mission in a rural European village overrun by parasitic cultists."
    },
    {
        id: "bapbap",
        title: "Bapbap",
        category: "pc",
        platform: "PC",
        genre: "Top-down Battle Royale",
        theme: {
            from: "#1b5e20",
            to: "#002700",
            glow: "#66bb6a"
        },
        image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=500&q=80",
        description: "A top-down arcade battle royale game focusing on casual isometric controls, rapid matches, scoring maps, and unique weapon skill-shots."
    },
    {
        id: "standoff-2",
        title: "Standoff 2",
        category: "mobile",
        platform: "Mobile",
        genre: "First-Person Shooter",
        theme: {
            from: "#3c1518",
            to: "#1a0607",
            glow: "#da1e28"
        },
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1677350/header.jpg",
        description: "A fast-paced mobile first-person shooter featuring tactical game modes, weapon skins, and rapid round matches."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1546990/header.jpg",
        description: "An iconic open-world gangland crime sandbox set across 1990s Los Santos, San Fierro, and Las Venturas, telling the story of Carl CJ Johnson."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
        description: "A blockbuster open-world action-thriller following three distinct criminals pulled into elaborate heists across the sprawling city of Los Santos."
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
        image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=500&q=80",
        description: "The classic game of chess played on mobile, testing analytical strategy, position mapping, and tactical forecasting against bots or worldwide players."
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
        image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&w=500&q=80",
        description: "An adaptation of the popular Filipino board game focusing on hidden ranking logic, deception, and capturing the opponent's flag."
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
        image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=500&q=80",
        description: "A massive, real-time multiplayer grand strategy campaign where players command nations during World War II, managing supply economies and troop deployments."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/761890/header.jpg",
        description: "A sandbox medieval MMORPG with a player-driven economy, classless equipment-based spell systems, and high-stakes PvP zone combat."
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
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        description: "A popular anime open-world MMORPG featuring classless skill paths, comprehensive character customization, and cooperatively fought dungeon raids."
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
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80",
        description: "A visually stunning cyberpunk-meets-fantasy mobile MMORPG, featuring cinematic storytelling, real-time combat, and massive virtual social spaces."
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
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=500&q=80",
        description: "A highly competitive 5v5 mobile arena brawler, where players draft heroes, secure lane objectives, and clash in fast teamfights to destroy the enemy core."
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
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        description: "A tactical first-person extraction shooter, requiring players to search maps, survive fire encounters, and safely extract with loot in a dangerous battlefield."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1927080/header.jpg",
        description: "A fast-paced battle royale featuring futuristic hero skill rosters, quick horizontal jetpack dashes, armored vehicle weapons, and high-energy shootouts."
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
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80",
        description: "A team-based 5v5 MOBA where players capture wild Pokémon, defeat opponents, score goal points in scoring zones, and evolve their characters."
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
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
        description: "A high-speed cyberpunk rhythm game, requiring players to hit, slide, and hold neon target notes as an active horizontal scanning line moves."
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
        image: "https://images.unsplash.com/photo-1552072068-861b772ee170?auto=format&fit=crop&w=500&q=80",
        description: "A hybrid action RPG and fighting game where players upgrade weapons and engage in physical 2D combat featuring shadow silhouettes."
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
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80",
        description: "A mobile fighting adaptation of the legendary arcade fighter, featuring combo cards, martial arts combat styles, and fluid animations."
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
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=500&q=80",
        description: "The official pocket battle royale, featuring tactical matches, vehicular movement, recoil aiming, and coordinate squads map play."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1449850/header.jpg",
        description: "The digital Yu-Gi-Oh! card dueling simulator, featuring deep deck construction and complex turn-phase rules."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1352080/header.jpg",
        description: "A fast-paced multiplayer arena brawler, where players use combat skills to knock opponents out of dynamic stage boundaries."
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
        image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=500&q=80",
        description: "A tactical mobile FPS featuring classic defusal maps, fast-paced fire gameplay, and multiple casual arcade game modes."
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
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80",
        description: "A 4v4 anime loot-and-capture brawler, where players choose distinct character classes to capture flags and score treasure points."
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
        image: "https://images.unsplash.com/photo-1608889174633-5645f65057bc?auto=format&fit=crop&w=500&q=80",
        description: "A tactical military military operation simulation featuring coordinated team breaching, projectile modeling, and customizable gadgets."
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
        image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=500&q=80",
        description: "An action online RPG based on Sword Art Online, where players join party guilds to clear the complex levels of Aincrad."
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
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623660/header.jpg",
        description: "An Asian-fantasy MMORPG featuring auto-navigation quests, open-world guild battles, and trading resources."
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
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
        description: "The definitive pocket military shooter, containing fast slide-jump movement mechanics, Aim Assist adjustments, and iconic multiplayer maps."
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
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80",
        description: "A gritty brawler adapting the cult classic film, featuring cooperative local split-screen, physical environmental grabs, and combo combat mechanics."
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
        image: "https://images.unsplash.com/photo-1509569019056-47b23740f585?auto=format&fit=crop&w=500&q=80",
        description: "An iconic wrestling-fighting hybrid, featuring interactive crowd hazards, submission holds, and hip-hop culture fighters."
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
        image: "https://images.unsplash.com/photo-1525201548982-be124ff4598f?auto=format&fit=crop&w=500&q=80",
        description: "A legendary music rhythm game featuring guitar peripheral controllers, scroll-calibration curves, and classic rock audio tracks."
    }
];
