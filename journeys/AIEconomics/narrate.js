/* Narration for the AI Economics hub (English only). The "Watch & Listen" button in the header turns it on.
   The tour is one ordered list: each section, with the learning stages and key concepts opened and explained inside their sections.
   Back, Replay and Next move through that list from wherever you are; selecting a stage or concept yourself narrates that one.
   Clips: audio/index/step-NN.mp3 (matching script: narration/AIEconomics/index.md; captions: captions.js). */
(function () {
	'use strict';
	const BASE = 'audio/index/', V = '?v=1';
	const SECTIONS = [
		{ id: 'hero', n: 1, t: 'Welcome' }, { id: 'why', n: 2, t: 'Why it matters' }, { id: 'journey', n: 3, t: 'The four stages', kids: 'stage' },
		{ id: 'concepts', n: 4, t: 'Key concepts', kids: 'concept' }, { id: 'scenarios', n: 5, t: 'Real-world decisions', wait: true },
		{ id: 'outcomes', n: 6, t: 'Outcomes' }, { id: 'check', n: 7, t: 'Knowledge check', wait: true }, { id: 'done', n: 8, t: 'Your journey continues', last: true }
	];
	const STAGES = [{ id: 'invest', n: 9, t: 'Stage 1 · Understand AI investment' }, { id: 'costs', n: 10, t: 'Stage 2 · Understand AI costs' }, { id: 'manage', n: 11, t: 'Stage 3 · Manage and optimize spending' }, { id: 'value', n: 12, t: 'Stage 4 · Measure AI business value' }];
	const CONCEPTS = ['AI Economics', 'FinOps for AI', 'Tokens', 'Consumption-based pricing', 'Subscription-based pricing', 'Cost forecasting', 'Observability', 'Return on investment', 'AI Governance', 'Cost optimization'].map((t, i) => ({ i, n: 13 + i, t: 'Concept · ' + t }));
	// The whole tour in order: [section, its stages or concepts, next section, ...]
	const TOUR = [];
	SECTIONS.forEach(sec => { TOUR.push({ n: sec.n, t: sec.t, sec }); (sec.kids === 'stage' ? STAGES : sec.kids === 'concept' ? CONCEPTS : []).forEach(k => TOUR.push({ n: k.n, t: k.t, sec, kid: k })); });
	const indexOfN = n => TOUR.findIndex(x => x.n === n);

	const btn = document.getElementById('audio-toggle'); if (!btn) return;
	const reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
	const audio = new Audio(); audio.preload = 'auto';
	let on = false, run = 0, driving = false, paused = false, auto = true, curIdx = 0, navigating = false, seen = null;

	const IC = {
		prev: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h2v14H6zM20 5v14L9.5 12z"/></svg>',
		next: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 5h2v14h-2zM4 5v14l10.5-7z"/></svg>',
		replay: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 4v4.8h4.8"/></svg>',
		play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
		pause: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',
		grip: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.7"/><circle cx="15" cy="6" r="1.7"/><circle cx="9" cy="12" r="1.7"/><circle cx="15" cy="12" r="1.7"/><circle cx="9" cy="18" r="1.7"/><circle cx="15" cy="18" r="1.7"/></svg>',
		pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 17v5M9 3h6l-1 6 3 3H7l3-3z"/></svg>'
	};

	// Floating control: drag handle, back / replay / pause / next, what is being narrated, time left, captions, auto-advance, pin back
	const bar = document.createElement('div'); bar.className = 'narr'; bar.hidden = true; bar.setAttribute('role', 'group'); bar.setAttribute('aria-label', 'Narration controls');
	bar.innerHTML = '<button type="button" class="narr-grip" aria-label="Move the narration controls. Drag, or use the arrow keys. Press Home to put them back." title="Drag to move">' + IC.grip + '</button>'
		+ '<button type="button" class="narr-b narr-prev" aria-label="Previous part" title="Previous">' + IC.prev + '</button>'
		+ '<button type="button" class="narr-b narr-re" aria-label="Replay this part" title="Replay">' + IC.replay + '</button>'
		+ '<button type="button" class="narr-pp" aria-label="Pause narration"></button>'
		+ '<button type="button" class="narr-b narr-next" aria-label="Next part" title="Next">' + IC.next + '</button>'
		+ '<span class="narr-t" role="status" aria-live="polite"></span><span class="narr-time" aria-label="Time remaining"></span>'
		+ '<button type="button" class="narr-cc" aria-pressed="true" title="Captions">CC</button>'
		+ '<label class="narr-auto"><input type="checkbox" checked /><span>Auto-advance</span></label>'
		+ '<button type="button" class="narr-pin" aria-label="Pin the controls back to their original position" title="Pin back to original position" hidden>' + IC.pin + '</button>'
		+ '<span class="narr-bar" aria-hidden="true"><i></i></span>';
	document.body.appendChild(bar);
	const capEl = document.createElement('div'); capEl.className = 'narr-cap'; capEl.hidden = true; document.body.appendChild(capEl);
	const q = s => bar.querySelector(s);
	const pp = q('.narr-pp'), label = q('.narr-t'), autoBox = q('input'), timeEl = q('.narr-time'), barFill = q('.narr-bar i'), ccBtn = q('.narr-cc'), prevBtn = q('.narr-prev'), nextBtn = q('.narr-next'), reBtn = q('.narr-re'), grip = q('.narr-grip'), pinBtn = q('.narr-pin');
	const say = t => { label.textContent = t; };
	const sleep = ms => new Promise(r => setTimeout(r, ms));
	const alive = id => on && id === run;
	const syncNav = () => { prevBtn.disabled = curIdx <= 0; nextBtn.disabled = curIdx >= TOUR.length - 1; };

	// ── Captions, time remaining, and cards that open as they are explained ──
	const CAPS = window.AIE_CAPTIONS || {};
	let capN = 0, capIdx = -1, fired = new Set(), cc = true;
	try { cc = localStorage.getItem('aie-cc') !== '0'; } catch (e) {}
	const fmt = s => { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
	const whyCard = i => { const c = document.querySelectorAll('#why-body .qcard')[i]; if (c && c.getAttribute('aria-expanded') !== 'true') c.click(); };
	const scenario = id => document.querySelectorAll('.scn').forEach(el => { const open = el.classList.contains('open'), want = el.dataset.id === id; if (want !== open) el.querySelector('.head').click(); if (want) el.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' }); });
	const CUES = {
		2: [['Cost needs a range', () => whyCard(0)], ['Many AI services', () => whyCard(1)], ['Control comes from', () => whyCard(2)], ['And value comes from', () => whyCard(3)]],
		5: [['Scenario A is about', () => scenario('A')], ['Scenario B is about', () => scenario('B')], ['Scenario C is about', () => scenario('C')]]
	};
	const START = { 2: () => document.querySelectorAll('#why-body .qcard[aria-expanded="true"]').forEach(c => c.click()), 5: () => scenario('') };
	function showCaption(i) {
		const list = CAPS[capN]; if (!list || !list[i]) return;
		capIdx = i; capEl.textContent = list[i].t; capEl.hidden = !cc || !on;
		(CUES[capN] || []).forEach(([key, fn], k) => { if (!fired.has(k) && list.slice(0, i + 1).some(s => s.t.includes(key))) { fired.add(k); fn(); } });
	}
	function tick() {
		const d = audio.duration, t = audio.currentTime;
		if (!isFinite(d) || !d) { timeEl.textContent = ''; return; }
		timeEl.textContent = '-' + fmt(d - t); barFill.style.width = Math.min(100, t / d * 100) + '%';
		const list = CAPS[capN]; if (!list) return;
		const total = list.reduce((a, s) => a + s.w, 0); let acc = 0, idx = list.length - 1;
		for (let i = 0; i < list.length; i++) { acc += list[i].w; if (t / d * total < acc) { idx = i; break; } }
		if (idx !== capIdx) showCaption(idx);
	}
	['timeupdate', 'loadedmetadata', 'durationchange', 'seeked'].forEach(ev => audio.addEventListener(ev, tick));
	function startClip(n) { capN = n; capIdx = -1; fired = new Set(); timeEl.textContent = ''; barFill.style.width = '0'; if (START[n]) START[n](); showCaption(0); }
	function endClip() { capEl.hidden = true; barFill.style.width = '100%'; timeEl.textContent = ''; if (capN === 5) scenario(''); }
	function setCc(v) { cc = v; ccBtn.setAttribute('aria-pressed', v); capEl.hidden = !v || !on || capIdx < 0 || audio.ended || audio.paused && !audio.currentTime; try { localStorage.setItem('aie-cc', v ? '1' : '0'); } catch (e) {} }
	ccBtn.addEventListener('click', () => setCc(!cc)); ccBtn.setAttribute('aria-pressed', cc);

	function playClip(n, id) {
		return new Promise(resolve => {
			const done = () => { audio.onended = audio.onerror = null; endClip(); resolve(alive(id)); };
			audio.onended = done; audio.onerror = () => { say('Narration clip not available'); done(); };
			startClip(n);
			audio.src = BASE + 'step-' + String(n).padStart(2, '0') + '.mp3' + V;
			audio.play().catch(e => { if (e && e.name === 'NotAllowedError') { say('Press Watch & Listen to start narration'); setOn(false); } resolve(false); });
		});
	}
	async function waitWhilePaused(id) { while (paused && alive(id)) await sleep(200); return alive(id); }
	async function narrate(item, id) { say('Narrating: ' + item.t); const ok = await playClip(item.n, id); return ok && waitWhilePaused(id); }

	// Open a stage / concept the way a visitor would, without the click being treated as the visitor's own
	function drive(fn) { driving = true; try { fn(); } finally { driving = false; } }
	function openKid(it) {
		if (it.sec.kids === 'stage') { const el = document.querySelector('.stage[data-id="' + it.kid.id + '"]'); if (el && el.getAttribute('aria-expanded') !== 'true') drive(() => el.click()); }
		else { const el = document.querySelectorAll('.gl-item')[it.kid.i]; if (el) drive(() => el.click()); }
	}
	const inView = sec => { const r = document.getElementById(sec.id).getBoundingClientRect(); return r.top <= innerHeight * .55 && r.bottom > innerHeight * .45; };

	// Play the tour from one point on: the rest of that section, then the page scrolls and the next section takes over
	async function play(idx) {
		const id = ++run; if (!on) return; paused = false; setPaused(false);
		for (let i = idx; i < TOUR.length; i++) {
			const it = TOUR[i]; curIdx = i; syncNav(); if (!alive(id)) return;
			if (it.kid) { openKid(it); await sleep(450); if (!alive(id)) return; }
			if (!(await narrate(it, id))) return;
			const nxt = TOUR[i + 1];
			if (nxt && nxt.kid) { await sleep(350); continue; }
			const sec = it.sec;
			if (sec.last) { say('Narration finished'); return; }
			if (sec.wait) { say('Take your time. Scroll on when you are ready, or press Next.'); return; }
			if (!auto) { say('Press Next, or scroll on'); return; }
			say('Next: ' + nxt.t); await sleep(900);
			if (!(await waitWhilePaused(id))) return;
			document.getElementById(nxt.sec.id).scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
			return;   // the section that scrolls into view starts the next stretch
		}
	}
	// Back / Next / Replay: go straight to a part (an instant scroll, so nothing in between starts talking)
	function jump(idx) {
		if (!on) return; idx = Math.max(0, Math.min(TOUR.length - 1, idx)); const it = TOUR[idx];
		run++; audio.pause(); seen = it.sec; navigating = true; setTimeout(() => { navigating = false; }, 700);
		if (!inView(it.sec)) { document.documentElement.style.scrollBehavior = 'auto'; document.getElementById(it.sec.id).scrollIntoView({ block: 'start', behavior: 'auto' }); document.documentElement.style.scrollBehavior = ''; }
		play(idx);
	}
	prevBtn.addEventListener('click', () => jump(curIdx - 1));
	nextBtn.addEventListener('click', () => jump(curIdx + 1));
	reBtn.addEventListener('click', () => jump(curIdx));

	// A visitor picks a stage or concept: explain that one (then Next carries on from there)
	async function single(item) {
		if (!on) return; const id = ++run; paused = false; setPaused(false);
		const i = indexOfN(item.n); if (i >= 0) { curIdx = i; syncNav(); }
		await narrate(item, id);
		if (alive(id)) say('Press Next, or select another');
	}
	document.addEventListener('aie:stage', e => { if (on && !driving) single(STAGES.find(s => s.id === e.detail.id)); });
	document.addEventListener('aie:concept', e => { if (on && !driving) single(CONCEPTS[e.detail.i]); });

	// The section that is in view decides what is narrated
	const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
		if (!e.isIntersecting || navigating) return; const sec = SECTIONS.find(s => s.id === e.target.id); if (!sec || sec === seen) return; seen = sec; if (on) play(indexOfN(sec.n));
	}), { rootMargin: '-45% 0px -45% 0px' }) : null;
	SECTIONS.forEach(s => { const el = document.getElementById(s.id); if (el && io) io.observe(el); });

	const ICON_ON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect class="eq e1" x="4" y="8" width="3.4" height="8" rx="1.7"/><rect class="eq e2" x="10.3" y="4" width="3.4" height="16" rx="1.7"/><rect class="eq e3" x="16.6" y="8" width="3.4" height="8" rx="1.7"/></svg>';
	const ICON_OFF = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 14.5v-9l7 4.5z"/></svg>';
	function setPaused(p) { paused = p; pp.innerHTML = p ? IC.play : IC.pause; pp.setAttribute('aria-label', p ? 'Resume narration' : 'Pause narration'); }
	function setOn(v) {
		on = v; btn.setAttribute('aria-pressed', v); btn.innerHTML = (v ? ICON_ON : ICON_OFF) + '<span class="wl-t">' + (v ? 'Narrating' : 'Watch &amp; Listen') + '</span>'; btn.setAttribute('aria-label', v ? 'Turn narration off' : 'Watch and listen: start the narrated walkthrough'); btn.title = v ? 'Narration on. Click to turn it off.' : 'Watch and listen to a narrated walkthrough'; if (v) hint.hidden = true;
		bar.hidden = !v; document.body.classList.toggle('narr-on', v);
		if (!v) { run++; audio.pause(); setPaused(false); capEl.hidden = true; return; }
		const cur = SECTIONS.find(inView) || SECTIONS[0];
		seen = cur; setPaused(false); placeBar(); play(indexOfN(cur.n));
	}
	// An animated finger invites the first click; it goes away once narration has been used
	const hint = document.createElement('span'); hint.className = 'wl-hint'; hint.setAttribute('aria-hidden', 'true');
	hint.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.69-5.1c.07-.55-.26-1.1-.83-1.31z"/></svg>';
	btn.after(hint);
	btn.addEventListener('click', () => setOn(!on));
	pp.addEventListener('click', () => { if (paused) { setPaused(false); audio.play().catch(() => {}); } else { setPaused(true); audio.pause(); } });
	autoBox.addEventListener('change', () => { auto = autoBox.checked; });

	// ── Drag the controls anywhere, and pin them back to the original spot ──
	let moved = null;   // {x, y} of the top-left corner once dragged, otherwise null (the original spot: bottom centre)
	try { moved = JSON.parse(localStorage.getItem('aie-pos') || 'null'); } catch (e) {}
	function placeBar() {
		if (!moved) { bar.style.left = bar.style.top = bar.style.bottom = bar.style.transform = ''; pinBtn.hidden = true; bar.classList.remove('is-moved'); return; }
		const w = bar.offsetWidth || 400, h = bar.offsetHeight || 48;
		const x = Math.max(8, Math.min(innerWidth - w - 8, moved.x)), y = Math.max(8, Math.min(innerHeight - h - 8, moved.y));
		bar.style.left = x + 'px'; bar.style.top = y + 'px'; bar.style.bottom = 'auto'; bar.style.transform = 'none'; pinBtn.hidden = false; bar.classList.add('is-moved');
	}
	function save() { try { moved ? localStorage.setItem('aie-pos', JSON.stringify(moved)) : localStorage.removeItem('aie-pos'); } catch (e) {} }
	function pinBack() { moved = null; save(); placeBar(); }
	let drag = null;
	grip.addEventListener('pointerdown', e => {
		const r = bar.getBoundingClientRect(); drag = { dx: e.clientX - r.left, dy: e.clientY - r.top };
		grip.setPointerCapture(e.pointerId); bar.classList.add('is-dragging'); e.preventDefault();
	});
	grip.addEventListener('pointermove', e => { if (!drag) return; moved = { x: e.clientX - drag.dx, y: e.clientY - drag.dy }; placeBar(); });
	const endDrag = () => { if (!drag) return; drag = null; bar.classList.remove('is-dragging'); save(); };
	grip.addEventListener('pointerup', endDrag); grip.addEventListener('pointercancel', endDrag);
	grip.addEventListener('dblclick', pinBack); pinBtn.addEventListener('click', pinBack);
	grip.addEventListener('keydown', e => {
		const step = e.shiftKey ? 60 : 20, r = bar.getBoundingClientRect(), d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
		if (e.key === 'Home') { e.preventDefault(); pinBack(); } else if (d) { e.preventDefault(); moved = { x: r.left + d[0], y: r.top + d[1] }; placeBar(); save(); }
	});
	window.addEventListener('resize', () => { if (moved) placeBar(); });

	setPaused(false); syncNav(); setOn(false); btn.hidden = false;
}());
