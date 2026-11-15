export function createNetworkAnimation(THREE, stage, button, render, { onCycle, minimumDuration = 0, minimumVisibility = 0 } = {}) {
    const events = new AbortController();
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const routes = [];
    let active = [];
    let elapsed = 0;
    let duration = 0;
    let playing = false;
    let paused = false;
    let visible = false;
    let frame;
    let previous;

    function isRunning() {
        return playing && visible && !document.hidden && !reducedMotion.matches;
    }

    function syncLabels() {
        const running = isRunning();
        const key = running ? 'pause' : elapsed < duration ? 'resume' : 'replay';
        for (const label of button.querySelectorAll('[data-network-label]')) {
            label.hidden = label.dataset.networkLabel !== key;
        }
        button.title = button.querySelector(`[data-network-label="${key}"]`).textContent;
        button.setAttribute('aria-label', button.title);
        button.setAttribute('aria-pressed', String(running));
        button.querySelector('img').src = `/lib/vendor/contoso-3d/${key === 'pause' ? 'pause' : key === 'resume' ? 'play' : 'rotate-ccw'}.svg`;
        stage.dataset.networkState = running ? 'playing' : elapsed >= duration ? 'complete' : 'paused';
    }

    function paint() {
        for (const route of routes) {
            const enabled = active.includes(route);
            route.group.visible = enabled;
            const progress = reducedMotion.matches ? 1 : THREE.MathUtils.clamp((elapsed - route.delay) / route.duration, 0, 1);
            route.stroke.geometry.setDrawRange(0, Math.floor(progress * 96) * 6 * 6);
            route.arrow.visible = progress === 1;
        }
        render();
    }

    function schedule() {
        cancelAnimationFrame(frame);
        previous = undefined;
        syncLabels();
        if (isRunning()) frame = requestAnimationFrame(tick);
    }

    function tick(timestamp) {
        if (previous !== undefined) elapsed = Math.min(duration, elapsed + Math.min(timestamp - previous, 100));
        previous = timestamp;
        if (elapsed >= duration) {
            if (onCycle) onCycle();
            else play();
            return;
        }
        paint();
        frame = requestAnimationFrame(tick);
    }

    function play(selection = active) {
        active = selection;
        duration = active.length ? Math.max(minimumDuration, Math.max(...active.map(route => route.delay + route.duration)) + 1800) : 0;
        elapsed = reducedMotion.matches ? duration : 0;
        playing = !paused && !reducedMotion.matches && duration > 0;
        paint();
        syncLabels();
        schedule();
    }

    function add(parent, curve, color, { delay = 0, duration = 1400, radius = 0.055 } = {}) {
        const group = new THREE.Group();
        parent.add(group);
        const geometry = new THREE.TubeGeometry(curve, 96, radius, 6, false);
        const base = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.16 }));
        const stroke = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color }));
        const arrow = new THREE.Mesh(new THREE.ConeGeometry(radius * 1.8, radius * 5.5, 3), stroke.material);
        arrow.position.copy(curve.getPoint(1));
        arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), curve.getTangent(1).normalize());
        group.add(base, stroke, arrow);
        const route = { group, base, stroke, arrow, delay, duration, radius };
        routes.push(route);
        group.visible = false;
        return route;
    }

    button.addEventListener('click', () => {
        if (isRunning()) {
            paused = true;
            playing = false;
            syncLabels();
            schedule();
        } else if (elapsed < duration && !reducedMotion.matches) {
            paused = false;
            playing = true;
            syncLabels();
            schedule();
        } else {
            paused = false;
            play();
        }
    }, { signal: events.signal });
    document.addEventListener('visibilitychange', schedule, { signal: events.signal });
    reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) {
            elapsed = duration;
            playing = false;
            paint();
            syncLabels();
        } else play();
        schedule();
    }, { signal: events.signal });
    const observer = new IntersectionObserver(entries => {
        const entry = entries[entries.length - 1];
        visible = entry.isIntersecting && entry.intersectionRatio >= minimumVisibility;
        schedule();
    }, { threshold: minimumVisibility });
    observer.observe(stage);

    return {
        add, play, syncLabels,
        reshape(route, curve) {
            route.base.geometry.dispose();
            route.stroke.geometry.dispose();
            route.stroke.geometry = new THREE.TubeGeometry(curve, 96, route.radius, 6, false);
            route.base.geometry = route.stroke.geometry.clone();
            route.arrow.position.copy(curve.getPoint(1));
            route.arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), curve.getTangent(1).normalize());
            paint();
        },
        dispose() {
            playing = false;
            cancelAnimationFrame(frame);
            events.abort();
            observer.disconnect();
        }
    };
}