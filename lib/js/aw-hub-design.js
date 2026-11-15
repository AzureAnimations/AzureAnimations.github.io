/* aw-hub-design.js — optional visual skins for the journey hubs (the main page and every hub index.html under journeys).

   ?design=1 | 2 | 3   switch a skin on.   ?design=0 (or original / off) switches back to the original look.
   The choice is remembered in localStorage and carried across hub links, so you pick it once on the
   main page and every hub follows. With no choice made, this script does nothing at all: the original
   hubs render exactly as before and aw-hub-design.css is never requested.

     1  Soft        rounded cards, gentle shadows, cool slate with a blue accent
     2  Graphite    compact, hairline borders, mono labels, monochrome
     3  Editorial   serif headings, open cards with a top rule, one warm accent

   Lesson pages are untouched — skins only apply where this script is included (the hubs). */
(function () {
	'use strict';
	var KEY = 'aw-design';
	var DESIGNS = [
		{ id: '1', name: 'Soft' },
		{ id: '2', name: 'Graphite' },
		{ id: '3', name: 'Editorial' }
	];
	function valid(v) { return DESIGNS.some(function (d) { return d.id === v; }); }

	var fromUrl = null;
	try { fromUrl = new URL(location.href).searchParams.get('design'); } catch (e) {}

	var design = null;
	if (fromUrl !== null) {
		fromUrl = String(fromUrl).toLowerCase();
		if (valid(fromUrl)) {
			design = fromUrl;
			try { localStorage.setItem(KEY, design); } catch (e) {}
		} else {
			try { localStorage.removeItem(KEY); } catch (e) {}
		}
	} else {
		try { var saved = localStorage.getItem(KEY); if (valid(saved)) design = saved; } catch (e) {}
	}

	var AW = (window.AW = window.AW || {});
	AW.design = design;
	if (!design) return;

	var root = document.documentElement;
	root.setAttribute('data-design', design);

	// Stylesheet next to this script (lib/js/ → lib/css/). document.write keeps it render-blocking so the
	// hub never flashes in its original look first.
	var cs = document.currentScript;
	var href = (cs && cs.src ? cs.src.replace(/js\/aw-hub-design\.js.*$/, 'css/') : '/lib/css/') + 'aw-hub-design.css?v=20261109';
	document.write('<link rel="stylesheet" href="' + href + '" data-aw-design-css>');

	// Keep the address bar shareable: the chosen design is always visible in the URL.
	try {
		var u = new URL(location.href);
		if (u.searchParams.get('design') !== design) {
			u.searchParams.set('design', design);
			history.replaceState(history.state, '', u.pathname + u.search + u.hash);
		}
	} catch (e) {}

	function isHubUrl(u) {
		if (u.origin !== location.origin) return false;
		return /\/$/.test(u.pathname) || /\/index\.html$/i.test(u.pathname);
	}

	// Hub-to-hub links carry the design in the URL (opened in a new tab or shared, they still match).
	// Done at click time so it never fights the scripts that rewrite hrefs for language.
	function carry(e) {
		var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
		if (!a) return;
		try {
			var u = new URL(a.getAttribute('href'), location.href);
			if (!isHubUrl(u) || u.searchParams.has('design')) return;
			u.searchParams.set('design', design);
			a.setAttribute('href', u.pathname + u.search + u.hash);
		} catch (err) {}
	}
	document.addEventListener('click', carry, true);
	document.addEventListener('auxclick', carry, true);
	document.addEventListener('contextmenu', carry, true);

	function dock() {
		if (document.querySelector('.aw-design-dock')) return;
		var el = document.createElement('div');
		el.className = 'aw-design-dock';
		el.setAttribute('role', 'group');
		el.setAttribute('aria-label', 'Page design');
		var html = '<span class="aw-design-dock-label">Design</span>';
		function link(id, label, title) {
			var u = new URL(location.href);
			u.searchParams.set('design', id);
			return '<a href="' + u.pathname + u.search + u.hash + '" title="' + title + '"' +
				(id === design ? ' aria-current="true"' : '') + '>' + label + '</a>';
		}
		html += link('0', 'Original', 'Original design');
		DESIGNS.forEach(function (d) { html += link(d.id, d.id, d.name); });
		el.innerHTML = html;
		document.body.appendChild(el);
	}
	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', dock);
	else dock();
})();
