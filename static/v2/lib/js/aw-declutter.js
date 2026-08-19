/* aw-declutter.js — collapse the two floating stage-overlay control pills (left "view
   options" + right "player") into a small handle so they never block the diagram.
   Self-installs a toggle button in the bottom #controls dock (header fallback), a per-pill
   restore handle, a C keyboard shortcut, and a localized row in the "?" overlay. Remembers
   the choice per journey. Skipped in ?present (chrome already hidden). */
(function () {
	if (window.__awDeclutterLoaded) return;
	window.__awDeclutterLoaded = true;
	try { if (new URLSearchParams(location.search).has('present')) return; } catch (_) {}
	var BODY_CLASS = 'aw-decluttered', KEY = 'aw-declutter';
	function ready(fn) { if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
	ready(function () {
		var left = document.getElementById('stage-overlay-left');
		var right = document.getElementById('stage-overlay');
		var pills = [left, right].filter(Boolean);
		if (!pills.length) return;
		var style = document.createElement('style');
		style.id = 'aw-declutter-style';
		style.textContent =
			'#aw-declutter-btn{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;}' +
			'#aw-declutter-btn svg{width:20px;height:20px;}' +
			'#aw-declutter-btn.on{color:var(--theme-primary,#0078d4);}' +
			'.aw-declutter-handle{display:none !important;}' +
			'body.' + BODY_CLASS + ' #stage-overlay-left>*:not(.aw-declutter-handle),' +
			'body.' + BODY_CLASS + ' #stage-overlay>*:not(.aw-declutter-handle){display:none !important;}' +
			'body.' + BODY_CLASS + ' #stage-overlay-left .aw-declutter-handle,' +
			'body.' + BODY_CLASS + ' #stage-overlay .aw-declutter-handle{display:inline-flex !important;}' +
			'body.' + BODY_CLASS + ' #stage-overlay-left,' +
			'body.' + BODY_CLASS + ' #stage-overlay{padding:1px 2px;opacity:0.55;transition:opacity .15s ease;}' +
			'body.' + BODY_CLASS + ' #stage-overlay-left:hover,' +
			'body.' + BODY_CLASS + ' #stage-overlay:hover{opacity:1;}' +
			'body.' + BODY_CLASS + ' .aw-declutter-handle{min-width:20px !important;height:20px !important;padding:0 2px !important;}' +
			'body.' + BODY_CLASS + ' .aw-declutter-handle svg{width:13px;height:13px;}';
		document.head.appendChild(style);
		var CHEV_R = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6"/></svg>';
		var CHEV_L = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M15 6l-6 6 6 6"/></svg>';
		pills.forEach(function (pill) {
			var h = document.createElement('button');
			h.type = 'button';
			h.className = 'ovl-btn aw-declutter-handle';
			h.setAttribute('aria-label', 'Show controls');
			h.title = 'Show controls';
			h.innerHTML = (pill === left) ? CHEV_R : CHEV_L;
			h.addEventListener('click', function (e) { e.stopPropagation(); apply(false); });
			pill.appendChild(h);
		});
		var btn = document.createElement('button');
		btn.id = 'aw-declutter-btn';
		btn.type = 'button';
		btn.className = 'button button-clear ctrl-icon';
		btn.setAttribute('aria-pressed', 'false');
		btn.innerHTML =
			'<svg viewBox="0 0 24 24" aria-hidden="true">' +
			'<rect x="2.5" y="8.5" width="19" height="7" rx="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
			'<circle cx="8" cy="12" r="1.15" fill="currentColor"/>' +
			'<circle cx="12" cy="12" r="1.15" fill="currentColor"/>' +
			'<circle cx="16" cy="12" r="1.15" fill="currentColor"/></svg>';
		// Sit in the bottom playback dock (falls back to the header if the dock is absent).
		var dock = document.getElementById('controls');
		if (dock) { var sep = document.createElement('span'); sep.className = 'ctrl-sep'; sep.setAttribute('aria-hidden', 'true'); dock.appendChild(sep); dock.appendChild(btn); }
		else { var anchor = document.getElementById('header-hide-top') || document.getElementById('theme-toggle'); if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(btn, anchor); }
		btn.addEventListener('click', function () { apply(!document.body.classList.contains(BODY_CLASS)); });

		function apply(on) {
			document.body.classList.toggle(BODY_CLASS, on);
			btn.classList.toggle('on', on);
			btn.setAttribute('aria-pressed', on ? 'true' : 'false');
			var label = (on ? 'Show' : 'Hide') + ' the floating controls (C)';
			btn.setAttribute('aria-label', label); btn.title = label;
			try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (_) {}
		}

		// keyboard shortcut: C toggles declutter
		document.addEventListener('keydown', function (e) {
			if (e.key !== 'c' && e.key !== 'C') return;
			if (e.metaKey || e.ctrlKey || e.altKey) return;
			var tag = (e.target.tagName || '').toLowerCase();
			if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
			e.preventDefault();
			apply(!document.body.classList.contains(BODY_CLASS));
		});

		// add a localized row to the "?" shortcuts overlay (re-added after each language rebuild)
		var SC_LABELS = { en: 'Hide the floating controls', es: 'Ocultar los controles flotantes', ja: '\u30D5\u30ED\u30FC\u30C6\u30A3\u30F3\u30B0\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3092\u96A0\u3059', ko: '\uD50C\uB85C\uD305 \uCEE8\uD2B8\uB864 \uC228\uAE30\uAE30', pt: 'Ocultar os controles flutuantes' };
		function scLabel() { var l = document.documentElement.getAttribute('lang') || 'en'; return SC_LABELS[l] || SC_LABELS.en; }
		function addScRow() {
			var list = document.getElementById('sc-list');
			if (!list || list.querySelector('.aw-declutter-sc')) return;
			var li = document.createElement('li'); li.className = 'aw-declutter-sc';
			li.innerHTML = '<span>' + scLabel() + '</span><span class="sc-keys"><kbd>C</kbd></span>';
			list.appendChild(li);
		}
		if (typeof window.buildShortcuts === 'function') { var _bs = window.buildShortcuts; window.buildShortcuts = function () { _bs.apply(this, arguments); addScRow(); }; }
		addScRow();

		var saved = '0';
		try { saved = localStorage.getItem(KEY) || '0'; } catch (_) {}
		apply(saved === '1');
	});
})();
