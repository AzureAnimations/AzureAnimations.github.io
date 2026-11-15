/* aw-brand.js — the site's identity as seen by the browser: the logo, the product name,
   and the footer creator credit. The values come from site.config.json (the single source):
   edit that file and run `node scripts/build-brand.mjs`, which restamps the generated
   BRAND block below. Don't edit the block by hand.

   Pages opt in with hooks; the module fills them:

     <img data-aw-logo>            -> src is set to the current logo
     <span data-aw-name></span>    -> the product name
     <p   data-aw-madeby></p>      -> the "Created with <heart> by ..." line
     <div data-aw-credit></div>    -> the whole "Brought to you by ... " credit block
     <a data-aw-engine></a>       -> a link to the engine (href + text from the config), for pages whose
                                   footer sentence is custom and can't use data-aw-footmeta
     <div data-aw-footmeta="<docs-url>"></div>
                                   -> "Built with the <engine> engine - Content grounded in <docs>."
                                      Only the docs URL differs per page; add data-aw-footmeta-label
                                      to rename the source, or data-aw-footmeta-src-only for pages
                                      that print just the "- Content grounded in ..." half.

   Include once per page, after the other lib scripts:
     <script src="../../lib/js/aw-brand.js"></script>

   The credit markup it emits (a label span + a.credit-link > svg.li-icon + span) is what
   every page's existing .foot-credit / .footer-credit CSS already styles, so each page
   keeps its own look and only the CONTENT is shared. */
