const root = document.getElementById('house-hub');
if (root) initializeHouse();

function initializeHouse() {
    const copy = JSON.parse(document.getElementById('hh-copy').content.textContent);
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const stage = root.querySelector('.hh-model-stage');
    const status = root.querySelector('.hh-status');
    const cameraTools = root.querySelector('.hh-camera');
    const locales = ['en','es','ja','ko','pt'];
    const word = key => copy[key][Math.max(0,locales.indexOf(document.documentElement.lang))];
    let model;
    let mounting;
    let failed = false;
    let selected = 0;
    let view = '2d';

    function highlight(topic) {
        selected = topic;
        for (const link of root.querySelectorAll('[data-topic]')) link.classList.toggle('is-active',Number(link.dataset.topic) === topic);
        model?.highlight(topic);
    }
    function localize() {
        root.querySelector('.hh-tabs').setAttribute('aria-label',word('hhView'));
        for (const button of root.querySelectorAll('[data-label-key]')) {
            button.title = word(button.dataset.labelKey);
            button.setAttribute('aria-label',button.title);
        }
        for (const link of root.querySelectorAll('.hh-pin')) link.title = root.querySelector('#hh-title-'+link.dataset.topic).textContent;
        status.textContent = word(failed?'hhFallback':'hhLoading');
    }
    function fallback() {
        failed = true;
        model?.dispose();
        model = null;
        stage.querySelector('canvas')?.remove();
        cameraTools.hidden = true;
        choose('2d');
        status.hidden = false;
        localize();
    }
    async function choose(next) {
        view = next === '3d' && !failed ? '3d' : '2d';
        for (const tab of tabs) {
            const active = tab.dataset.view === view;
            tab.setAttribute('aria-selected',String(active));
            tab.tabIndex = active ? 0 : -1;
            document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
        }
        const url = new URL(location.href);
        url.searchParams.set('view',view);
        history.replaceState(null,'',url);
        status.hidden = view !== '3d' && !failed;
        if (view !== '3d') return;
        if (!mounting) {
            mounting = mountHouse(stage,fallback).then(result => {
                model = result;
                if (failed) { model.dispose(); return; }
                highlight(selected);
                stage.dataset.ready = 'true';
                cameraTools.hidden = false;
                status.hidden = true;
                model.resize();
            }).catch(fallback);
        }
        await mounting;
        if (model && !failed) status.hidden = true;
        model?.resize();
    }
    for (const tab of tabs) {
        tab.addEventListener('click',()=>choose(tab.dataset.view));
        tab.addEventListener('keydown',event=>{
            if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
            event.preventDefault();
            const next = event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs[1] : tabs[1-tabs.indexOf(tab)];
            choose(next.dataset.view);
            next.focus();
        });
    }
    for (const link of root.querySelectorAll('[data-topic]')) {
        link.addEventListener('pointerenter',()=>highlight(Number(link.dataset.topic)));
        link.addEventListener('focus',()=>highlight(Number(link.dataset.topic)));
    }
    for (const button of cameraTools.querySelectorAll('button')) button.addEventListener('click',()=>model?.camera(button.dataset.camera));
    new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    localize();
    highlight(0);
    choose(new URLSearchParams(location.search).get('view') === '2d' ? '2d' : '3d');
}

