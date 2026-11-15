async function mountCloudWorkload() {
    const root = document.querySelector('.cloud-campus');
    if (!root) return;
    const stage = root.querySelector('.cc-stage');
    const toolbar = root.querySelector('.cc-toolbar');
    const events = new AbortController();
    const textures = [];
    let renderer;
    let controls;
    let scene;
    let resizeObserver;
    let themeObserver;
    let languageObserver;
    let networkAnimation;

    function dispose() {
        networkAnimation?.dispose();
        events.abort();
        resizeObserver?.disconnect();
        themeObserver?.disconnect();
        languageObserver?.disconnect();
        controls?.dispose();
        const materials = new Set();
        scene?.traverse(object => {
            object.geometry?.dispose();
            if (object.material) materials.add(object.material);
        });
        materials.forEach(material => material.dispose());
        textures.forEach(texture => texture.dispose());
        renderer?.dispose();
        stage.querySelector('canvas')?.remove();
        stage.hidden = true;
        toolbar.hidden = true;
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
            dispose();
        }, { once: true });
        stage.append(renderer.domElement);
        scene = new THREE.Scene();
        scene.add(new THREE.HemisphereLight(0xffffff, 0x768996, 2.5));
        const sunlight = new THREE.DirectionalLight(0xffffff, 2.8);
        sunlight.position.set(-8, 18, 12);
        scene.add(sunlight);
        const camera = new THREE.OrthographicCamera(-15, 15, 10, -10, 0.1, 150);
        camera.position.set(11, 14, 24);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 1, 0);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableDamping = false;
        controls.minPolarAngle = Math.PI / 5;
        controls.maxPolarAngle = Math.PI / 2.5;
        controls.minAzimuthAngle = -Math.PI / 4;
        controls.maxAzimuthAngle = Math.PI / 4;
        controls.update();
        const homePosition = camera.position.clone();
        const homeTarget = controls.target.clone();
        const model = new THREE.Group();
        scene.add(model);
        const material = color => new THREE.MeshStandardMaterial({ color, roughness: 0.65, metalness: 0.08 });
        const surfaces = {
            cloud: material(0xf6fafb), edge: material(0x2483b6), plinth: material(0xdce5e9),
            frame: material(0x364652), screen: material(0xf2f7f9), blue: material(0x188bc1),
            green: material(0x188c75), amber: material(0xd88737), silver: material(0xa6b9c3),
            dark: material(0x27424e)
        };
        const groups = {};
        for (const name of ['foundation', 'boundary', 'web', 'backend', 'database', 'network', 'operations']) {
            groups[name] = new THREE.Group();
            model.add(groups[name]);
        }

        function box(parent, dimensions, position, surface) {
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(...dimensions), surface);
            mesh.position.set(...position);
            parent.add(mesh);
            return mesh;
        }

        function cylinder(parent, radius, height, position, surface) {
            const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 48), surface);
            mesh.position.set(...position);
            parent.add(mesh);
            return mesh;
        }

        function plaque(parent, text, width, height, position, background, foreground = '#ffffff') {
            const canvas = document.createElement('canvas');
            canvas.width = 1024;
            canvas.height = Math.round(1024 * height / width);
            const context = canvas.getContext('2d');
            const texture = new THREE.CanvasTexture(canvas);
            texture.colorSpace = THREE.SRGBColorSpace;
            textures.push(texture);
            const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), new THREE.MeshBasicMaterial({ map: texture }));
            mesh.position.set(...position);
            parent.add(mesh);
            function update(value) {
                context.fillStyle = background;
                context.fillRect(0, 0, canvas.width, canvas.height);
                context.fillStyle = foreground;
                context.font = `600 ${Math.round(canvas.height * 0.5)}px Segoe UI, sans-serif`;
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(value, canvas.width / 2, canvas.height / 2, canvas.width - 48);
                texture.needsUpdate = true;
            }
            update(text);
            return update;
        }

        const cloud = new THREE.Shape();
        cloud.moveTo(-7, -5);
        cloud.bezierCurveTo(-11, -5, -12, -1, -9, 1);
        cloud.bezierCurveTo(-12, 5, -7, 8, -4, 5.5);
        cloud.bezierCurveTo(-2, 9, 4, 8, 4.5, 4.5);
        cloud.bezierCurveTo(9, 7, 12, 3, 9, 0);
        cloud.bezierCurveTo(13, -3, 10, -5, 7, -5);
        cloud.lineTo(-7, -5);
        const cloudGeometry = new THREE.ExtrudeGeometry(cloud, { depth: 0.42, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.12, bevelThickness: 0.08, curveSegments: 32 });
        cloudGeometry.rotateX(-Math.PI / 2);
        const platform = new THREE.Mesh(cloudGeometry, surfaces.cloud);
        groups.foundation.add(platform);
        const underside = new THREE.Mesh(cloudGeometry.clone(), surfaces.edge);
        underside.scale.y = 0.35;
        underside.position.y = -0.255;
        groups.foundation.add(underside);
        box(groups.boundary, [17.4, 0.08, 0.08], [0, 0.56, -3.5], surfaces.green);
        box(groups.boundary, [17.4, 0.08, 0.08], [0, 0.56, 3.7], surfaces.green);
        for (const horizontal of [-8.7, 8.7]) box(groups.boundary, [0.08, 0.08, 7.2], [horizontal, 0.56, 0.1], surfaces.green);
        box(groups.operations, [8, 0.22, 0.65], [0, 0.7, -4.4], surfaces.edge);
        box(groups.operations, [0.16, 3, 0.16], [-2.9, 2.2, -4.4], surfaces.silver);
        box(groups.operations, [0.16, 3, 0.16], [2.9, 2.2, -4.4], surfaces.silver);
        box(groups.operations, [8, 1.7, 0.25], [0, 4, -4.4], surfaces.edge);
        plaque(groups.operations, 'CONTOSO', 7.6, 1.3, [0, 4.1, -4.25], '#176b87');
        const azureLabel = plaque(groups.foundation, 'Microsoft Azure', 6, 0.95, [0, 0.51, 4.4], '#f6fafb', '#006bb1');
        groups.foundation.children.at(-1).rotation.x = -Math.PI / 2;

        const tierLabels = [];
        const tierColors = ['#087eaf', '#148573', '#ad5d18'];
        const tierGroups = [groups.web, groups.backend, groups.database];
        const tierSurfaces = [surfaces.blue, surfaces.green, surfaces.amber];
        [-5.5, 0, 5.5].forEach((horizontal, index) => {
            const group = tierGroups[index];
            group.position.x = horizontal;
            box(group, [4.4, 0.28, 3.8], [0, 0.7, -0.25], surfaces.plinth);
            box(group, [4.4, 0.1, 0.08], [0, 0.87, 1.65], tierSurfaces[index]);
            tierLabels.push(plaque(group, '', 4.1, 0.62, [0, 1.1, 1.7], tierColors[index]));
        });

        box(groups.web, [3.8, 2.8, 0.38], [0, 2.65, -0.5], surfaces.frame);
        box(groups.web, [3.48, 2.44, 0.05], [0, 2.65, -0.29], surfaces.screen);
        box(groups.web, [3.48, 0.32, 0.05], [0, 3.71, -0.25], surfaces.blue);
        box(groups.web, [0.26, 0.7, 0.35], [0, 1.1, -0.5], surfaces.silver);
        box(groups.web, [1.8, 0.12, 0.85], [0, 0.95, -0.4], surfaces.silver);
        for (let column = 0; column < 3; column += 1) {
            const horizontal = -1.13 + column * 1.13;
            box(groups.web, [0.82, 0.8, 0.06], [horizontal, 2.92, -0.22], tierSurfaces[column]);
            box(groups.web, [0.82, 0.06, 0.06], [horizontal, 2.32, -0.22], surfaces.silver);
            box(groups.web, [0.54, 0.15, 0.06], [horizontal, 1.97, -0.22], surfaces.blue);
        }
        for (const horizontal of [-0.85, 0.85]) {
            box(groups.backend, [1.45, 2.65, 1.5], [horizontal, 2.2, -0.5], surfaces.frame);
            for (let unit = 0; unit < 3; unit += 1) {
                box(groups.backend, [1.22, 0.58, 0.1], [horizontal, 1.45 + unit * 0.73, 0.3], surfaces.green);
                box(groups.backend, [0.72, 0.08, 0.06], [horizontal - 0.08, 1.45 + unit * 0.73, 0.37], surfaces.screen);
            }
        }
        for (let disk = 0; disk < 3; disk += 1) {
            cylinder(groups.database, 1.45, 0.64, [0, 1.24 + disk * 0.75, -0.5], surfaces.amber);
            cylinder(groups.database, 1.45, 0.06, [0, 1.59 + disk * 0.75, -0.5], surfaces.silver);
        }
        networkAnimation = createNetworkAnimation(THREE, stage, root.querySelector('[data-network-player]'), render, {
            minimumDuration: 8000,
            minimumVisibility: 0.5,
            onCycle() {
                const sequence = ['single', 'global', 'replication', 'failover'];
                setScenario(sequence[(sequence.indexOf(scenario) + 1) % sequence.length]);
            }
        });
        const localRoutes = [-5.5, 0].map((horizontal, index) => {
            const curve = new THREE.CurvePath();
            const points = [[horizontal, 0.62, 1.7], [horizontal, 0.62, 3.15], [horizontal + 5.5, 0.62, 3.15], [horizontal + 5.5, 0.62, 1.7]];
            for (let point = 1; point < points.length; point += 1) curve.add(new THREE.LineCurve3(new THREE.Vector3(...points[point - 1]), new THREE.Vector3(...points[point])));
            return networkAnimation.add(groups.network, curve, index === 0 ? 0x168cb8 : 0x198c71, { delay: index * 1300, duration: 1500, radius: 0.075 });
        });

        const globalModel = new THREE.Group();
        scene.add(globalModel);
        const earthSurface = new THREE.MeshBasicMaterial({ color: 0xdce9e6 });
        const earthGrid = new THREE.LineBasicMaterial({ color: 0x94b5b0, transparent: true, opacity: 0.55 });
        const earth = new THREE.Mesh(new THREE.SphereGeometry(6.8, 64, 48), earthSurface);
        earth.position.set(0, -2.7, -6);
        earth.rotation.set(0.12, -0.3, -0.18);
        const ringPoints = new THREE.EllipseCurve(0, 0, 6.82, 6.82, 0, Math.PI * 2).getPoints(128);
        for (let meridian = 0; meridian < 8; meridian += 1) {
            const ring = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(ringPoints), earthGrid);
            ring.rotation.y = meridian * Math.PI / 8;
            earth.add(ring);
        }
        for (const latitude of [-60, -30, 0, 30, 60]) {
            const angle = THREE.MathUtils.degToRad(latitude);
            const ring = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(ringPoints), earthGrid);
            ring.scale.setScalar(Math.cos(angle));
            ring.rotation.x = Math.PI / 2;
            ring.position.y = 6.82 * Math.sin(angle);
            earth.add(ring);
        }
        globalModel.add(earth);
        const billboards = [];
        const regionLabels = [];
        const regionalCopies = [];
        const regionalGroups = [];
        const regionPositions = [new THREE.Vector3(-9, 1.4, 1), new THREE.Vector3(0, 3.6, -4), new THREE.Vector3(9, 1.4, 1)];
        const faultSurface = material(0x9a6670);
        const healthyMaterials = new Map();
        const faultMarker = new THREE.Group();
        globalModel.add(faultMarker);
        const faultLabel = plaque(faultMarker, '', 5.6, 1.1, [-9, 0.4, 4.4], '#9a3142');
        billboards.push(faultMarker.children.at(-1));
        faultMarker.visible = false;

        regionPositions.forEach((position, index) => {
            const region = new THREE.Group();
            region.position.copy(position);
            globalModel.add(region);
            regionalGroups.push(region);
            const workload = new THREE.Group();
            workload.scale.setScalar(0.31);
            region.add(workload);
            for (const name of ['foundation', 'boundary', 'web', 'backend', 'database']) workload.add(groups[name].clone(true));
            regionalCopies.push(workload);
            if (index === 0) workload.traverse(object => {
                if (object.isMesh && !object.material.map) healthyMaterials.set(object, object.material);
            });
            regionLabels.push(plaque(region, '', 6.7, 1.15, [0, 2.5, 0], '#176b87'));
            billboards.push(region.children.at(-1));
        });

        box(globalModel, [4.5, 0.65, 2.1], [0, -0.2, 8], surfaces.edge);
        const routerLabel = plaque(globalModel, '', 5.8, 1.1, [0, 0.9, 8.8], '#176b87');
        billboards.push(globalModel.children.at(-1));
        for (const horizontal of [-1.2, 0, 1.2]) {
            box(globalModel, [0.85, 1.1, 0.16], [horizontal, -0.3, 11.5], surfaces.frame);
            box(globalModel, [0.65, 0.8, 0.04], [horizontal, -0.25, 11.6], surfaces.screen);
        }
        const customerLabel = plaque(globalModel, '', 6.8, 1, [0, -1.3, 12], '#364652');
        billboards.push(globalModel.children.at(-1));

        const incoming = networkAnimation.add(globalModel, new THREE.LineCurve3(new THREE.Vector3(0, -0.25, 11.3), new THREE.Vector3(0, -0.25, 9.1)), 0x188bc1, { duration: 600, radius: 0.08 });
        function trafficCurve(index) {
            const position = regionPositions[index];
            const endpoint = position.clone().add(new THREE.Vector3(-1.7, 0.8, 0));
            return new THREE.QuadraticBezierCurve3(new THREE.Vector3(-0.8 + index * 0.8, 0, 7.8), new THREE.Vector3(position.x * 0.8, 3.5, 5), endpoint);
        }
        const trafficRoutes = regionPositions.map((position, index) => networkAnimation.add(globalModel, trafficCurve(index), 0x188bc1, { delay: 600 + index * 500, duration: 1600, radius: 0.09 }));
        function replicaCurve(index) {
            const start = regionPositions[index].clone().add(new THREE.Vector3(1.7, 0.8, -0.15));
            const end = regionPositions[index + 1].clone().add(new THREE.Vector3(1.7, 0.8, -0.15));
            const departure = start.clone().add(new THREE.Vector3(4.8, index === 0 ? 0 : 2.8, 0));
            const arrival = end.clone().add(new THREE.Vector3(index === 0 ? -4 : 9.6, index === 0 ? 3.2 : 0, 0));
            return new THREE.CubicBezierCurve3(start, departure, arrival, end);
        }
        const replicaRoutes = [0, 1].map(index => networkAnimation.add(globalModel, replicaCurve(index), 0xd78c28, { delay: 1400 + index * 1100, duration: 1500, radius: 0.095 }));
        function failoverCurve(index) {
            const position = regionPositions[index + 1];
            const end = position.clone().add(new THREE.Vector3(-1.7, 0.8, 0));
            return new THREE.QuadraticBezierCurve3(new THREE.Vector3(index * 1.4 - 0.7, 0, 7.8), new THREE.Vector3(position.x * 0.7, 4.5, 5), end);
        }
        const failoverRoutes = [0, 1].map(index => networkAnimation.add(globalModel, failoverCurve(index), 0x119777, { delay: 900 + index * 650, duration: 1900, radius: 0.12 }));
        let scenario = 'single';
        let compactLayout;
        let captionLayout;
        const text = key => root.querySelector(`[data-cc-copy="${key}"]`).textContent;

        function fitScenarioCaption() {
            const caption = root.querySelector('.cc-scenario-caption');
            if (!caption.clientWidth) return;
            const style = getComputedStyle(caption);
            const layout = [style.width, style.font, style.lineHeight, document.documentElement.lang].join('|');
            if (layout === captionLayout) return;
            const measure = caption.cloneNode(false);
            measure.removeAttribute('id');
            measure.removeAttribute('aria-live');
            measure.removeAttribute('data-i18n');
            measure.setAttribute('aria-hidden', 'true');
            Object.assign(measure.style, { position: 'absolute', top: '0', left: '0', visibility: 'hidden', pointerEvents: 'none', width: style.width, minHeight: '0', margin: '0' });
            caption.parentElement.append(measure);
            let height = 0;
            for (const value of ['single', 'global', 'replication', 'failover']) {
                measure.textContent = text(`${value}Detail`);
                height = Math.max(height, measure.getBoundingClientRect().height);
            }
            measure.remove();
            caption.style.minHeight = `${Math.ceil(height)}px`;
            captionLayout = layout;
        }

        function updateScenarioLabels() {
            const caption = root.querySelector('.cc-scenario-caption');
            caption.dataset.i18n = `cc${scenario}Detail`;
            caption.textContent = text(`${scenario}Detail`);
            root.querySelector('.cc-regions').hidden = scenario === 'single';
            root.querySelector('.cc-network-key').hidden = scenario === 'single';
            root.querySelector('.cc-recovery-note').hidden = scenario === 'single';
            root.querySelector('[data-cc-key="replication"]').hidden = scenario !== 'replication';
            for (const region of root.querySelectorAll('[data-cc-region]')) {
                const failed = scenario === 'failover' && region.dataset.ccRegion === '0';
                region.classList.toggle('is-unavailable', failed);
                const status = region.querySelector('[data-cc-health]');
                const key = failed ? 'unavailable' : scenario === 'failover' ? 'receiving' : 'serving';
                status.dataset.i18n = `cc${key}`;
                status.textContent = text(key);
            }
            regionLabels.forEach((update, index) => update(`${String(index + 1).padStart(2, '0')}  ${root.querySelector(`[data-i18n="ccregion${index}"]`).textContent}`));
            routerLabel(text('routing'));
            customerLabel(text('customers'));
            faultLabel(text('unavailable'));
        }

        function resetCamera() {
            camera.position.copy(scenario === 'single' ? homePosition : new THREE.Vector3(0, 16, 32));
            controls.target.copy(scenario === 'single' ? homeTarget : new THREE.Vector3(0, -1, 0));
            camera.zoom = 1;
            controls.update();
            resize();
        }

        function setScenario(value) {
            const layoutChanged = model.visible !== (value === 'single');
            scenario = value;
            stage.dataset.scenario = value;
            root.dataset.scenario = value;
            model.visible = value === 'single';
            globalModel.visible = value !== 'single';
            faultMarker.visible = value === 'failover';
            healthyMaterials.forEach((surface, mesh) => mesh.material = value === 'failover' ? faultSurface : surface);
            incoming.group.traverse(mesh => mesh.material?.color.set(value === 'failover' ? 0x119777 : 0x188bc1));
            for (const button of root.querySelectorAll('[data-cc-scenario]')) button.setAttribute('aria-pressed', String(button.dataset.ccScenario === value));
            updateScenarioLabels();
            const selectedRoutes = value === 'single' ? localRoutes : value === 'failover' ? [incoming, ...failoverRoutes] : [incoming, ...trafficRoutes, ...(value === 'replication' ? replicaRoutes : [])];
            networkAnimation.play(selectedRoutes);
            if (layoutChanged) resetCamera();
            else resize();
        }

        const highlights = {
            cloud: ['foundation'], models: ['foundation', 'web', 'backend', 'database'],
            fundamentals: ['foundation'], hierarchy: ['boundary'], compute: ['web', 'backend'],
            networking: ['network', 'boundary'], storage: ['database'], idsec: ['boundary'],
            cost: ['operations'], governance: ['boundary'], tools: ['operations'], monitoring: ['operations']
        };
        let activeKind;
        function highlight(kind) {
            if (activeKind === kind) return;
            activeKind = kind;
            const selected = highlights[kind] || [];
            for (const [name, group] of Object.entries(groups)) {
                group.position.y = selected.includes(name) ? 0.16 : 0;
            }
            regionalCopies.forEach(workload => workload.position.y = kind === 'fundamentals' || kind === 'networking' ? 0.16 : 0);
            render();
        }

        function render() {
            for (const label of billboards) label.quaternion.copy(camera.quaternion);
            renderer.render(scene, camera);
        }

        function resize() {
            fitScenarioCaption();
            const width = stage.clientWidth;
            const height = stage.clientHeight;
            if (!width || !height) return;
            const compact = width < 600;
            if (compact !== compactLayout) {
                compactLayout = compact;
                const positions = compact ? [[-6, 0.8, 2], [0, 6, -4], [6, 0.8, 2]] : [[-9, 1.4, 1], [0, 3.6, -4], [9, 1.4, 1]];
                regionPositions.forEach((position, index) => {
                    position.set(...positions[index]);
                    regionalGroups[index].position.copy(position);
                });
                faultMarker.position.set(compact ? 3 : 0, compact ? -0.6 : 0, compact ? 1 : 0);
                trafficRoutes.forEach((route, index) => networkAnimation.reshape(route, trafficCurve(index)));
                replicaRoutes.forEach((route, index) => networkAnimation.reshape(route, replicaCurve(index)));
                failoverRoutes.forEach((route, index) => networkAnimation.reshape(route, failoverCurve(index)));
            }
            renderer.setSize(width, height, false);
            const aspect = width / height;
            for (const label of billboards) label.quaternion.copy(camera.quaternion);
            const projected = new THREE.Box3();
            camera.updateMatrixWorld();
            const current = scenario === 'single' ? model : globalModel;
            current.updateWorldMatrix(true, true);
            current.traverse(object => {
                if (!object.geometry || object.parent === earth) return;
                if (object === earth) {
                    const center = earth.getWorldPosition(new THREE.Vector3()).applyMatrix4(camera.matrixWorldInverse);
                    projected.expandByPoint(center.clone().addScalar(6.82));
                    projected.expandByPoint(center.clone().addScalar(-6.82));
                    return;
                }
                object.geometry.computeBoundingBox();
                const bounds = object.geometry.boundingBox;
                const transform = new THREE.Matrix4().multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);
                for (const horizontal of [bounds.min.x, bounds.max.x]) {
                    for (const vertical of [bounds.min.y, bounds.max.y]) {
                        for (const depth of [bounds.min.z, bounds.max.z]) {
                            projected.expandByPoint(new THREE.Vector3(horizontal, vertical, depth).applyMatrix4(transform));
                        }
                    }
                }
            });
            const center = projected.getCenter(new THREE.Vector3());
            const halfHeight = Math.max((projected.max.y - projected.min.y) / 2, (projected.max.x - projected.min.x) / (2 * aspect)) * 1.1;
            camera.left = center.x - halfHeight * aspect;
            camera.right = center.x + halfHeight * aspect;
            camera.top = center.y + halfHeight;
            camera.bottom = center.y - halfHeight;
            camera.updateProjectionMatrix();
            render();
        }

        function syncLabels() {
            networkAnimation.syncLabels();
            updateScenarioLabels();
            tierLabels.forEach((update, index) => update(root.querySelector(`[data-cc-tier="${index}"] h3`).textContent));
            for (const button of toolbar.querySelectorAll('[data-cc-command]')) {
                button.title = button.querySelector('[data-i18n]').textContent;
                button.setAttribute('aria-label', button.title);
            }
            resize();
        }

        function syncTheme() {
            const dark = document.body.classList.contains('theme-dark');
            earthSurface.color.set(dark ? 0x35494d : 0xdce9e6);
            earthGrid.color.set(dark ? 0x8caeae : 0x688e88);
            surfaces.cloud.color.set(dark ? 0x647985 : 0xf6fafb);
            surfaces.plinth.color.set(dark ? 0x81929a : 0xdce5e9);
            azureLabel('Microsoft Azure');
            render();
        }

        for (const link of root.querySelectorAll('.cc-link')) {
            link.addEventListener('pointerenter', () => highlight(link.dataset.ccKind), { signal: events.signal });
            link.addEventListener('pointerleave', () => highlight(root.querySelector('.cc-link:focus')?.dataset.ccKind), { signal: events.signal });
            link.addEventListener('focus', () => highlight(link.dataset.ccKind), { signal: events.signal });
            link.addEventListener('blur', () => highlight(root.querySelector('.cc-link:hover')?.dataset.ccKind), { signal: events.signal });
        }
        for (const button of toolbar.querySelectorAll('[data-cc-command]')) {
            button.addEventListener('click', () => {
                if (button.dataset.ccCommand === 'resetView') {
                    resetCamera();
                } else {
                    camera.zoom = THREE.MathUtils.clamp(camera.zoom * (button.dataset.ccCommand === 'zoomIn' ? 1.2 : 1 / 1.2), 0.7, 1.6);
                    camera.updateProjectionMatrix();
                    render();
                }
            }, { signal: events.signal });
        }
        for (const button of root.querySelectorAll('[data-cc-scenario]')) button.addEventListener('click', () => setScenario(button.dataset.ccScenario), { signal: events.signal });
        stage.hidden = false;
        toolbar.hidden = false;
        controls.addEventListener('change', resize);
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(stage);
        themeObserver = new MutationObserver(syncTheme);
        themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        languageObserver = new MutationObserver(syncLabels);
        languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
        syncLabels();
        syncTheme();
        setScenario('single');
        window.addEventListener('pagehide', event => {
            if (!event.persisted) dispose();
        }, { once: true, signal: events.signal });
    } catch (error) {
        dispose();
        console.warn('Contoso cloud 3D unavailable; the workload and lesson links remain available.', error);
    }
}

mountCloudWorkload();