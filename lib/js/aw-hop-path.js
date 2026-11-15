/* aw-hop-path.js — the "trace the path" diagram: zones, clickable hops joined by connector lines,
   and one info panel that explains the selected hop. Pages describe geometry + text only; the markup,
   styles, panel sizing, keyboard guard, reveal animation and presenter autoplay all live here.

   const hp = AWHopPath.build({
     width, height, label,                          // px canvas + accessible name
     zones:  [{ x,y,w,h, tone, label, icon }],       // dashed boundaries (label/icon are HTML)
     labels: [{ x,y,w, html, after }],               // free text on the canvas (after = reveal after hop index)
     hops:   [{ x,y,w,h, tone, icon, title, sub, shape:'card'|'pill' }],
     links:  [{ pts:[[x,y],...], tone, dash, after }],  // after defaults to the link's own index
     tags:   [{ x,y, text, tone, after }],           // small pills centred on a point (e.g. on a line)
     panel:  i => ({ badge, title, line, points:[], watch }),
     text:   { hop:'Hop', watch:'Watch out:', hint:'Select any hop…' },
     start:  0, reducedMotion:false, onSelect:i=>{}
   });
   scene.appendChild(hp.el); mount(scene); hp.select(i);   // select() after the element is in the DOM
   hp.play(gsapTimeline);          // or hp.showAll() when motion is off
   const h = hp.autoplay(4500);    // presenter view: cycles hops; returns { kill } */
