/* aw-chooser.js — the "which one should I pick?" chooser: need tabs → one option panel → a comparison
   matrix whose matching column lights up. Pages describe text only; markup, styles, panel sizing,
   keyboard guard, reveal animation and presenter autoplay all live here.

   const ch = AWChooser.build({
     width, label, ask,                                  // px width, accessible name, question above the tabs
     options: [{ tone, icon, name, need, kind, line, when:[], watch, side, art }],  // side = optional HTML (left column)
     // art = mini scene in a 480×h box, drawn in on every select:
     //   { h, boxes:[[x,y,w,h,label,'dash'|'dim']], links:[[x1,y1,x2,y2,{dash,bi,dim,x,t}]], nodes:[[cx,cy,glyph|'icon.svg',label,'on'|'dim'|'dash','up'?]] }
     matrix:  { caption, rows:[{ label, cells:[] }] },   // one cell per option, same order
     text:    { when:'Choose it when', watch:'Watch out:', hint },
     start:0, reducedMotion:false, onSelect:i=>{}
   });
   scene.appendChild(ch.el); mount(scene); ch.select(i);  // select() after the element is in the DOM
   ch.play(gsapTimeline);          // or ch.showAll() when motion is off
   const h = ch.autoplay(5000);    // presenter view: cycles options; returns { kill } */
