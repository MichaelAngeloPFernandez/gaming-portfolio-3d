/* ============================================================
   3D Gaming Portfolio — three-scene.js
   Three.js 3D Environment, Node Interaction & Camera Lerping
   ============================================================ */

class Portfolio3D {
    constructor() {
        this.container = document.getElementById('game-interface');
        this.canvas = document.getElementById('game-canvas');
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;

        // Platform Meshes
        this.nodes = {
            pc: null,
            mobile: null,
            console: null
        };

        // Hover labels (DOM overlays)
        this.labels = {
            pc: null,
            mobile: null,
            console: null
        };

        // Interaction States
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.hoveredPlatform = null;

        // Camera Animation targets
        this.cameraDefaults = {
            pos: new THREE.Vector3(0, 2, 16),
            look: new THREE.Vector3(0, 0, 0)
        };
        this.cameraTargetPos = this.cameraDefaults.pos.clone();
        this.cameraTargetLook = this.cameraDefaults.look.clone();
        this.cameraCurrentLook = this.cameraDefaults.look.clone();

        // Parallax offset
        this.parallax = { x: 0, y: 0 };
    }

    init() {
        if (!this.canvas) return;

        // 1. Scene setup
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x060913, 0.035);

        // 2. Camera setup
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        this.camera.position.copy(this.cameraDefaults.pos);

