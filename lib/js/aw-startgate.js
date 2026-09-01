/*
 * aw-startgate.js — "click to Play" gate for AnimationWorks explainers.
 *
 * On load it covers the #stage with a Play overlay and freezes the GSAP global
 * timeline, so step 1 doesn't animate before the viewer is ready. Clicking Play
 * (or Enter/Space) resumes motion and (re)plays the current step from the start.
 *
 * Load it AFTER the page's engine <script> (renderStep/current already defined),
 * e.g. just before aw-present.js:
 *     <script src="../../lib/js/aw-startgate.js"></script>
 *
 * Skipped in presenter mode (?present), which runs its own start flow.
 */
(function () {
	if (window.__awStartGate) return;
	window.__awStartGate = true;
	if (new URLSearchParams(location.search).has('present')) return;

	var stage = document.getElementById('stage');
	if (!stage) return;

	var CAP = { en: 'Play', es: 'Reproducir', ja: '\u518D\u751F', ko: '\uC7AC\uC0DD', pt: 'Reproduzir' };
	function cap() { return CAP[(typeof currentLang === 'string' && CAP[currentLang]) ? currentLang : 'en']; }
	function freeze() { try { if (window.gsap && gsap.globalTimeline) gsap.globalTimeline.pause(); } catch (_) {} }

	// Hold the entrance at frame 0 (now and after the engine's first tick).
	freeze();
	requestAnimationFrame(freeze);

	var style = document.createElement('style');
	style.textContent =
		'#aw-start-overlay{position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;' +
		'background:var(--theme-body-background-translucent,rgba(255,255,255,0.85));backdrop-filter:blur(8px) saturate(1.1);-webkit-backdrop-filter:blur(8px) saturate(1.1);' +
		'cursor:pointer;transition:opacity .35s ease,visibility .35s ease}' +
		'#aw-start-overlay.aw-hide{opacity:0;visibility:hidden;pointer-events:none}' +
		'#aw-start-btn{width:104px;height:104px;border-radius:50%;border:none;cursor:pointer;background:var(--theme-primary,#0078d4);color:#fff;' +
		'display:inline-flex;align-items:center;justify-content:center;box-shadow:0 14px 40px var(--theme-primary-translucent,rgba(0,120,212,.5));' +
		'transition:transform .15s ease,box-shadow .2s ease}' +
		'#aw-start-overlay:hover #aw-start-btn{transform:scale(1.06)}#aw-start-btn:active{transform:scale(.95)}' +
		'#aw-start-cap{font-size:1.1rem;font-weight:700;color:var(--theme-text,#222);letter-spacing:.02em}' +
		'body.present-mode #aw-start-overlay{display:none!important}';
	document.head.appendChild(style);

	var ov = document.createElement('div');
	ov.id = 'aw-start-overlay';
	ov.setAttribute('role', 'button');
	ov.tabIndex = 0;
	ov.setAttribute('aria-label', cap());
	ov.innerHTML =
		'<button id="aw-start-btn" type="button" tabindex="-1" aria-hidden="true">' +
		'<svg viewBox="0 0 24 24" width="38" height="38" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></button>' +
		'<span id="aw-start-cap"></span>';
	ov.querySelector('#aw-start-cap').textContent = cap();
	document.body.appendChild(ov);

	// Keep label/caption in sync (and stay frozen) if the viewer switches language first.
	var sel = document.getElementById('lang-select');
	if (sel) sel.addEventListener('change', function () {
		var c = cap();
		ov.setAttribute('aria-label', c);
		var s = ov.querySelector('#aw-start-cap');
		if (s) s.textContent = c;
		freeze();
	});

	var done = false;
	function start() {
		if (done) return;
		done = true;
		document.removeEventListener('keydown', gateKeys, true);
		ov.classList.add('aw-hide');
		try { if (window.gsap && gsap.globalTimeline) gsap.globalTimeline.play(); } catch (_) {}
		try { if (typeof interruptAnimation === 'function') interruptAnimation(); } catch (_) {}
		try { if (typeof renderStep === 'function') renderStep(typeof current === 'number' && current >= 0 ? current : 0); } catch (_) {}
		try { stage.focus({ preventScroll: true }); } catch (_) {}
		setTimeout(function () {
			if (ov.parentNode) ov.parentNode.removeChild(ov);
			if (style.parentNode) style.parentNode.removeChild(style);
		}, 480);
	}

	function gateKeys(e) {
		if (done) return;
		var tag = (e.target && e.target.tagName || '').toLowerCase();
		if (tag === 'select' || tag === 'input' || tag === 'textarea') return;
		if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') { e.preventDefault(); e.stopPropagation(); start(); return; }
		if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].indexOf(e.key) >= 0) {
			e.preventDefault(); e.stopPropagation();
		}
	}

	ov.addEventListener('click', start);
	document.addEventListener('keydown', gateKeys, true);
}());
