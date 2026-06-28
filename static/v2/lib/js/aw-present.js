/* ──────────────────────────────────────────────────────────────────────────
 * aw-present.js — Dual-monitor presenter / slideshow mode for AnimationWorks
 * animated explainers (the #stage / .scene / renderStep() framework).
 *
 * Drop-in: include once, right before </body>, AFTER the page's main inline
 * <script> (so window.renderStep already exists):
 *     <script src="../../lib/js/aw-present.js"></script>
 *
 * What it does (self-installing — no other page edits required):
 *   • Adds a 🖥️ "Present" button to the .app-header (before #theme-toggle).
 *   • Clicking it opens a clean popup window at ?present; one click (or F) in
 *     that window enters true fullscreen, which hides the address bar.
 *   • The ?present window hides all chrome (navbar, control bar, progress,
 *     outline), centers the active .scene vertically + horizontally, and
 *     scale-to-fits tall slides so nothing is ever clipped.
 *   • The two windows stay step-locked in sync via BroadcastChannel, with a
 *     localStorage fallback (same-origin). Sync is per-page (keyed by path).
 *   • Audience window: press F for true fullscreen; cursor auto-hides when idle.
 * ────────────────────────────────────────────────────────────────────────── */
(function () {
	'use strict';
	if (window.__awPresentLoaded) return;
	window.__awPresentLoaded = true;

	var isPresent = new URLSearchParams(location.search).has('present');
	var KEY = 'aw-present-step:' + location.pathname;
	var bus = ('BroadcastChannel' in window) ? new BroadcastChannel('aw-present:' + location.pathname) : null;
	var applyingRemote = false;
	var lastStep = 0;
	// In the audience (?present) window we wait for the presenter to click
	// "Start" before playing — no auto-play on load. `started` is always true
	// on the presenter side so its rendering/sync is never gated.
	var started = !isPresent;
	var pendingStep = null;
	var CTRL = 'aw-present-ctrl:' + location.pathname;
	var pausedState = false;   // global play/pause state (mirrored to both windows)
	var presStarted = false;   // presenter: has the audience presentation begun?
	var startOverlay = null;   // audience: the "waiting" overlay element
	var enterFsRef = null;     // audience: reference to its enterFs()

	// Path-INDEPENDENT channel so a single audience window can be reused across
	// different journey pages (each journey is its own HTML file / path). The
	// per-path `bus`/`KEY`/`CTRL` above stay journey-scoped; these are global.
	var GKEY = 'aw-present-global-ctrl';
	var ALIVE = 'aw-present-audience-alive';   // audience heartbeat (localStorage)
	var gbus = ('BroadcastChannel' in window) ? new BroadcastChannel('aw-present-global') : null;
	var gHandlers = [];
	function gOn(fn) { gHandlers.push(fn); return function () { var i = gHandlers.indexOf(fn); if (i >= 0) gHandlers.splice(i, 1); }; }
	function gDispatch(msg) { if (!msg) return; for (var i = 0; i < gHandlers.length; i++) { try { gHandlers[i](msg); } catch (_) {} } }
	function gSend(msg) { msg.n = Date.now(); try { localStorage.setItem(GKEY, JSON.stringify(msg)); } catch (_) {} if (gbus) { try { gbus.postMessage(msg); } catch (_) {} } }
	function audienceAlive() { try { var v = parseInt(localStorage.getItem(ALIVE) || '0', 10); return !isNaN(v) && (Date.now() - v) < 5000; } catch (_) { return false; } }
	if (gbus) gbus.onmessage = function (ev) { gDispatch(ev.data); };
	// ── Sync ────────────────────────────────────────────────────────────────
	function totalSteps() {
		try { if (typeof STEPS !== 'undefined' && STEPS && STEPS.length) return STEPS.length; } catch (_) {}
		var c = document.getElementById('step-counter');
		if (c) { var m = c.textContent.match(/\/\s*(\d+)/); if (m) return parseInt(m[1], 10); }
		return Infinity;
	}
	function broadcast(n) {
		if (applyingRemote) return;
		try { localStorage.setItem(KEY, String(n)); } catch (_) {}
		if (bus) { try { bus.postMessage({ type: 'step', step: n }); } catch (_) {} }
	}
	function applyRemote(n) {
		if (typeof n !== 'number' || isNaN(n) || n === lastStep) return;
		if (n < 0 || n >= totalSteps()) return;
		// Before the presenter clicks Start, remember the step but don't
		// render/animate — playback begins only on the presenter's Start control.
		if (!started) { pendingStep = n; return; }
		if (typeof window.renderStep !== 'function') return;
		setPaused(false);
		applyingRemote = true;
		try { window.renderStep(n); } finally { applyingRemote = false; }
		lastStep = n;
	}
	if (bus) bus.onmessage = function (ev) {
		if (!ev.data) return;
		if (ev.data.type === 'step') applyRemote(ev.data.step);
		else if (ev.data.type === 'control') handleControl(ev.data);
	};
	window.addEventListener('storage', function (ev) {
		if (ev.key === KEY && ev.newValue != null) applyRemote(parseInt(ev.newValue, 10));
		else if (ev.key === CTRL && ev.newValue != null) { try { handleControl(JSON.parse(ev.newValue)); } catch (_) {} }
		else if (ev.key === GKEY && ev.newValue != null) { try { gDispatch(JSON.parse(ev.newValue)); } catch (_) {} }
	});

	// ── Play / pause (presenter-driven, mirrored to both windows) ───────────
	function storedStep() {
		try { var v = parseInt(localStorage.getItem(KEY) || '0', 10); if (!isNaN(v) && v >= 0 && v < totalSteps()) return v; } catch (_) {}
		return 0;
	}
	// Pause or resume every GSAP animation in this window via the global timeline.
	function setPaused(p) {
		pausedState = !!p;
		try {
			if (window.gsap && gsap.globalTimeline) {
				if (pausedState) gsap.globalTimeline.pause();
				else gsap.globalTimeline.play();
			}
		} catch (_) {}
	}
	function sendControl(action, step, value) {
		var msg = { type: 'control', action: action, step: (typeof step === 'number') ? step : null, value: (typeof value === 'number') ? value : null, n: Date.now() };
		try { localStorage.setItem(CTRL, JSON.stringify(msg)); } catch (_) {}
		if (bus) { try { bus.postMessage(msg); } catch (_) {} }
	}
	// Mirror the animation speed (global timeScale) to this window.
	function mirrorSpeed(v) {
		try { if (window.gsap && gsap.globalTimeline && typeof v === 'number' && v > 0) gsap.globalTimeline.timeScale(v); } catch (_) {}
	}
	// ── Generic in-step UI sync ─────────────────────────────────────────────
	// Lets a page broadcast its own interactive controls (sliders, toggles,
	// scenario pickers, …) from the presenter window to the audience window.
	//   window.awPresent.send('scenario', 2)   // presenter → broadcast
	//   window.awPresent.on('scenario', fn)     // audience  → apply
	// Values may be any JSON-serialisable type.
	var uiHandlers = {};
	function sendUI(action, value) {
		if (isPresent) return; // only the presenter (main window) broadcasts
		var msg = { type: 'control', action: 'ui', uiAction: String(action), value: value, n: Date.now() };
		try { localStorage.setItem(CTRL, JSON.stringify(msg)); } catch (_) {}
		if (bus) { try { bus.postMessage(msg); } catch (_) {} }
	}
	function onUI(action, handler) { if (typeof handler === 'function') uiHandlers[String(action)] = handler; }
	window.awPresent = { send: sendUI, on: onUI };
	// Replay (audience): re-render the current step even though it hasn't changed.
	function forceRender(n) {
		if (!started || typeof window.renderStep !== 'function') return;
		setPaused(false);
		var target = (typeof n === 'number' && n >= 0) ? n : lastStep;
		applyingRemote = true;
		try { window.renderStep(target); } finally { applyingRemote = false; }
		lastStep = target;
	}
	// Audience side: react to the presenter's Start / Pause / Resume / Replay / Speed.
	function handleControl(msg) {
		if (!msg || msg.type !== 'control') return;
		if (msg.action === 'start') startPlayback(typeof msg.step === 'number' ? msg.step : null);
		else if (msg.action === 'pause') setPaused(true);
		else if (msg.action === 'resume') setPaused(false);
		else if (msg.action === 'replay') forceRender(typeof msg.step === 'number' ? msg.step : lastStep);
		else if (msg.action === 'speed') mirrorSpeed(msg.value);
		else if (msg.action === 'ui') { var h = uiHandlers[msg.uiAction]; if (typeof h === 'function') { try { h(msg.value); } catch (_) {} } }
	}
	// Begin playback (audience): drop the waiting overlay and play from `step`.
	function startPlayback(step) {
		started = true;
		if (startOverlay && startOverlay.parentNode) { startOverlay.parentNode.removeChild(startOverlay); startOverlay = null; }
		var target = (typeof step === 'number' && step >= 0) ? step
			: (pendingStep != null ? pendingStep : storedStep());
		pendingStep = null;
		setPaused(false);
		lastStep = target;
		if (typeof window.renderStep === 'function') {
			applyingRemote = true;
			try { window.renderStep(target); } finally { applyingRemote = false; }
		}
		if (isPresent && enterFsRef) { try { enterFsRef(); } catch (_) {} }
	}
	// Presenter side: refresh the Start / Pause / Resume toggle label.
	function updatePlayBtn() {
		var b = document.getElementById('present-play');
		if (!b) return;
		var ico = b.querySelector('.aw-play-ico');
		var lab = b.querySelector('.aw-play-label');
		if (!presStarted) { if (ico) ico.textContent = '\u25B6'; if (lab) lab.textContent = 'Start'; b.setAttribute('aria-label', 'Start the animation in the audience window'); }
		else if (pausedState) { if (ico) ico.textContent = '\u25B6'; if (lab) lab.textContent = 'Resume'; b.setAttribute('aria-label', 'Resume the animation'); }
		else { if (ico) ico.textContent = '\u23F8'; if (lab) lab.textContent = 'Pause'; b.setAttribute('aria-label', 'Pause the animation'); }
	}
	function onPlayClick() {
		if (!presStarted) { presStarted = true; pausedState = false; sendControl('start', lastStep); sendControl('speed', null, currentSpeed()); }
		else if (!pausedState) { setPaused(true); sendControl('pause'); }
		else { setPaused(false); sendControl('resume'); }
		updatePlayBtn();
	}

	// ── Mirror the page's own Replay + Speed buttons to the audience ─────────
	// These page controls only affect the local window, so on the presenter
	// side we listen on the same buttons (our handler runs after the page's,
	// since the page registered first) and broadcast the result. Replay re-runs
	// the same step (which the step-sync ignores), and Speed sets the global
	// timeScale — both need an explicit control message to reach the audience.
	function currentSpeed() {
		try { if (window.gsap && gsap.globalTimeline) return gsap.globalTimeline.timeScale(); } catch (_) {}
		return 1;
	}
	function wirePresenterControls() {
		if (isPresent) return;
		var replayBtn = document.getElementById('replay-btn');
		if (replayBtn) replayBtn.addEventListener('click', function () { sendControl('replay', lastStep); });
		function onSpeed() { sendControl('speed', null, currentSpeed()); }
		var sd = document.getElementById('speed-down');
		var su = document.getElementById('speed-up');
		if (sd) sd.addEventListener('click', onSpeed);
		if (su) su.addEventListener('click', onSpeed);
	}

	// ── Scene fit (per .scene) + presenter zoom / pan (whole #stage) ────────
	var uZoom = 1, uPanX = 0, uPanY = 0;
	function applyZoom() {
		var stage = document.getElementById('stage');
		if (!stage) return;
		stage.style.transformOrigin = 'center center';
		stage.style.transform = (uZoom === 1 && !uPanX && !uPanY)
			? ''
			: 'translate(' + uPanX.toFixed(1) + 'px,' + uPanY.toFixed(1) + 'px) scale(' + uZoom.toFixed(4) + ')';
	}
	function resetZoom() { uZoom = 1; uPanX = 0; uPanY = 0; applyZoom(); }
	// Scale a .scene (when present) so the slide fits the audience viewport
	function fitScene() {
		if (!isPresent) return;
		var scene = document.querySelector('.scene');
		var stage = document.getElementById('stage');
		if (!scene || !stage) return;
		scene.style.transform = 'none';
		requestAnimationFrame(function () {
			var availH = stage.clientHeight - 28, availW = stage.clientWidth - 28;
			var h = scene.scrollHeight, w = scene.scrollWidth;
			if (!h || !w) return;
			var scale = Math.min(1, availH / h, availW / w);
			scene.style.transformOrigin = 'center center';
			scene.style.transform = scale < 1 ? 'scale(' + scale.toFixed(4) + ')' : 'none';
		});
	}

	// ── Wrap renderStep so every step change broadcasts + refits ────────────
	function wrapRenderStep() {
		if (typeof window.renderStep !== 'function' || window.renderStep.__awPresent) return;
		var orig = window.renderStep;
		function wrapped(n) {
			var changed = (typeof n === 'number' && n !== lastStep);
			var r = orig.apply(this, arguments);
			if (typeof n === 'number') lastStep = n;
			broadcast(lastStep);
			// A new step always plays from the start, so clear any paused state.
			if (changed) { setPaused(false); if (!isPresent) updatePlayBtn(); }
			if (isPresent) { if (changed) resetZoom(); fitScene(); }
			return r;
		}
		wrapped.__awPresent = true;
		try { window.renderStep = wrapped; } catch (_) {}
	}

	// ── Injected styles ─────────────────────────────────────────────────────
	function injectStyle() {
		if (document.getElementById('aw-present-style')) return;
		var css = ''
			+ '#present-btn{display:inline-flex;align-items:center;gap:.38rem;height:2rem;padding:0 .7rem;font:inherit;font-size:.78rem;font-weight:700;line-height:1;white-space:nowrap;border:1px solid #0a84ff;border-radius:999px;color:#0a84ff;background:transparent;cursor:pointer;transition:background .2s ease,color .2s ease,transform .18s ease,box-shadow .2s ease;animation:awPresentPulse 2.6s ease-in-out infinite;}'
			+ '#present-btn .aw-present-ico{font-size:1rem;line-height:1;}'
			+ '#present-btn:hover{color:#fff;background:#0a84ff;transform:translateY(-1px);box-shadow:0 3px 12px rgba(10,132,255,.35);animation:none;}'
			+ '@keyframes awPresentPulse{0%,100%{box-shadow:0 0 0 0 rgba(10,132,255,0);}50%{box-shadow:0 0 0 4px rgba(10,132,255,.16);}}'
			+ 'body.present-mode .app-header,body.present-mode .progress-track,body.present-mode #controls,body.present-mode #header-reveal,body.present-mode #step-outline{display:none !important;}'
			+ 'body.present-mode{padding-bottom:0 !important;overflow:hidden !important;}'
			+ 'body.present-mode #stage{flex:1 1 auto;min-height:0;height:auto;display:flex;align-items:center;justify-content:center;overflow:hidden;}'
			+ 'body.present-mode .scene{position:relative;top:auto;left:auto;transform:none;margin:0 auto;width:min(1200px,94vw);}'
			+ 'body.present-mode.cursor-idle,body.present-mode.cursor-idle *{cursor:none !important;}'
			+ '#present-hint{position:fixed;bottom:1.2rem;left:50%;transform:translateX(-50%);z-index:60;padding:.5rem 1rem;border-radius:999px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(20,20,28,.82);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:0 4px 16px rgba(0,0,0,.3);transition:opacity .6s ease;pointer-events:none;}'
			+ '#present-start{position:fixed;inset:0;z-index:80;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.5rem;padding:2rem;text-align:center;cursor:pointer;background:var(--theme-body-background,#0b1020);color:var(--theme-text-color,inherit);}'
			+ '#present-start .aw-start-title{margin:0;font-size:clamp(1.2rem,2.4vw,1.9rem);font-weight:700;max-width:38ch;}'
			+ '#present-start .aw-start-sub{margin:0;font-size:.95rem;opacity:.7;}'
			+ '#present-start .aw-start-btn{display:inline-flex;align-items:center;justify-content:center;gap:.55rem;padding:0 1.7rem;height:3.4rem;border:none;border-radius:999px;font:inherit;font-size:1.05rem;font-weight:700;color:#fff;background:#0a84ff;cursor:pointer;box-shadow:0 6px 24px rgba(10,132,255,.4);transition:transform .18s ease,box-shadow .2s ease;animation:awPresentPulse 2.6s ease-in-out infinite;}'
			+ '#present-start .aw-start-btn:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(10,132,255,.5);animation:none;}'
			+ '#present-start .aw-start-ico{font-size:1.3rem;line-height:1;}'
			+ '#present-start .aw-waiting{font-size:1.05rem;opacity:.85;font-weight:600;}'
			+ '#present-play{display:none;align-items:center;gap:.38rem;height:2rem;padding:0 .8rem;font:inherit;font-size:.78rem;font-weight:700;line-height:1;white-space:nowrap;border:1px solid #0a84ff;border-radius:999px;color:#fff;background:#0a84ff;cursor:pointer;transition:transform .18s ease,box-shadow .2s ease,filter .2s ease;}'
			+ '#present-play.is-visible{display:inline-flex;}'
			+ '#present-play:hover{transform:translateY(-1px);box-shadow:0 3px 12px rgba(10,132,255,.35);filter:brightness(1.05);}'
			+ '#present-play .aw-play-ico{font-size:.95rem;line-height:1;}';
		var s = document.createElement('style');
		s.id = 'aw-present-style';
		s.textContent = css;
		document.head.appendChild(s);
	}

	// ── Present button (presenter side) ─────────────────────────────────────
	function injectButton() {
		if (document.getElementById('present-btn')) return;
		var btn = document.createElement('button');
		btn.id = 'present-btn';
		btn.type = 'button';
		btn.setAttribute('aria-label', 'Open presenter display in a new window');
		btn.title = 'Open presenter display (new window) — drag to your 2nd monitor, click for fullscreen';
		btn.innerHTML = '<span class="aw-present-ico" aria-hidden="true">\uD83D\uDDA5\uFE0F</span><span class="aw-present-label">Click to present</span>';
		// Start / Pause / Resume toggle — drives playback in the audience window.
		var play = document.createElement('button');
		play.id = 'present-play';
		play.type = 'button';
		play.setAttribute('aria-label', 'Start the animation in the audience window');
		play.innerHTML = '<span class="aw-play-ico" aria-hidden="true">\u25B6</span><span class="aw-play-label">Start</span>';
		play.addEventListener('click', function (e) { e.stopPropagation(); onPlayClick(); });
		var theme = document.getElementById('theme-toggle');
		if (theme && theme.parentNode) { theme.parentNode.insertBefore(btn, theme); theme.parentNode.insertBefore(play, theme); }
		else { var hdr = document.querySelector('.app-header'); if (hdr) { hdr.appendChild(btn); hdr.appendChild(play); } }
		btn.addEventListener('click', function (e) { e.stopPropagation(); openAudience(); });
	}

	function openAudience() {
		var url = location.pathname + '?present' + (location.hash || '');
		// `popup` opens a minimal window; browsers still show the address bar
		// (location=no is ignored), so the audience window goes true fullscreen
		// on the first click / F press to hide all browser chrome.
		var w = Math.min(1280, screen.availWidth || 1280);
		var h = Math.min(720, screen.availHeight || 720);
		var feat = 'popup=yes,toolbar=no,location=no,menubar=no,status=no,scrollbars=no,width=' + w + ',height=' + h;
		function spawn() { window.open(url, 'aw-present-audience', feat); }
		if (audienceAlive()) {
			// An audience window is already open — possibly on a previous journey.
			// Ask it to navigate here (reusing the same window) instead of opening
			// a second one. Only spawn a fresh window if nothing acknowledges.
			var nonce = String(Date.now()) + '-' + Math.random().toString(36).slice(2);
			var acked = false;
			var off = gOn(function (msg) { if (msg && msg.type === 'aud-ack' && msg.nonce === nonce) acked = true; });
			gSend({ type: 'navigate', url: url, nonce: nonce });
			setTimeout(function () { off(); if (!acked) spawn(); }, 800);
		} else {
			spawn();
		}
		broadcast(lastStep);
		// Reveal + reset the Start/Pause toggle for this fresh audience window.
		presStarted = false;
		pausedState = false;
		var play = document.getElementById('present-play');
		if (play) play.classList.add('is-visible');
		updatePlayBtn();
	}

	// ── Audience (?present) bootstrap ───────────────────────────────────────
	function initPresent() {
		document.body.classList.add('present-mode');
		var btn = document.getElementById('present-btn');
		if (btn) btn.style.display = 'none';

		// Heartbeat: advertise that an audience window is alive so the presenter
		// (on any journey page) reuses this window instead of opening another.
		function beat() { try { localStorage.setItem(ALIVE, String(Date.now())); } catch (_) {} }
		function clearBeat() { try { localStorage.removeItem(ALIVE); } catch (_) {} }
		beat();
		var beatTimer = setInterval(beat, 2000);
		window.addEventListener('pagehide', function () { clearInterval(beatTimer); clearBeat(); });
		window.addEventListener('beforeunload', clearBeat);

		// Reuse: when the presenter switches to another journey, navigate THIS
		// same window there (acknowledging first so no second window is spawned).
		gOn(function (msg) {
			if (!msg || msg.type !== 'navigate' || !msg.url) return;
			gSend({ type: 'aud-ack', nonce: msg.nonce });
			var here = location.pathname + '?present';
			if (msg.url.split('#')[0] !== here.split('#')[0]) location.href = msg.url;
		});

		// Idle-cursor: hide the pointer after 3s of no movement
		var t;
		function show() {
			document.body.classList.remove('cursor-idle');
			clearTimeout(t);
			t = setTimeout(function () { document.body.classList.add('cursor-idle'); }, 3000);
		}
		window.addEventListener('mousemove', show);
		show();

		// Presenter zoom & pan: pinch (ctrl+wheel) or scroll to zoom toward the
		// cursor, drag (or two-finger scroll while zoomed) to pan, double-click
		// or press 0 to reset. Lets you magnify any part of a slide live.
		var stageEl = document.getElementById('stage');
		if (stageEl) {
			stageEl.style.touchAction = 'none';
			function zoomAt(cx, cy, factor) {
				var newZoom = Math.min(8, Math.max(1, uZoom * factor));
				factor = newZoom / uZoom;
				if (factor === 1) return;
				var rect = stageEl.getBoundingClientRect();
				var scx = rect.left + rect.width / 2, scy = rect.top + rect.height / 2;
				uPanX += -(factor - 1) * (cx - scx);
				uPanY += -(factor - 1) * (cy - scy);
				uZoom = newZoom;
				if (uZoom === 1) { uPanX = 0; uPanY = 0; }
				applyZoom();
			}
			stageEl.addEventListener('wheel', function (e) {
				if (e.ctrlKey) {                 // pinch-zoom gesture (or Ctrl+wheel)
					e.preventDefault();
					zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
				} else if (uZoom > 1) {          // two-finger scroll pans while zoomed
					e.preventDefault();
					uPanX -= e.deltaX; uPanY -= e.deltaY;
					applyZoom();
				}
			}, { passive: false });
			var dragging = false, lx = 0, ly = 0;
			stageEl.addEventListener('pointerdown', function (e) {
				if (uZoom <= 1) return;
				dragging = true; lx = e.clientX; ly = e.clientY;
				try { stageEl.setPointerCapture(e.pointerId); } catch (_) {}
				document.body.style.cursor = 'grabbing';
			});
			stageEl.addEventListener('pointermove', function (e) {
				if (!dragging) return;
				uPanX += e.clientX - lx; uPanY += e.clientY - ly;
				lx = e.clientX; ly = e.clientY;
				applyZoom();
			});
			function endDrag() { dragging = false; document.body.style.cursor = ''; }
			stageEl.addEventListener('pointerup', endDrag);
			stageEl.addEventListener('pointercancel', endDrag);
			stageEl.addEventListener('dblclick', function (e) { e.preventDefault(); resetZoom(); });
		}
		document.addEventListener('keydown', function (e) {
			if (e.key === '0' && !e.metaKey && !e.ctrlKey && !e.altKey) {
				var tag = (e.target.tagName || '').toLowerCase();
				if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
				resetZoom();
			}
		});

		// True fullscreen is the only reliable way to hide the browser address
		// bar / chrome — and it requires a user gesture (a click or key press).
		function enterFs() {
			var el = document.documentElement;
			if (!document.fullscreenElement && el.requestFullscreen) el.requestFullscreen().catch(function () {});
		}
		function toggleFs() {
			if (!document.fullscreenElement) enterFs();
			else if (document.exitFullscreen) document.exitFullscreen().catch(function () {});
		}
		// Press F to toggle fullscreen
		document.addEventListener('keydown', function (e) {
			if (e.code !== 'KeyF' || e.metaKey || e.ctrlKey || e.altKey) return;
			var tag = (e.target.tagName || '').toLowerCase();
			if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
			e.preventDefault();
			toggleFs();
		});
		// Click anywhere in the audience window to go fullscreen (one gesture
		// removes the address bar — browsers ignore window.open's location=no).
		document.addEventListener('click', function () {
			if (!document.fullscreenElement) enterFs();
		});

		// Hint: a clickable prompt that stays until we're actually fullscreen,
		// then fades. Reappears if the user exits fullscreen.
		var hint = document.createElement('div');
		hint.id = 'present-hint';
		document.body.appendChild(hint);
		var hideTimer;
		function refreshHint() {
			clearTimeout(hideTimer);
			if (document.fullscreenElement) {
				hint.textContent = 'Pinch / scroll to zoom · drag to pan · double-click or 0 to reset · F or Esc to exit';
				hint.style.opacity = '1';
				hideTimer = setTimeout(function () { hint.style.opacity = '0'; }, 4500);
			} else {
				hint.textContent = 'Click anywhere (or press F) for fullscreen — hides the address bar';
				hint.style.opacity = '1';
			}
		}
		document.addEventListener('fullscreenchange', refreshHint);
		document.addEventListener('fullscreenchange', fitScene);
		refreshHint();

		// Waiting overlay: the audience window never auto-plays. It shows a calm
		// "waiting" screen until the presenter clicks Start in the main window.
		// Clicking the overlay only enters fullscreen (browsers require a gesture
		// in this window for that) — it does NOT control playback.
		var overlay = document.createElement('div');
		overlay.id = 'present-start';
		var titleText = '';
		try {
			var pt = document.getElementById('page-title');
			titleText = (pt && pt.textContent.trim()) || (document.title || '').trim();
		} catch (_) {}
		overlay.innerHTML =
			'<p class="aw-start-title">' + (titleText || 'Presenter display') + '</p>'
			+ '<p class="aw-start-sub aw-waiting">\u23F3 Waiting for the presenter to start\u2026</p>'
			+ '<p class="aw-start-sub">Click anywhere for fullscreen</p>';
		document.body.appendChild(overlay);
		startOverlay = overlay;
		enterFsRef = enterFs;
		overlay.addEventListener('click', function () { if (!document.fullscreenElement) enterFs(); });

		// Safety net: honour a Start click that landed just before this window
		// finished loading (channel message would have been missed). Recency-gated
		// so a stale control from an earlier session can't trigger auto-play.
		try {
			var raw0 = localStorage.getItem(CTRL);
			if (raw0) { var m0 = JSON.parse(raw0); if (m0 && m0.action === 'start' && (Date.now() - (m0.n || 0)) < 8000) handleControl(m0); }
		} catch (_) {}
	}

	// ── Boot ────────────────────────────────────────────────────────────────
	function boot() {
		injectStyle();
		injectButton();
		wrapRenderStep();
		wirePresenterControls();
		if (isPresent) initPresent();
		window.addEventListener('resize', function () { if (isPresent) fitScene(); });
	}
	if (document.body) boot();
	else document.addEventListener('DOMContentLoaded', boot);
})();