(function () {
	if (window.AWHopPath) return;
	var NS = 'http://www.w3.org/2000/svg';
	var TONES = ['grey', 'orange', 'purple', 'blue', 'green', 'red', 'teal'];

	var CSS =
		'.hp{--hp-grey:#5d6270;--hp-orange:#b0520f;--hp-purple:#5c2d91;--hp-blue:#0063b1;--hp-green:#0b7a5d;--hp-red:#b3261e;--hp-teal:#0f6c78;' +
		'--hp-card:var(--theme-card-background,#fff);display:flex;flex-direction:column;align-items:center;gap:1.1rem;' +
		// the in-stage player chips float over the stage's bottom corners; keep the panel above them
		'padding-bottom:2.8rem;}' +
		'body.theme-dark .hp{--hp-grey:#c3c7d1;--hp-orange:#ffa257;--hp-purple:#c9a5e8;--hp-blue:#6cb8ff;--hp-green:#3ecf9a;--hp-red:#ff8a80;--hp-teal:#5fd4de;' +
		'--hp-card:color-mix(in srgb,var(--theme-text) 7%,var(--theme-body-background));}' +
		TONES.map(function (t) { return '.hp .is-' + t + '{--acc:var(--hp-' + t + ');}'; }).join('') +
		'.hp-map{position:relative;flex:none;}' +
		'.hp-svg{position:absolute;inset:0;overflow:visible;z-index:1;pointer-events:none;}' +
		'.hp-svg>path{fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;}' +
		'.hp-svg>path.is-dash{stroke-dasharray:7 6;}' +
		'.hp-zone{position:absolute;z-index:0;box-sizing:border-box;border-radius:14px;' +
		'border:1.5px dashed var(--acc,var(--hp-grey));background:color-mix(in srgb,var(--acc,var(--hp-grey)) 6%,transparent);}' +
		'.hp-zl{position:absolute;top:-12px;left:14px;display:inline-flex;align-items:center;gap:0.35rem;padding:0 0.5rem;' +
		'font-size:0.9rem;font-weight:600;white-space:nowrap;background:var(--theme-body-background);color:var(--theme-text);}' +
		'.hp-zl img{width:18px;height:18px;}' +
		'.hp-lbl{position:absolute;z-index:2;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:0.1rem;text-align:center;}' +
		'.hp-lbl b{font-size:1rem;font-weight:600;}' +
		'.hp-lbl span{font-size:0.9rem;line-height:1.3;color:var(--theme-text-subtle);}' +
		'.hp-lbl svg{width:26px;height:26px;fill:var(--theme-text-subtle);}' +
		'.hp-tag{position:absolute;z-index:3;transform:translate(-50%,-50%);white-space:nowrap;padding:0.16rem 0.55rem;border-radius:999px;' +
		'font-size:0.85rem;font-weight:500;background:var(--theme-body-background);color:var(--acc,var(--theme-text-subtle));' +
		'border:1.5px solid var(--acc,var(--theme-border));}' +
		'.hp-hop{position:absolute;z-index:2;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;align-items:center;' +
		'justify-content:center;gap:0.15rem;padding:0.5rem;text-align:center;font:inherit;color:var(--theme-text);border-radius:12px;' +
		'border:2px solid var(--acc);background:var(--hp-card);box-shadow:0 4px 14px rgba(0,0,0,0.12);' +
		'transition:box-shadow .15s ease,background-color .15s ease;}' +
		'.hp-hop:hover{box-shadow:0 0 0 3px color-mix(in srgb,var(--acc) 22%,transparent),0 6px 18px rgba(0,0,0,0.14);}' +
		'.hp-hop[aria-pressed="true"]{background:color-mix(in srgb,var(--acc) 15%,var(--hp-card));' +
		'box-shadow:0 0 0 4px color-mix(in srgb,var(--acc) 34%,transparent),0 6px 18px rgba(0,0,0,0.14);}' +
		'.hp-hop:focus-visible{outline:3px solid var(--theme-text);outline-offset:4px;}' +
		'.hp-ic{display:inline-flex;align-items:center;justify-content:center;font-size:1.8rem;line-height:1.1;}' +
		'.hp-ic img{width:34px;height:34px;}' +
		'.hp-ic svg{width:24px;height:24px;fill:var(--acc);}' +
		'.hp-ht{font-size:1.05rem;font-weight:600;line-height:1.2;}' +
		'.hp-hs{font-size:0.88rem;line-height:1.3;color:var(--theme-text-subtle);overflow-wrap:anywhere;}' +
		'.hp-no{position:absolute;top:-11px;left:-11px;width:24px;height:24px;border-radius:50%;display:grid;place-items:center;' +
		'font-size:0.8rem;font-weight:700;background:var(--acc);color:var(--theme-body-background);}' +
		'.hp-hop.is-pill{flex-direction:row;gap:0.65rem;border-radius:999px;}' +
		'.hp-hop.is-pill .hp-ic img{width:28px;height:28px;}' +
		'.hp-htx{display:flex;flex-direction:column;align-items:flex-start;text-align:left;}' +
		'.hp-hint{display:flex;align-items:center;gap:0.4rem;margin:-0.35rem 0 -0.4rem;font-size:0.92rem;color:color-mix(in srgb,var(--theme-text) 82%,transparent);}' +
		'.hp-hint svg{width:18px;height:18px;fill:currentColor;}' +
		'.hp-info{box-sizing:border-box;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:0.6rem 1.6rem;' +
		'align-content:center;padding:0.85rem 1.2rem;border-radius:14px;border:2px solid var(--acc);background:var(--hp-card);' +
		'box-shadow:0 6px 22px rgba(0,0,0,0.12);}' +
		'.hp-il{display:flex;flex-direction:column;gap:0.45rem;min-width:0;}' +
		'.hp-badge{align-self:flex-start;font-size:0.8rem;font-weight:500;padding:0.2rem 0.65rem;border-radius:999px;' +
		'border:1.5px solid var(--acc);color:var(--acc);}' +
		'.hp-il h3{margin:0;font-size:1.2rem;font-weight:700;line-height:1.25;color:var(--acc);}' +
		'.hp-il p{margin:0;font-size:0.95rem;line-height:1.5;color:var(--theme-text);}' +
		'.hp-ir{min-width:0;}' +
		'.hp-ir ul{margin:0;padding-left:1.1rem;list-style:disc;display:flex;flex-direction:column;gap:0.3rem;}' +
		'.hp-ir li{display:list-item;font-size:0.95rem;line-height:1.45;color:var(--theme-text);}' +
		'.hp-ir li::marker{color:var(--acc);}' +
		'.hp-ir code,.hp-il code,.hp-hs code{font-family:"Cascadia Code",Consolas,monospace;font-size:0.92em;}' +
		'.hp-watch{margin:0.6rem 0 0;padding:0.55rem 0.75rem;border-radius:10px;font-size:0.92rem;line-height:1.45;' +
		'border:1.5px solid var(--theme-border);background:color-mix(in srgb,var(--theme-text) 4%,transparent);}' +
		'.hp-watch b{font-weight:600;color:var(--hp-red);}';

	var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 5l7 7-7 7v-4H4v-6h9z"/></svg>';
	var seq = 0;

	function injectCss() {
		if (document.getElementById('aw-hop-path-style')) return;
		var s = document.createElement('style');
		s.id = 'aw-hop-path-style';
		s.textContent = CSS;
		document.head.appendChild(s);
	}
	function div(cls, html) { var d = document.createElement('div'); d.className = cls; if (html != null) d.innerHTML = html; return d; }
	function tone(t) { return 'is-' + (TONES.indexOf(t) > -1 ? t : 'grey'); }
	function place(d, o) {
		d.style.left = o.x + 'px'; d.style.top = o.y + 'px';
		if (o.w) d.style.width = o.w + 'px';
		if (o.h) d.style.height = o.h + 'px';
		return d;
	}

	function build(o) {
		injectCss();
		var W = o.width, H = o.height, text = o.text || {};
		var root = div('hp');
		var map = div('hp-map');
		map.style.width = W + 'px'; map.style.height = H + 'px';
		map.setAttribute('role', 'group');
		if (o.label) map.setAttribute('aria-label', o.label);

		var zones = (o.zones || []).map(function (z) {
			var d = place(div('hp-zone ' + tone(z.tone), '<span class="hp-zl">' + (z.icon || '') + '<span>' + z.label + '</span></span>'), z);
			map.appendChild(d); return d;
		});

		var svg = document.createElementNS(NS, 'svg');
		svg.setAttribute('class', 'hp-svg'); svg.setAttribute('width', W); svg.setAttribute('height', H);
		svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
		var uid = 'hp' + (++seq), used = {};
		var defs = document.createElementNS(NS, 'defs'); svg.appendChild(defs);
		function marker(tn) {
			if (used[tn]) return used[tn];
			var id = uid + '-' + tn, m = document.createElementNS(NS, 'marker');
			m.setAttribute('id', id); m.setAttribute('markerWidth', '8'); m.setAttribute('markerHeight', '8');
			m.setAttribute('refX', '7'); m.setAttribute('refY', '4'); m.setAttribute('orient', 'auto');
			var p = document.createElementNS(NS, 'path');
			p.setAttribute('d', 'M0,0 L0,8 L8,4 Z');
			p.style.fill = tn ? 'var(--hp-' + tn + ')' : 'var(--theme-text-subtle)';
			m.appendChild(p); defs.appendChild(m);
			return (used[tn] = id);
		}
		var links = (o.links || []).map(function (l, k) {
			var p = document.createElementNS(NS, 'path');
			p.setAttribute('d', l.pts.map(function (pt, i) { return (i ? 'L' : 'M') + pt[0] + ',' + pt[1]; }).join(' '));
			p.style.stroke = l.tone ? 'var(--hp-' + l.tone + ')' : 'var(--theme-text-subtle)';
			if (l.dash) p.setAttribute('class', 'is-dash');
			p._marker = l.arrow !== false ? 'url(#' + marker(l.tone || '') + ')' : null;
			if (p._marker) p.setAttribute('marker-end', p._marker);
			p._after = l.after != null ? l.after : k;
			svg.appendChild(p); return p;
		});
		map.appendChild(svg);

		var labels = (o.labels || []).map(function (l) {
			var d = place(div('hp-lbl', l.html), l); d._after = l.after != null ? l.after : -1;
			map.appendChild(d); return d;
		});
		var tags = (o.tags || []).map(function (g) {
			var d = div('hp-tag ' + tone(g.tone)); d.textContent = g.text;
			d.style.left = g.x + 'px'; d.style.top = g.y + 'px'; d._after = g.after != null ? g.after : -1;
			map.appendChild(d); return d;
		});

		var N = o.hops.length, active = Math.min(Math.max(o.start || 0, 0), N - 1);
		var hops = o.hops.map(function (h, i) {
			var b = document.createElement('button');
			b.type = 'button';
			b.className = 'hp-hop ' + tone(h.tone) + (h.shape === 'pill' ? ' is-pill' : '');
			b.setAttribute('aria-pressed', 'false');
			var no = '<span class="hp-no" aria-hidden="true">' + (i + 1) + '</span>';
			var ic = h.icon ? '<span class="hp-ic" aria-hidden="true">' + h.icon + '</span>' : '';
			var tx = '<span class="hp-ht">' + h.title + '</span>' + (h.sub ? '<span class="hp-hs">' + h.sub + '</span>' : '');
			b.innerHTML = no + ic + (h.shape === 'pill' ? '<span class="hp-htx">' + tx + '</span>' : tx);
			place(b, h);
			b.addEventListener('click', function (e) { e.stopPropagation(); select(i, true); });
			// page keyboards bind Space/Enter to "next step"; here they belong to the button
			b.addEventListener('keydown', function (e) { if (e.code === 'Space' || e.code === 'Enter') e.stopPropagation(); });
			map.appendChild(b); return b;
		});

		var hint = div('hp-hint', ARROW + '<span>' + (text.hint || '') + '</span>');
		var info = div('hp-info');
		info.style.width = (o.panelWidth || W) + 'px';
		info.setAttribute('aria-live', 'polite');

		function panelHTML(i) {
			var p = o.panel(i) || {};
			return '<div class="hp-il"><span class="hp-badge">' + (text.hop || 'Hop') + ' ' + (i + 1) + ' / ' + N +
				(p.badge ? ' \u00b7 ' + p.badge : '') + '</span><h3>' + (p.title || '') + '</h3>' +
				(p.line ? '<p>' + p.line + '</p>' : '') + '</div>' +
				'<div class="hp-ir"><ul>' + (p.points || []).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
				(p.watch ? '<p class="hp-watch"><b>' + (text.watch || 'Watch out:') + '</b> ' + p.watch + '</p>' : '') + '</div>';
		}
		function setTone(i) {
			TONES.forEach(function (t) { info.classList.remove('is-' + t); });
			info.classList.add(tone(o.hops[i].tone));
		}
		// reserve the tallest panel (in rem, so A−/A+ scales it) — switching hops never resizes the scene
		function reserve() {
			info.style.minHeight = '';
			var max = 0;
			for (var i = 0; i < N; i++) { setTone(i); info.innerHTML = panelHTML(i); max = Math.max(max, info.offsetHeight); }
			var root = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
			if (max) info.style.minHeight = (max / root) + 'rem';
		}
		function select(i, animate) {
			active = i;
			reserve();
			hops.forEach(function (b, k) { b.setAttribute('aria-pressed', k === i ? 'true' : 'false'); });
			setTone(i);
			info.innerHTML = panelHTML(i);
			if (animate && !o.reducedMotion && window.gsap)
				gsap.fromTo(info.children, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.06, ease: 'power2.out' });
			if (o.onSelect) o.onSelect(i);
		}

		root.appendChild(map); root.appendChild(hint); root.appendChild(info);

		// build the path in order: each hop pops, then the lines and labels that leave it draw in
		function play(tl) {
			var after = function (list, i) { return list.filter(function (x) { return x._after === i; }); };
			var early = after(labels, -1).concat(after(tags, -1));
			gsap.set(zones.concat(labels, tags, hops, [hint, info]), { opacity: 0 });
			// markers ignore stroke-dash, so an arrowhead would paint before its line: park it until the draw lands
			links.forEach(function (p) { var len = p.getTotalLength(); gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 0, attr: { 'marker-end': 'none' } }); });
			if (zones.length) tl.to(zones, { opacity: 1, duration: 0.36, stagger: 0.1, ease: 'power2.out' }, '-=0.1');
			if (early.length) tl.to(early, { opacity: 1, duration: 0.35, stagger: 0.08 }, '-=0.15');
			hops.forEach(function (b, i) {
				if (b.classList.contains('is-pill'))
					tl.fromTo(b, { opacity: 0, clipPath: 'inset(0 100% 0 0 round 999px)' },
						{ opacity: 1, clipPath: 'inset(0 0% 0 0 round 999px)', duration: 0.6, ease: 'power2.inOut', clearProps: 'clipPath' });
				else
					tl.fromTo(b, { opacity: 0, y: 10, scale: 0.95 },
						{ opacity: 1, y: 0, scale: 1, duration: 0.32, ease: 'back.out(1.4)', clearProps: 'transform' }, i ? '-=0.05' : '-=0.1');
				after(links, i).forEach(function (p) {
					tl.set(p, { opacity: 0.95 });
					tl.to(p, { strokeDashoffset: 0, duration: 0.3, ease: 'power1.inOut', clearProps: 'strokeDasharray,strokeDashoffset' });
					if (p._marker) tl.set(p, { attr: { 'marker-end': p._marker } });
				});
				var extra = after(labels, i).concat(after(tags, i));
				if (extra.length) tl.to(extra, { opacity: 1, duration: 0.3 }, '-=0.1');
			});
			tl.fromTo([hint, info], { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.12, ease: 'power2.out' }, '-=0.05');
			return tl;
		}
		function showAll() {
			if (!window.gsap) return;
			gsap.set(zones.concat(labels, tags, hops, [hint, info]), { opacity: 1 });
			links.forEach(function (p) { gsap.set(p, { opacity: 0.95, clearProps: 'strokeDasharray,strokeDashoffset' }); if (p._marker) p.setAttribute('marker-end', p._marker); });
		}
		function autoplay(ms) {
			var iv = setInterval(function () { select((active + 1) % N, true); }, ms || 4500);
			return { kill: function () { clearInterval(iv); } };
		}

		return { el: root, map: map, hops: hops, info: info, select: select, play: play, showAll: showAll, autoplay: autoplay,
			get active() { return active; } };
	}

	window.AWHopPath = { build: build };
})();