(function () {
	if (window.AWChooser) return;
	var TONES = ['grey', 'orange', 'purple', 'blue', 'green', 'red', 'teal'];

	var CSS =
		'.ch{--ch-grey:#5d6270;--ch-orange:#b0520f;--ch-purple:#5c2d91;--ch-blue:#0063b1;--ch-green:#0b7a5d;--ch-red:#b3261e;--ch-teal:#0f6c78;' +
		'--ch-card:var(--theme-card-background,#fff);display:flex;flex-direction:column;gap:0.9rem;padding-bottom:2.8rem;}' +
		'body.theme-dark .ch{--ch-grey:#c3c7d1;--ch-orange:#ffa257;--ch-purple:#c9a5e8;--ch-blue:#6cb8ff;--ch-green:#3ecf9a;--ch-red:#ff8a80;--ch-teal:#5fd4de;' +
		'--ch-card:color-mix(in srgb,var(--theme-text) 7%,var(--theme-body-background));}' +
		TONES.map(function (t) { return '.ch .is-' + t + '{--acc:var(--ch-' + t + ');}'; }).join('') +
		'.ch-ask{display:flex;align-items:center;gap:0.45rem;font-size:0.95rem;font-weight:600;color:var(--theme-text);}' +
		'.ch-ask span{font-weight:400;color:color-mix(in srgb,var(--theme-text) 82%,transparent);}' +
		'.ch-ask svg{width:18px;height:18px;fill:var(--theme-text-subtle);}' +
		'.ch-tabs{display:grid;gap:0.75rem;}' +
		'.ch-tab{position:relative;display:flex;align-items:center;gap:0.65rem;padding:0.7rem 0.85rem;text-align:left;font:inherit;cursor:pointer;color:var(--theme-text);' +
		'border-radius:12px;border:2px solid var(--acc);background:var(--ch-card);box-shadow:0 4px 14px rgba(0,0,0,0.1);transition:box-shadow .15s ease,background-color .15s ease;}' +
		'.ch-tab:hover{box-shadow:0 0 0 3px color-mix(in srgb,var(--acc) 22%,transparent),0 6px 18px rgba(0,0,0,0.12);}' +
		'.ch-tab[aria-pressed="true"]{background:color-mix(in srgb,var(--acc) 20%,var(--ch-card));box-shadow:0 0 0 4px color-mix(in srgb,var(--acc) 34%,transparent);}' +
		'.ch-tab[aria-pressed="true"]::after{content:"\\2713";position:absolute;top:-10px;right:-10px;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;' +
		'font-size:13px;font-weight:700;background:var(--acc);color:var(--ch-card);}' +
		'.ch-tab:focus-visible{outline:3px solid var(--theme-text);outline-offset:3px;}' +
		'.ch-ti{flex:none;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;font-size:1.5rem;}' +
		'.ch-ti img{width:32px;height:32px;}.ch-ti svg{width:24px;height:24px;fill:var(--acc);}' +
		'.ch-tt{display:flex;flex-direction:column;min-width:0;}' +
		'.ch-need{font-size:0.95rem;font-weight:600;line-height:1.3;}' +
		'.ch-name{font-size:0.88rem;line-height:1.3;color:var(--acc);}' +
		'.ch-panel{box-sizing:border-box;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:0.6rem 1.6rem;align-content:start;' +
		'padding:0.95rem 1.2rem;border-radius:14px;border:2px solid var(--acc);background:var(--ch-card);box-shadow:0 6px 22px rgba(0,0,0,0.12);}' +
		'.ch-il{display:flex;flex-direction:column;gap:0.45rem;min-width:0;}' +
		'.ch-badge{align-self:flex-start;font-size:0.8rem;font-weight:500;padding:0.2rem 0.65rem;border-radius:999px;border:1.5px solid var(--acc);color:var(--acc);}' +
		'.ch-il h3{margin:0;font-size:1.2rem;font-weight:700;line-height:1.25;color:var(--acc);}' +
		'.ch-il p,.ch-ir .ch-line{margin:0;font-size:0.95rem;line-height:1.5;color:var(--theme-text);}' +
		'.ch-ir{min-width:0;display:flex;flex-direction:column;gap:0.5rem;}' +
		'.ch-wh{font-size:0.85rem;font-weight:600;color:var(--theme-text-subtle);}' +
		'.ch-ir ul{margin:0;padding-left:1.1rem;list-style:disc;display:flex;flex-direction:column;gap:0.3rem;}' +
		'.ch-ir li{display:list-item;font-size:0.95rem;line-height:1.45;color:var(--theme-text);}' +
		'.ch-ir li::marker{color:var(--acc);}' +
		'.ch-watch{margin:0.2rem 0 0;padding:0.55rem 0.75rem;border-radius:10px;font-size:0.92rem;line-height:1.45;' +
		'border:1.5px solid var(--theme-border);background:color-mix(in srgb,var(--theme-text) 4%,transparent);}' +
		'.ch-watch b{font-weight:600;color:var(--ch-red);}' +
		'.ch code{font-family:"Cascadia Code",Consolas,monospace;font-size:0.92em;}' +
		'.ch-mx{width:100%;table-layout:fixed;border-collapse:separate;border-spacing:0;border-radius:14px;overflow:hidden;' +
		'border:1.5px solid var(--theme-border);background:var(--ch-card);font-size:0.92rem;}' +
		'.ch-cap{margin:0 0 -0.5rem;font-size:0.85rem;color:var(--theme-text-subtle);}' +
		'.ch-mx th,.ch-mx td{padding:0.45rem 0.7rem;text-align:left;vertical-align:top;line-height:1.35;border-bottom:1px solid var(--theme-border);color:var(--theme-text);}' +
		'.ch-mx tr:last-child th,.ch-mx tr:last-child td{border-bottom:0;}' +
		'.ch-mx thead th{font-weight:600;}' +
		'.ch-mx tbody th{font-weight:500;color:var(--theme-text-subtle);}' +
		'.ch-mx .is-on{background:color-mix(in srgb,var(--acc) 13%,transparent);box-shadow:inset 2px 0 0 var(--acc),inset -2px 0 0 var(--acc);}' +
		'.ch-mx thead .is-on{color:var(--acc);}' +
		'.ch-art{display:block;width:100%;max-width:480px;height:auto;margin-top:0.3rem;overflow:visible;}' +
		'.ca-box rect{fill:color-mix(in srgb,var(--acc) 6%,transparent);stroke:color-mix(in srgb,var(--acc) 55%,var(--theme-border));stroke-width:1.5;}' +
		'.ca-box.dash rect{stroke-dasharray:6 4;}.ca-box.dim rect{fill:none;stroke:var(--theme-border);}' +
		'.ca-box text{font-size:14.5px;font-weight:500;fill:var(--theme-text-subtle);}' +
		'.ca-node rect{fill:var(--ch-card);stroke:var(--acc);stroke-width:2;}' +
		'.ca-node.on rect{fill:color-mix(in srgb,var(--acc) 20%,var(--ch-card));}' +
		'.ca-node.dash rect{stroke-dasharray:4 3;}.ca-node.dim rect{stroke:var(--theme-border);}.ca-node.dim .ca-g,.ca-node.dim .ca-l{opacity:0.5;}' +
		'.ca-g{font-size:20px;text-anchor:middle;fill:var(--acc);}' +
		'.ca-l{font-size:15px;text-anchor:middle;fill:var(--theme-text);}' +
		'.ca-link{fill:none;stroke:var(--theme-text-subtle);stroke-width:2.4;stroke-linecap:round;opacity:0.95;}' +
		'.ca-link.dash{stroke-dasharray:7 5;}' +
		'.ca-head{fill:var(--theme-text-subtle);opacity:0.95;}' +
		'.ca-lt{font-size:14px;text-anchor:middle;fill:var(--theme-text-subtle);}' +
		'.ca-x{stroke:var(--ch-red);stroke-width:3;stroke-linecap:round;}';

	var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 5l7 7-7 7v-4H4v-6h9z"/></svg>';

	function injectCss() {
		if (document.getElementById('aw-chooser-style')) return;
		var s = document.createElement('style');
		s.id = 'aw-chooser-style';
		s.textContent = CSS;
		document.head.appendChild(s);
	}
	function div(cls, html, tag) { var d = document.createElement(tag || 'div'); d.className = cls; if (html != null) d.innerHTML = html; return d; }
	function tone(t) { return 'is-' + (TONES.indexOf(t) > -1 ? t : 'grey'); }

	function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
	function artSVG(a) {
		var H = a.h || 130, s = '<svg class="ch-art" viewBox="0 0 480 ' + H + '" aria-hidden="true">';
		(a.boxes || []).forEach(function (b) {
			s += '<g class="ca-box ' + (b[5] || '') + '"><rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '" rx="10"/>' +
				(b[4] ? '<text x="' + (b[0] + 10) + '" y="' + (b[1] + 18) + '">' + esc(b[4]) + '</text>' : '') + '</g>';
		});
		(a.links || []).forEach(function (l) {
			// same arrow as aw-hop-path: filled 16×16 triangle, tip a few px short of the box, line stops at its base
			var f = l[4] || {}, ang = Math.atan2(l[3] - l[1], l[2] - l[0]), ux = Math.cos(ang), uy = Math.sin(ang), GAP = 4, HL = 16, HW = 8;
			var x1 = l[0] + ux * GAP, y1 = l[1] + uy * GAP, x2 = l[2] - ux * GAP, y2 = l[3] - uy * GAP;
			function head(x, y, a) {
				var bx = x - HL * Math.cos(a), by = y - HL * Math.sin(a), px = -Math.sin(a) * HW, py = Math.cos(a) * HW;
				return '<polygon class="ca-head" points="' + [[x, y], [bx + px, by + py], [bx - px, by - py]].map(function (q) { return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' ') + '"/>';
			}
			var hasEnd = !f.noHead, lx1 = f.bi ? x1 + ux * HL : x1, ly1 = f.bi ? y1 + uy * HL : y1, lx2 = hasEnd ? x2 - ux * HL : x2, ly2 = hasEnd ? y2 - uy * HL : y2;
			var mx = (l[0] + l[2]) / 2, my = (l[1] + l[3]) / 2;
			s += '<g class="ca-lg"><path class="ca-link' + (f.dash ? ' dash' : '') + '" d="M' + lx1.toFixed(1) + ' ' + ly1.toFixed(1) + 'L' + lx2.toFixed(1) + ' ' + ly2.toFixed(1) + '" data-len="' + Math.hypot(lx2 - lx1, ly2 - ly1).toFixed(1) + '"/>' +
				(hasEnd ? head(x2, y2, ang) : '') + (f.bi ? head(x1, y1, ang + Math.PI) : '') +
				(f.x ? '<path class="ca-x" d="M' + (mx - 7) + ' ' + (my - 7) + 'L' + (mx + 7) + ' ' + (my + 7) + 'M' + (mx + 7) + ' ' + (my - 7) + 'L' + (mx - 7) + ' ' + (my + 7) + '"/>' : '') +
				(f.t ? '<text class="ca-lt" x="' + (mx + (f.tx || 0)) + '" y="' + (my - 9 + (f.ty || 0)) + '">' + esc(f.t) + '</text>' : '') + '</g>';
		});
		(a.nodes || []).forEach(function (n) {
			var g = String(n[2] || ''), img = /\.svg$/.test(g);
			s += '<g class="ca-node ' + (n[4] || '') + '" transform="translate(' + n[0] + ' ' + n[1] + ')"><rect x="-22" y="-20" width="44" height="40" rx="9"/>' +
				(img ? '<image href="' + g + '" x="-14" y="-14" width="28" height="28"/>' : '<text class="ca-g" y="7">' + esc(g) + '</text>') +
				(n[3] ? '<text class="ca-l" y="' + (n[5] === 'up' ? -28 : 37) + '">' + esc(n[3]) + '</text>' : '') + '</g>';
		});
		return s + '</svg>';
	}

	function build(o) {
		injectCss();
		var opts = o.options, N = opts.length, text = o.text || {};
		var active = Math.min(Math.max(o.start || 0, 0), N - 1);
		var root = div('ch');
		root.style.width = (o.width || 1100) + 'px';
		root.setAttribute('role', 'group');
		if (o.label) root.setAttribute('aria-label', o.label);

		var ask = div('ch-ask', ARROW + (o.ask || '') + (text.hint ? ' <span>' + text.hint + '</span>' : ''));
		var tabs = div('ch-tabs');
		tabs.style.gridTemplateColumns = 'repeat(' + N + ',minmax(0,1fr))';
		var tabEls = opts.map(function (p, i) {
			var b = document.createElement('button');
			b.type = 'button';
			b.className = 'ch-tab ' + tone(p.tone);
			b.setAttribute('aria-pressed', 'false');
			b.innerHTML = (p.icon ? '<span class="ch-ti" aria-hidden="true">' + p.icon + '</span>' : '') +
				'<span class="ch-tt"><span class="ch-need">' + (p.need || p.name) + '</span>' +
				(p.need ? '<span class="ch-name">' + p.name + '</span>' : '') + '</span>';
			b.addEventListener('click', function (e) { e.stopPropagation(); select(i); });
			// page keyboards bind Space/Enter to "next step"; here they belong to the button
			b.addEventListener('keydown', function (e) { if (e.code === 'Space' || e.code === 'Enter') e.stopPropagation(); });
			tabs.appendChild(b); return b;
		});

		var panel = div('ch-panel');
		panel.setAttribute('aria-live', 'polite');
		function panelHTML(i) {
			var p = opts[i], line = p.line ? '<p class="ch-line">' + p.line + '</p>' : '';
			// with a picture, the picture sits under the heading and the description leads the right column
			return '<div class="ch-il">' + (p.kind ? '<span class="ch-badge">' + p.kind + '</span>' : '') +
				'<h3>' + p.name + '</h3>' + (p.art ? '' : line) + (p.side || '') + (p.art ? artSVG(p.art) : '') + '</div>' +
				'<div class="ch-ir">' + (p.art ? line : '') + (p.when && p.when.length ? '<span class="ch-wh">' + (text.when || 'Choose it when') + '</span><ul>' +
				p.when.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' : '') +
				(p.watch ? '<p class="ch-watch"><b>' + (text.watch || 'Watch out:') + '</b> ' + p.watch + '</p>' : '') + '</div>';
		}
		function setTone(el, i) { TONES.forEach(function (t) { el.classList.remove('is-' + t); }); el.classList.add(tone(opts[i].tone)); }

		var table = null, cap = null, rowEls = [];
		if (o.matrix && o.matrix.rows && o.matrix.rows.length) {
			if (o.matrix.caption) cap = div('ch-cap', o.matrix.caption);
			table = div('ch-mx', null, 'table');
			var html = '<colgroup><col style="width:' + (o.matrix.labelWidth || 22) + '%">' + opts.map(function () { return '<col>'; }).join('') + '</colgroup>' +
				'<thead><tr><th scope="col"></th>' + opts.map(function (p, i) { return '<th scope="col" class="' + tone(p.tone) + '" data-c="' + i + '">' + p.name + '</th>'; }).join('') + '</tr></thead><tbody>' +
				o.matrix.rows.map(function (r) {
					return '<tr><th scope="row">' + r.label + '</th>' + r.cells.map(function (c, i) {
						return '<td class="' + tone(opts[i].tone) + '" data-c="' + i + '">' + c + '</td>';
					}).join('') + '</tr>';
				}).join('') + '</tbody>';
			table.innerHTML = html;
			rowEls = [].slice.call(table.querySelectorAll('tbody tr'));
		}

		// reserve the tallest panel (in rem, so A−/A+ scales it) — switching options never resizes the scene
		function reserve() {
			panel.style.minHeight = '';
			var max = 0;
			for (var i = 0; i < N; i++) { setTone(panel, i); panel.innerHTML = panelHTML(i); max = Math.max(max, panel.offsetHeight); }
			var rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
			if (max) panel.style.minHeight = (max / rem) + 'rem';
		}
		// boxes → nodes → each line draws in, and only then its arrowhead and label appear
		var artTl = null;
		function drawArt() {
			var svg = panel.querySelector('.ch-art');
			if (artTl) { artTl.kill(); artTl = null; }
			if (!svg || !window.gsap || o.reducedMotion) return;
			var q = function (s) { return [].slice.call(svg.querySelectorAll(s)); };
			var boxes = q('.ca-box'), nodes = q('.ca-node'), groups = q('.ca-lg');
			artTl = gsap.timeline();
			if (boxes.length) artTl.fromTo(boxes, { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.08 });
			if (nodes.length) artTl.fromTo(nodes, { opacity: 0 }, { opacity: 1, duration: 0.28, stagger: 0.09, ease: 'power2.out' }, '-=0.1');
			groups.forEach(function (g) {
				var line = g.querySelector('.ca-link'), rest = [].slice.call(g.querySelectorAll('.ca-head,.ca-x,.ca-lt')), len = +line.getAttribute('data-len');
				gsap.set(rest, { opacity: 0 });
				if (line.classList.contains('dash')) artTl.fromTo(line, { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.05');
				else artTl.fromTo(line, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 0.45, ease: 'power1.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, '-=0.05');
				if (rest.length) artTl.to(rest, { opacity: 1, duration: 0.2 });
			});
		}
		function select(i) {
			active = i;
			reserve();
			tabEls.forEach(function (b, k) { b.setAttribute('aria-pressed', k === i ? 'true' : 'false'); });
			setTone(panel, i);
			panel.innerHTML = panelHTML(i);
			drawArt();
			if (table) [].forEach.call(table.querySelectorAll('[data-c]'), function (c) { c.classList.toggle('is-on', +c.getAttribute('data-c') === i); });
			if (o.onSelect) o.onSelect(i);
		}

		root.appendChild(ask); root.appendChild(tabs); root.appendChild(panel);
		if (cap) root.appendChild(cap);
		if (table) root.appendChild(table);

		function play(tl) {
			var head = table ? table.querySelector('thead tr') : null;
			gsap.set([ask, panel].concat(tabEls, head ? [head] : [], cap ? [cap] : [], rowEls), { opacity: 0 });
			tl.fromTo(ask, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.1');
			tl.fromTo(tabEls, { opacity: 0, y: 12, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.34, stagger: 0.1, ease: 'back.out(1.4)', clearProps: 'transform' }, '-=0.1');
			tl.fromTo(panel, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.42, ease: 'power2.out' }, '-=0.05');
			tl.call(drawArt, null, '-=0.2');
			if (head) tl.fromTo(cap ? [cap, head] : head, { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.1');
			if (rowEls.length) tl.fromTo(rowEls, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.28, stagger: 0.07, ease: 'power2.out', clearProps: 'transform' }, '-=0.1');
			return tl;
		}
		function showAll() {
			if (window.gsap) gsap.set([ask, panel].concat(tabEls, rowEls, cap ? [cap] : [], table ? [table.querySelector('thead tr')] : []), { opacity: 1 });
		}
		function autoplay(ms) {
			var iv = setInterval(function () { select((active + 1) % N); }, ms || 5000);
			return { kill: function () { clearInterval(iv); } };
		}

		return { el: root, tabs: tabEls, panel: panel, select: select, play: play, showAll: showAll, autoplay: autoplay,
			get active() { return active; } };
	}

	window.AWChooser = { build: build };
})();
