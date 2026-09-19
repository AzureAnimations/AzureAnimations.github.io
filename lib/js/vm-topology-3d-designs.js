// Alternative 3D layouts for the VM hub topology. The original estate map lives in vm-topology-3d.js;
// each design here teaches a different reading of the same nine topics through the same public API.
export async function mountVmTopologyDesign({design,section,nodes,text,onSelect,onFailure}) {
    const THREE=await import('../vendor/contoso-3d/three.module.min.js');
    const {OrbitControls}=await import('../vendor/contoso-3d/OrbitControls.js');
    const host=section.querySelector('.vmt-3d-stage');
    const nodeOf=new Map(nodes.map(node=>[Number(node.dataset.vmtTopic),node]));
    // blue = build and capacity, green = resilience, amber = operations; matches the 2D walkthrough accent
    const phaseOf=[0,1,1,1,0,0,2,2,2];
    const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.setClearColor(0,0);
    renderer.domElement.setAttribute('aria-hidden','true');
    host.append(renderer.domElement);
    const scene=new THREE.Scene();
    const model=new THREE.Group();
    scene.add(model);
    const framing=design==='ring'
        ?{position:[0,17,23],target:[0,1.2,0],polar:[Math.PI/7,Math.PI/2.5],azimuth:[-.6,.6]}
        :{position:[9,13,21],target:[0,2,0],polar:[Math.PI/6,Math.PI/2.6],azimuth:[-.5,.55]};
    const camera=new THREE.OrthographicCamera(-15,15,10,-10,.1,200);
    camera.position.set(...framing.position);
    const controls=new OrbitControls(camera,renderer.domElement);
    controls.target.set(...framing.target);
    controls.enablePan=false;
    controls.enableDamping=false;
    controls.enableZoom=false;
    controls.minPolarAngle=framing.polar[0];controls.maxPolarAngle=framing.polar[1];
    controls.minAzimuthAngle=framing.azimuth[0];controls.maxAzimuthAngle=framing.azimuth[1];
    controls.update();
    const home=camera.position.clone(),homeTarget=controls.target.clone();
    scene.add(new THREE.HemisphereLight(0xffffff,0x7c8d99,2.3));
    const keyLight=new THREE.DirectionalLight(0xffffff,2.7);
    keyLight.position.set(-9,18,13);scene.add(keyLight);
    const materials=[],textures=[],labels=[],contexts=[],topics=new Map(),billboards=[],accents=[];
    let visible=true,disposed=false,selected=0,hovered=-1,frame=null,zoom=1;
    const palette={};
    const material=(color,extra={})=>{const value=new THREE.MeshStandardMaterial({color,roughness:.6,metalness:.08,...extra});materials.push(value);return value;};
    const surface=material('#c7d4dc'),trim=material('#7b8c98'),rack=material('#31465a'),vent=material('#16242f');
    const box=(parent,width,height,depth,point,appearance)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(width,height,depth),appearance);mesh.position.set(...point);parent.add(mesh);return mesh;};
    const cylinder=(parent,radius,height,point,appearance,segments=36)=>{const mesh=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,height,segments),appearance);mesh.position.set(...point);parent.add(mesh);return mesh;};
    function tube(parent,points,appearance,radius=.035) {
        const vectors=points.map(point=>new THREE.Vector3(...point));
        const curve=new THREE.CurvePath();
        vectors.slice(1).forEach((vector,index)=>curve.add(new THREE.LineCurve3(vectors[index],vector)));
        const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,Math.max(8,vectors.length*6),radius,8,false),appearance);
        parent.add(mesh);return mesh;
    }
    const outline=(parent,width,depth,height,appearance,radius=.045)=>tube(parent,[[-width/2,height,-depth/2],[width/2,height,-depth/2],[width/2,height,depth/2],[-width/2,height,depth/2],[-width/2,height,-depth/2]],appearance,radius);
    function arrow(parent,from,to,appearance) {
        const start=new THREE.Vector3(...from),end=new THREE.Vector3(...to);
        const direction=end.clone().sub(start).normalize();
        tube(parent,[from,end.clone().addScaledVector(direction,-.22).toArray()],appearance,.035);
        const tip=new THREE.Mesh(new THREE.ConeGeometry(.12,.34,14),appearance);
        tip.position.copy(end).addScaledVector(direction,-.17);
        tip.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction);
        parent.add(tip);return tip;
    }
    function topic(index,anchor) {
        const group=new THREE.Group();
        group.userData.topic=index;
        model.add(group);
        const accent=material('#006bb1');
        const plinth=material('#c7d4dc');
        accents.push({accent,phase:phaseOf[index]});
        const entry={group,accent,plinth};
        topics.set(index,entry);
        const element=document.createElement('button');
        element.type='button';element.className='vmt-3d-label';element.dataset.vmt3dTopic=String(index);
        const number=document.createElement('span');number.className='vmt-3d-number';number.textContent=String(index+1).padStart(2,'0');
        const name=document.createElement('span');name.className='vmt-3d-name';
        element.append(number,name);host.append(element);
        element.addEventListener('click',()=>onSelect(index));
        element.addEventListener('pointerenter',()=>highlight(index));
        element.addEventListener('pointerleave',()=>highlight(-1));
        element.addEventListener('focus',()=>highlight(index));
        element.addEventListener('blur',()=>highlight(-1));
        labels.push({element,name,node:nodeOf.get(index),anchor:new THREE.Vector3(...anchor),index});
        return entry;
    }
    function context(key,anchor) {
        const element=document.createElement('span');
        element.className='vmt-3d-context';host.append(element);
        contexts.push({element,key,anchor:new THREE.Vector3(...anchor)});
    }
    const loader=new THREE.TextureLoader();
    async function emblem(index,parent,size,point) {
        try {
            const texture=await loader.loadAsync(nodeOf.get(index).querySelector('img').src);
            texture.colorSpace=THREE.SRGBColorSpace;textures.push(texture);
            const appearance=new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false});
            materials.push(appearance);
            const plane=new THREE.Mesh(new THREE.PlaneGeometry(size,size),appearance);
            plane.position.set(...point);parent.add(plane);billboards.push(plane);
        } catch {host.dataset.vmtAssetError='true';}
    }
    function serverRack(parent,point,scale,appearance) {
        const group=new THREE.Group();
        group.position.set(...point);group.scale.setScalar(scale);parent.add(group);
        box(group,1.35,2.2,1,[0,1.1,0],rack);
        for(let unit=0;unit<4;unit++) {
            box(group,1.14,.34,.08,[0,.42+unit*.49,.53],appearance);
            box(group,.62,.12,.05,[-.16,.42+unit*.49,.58],vent);
        }
        box(group,1.45,.1,1.1,[0,2.22,0],trim);
        return group;
    }
    // Scope tower: what sits inside the region, what is only an alternative, and what attaches from outside.
    async function buildTower() {
        box(model,13,.5,10,[0,-.25,0],surface);
        outline(model,13,10,.02,trim,.05);
        const zones=topic(2,[-5.6,1.1,3.3]);
        for(const horizontal of [-3.2,3.2]) {
            box(zones.group,5,.45,6.4,[horizontal,.48,0],zones.plinth);
            outline(zones.group,5,6.4,.72,zones.accent,.05);
        }
        await emblem(2,zones.group,.8,[0,1.35,3.2]);
        const machine=topic(0,[-3.2,3.4,1.2]);
        serverRack(machine.group,[-3.2,.7,0],1,machine.accent);
        await emblem(0,machine.group,.78,[-3.2,3.15,0]);
        const replica=new THREE.Group();model.add(replica);
        serverRack(replica,[3.2,.7,0],.92,trim);
        const scaleSet=topic(3,[4.6,4.6,3.9]);
        outline(scaleSet.group,11.8,7.8,3.85,scaleSet.accent,.075);
        for(const horizontal of [-5.9,5.9])for(const depth of [-3.9,3.9])box(scaleSet.group,.16,3.9,.16,[horizontal,1.95,depth],scaleSet.accent);
        await emblem(3,scaleSet.group,.78,[0,4.35,0]);
        const sizes=topic(4,[-3.2,1.9,-4.2]);
        for(const [order,horizontal] of [-1.1,0,1.1].entries())box(sizes.group,.85,.55+order*.55,.85,[-3.2+horizontal,.28+(.55+order*.55)/2,-4.2],order===2?sizes.accent:trim);
        await emblem(4,sizes.group,.7,[-3.2,1.75,-4.2]);
        const disks=topic(5,[-3.2,1.4,4.4]);
        for(const horizontal of [-1.2,0,1.2])for(let layer=0;layer<3;layer++)cylinder(disks.group,.52,.22,[-3.2+horizontal,.36+layer*.26,4.3],layer===2?disks.accent:trim);
        await emblem(5,disks.group,.7,[-3.2,1.25,4.3]);
        tube(model,[[-3.2,.95,2.2],[-3.2,.95,3.9]],trim,.03);
        tube(model,[[-3.2,.95,-3.5],[-3.2,.95,-2.3]],trim,.03);
        const sets=topic(1,[-9.4,2.5,1.6]);
        box(sets.group,4.6,.42,4.6,[-9.4,.2,0],sets.plinth);
        outline(sets.group,4.6,4.6,.43,sets.accent,.05);
        serverRack(sets.group,[-10.4,.4,0],.6,sets.accent);
        serverRack(sets.group,[-8.4,.4,0],.6,sets.accent);
        await emblem(1,sets.group,.7,[-9.4,2.3,0]);
        for(const [order,index] of [6,7,8].entries()) {
            const depth=-4.2+order*4.2;
            const service=topic(index,[9.4,3.4+order*.35,depth+.9]);
            cylinder(service.group,1.15,2.5,[9.4,1.25,depth],service.plinth,8);
            cylinder(service.group,1.3,.3,[9.4,2.6,depth],service.accent,8);
            tube(model,[[6.6,.35,depth],[8.5,.35,depth],[8.5,1,depth]],trim,.03);
            await emblem(index,service.group,.8,[9.4,3.3,depth]);
        }
        box(model,2.6,.4,1.1,[0,.2,7],rack);
        for(let port=0;port<6;port++)box(model,.2,.11,.06,[-.85+port*.34,.2,7.6],material('#54dbc0'));
        tube(model,[[0,.42,6.5],[0,.42,4.6],[0,3.85,4.6]],trim,.03);
        context('vmtRegion',[0,.1,5.4]);
        context('vmtZone1',[-3.2,.8,-3.4]);
        context('vmtZone2',[3.2,.8,-3.4]);
        context('vmtReplica',[3.2,3.2,0]);
        context('vmtAlternative',[-9.4,3.1,0]);
        context('vmtUsers',[0,.75,7.6]);
    }
    // Journey ring: the same nine topics read as an ordered climb from the first machine to daily operations.
    async function buildRing() {
        const radius=7.4;
        const places=[];
        cylinder(model,2.5,.4,[0,.2,0],surface,8);
        outline(model,3.4,3.4,.42,trim,.05);
        box(model,1.9,.42,.8,[0,.62,0],rack);
        for(let port=0;port<5;port++)box(model,.18,.1,.06,[-.6+port*.3,.62,.44],material('#54dbc0'));
        for(let index=0;index<9;index++) {
            const angle=(-125+index*250/8)*Math.PI/180;
            const horizontal=Math.sin(angle)*radius,depth=Math.cos(angle)*radius;
            const height=.55+index*.22;
            places.push([horizontal,height,depth]);
            const stop=topic(index,[horizontal,height+1.85,depth]);
            cylinder(stop.group,1.05,height,[horizontal,height/2,depth],stop.plinth,6);
            cylinder(stop.group,1.16,.16,[horizontal,height+.08,depth],stop.accent,6);
            await emblem(index,stop.group,.85,[horizontal,height+.85,depth]);
        }
        for(let index=0;index<8;index++) {
            const start=places[index],end=places[index+1];
            const appearance=material('#006bb1');
            accents.push({accent:appearance,phase:phaseOf[index]});
            const path=[[start[0],.1,start[2]],[start[0]*1.06,.1,start[2]*1.06],[end[0]*1.06,.1,end[2]*1.06],[end[0],.1,end[2]]];
            if(index===7)arrow(model,path[2],path[3],appearance);
            else tube(model,path,appearance,.045);
        }
        context('vmtUsers',[0,1.1,1.4]);
    }
    await (design==='ring'?buildRing():buildTower());
    model.updateMatrixWorld(true);
    const corners=[];
    model.traverse(object=>{
        if(!object.geometry||billboards.includes(object))return;
        object.geometry.computeBoundingBox();
        const bounds=object.geometry.boundingBox;
        for(const horizontal of [bounds.min.x,bounds.max.x])for(const vertical of [bounds.min.y,bounds.max.y])for(const depth of [bounds.min.z,bounds.max.z])corners.push(new THREE.Vector3(horizontal,vertical,depth).applyMatrix4(object.matrixWorld));
    });
    function fitCamera() {
        const width=host.clientWidth,height=host.clientHeight;
        if(!width||!height||disposed)return;
        camera.updateMatrixWorld();
        const projected=new THREE.Box3();
        for(const corner of corners)projected.expandByPoint(corner.clone().applyMatrix4(camera.matrixWorldInverse));
        const center=projected.getCenter(new THREE.Vector3()),size=projected.getSize(new THREE.Vector3());
        const aspect=width/height;
        const sideRoom=innerWidth<=760?40:110;
        const span=Math.max(size.y/(1-70/height),size.x/aspect/(1-sideRoom/width));
        camera.left=center.x-span*aspect/2;camera.right=center.x+span*aspect/2;
        camera.top=center.y+span/2;camera.bottom=center.y-span/2;
        camera.zoom=zoom;camera.updateProjectionMatrix();
        renderer.setSize(width,height,false);render();
    }
    function projectLabels() {
        const width=host.clientWidth,height=host.clientHeight;
        const placed=[];
        for(const label of [...labels,...contexts]) {
            const point=label.anchor.clone().project(camera);
            const labelWidth=label.element.offsetWidth,labelHeight=label.element.offsetHeight;
            const preferredX=THREE.MathUtils.clamp((point.x+1)*width/2,labelWidth/2+5,width-labelWidth/2-5);
            const preferredY=THREE.MathUtils.clamp((-point.y+1)*height/2-(label.key?labelHeight:0),5,height-labelHeight-5);
            const candidates=[];
            for(let row=-8;row<=8;row++)for(let column=-5;column<=5;column++) {
                const horizontal=THREE.MathUtils.clamp(preferredX+column*(labelWidth/2+6),labelWidth/2+5,width-labelWidth/2-5);
                const vertical=THREE.MathUtils.clamp(preferredY+row*(labelHeight+7),5,height-labelHeight-5);
                let overlap=0;
                for(const rect of placed) {
                    const shared=Math.min(horizontal+labelWidth/2,rect.right)-Math.max(horizontal-labelWidth/2,rect.left)+8;
                    const stacked=Math.min(vertical+labelHeight,rect.bottom)-Math.max(vertical,rect.top)+10;
                    if(shared>0&&stacked>0)overlap+=shared*stacked;
                }
                candidates.push({horizontal,vertical,overlap,distance:(horizontal-preferredX)**2+(vertical-preferredY)**2});
            }
            candidates.sort((first,second)=>first.overlap-second.overlap||first.distance-second.distance);
            const {horizontal,vertical}=candidates[0];
            placed.push({left:horizontal-labelWidth/2,right:horizontal+labelWidth/2,top:vertical,bottom:vertical+labelHeight});
            label.element.style.left=horizontal+'px';
            label.element.style.top=(vertical+(label.key?labelHeight:0))+'px';
            label.element.hidden=point.z<-1||point.z>1;
        }
    }
    function render() {
        if(disposed||!visible||!host.clientWidth||!host.clientHeight)return;
        for(const plane of billboards)plane.quaternion.copy(camera.quaternion);
        renderer.render(scene,camera);projectLabels();
        host.dataset.vmtRendered='true';
    }
    function requestRender() {
        if(disposed||!visible||document.hidden||frame!==null)return;
        frame=requestAnimationFrame(()=>{frame=null;render();});
    }
    function highlight(index) {
        hovered=index;
        for(const [topic,entry] of topics) {
            const active=topic===selected,hover=topic===hovered;
            entry.plinth.color.set(hover?palette.paper:palette.surface);
            entry.accent.emissive.set(active||hover?palette.blue:'#000000');
            entry.accent.emissiveIntensity=hover?.55:active?.28:0;
        }
        for(const label of labels)label.element.classList.toggle('is-active',label.index===selected);
        requestRender();
    }
    function theme() {
        const style=getComputedStyle(section);
        for(const token of ['surface','paper','line','blue','green','amber','text'])palette[token]=style.getPropertyValue('--'+token).trim();
        const dark=document.body.classList.contains('theme-dark');
        surface.color.set(dark?'#4f6274':'#d5e3e9');
        trim.color.set(dark?'#7998ad':'#859eac');
        rack.color.set(dark?'#496378':'#3d5468');
        for(const entry of accents)entry.accent.color.set([palette.blue,palette.green,palette.amber][entry.phase]);
        highlight(hovered);render();
    }
    function localize() {
        for(const label of labels) {
            label.name.textContent=label.node.querySelector('.vmt-copy>span').textContent;
            label.element.title=text('title'+label.index);
            label.element.setAttribute('aria-label',String(label.index+1)+'. '+text('title'+label.index));
        }
        for(const label of contexts)label.element.textContent=text(label.key);
        render();
    }
    const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
    function hit(event) {
        const rect=renderer.domElement.getBoundingClientRect();
        pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
        raycaster.setFromCamera(pointer,camera);
        const intersections=raycaster.intersectObjects([...topics.values()].map(entry=>entry.group),true);
        let object=intersections[0]?.object;
        while(object&&object.userData.topic==null)object=object.parent;
        return object?.userData.topic??-1;
    }
    let down=null;
    renderer.domElement.addEventListener('pointerdown',event=>{down={x:event.clientX,y:event.clientY};});
    renderer.domElement.addEventListener('pointerup',event=>{if(down&&Math.hypot(event.clientX-down.x,event.clientY-down.y)<6){const index=hit(event);if(index>=0)onSelect(index);}down=null;});
    renderer.domElement.addEventListener('pointermove',event=>{if(event.buttons)return;const index=hit(event);renderer.domElement.style.cursor=index>=0?'pointer':'grab';if(index!==hovered)highlight(index);});
    renderer.domElement.addEventListener('pointerleave',()=>highlight(-1));
    function cameraCommand(command) {
        if(command==='reset'){zoom=1;camera.position.copy(home);controls.target.copy(homeTarget);controls.update();}
        else zoom=Math.max(.8,Math.min(1.6,zoom+(command==='in'?.15:-.15)));
        fitCamera();
    }
    function keys(event) {
        if(event.target!==host)return;
        if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) {
            event.preventDefault();event.stopPropagation();
            const offset=camera.position.clone().sub(controls.target),spherical=new THREE.Spherical().setFromVector3(offset);
            spherical.theta=THREE.MathUtils.clamp(spherical.theta+(event.key==='ArrowLeft'?-.12:event.key==='ArrowRight'?.12:0),controls.minAzimuthAngle,controls.maxAzimuthAngle);
            spherical.phi=THREE.MathUtils.clamp(spherical.phi+(event.key==='ArrowUp'?-.08:event.key==='ArrowDown'?.08:0),controls.minPolarAngle,controls.maxPolarAngle);
            camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(spherical));
            controls.update();fitCamera();
        } else if(['+','=','-','Home'].includes(event.key)) {
            event.preventDefault();event.stopPropagation();
            cameraCommand(event.key==='Home'?'reset':event.key==='-'?'out':'in');
        }
    }
    host.addEventListener('keydown',keys);
    controls.addEventListener('change',fitCamera);
    const resizeObserver=new ResizeObserver(fitCamera);resizeObserver.observe(host);
    const themeObserver=new MutationObserver(theme);themeObserver.observe(document.body,{attributes:true,attributeFilter:['class']});
    const visibility=()=>{if(!document.hidden)requestRender();};
    document.addEventListener('visibilitychange',visibility);
    function dispose() {
        if(disposed)return;
        disposed=true;
        cancelAnimationFrame(frame);resizeObserver.disconnect();themeObserver.disconnect();controls.dispose();
        document.removeEventListener('visibilitychange',visibility);host.removeEventListener('keydown',keys);
        const geometries=new Set();
        model.traverse(object=>{if(object.geometry)geometries.add(object.geometry);});
        geometries.forEach(geometry=>geometry.dispose());
        materials.forEach(appearance=>appearance.dispose());
        textures.forEach(texture=>texture.dispose());
        renderer.dispose();
        [...labels,...contexts].forEach(label=>label.element.remove());
        renderer.domElement.remove();
        delete host.dataset.vmtReady;delete host.dataset.vmtRendered;
    }
    renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();dispose();onFailure();},{once:true});
    localize();theme();fitCamera();host.dataset.vmtReady='true';
    return {
        select(index){selected=index;highlight(hovered);},
        resize:fitCamera,localize,camera:cameraCommand,
        setVisible(value){visible=value;if(!value){cancelAnimationFrame(frame);frame=null;}else fitCamera();},
        dispose
    };
}
