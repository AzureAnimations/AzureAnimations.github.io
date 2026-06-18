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
		if (typeof window.renderStep !== 'function') return;
		applyingRemote = true;
		try { window.renderStep(n); } finally { applyingRemote = false; }
		lastStep = n;
	}
	if (bus) bus.onmessage = function (ev) { if (ev.data && ev.data.type === 'step') applyRemote(ev.data.step); };
	window.addEventListener('storage', function (ev) {
		if (ev.key === KEY && ev.newValue != null) applyRemote(parseInt(ev.newValue, 10));
	});

	// ── Scale a scene to fit the audience viewport (keeps it fully visible) ──
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
			var r = orig.apply(this, arguments);
			if (typeof n === 'number') lastStep = n;
			broadcast(lastStep);
			if (isPresent) fitScene();
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
			+ 'body.present-mode{padding-bottom:0 !important;}'
			+ 'body.present-mode #stage{flex:1 1 auto;min-height:0;height:auto;display:flex;align-items:center;justify-content:center;overflow:hidden;}'
			+ 'body.present-mode .scene{position:relative;top:auto;left:auto;transform:none;margin:0 auto;width:min(1200px,94vw);}'
			+ 'body.present-mode.cursor-idle,body.present-mode.cursor-idle *{cursor:none !important;}'
			+ '#present-hint{position:fixed;bottom:1.2rem;left:50%;transform:translateX(-50%);z-index:60;padding:.5rem 1rem;border-radius:999px;font-size:.85rem;font-weight:600;color:#fff;background:rgba(20,20,28,.82);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:0 4px 16px rgba(0,0,0,.3);transition:opacity .6s ease;pointer-events:none;}';
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
		var theme = document.getElementById('theme-toggle');
		if (theme && theme.parentNode) theme.parentNode.insertBefore(btn, theme);
		else { var hdr = document.querySelector('.app-header'); if (hdr) hdr.appendChild(btn); }
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
		window.open(url, 'aw-present-audience', feat);
		broadcast(lastStep);
	}

	// ── Audience (?present) bootstrap ───────────────────────────────────────
	function initPresent() {
		document.body.classList.add('present-mode');
		var btn = document.getElementById('present-btn');
		if (btn) btn.style.display = 'none';

		// Idle-cursor: hide the pointer after 3s of no movement
		var t;
		function show() {
			document.body.classList.remove('cursor-idle');
			clearTimeout(t);
			t = setTimeout(function () { document.body.classList.add('cursor-idle'); }, 3000);
		}
		window.addEventListener('mousemove', show);
		show();

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
				hint.textContent = 'Drag to your 2nd monitor · press F or Esc to exit fullscreen';
				hint.style.opacity = '1';
				hideTimer = setTimeout(function () { hint.style.opacity = '0'; }, 3500);
			} else {
				hint.textContent = 'Click anywhere (or press F) for fullscreen — hides the address bar';
				hint.style.opacity = '1';
			}
		}
		document.addEventListener('fullscreenchange', refreshHint);
		document.addEventListener('fullscreenchange', fitScene);
		refreshHint();

		// Render the initial step the presenter is on
		var s = 0;
		try { var v = parseInt(localStorage.getItem(KEY) || '0', 10); if (!isNaN(v) && v >= 0 && v < totalSteps()) s = v; } catch (_) {}
		if (typeof window.renderStep === 'function') window.renderStep(s);
	}

	// ── Boot ────────────────────────────────────────────────────────────────
	function boot() {
		injectStyle();
		injectButton();
		wrapRenderStep();
		if (isPresent) initPresent();
		window.addEventListener('resize', function () { if (isPresent) fitScene(); });
	}
	if (document.body) boot();
	else document.addEventListener('DOMContentLoaded', boot);
})();
