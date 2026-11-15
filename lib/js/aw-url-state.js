/*!
 * aw-url-state.js — keep the Callout / Outline view toggles in the address bar.
 *
 * Callout and Outline default to OFF (deliberate); the top bar defaults to SHOWN.
 * Only a deviation from the default is recorded:
 *   ?callout=on   ?outline=on   ?bar=off
 * so a reloaded or shared link restores the same view. Returning a toggle to its
 * default drops its parameter again, keeping URLs clean.
 *
 *   ?bar=off  hide the top bar (header + progress track) for this visit
 *   ?bar=on   show it
 * (also accepts hide/show, 0/1, false/true). A ?bar= link never overwrites the
 * viewer's saved choice (`persistMatch`), so it only affects the link that carries it.
 *
 * ADDING A VIEW PARAMETER = one new entry in VIEWS below; every animation page
 * already loads this file, so nothing else changes.
 *
 * Works at the DOM level (button id + state class), so it is engine-agnostic and
 * needs no per-page wiring — drop in one <script> tag per page.
 */
(function () {
	if (window.__awUrlStateLoaded) return;
	window.__awUrlStateLoaded = true;

	try { if (new URLSearchParams(location.search).has('present')) return; } catch (_) { return; }

	// param: URL name · btn: element clicked to flip the view · isOn(): current state
	// defaultOn: state when the parameter is absent · persistMatch: localStorage keys the page's
	// own click handler writes (key names differ per page family), restored after a URL-driven
	// click so a shared link never overwrites the viewer's saved choice · watchClass: also follow
	// state changes that bypass the button (the H shortcut) via a <body> class.
	var VIEWS = [
		{
			param: 'callout', btn: 'callout-toggle', defaultOn: false,
			isOn: function () { var b = document.getElementById('callout-toggle'); return !!b && b.classList.contains('toggle-active'); }
		},
		{
			param: 'outline', btn: 'outline-toggle', defaultOn: false,
			isOn: function () { var p = document.getElementById('step-outline'); return !!p && !p.hasAttribute('hidden'); }
		},
		{
			param: 'bar', btn: 'header-hide', defaultOn: true,
			persistMatch: /chrome/i, watchClass: 'chrome-hidden',
			isOn: function () { return !document.body.classList.contains('chrome-hidden'); }
		}
	];

	var ALIASES = { on: 'on', show: 'on', '1': 'on', 'true': 'on', off: 'off', hide: 'off', '0': 'off', 'false': 'off' };

	function snapshot(re) {
		var s = {};
		try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (re.test(k)) s[k] = localStorage.getItem(k); } } catch (_) {}
		return s;
	}
	function restore(re, before) {
		try {
			var now = snapshot(re);
			Object.keys(now).forEach(function (k) { if (!(k in before)) localStorage.removeItem(k); });
			Object.keys(before).forEach(function (k) { localStorage.setItem(k, before[k]); });
		} catch (_) {}
	}

	function write(v) {
		try {
			var u = new URL(location.href), on = v.isOn();
			if (on === v.defaultOn) u.searchParams.delete(v.param); else u.searchParams.set(v.param, on ? 'on' : 'off');
			history.replaceState(null, '', u);
		} catch (_) {}
	}

	function applyFromUrl() {
		var q;
		try { q = new URLSearchParams(location.search); } catch (_) { return; }
		VIEWS.forEach(function (v) {
			var want = ALIASES[String(q.get(v.param) || '').toLowerCase()];
			if (!want) return;                                  // absent → keep the page default
			var btn = document.getElementById(v.btn);
			if (!btn) return;
			if ((want === 'on') === v.isOn()) return;
			var before = v.persistMatch ? snapshot(v.persistMatch) : null;
			btn.click();                                        // one click reaches the requested state
			if (before) restore(v.persistMatch, before);
		});
	}

	function watch() {
		VIEWS.forEach(function (v) {
			var btn = document.getElementById(v.btn);
			if (!btn) return;
			// read state on the next tick so the page's own click handler has already run
			btn.addEventListener('click', function () {
				setTimeout(function () { write(v); }, 0);
			});
			if (v.watchClass) {
				var last = v.isOn();
				new MutationObserver(function () {
					var now = v.isOn();
					if (now !== last) { last = now; write(v); }
				}).observe(document.body, { attributes: true, attributeFilter: ['class'] });
			}
		});
	}

	function init() { applyFromUrl(); watch(); }

	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
	else init();
}());
