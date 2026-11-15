export async function mountVmTopology({section,nodes,text,onSelect,onFailure}) {
    const THREE=await import('../vendor/contoso-3d/three.module.min.js');
    const {OrbitControls}=await import('../vendor/contoso-3d/OrbitControls.js');
    const host=section.querySelector('.vmt-3d-stage');
    const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.setClearColor(0,0);
    renderer.domElement.setAttribute('aria-hidden','true');
    host.append(renderer.domElement);
    const scene=new THREE.Scene();
    const model=new THREE.Group();
    scene.add(model);
    const camera=new THREE.OrthographicCamera(-15,15,10,-10,.1,150);
    camera.position.set(7,25,27);
    const controls=new OrbitControls(camera,renderer.domElement);
    controls.target.set(0,.5,0);
    controls.enablePan=false;
    controls.enableDamping=false;
    controls.enableZoom=false;
    controls.minPolarAngle=Math.PI/5;
    controls.maxPolarAngle=Math.PI/2.7;
    controls.minAzimuthAngle=-.45;
    controls.maxAzimuthAngle=.55;
    controls.update();
    const home=camera.position.clone();
    scene.add(new THREE.HemisphereLight(0xffffff,0x788b98,2.3));
    const keyLight=new THREE.DirectionalLight(0xffffff,2.8);
    keyLight.position.set(-8,18,12);scene.add(keyLight);
    const materials=[],textures=[],labels=[],contexts=[],topics=new Map(),wires=[];
    let visible=true,disposed=false,selected=0,hovered=-1,frame=null,zoom=1;
    const palette={};
    const position=(horizontal,vertical,height=.2)=>new THREE.Vector3((horizontal-600)/50,height,(vertical-355)/50);
    const material=(color,extra={})=>{const value=new THREE.MeshStandardMaterial({color,roughness:.62,metalness:.08,...extra});materials.push(value);return value;};
    const surface=material('#c4d2db'),trim=material('#7b8c98'),rack=material('#304453'),vent=material('#15252e'),screen=material('#122b38');
    const accentColors=['#258ed0','#28a48c','#399ec5','#199c7e','#4976c7','#189eaa','#348ec6','#cb7837','#6677c1'];
    const accents=accentColors.map(color=>material(color));
    function box(parent,width,height,depth,point,appearance) {
        const object=new THREE.Mesh(new THREE.BoxGeometry(width,height,depth),appearance);
        object.position.copy(point);parent.add(object);return object;
    }
    function cylinder(parent,radius,height,point,appearance) {
        const object=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,height,40),appearance);
        object.position.copy(point);parent.add(object);return object;
    }
    function rail(parent,points,color,radius=.028) {
        const curve=new THREE.CurvePath();
        points.slice(1).forEach((point,index)=>curve.add(new THREE.LineCurve3(points[index],point)));
        const appearance=material(color,{metalness:0});
        const object=new THREE.Mesh(new THREE.TubeGeometry(curve,Math.max(8,points.length*4),radius,6,false),appearance);
        parent.add(object);return object;
    }
    function outline(parent,width,depth,height,color) {
        return rail(parent,[new THREE.Vector3(-width/2,height,-depth/2),new THREE.Vector3(width/2,height,-depth/2),new THREE.Vector3(width/2,height,depth/2),new THREE.Vector3(-width/2,height,depth/2),new THREE.Vector3(-width/2,height,-depth/2)],color,.035);
    }
    function platform(horizontal,vertical,width,depth,color) {
        const group=new THREE.Group();group.position.copy(position(horizontal,vertical,0));model.add(group);
        box(group,width,.13,depth,new THREE.Vector3(0,0,0),surface);
        outline(group,width,depth,.1,color);return group;
    }
    function server(parent,horizontal,vertical,scale,appearance) {
        const group=new THREE.Group();group.position.set(horizontal,.18,vertical);group.scale.setScalar(scale);parent.add(group);
        box(group,1.25,1.9,.85,new THREE.Vector3(0,.95,0),rack);
        for(let unit=0;unit<4;unit++) {
            box(group,1.06,.33,.075,new THREE.Vector3(0,.28+unit*.43,.445),appearance);
            box(group,.6,.11,.045,new THREE.Vector3(-.14,.28+unit*.43,.5),vent);
            box(group,.075,.075,.05,new THREE.Vector3(.38,.28+unit*.43,.51),accents[3]);
        }
        box(group,1.35,.08,.95,new THREE.Vector3(0,1.94,0),trim);
        return group;
    }
    const region=platform(590,335,10.4,12.2,'#7892a4');
    const scaleSet=platform(590,310,9.8,6.6,'#199c7e');
    const zoneA=platform(462,362,4.3,4.1,'#258ed0');
    const zoneB=platform(717,362,4.3,4.1,'#258ed0');
    scaleSet.position.y=.12;zoneA.position.y=.28;zoneB.position.y=.28;
    const alternate=platform(150,116,5.5,3.15,'#28a48c');
    const layerOf=index=>[0,2,3,5].includes(index)?.45:.13;
    for(const node of nodes) {
        const index=Number(node.dataset.vmtTopic);
        const left=parseFloat(node.style.left),top=parseFloat(node.style.top),width=parseFloat(node.style.width),height=parseFloat(node.style.height);
        const center=position(left+width/2,top+height/2,layerOf(index));
        const group=new THREE.Group();group.position.copy(center);group.userData.topic=index;model.add(group);
        const baseMaterial=material('#c6d2da');
        const base=box(group,width/50,.16,height/50,new THREE.Vector3(0,0,0),baseMaterial);
        const ring=outline(group,width/50,height/50,.13,accentColors[index]);
        const appearance=accents[index];
        if(index===0)server(group,0,-.13,1,appearance);
        if(index===1){server(group,-1.1,-.1,.68,appearance);server(group,1.1,-.1,.68,appearance);}
        if(index===2) {
            for(const horizontal of [-2.3,2.3])box(group,2,.38,.65,new THREE.Vector3(horizontal,.3,0),appearance);
        }
        if(index===3) {
            for(const horizontal of [-2.6,0,2.6])box(group,1.15,.35,.62,new THREE.Vector3(horizontal,.26,0),appearance);
        }
        if(index===4) {
            for(const [order,horizontal] of [-1.3,0,1.3].entries())box(group,.82,.5+order*.5,.82,new THREE.Vector3(horizontal,.34+order*.25,-.15),appearance);
        }
        if(index===5) {
            for(const horizontal of [-1.65,0,1.65])for(let layer=0;layer<3;layer++)cylinder(group,.55,.2,new THREE.Vector3(horizontal,.28+layer*.26,-.16),layer===2?appearance:trim);
        }
        if(index===6) {
            box(group,2.2,1.75,1.05,new THREE.Vector3(0,.98,-.15),trim);
            box(group,1.87,1.42,.12,new THREE.Vector3(0,.98,.42),appearance);
            const lock=cylinder(group,.38,.13,new THREE.Vector3(0,1,.56),rack);lock.rotation.x=Math.PI/2;
            box(group,.06,.37,.1,new THREE.Vector3(0,1,.65),surface);
            box(group,.37,.06,.1,new THREE.Vector3(0,1,.65),surface);
        }
        if(index===7) {
            box(group,2.7,1.65,.2,new THREE.Vector3(0,1.32,-.05),rack);
            box(group,2.42,1.38,.05,new THREE.Vector3(0,1.32,.08),screen);
            box(group,.22,.4,.24,new THREE.Vector3(0,.33,-.05),trim);
            box(group,1.3,.08,.7,new THREE.Vector3(0,.16,-.05),trim);
            rail(group,[[-1.05,1.04,.13],[-.7,1.04,.13],[-.45,1.65,.13],[-.05,.93,.13],[.3,1.37,.13],[1.04,1.37,.13]].map(point=>new THREE.Vector3(...point)),'#54dbc0',.035);
        }
        if(index===8) {
            box(group,1.2,.7,.95,new THREE.Vector3(-1.35,.52,-.12),trim);
            box(group,1.2,.7,.95,new THREE.Vector3(1.35,.52,-.12),appearance);
            rail(group,[[-.66,.5,-.12],[.68,.5,-.12],[.42,.5,-.38],[.68,.5,-.12],[.42,.5,.14]].map(point=>new THREE.Vector3(...point)),accentColors[index],.04);
        }
        const label=document.createElement('button');
        label.type='button';label.className='vmt-3d-label';label.dataset.vmt3dTopic=String(index);
        const number=document.createElement('span');number.className='vmt-3d-number';number.textContent=String(index+1).padStart(2,'0');
        const name=document.createElement('span');name.className='vmt-3d-name';
        label.append(number,name);host.append(label);
        label.addEventListener('click',()=>onSelect(index));
        label.addEventListener('pointerenter',()=>highlight(index));
        label.addEventListener('pointerleave',()=>highlight(-1));
        label.addEventListener('focus',()=>highlight(index));
        label.addEventListener('blur',()=>highlight(-1));
        const anchor=center.clone();anchor.z+=height/100+.22;anchor.y=.4;
        labels.push({element:label,name,node,anchor,index});
        topics.set(index,{group,base,baseMaterial,ring,appearance});
    }
    const replica=new THREE.Group();replica.position.copy(position(716,356,.45));model.add(replica);server(replica,0,0,.87,trim);
    const customer=platform(149,515,4.4,1.9,'#7892a4');
    box(customer,2.4,.35,.7,new THREE.Vector3(0,.3,0),rack);
    for(let port=0;port<6;port++)box(customer,.18,.1,.05,new THREE.Vector3(-.8+port*.32,.3,.38),accents[3]);
    for(const path of section.querySelectorAll('[data-vmt-wire]')) {
        const length=path.getTotalLength(),points=[];
        for(let distance=0;distance<length;distance+=4){const point=path.getPointAtLength(distance);points.push(position(point.x,point.y,.6));}
        const end=path.getPointAtLength(length);points.push(position(end.x,end.y,.6));
        const object=rail(model,points,'#829ba9',.025);
        const direction=points.at(-1).clone().sub(points.at(-2)).normalize();
        const tip=new THREE.Mesh(new THREE.ConeGeometry(.11,.3,12),object.material);
        tip.position.copy(points.at(-1)).addScaledVector(direction,-.15);
        tip.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction);model.add(tip);
        wires.push({index:Number(path.dataset.vmtWire),object,tip});
    }
    function context(key,point) {
        const element=document.createElement('span');element.className='vmt-3d-context';host.append(element);contexts.push({element,key,anchor:point});
    }
    context('vmtRegion',position(590,25,.2));
    context('vmtAlternative',position(150,35,.25));
    context('vmtZone1',position(364,290,.6));context('vmtZone2',position(814,290,.6));
    context('vmtUsers',position(149,569,.3));
    const loader=new THREE.TextureLoader();
    await Promise.all(nodes.map(async node=>{
        const index=Number(node.dataset.vmtTopic),entry=topics.get(index);
        try {
            const texture=await loader.loadAsync(node.querySelector('img').src);texture.colorSpace=THREE.SRGBColorSpace;textures.push(texture);
            const appearance=new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false});materials.push(appearance);
            const icon=new THREE.Mesh(new THREE.PlaneGeometry(.68,.68),appearance);
            icon.rotation.x=-Math.PI/2;icon.position.set(-parseFloat(node.style.width)/100+.48,.16,parseFloat(node.style.height)/100-.43);entry.group.add(icon);
        } catch {host.dataset.vmtAssetError='true';}
    }));
    model.updateMatrixWorld(true);
    const corners=[];
    model.traverse(object=>{
        if(!object.geometry)return;
        object.geometry.computeBoundingBox();
        const bounds=object.geometry.boundingBox;
        for(const horizontal of [bounds.min.x,bounds.max.x])for(const vertical of [bounds.min.y,bounds.max.y])for(const depth of [bounds.min.z,bounds.max.z])corners.push(new THREE.Vector3(horizontal,vertical,depth).applyMatrix4(object.matrixWorld));
    });
    function fitCamera() {
        const width=host.clientWidth,height=host.clientHeight;if(!width||!height||disposed)return;
        camera.updateMatrixWorld();
        const projected=new THREE.Box3();
        for(const corner of corners)projected.expandByPoint(corner.clone().applyMatrix4(camera.matrixWorldInverse));
        const center=projected.getCenter(new THREE.Vector3()),size=projected.getSize(new THREE.Vector3());
        const aspect=width/height;
        const sideRoom=innerWidth<=760?40:110;
        const span=Math.max(size.y/(1-65/height),size.x/aspect/(1-sideRoom/width));
        camera.left=center.x-span*aspect/2;camera.right=center.x+span*aspect/2;camera.top=center.y+span/2;camera.bottom=center.y-span/2;camera.zoom=zoom;camera.updateProjectionMatrix();
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
            for(let row=-6;row<=6;row++)for(let column=-4;column<=4;column++) {
                const horizontal=THREE.MathUtils.clamp(preferredX+column*(labelWidth/2+6),labelWidth/2+5,width-labelWidth/2-5);
                const vertical=THREE.MathUtils.clamp(preferredY+row*(labelHeight+7),5,height-labelHeight-5);
                if(placed.some(rect=>horizontal+labelWidth/2>rect.left-4&&horizontal-labelWidth/2<rect.right+4&&vertical+labelHeight>rect.top-5&&vertical<rect.bottom+5))continue;
                candidates.push({horizontal,vertical,distance:(horizontal-preferredX)**2+(vertical-preferredY)**2});
            }
            candidates.sort((first,second)=>first.distance-second.distance);
            const {horizontal,vertical}=candidates[0]||{horizontal:preferredX,vertical:preferredY};
            placed.push({left:horizontal-labelWidth/2,right:horizontal+labelWidth/2,top:vertical,bottom:vertical+labelHeight});
            label.element.style.left=horizontal+'px';label.element.style.top=(vertical+(label.key?labelHeight:0))+'px';
            label.element.hidden=point.z<-1||point.z>1;
        }
    }
    function render() {
        if(disposed||!visible||!host.clientWidth||!host.clientHeight)return;
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
            entry.baseMaterial.color.set(hover?palette.hover:palette.surface);
            entry.baseMaterial.emissive.set(hover?palette.blue:'#000000');entry.baseMaterial.emissiveIntensity=hover?.24:0;
            entry.ring.material.color.set(active||hover?palette.blue:palette.line);
            entry.ring.material.emissive.set(active||hover?palette.blue:'#000000');entry.ring.material.emissiveIntensity=hover?.5:active?.2:0;
        }
        for(const wire of wires)wire.object.material.color.set(wire.index===selected||wire.index===hovered?palette.blue:palette.line);
        for(const label of labels)label.element.classList.toggle('is-active',label.index===selected);
        requestRender();
    }
    function theme() {
        const style=getComputedStyle(section);
        palette.surface=style.getPropertyValue('--surface').trim();palette.blue=style.getPropertyValue('--blue').trim();palette.line=style.getPropertyValue('--line').trim();palette.hover=style.getPropertyValue('--paper').trim();
        const dark=document.body.classList.contains('theme-dark');
        surface.color.set(dark?'#526575':'#d5e3e9');trim.color.set(dark?'#7998ad':'#859eac');rack.color.set(dark?'#496378':'#476274');
        highlight(hovered);render();
    }
    function localize() {
        for(const label of labels){label.name.textContent=label.node.querySelector('.vmt-copy>span').textContent;label.element.title=text('title'+label.index);label.element.setAttribute('aria-label',String(label.index+1)+'. '+text('title'+label.index));}
        for(const label of contexts)label.element.textContent=text(label.key);
        render();
    }
    const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
    function hit(event) {
        const rect=renderer.domElement.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
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
        if(command==='reset'){zoom=1;camera.position.copy(home);controls.target.set(0,.5,0);controls.update();}
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
            camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(spherical));controls.update();fitCamera();
        }else if(['+','=','-','Home'].includes(event.key)){event.preventDefault();event.stopPropagation();cameraCommand(event.key==='Home'?'reset':event.key==='-'?'out':'in');}
    }
    host.addEventListener('keydown',keys);
    controls.addEventListener('change',fitCamera);
    const resizeObserver=new ResizeObserver(fitCamera);resizeObserver.observe(host);
    const themeObserver=new MutationObserver(theme);themeObserver.observe(document.body,{attributes:true,attributeFilter:['class']});
    const visibility=()=>{if(!document.hidden)requestRender();};document.addEventListener('visibilitychange',visibility);
    function dispose() {
        if(disposed)return;disposed=true;
        cancelAnimationFrame(frame);resizeObserver.disconnect();themeObserver.disconnect();controls.dispose();
        document.removeEventListener('visibilitychange',visibility);host.removeEventListener('keydown',keys);
        const geometries=new Set();model.traverse(object=>{if(object.geometry)geometries.add(object.geometry);});geometries.forEach(geometry=>geometry.dispose());
        materials.forEach(appearance=>appearance.dispose());textures.forEach(texture=>texture.dispose());renderer.dispose();
        [...labels,...contexts].forEach(label=>label.element.remove());renderer.domElement.remove();
    }
    renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();dispose();onFailure();},{once:true});
    localize();theme();fitCamera();host.dataset.vmtReady='true';
    return {select(index){selected=index;highlight(hovered);},resize:fitCamera,localize,camera:cameraCommand,setVisible(value){visible=value;if(!value){cancelAnimationFrame(frame);frame=null;}else fitCamera();},dispose};
}