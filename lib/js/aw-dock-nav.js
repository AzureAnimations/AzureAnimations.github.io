/* Home and owning-hub links in the consolidated animation dock. */
(function () {
	'use strict';
	var links = Array.from(document.querySelectorAll('[data-aw-nav]'));
	if (!links.length) return;
	var copy = {
		en: { home: 'Home', hub: 'Current hub' },
		es: { home: 'Inicio', hub: 'Centro actual' },
		ja: { home: 'ホーム', hub: '現在のハブ' },
		ko: { home: '홈', hub: '현재 허브' },
		pt: { home: 'Início', hub: 'Hub atual' }
	};
	links.forEach(function (link) {
		link.dataset.awNavTarget = link.getAttribute('href');
		link.addEventListener('keydown', function (event) {
			// Enter follows the link; it must not also advance the animation.
			if (event.key === 'Enter' || event.code === 'Space') event.stopPropagation();
		});
		link.addEventListener('click', function (event) { sync(); event.stopPropagation(); });
	});
	function sync() {
		var lang = document.documentElement.lang || 'en';
		var labels = copy[lang] || copy.en;
		var audio = new URLSearchParams(location.search).get('audio');
		links.forEach(function (link) {
			var label = labels[link.dataset.awNav];
			var url = new URL(link.dataset.awNavTarget, location.href);
			url.searchParams.set('lang', lang);
			if (audio === 'on' || audio === 'off') url.searchParams.set('audio', audio);
			link.href = url.href;
			link.setAttribute('aria-label', label);
			link.dataset.tip = label;
			if (!link.classList.contains('ovl-btn')) link.title = label;
		});
	}
	var style = document.createElement('style');
	style.id = 'aw-dock-nav-style';
	style.textContent = '.aw-dock-navigation{display:inline-flex;align-items:center;gap:4px;flex:none}'
		+ 'a.aw-dock-link{position:relative;display:inline-flex;align-items:center;justify-content:center;flex:none;width:2rem;height:2rem;padding:5px;border:0;border-radius:999px;color:var(--theme-text,var(--ink,#242424));text-decoration:none;box-sizing:border-box}'
		+ 'body.theme-dark a.aw-dock-link{color:var(--theme-text,var(--ink,#f3f4f7))}'
		+ 'a.aw-dock-link svg{width:20px;height:20px;pointer-events:none}'
		+ 'a.aw-dock-link:hover{background:var(--theme-primary-translucent,rgba(0,120,212,.12))}'
		+ 'a.aw-dock-link:focus-visible{outline:2px solid var(--theme-primary,#0078d4);outline-offset:3px}'
		+ '@media(max-width:1100px){#controls{flex-wrap:wrap;justify-content:center;box-sizing:border-box;max-width:calc(100vw - 24px);width:max-content;border-radius:24px}#controls>*{flex-shrink:0}}';
	document.head.appendChild(style);
	new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
	sync();
})();
