/* aw-like-dock.js — the "Support" heart in the bottom #controls dock of every animation page.
   One <script> tag is all a page needs: this file adds the button after the Restart button,
   injects its styles, then loads the Supabase client + aw-likes.js (from the same lib folder),
   which records the like and fills the heart. Change the heart here, never in page files.
   Skipped on the ?present audience window. */
(function () {
	if (window.__awLikeDockLoaded) return;
	window.__awLikeDockLoaded = true;
	try { if (new URLSearchParams(location.search).has('present')) return; } catch (_) {}

	// resolve sibling files relative to this script, so pages at any folder depth work
	var self = document.currentScript && document.currentScript.src;
	var LIB_JS = self ? self.replace(/[^/]*$/, '') : '/lib/js/';
	var SUPABASE_CDN = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

	var CSS =
		'#controls .ctrl-like{--like:#e0245e;--liked:#e81123;color:var(--theme-text,currentColor);}' +
		'body.theme-dark #controls .ctrl-like{--like:#ff5c8a;--liked:#ff4d4f;}' +
		'#controls .ctrl-like svg{width:18px;height:18px;pointer-events:none;}' +
		'#controls .ctrl-like svg path{fill:none;stroke:currentColor;stroke-width:1.9;stroke-linejoin:round;}' +
		'#controls .ctrl-like:hover{color:var(--like);}' +
		'#controls .ctrl-like.is-liked{color:var(--liked);}' +
		'#controls .ctrl-like.is-liked svg path{fill:currentColor;}' +
		'@keyframes awHeartPop{0%{transform:scale(1);}40%{transform:scale(1.35);}100%{transform:scale(1);}}' +
		'#controls .ctrl-like.just-liked svg{animation:awHeartPop .4s ease;}' +
		// a soft double-beat every ~7s until liked; stops on hover, on the Play gate, in Present mode and for reduced motion
		'@keyframes awHeartBeat{0%,82%,100%{transform:scale(1);filter:drop-shadow(0 0 0 transparent);}' +
		'86%{transform:scale(1.18);filter:drop-shadow(0 0 5px var(--like));color:var(--like);}' +
		'90%{transform:scale(1);}' +
		'94%{transform:scale(1.12);filter:drop-shadow(0 0 4px var(--like));color:var(--like);}}' +
		'#controls .ctrl-like:not(.is-liked):not(:hover) svg{transform-origin:50% 55%;animation:awHeartBeat 7s ease-in-out 4s infinite;}' +
		'body.aw-prestart #controls .ctrl-like svg,body.present-mode #controls .ctrl-like svg{animation:none;}' +
		'@media (prefers-reduced-motion: reduce){#controls .ctrl-like svg{animation:none !important;}}';

	var HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.3l-1.3-1.2C5.9 14.8 3 12.1 3 8.8 3 6.1 5.1 4 7.8 4c1.5 0 3 .7 4.2 1.9C13.2 4.7 14.7 4 16.2 4 18.9 4 21 6.1 21 8.8c0 3.3-2.9 6-7.7 10.3L12 20.3z"/></svg>';

	function loadScript(src, done) {
		var s = document.createElement('script');
		s.src = src;
		s.onload = done;
		s.onerror = function () { console.warn('[aw-like-dock] could not load ' + src); };
		document.body.appendChild(s);
	}

	function install() {
		var dock = document.getElementById('controls');
		if (!dock || document.getElementById('like-btn')) return;

		var style = document.createElement('style');
		style.id = 'aw-like-dock-style';
		style.textContent = CSS;
		document.head.appendChild(style);

		var sep = document.createElement('span');
		sep.className = 'ctrl-sep';
		sep.setAttribute('aria-hidden', 'true');
		var btn = document.createElement('button');
		btn.id = 'like-btn';
		btn.type = 'button';
		btn.className = 'button button-clear ctrl-icon ctrl-like';
		btn.setAttribute('data-aw-like', '');
		btn.setAttribute('aria-pressed', 'false');
		btn.setAttribute('aria-label', 'Support Azure Animations \u2014 tap the heart');
		btn.title = 'Support';
		btn.innerHTML = HEART;

		var reset = document.getElementById('reset-btn');
		if (reset && reset.parentNode === dock) { dock.insertBefore(sep, reset.nextSibling); dock.insertBefore(btn, sep.nextSibling); }
		else { dock.appendChild(sep); dock.appendChild(btn); }

		// aw-likes.js localizes the aria-label; mirror it into the hover tooltip
		if (window.MutationObserver) new MutationObserver(function () {
			var label = btn.getAttribute('aria-label') || '';
			btn.title = label.split(' \u2014 ')[0] || 'Support';
		}).observe(btn, { attributes: true, attributeFilter: ['aria-label'] });

		// aw-likes.js wires every [data-aw-like] when it boots, so load it after the button exists
		var likes = function () { loadScript(LIB_JS + 'aw-likes.js'); };
		if (window.supabase && typeof window.supabase.createClient === 'function') likes();
		else loadScript(SUPABASE_CDN, likes);
	}

	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
	else install();
})();
