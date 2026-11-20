/*! aw-m365-mock.js — the shared "Try it yourself" step for the Microsoft 365 Copilot journey pages.
 *  Needs aw-m365-try-data.js (AWM365_DATA). Defines the global COPY map that aw-prompt-anatomy.js reads for its hover bubble.
 *
 *    AWM365.extendI18N(I18N, 'CopilotInWord')      // adds tyTitle / tyCaption / tyDesc / tyCallout in every language the page has
 *    AWM365.buildTry('CopilotInWord', lang, {cpIcon, iconBase})   // returns the step body element (window + prompt card)
 */
(function (g) {
	'use strict';
	g.COPY = g.COPY || {};
	var D = g.AWM365_DATA || { ui: {}, pages: {}, prompts: {} };
	var APPS = {
		M365Copilot:         { kind: 'chat', icon: null, name: 'Microsoft Copilot' },
		CopilotInWord:       { kind: 'doc',  icon: 'Word',       name: 'Word' },
		CopilotInPowerPoint: { kind: 'ppt',  icon: 'PowerPoint', name: 'PowerPoint' },
		CopilotInExcel:      { kind: 'xl',   icon: 'Excel',      name: 'Excel' },
		CopilotInOutlook:    { kind: 'mail', icon: 'Outlook',    name: 'Outlook' },
		CopilotInTeams:      { kind: 'team', icon: 'Teams',      name: 'Teams' }
	};

	function pick(map, lang) { return (map && (map[lang] || map.en)) || {}; }
	function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
	function joinSeg(segs, lang) { return segs.map(function (x) { return x[1]; }).join(lang === 'ja' ? '' : ' '); }
	function hi(text) { return esc(text).replace(/\[[^\]]+\]/g, function (m) { return '<span class="am-ph">' + m + '</span>'; }); }

	function copyText(text) {
		if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text).catch(function () { legacy(text); });
		legacy(text); return Promise.resolve();
	}
	function legacy(text) {
		var ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
		document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) { /* no clipboard */ } ta.remove();
	}

	function extendI18N(I18N, pageId) {
		Object.keys(I18N).forEach(function (lang) {
			var ui = pick(D.ui, lang), pg = pick(D.pages[pageId], lang);
			I18N[lang].tyTitle = pg.title; I18N[lang].tyCaption = ui.caption;
			I18N[lang].tyDesc = pg.open; I18N[lang].tyCallout = ui.callout;
		});
	}

	function winHtml(pageId, ui, app, cpIcon, iconBase, tip, sample) {
		var cp = '<img src="' + cpIcon + '" alt="" width="18" height="18">';
		var isChat = app.kind === 'chat';
		var pop = tip ? '<div class="am-slash"><i>/</i><span>' + esc(tip[2]) + '</span><u>\uD83D\uDCC4 ' + esc(sample ? sample.file : 'Q3-report.docx') + '</u><u>\uD83D\uDCC4 Project-brief.docx</u></div>' : '';
		var comp = pop + '<div class="am-comp"><div class="am-comp-t" data-ph="' + esc(ui.ask) + '"></div>' +
			'<div class="am-comp-r"><span class="am-plus">+</span>' + (isChat ? '<span class="am-pill">Work IQ</span>' : '') + '<span class="am-send">\u27A4</span></div></div>';
		if (app.kind === 'chat') {
			return '<div class="am-win am-chat"><div class="am-bar"><img src="' + cpIcon + '" alt=""><b>' + app.name + '</b>' +
				'<span class="am-url">\uD83D\uDD12 copilot.cloud.microsoft/chat</span><span class="am-dots"><i></i><i></i><i></i></span></div>' +
				'<div class="am-body"><div class="am-nav"><span class="is-on">\u270E New chat</span><span>\uD83D\uDD0D Search</span><span>\uD83D\uDCDA Library</span>' +
				'<span>\u2728 Agents &amp; Skills</span><span>\uD83D\uDC65 Workspaces</span><small>Recent</small><span>\u2026</span></div>' +
				'<div class="am-main"><div class="am-hello">' + cp + '<span>' + esc(ui.hello) + '</span></div>' + comp +
				'<div class="am-note">Copilot may make mistakes. Check important information.</div></div></div></div>';
		}
		var doc = {
			doc:  '<i class="h"></i><i class="w1"></i><i class="w2"></i><i class="w3"></i><i class="w1"></i><i class="w4"></i><i class="w2"></i>',
			ppt:  '<div class="am-slide"><i class="h"></i><i class="w2"></i><i class="w3"></i></div><i class="w1"></i><i class="w4"></i>',
			xl:   '<div class="am-grid"><i class="hd"></i><i class="hd"></i><i class="hd"></i><i class="hd"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>',
			mail: '<div class="am-mail"><i class="h"></i><i class="w1"></i><i class="w3"></i></div><div class="am-mail"><i class="h"></i><i class="w2"></i><i class="w4"></i></div>',
			team: '<div class="am-tiles"><i></i><i></i><i></i><i></i><i></i><i></i></div><i class="w1"></i><i class="w4"></i>'
		}[app.kind];
		return '<div class="am-win"><div class="am-bar"><img src="' + iconBase + app.icon + '.svg" alt=""><b>' + app.name + '</b><span class="am-dots"><i></i><i></i><i></i></span></div>' +
			'<div class="am-body"><div class="am-doc">' + doc + '</div><div class="am-pane"><div class="am-pane-h">' + cp + '<span>Copilot</span></div>' +
			'<div class="am-thread"><div class="am-bub"></div><div class="am-reply"><b>' + cp.replace('18', '14').replace('18', '14') + 'Copilot</b><i></i><i></i><i></i></div></div>' + comp + '</div></div></div>';
	}

	function buildTry(pageId, lang, opts) {
		opts = opts || {};
		var ui = pick(D.ui, lang), app = APPS[pageId], list = (D.prompts[pageId] && (D.prompts[pageId][lang] || D.prompts[pageId].en)) || [];
		var cpIcon = opts.cpIcon || '../../lib/icons/brands/Microsoft365Copilot.svg', iconBase = opts.iconBase || '../../lib/icons/brands/m365/';
		var wrap = document.createElement('div'); wrap.className = 'am-try';
		var sample = D.samples && D.samples[pageId], dl = D.dl && (D.dl[lang] || D.dl.en);
		var tip = D.tips && D.tips[pageId] && (D.tips[pageId][lang] || D.tips[pageId].en);
		var texts = list.map(function (p) { return joinSeg(p.s, lang); });

		list.forEach(function (p, i) {
			g.COPY['pk' + i + pageId] = texts[i];
			if (g.AWPromptAnatomy) {
				var parts = p.s.map(function (x) { return [{ g: 'goal', c: 'context', s: 'source', e: 'expectations' }[x[0]], x[1]]; });
				g.AWPromptAnatomy.register([{ text: texts[i], parts: parts }]);
			}
		});
		var refine = ui.refine.slice(); var rf = D.refine && D.refine[pageId]; if (rf) refine[1] = rf[lang] || rf.en;
		refine.forEach(function (r, i) { g.COPY['pkx' + i + pageId + 'f'] = r; });

		wrap.innerHTML = winHtml(pageId, ui, app, cpIcon, iconBase, tip, sample) +
			'<div class="am-card">' + (sample ? '<a class="am-dl" href="../samples/' + sample.file + '" download><b>\u2B07 ' + esc(dl[0]) + '</b><span>' + esc(sample.file) + ' \u00B7 ' + esc(sample.d[lang] || sample.d.en) + '</span><em>' + esc(dl[1]) + '</em></a>' : '') + (tip ? '<div class="am-tip"><b>' + esc(tip[0]) + '</b><span>' + esc(tip[1]) + '</span></div>' : '') + '<div class="am-tabs" role="tablist" aria-label="' + esc(ui.pick) + '"></div>' +
			'<p class="am-prompt" aria-live="polite"></p>' +
			'<div class="am-row"><button type="button" class="am-copy"></button><p class="am-hint">' + esc(ui.replace) + '</p></div>' +
			'<h4 class="am-h">' + esc(ui.refineH) + '</h4><div class="am-chips"></div>' +
			'<h4 class="am-h">' + esc(ui.verifyH) + '</h4><div class="am-tags">' + ui.verify.map(function (v) { return '<span>' + esc(v) + '</span>'; }).join('') + '</div>' +
			'<h4 class="am-h">' + esc(ui.reflectH) + '</h4><p class="am-reflect">' + ui.reflect.map(esc).join(' ') + '</p></div>' +
			'<p class="am-tagline">' + esc(ui.tagline) + '</p>';

		var tabs = wrap.querySelector('.am-tabs'), box = wrap.querySelector('.am-prompt'), copy = wrap.querySelector('.am-copy'),
			chips = wrap.querySelector('.am-chips'), typed = wrap.querySelector('.am-comp-t'), bub = wrap.querySelector('.am-bub');
		var sel = 0, hint = wrap.querySelector('.am-hint');

		function flash(btn, label, restore) { btn.classList.add('is-done'); btn.textContent = ui.copied; setTimeout(function () { btn.classList.remove('is-done'); btn.textContent = restore; }, 1400); }
		function show(i) {
			sel = i;
			Array.prototype.forEach.call(tabs.children, function (b, j) { b.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
			box.innerHTML = hi(texts[i]);
			if (sample && hint) hint.textContent = /\[[^\]]+\]/.test(texts[i]) ? ui.replace : (D.ready[lang] || D.ready.en);
			if (bub) bub.textContent = texts[i]; else typed.textContent = texts[i];
			copy.dataset.copy = 'pk' + i + pageId;
		}
		list.forEach(function (p, i) {
			var b = document.createElement('button'); b.type = 'button'; b.className = 'am-tab'; b.setAttribute('role', 'tab'); b.textContent = p.t;
			b.addEventListener('click', function () { show(i); }); tabs.appendChild(b);
		});
		copy.textContent = '\u29C9 ' + ui.copy;
		copy.addEventListener('click', function () { copyText(texts[sel]).then(function () { flash(copy, ui.copied, '\u29C9 ' + ui.copy); }); });
		refine.forEach(function (r, i) {
			var c = document.createElement('button'); c.type = 'button'; c.className = 'am-chip'; c.dataset.copy = 'pkx' + i + pageId + 'f'; c.textContent = r;
			c.addEventListener('click', function () { copyText(r).then(function () { flash(c, ui.copied, r); }); }); chips.appendChild(c);
		});
		show(0);
		return wrap;
	}

	g.AWM365 = { extendI18N: extendI18N, buildTry: buildTry };
}(window));