(function () {
	if (window.__awBrandLoaded) return;
	window.__awBrandLoaded = true;
	var AW = (window.AW = window.AW || {});

	// Derive the site root from this script's own URL (<root>/lib/js/aw-brand.js) so one
	// file serves every page depth and survives being deployed under a sub-path.
	var here = (document.currentScript && document.currentScript.src) || (function () {
		var s = document.getElementsByTagName('script');
		return s[s.length - 1].src;
	}());
	var ROOT = here.replace(/lib\/js\/aw-brand\.js(?:[?#].*)?$/, '');

	// ── GENERATED from site.config.json — do not edit by hand ────────────────
	// Change the brand / creator / footer wording in site.config.json, then run:
	//   node scripts/build-brand.mjs
	/* BRAND:START */
	var CFG = {
		"name": "Azure Animations",
		"logo": "img/brand/logo.svg",
		"engineUrl": "https://aka.ms/AzureAnimations",
		"docsLabel": "Microsoft Learn",
		"credit": {
			"show": true,
			"creatorUrl": "https://www.linkedin.com/in/nutwongaree/",
			"extraLinks": []
		},
		"locales": {
			"en": {
				"by": "Brought to you by",
				"creator": "{name} Creator",
				"made": "Created with \u2764\ufe0f by Microsoft Technical Trainers & MCTs",
				"aria": "{name} Creator on LinkedIn",
				"built": "Built with the {e} engine \u00b7 Content grounded in {s}.",
				"srcOnly": "\u00b7 Content grounded in {s}."
			},
			"es": {
				"by": "Ofrecido por",
				"creator": "Creador de {name}",
				"made": "Creado con \u2764\ufe0f por Microsoft Technical Trainers y MCTs",
				"aria": "Creador de {name} en LinkedIn",
				"built": "Creado con el motor {e} \u00b7 Contenido basado en {s}.",
				"srcOnly": "\u00b7 Contenido basado en {s}."
			},
			"ja": {
				"by": "\u63d0\u4f9b",
				"creator": "{name} \u5236\u4f5c\u8005",
				"made": "Microsoft Technical Trainers \u3068 MCT \u304c \u2764\ufe0f \u3092\u8fbc\u3081\u3066\u4f5c\u6210",
				"aria": "LinkedIn \u306e {name} \u5236\u4f5c\u8005",
				"built": "{e} \u30a8\u30f3\u30b8\u30f3\u3067\u69cb\u7bc9 \u00b7 \u30b3\u30f3\u30c6\u30f3\u30c4\u306f {s} \u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002",
				"srcOnly": "\u00b7 \u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u6839\u62e0\u306f {s} \u3067\u3059\u3002"
			},
			"ko": {
				"by": "\uc81c\uacf5",
				"creator": "{name} \uc81c\uc791\uc790",
				"made": "Microsoft Technical Trainers\uc640 MCT\uac00 \u2764\ufe0f\ub97c \ub2f4\uc544 \uc81c\uc791",
				"aria": "LinkedIn\uc758 {name} \uc81c\uc791\uc790",
				"built": "{e} \uc5d4\uc9c4\uc73c\ub85c \uc81c\uc791 \u00b7 \ucf58\ud150\uce20\ub294 {s}\uc5d0 \uae30\ubc18\ud569\ub2c8\ub2e4.",
				"srcOnly": "\u00b7 \ucf58\ud150\uce20\ub294 {s}\ub97c \uadfc\uac70\ub85c \ud569\ub2c8\ub2e4."
			},
			"pt": {
				"by": "Oferecido por",
				"creator": "Criador do {name}",
				"made": "Criado com \u2764\ufe0f pelos Microsoft Technical Trainers e MCTs",
				"aria": "Criador do {name} no LinkedIn",
				"built": "Criado com o mecanismo {e} \u00b7 Conte\u00fado baseado no {s}.",
				"srcOnly": "\u00b7 Conte\u00fado baseado no {s}."
			}
		}
	};
	/* BRAND:END */
	// ─────────────────────────────────────────────────────────────────────────

	AW.SITE = {
		name:       CFG.name,
		logo:       ROOT + CFG.logo,
		home:       ROOT + 'index.html',
		creatorUrl: CFG.credit.creatorUrl,
		engineUrl:  CFG.engineUrl,
		docsLabel:  CFG.docsLabel,
		showCredit: CFG.credit.show !== false,
		extraLinks: CFG.credit.extraLinks || []
	};

	// Locale strings carry {name}; {e} = the engine link, {s} = the per-page source link.
	var T = CFG.locales;

	function lang() { return (document.documentElement.getAttribute('lang') || 'en').slice(0, 2).toLowerCase(); }
	function t(k) {
		var v = (T[lang()] || T.en)[k] || T.en[k] || '';
		return v.replace(/\{name\}/g, AW.SITE.name);
	}
	function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

	var LI_PATH = 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z';

	function creditHtml(size) {
		var s = AW.SITE;
		var html = '<span>' + esc(t('by')) + '</span>'
			+ '<a class="credit-link" href="' + esc(s.creatorUrl) + '" target="_blank" rel="noopener noreferrer"'
			+ ' aria-label="' + esc(t('aria')) + '">'
			+ '<svg class="li-icon" viewBox="0 0 24 24" width="' + size + '" height="' + size + '" aria-hidden="true" focusable="false">'
			+ '<path fill="currentColor" d="' + LI_PATH + '"/></svg>'
			+ '<span>' + esc(t('creator')) + '</span></a>';
		for (var i = 0; i < s.extraLinks.length; i++) {
			var x = s.extraLinks[i], label = (x.label && (x.label[lang()] || x.label.en)) || x.url;
			html += '<a class="credit-link" href="' + esc(x.url) + '" target="_blank" rel="noopener noreferrer"><span>' + esc(label) + '</span></a>';
		}
		return html;
	}

	function link(href, text) {
		return '<a href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' + esc(text) + '</a>';
	}

	function paint() {
		var s = AW.SITE, i, els;
		els = document.querySelectorAll('[data-aw-logo]');
		for (i = 0; i < els.length; i++) if (els[i].tagName === 'IMG') els[i].src = s.logo;
		els = document.querySelectorAll('[data-aw-name]');
		for (i = 0; i < els.length; i++) {
			// pages emphasise the last word differently: .accent span, <b>, or not at all
			var mode = els[i].getAttribute('data-aw-name');
			if (mode === 'accent' || mode === 'b') {
				var w = s.name.split(' ');
				var tail = w.length > 1 ? w.pop() : '';
				var open = mode === 'b' ? '<b>' : '<span class="accent">';
				var close = mode === 'b' ? '</b>' : '</span>';
				els[i].innerHTML = tail ? esc(w.join(' ')) + ' ' + open + esc(tail) + close : esc(s.name);
			} else {
				els[i].textContent = s.name;
			}
		}
		els = document.querySelectorAll('[data-aw-madeby]');
		for (i = 0; i < els.length; i++) els[i].textContent = s.showCredit ? t('made') : '';
		els = document.querySelectorAll('[data-aw-credit]');
		for (i = 0; i < els.length; i++) {
			els[i].innerHTML = s.showCredit ? creditHtml(els[i].getAttribute('data-aw-credit') || '18') : '';
			els[i].style.display = s.showCredit ? '' : 'none';
		}
		els = document.querySelectorAll('[data-aw-engine]');
		for (i = 0; i < els.length; i++) {
			els[i].setAttribute('href', s.engineUrl);
			els[i].textContent = s.name;
		}
		els = document.querySelectorAll('[data-aw-footmeta]');
		for (i = 0; i < els.length; i++) {
			var docs = els[i].getAttribute('data-aw-footmeta');
			var lbl = els[i].getAttribute('data-aw-footmeta-label') || s.docsLabel;
			var tpl = els[i].hasAttribute('data-aw-footmeta-src-only') ? t('srcOnly') : t('built');
			// function replacements: the link HTML must not be reinterpreted as $-patterns
			els[i].innerHTML = tpl
				.replace('{e}', function () { return link(s.engineUrl, s.name); })
				.replace('{s}', function () { return link(docs, lbl); });
		}
	}
	AW.paintBrand = paint;

	function boot() {
		paint();
		// the pages localize by setting <html lang>, so follow it instead of hooking each picker
		new MutationObserver(paint).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
	}
	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
	else boot();
}());
