/*!
 * aw-prompt-anatomy.js — show HOW a prompt is built (Goal, Context, Expectations, Source) inside the
 * Copy-prompt hover bubble, the way Microsoft teaches it:
 * https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
 *
 * ONE place for the look (this file) and ONE place for the content (aw-prompt-anatomy-data.js, loaded by this
 * file itself): a page needs just one <script> tag for this file. Entries are keyed by the prompt TEXT, so a
 * prompt that appears on several pages is written once, and no page needs per-prompt wiring.
 *
 * Data format (aw-prompt-anatomy-data.js):
 *   AWPromptAnatomy.register([
 *     { text: 'Using Sales Transactions and Sales Targets, identify the three most important commercial findings. …',
 *       parts: [ ['source', 'Using Sales Transactions and Sales Targets'],
 *                ['goal',   'identify the three most important commercial findings'],
 *                ['context','Focus on market or channel performance, …'],
 *                ['expectations', 'Keep the answer to a maximum of six bullets.'] ] } ]);
 *
 * Each excerpt MUST be copied verbatim from the prompt (the prompt is never reworded). A part may repeat; a part
 * with no excerpt shows "Not stated in this prompt". If the prompt text on a page was edited and an excerpt can no
 * longer be found, the bubble falls back to the plain prompt and the console says why, so a stale entry can never
 * mislead. `node scripts/verify-prompt-anatomy.mjs` checks every entry and every page.
 *
 * Two ways a page uses it:
 *  1. The page already has its own Copy-prompt bubble (#hx-ptip): its bubble code calls
 *       var rich = AWPromptAnatomy.render(tipEl, key, promptText);
 *     which fills `.pt-a` inside the bubble, hides the plain `.pt-b` text when rich, and returns true/false.
 *  2. The page has NO bubble (the generated Finance lessons): this file installs one on DOMContentLoaded.
 *     It reads the prompt from the page's global COPY[key] (filled by copyBtn()).
 */
