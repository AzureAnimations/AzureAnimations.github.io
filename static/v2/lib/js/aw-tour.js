/* aw-tour.js — a guided "walkthrough" for architecture-diagram hubs.
   Dims the page, spotlights one node at a time, pins an explanation card beside it,
   and plays the matching narration clip. Drop-in: one <script> tag + AWTour.configure({…}).

   The spotlight is a single huge ring shadow on the target itself, so the cutout follows
   the element's own border-radius and survives scroll/resize with no coordinate maths. */
(function () {
	if (window.__awTourLoaded) return;
	window.__awTourLoaded = true;

	var CARD_W = 340;          // keep in sync with .awt-card width
	var GAP = 20;              // card ↔ spotlit node
	var EDGE = 14;             // min distance from the viewport edge
	var SAFE_TOP = 66;         // clears the sticky topbar
	var SAFE_BOTTOM = 158;     // clears the controls dock + caption bar

	var cfg = null, idx = -1, running = false, paused = false, seq = 0, btnBound = false;
	var card, bar, progressEl, playBtn, audio, fallbackTimer = null, repositionQueued = false;

	function pad2(n) { return (n < 10 ? '0' : '') + n; }
	function reduced() { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
	function curLang() { try { return (typeof cfg.lang === 'function' ? cfg.lang() : cfg.lang) || 'en'; } catch (e) { return 'en'; } }

	function clipSrc(i) {
		if (!cfg.audioBase) return null;
		var lang = curLang();
		return cfg.audioBase + (lang && lang !== 'en' ? lang + '/' : '') + 'step-' + pad2(i + 1) + '.mp3';
	}

	/* ── chrome ─────────────────────────────────────────────── */
	function injectCss() {
		if (document.getElementById('awt-css')) return;
		var s = document.createElement('style');
		s.id = 'awt-css';
		s.textContent = [
			'html.awt-nosnap{scroll-snap-type:none !important;}',
			/* the page chrome sits above the veil on some hubs (the likes nudge) — fade it out instead of fighting z-index */
			'body.awt-on .topbar, body.awt-on .bar, body.awt-on .aw-like-pop, body.awt-on .like-nudge{opacity:0.18 !important;pointer-events:none !important;}',
			// scroll room so a node in the LAST row can still clear the caption bar + controls dock
			'body.awt-on{padding-bottom:190px;}',
			'.awt-spot{position:relative;z-index:60;',
			'  box-shadow:0 0 0 100vmax rgba(4,6,12,0.88), 0 0 0 3px var(--awt-ring,#4fd6e0) !important;}',
			'body.theme-light .awt-spot{box-shadow:0 0 0 100vmax rgba(12,18,30,0.82), 0 0 0 3px var(--awt-ring,#0078d4) !important;}',
			'.awt-card{position:fixed;z-index:72;width:' + CARD_W + 'px;max-width:calc(100vw - 28px);',
			'  padding:1rem 1.15rem 1.05rem;border-radius:16px;opacity:0;pointer-events:none;',
			'  background:var(--theme-card-background,#fff);color:var(--theme-text,#16203c);',
			'  border:2px solid var(--awt-ring,#4fd6e0);box-shadow:0 22px 60px rgba(0,0,0,0.42);',
			'  transition:opacity .22s ease, transform .22s ease;transform:translateY(6px);}',
			'body.theme-dark .awt-card{background:#21232c;}',
			'.awt-card.is-on{opacity:1;pointer-events:auto;transform:translateY(0);}',
			'.awt-eyebrow{display:block;font-size:0.76rem;font-weight:700;letter-spacing:0.12em;',
			'  text-transform:uppercase;color:var(--awt-ring,#4fd6e0);margin-bottom:0.34rem;}',
			'.awt-title{margin:0 0 0.4rem;font-size:1.16rem;font-weight:600;line-height:1.25;}',
			'.awt-body{margin:0;font-size:0.98rem;line-height:1.5;color:var(--theme-text-subtle,#5a6478);}',
			'.awt-open{display:inline-block;margin-top:0.7rem;font-size:0.92rem;font-weight:600;',
			'  text-decoration:none;color:var(--awt-ring,#4fd6e0);}',
			'.awt-open:hover{text-decoration:underline;}',
			'.awt-bar{position:fixed;left:50%;bottom:96px;transform:translateX(-50%);z-index:74;',
			'  display:none;align-items:center;gap:0.5rem;padding:0.5rem 0.62rem;border-radius:999px;',
			'  background:rgba(18,20,28,0.94);border:1px solid rgba(255,255,255,0.16);',
			'  box-shadow:0 14px 40px rgba(0,0,0,0.5);}',
			'.awt-bar.is-on{display:flex;}',
			'.awt-bar button{display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;',
			'  padding:0 0.6rem;border-radius:999px;cursor:pointer;font-size:0.92rem;font-weight:600;',
			'  color:#fff;background:transparent;border:1px solid rgba(255,255,255,0.22);}',
			'.awt-bar button:hover:not(:disabled){background:rgba(255,255,255,0.14);}',
			'.awt-bar button:disabled{opacity:0.38;cursor:default;}',
			'.awt-bar .awt-progress{color:#fff;font-size:0.88rem;font-variant-numeric:tabular-nums;padding:0 0.4rem;opacity:0.85;}',
			'.awt-bar .awt-exit{border-color:rgba(255,255,255,0.34);}',
			/* caption bar — aw-captions.js writes into .aw-cc-text and toggles .has-text */
			'#aw-caption{position:fixed;left:0;right:0;bottom:0;z-index:73;display:none;',
			'  padding:0.85rem 1.4rem 1rem;text-align:center;color:#f4f6fb;',
			'  background:rgba(8,10,16,0.92);backdrop-filter:blur(4px);',
			'  border-top:1px solid rgba(255,255,255,0.14);}',
			'body.cc-on #aw-caption{display:block;}',
			'#aw-caption .aw-cc-text{display:inline-block;max-width:min(1000px,92vw);',
			'  font-size:1.12rem;line-height:1.45;font-weight:500;}',
			'@media (prefers-reduced-motion: reduce){.awt-card{transition:none;}}'
		].join('\n');
		document.head.appendChild(s);
	}

	function build() {
		injectCss();
		card = document.createElement('div');
		card.className = 'awt-card';
		card.setAttribute('role', 'dialog');
		card.setAttribute('aria-live', 'polite');
		document.body.appendChild(card);

		bar = document.createElement('div');
		bar.className = 'awt-bar';
		bar.setAttribute('role', 'group');
		bar.setAttribute('aria-label', 'Walkthrough controls');
		bar.innerHTML =
			'<button type="button" data-awt="prev" aria-label="Previous">\u2190</button>' +
			'<button type="button" data-awt="play" aria-label="Pause">\u23F8</button>' +
			'<button type="button" data-awt="next" aria-label="Next">\u2192</button>' +
			'<span class="awt-progress"></span>' +
			'<button type="button" class="awt-exit" data-awt="exit">Exit</button>';
		document.body.appendChild(bar);
		progressEl = bar.querySelector('.awt-progress');
		playBtn = bar.querySelector('[data-awt="play"]');

		if (!document.getElementById('aw-caption')) {
			var cc = document.createElement('div');
			cc.id = 'aw-caption';
			cc.setAttribute('aria-live', 'polite');
			document.body.appendChild(cc);
		}
		if (cfg.narration && window.AWCaptions) {
			AWCaptions.configure({ page: cfg.narrationPage || 'index', base: cfg.narration,
				lang: curLang, reserve: false });
		}
		bar.addEventListener('click', function (e) {
			var b = e.target.closest('[data-awt]'); if (!b) return;
			var a = b.getAttribute('data-awt');
			if (a === 'next') go(idx + 1);
			else if (a === 'prev') go(idx - 1);
			else if (a === 'exit') stop();
			else if (a === 'play') togglePause();
		});

		audio = new Audio();
		audio.preload = 'auto';
		audio.addEventListener('ended', function () { if (running && !paused) go(idx + 1); });
		audio.addEventListener('error', function () { if (running && !paused) armFallback(); });
	}

	/* ── placement ──────────────────────────────────────────── */
	// The usable band excludes the sticky topbar and the caption bar + controls dock.
	function bandTop() { return SAFE_TOP; }
	function bandBottom() { return Math.max(SAFE_TOP + 80, innerHeight - SAFE_BOTTOM); }

	function place(target) {
		var h = card.offsetHeight, w = card.offsetWidth;
		var loT = bandTop(), hiT = Math.max(loT, bandBottom() - h);
		if (!target) {                                  // no node → centre the card in the band
			card.style.left = Math.round((innerWidth - w) / 2) + 'px';
			card.style.top = Math.round(Math.min(Math.max((innerHeight - h) / 2, loT), hiT)) + 'px';
			return;
		}
		var r = target.getBoundingClientRect(), left;
		if (r.right + GAP + w <= innerWidth - EDGE) left = r.right + GAP;        // prefer right
		else if (r.left - GAP - w >= EDGE) left = r.left - GAP - w;              // else left
		else left = Math.min(Math.max(r.left + (r.width - w) / 2, EDGE), innerWidth - w - EDGE);
		var top = Math.min(Math.max(r.top + (r.height - h) / 2, loT), hiT);
		card.style.left = Math.round(left) + 'px';
		card.style.top = Math.round(top) + 'px';
	}

	function reposition() {
		if (!running || repositionQueued) return;
		repositionQueued = true;
		requestAnimationFrame(function () {
			repositionQueued = false;
			var st = cfg.steps[idx];
			place(st && st.target ? document.querySelector(st.target) : null);
		});
	}

	function scrollTo(el, block, done) {
		var fired = false;
		function once() { if (fired) return; fired = true; clearInterval(iv); clearTimeout(cap); done(); }
		if (!el) { once(); return; }
		el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: block || 'center' });
		var settled = 0, last = -1;
		var iv = setInterval(function () {
			if (Math.abs(window.scrollY - last) < 1) { if (++settled > 2) once(); }
			else { settled = 0; }
			last = window.scrollY;
		}, 60);
		var cap = setTimeout(once, 1200);   // hard cap; once() makes the double-fire harmless
	}

	// Nudge the page by the SMALLEST amount that brings the node into the usable band —
	// never re-centre, or the view bobs as the spotlight moves between stops.
	function shiftFor(el) {
		if (!el) return 0;
		var r = el.getBoundingClientRect(), lo = bandTop(), hi = bandBottom();
		if (r.bottom > hi) return Math.min(r.bottom - hi, Math.max(r.top - lo, 0));
		if (r.top < lo) return r.top - lo;
		return 0;
	}

	function nudge(px, done) {
		var fired = false;
		function once() { if (fired) return; fired = true; clearInterval(iv); clearTimeout(cap); done(); }
		if (Math.abs(px) < 4) { once(); return; }
		window.scrollBy({ top: px, behavior: reduced() ? 'auto' : 'smooth' });
		var settled = 0, last = -1;
		var iv = setInterval(function () {
			if (Math.abs(window.scrollY - last) < 1) { if (++settled > 2) once(); }
			else { settled = 0; }
			last = window.scrollY;
		}, 60);
		var cap = setTimeout(once, 900);
	}

	/* ── steps ──────────────────────────────────────────────── */
	function clearSpot() {
		// querySelectorAll, not querySelector: a raced callback can leave more than one behind
		Array.prototype.forEach.call(document.querySelectorAll('.awt-spot'), function (p) {
			p.classList.remove('awt-spot'); p.style.removeProperty('--awt-ring');
		});
	}

	function armFallback() {
		clearTimeout(fallbackTimer);
		var st = cfg.steps[idx], len = ((st && st.body) || '').length;
		fallbackTimer = setTimeout(function () { if (running && !paused) go(idx + 1); },
			Math.min(18000, 4200 + len * 46));
	}

	function go(n) {
		if (!running) return;
		if (n < 0) return;
		if (n >= cfg.steps.length) { stop(); return; }
		idx = n;
		var st = cfg.steps[idx];
		var my = ++seq;                  // invalidates any in-flight scroll callback

		clearTimeout(fallbackTimer);
		audio.pause();
		clearSpot();
		card.classList.remove('is-on');

		var target = st.target ? document.querySelector(st.target) : null;

		function show() {
			if (!running || my !== seq) return;
			var el = target;
			var ring = st.ring || (el && getComputedStyle(el).getPropertyValue('--accent').trim()) || '';
			if (el) {
				if (ring) el.style.setProperty('--awt-ring', ring);
				el.classList.add('awt-spot');
			}
			if (ring) card.style.setProperty('--awt-ring', ring); else card.style.removeProperty('--awt-ring');

			var href = st.href || (el && el.tagName === 'A' ? el.getAttribute('href') : null);
			card.innerHTML =
				(st.eyebrow ? '<span class="awt-eyebrow"></span>' : '') +
				'<h3 class="awt-title"></h3><p class="awt-body"></p>' +
				(href ? '<a class="awt-open" href="' + href + '">' + (cfg.openLabel || 'Open this animation \u2192') + '</a>' : '');
			if (st.eyebrow) card.querySelector('.awt-eyebrow').textContent = st.eyebrow;
			card.querySelector('.awt-title').textContent = st.title || '';
			card.querySelector('.awt-body').textContent = st.body || '';

			place(el);
			card.classList.add('is-on');
			progressEl.textContent = (idx + 1) + ' / ' + cfg.steps.length;
			bar.querySelector('[data-awt="prev"]').disabled = idx === 0;

			var src = clipSrc(idx);
			if (src && !paused) {
				audio.src = src;
				var p = audio.play();
				if (p && p.catch) p.catch(function () { armFallback(); });   // autoplay blocked → timer
				if (window.AWCaptions && cfg.narration) AWCaptions.bind(audio, idx);
			} else if (!paused) {
				armFallback();
			}
		}

		function reveal() {
			if (!running || my !== seq) return;
			nudge(shiftFor(target), show);
		}

		if (st.scrollTo) scrollTo(document.querySelector(st.scrollTo), st.scrollBlock || 'start', reveal);
		else reveal();
	}

	function togglePause() {
		paused = !paused;
		playBtn.textContent = paused ? '\u25B6' : '\u23F8';
		playBtn.setAttribute('aria-label', paused ? 'Play' : 'Pause');
		if (paused) { audio.pause(); clearTimeout(fallbackTimer); }
		else { var p = audio.play(); if (p && p.catch) p.catch(function () { armFallback(); }); }
	}

	function onKey(e) {
		if (!running) return;
		if (e.key === 'Escape') { e.preventDefault(); stop(); }
		else if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
		else if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
		else if (e.key === ' ') { e.preventDefault(); togglePause(); }
	}

	function start() {
		if (!cfg || running) return;
		if (!card) build();
		running = true; paused = false; idx = -1;
		document.documentElement.classList.add('awt-nosnap');
		document.body.classList.add('awt-on');
		bar.classList.add('is-on');
		playBtn.textContent = '\u23F8';
		if (window.AWCaptions && cfg.narration) AWCaptions.setEnabled(true);
		addEventListener('scroll', reposition, { passive: true });
		addEventListener('resize', reposition);
		addEventListener('keydown', onKey);
		go(0);
	}

	function stop() {
		if (!running) return;
		running = false; seq++;
		clearTimeout(fallbackTimer);
		audio.pause(); audio.removeAttribute('src');
		clearSpot();
		card.classList.remove('is-on');
		bar.classList.remove('is-on');
		if (window.AWCaptions && cfg.narration) AWCaptions.setEnabled(false);
		document.documentElement.classList.remove('awt-nosnap');
		document.body.classList.remove('awt-on');
		removeEventListener('scroll', reposition);
		removeEventListener('resize', reposition);
		removeEventListener('keydown', onKey);
	}

	window.AWTour = {
		configure: function (o) {
			cfg = o || {};
			if (cfg.startButton && !btnBound) {
				var b = document.querySelector(cfg.startButton);
				if (b) { btnBound = true; b.addEventListener('click', function (e) { e.preventDefault(); start(); }); }
			}
		},
		// Swap in re-translated steps; re-renders in place so a mid-tour language change
		// picks up the new card text AND the new-language audio clip for the same stop.
		setSteps: function (steps) {
			if (!cfg || !steps) return;
			cfg.steps = steps;
			if (running) go(idx);
		},
		start: start,
		stop: stop
	};
})();