        // 3. Renderer setup
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x060913, 1);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // 4. Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x00f0ff, 1.5, 30);
        pointLight.position.set(0, 5, 5);
        this.scene.add(pointLight);

        // 5. Starfield Particles
        this.createStarfield();

        // 6. Platform Nodes
        this.createPlatformNodes();

        // 7. Interactive HTML labels
        this.createHTMLLabels();

        // 8. Event Listeners
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('click', () => this.onClick());
        window.addEventListener('resize', () => this.onResize());

        // 9. Start Loop
        this.animate();
    }

    createStarfield() {
        const count = 700;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const colorOption = [
            new THREE.Color(0x39ff14), // Green (PC)
            new THREE.Color(0x00f0ff), // Cyan (Mobile)
            new THREE.Color(0xff0055)  // Red (Console)
        ];

        for (let i = 0; i < count * 3; i += 3) {
            // Position
            positions[i] = (Math.random() - 0.5) * 45;
            positions[i + 1] = (Math.random() - 0.5) * 30;
            positions[i + 2] = (Math.random() - 0.5) * 40;

            // Color selection based on sector
            let col = colorOption[Math.floor(Math.random() * colorOption.length)];
            colors[i] = col.r;
            colors[i + 1] = col.g;
            colors[i + 2] = col.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.07,
            vertexColors: true,
            transparent: true,
            opacity: 0.4
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    createPlatformNodes() {
        // Node Positions
        const posPC = new THREE.Vector3(-6, 0, 0);
        const posMobile = new THREE.Vector3(0, -0.2, 0);
        const posConsole = new THREE.Vector3(6, 0, 0);

        // Group PC (Cube/Workstation theme)
        const groupPC = new THREE.Group();
        groupPC.position.copy(posPC);
        
        const pcOuterGeo = new THREE.BoxGeometry(2, 2.5, 2);
        const pcOuterMat = new THREE.MeshBasicMaterial({ color: 0x39ff14, wireframe: true, transparent: true, opacity: 0.25 });
        const pcOuter = new THREE.Mesh(pcOuterGeo, pcOuterMat);
        groupPC.add(pcOuter);

        const pcInnerGeo = new THREE.BoxGeometry(1.2, 1.6, 1.2);
        const pcInnerMat = new THREE.MeshBasicMaterial({ color: 0x39ff14, wireframe: true });
        const pcInner = new THREE.Mesh(pcInnerGeo, pcInnerMat);
        groupPC.add(pcInner);

        const pcRingGeo = new THREE.TorusGeometry(1.8, 0.02, 8, 40);
        const pcRingMat = new THREE.MeshBasicMaterial({ color: 0x39ff14, transparent: true, opacity: 0.15 });
        const pcRing = new THREE.Mesh(pcRingGeo, pcRingMat);
        pcRing.rotation.x = Math.PI / 2;
        groupPC.add(pcRing);

        this.scene.add(groupPC);
        this.nodes.pc = groupPC;
        groupPC.userData = { platform: 'pc', baseColor: 0x39ff14, ring: pcRing, inner: pcInner };

        // Group Mobile (Phone screen theme)
        const groupMobile = new THREE.Group();
        groupMobile.position.copy(posMobile);

        const mobOuterGeo = new THREE.BoxGeometry(1.4, 2.6, 0.2);
        const mobOuterMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.25 });
        const mobOuter = new THREE.Mesh(mobOuterGeo, mobOuterMat);
        groupMobile.add(mobOuter);

        const mobInnerGeo = new THREE.BoxGeometry(1.1, 2.2, 0.15);
        const mobInnerMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true });
        const mobInner = new THREE.Mesh(mobInnerGeo, mobInnerMat);
        groupMobile.add(mobInner);

        const mobRingGeo = new THREE.TorusGeometry(1.8, 0.02, 8, 40);
        const mobRingMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.15 });
        const mobRing = new THREE.Mesh(mobRingGeo, mobRingMat);
        mobRing.rotation.y = Math.PI / 2;
        groupMobile.add(mobRing);

        this.scene.add(groupMobile);
        this.nodes.mobile = groupMobile;
        groupMobile.userData = { platform: 'mobile', baseColor: 0x00f0ff, ring: mobRing, inner: mobInner };

        // Group Console (Controller theme)
        const groupConsole = new THREE.Group();
        groupConsole.position.copy(posConsole);

        const conOuterGeo = new THREE.TorusKnotGeometry(0.8, 0.25, 40, 8, 3, 4);
        const conOuterMat = new THREE.MeshBasicMaterial({ color: 0xff0055, wireframe: true, transparent: true, opacity: 0.25 });
        const conOuter = new THREE.Mesh(conOuterGeo, conOuterMat);
        groupConsole.add(conOuter);

        const conInnerGeo = new THREE.SphereGeometry(0.6, 12, 12);
        const conInnerMat = new THREE.MeshBasicMaterial({ color: 0xff0055, wireframe: true });
        const conInner = new THREE.Mesh(conInnerGeo, conInnerMat);
        groupConsole.add(conInner);

        const conRingGeo = new THREE.TorusGeometry(1.8, 0.02, 8, 40);
        const conRingMat = new THREE.MeshBasicMaterial({ color: 0xff0055, transparent: true, opacity: 0.15 });
        const conRing = new THREE.Mesh(conRingGeo, conRingMat);
        conRing.rotation.x = Math.PI / 4;
        groupConsole.add(conRing);

        this.scene.add(groupConsole);
        this.nodes.console = groupConsole;
        groupConsole.userData = { platform: 'console', baseColor: 0xff0055, ring: conRing, inner: conInner };
    }

    createHTMLLabels() {
        const container = document.getElementById('game-interface');
        if (!container) return;

        const platforms = [
            { id: 'pc', label: 'PC PLATFORM', color: '#39ff14' },
            { id: 'mobile', label: 'MOBILE PLATFORM', color: '#00f0ff' },
            { id: 'console', label: 'CONSOLE PLATFORM', color: '#ff0055' }
        ];

        platforms.forEach(p => {
            const div = document.createElement('div');
            div.className = `hud-corner-label label-${p.id}`;
            div.innerHTML = `
                <div class="hud-label-inner" style="border: 1px dashed ${p.color}; color: ${p.color}; box-shadow: 0 0 8px ${p.color}22">
                    <span class="label-dot" style="background-color: ${p.color}"></span>
                    [ ${p.label} ]
                </div>
            `;
            div.style.position = 'absolute';
            div.style.transform = 'translate(-50%, -100%)';
            div.style.fontFamily = "var(--font-mono)";
            div.style.fontSize = "11px";
            div.style.letterSpacing = "1.5px";
            div.style.zIndex = "8";
            div.style.pointerEvents = "none";
            div.style.opacity = "0.7";
            div.style.transition = "opacity 0.2s ease, scale 0.2s ease";

            container.appendChild(div);
            this.labels[p.id] = div;
        });

        // Insert styling rules dynamically
        const style = document.createElement('style');
        style.textContent = `
            .hud-label-inner {
                background: rgba(6, 9, 19, 0.85);
                backdrop-filter: var(--glass-blur);
                padding: 4px 10px;
                border-radius: 2px;
                display: flex;
                align-items: center;
                gap: 6px;
                white-space: nowrap;
            }
            .label-dot {
                display: inline-block;
                width: 5px;
                height: 5px;
                border-radius: 50%;
            }
        `;
        document.head.appendChild(style);
    }

    onMouseMove(e) {
        // Track screen mouse coords [-1, 1]
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        // Apply smooth parallax
        this.parallax.x = this.mouse.x * 1.5;
        this.parallax.y = this.mouse.y * 1.0;
    }

    onClick() {
        if (this.hoveredPlatform) {
            // Trigger navigation callback from main app
            if (window.appInstance) {
                window.appInstance.selectPlatform(this.hoveredPlatform);
            }
        }
    }

    onResize() {
        if (!this.camera) return;

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    zoomTo(platformName) {
        const node = this.nodes[platformName];
        if (node) {
            // Zoom target is close to the node
            this.cameraTargetPos.set(node.position.x, node.position.y + 0.2, 5.0);
            this.cameraTargetLook.copy(node.position);
            
            // Fade out other labels
            Object.keys(this.labels).forEach(key => {
                if (key !== platformName) {
                    this.labels[key].style.opacity = '0';
                } else {
                    this.labels[key].style.opacity = '1';
                }
            });
        }
    }

    resetZoom() {
        this.cameraTargetPos.copy(this.cameraDefaults.pos);
        this.cameraTargetLook.copy(this.cameraDefaults.look);
        
        // Restore all labels
        Object.keys(this.labels).forEach(key => {
            this.labels[key].style.opacity = '0.7';
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const t = performance.now() * 0.001;

        // 1. Gentle platform mesh animations
        Object.keys(this.nodes).forEach(key => {
            const node = this.nodes[key];
            if (node) {
                // Hover effect: scale up and rotate faster
                const isHovered = (this.hoveredPlatform === key);
                const scaleTarget = isHovered ? 1.15 : 1.0;
                node.scale.lerp(new THREE.Vector3(scaleTarget, scaleTarget, scaleTarget), 0.1);

                // Rotations
                node.rotation.y += isHovered ? 0.015 : 0.005;
                if (node.userData.inner) {
                    node.userData.inner.rotation.x += isHovered ? 0.02 : 0.008;
                    node.userData.inner.rotation.z += 0.003;
                }
                if (node.userData.ring) {
                    node.userData.ring.rotation.z -= 0.002;
                    node.userData.ring.position.y = Math.sin(t * 2 + (key === 'pc' ? 0 : key === 'mobile' ? 1.2 : 2.4)) * 0.1;
                }

                // Slow node floating bobbing
                node.position.y = (key === 'mobile' ? -0.2 : 0) + Math.sin(t * 1.5 + (key === 'pc' ? 0 : key === 'mobile' ? 2 : 4)) * 0.12;
            }
        });

        // 2. Rotate starfield
        if (this.particles) {
            this.particles.rotation.y = t * 0.012;
            this.particles.rotation.x = t * 0.004;
        }

        // 3. Smooth Camera Lerp
        // Add mouse parallax offset to target position when at home screen
        const targetX = this.cameraTargetPos.x + (this.cameraTargetPos.z > 10 ? this.parallax.x : 0);
        const targetY = this.cameraTargetPos.y + (this.cameraTargetPos.z > 10 ? this.parallax.y : 0);

        this.camera.position.x += (targetX - this.camera.position.x) * 0.05;
        this.camera.position.y += (targetY - this.camera.position.y) * 0.05;
        this.camera.position.z += (this.cameraTargetPos.z - this.camera.position.z) * 0.05;

        this.cameraCurrentLook.lerp(this.cameraTargetLook, 0.05);
        this.camera.lookAt(this.cameraCurrentLook);

        // 4. Update Raycaster for 3D selection (only on home/reset screen)
        if (this.cameraTargetPos.z > 10) {
            this.raycaster.setFromCamera(this.mouse, this.camera);
            
            // Gather intersections from children of our platform groups
            const intersectables = [];
            Object.values(this.nodes).forEach(group => {
                if (group) intersectables.push(...group.children);
            });

            const intersects = this.raycaster.intersectObjects(intersectables, true);

            if (intersects.length > 0) {
                // Find which parent group it belongs to
                let parent = intersects[0].object.parent;
                while (parent && !parent.userData.platform) {
                    parent = parent.parent;
                }

                if (parent && parent.userData.platform) {
                    const platformName = parent.userData.platform;
                    if (this.hoveredPlatform !== platformName) {
                        // Play select SFX on hover transition
                        if (window.audioManager) window.audioManager.playSelect();
                        this.hoveredPlatform = platformName;
                        
                        // Enlarge and highlight label
                        this.labels[platformName].style.scale = '1.15';
                        this.labels[platformName].style.opacity = '1';
                    }
                }
            } else {
                if (this.hoveredPlatform) {
                    this.labels[this.hoveredPlatform].style.scale = '1.0';
                    this.labels[this.hoveredPlatform].style.opacity = '0.7';
                    this.hoveredPlatform = null;
                }
            }
        } else {
            this.hoveredPlatform = null;
        }

        // 5. Project 3D nodes coordinates to HTML overlay tags
        Object.keys(this.nodes).forEach(key => {
            const node = this.nodes[key];
            const label = this.labels[key];
            if (node && label && label.style.opacity !== '0') {
                const tempV = new THREE.Vector3();
                // Get node center position
                node.getWorldPosition(tempV);
                // Offset label slightly above the node
                tempV.y += 1.8;

                // Project to screen space
                tempV.project(this.camera);

                // Convert to pixels
                const x = (tempV.x *  .5 + .5) * window.innerWidth;
                const y = (tempV.y * -.5 + .5) * window.innerHeight;

                label.style.left = `${x}px`;
                label.style.top = `${y}px`;

                // If node is behind camera, hide label
                if (tempV.z > 1) {
                    label.style.display = 'none';
                } else {
                    label.style.display = 'block';
                }
            }
        });

        this.renderer.render(this.scene, this.camera);
    }
}

// Global instance
const portfolio3D = new Portfolio3D();
window.portfolio3D = portfolio3D;
GAMES_DATA.scene3d = portfolio3D;