(function () {
	'use strict';
	if (window.AWPromptAnatomy) return;
	var SELF = document.currentScript && document.currentScript.src;

	var ORDER = ['goal', 'context', 'expectations', 'source'];
	var PARTS = {
		goal:         { title: 'Goal',         ask: 'What do you want from Copilot?' },
		context:      { title: 'Context',      ask: 'Why do you need it and who is involved?' },
		expectations: { title: 'Expectations', ask: 'How should Copilot respond to best fulfil your request?' },
		source:       { title: 'Source',       ask: 'What information or samples do you want Copilot to use?' }
	};
	var DATA = {};
	function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }

	var css =
		'#hx-ptip.pt-rich{width:min(860px,calc(100vw - 16px));}' +
		'#hx-ptip .pt-a{display:none;}' +
		'#hx-ptip.pt-rich .pt-a{display:block;}' +
		'#hx-ptip.pt-rich .pt-b{display:none;}' +
		'.pt-a{--c-goal:#5cc8ff;--c-context:#b59cff;--c-expectations:#ff93d6;--c-source:#ffd166;}' +
		'.pt-a .pa-text{margin:0;font-size:16px;line-height:1.65;font-weight:500;white-space:pre-wrap;overflow-wrap:anywhere;}' +
		'.pt-a mark{background:none;color:inherit;border-radius:4px;padding:1px 2px;margin:0 -1px;box-decoration-break:clone;-webkit-box-decoration-break:clone;}' +
		'.pt-a mark[data-part=goal]{background:rgba(92,200,255,.20);box-shadow:inset 0 -2px 0 var(--c-goal);}' +
		'.pt-a mark[data-part=context]{background:rgba(181,156,255,.22);box-shadow:inset 0 -2px 0 var(--c-context);}' +
		'.pt-a mark[data-part=expectations]{background:rgba(255,147,214,.20);box-shadow:inset 0 -2px 0 var(--c-expectations);}' +
		'.pt-a mark[data-part=source]{background:rgba(255,209,102,.20);box-shadow:inset 0 -2px 0 var(--c-source);}' +
		'.pt-a .pa-h{margin:.7rem 0 .45rem;padding-top:.55rem;border-top:1px solid rgba(255,255,255,.2);font-size:12.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#c9d3e6;}' +
		'.pt-a .pa-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.5rem;}' +
		'.pt-a .pa-card{display:flex;flex-direction:column;box-sizing:border-box;padding:.6rem .65rem .7rem;border-radius:12px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.16);border-top:3px solid var(--pc);}' +
		'.pt-a .pa-card[data-part=goal]{--pc:var(--c-goal);}' +
		'.pt-a .pa-card[data-part=context]{--pc:var(--c-context);}' +
		'.pt-a .pa-card[data-part=expectations]{--pc:var(--c-expectations);}' +
		'.pt-a .pa-card[data-part=source]{--pc:var(--c-source);}' +
		'.pt-a .pa-t{font-size:16px;font-weight:700;color:var(--pc);line-height:1.2;}' +
		'.pt-a .pa-q{margin:.2rem 0 .45rem;font-size:12.5px;line-height:1.35;color:#d4dbe9;font-weight:500;}' +
		'.pt-a .pa-bar{height:3px;border-radius:3px;margin-bottom:.45rem;background:linear-gradient(90deg,#7fd6ff,#9a8cff 55%,#d86cff);}' +
		'.pt-a .pa-x{margin:0 0 .3rem;font-size:13.5px;line-height:1.4;font-style:italic;font-weight:500;color:#fff;overflow-wrap:anywhere;}' +
		'.pt-a .pa-x:last-child{margin-bottom:0;}' +
		'.pt-a .pa-none{margin:0;font-size:12.5px;line-height:1.4;color:#aab4c8;font-style:italic;}' +
		'@media (max-width:820px){.pt-a .pa-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}' +
		// long prompts: the bubble tries three sizes and keeps the first that fits above or below the Copy button
		'#hx-ptip.pt-rich.pt-c1{width:min(980px,calc(100vw - 16px)) !important;}' +
		'#hx-ptip.pt-rich.pt-c2{width:min(1180px,calc(100vw - 16px)) !important;padding:.65rem .9rem .75rem;}' +
		'#hx-ptip.pt-c1 .pt-a .pa-text{font-size:14px;line-height:1.5;column-count:2;column-gap:1.4rem;}' +
		'#hx-ptip.pt-c2 .pt-a .pa-text{font-size:13px;line-height:1.42;column-count:3;column-gap:1.2rem;}' +
		'#hx-ptip.pt-c1 .pt-a .pa-h,#hx-ptip.pt-c2 .pt-a .pa-h{margin:.5rem 0 .35rem;padding-top:.4rem;}' +
		'#hx-ptip.pt-c2 .pt-a .pa-card{padding:.45rem .55rem .5rem;}' +
		'#hx-ptip.pt-c2 .pt-a .pa-q{display:none;}' +
		'#hx-ptip.pt-c2 .pt-a .pa-x{font-size:12.5px;line-height:1.35;}';

	function ensureStyle() {
		if (document.getElementById('aw-prompt-anatomy-style')) return;
		var s = document.createElement('style'); s.id = 'aw-prompt-anatomy-style'; s.textContent = css;
		document.head.appendChild(s);
	}
	function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

	// Locate every excerpt in the prompt, in reading order; null when one is missing or two overlap.
	function locate(text, spec) {
		var hits = [], from = {};
		for (var i = 0; i < spec.length; i++) {
			var part = spec[i][0], ex = spec[i][1];
			if (!PARTS[part] || !ex) { console.warn('[aw-prompt-anatomy] bad entry', spec[i]); return null; }
			var at = text.indexOf(ex, from[ex] || 0);
			if (at < 0) { console.warn('[aw-prompt-anatomy] excerpt not found in the prompt:', ex); return null; }
			from[ex] = at + ex.length;
			hits.push({ part: part, ex: ex, at: at, end: at + ex.length });
		}
		hits.sort(function (a, b) { return a.at - b.at; });
		for (var j = 1; j < hits.length; j++) if (hits[j].at < hits[j - 1].end) { console.warn('[aw-prompt-anatomy] excerpts overlap:', hits[j - 1].ex, '/', hits[j].ex); return null; }
		return hits;
	}

	// A card is a summary, not a copy of the prompt (the full text is highlighted above it): cap what one card quotes.
	var CARD_BUDGET = 190;
	function cardBody(list) {
		if (!list.length) return '<p class="pa-none">Not stated in this prompt</p>';
		var left = CARD_BUDGET, out = '';
		for (var i = 0; i < list.length; i++) {
			var x = list[i].replace(/\s+/g, ' ').trim();
			if (left <= 0) { out += '<p class="pa-x">\u2026 +' + (list.length - i) + ' more</p>'; break; }
			if (x.length > left) { x = x.slice(0, left).replace(/\s+\S*$/, '') + '\u2026'; left = 0; } else left -= x.length;
			out += '<p class="pa-x">\u201C' + esc(x) + '\u201D</p>';
		}
		return out;
	}

	function build(text, spec) {
		var hits = locate(text, spec); if (!hits) return '';
		var html = '', pos = 0;
		hits.forEach(function (h) {
			html += esc(text.slice(pos, h.at)) + '<mark data-part="' + h.part + '">' + esc(h.ex) + '</mark>';
			pos = h.end;
		});
		html += esc(text.slice(pos));
		var cards = ORDER.map(function (p) {
			var ex = spec.filter(function (e) { return e[0] === p; }).map(function (e) { return e[1]; });
			return '<div class="pa-card" data-part="' + p + '"><div class="pa-t">' + PARTS[p].title + '</div><div class="pa-q">' + PARTS[p].ask +
				'</div><div class="pa-bar"></div>' + cardBody(ex) + '</div>';
		}).join('');
		return '<p class="pa-text">' + html + '</p><div class="pa-h">How this prompt is built</div><div class="pa-grid">' + cards + '</div>';
	}

	// The Copy button the pointer or focus just reached (this file's listeners are registered before the page's, so it is set when the page's bubble code runs).
	var lastBtn = null;
	function track(e) { lastBtn = e.target && e.target.closest ? e.target.closest('[data-copy]') : null; }
	document.addEventListener('mouseover', track, true);
	document.addEventListener('focusin', track, true);

	// Keep the first size that fits in the room above or below the button (else the smallest).
	function fit(tip) {
		var vh = window.innerHeight, r = lastBtn && lastBtn.isConnected ? lastBtn.getBoundingClientRect() : null;
		var room = r ? Math.max(r.top, vh - r.bottom) - 14 - 8 : vh - 16;
		var s = tip.style, was = [s.display, s.visibility];
		s.visibility = 'hidden'; s.display = 'block';
		var levels = ['', 'pt-c1', 'pt-c2'], pick = levels[2];
		for (var i = 0; i < levels.length; i++) {
			tip.classList.remove('pt-c1', 'pt-c2'); if (levels[i]) tip.classList.add(levels[i]);
			if (tip.offsetHeight <= room) { pick = levels[i]; break; }
		}
		tip.classList.remove('pt-c1', 'pt-c2'); if (pick) tip.classList.add(pick);
		s.display = was[0]; s.visibility = was[1];
	}

	// Pages that carry no bubble of their own (the generated Finance lessons) get this one; same look as the hand-built pages.
	var BASE_CSS =
		'#hx-ptip{position:fixed;z-index:60;display:none;box-sizing:border-box;width:360px;padding:.85rem 1.1rem 1rem;border-radius:14px;background:rgba(59,65,80,.98);color:#fff;border:1.5px solid rgba(255,255,255,.3);box-shadow:0 14px 36px rgba(0,0,0,.35);font-size:17px;line-height:1.5;pointer-events:none;max-height:calc(100vh - 16px);overflow:hidden;text-align:left;}' +
		'#hx-ptip.is-on{display:block;}' +
		'#hx-ptip .pt-k{display:block;margin-bottom:.5rem;padding-bottom:.45rem;border-bottom:1px solid rgba(255,255,255,.2);font-size:14px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#8fd0ff;}' +
		'#hx-ptip .pt-b{display:block;white-space:pre-wrap;overflow-wrap:anywhere;font-weight:500;}' +
		'#hx-ptip::after{content:"";position:absolute;left:var(--ax,50%);margin-left:-9px;border:9px solid transparent;}' +
		'#hx-ptip.pt-up::after{top:100%;border-top-color:rgba(59,65,80,.98);}' +
		'#hx-ptip.pt-down::after{bottom:100%;border-bottom-color:rgba(59,65,80,.98);}' +
		'#hx-ptip.pt-side::after{display:none;}';

	function installBubble() {
		if (document.getElementById('hx-ptip')) return;                       // the page brought its own: it calls render()
		if (typeof COPY === 'undefined') return;                              // not a copy-prompt lesson
		var st = document.createElement('style'); st.id = 'aw-prompt-anatomy-bubble-style'; st.textContent = BASE_CSS; document.head.appendChild(st);
		var tip = document.createElement('div'); tip.id = 'hx-ptip'; tip.setAttribute('role', 'tooltip');
		tip.innerHTML = '<span class="pt-k"></span><span class="pt-b"></span>'; document.body.appendChild(tip);
		var kEl = tip.querySelector('.pt-k'), bEl = tip.querySelector('.pt-b'), cur = null, watch = null;
		function kindOf(key) { return /f$|^xp|^pkx/i.test(key) && !/^pk\d+$/.test(key) ? 'Follow-up' : 'Prompt'; }
		function clamp(v, a, b) { return Math.min(Math.max(a, v), Math.max(a, b)); }
		function place() {
			if (!cur) return;
			var r = cur.getBoundingClientRect(), W = tip.offsetWidth, H = tip.offsetHeight, M = 8, gap = 14, vw = innerWidth, vh = innerHeight;
			var up = r.top - H - gap >= M, down = r.bottom + H + gap <= vh - M, left, top, mode;
			if (up || down) { mode = up ? 'pt-up' : 'pt-down'; left = clamp(r.left + r.width / 2 - W / 2, M, vw - W - M); top = up ? r.top - H - gap : r.bottom + gap; }
			else { mode = 'pt-side'; left = r.left - W - gap >= M ? r.left - W - gap : Math.min(r.right + gap, vw - W - M); top = clamp(r.top + r.height / 2 - H / 2, M, vh - H - M); }
			tip.style.left = left + 'px'; tip.style.top = top + 'px'; tip.style.setProperty('--ax', clamp(r.left + r.width / 2 - left, 20, W - 20) + 'px');
			['pt-up', 'pt-down', 'pt-side'].forEach(function (c) { tip.classList.toggle(c, c === mode); });
		}
		function show(btn) {
			var key = btn.dataset.copy, text = COPY[key]; if (!text) return;
			cur = btn; kEl.textContent = kindOf(key) + ' \u00B7 click to copy'; bEl.textContent = text; btn.setAttribute('aria-describedby', 'hx-ptip');
			api.render(tip, key, text);
			tip.classList.add('is-on'); place(); clearInterval(watch); watch = setInterval(function () { if (!cur || !cur.isConnected) hide(); else place(); }, 250);
		}
		function hide() { cur = null; clearInterval(watch); tip.classList.remove('is-on'); }
		function pick(e) { return e.target && e.target.closest ? e.target.closest('[data-copy]') : null; }
		document.addEventListener('mouseover', function (e) { var b = pick(e); if (b) show(b); });
		document.addEventListener('mouseout', function (e) { var b = pick(e); if (b && !(e.relatedTarget && b.contains(e.relatedTarget))) hide(); });
		document.addEventListener('focusin', function (e) { var b = pick(e); if (b) show(b); });
		document.addEventListener('focusout', function (e) { if (pick(e)) hide(); });
		document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
		window.addEventListener('resize', hide);
	}

	var api = window.AWPromptAnatomy = {
		register: function (list) {
			(list || []).forEach(function (e) { if (e && e.text && e.parts) DATA[norm(e.text)] = e.parts; });
		},
		has: function (text) { return !!DATA[norm(text)]; },
		render: function (tip, key, text) {
			ensureStyle();
			var host = tip.querySelector('.pt-a');
			if (!host) { host = document.createElement('div'); host.className = 'pt-a'; tip.appendChild(host); }
			var spec = text && DATA[norm(text)];
			var html = spec ? build(String(text), spec) : '';
			host.innerHTML = html;
			tip.classList.toggle('pt-rich', !!html);
			if (html) fit(tip); else tip.classList.remove('pt-c1', 'pt-c2');
			return !!html;
		}
	};
	ensureStyle();

	// The content lives next to this file; load it ourselves so a page needs only one <script> tag.
	if (SELF) {
		var d = document.createElement('script'); d.src = SELF.replace(/aw-prompt-anatomy\.js(\?.*)?$/, 'aw-prompt-anatomy-data.js$1'); d.async = true;
		document.head.appendChild(d);
	}
	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installBubble); else installBubble();
}());
