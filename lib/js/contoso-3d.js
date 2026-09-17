async function mountContosoModel() {
    const root = document.querySelector('.shop-model');
    if (!root) return;
    const view = root.querySelector('.shop-3d');
    const stage = root.querySelector('.shop-3d-stage');
    const fallback = root.querySelector('.shop-building');
    const tiers = fallback.querySelector('.shop-tiers');
    const network = fallback.querySelector('.shop-network');
    const details = root.querySelector('.shop-3d-details');
    let renderer;
    let controls;
    let resizeObserver;
    let themeObserver;
    let languageObserver;
    let scene;
    let networkAnimation;
    const textures = [];

    function restoreFallback() {
        networkAnimation?.dispose();
        resizeObserver?.disconnect();
        themeObserver?.disconnect();
        languageObserver?.disconnect();
        controls?.dispose();
        renderer?.dispose();
        if (scene) {
            scene.traverse(object => {
                object.geometry?.dispose();
                if (object.material) object.material.dispose();
            });
        }
        textures.forEach(texture => texture.dispose());
        stage.querySelector('canvas')?.remove();
        const datacenter = fallback.querySelector('.shop-datacenter');
        datacenter.append(tiers, network);
        root.classList.remove('has-3d');
        view.hidden = true;
    }

    try {
        const THREE = await import('../vendor/contoso-3d/three.module.min.js');
        const { OrbitControls } = await import('../vendor/contoso-3d/OrbitControls.js');
        const { createNetworkAnimation } = await import('./contoso-network-3d.js');
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.domElement.setAttribute('aria-hidden', 'true');
        renderer.domElement.addEventListener('webglcontextlost', event => {
            event.preventDefault();
            restoreFallback();
        }, { once: true });
        stage.append(renderer.domElement);
        scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-12, 12, 9, -9, 0.1, 150);
        camera.position.set(15, 12, 20);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 1.6, 0);
        controls.enablePan = false;
        controls.enableDamping = false;
        controls.enableZoom = false;
        controls.minPolarAngle = Math.PI / 5;
        controls.maxPolarAngle = Math.PI / 2.45;
        controls.minAzimuthAngle = -Math.PI / 3;
        controls.maxAzimuthAngle = Math.PI / 3;
        controls.touches.ONE = THREE.TOUCH.ROTATE;
        controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
        controls.update();
        const homePosition = camera.position.clone();
        const homeTarget = controls.target.clone();
        scene.add(new THREE.HemisphereLight(0xffffff, 0x647782, 2.6));
        const sunlight = new THREE.DirectionalLight(0xffffff, 3.1);
        sunlight.position.set(-8, 16, 12);
        scene.add(sunlight);
        const model = new THREE.Group();
        scene.add(model);
        const materials = {
            wall: new THREE.MeshStandardMaterial({ color: 0xe4e8e7, roughness: 0.9 }),
            floor: new THREE.MeshStandardMaterial({ color: 0xd2d9db, roughness: 0.95 }),
            trim: new THREE.MeshStandardMaterial({ color: 0x687e8a, roughness: 0.7 }),
            rack: new THREE.MeshStandardMaterial({ color: 0x29343f, roughness: 0.65 }),
            server: new THREE.MeshStandardMaterial({ color: 0x73848f, metalness: 0.25, roughness: 0.5 }),
            vent: new THREE.MeshStandardMaterial({ color: 0x17242e, roughness: 0.9 }),
            glass: new THREE.MeshStandardMaterial({ color: 0x8cbfcb, metalness: 0.15, roughness: 0.35 }),
            light: new THREE.MeshBasicMaterial({ color: 0x8bf2cc }),
            cable: new THREE.MeshStandardMaterial({ color: 0x278576, roughness: 0.8 })
        };
        const tierColors = [0x087eaf, 0x148573, 0xd0762b];
        const tierMaterials = tierColors.map(color => new THREE.MeshStandardMaterial({ color, roughness: 0.55 }));

        function box(parent, width, height, depth, position, material) {
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
            mesh.position.set(...position);
            parent.add(mesh);
            return mesh;
        }

        function sign(parent, text, width, height, position, background, foreground = '#ffffff') {
            const canvas = document.createElement('canvas');
            canvas.width = 1024;
            canvas.height = Math.round(1024 * height / width);
            const context = canvas.getContext('2d');
            context.fillStyle = background;
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = foreground;
            context.font = `600 ${Math.round(canvas.height * 0.61)}px Segoe UI, sans-serif`;
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(text, canvas.width / 2, canvas.height / 2, canvas.width - 48);
            const texture = new THREE.CanvasTexture(canvas);
            texture.colorSpace = THREE.SRGBColorSpace;
            textures.push(texture);
            const plaque = new THREE.Mesh(new THREE.PlaneGeometry(width, height), new THREE.MeshBasicMaterial({ map: texture }));
            plaque.position.set(...position);
            parent.add(plaque);
            return plaque;
        }

        box(model, 16, 0.4, 10, [0, -0.2, 0], materials.trim);
        box(model, 15.6, 0.12, 9.6, [0, 0.06, 0], materials.floor);
        const tilePositions = [];
        for (let coordinate = -7; coordinate <= 7; coordinate += 1) {
            tilePositions.push(coordinate, 0.13, -4.5, coordinate, 0.13, 4.5);
        }
        for (let coordinate = -4; coordinate <= 4; coordinate += 1) {
            tilePositions.push(-7.5, 0.13, coordinate, 7.5, 0.13, coordinate);
        }
        const tiles = new THREE.BufferGeometry();
        tiles.setAttribute('position', new THREE.Float32BufferAttribute(tilePositions, 3));
        model.add(new THREE.LineSegments(tiles, new THREE.LineBasicMaterial({ color: 0x9daeb5, transparent: true, opacity: 0.4 })));
        box(model, 16, 4.7, 0.26, [0, 2.35, -4.7], materials.wall);
        box(model, 0.26, 4.7, 9.6, [-7.85, 2.35, 0], materials.wall);
        box(model, 16, 0.22, 0.45, [0, 4.75, -4.65], materials.trim);
        box(model, 0.45, 0.22, 9.6, [-7.8, 4.75, 0], materials.trim);
        sign(model, 'CONTOSO', 5.8, 0.85, [0, 3.8, -4.54], '#176b87');
        for (const position of [-5.8, 5.8]) {
            box(model, 1.55, 1.2, 0.05, [position, 3.2, -4.53], materials.trim);
            box(model, 1.35, 1, 0.06, [position, 3.2, -4.49], materials.glass);
        }

        const racks = [];
        [-4.5, 0, 4.5].forEach((horizontal, index) => {
            const rack = new THREE.Group();
            rack.position.set(horizontal, 0.15, -0.9);
            model.add(rack);
            racks.push(rack);
            rack.userData.tier = index;
            box(rack, 2.45, 0.18, 2, [0, 0.12, 0], materials.rack);
            box(rack, 2.45, 0.18, 2, [0, 3.48, 0], materials.rack);
            box(rack, 2.45, 3.35, 0.1, [0, 1.8, -0.96], materials.rack);
            for (const horizontalPost of [-1.16, 1.16]) {
                box(rack, 0.14, 3.3, 2, [horizontalPost, 1.8, 0], materials.rack);
                box(rack, 0.06, 3.15, 0.07, [horizontalPost, 1.8, 1.03], tierMaterials[index]);
            }
            for (let unit = 0; unit < 6; unit += 1) {
                const vertical = 0.48 + unit * 0.44;
                box(rack, 2.08, 0.33, 1.76, [0, vertical, 0], materials.server);
                box(rack, 1.36, 0.2, 0.035, [-0.19, vertical, 0.9], materials.vent);
                for (let slot = 0; slot < 5; slot += 1) {
                    box(rack, 0.022, 0.15, 0.025, [-0.68 + slot * 0.22, vertical, 0.925], materials.trim);
                }
                box(rack, 0.055, 0.055, 0.035, [0.74, vertical + 0.045, 0.92], materials.light);
                box(rack, 0.055, 0.055, 0.035, [0.88, vertical + 0.045, 0.92], tierMaterials[index]);
            }
            sign(rack, String(index + 1).padStart(2, '0'), 1.05, 0.5, [0, 3.2, 1.04], '#' + tierColors[index].toString(16).padStart(6, '0'));
        });
        box(model, 2, 0.24, 0.72, [0, 0.27, 3.55], materials.rack);
        for (let port = 0; port < 8; port += 1) {
            box(model, 0.12, 0.075, 0.04, [-0.77 + port * 0.22, 0.3, 3.94], materials.light);
        }

        const exterior = new THREE.Group();
        model.add(exterior);
        box(exterior, 0.26, 4.7, 9.6, [7.85, 2.35, 0], materials.wall);
        box(exterior, 6.4, 4.7, 0.25, [-4.8, 2.35, 4.7], materials.wall);
        box(exterior, 6.4, 4.7, 0.25, [4.8, 2.35, 4.7], materials.wall);
        box(exterior, 3.2, 1.8, 0.25, [0, 3.8, 4.7], materials.wall);
        box(exterior, 3.2, 2.9, 0.1, [0, 1.45, 4.7], materials.glass);
        box(exterior, 0.09, 2.9, 0.15, [0, 1.45, 4.8], materials.trim);
        for (const horizontal of [-5.7, -3.5, 3.5, 5.7]) {
            box(exterior, 1.55, 1.65, 0.06, [horizontal, 2.4, 4.86], materials.trim);
            box(exterior, 1.35, 1.45, 0.07, [horizontal, 2.4, 4.91], materials.glass);
        }
        box(exterior, 16.5, 0.35, 10.3, [0, 4.94, 0], materials.trim);
        sign(exterior, 'CONTOSO', 4.2, 0.72, [0, 4.05, 4.86], '#176b87');
        exterior.visible = false;

        networkAnimation = createNetworkAnimation(THREE, stage, root.querySelector('[data-network-player]'), render);
        const localRoutes = [-4.5, 0, 4.5].map((horizontal, index) => {
            const curve = new THREE.CurvePath();
            const points = [[-0.6 + index * 0.6, 0.22, 3.92], [horizontal, 0.22, 3.2], [horizontal, 0.22, 0.15]];
            for (let point = 1; point < points.length; point += 1) {
                curve.add(new THREE.LineCurve3(new THREE.Vector3(...points[point - 1]), new THREE.Vector3(...points[point])));
            }
            return networkAnimation.add(model, curve, tierColors[index], { delay: index * 650, duration: 1500, radius: 0.065 });
        });

        function render() {
            renderer.render(scene, camera);
        }

        function resize() {
            const width = stage.clientWidth;
            const height = stage.clientHeight;
            if (!width || !height) return;
            renderer.setSize(width, height, false);
            const aspect = width / height;
            const bounds = new THREE.Box3().setFromObject(model);
            const cameraSpace = new THREE.Box3();
            camera.updateMatrixWorld();
            for (const horizontal of [bounds.min.x, bounds.max.x]) {
                for (const vertical of [bounds.min.y, bounds.max.y]) {
                    for (const depth of [bounds.min.z, bounds.max.z]) {
                        cameraSpace.expandByPoint(new THREE.Vector3(horizontal, vertical, depth).applyMatrix4(camera.matrixWorldInverse));
                    }
                }
            }
            const halfHeight = Math.max((cameraSpace.max.y - cameraSpace.min.y) / 2, (cameraSpace.max.x - cameraSpace.min.x) / (2 * aspect)) * 1.13;
            const center = cameraSpace.getCenter(new THREE.Vector3());
            camera.left = center.x - halfHeight * aspect;
            camera.right = center.x + halfHeight * aspect;
            camera.top = center.y + halfHeight;
            camera.bottom = center.y - halfHeight;
            camera.updateProjectionMatrix();
            render();
        }

        function syncTheme() {
            const dark = document.body.classList.contains('theme-dark');
            materials.wall.color.set(dark ? 0x697783 : 0xe4e8e7);
            materials.floor.color.set(dark ? 0x576772 : 0xd2d9db);
            render();
        }

        function syncLabels() {
            networkAnimation.syncLabels();
            for (const button of root.querySelectorAll('[data-shop-command]')) {
                const label = button.querySelector('[data-i18n]').textContent;
                button.title = label;
                button.setAttribute('aria-label', label);
            }
        }

        root.querySelectorAll('[data-shop-view]').forEach(button => button.addEventListener('click', () => {
            exterior.visible = button.dataset.shopView === 'exterior';
            root.querySelectorAll('[data-shop-view]').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
            render();
        }));
        root.querySelectorAll('[data-shop-command]').forEach(button => button.addEventListener('click', () => {
            if (button.dataset.shopCommand === 'resetView') {
                camera.position.copy(homePosition);
                controls.target.copy(homeTarget);
                camera.zoom = 1;
                controls.update();
                resize();
            } else {
                camera.zoom = THREE.MathUtils.clamp(camera.zoom * (button.dataset.shopCommand === 'zoomIn' ? 1.2 : 1 / 1.2), 0.7, 1.6);
                camera.updateProjectionMatrix();
                render();
            }
        }));
        controls.addEventListener('change', resize);
        renderer.render(scene, camera);
        details.append(tiers, network);
        tiers.querySelectorAll('.shop-tier-head').forEach((heading, index) => heading.dataset.rack = String(index + 1).padStart(2, '0'));
        view.hidden = false;
        root.classList.add('has-3d');
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(stage);
        themeObserver = new MutationObserver(syncTheme);
        themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        languageObserver = new MutationObserver(syncLabels);
        languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
        syncLabels();
        syncTheme();
        resize();
        networkAnimation.play(localRoutes);
        window.addEventListener('pagehide', event => {
            if (!event.persisted) restoreFallback();
        }, { once: true });
    } catch (error) {
        restoreFallback();
        console.warn('Contoso 3D unavailable; displaying the diagram.', error);
    }
}

mountContosoModel();