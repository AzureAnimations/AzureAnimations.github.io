/* aw-brand.js — the single place the site's identity is written down: the logo,
   the product name, and the footer creator credit. Change it here, every page follows.

   Pages opt in with hooks; the module fills them:

     <img data-aw-logo>            -> src is set to the current logo
     <span data-aw-name></span>    -> the product name
     <p   data-aw-madeby></p>      -> the "Created with <heart> by ..." line
     <div data-aw-credit></div>    -> the whole "Brought to you by ... " credit block
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

	// ── EDIT HERE ────────────────────────────────────────────────────────────
	AW.SITE = {
		name:       'Azure Animations',
		logo:       ROOT + 'img/AzureAnimations-Logo.svg',
		home:       ROOT + 'index.html',
		// Fallback creator name. Every locale in T below carries its own translated version and
		// WINS over this, so renaming the creator means editing the T rows too — not just here.
		creator:    'Azure Animations Creator',
		creatorUrl: 'https://www.linkedin.com/in/nutwongaree/',
		engineUrl:  'https://aka.ms/AzureAnimations',
		docsLabel:  'Microsoft Learn'
	};

	// {e} = the engine link, {s} = the per-page source link. Keep both placeholders in every string.
	var T = {
		en: { by:'Brought to you by', creator:'Azure Animations Creator',        made:'Created with \u2764\uFE0F by Microsoft Technical Trainers & MCTs', aria:'Azure Animations Creator on LinkedIn',
		      built:'Built with the {e} engine \u00b7 Content grounded in {s}.',            srcOnly:'\u00b7 Content grounded in {s}.' },
		es: { by:'Ofrecido por',      creator:'Creador de Azure Animations',     made:'Creado con \u2764\uFE0F por Microsoft Technical Trainers y MCTs', aria:'Creador de Azure Animations en LinkedIn',
		      built:'Creado con el motor {e} \u00b7 Contenido basado en {s}.',              srcOnly:'\u00b7 Contenido basado en {s}.' },
		ja: { by:'\u63D0\u4F9B',        creator:'Azure Animations \u5236\u4F5C\u8005',       made:'Microsoft Technical Trainers \u3068 MCT \u304C \u2764\uFE0F \u3092\u8FBC\u3081\u3066\u4F5C\u6210', aria:'LinkedIn \u306E Azure Animations \u5236\u4F5C\u8005',
		      built:'{e} \u30A8\u30F3\u30B8\u30F3\u3067\u69CB\u7BC9 \u00b7 \u30B3\u30F3\u30C6\u30F3\u30C4\u306F {s} \u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002', srcOnly:'\u00b7 \u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u6839\u62E0\u306F {s} \u3067\u3059\u3002' },
		ko: { by:'\uC81C\uACF5',        creator:'Azure Animations \uC81C\uC791\uC790',       made:'Microsoft Technical Trainers\uC640 MCT\uAC00 \u2764\uFE0F\uB97C \uB2F4\uC544 \uC81C\uC791', aria:'LinkedIn\uC758 Azure Animations \uC81C\uC791\uC790',
		      built:'{e} \uC5D4\uC9C4\uC73C\uB85C \uC81C\uC791 \u00b7 \uCF58\uD150\uCE20\uB294 {s}\uC5D0 \uAE30\uBC18\uD569\uB2C8\uB2E4.', srcOnly:'\u00b7 \uCF58\uD150\uCE20\uB294 {s}\uB97C \uADFC\uAC70\uB85C \uD569\uB2C8\uB2E4.' },
		pt: { by:'Oferecido por',     creator:'Criador do Azure Animations',     made:'Criado com \u2764\uFE0F pelos Microsoft Technical Trainers e MCTs', aria:'Criador do Azure Animations no LinkedIn',
		      built:'Criado com o mecanismo {e} \u00b7 Conte\u00FAdo baseado no {s}.',      srcOnly:'\u00b7 Conte\u00FAdo baseado no {s}.' }
	};
	// ─────────────────────────────────────────────────────────────────────────

	function t(k) {
		var l = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
		return (T[l] || T.en)[k] || T.en[k];
	}
	function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

	var LI_PATH = 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z';

	function creditHtml(size) {
		var s = AW.SITE;
		return '<span>' + esc(t('by')) + '</span>'
			+ '<a class="credit-link" href="' + esc(s.creatorUrl) + '" target="_blank" rel="noopener noreferrer"'
			+ ' aria-label="' + esc(t('aria')) + '">'
			+ '<svg class="li-icon" viewBox="0 0 24 24" width="' + size + '" height="' + size + '" aria-hidden="true" focusable="false">'
			+ '<path fill="currentColor" d="' + LI_PATH + '"/></svg>'
			+ '<span>' + esc(t('creator') || s.creator) + '</span></a>';
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
		for (i = 0; i < els.length; i++) els[i].textContent = t('made');
		els = document.querySelectorAll('[data-aw-credit]');
		for (i = 0; i < els.length; i++) els[i].innerHTML = creditHtml(els[i].getAttribute('data-aw-credit') || '18');
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
