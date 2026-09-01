/*!
 * aw-url-state.js — keep the Callout / Outline view toggles in the address bar.
 *
 * Both default to OFF (deliberate). This only records a deviation from that default:
 *   ?callout=on   ?outline=on
 * so a reloaded or shared link restores the same view. Turning a toggle back off
 * drops its parameter again, keeping URLs clean.
 *
 * Works at the DOM level (button id + state class), so it is engine-agnostic and
 * needs no per-page wiring — drop in one <script> tag per page.
 */
(function () {
	if (window.__awUrlStateLoaded) return;
	window.__awUrlStateLoaded = true;

	try { if (new URLSearchParams(location.search).has('present')) return; } catch (_) { return; }

	var VIEWS = [
		{
			param: 'callout', btn: 'callout-toggle',
			isOn: function () { var b = document.getElementById('callout-toggle'); return !!b && b.classList.contains('toggle-active'); }
		},
		{
			param: 'outline', btn: 'outline-toggle',
			isOn: function () { var p = document.getElementById('step-outline'); return !!p && !p.hasAttribute('hidden'); }
		}
	];

	function write(key, on) {
		try {
			var u = new URL(location.href);
			if (on) u.searchParams.set(key, 'on'); else u.searchParams.delete(key);
			history.replaceState(null, '', u);
		} catch (_) {}
	}

	function applyFromUrl() {
		var q;
		try { q = new URLSearchParams(location.search); } catch (_) { return; }
		VIEWS.forEach(function (v) {
			var want = q.get(v.param);
			if (want !== 'on' && want !== 'off') return;      // absent → keep the page default (off)
			var btn = document.getElementById(v.btn);
			if (!btn) return;
			if ((want === 'on') !== v.isOn()) btn.click();     // one click reaches the requested state
		});
	}

	function watch() {
		VIEWS.forEach(function (v) {
			var btn = document.getElementById(v.btn);
			if (!btn) return;
			// read state on the next tick so the page's own click handler has already run
			btn.addEventListener('click', function () {
				setTimeout(function () { write(v.param, v.isOn()); }, 0);
			});
		});
	}

	function init() { applyFromUrl(); watch(); }

	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
	else init();
}());
