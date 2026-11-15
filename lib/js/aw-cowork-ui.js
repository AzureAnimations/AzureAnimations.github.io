/* aw-cowork-ui.js — builds stylized Microsoft Copilot Cowork surfaces (window, home, conversation, side panel,
   approval / question / trigger / schedule cards, task lists) as HTML strings for GSAP scenes.
   No text is baked in: every label comes from the caller, so pages stay fully translatable.
   Pair with lib/css/aw-cowork-ui.css. Facts behind each surface: https://learn.microsoft.com/microsoft-365/copilot/cowork/use-cowork */
(function () {
	if (window.AWCowork) return;
	var me = document.currentScript && document.currentScript.src;
	var ROOT = me ? me.replace(/lib\/js\/aw-cowork-ui\.js(?:[?#].*)?$/, '') : '../../';
	var ICON = {
		copilot: ROOT + 'lib/icons/brands/Microsoft365Copilot.svg',
		outlook: ROOT + 'lib/icons/brands/m365/Outlook.svg', teams: ROOT + 'lib/icons/brands/m365/Teams.svg',
		word: ROOT + 'lib/icons/brands/m365/Word.svg', excel: ROOT + 'lib/icons/brands/m365/Excel.svg',
		powerpoint: ROOT + 'lib/icons/brands/m365/PowerPoint.svg', onedrive: ROOT + 'lib/icons/brands/m365/OneDrive.svg',
		sharepoint: ROOT + 'lib/icons/brands/m365/SharePoint.svg'
	};

	function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
	function cls(base, extra) { return extra ? base + ' ' + extra : base; }
	function ext(name) { var m = /\.(\w+)$/.exec(name || ''); return m ? m[1].toLowerCase() : 'md'; }
	var TYPE = { docx:'W', xlsx:'X', pptx:'P', pdf:'PDF', eml:'@', md:'MD', html:'</>' };
	function svg(d, extra) { return '<svg viewBox="0 0 24 24" aria-hidden="true"' + (extra || '') + '><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="' + d + '"/></svg>'; }
	var G = {
		back: svg('M15 5l-7 7 7 7'), fwd: svg('M9 5l7 7-7 7'), reload: svg('M19 12a7 7 0 1 1-2.05-4.95M19 4v4h-4'),
		lock: svg('M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z'), star: svg('M12 4l2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z'),
		more: svg('M5 12h.01M12 12h.01M19 12h.01', ' class="is-thick"'),
		apps: svg('M5 5h.01M12 5h.01M19 5h.01M5 12h.01M12 12h.01M19 12h.01M5 19h.01M12 19h.01M19 19h.01', ' class="is-thick"'),
		todo: svg('M5 4h14v16H5zM9 12l2 2 4-4'), panel: svg('M4 5h16v14H4zM10 5v14'),
		newTask: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M12 8v8M8 12h8" stroke="var(--cw-rail)" stroke-width="1.9" stroke-linecap="round"/></svg>',
		tasks: svg('M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2'), flash: svg('M13 3L5 14h6l-1 7 8-11h-6z'),
		custom: svg('M12 3a4 4 0 0 0-4 4v1a4 4 0 0 0-3 6 4 4 0 0 0 4 6h6a4 4 0 0 0 4-6 4 4 0 0 0-3-6V7a4 4 0 0 0-4-4zM12 3v18'),
		gear: svg('M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM19.4 13a7.5 7.5 0 0 0 0-2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-1.7-1L15 3.5h-4l-.4 2.5a7 7 0 0 0-1.7 1l-2.3-.9-2 3.4 2 1.5a7.5 7.5 0 0 0 0 2l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 1.7 1l.4 2.5h4l.4-2.5a7 7 0 0 0 1.7-1l2.3.9 2-3.4z'),
		plus: svg('M12 5v14M5 12h14'), pen: svg('M4 20l4-1 10-10-3-3L5 16zM14 7l3 3M15 19h5'), mic: svg('M12 4a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3zM6 11a6 6 0 0 0 12 0M12 17v3'),
		bulb: svg('M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z'), chev: svg('M7 10l5 5 5-5'), send: svg('M12 19V5M6 11l6-6 6 6')
	};
	// default (English) chrome labels — pages pass translated ones via o.labels
	var L0 = { url:'https://copilot.cloud.microsoft/cowork', tab:'Microsoft Copilot', brand:'Copilot', nav:['New task', 'My tasks', 'Automations', 'Customize'], work:'Work' };

	var K = {
		icon: function (name) { return ICON[name] || name; },
		pill: function (text, tone, extra) { return '<span class="' + cls('cw-pill' + (tone ? ' is-' + tone : ''), extra) + '">' + esc(text) + '</span>'; },
		btn: function (text, o) {
			o = o || {};
			return '<span class="' + cls('cw-btn' + (o.primary ? ' is-primary' : '') + (o.split ? ' is-split' : ''), o.cls) + '">' + esc(text)
				+ (o.split ? '<span class="cw-caret" aria-hidden="true">&#9662;</span>' : '') + '</span>';
		},
		file: function (name, extra) {
			var t = ext(name);
			return '<div class="' + cls('cw-file', extra) + '"><i class="cw-ftype t-' + t + '">' + esc(TYPE[t] || t.toUpperCase()) + '</i><span>' + esc(name) + '</span></div>';
		},

		// Microsoft Edge window → Copilot app (left rail + main + optional side panel).
		// o: { body, side, cls, rail:true|'mini'|false, navOn:0..3, mode:['Chat','Cowork'],
		//      user:{ name, sub, initials }, labels:{ url, tab, brand, nav:[4], work } }
		window: function (o) {
			var l = o.labels || {}, mode = o.mode || ['Chat', 'Cowork'], nav = l.nav || L0.nav, u = o.user || {};
			var navIcons = [G.newTask, G.tasks, G.flash, G.custom], on = o.navOn == null ? 0 : o.navOn;
			var rail = o.rail === false ? '' : '<nav class="cw-rail' + (o.rail === 'mini' ? ' is-mini' : '') + '">'
				+ '<div class="cw-rail-h"><b>' + esc(l.brand || L0.brand) + '</b><span class="cw-rail-ic">' + G.apps + G.todo + G.panel + '</span></div>'
				+ '<div class="cw-seg"><span>' + esc(mode[0]) + '</span><span class="is-on">' + esc(mode[1]) + '</span></div>'
				+ '<div class="cw-nav">' + nav.map(function (n, i) { return '<span' + (i === on ? ' class="is-on"' : '') + '>' + navIcons[i] + '<em>' + esc(n) + '</em></span>'; }).join('') + '</div>'
				+ '<div class="cw-acct"><span class="cw-ava">' + esc(u.initials || (u.name || 'A').charAt(0)) + '</span>'
				+ '<span class="cw-acct-t"><span><i>' + esc(l.work || L0.work) + '</i>' + esc(u.name || '') + '</span><small>' + esc(u.sub || '') + '</small></span>' + G.gear + '</div></nav>';
			return '<div class="' + cls('cw cw-win', o.cls) + '">'
				+ '<div class="cw-etabs"><span class="cw-etab"><img src="' + ICON.copilot + '" alt="" decoding="async"><span>' + esc(l.tab || L0.tab) + '</span><i aria-hidden="true">&times;</i></span>'
				+ '<span class="cw-enew" aria-hidden="true">+</span><span class="cw-bar-sp"></span><span class="cw-ectl" aria-hidden="true"><i>&#8211;</i><i>&#9633;</i><i>&times;</i></span></div>'
				+ '<div class="cw-eaddr"><span class="cw-enav">' + G.back + G.fwd + G.reload + '</span>'
				+ '<span class="cw-url">' + G.lock + '<span>' + esc(l.url || L0.url) + '</span>' + G.star + '</span>'
				+ '<span class="cw-ava is-sm">' + esc(u.initials || (u.name || 'A').charAt(0)) + '</span>' + G.more + '</div>'
				+ '<div class="cw-body">' + rail + '<div class="cw-main">' + (o.body || '') + '</div>' + (o.side || '') + '</div></div>';
		},

		// o: { greet, placeholder, text, model, effort, tip, nextTitle, more, prompts:[] }
		home: function (o) {
			var arts = ['inbox', 'week', 'pitch'];
			return '<div class="cw-home">' + (o.greet ? '<div class="cw-greet">' + esc(o.greet) + '</div>' : '')
				+ K.compose({ text: o.text, placeholder: o.placeholder, model: o.model, effort: o.effort })
				+ (o.tip ? '<div class="cw-tip">' + G.bulb + esc(o.tip) + '</div>' : '')
				+ (o.prompts ? '<div class="cw-next-h"><b>' + esc(o.nextTitle || '') + '</b><span>' + esc(o.more || '') + '</span></div><div class="cw-prompts">'
					+ o.prompts.map(function (p, i) { return '<span class="cw-prompt"><i class="cw-art is-' + arts[i % 3] + '"><b></b><b></b><b></b></i><span>' + esc(p) + '</span></span>'; }).join('') + '</div>' : '')
				+ '</div>';
		},
		compose: function (o) {
			var empty = !o.text;
			return '<div class="cw-compose"><div class="cw-compose-text' + (empty ? ' is-empty' : '') + '">' + esc(empty ? (o.placeholder || '') : o.text) + '</div>'
				+ '<div class="cw-compose-row"><span class="cw-plus">' + G.plus + '</span><span class="cw-bar-sp"></span>'
				+ (o.model ? '<span class="cw-model">' + esc(o.model) + (o.effort ? ' <em>' + esc(o.effort) + '</em>' : '') + G.chev + '</span>' : '')
				+ '<span class="cw-cic">' + G.pen + '</span>' + (empty ? '<span class="cw-cic">' + G.mic + '</span>' : '<span class="cw-send">' + G.send + '</span>') + '</div></div>';
		},

		msg: function (who, html, extra) { return '<div class="' + cls('cw-msg is-' + who, extra) + '">' + html + '</div>'; },
		thinking: function (label) { return '<div class="cw-thinking"><span class="cw-dots"><i></i><i></i><i></i></span>' + esc(label) + '</div>'; },
		skillMsg: function (text) { return '<div class="cw-skillmsg">&#10022; ' + esc(text) + '</div>'; },
		// rows: [[label, 'done'|'run'|'todo']]
		steps: function (rows) {
			return '<div class="cw-steps">' + rows.map(function (r) {
				return '<div class="cw-step is-' + (r[1] || 'todo') + '"><span class="cw-step-mark">' + (r[1] === 'done' ? '&#10003;' : '') + '</span>' + esc(r[0]) + '</div>';
			}).join('') + '</div>';
		},

		// o: { title:{progress,input,output,skills,schedule,permissions}, pct, steps:[[l,s]], input:[], output:[], skills:[], schedule:[], permissions:[] }
		side: function (o) {
			var t = o.title || {}, out = '';
			if (o.pct != null) out += '<div class="cw-sec cw-sec-progress"><span class="cw-h">' + esc(t.progress) + '</span><div class="cw-progress"><i style="width:' + o.pct + '%"></i></div>'
				+ '<span class="cw-progress-pct">' + o.pct + '%</span>' + (o.steps ? K.steps(o.steps) : '') + '</div>';
			if (o.input) out += '<div class="cw-sec cw-sec-input"><span class="cw-h">' + esc(t.input) + '</span><div class="cw-files">' + o.input.map(function (f) { return K.file(f); }).join('') + '</div></div>';
			if (o.output) out += '<div class="cw-sec cw-sec-output"><span class="cw-h">' + esc(t.output) + '</span><div class="cw-files">' + o.output.map(function (f) { return K.file(f); }).join('') + '</div></div>';
			if (o.skills) out += '<div class="cw-sec cw-sec-skills"><span class="cw-h">' + esc(t.skills) + '</span><div class="cw-chips">' + o.skills.map(function (s) { return K.pill(s, 'accent'); }).join('') + '</div></div>';
			if (o.schedule) out += '<div class="cw-sec cw-sec-schedule"><span class="cw-h">' + esc(t.schedule) + '</span><div class="cw-chips">' + o.schedule.map(function (s) { return K.pill(s); }).join('') + '</div></div>';
			if (o.permissions) out += '<div class="cw-sec cw-sec-permissions"><span class="cw-h">' + esc(t.permissions) + '</span><div class="cw-chips">' + o.permissions.map(function (s) { return K.pill(s, 'ok'); }).join('') + '</div></div>';
			return '<aside class="cw-side">' + out + '</aside>';
		},

		// o: { title, risk, riskTone:'ok'|'warn'|'risk', tag, fields:[[k,v]], preview, action, more, cancel, params, menu:[], menuOn }
		approval: function (o) {
			return '<div class="cw cw-card cw-approval is-accent"><div class="cw-card-h"><b>' + esc(o.title) + '</b>'
				+ (o.tag ? K.pill(o.tag) : '') + (o.risk ? K.pill(o.risk, o.riskTone || 'ok') : '') + '</div>'
				+ (o.fields ? '<dl class="cw-fields">' + o.fields.map(function (f) { return '<dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd>'; }).join('') + '</dl>' : '')
				+ (o.preview ? '<div class="cw-preview">' + esc(o.preview) + '</div>' : '')
				+ '<div class="cw-actions">' + (o.params ? '<span class="cw-link">' + esc(o.params) + '</span>' : '')
				+ K.btn(o.cancel) + K.btn(o.action, { primary: true, split: !!o.more }) + '</div>'
				+ (o.menu ? '<div class="cw-menu">' + o.menu.map(function (m, i) { return '<span' + (i === o.menuOn ? ' class="is-on"' : '') + '>' + esc(m) + '</span>'; }).join('') + '</div>' : '')
				+ '</div>';
		},
		// o: { q, options:[], on, submit, skip }
		question: function (o) {
			return '<div class="cw cw-card cw-question is-accent"><div class="cw-card-h"><b>' + esc(o.q) + '</b></div><div class="cw-options">'
				+ o.options.map(function (op, i) { return '<div class="cw-option' + (i === o.on ? ' is-on' : '') + '"><i></i>' + esc(op) + '</div>'; }).join('')
				+ '</div><div class="cw-actions"><span class="cw-bar-sp"></span>' + K.btn(o.skip) + K.btn(o.submit, { primary: true }) + '</div></div>';
		},
		// generic form card: o: { title, fields:[[k,v]], check, perms:[], perm, action, cancel, cls }
		form: function (o) {
			return '<div class="' + cls('cw cw-card', o.cls) + '"><div class="cw-card-h"><b>' + esc(o.title) + '</b></div>'
				+ '<dl class="cw-fields">' + o.fields.map(function (f) { return '<dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd>'; }).join('') + '</dl>'
				+ (o.perms ? '<div class="cw-sec"><span class="cw-h">' + esc(o.perm || '') + '</span><div class="cw-chips">' + o.perms.map(function (p) { return K.pill(p, 'warn'); }).join('') + '</div></div>' : '')
				+ '<div class="cw-actions">' + (o.check ? '<span class="cw-check"><i>&#10003;</i>' + esc(o.check) + '</span>' : '') + '<span class="cw-bar-sp"></span>'
				+ (o.cancel ? K.btn(o.cancel) : '') + K.btn(o.action, { primary: true }) + '</div></div>';
		},
		// o: { tabs:[], on, rows:[[title, sub, pill, tone]], cls }
		list: function (o) {
			return '<div class="' + cls('cw cw-card', o.cls) + '">' + (o.tabs ? '<div class="cw-tabs">' + o.tabs.map(function (t, i) { return '<span' + (i === (o.on || 0) ? ' class="is-on"' : '') + '>' + esc(t) + '</span>'; }).join('') + '</div>' : '')
				+ '<div class="cw-rows">' + o.rows.map(function (r) {
					return '<div class="cw-row"><div class="cw-row-t"><b>' + esc(r[0]) + '</b>' + (r[1] ? '<small>' + esc(r[1]) + '</small>' : '') + '</div>' + (r[2] ? K.pill(r[2], r[3]) : '') + '</div>';
				}).join('') + '</div></div>';
		},
		code: function (text, extra) { return '<div class="' + cls('cw cw-code', extra) + '">' + esc(text) + '</div>'; }
	};
	window.AWCowork = K;
})();