async function mountHouse(stage,onFailure) {
    const THREE = await import('../vendor/contoso-3d/three.module.min.js');
    const {OrbitControls} = await import('../vendor/contoso-3d/OrbitControls.js');
    const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000,0);
    renderer.domElement.setAttribute('aria-hidden','true');
    renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();onFailure();},{once:true});
    stage.prepend(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-9,9,7,-7,.1,100);
    camera.position.set(12,16,20);
    const controls = new OrbitControls(camera,renderer.domElement);
    controls.target.set(-.5,0,0);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = false;
    controls.minPolarAngle = .3;
    controls.maxPolarAngle = .95;
    controls.minAzimuthAngle = -.6;
    controls.maxAzimuthAngle = .85;
    controls.update();
    controls.saveState();
    scene.add(new THREE.HemisphereLight(0xffffff,0x6b8690,2.5));
    const light = new THREE.DirectionalLight(0xffffff,3);
    light.position.set(-5,12,8);
    scene.add(light);
    const geometry = new THREE.Group();
    scene.add(geometry);
    const emojiTextures = [];
    const materials = {};
    for (const [name,color] of Object.entries({wall:0xe0e5e5,floor:0xe5eeee,base:0x708c91,blue:0x257eae,green:0x378477,amber:0xc68c38,ink:0x304d5a,white:0xf8faf9,sofa:0x559fac,bed:0x93bdcf,wood:0xc7bbaa,garden:0xaac5b4})) materials[name] = new THREE.MeshStandardMaterial({color,roughness:.85});
    for (const [name,material] of Object.entries(materials)) material.name = name;
    function box(parent,x,y,z,width,height,depth,material) {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(width,height,depth),materials[material]);
        mesh.position.set(x,y,z);
        parent.add(mesh);
        return mesh;
    }
    function cylinder(parent,x,y,z,radius,height,material) {
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,height,24),materials[material]);
        mesh.position.set(x,y,z);
        parent.add(mesh);
        return mesh;
    }
    const areas = Array.from({length:7},()=>new THREE.Group());
    areas.forEach(area=>geometry.add(area));
    box(areas[0],.7,-.35,0,9.5,.4,7,'base');
    box(areas[0],.7,-.12,0,9.1,.1,6.6,'floor');
    box(areas[0],.7,.9,-3.3,9.5,2,.16,'wall');
    box(areas[0],5.37,.55,0,.16,1.3,6.6,'wall');
    box(areas[0],-3.97,.55,0,.16,1.3,6.6,'wall');
    box(areas[0],-.65,.42,3.3,6.6,1.1,.16,'wall');
    box(areas[0],4.65,.42,3.3,1.5,1.1,.16,'wall');
    box(areas[0],1.45,.5,0,.13,1.4,6.6,'wall');
    box(areas[0],3.42,.35,.15,3.8,1.1,.13,'wall');
    box(areas[0],-1.2,.35,.45,5.4,1.1,.13,'wall');
    for (const windowX of [-2.6,-.7,2.6,4.2]) {
        box(areas[0],windowX,1,-3.19,1.05,.8,.06,'blue');
        box(areas[0],windowX,1,-3.14,.04,.8,.02,'white');
    }
    box(areas[0],.7,2,-3.3,9.7,.12,.5,'blue');
    box(areas[1],-1.25,.27,-1.1,3.3,.55,1,'sofa');
    box(areas[1],-1.25,.68,-1.55,3.3,.7,.18,'sofa');
    for (const armX of [-2.84,.34]) box(areas[1],armX,.5,-1.1,.2,.65,1,'sofa');
    for (const cushionX of [-2.25,-1.25,-.25]) box(areas[1],cushionX,.59,-1.05,.9,.12,.8,'bed');
    box(areas[1],-1.25,.25,-.1,1.8,.12,.65,'wood');
    box(areas[1],-1.25,.4,-2.8,2.5,.8,.15,'ink');
    box(areas[1],-1.25,.43,-2.7,2.25,.58,.04,'blue');
    for (const bedX of [-2.8,-.75]) {
        box(areas[1],bedX,.12,1.85,1.15,.3,2,'wood');
        box(areas[1],bedX,.33,1.85,1.1,.23,1.95,'bed');
        box(areas[1],bedX,.52,1.22,.85,.18,.5,'white');
    }
    box(areas[2],-6,-.35,-.5,2.7,.4,3.8,'base');
    box(areas[2],-6,-.1,-.5,2.5,.08,3.6,'floor');
    box(areas[2],-6,.55,-2.35,2.7,1.45,.16,'wall');
    box(areas[2],-7.25,.45,-.5,.16,1.25,3.7,'wall');
    box(areas[2],-6.55,.2,-.8,1,.4,1.8,'bed');
    box(areas[2],-6.55,.47,-1.36,.8,.15,.5,'white');
    box(areas[3],3.15,.8,3.31,1.3,1.9,.16,'blue');
    cylinder(areas[3],3.48,.84,3.48,.065,.1,'amber').rotation.x = Math.PI/2;
    box(areas[3],3.15,-.06,4.15,1.9,.16,1.4,'wood');
    box(areas[4],3.3,.63,-2,2.5,.12,1.05,'wood');
    for(const deskX of [2.22,4.37]) box(areas[4],deskX,.24,-2,.13,.8,.8,'white');
    box(areas[4],3.3,1.03,-2.23,.95,.65,.1,'ink');
    box(areas[4],3.3,1.03,-2.16,.82,.49,.04,'blue');
    cylinder(areas[4],3.3,.35,-.95,.38,.14,'sofa');
    box(areas[4],3.3,.55,1.12,2.6,.15,.7,'wood');
    box(areas[4],4,.91,1.12,.75,.55,.4,'green');
    box(areas[4],2.43,.88,1.12,.36,.52,.32,'ink');
    box(areas[5],-3.9,-.3,5,2.4,.4,1.4,'amber');
    box(areas[5],-3.9,.04,5,1.7,.22,.95,'white');
    for(const offset of [-.5,0,.5]) box(areas[5],-3.9+offset,.18,5,.32,.06,.62,'amber');
    box(areas[6],.5,-.3,5.1,2.7,.4,1.6,'green');
    box(areas[6],.5,.04,5.1,1.75,.2,1.05,'white');
    box(areas[6],.5,.17,5.1,.045,.04,1.05,'green');
    for(const ruleX of [-.05,1.05]) for(const ruleZ of [4.86,5.12,5.38]) box(areas[6],ruleX,.17,ruleZ,.62,.035,.04,'green');
    for (const [emoji,position,area] of [['👨',[4.45,1.35,2.15],4],['👩',[4.5,1.5,-2.4],4],['🧑',[-2.8,1,2.45],1],['👧',[-.65,1,2.45],1],['🧑‍🦱',[-5.35,1,.4],2]]) {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d');
        context.font = '96px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(emoji,64,68);
        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        emojiTextures.push(texture);
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({map:texture,transparent:true,depthTest:false}));
        sprite.position.set(...position);
        sprite.scale.set(1,1,1);
        areas[area].add(sprite);
    }
    const boundary = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints([[-4.65,-.43,-3.95],[6.1,-.43,-3.95],[6.1,-.43,6.2],[-4.65,-.43,6.2]].map(point=>new THREE.Vector3(...point))),new THREE.LineDashedMaterial({color:0x378477,dashSize:.28,gapSize:.15}));
    boundary.computeLineDistances();
    geometry.add(boundary);
    const anchors = [[.65,2.7,-3.3],[-1.25,1.2,-.5],[-6,1.8,-.5],[3.15,2.1,3.4],[3.3,1.85,-1.8],[-3.9,.9,5],[.5,1,5.1]].map(point=>new THREE.Vector3(...point));
    const pins = [...stage.querySelectorAll('.hh-pin')];
    const bounds = new THREE.Box3().setFromObject(geometry);
    const center = bounds.getCenter(new THREE.Vector3());
    controls.target.copy(center);
    camera.position.copy(center).add(new THREE.Vector3(12,16,20));
    controls.update();
    controls.saveState();
    let disposed = false;
    function render() {
        if (disposed || !stage.clientWidth || stage.closest('[hidden]')) return;
        camera.updateMatrixWorld();
        renderer.render(scene,camera);
        pins.forEach((pin,index)=>{
            const point = anchors[index].clone().project(camera);
            pin.style.left = (point.x+1)*stage.clientWidth/2+'px';
            pin.style.top = (1-point.y)*stage.clientHeight/2+'px';
        });
        stage.dataset.rendered = 'true';
    }
    function resize() {
        if (!stage.clientWidth || stage.closest('[hidden]')) return;
        const aspect = stage.clientWidth/stage.clientHeight;
        const extent = Math.max(6.7,8/aspect);
        camera.left = -extent*aspect;
        camera.right = extent*aspect;
        camera.top = extent;
        camera.bottom = -extent;
        camera.updateProjectionMatrix();
        renderer.setSize(stage.clientWidth,stage.clientHeight,false);
        render();
    }
    function theme() {
        const dark = document.body.classList.contains('theme-dark');
        materials.wall.color.setHex(dark?0xa2bac4:0xe0e5e5);
        materials.floor.color.setHex(dark?0x526975:0xe5eeee);
        materials.base.color.setHex(dark?0x3d525f:0x708c91);
        boundary.material.color.setHex(dark?0x81d9be:0x378477);
        geometry.traverse(object=>{if (object.isMesh) object.material.color.copy(materials[object.material.name].color);});
        render();
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(stage);
    const themeObserver = new MutationObserver(theme);
    themeObserver.observe(document.body,{attributes:true,attributeFilter:['class']});
    controls.addEventListener('change',render);
    theme();
    resize();
    return {
        resize,
        highlight(topic) {
            for (const [index,area] of areas.entries()) area.traverse(object=>{
                if (!object.isMesh) return;
                if (!object.userData.ownMaterial) {object.material = object.material.clone();object.userData.ownMaterial = true;}
                object.material.emissive.setHex(index === topic ? 0x164353 : 0x000000);
                object.material.emissiveIntensity = index === topic ? .2 : 0;
            });
            render();
        },
        camera(action) {
            if (action === 'reset') {controls.reset();camera.zoom = 1;}
            else camera.zoom = THREE.MathUtils.clamp(camera.zoom*(action === 'in'?1.15:1/1.15),.75,1.25);
            camera.updateProjectionMatrix();
            render();
        },
        dispose() {
            disposed = true;
            resizeObserver.disconnect();
            themeObserver.disconnect();
            controls.dispose();
            geometry.traverse(object=>{object.geometry?.dispose();object.material?.dispose();});
            Object.values(materials).forEach(material=>material.dispose());
            emojiTextures.forEach(texture=>texture.dispose());
            renderer.dispose();
        }
    };
}