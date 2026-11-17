/* Hub page, design 3: the cozy "management game" floor plan, one department per hub.
   Mirrors index-3.html (same palette, props and chibi workers). Every lesson is a desk station; the layout
   adapts to the lesson count (bays on both sides of a central corridor, 4 .. 42+ lessons) and to narrow screens.
   Contract: lib/js/aw-office-hub.js. Defines window.AWHubDesign[3](api); called again on every language change. */
(function (global) {
	'use strict';
	global.AWHubDesign = global.AWHubDesign || {};

	var CW = 124, PITCH = 134, BB = 212, R0 = 292, SIGN_Y = 34, MOBILE_PX = 760;
	var last = { api: null, mobile: null };

	/* ---------- scene CSS (injected once; light / dark through the body theme class) ---------- */
	var CSS = [
		'#ao-scene svg.d3 { display:block; width:100%; height:auto; overflow:visible; margin:0 auto; }',
		'.d3 { --paper:#fbf3e2; --hall:#f6ecd8; --hall-ln:#e8dabb; --wall:#fffaf0; --wall-edge:#cbbb98; --ln:#6b5a48; --tile:rgba(255,255,255,.55);',
		'	--desk:#dba66c; --desk-hi:#ecc08a; --chair:#8b93b4; --metal:#d3d9e6; --metal-d:#9aa3bb; --rack:#444c66; --rack-2:#2f3550; --screen:#26304a;',
		'	--page:#fffdf6; --leaf:#58b977; --leaf-2:#3a9a5c; --pot:#e08b60; --shd:rgba(70,50,20,.17); --board:#2f7a62; --wood:#b7824f; --chalk:#f4f7ee;',
		'	--wb:#ffffff; --win:#bfe6ff; --win-glow:transparent; --robot:#f4fbff; --sea:#7ec8ee; --land:#79c58a; --cloud:#ffffff; --db:#ffe1c4;',
		'	--glass:#8fd0ff; --rug:rgba(255,255,255,.42); --lamp:0; --glowfx:none; --pkg:#d9a066; --vault:#aeb7cc; }',
		'body.theme-dark .d3 { --paper:#171f3c; --hall:#1a2342; --hall-ln:#222d55; --wall:#3a4572; --wall-edge:#0f1530; --ln:#0b1022; --tile:rgba(255,255,255,.055);',
		'	--desk:#8a6a4e; --desk-hi:#a68062; --chair:#4a5380; --metal:#7b86a8; --metal-d:#4e5878; --rack:#2a3252; --rack-2:#1b2142; --screen:#0f2a44;',
		'	--page:#e8e4d6; --leaf:#3f9a62; --leaf-2:#2b7a4a; --pot:#b86a48; --shd:rgba(0,0,0,.38); --board:#1c4a40; --wood:#7d5a3a; --chalk:#e8efe0;',
		'	--wb:#e9edf8; --win:#ffcf70; --win-glow:rgba(255,196,90,.85); --robot:#dff1ff; --sea:#3b7fb0; --land:#4aa66a; --cloud:#e9efff; --db:#e8c9a8;',
		'	--glass:#9fe0ff; --rug:rgba(255,255,255,.08); --lamp:1; --glowfx:drop-shadow(0 0 5px rgba(120,200,255,.7)); --pkg:#b98550; --vault:#6c7799; }',
		'.d3 .ln { stroke:var(--ln); stroke-width:1.7; stroke-linejoin:round; stroke-linecap:round; }',
		'.d3 .desk { fill:var(--desk); } .d3 .deskhi { fill:var(--desk-hi); } .d3 .chair { fill:var(--chair); }',
		'.d3 .metal { fill:var(--metal); } .d3 .metal2 { fill:var(--metal-d); }',
		'.d3 .rack { fill:var(--rack); } .d3 .rack2 { fill:var(--rack-2); } .d3 .screen { fill:var(--screen); }',
		'.d3 .paper { fill:var(--page); } .d3 .leaf { fill:var(--leaf); } .d3 .leaf2 { fill:var(--leaf-2); } .d3 .pot { fill:var(--pot); }',
		'.d3 .shd { fill:var(--shd); } .d3 .wood { fill:var(--wood); } .d3 .robot { fill:var(--robot); } .d3 .wb { fill:var(--wb); }',
		'.d3 .zc { fill:var(--zc); } .d3 .zcs { fill:color-mix(in srgb, var(--zc) 40%, var(--paper)); }',
		'body.theme-dark .d3 .zcs { fill:color-mix(in srgb, var(--zc) 62%, #fff); }',
		'.d3 .rug { fill:color-mix(in srgb, var(--zc) 30%, var(--paper)); opacity:.85; }',
		'.d3 .glass { fill:var(--glass); }',
		'.d3 .lg { fill:#3ddc84; } .d3 .la { fill:#ffb020; } .d3 .lr { fill:#ff5d5d; } .d3 .lb { fill:#4fc3ff; }',
		'.d3 .chalk { fill:var(--chalk); font:700 14px "Segoe UI",sans-serif; }',
		'.d3 .chalk-s { fill:none; stroke:var(--chalk); stroke-width:2.2; stroke-linecap:round; stroke-linejoin:round; opacity:.9; }',
		'.d3 .logo-dot { fill:var(--glass); }',
		'.d3-lamp { opacity:var(--lamp); pointer-events:none; }',
		'.d3 .glowy { filter:var(--glowfx); }',
		'.d3 .bld-shadow { fill:rgba(60,40,10,.16); } body.theme-dark .d3 .bld-shadow { fill:rgba(0,0,0,.45); }',
		'.d3 .floor { fill:color-mix(in srgb, var(--zc) 24%, var(--paper)); }',
		'body.theme-dark .d3 .floor { fill:color-mix(in srgb, var(--zc) 22%, #151c38); }',
		'.d3 .tile { fill:none; stroke:var(--tile); stroke-width:1.2; } .d3 .chk { fill:var(--tile); opacity:.8; }',
		'.d3 .wall-e { fill:none; stroke:var(--wall-edge); stroke-width:16; stroke-linejoin:round; stroke-linecap:round; }',
		'.d3 .wall { fill:none; stroke:var(--wall); stroke-width:9; stroke-linejoin:round; stroke-linecap:round; }',
		'.d3 .runner { fill:color-mix(in srgb, #e6a64a 17%, var(--hall)); }',
		'.d3 .runner-ln { fill:none; stroke:color-mix(in srgb, #e6a64a 40%, var(--hall)); stroke-width:2; stroke-dasharray:3 6; stroke-linecap:round; }',
		'.d3 .mat { fill:color-mix(in srgb, var(--zc) 55%, var(--paper)); stroke:var(--ln); stroke-width:1.4; opacity:.9; }',
		'.d3 .win { fill:var(--win); stroke:var(--ln); stroke-width:1.4; filter:drop-shadow(0 0 4px var(--win-glow)); }',
		'.d3 .sign { fill:color-mix(in srgb, var(--zc) 76%, #2a1d12); stroke:color-mix(in srgb, var(--zc) 40%, #1b1208); stroke-width:1.8; }',
		'body.theme-dark .d3 .sign { fill:color-mix(in srgb, var(--zc) 78%, #0b1022); }',
		'.d3 .sign-t { fill:#fff; font-family:"Segoe UI",sans-serif; font-weight:800; text-anchor:middle; }',
		'.d3 .sign-s { fill:#fff; opacity:.86; font-family:"Segoe UI",sans-serif; font-weight:600; text-anchor:middle; letter-spacing:.06em; }',
		'.d3 .boardf { fill:var(--board); stroke:var(--wood); stroke-width:4; }',
		'.d3 .pill { fill:#f2b705; stroke:#8a5d00; stroke-width:1.8; }',
		'.d3 .pill-t { fill:#3a2600; font-family:"Segoe UI",sans-serif; font-weight:800; text-anchor:middle; }',
		'.d3 .legend-t { fill:var(--ln); font:700 13px "Segoe UI",sans-serif; opacity:.75; }',
		'body.theme-dark .d3 .legend-t { fill:#c8d2f2; opacity:.7; }',
		'.d3 .badge { fill:color-mix(in srgb, var(--zc) 80%, #14213d); stroke:#fff; stroke-width:2.6; }',
		'.d3 .badge-t { fill:#fff; font-family:"Segoe UI",sans-serif; font-weight:800; text-anchor:middle; }',
		/* stations */
		'.d3 .d3-st { cursor:pointer; outline:none; }',
		'.d3 .d3-lift { transition:transform .22s var(--ao-ease), filter .22s var(--ao-ease); transform-box:fill-box; transform-origin:50% 70%; }',
		'.d3 .d3-pad { fill:var(--zc); opacity:0; stroke:var(--zc); stroke-width:2; stroke-dasharray:6 5; stroke-opacity:.0; transition:opacity .2s, stroke-opacity .2s; pointer-events:none; }',
		'.d3 .d3-st.is-active .d3-pad, .d3 .d3-st:focus-visible .d3-pad { opacity:.2; stroke-opacity:.9; }',
		'.d3 .d3-st.is-active .d3-lift { transform:translateY(-5px) scale(1.06); filter:drop-shadow(0 10px 10px color-mix(in srgb, var(--zc) 60%, transparent)); }',
		'.d3 .d3-st.is-active .badge { fill:var(--zc); }',
		'.d3 .walkers { pointer-events:none; }',
		/* motion */
		'.d3 .d3-bob { animation:d3Bob 2.6s ease-in-out infinite; }',
		'.d3 .d3-fl { animation:aoFloat 3.6s ease-in-out infinite; }',
		'.d3 .d3-spin-r { animation:d3Spin 24s linear infinite reverse; transform-box:fill-box; transform-origin:center; }',
		'.d3 .d3-dash { stroke-dasharray:5 5; animation:d3Dash .9s linear infinite; }',
		'.d3 .d3-flow { stroke-dasharray:6 8; animation:d3Dash 1.1s linear infinite; }',
		'.d3 .d3-wave { animation:d3Wave .9s ease-in-out infinite; transform-box:fill-box; transform-origin:20% 15%; }',
		'.d3 .d3-mer { animation:d3Mer 4.5s ease-in-out infinite alternate; transform-box:fill-box; transform-origin:center; }',
		'.d3 .d3-glowp { animation:d3Glow 2.8s ease-in-out infinite; transform-box:fill-box; transform-origin:center; }',
		'.d3 .d3-slide { animation:d3hSlide 7s ease-in-out infinite alternate; }',
		'.d3 .d3-arrow { animation:d3Arrow 1.1s ease-in-out infinite; }',
		'.d3 .d3-pk { animation:d3Pk 1.9s linear infinite; }',
		'.d3 .d3-pk.first { animation-name:d3PkIn; } .d3 .d3-pk.last { animation-name:d3PkOut; }',
		'@keyframes d3Bob { 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-3px);} }',
		'@keyframes d3Spin { to { transform:rotate(360deg);} }',
		'@keyframes d3Dash { to { stroke-dashoffset:-20; } }',
		'@keyframes d3Wave { 0%,100%{ transform:rotate(0);} 50%{ transform:rotate(-28deg);} }',
		'@keyframes d3Mer { from{ transform:scaleX(1);} to{ transform:scaleX(.25);} }',
		'@keyframes d3Glow { 0%,100%{ transform:scale(1); opacity:.5;} 50%{ transform:scale(1.14); opacity:.9;} }',
		'@keyframes d3hSlide { 0%,35%{ transform:translateX(0);} 65%,100%{ transform:translateX(47px);} }',
		'@keyframes d3Arrow { 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-7px);} }',
		'@keyframes d3Pk { from{ transform:translateX(0);} to{ transform:translateX(34px);} }',
		'@keyframes d3PkIn { from{ transform:translateX(0); opacity:0;} to{ transform:translateX(34px); opacity:1;} }',
		'@keyframes d3PkOut { from{ transform:translateX(0); opacity:1;} to{ transform:translateX(34px); opacity:0;} }'
	].join('\n');

	/* ---------- tiny SVG helpers (same vocabulary as index-3.html) ---------- */
	function at(cls, st) { return (cls ? ' class="' + cls + '"' : '') + (st ? ' style="' + st + '"' : ''); }
	function rect(x, y, w, h, r, cls, st) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '"' + at(cls, st) + '/>'; }
	function circ(x, y, r, cls, st) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '"' + at(cls, st) + '/>'; }
	function ell(x, y, rx, ry, cls, st) { return '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '"' + at(cls, st) + '/>'; }
	function path(d, cls, st) { return '<path d="' + d + '"' + at(cls, st) + '/>'; }
	function g(trf, inner, cls, st) { return '<g' + (trf ? ' transform="' + trf + '"' : '') + at(cls, st) + '>' + inner + '</g>'; }
	function text(x, y, t, cls, st) { return '<text x="' + x + '" y="' + y + '"' + at(cls, st) + '>' + t + '</text>'; }
	function tr(x, y, s) { return 'translate(' + x + ' ' + y + ')' + (s && s !== 1 ? ' scale(' + s + ')' : ''); }
	function led(x, y, color, delay, r) { return circ(x, y, r || 1.8, color + ' ao-blink', 'animation-delay:' + delay + 's'); }
	function r1(v) { return Math.round(v * 10) / 10; }

	var ctx = document.createElement('canvas').getContext('2d');
	function measure(t, fs, w) {
		if (ctx) { ctx.font = (w || 700) + ' ' + fs + "px 'Segoe UI', sans-serif"; return ctx.measureText(t).width; }
		var n = 0; for (var i = 0; i < t.length; i++) n += t.charCodeAt(i) > 0x2e80 ? 1 : 0.6; return n * fs;
	}

	/* ---------- shared props ---------- */
	function plant(x, y, s) {
		return g(tr(x, y, s), ell(0, 15, 12, 3.5, 'shd') + path('M-8 4h16l-2.4 11h-11.2z', 'pot ln') + circ(0, -3, 10, 'leaf ln') +
			circ(-7, -6, 7, 'leaf2 ln') + circ(7, -6, 7, 'leaf2 ln') + circ(0, -11, 7.5, 'leaf ln'));
	}
	function rackBox(x, y, w, h, units, seed) {
		var s = rect(x, y, w, h, 5, 'rack ln') + rect(x + 6, y - 3, w - 12, 4, 2, 'zc ln');
		var uh = (h - 8) / units;
		for (var u = 0; u < units; u++) {
			var uy = y + 5 + u * uh;
			s += rect(x + 4, uy, w - 8, uh - 3, 2.5, 'rack2');
			s += rect(x + 7, uy + (uh - 3) / 2 - 1, w * 0.42, 2.4, 1.2, 'metal2');
			s += led(x + w - 9, uy + (uh - 3) / 2, (u + seed) % 3 === 0 ? 'la' : 'lg', ((u * 0.37 + seed * 0.53) % 1.3).toFixed(2));
			s += led(x + w - 15, uy + (uh - 3) / 2, (u + seed) % 2 ? 'lb' : 'lg', ((u * 0.61 + seed * 0.29) % 1.3).toFixed(2));
		}
		return s;
	}
	function robot(x, y, s) {
		var body = rect(-10, -24, 20, 21, 7, 'robot ln') + circ(0, -13, 3.6, 'zc') +
			rect(-8, -3, 6, 4.5, 2, 'metal2 ln') + rect(2, -3, 6, 4.5, 2, 'metal2 ln') +
			g('', rect(11, -22, 5, 13, 2.5, 'robot ln'), 'd3-wave') + rect(-16, -22, 5, 13, 2.5, 'robot ln') +
			path('M0 -48v-6', 'ln', 'fill:none') + circ(0, -56, 3.2, 'lr ao-blink ln') +
			rect(-14, -45, 28, 22, 9, 'robot ln') + rect(-18, -38, 4, 8, 2, 'zc ln') + rect(14, -38, 4, 8, 2, 'zc ln') +
			rect(-10, -41, 20, 14, 6, 'screen') + ell(-4, -35, 1.9, 2.5, 'logo-dot') + ell(4, -35, 1.9, 2.5, 'logo-dot') +
			path('M-3 -30q3 3 6 0', '', 'fill:none;stroke:#8fd0ff;stroke-width:1.5;stroke-linecap:round');
		return g(tr(x, y, s), ell(0, 1, 15, 4, 'shd') + g('', body, 'd3-bob'));
	}
	function star(cx, cy, r, cls, st) {
		var d = '';
		for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; d += (i ? 'L' : 'M') + (cx + Math.cos(a) * rr).toFixed(1) + ' ' + (cy + Math.sin(a) * rr).toFixed(1); }
		return path(d + 'Z', cls, st);
	}
	function sparkle(x, y, s, delay) {
		return g(tr(x, y, s), path('M0 -8Q1 -1 8 0Q1 1 0 8Q-1 1 -8 0Q-1 -1 0 -8Z', '', 'fill:#fff;stroke:var(--ln);stroke-width:1.1;opacity:.95'), 'ao-blink', 'animation-delay:' + delay + 's;animation-duration:2.2s');
	}

	/* ---------- the layout plan (columns per bay chosen from the lesson count) ---------- */
	function config(c, mobile) {
		var S = mobile ? 8 : c === 1 ? 90 : c === 2 ? 40 : 22, corr = mobile ? 124 : c === 1 ? 180 : c === 2 ? 190 : 200;
		return { c: c, S: S, corr: corr, W: 2 * (30 + S + c * CW) + corr };
	}
	function plan(n, mobile) {
		var best = null;
		(mobile ? [1] : [1, 2, 3]).forEach(function (c) {
			var cf = config(c, mobile), rows = Math.ceil(n / (2 * c)), empt = rows * 2 * c - n;
			var H = R0 + (rows - 1) * PITCH + 92 + 112, asp = H / cf.W;
			var score = mobile ? 0 : empt * 14 + Math.abs(asp - 1.05) * 60 + (asp > 1.7 ? 80 : 0) + (asp < 0.6 ? 80 : 0);
			if (!best || score < best.score) best = { c: c, cf: cf, rows: rows, H: H, score: score };
		});
		var cf = best.cf;
		return { c: best.c, S: cf.S, corr: cf.corr, W: cf.W, rows: best.rows, H: best.H, cx: cf.W / 2,
			xL: 30 + cf.S, xR: 30 + cf.S + best.c * CW + cf.corr };
	}
	function slotX(P, s) { return s < P.c ? P.xL + (s + 0.5) * CW : P.xR + (s - P.c + 0.5) * CW; }

	/* ---------- one desk station = one lesson ---------- */
	var SHIRTS = [null, '#0078d4', '#e97526', '#8b5cf6', '#2da44e', '#d6407f', '#0f9d8f'];
	var ACCS = ['glasses', 'none', 'headset', 'badge', 'tie', 'none', 'glasses'];
	function isEmpty(i) { return i > 0 && ((i * 3 + 1) % 7 === 0 || (i * 5 + 2) % 11 === 0); }
	function station(api, l, cx, top, W, cls) {
		var i = l.i, w = 88, empty = isEmpty(i), shirt = SHIRTS[(i * 3 + 1) % 7] || api.color, parts = '';
		parts += rect(cx - 58, top - 48, 116, 98, 18, 'd3-pad');
		var lift = '';
		lift += ell(cx, top + 10, w * 0.85, 48, 'd3-lamp', 'fill:url(#d3h-warm)');
		lift += ell(cx, top + 33, w * 0.56, 5.5, 'shd');
		if (empty) lift += g('rotate(-9 ' + cx + ' ' + top + ')', rect(cx - 9, top - 22, 34, 42, 12, 'chair ln'));
		else lift += rect(cx - 17, top - 28, 34, 42, 12, 'chair ln') +
			api.art.worker(Object.assign({ x: cx, y: top + 10, pose: l.first ? 'wave' : 'type', sit: true, s: 1.2 }, api.art.look(i + 3, shirt, ACCS[(i * 2) % 7])));
		lift += rect(cx - w / 2, top, w, 28, 8, 'desk ln') + rect(cx - w / 2 + 4, top + 2.5, w - 8, 5, 2.5, 'deskhi');
		lift += g(tr(cx, top + 5), rect(-19, -2, 38, 18, 4, 'metal ln') + circ(0, 7, 3, 'logo-dot glowy'));
		var px = cx - w / 2 + 14, py = top + 14;
		switch (i % 4) {
			case 0: lift += g(tr(px, py), rect(-5, -5, 10, 9, 3, 'paper ln') + path('M5 -2q4 0 4 3t-4 3', '', 'fill:none;stroke:var(--ln);stroke-width:1.4')); break;
			case 1: lift += g(tr(px, py), rect(-9, -4, 18, 12, 2, 'paper ln') + path('M-5 0h10M-5 4h7', '', 'fill:none;stroke:#b9b0a0;stroke-width:1')); break;
			case 2: lift += g(tr(px, py - 2), path('M-4 0h8l-1.5 7h-5z', 'pot ln') + circ(0, -3, 5, 'leaf ln') + circ(-3.5, -4, 3.4, 'leaf2') + circ(3.5, -4, 3.4, 'leaf2')); break;
			default: lift += g(tr(px, py), path('M0 6V-6l7 -4', '', 'fill:none;stroke:var(--ln);stroke-width:2;stroke-linecap:round') + path('M4 -13l10 4l-4 6z', 'metal ln'));
		}
		lift += circ(cx + w / 2 - 12, top + 15, 4.4, 'zc ln');
		var n = String(l.n), fs = n.length > 2 ? 14 : 17;
		lift += g(tr(cx, top + 31), circ(0, 0, 16, 'badge') + text(0, fs * 0.36, n, 'badge-t', 'font-size:' + fs + 'px'));
		var pill = '';
		if (l.first) {
			var label = api.ui('here'), pf = 15, tw = measure(label, pf, 800);
			if (tw > 132) { pf = 12; tw = measure(label, pf, 800); }
			var pw = Math.round(tw + 34), py0 = top - 104, px0 = Math.min(Math.max(cx - pw / 2, 24), W - 24 - pw);
			pill = g('', g(tr(px0, py0), rect(0, 0, pw, 28, 14, 'pill') + text(pw / 2, 19, api.esc(label), 'pill-t', 'font-size:' + pf + 'px')) +
				path('M' + cx + ' ' + (top - 52) + 'L' + (cx - 12) + ' ' + (top - 68) + 'H' + (cx - 5) + 'V' + (top - 76) + 'H' + (cx + 5) + 'V' + (top - 68) + 'H' + (cx + 12) + 'Z', 'pill'), 'd3-arrow');
		}
		return '<g class="d3-st" data-st="' + i + '">' + parts +
			'<rect class="ao-focus-ring" x="' + (cx - 62) + '" y="' + (top - 52) + '" width="124" height="106" rx="18"/>' +
			g('', lift, 'd3-lift') + pill +
			'<rect x="' + (cx - 62) + '" y="' + (top - 52) + '" width="124" height="106" rx="14" fill="rgba(0,0,0,0)"/></g>';
	}

	/* furniture for the unused slots of the last row and the wall strips */
	function filler(k, x, y) {
		switch (k % 4) {
			case 0: return plant(x, y - 10, 1.5);
			case 1: return g(tr(x, y + 22), ell(0, 2, 28, 5, 'shd') + rect(-22, -50, 44, 52, 5, 'metal2 ln') + path('M-22 -33h44M-22 -16h44', 'ln', 'fill:none;stroke-width:1.3') +
				rect(-6, -43, 12, 3, 1.5, 'rack') + rect(-6, -26, 12, 3, 1.5, 'rack') + rect(-6, -9, 12, 3, 1.5, 'rack'));
			case 2: return g(tr(x, y + 22), ell(0, 2, 18, 4.5, 'shd') + rect(-14, -26, 28, 28, 5, 'metal ln') + rect(-10, -58, 20, 32, 9, 'glass ln') + rect(-3, -18, 6, 4, 1.5, 'zc ln') + circ(5, -44, 2.2, '', 'fill:#fff;opacity:.7'));
			default: return g(tr(x, y + 22), ell(0, 2, 26, 5, 'shd') + rect(-20, -16, 40, 18, 2, 'wood ln') + path('M-20 -8h40', 'ln', 'fill:none;stroke-width:1.2') +
				rect(-14, -34, 30, 18, 2, 'wood ln') + path('M-14 -34l30 18M16 -34l-30 18', 'ln', 'fill:none;stroke-width:1.2'));
		}
	}

	/* ---------- hub-themed decor: items stand in one row under the sign; as many as fit are used ---------- */
	function logoItem(ROOT, api, name, size, lift, delay, p) {
		var src = ROOT + api.art.icons[name];
		return { w: size + 12, p: p, svg: ell(0, -2, size / 3, 3, 'shd') + g('', '<image href="' + src + '" x="' + (-size / 2) + '" y="' + (-lift - size / 2) + '" width="' + size + '" height="' + size + '"/>', 'd3-fl', 'animation-delay:-' + delay + 's') };
	}
	function plantItem(p, s) { return { w: Math.round(32 * s), p: p, svg: plant(0, -15 * s, s) }; }
	function personItem(api, p, i, shirt, acc, pose) { return { w: 38, p: p, svg: api.art.worker(Object.assign({ x: 0, y: -1, s: 1.15, pose: pose }, api.art.look(i, shirt, acc))) }; }
	function rackItem(p, seed, units, fans) {
		var s = rackBox(-23, -76, 46, 76, units || 4, seed);
		if (fans) for (var u = 0; u < 4; u++) s += circ(-8, -66 + u * 17, 4.4, 'metal ln', 'stroke-width:1.2') + circ(-8, -66 + u * 17, 1.4, 'rack');
		return { w: 50, p: p, svg: s };
	}

	var DECOR = {
		business: function (R, api) {
			return [
				logoItem(R, api, 'Word', 40, 46, 0, 3), logoItem(R, api, 'Excel', 40, 30, 0.6, 4), plantItem(5, 1),
				{ w: 78, p: 2, svg: ell(0, 0, 38, 5, 'shd') + rect(-32, -28, 64, 28, 6, 'metal ln') + rect(-28, -44, 56, 18, 5, 'metal2 ln') + rect(-22, -41, 14, 9, 2, 'screen') + circ(-14, -36, 1.8, 'lg ao-blink') +
					rect(-14, -56, 28, 14, 2, 'paper ln') + path('M-9 -52h18M-9 -48h12', '', 'fill:none;stroke:#b9b0a0;stroke-width:1.2') + rect(-22, -20, 44, 7, 2, 'paper ln') + rect(14, -40, 10, 4, 2, 'zc ln') },
				logoItem(R, api, 'Copilot', 46, 40, 1.1, 0), logoItem(R, api, 'Teams', 42, 52, 1.7, 1), plantItem(8, 1),
				logoItem(R, api, 'Outlook', 40, 32, 2.3, 6), logoItem(R, api, 'PowerPoint', 40, 48, 2.9, 7)
			];
		},
		makers: function (R, api) {
			var fl = 'fill:none;stroke:#3b4660;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round';
			var board = g(tr(-98, -88), rect(0, 0, 196, 68, 8, 'wb ln') + rect(0, 69, 196, 5, 2.5, 'metal2 ln') + rect(10, 74, 5, 14, 1, 'metal2') + rect(181, 74, 5, 14, 1, 'metal2') +
				rect(12, 10, 46, 22, 6, 'zc ln') + rect(19, 18, 26, 3, 1.5, '', 'fill:#fff;opacity:.85') + rect(19, 24, 16, 3, 1.5, '', 'fill:#fff;opacity:.55') +
				path('M98 8L113 21L98 34L83 21Z', '', 'fill:#ffb020;stroke:var(--ln);stroke-width:1.7;stroke-linejoin:round') +
				rect(136, 10, 46, 22, 6, '', 'fill:#0078d4;stroke:var(--ln);stroke-width:1.7') + rect(143, 18, 26, 3, 1.5, '', 'fill:#fff;opacity:.85') + rect(143, 24, 16, 3, 1.5, '', 'fill:#fff;opacity:.55') +
				rect(36, 42, 46, 20, 6, '', 'fill:#2da44e;stroke:var(--ln);stroke-width:1.7') + rect(43, 49, 26, 3, 1.5, '', 'fill:#fff;opacity:.85') +
				path('M58 21H81', 'd3-dash', fl) + path('M113 21H134', 'd3-dash', fl) + path('M98 34V52H86', 'd3-dash', fl) + path('M92 48L86 52L92 56', '', fl) +
				path('M120 56h60M120 46h34', '', 'fill:none;stroke:#b8c0d6;stroke-width:2.2;stroke-linecap:round'));
			var bulb = g('', g(tr(0, -34), circ(0, 0, 8, '', 'fill:#ffe9a8;stroke:var(--ln);stroke-width:1.5') + rect(-3.5, 7, 7, 5, 1.5, 'metal2 ln') + path('M0 -13v-4M-11 -8l-3-3M11 -8l3-3', '', 'fill:none;stroke:#d09a00;stroke-width:1.8;stroke-linecap:round')), 'd3-fl');
			return [
				plantItem(6, 1), { w: 200, p: 0, svg: ell(0, 0, 96, 4, 'shd') + board },
				{ w: 54, p: 2, svg: robot(0, -2, 1.1) },
				logoItem(R, api, 'CopilotStudio', 44, 38, 0.8, 1), { w: 34, p: 4, svg: ell(0, -2, 10, 3, 'shd') + bulb },
				personItem(api, 3, 5, '#0f9d8f', 'glasses', 'think'), plantItem(7, 1)
			];
		},
		ai: function (R, api) {
			var N = [[-14, -66], [10, -70], [0, -50], [-20, -42], [18, -46], [-2, -32]];
			var orb = ell(0, -3, 32, 8, 'metal ln') + rect(-9, -24, 18, 20, 4, 'rack ln') +
				g('', circ(0, -58, 34, 'zc', 'opacity:.2'), 'd3-glowp') + circ(0, -58, 28, '', 'fill:url(#d3h-orb);stroke:var(--ln);stroke-width:1.8') +
				path('M-14 -66L10 -70L0 -50L-20 -42M0 -50L18 -46M0 -50L-2 -32M-14 -66L0 -50M10 -70L18 -46', '', 'fill:none;stroke:#fff;stroke-width:1.2;opacity:.75') +
				g('', N.map(function (p, i) { return circ(p[0], p[1], i === 2 ? 4 : 2.6, '', 'fill:#fff'); }).join(''), 'ao-pulse') +
				ell(0, -58, 42, 11, 'd3-flow', 'fill:none;stroke:var(--zc);stroke-width:2.4;transform:rotate(-18deg);transform-box:fill-box;transform-origin:center;stroke-linecap:round') +
				sparkle(-34, -80, .8, 0) + sparkle(36, -76, .7, .9);
			return [
				rackItem(2, 1, 4, true), rackItem(3, 3, 4, true), { w: 100, p: 0, svg: orb }, rackItem(4, 5, 4, true),
				personItem(api, 1, 7, '#8b5cf6', 'headset', 'type'), plantItem(5, 1), plantItem(6, 1)
			];
		},
		academy: function (R, api) {
			var board = rect(-98, -78, 196, 56, 6, 'boardf') + text(-86, -54, 'AZ-900', 'chalk') + text(-86, -36, 'AZ-305', 'chalk', 'font-size:11px;opacity:.85') +
				path('M-30 -37a8 8 0 0 1 3-14a11 11 0 0 1 21-1a8 8 0 0 1 4 15z', 'chalk-s') + path('M14 -45l6 6l13-14', 'chalk-s') +
				path('M44 -60h38M44 -50h28M44 -40h34', 'chalk-s', 'stroke-width:1.6;opacity:.6') +
				rect(-98, -21, 196, 5, 2.5, 'wood ln') + rect(-88, -16, 5, 16, 1, 'wood') + rect(83, -16, 5, 16, 1, 'wood');
			var rosette = ell(0, -2, 14, 3, 'shd') + g('', g(tr(0, -46), circ(0, 0, 11, '', 'fill:#f2b705;stroke:#8a5d00;stroke-width:1.8') + circ(0, 0, 6.5, '', 'fill:#ffd34d;stroke:#8a5d00;stroke-width:1.2') +
				path('M-5 10l-3 11l6 -3l3 5l2 -13z M5 10l3 11l-6 -3l-3 5l-2 -13z', '', 'fill:#d9442f;stroke:#7a1f12;stroke-width:1.2') + star(0, 0, 5, '', 'fill:#fff')), 'd3-fl');
			var stack = ell(0, 0, 24, 5, 'shd') + rect(-18, -9, 36, 9, 2, '', 'fill:#e05a5a;stroke:var(--ln);stroke-width:1.5') +
				rect(-15, -18, 31, 9, 2, '', 'fill:#4f9be8;stroke:var(--ln);stroke-width:1.5') + rect(-12, -27, 26, 9, 2, '', 'fill:#f2b705;stroke:var(--ln);stroke-width:1.5');
			return [
				plantItem(6, 1), { w: 50, p: 3, svg: stack }, { w: 200, p: 0, svg: ell(0, 0, 96, 4, 'shd') + board },
				{ w: 50, p: 1, svg: rosette }, personItem(api, 2, 1, '#d08a1f', 'tie', 'wave'), plantItem(5, 1)
			];
		},
		network: function (R, api) {
			var wifi = [12, 21, 30].map(function (r, i) {
				var k = r * 0.72;
				return path('M' + (-k) + ' ' + (-30 - k) + 'A' + r + ' ' + r + ' 0 0 1 ' + k + ' ' + (-30 - k), 'ao-blink', 'fill:none;stroke:var(--zc);stroke-width:3.2;stroke-linecap:round;animation-delay:' + (i * 0.28) + 's;animation-duration:1.6s');
			}).join('');
			var router = ell(0, 0, 26, 4, 'shd') + rect(-22, -12, 44, 12, 5, 'rack ln') + path('M-14 -12l-3 -14M14 -12l3 -14', 'ln', 'fill:none') +
				led(-9, -6, 'lg', 0, 1.7) + led(0, -6, 'la', .4, 1.7) + led(9, -6, 'lb', .8, 1.7) + wifi;
			var globe = ell(0, -1, 22, 4, 'shd') + g(tr(0, -34), circ(0, 0, 25, '', 'fill:var(--sea);stroke:var(--ln);stroke-width:1.8') +
				path('M-18 -6q6 -12 14 -8q4 6 -2 10q-6 4 -12 -2zM2 4q8 -4 14 4q2 10 -8 12q-8 -4 -6 -16zM8 -16q8 -4 12 4q-6 4 -10 -2z', '', 'fill:var(--land);opacity:.95') +
				path('M-25 0h50', '', 'fill:none;stroke:#fff;stroke-width:1;opacity:.5') + ell(0, 0, 13, 25, 'd3-mer', 'fill:none;stroke:#fff;stroke-width:1.1;opacity:.6') +
				path('M-30 12a34 34 0 0 0 60 0', 'metal2 ln', 'fill:none'));
			return [
				rackItem(3, 0, 5), rackItem(2, 1, 5), { w: 66, p: 0, svg: router }, { w: 64, p: 1, svg: globe },
				rackItem(4, 2, 5), personItem(api, 5, 11, '#00a3b0', 'headset', 'type'), rackItem(6, 3, 5), plantItem(7, 1)
			];
		},
		security: function (R, api) {
			var vault = g(tr(0, -46, .85), rect(-43, -53, 86, 106, 12, '', 'fill:var(--vault);stroke:var(--ln);stroke-width:1.8') + rect(-50, -36, 8, 12, 3, 'metal2 ln') + rect(-50, 24, 8, 12, 3, 'metal2 ln') +
				circ(0, 0, 35, 'metal ln') + circ(0, 0, 28, '', 'fill:var(--metal-d);stroke:var(--ln);stroke-width:1.4') +
				g('', path('M0 -26v52M-26 0h52M-18 -18l36 36M18 -18l-36 36', '', 'fill:none;stroke:var(--ln);stroke-width:3.2;stroke-linecap:round') + circ(0, 0, 7, 'zc ln'), 'd3-spin-r'));
			var shield = ell(0, -1, 26, 4, 'shd') + g(tr(0, -44, .95), g('', path('M0 -36L32 -25V6C32 26 14 38 0 44C-14 38 -32 26 -32 6V-25Z', 'zcs', 'stroke:color-mix(in srgb,var(--zc) 70%,#000);stroke-width:2.2;stroke-linejoin:round') +
				path('M-12 2l9 9l17 -19', '', 'fill:none;stroke:#fff;stroke-width:6;stroke-linecap:round;stroke-linejoin:round'), 'd3-glowp'));
			var lasers = rect(-62, -68, 8, 68, 3, 'rack ln') + rect(54, -68, 8, 68, 3, 'rack ln') + led(-58, -60, 'lr', 0, 2) + led(58, -60, 'lr', .5, 2) +
				[['M-54 -58L54 -18', 0], ['M-54 -18L54 -58', .35], ['M-54 -38H54', .7]].map(function (b) { return path(b[0], 'ao-blink', 'fill:none;stroke:#ff5d5d;stroke-width:1.8;stroke-linecap:round;animation-delay:' + b[1] + 's;animation-duration:1.8s;filter:drop-shadow(0 0 3px #ff5d5d)'); }).join('');
			var cctv = ell(0, 0, 14, 3.5, 'shd') + rect(-3, -66, 6, 66, 2, 'metal2 ln') + g(tr(0, -70), rect(-13, -7, 26, 14, 4, 'rack ln') + path('M-13 -2l-9 -2v10z', 'metal2 ln') + led(7, -2, 'lr', 0, 2.2));
			var lock = ell(0, -2, 10, 3, 'shd') + g('', g(tr(0, -38), path('M-6 0v-5a6 6 0 0 1 12 0v5', '', 'fill:none;stroke:var(--ln);stroke-width:3.2;stroke-linecap:round') + rect(-9, -1, 18, 14, 4, '', 'fill:#f2b705;stroke:var(--ln);stroke-width:1.7') + circ(0, 6, 2.2, 'rack')), 'd3-fl');
			return [
				plantItem(7, 1), { w: 46, p: 4, svg: cctv }, { w: 98, p: 0, svg: vault }, personItem(api, 2, 13, '#6b3fb5', 'cap', 'stand'),
				{ w: 70, p: 1, svg: shield }, { w: 126, p: 3, svg: lasers }, { w: 34, p: 5, svg: lock }, plantItem(6, 1)
			];
		},
		devops: function (R, api) {
			var cols = [['#4fc3ff', [['#ffd34d', 0], ['#ff9eb5', 1]]], ['#ffb020', [['#7fd4ff', 0]]], ['#3ddc84', [['#b8e986', 0]]]];
			var kan = g(tr(-75, -80), rect(0, 0, 150, 66, 7, 'paper ln') + rect(14, 66, 5, 14, 1, 'metal2') + rect(131, 66, 5, 14, 1, 'metal2') + cols.map(function (c, i) {
				var x = 5 + i * 47;
				return rect(x, 5, 43, 8, 3, '', 'fill:' + c[0] + ';stroke:var(--ln);stroke-width:1.2') + rect(x, 15, 43, 46, 3, '', 'fill:rgba(120,120,140,.12)') +
					c[1].map(function (n) { return rect(x + 3, 18 + n[1] * 19, 37, 15, 2.5, '', 'fill:' + n[0] + ';stroke:var(--ln);stroke-width:1.2') + rect(x + 7, 23 + n[1] * 19, 20, 2.4, 1.2, '', 'fill:rgba(0,0,0,.35)'); }).join('');
			}).join('') + g('', rect(8, 41, 37, 15, 2.5, '', 'fill:#ff9eb5;stroke:var(--ln);stroke-width:1.2') + rect(12, 46, 20, 2.4, 1.2, '', 'fill:rgba(0,0,0,.35)'), 'd3-slide'));
			var belt = ell(0, 0, 76, 4, 'shd') + rect(-70, -9, 6, 9, 1, 'metal2') + rect(64, -9, 6, 9, 1, 'metal2') +
				rect(-75, -34, 150, 26, 13, 'rack ln') + rect(-67, -28, 134, 14, 7, 'rack2') + path('M-60 -21H60', 'd3-flow', 'fill:none;stroke:#8e9bc4;stroke-width:3;stroke-linecap:round') +
				circ(-65, -21, 9, 'metal ln') + circ(65, -21, 9, 'metal ln') + circ(-65, -21, 2.6, 'rack') + circ(65, -21, 2.6, 'rack');
			[0, 1, 2, 3].forEach(function (i) {
				belt += g(tr(-70 + i * 34, -33), g('', rect(0, -17, 20, 17, 3, '', 'fill:var(--pkg);stroke:var(--ln);stroke-width:1.6') + path('M10 -17v17', '', 'fill:none;stroke:var(--ln);stroke-width:1.3;opacity:.55') + rect(4, -11, 5, 3, 1, 'paper'), 'd3-pk' + (i === 0 ? ' first' : i === 3 ? ' last' : '')));
			});
			var inf = ell(0, 0, 14, 3.5, 'shd') + rect(-3, -12, 6, 12, 2, 'metal2 ln') + g(tr(0, -38), circ(0, 0, 26, 'paper ln') + g('scale(1.35)', path('M0 0C5 -9 14 -9 14 0C14 9 5 9 0 0C-5 -9 -14 -9 -14 0C-14 9 -5 9 0 0Z', '', 'fill:none;stroke:#2da44e;stroke-width:3;stroke-linejoin:round') +
				'<path d="M0 0C5 -9 14 -9 14 0C14 9 5 9 0 0C-5 -9 -14 -9 -14 0C-14 9 -5 9 0 0Z" pathLength="100" class="d3-flow" style="fill:none;stroke:#fff;stroke-width:3;stroke-dasharray:4 21;stroke-linecap:round"/>'));
			return [
				plantItem(6, 1), { w: 152, p: 0, svg: ell(0, 0, 74, 4, 'shd') + kan }, { w: 152, p: 1, svg: belt }, { w: 64, p: 2, svg: inf },
				personItem(api, 3, 15, '#2da44e', 'cap', 'wave'), plantItem(5, 1)
			];
		},
		cloud: function (R, api) {
			var cs = circ(-22, 4, 17) + circ(2, -8, 24) + circ(26, 4, 18) + rect(-36, 4, 80, 18, 9);
			var cloud = ell(0, -2, 34, 5, 'shd') + g('', g(tr(0, -42, .95), '<g style="fill:var(--cloud);stroke:var(--ln);stroke-width:5.4;stroke-linejoin:round">' + cs + '</g><g style="fill:var(--cloud)">' + cs + '</g>' +
				path('M-14 12h30', '', 'fill:none;stroke:var(--zc);stroke-width:3;stroke-linecap:round;opacity:.9') +
				path('M-4 -2v-12l-5 5M-4 -14l5 5M12 -14v12l5 -5M12 -2l-5 -5', '', 'fill:none;stroke:var(--zc);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round')), 'd3-fl');
			var db = g(tr(0, -23), ell(0, 24, 26, 6, 'shd') + g('', ell(0, 0, 26, 30, '', 'fill:var(--zc);opacity:.18'), 'd3-glowp') +
				path('M-21 -24v40a21 7 0 0 0 42 0v-40z', '', 'fill:var(--db);stroke:var(--ln);stroke-width:1.8') + path('M-21 -10a21 7 0 0 0 42 0M-21 3a21 7 0 0 0 42 0', '', 'fill:none;stroke:var(--ln);stroke-width:1.4') +
				ell(0, -24, 21, 7, '', 'fill:#fff;stroke:var(--ln);stroke-width:1.8') + ell(0, -24, 13, 3.4, 'zc') + led(14, 6, 'lg', 0, 2) + led(14, -7, 'la', .6, 2));
			var crates = g(tr(0, -6), ell(0, 6, 24, 5, 'shd') + rect(-18, -8, 36, 15, 2, 'wood ln') + path('M-18 -1h36', 'ln', 'fill:none;stroke-width:1.2') +
				rect(-13, -26, 28, 18, 2, 'wood ln') + path('M-13 -17l28 0M-13 -26l28 18M15 -26l-28 18', 'ln', 'fill:none;stroke-width:1.2'));
			return [
				rackItem(3, 2, 4), rackItem(2, 3, 4), { w: 106, p: 0, svg: cloud }, { w: 56, p: 1, svg: db },
				{ w: 50, p: 4, svg: crates }, personItem(api, 5, 9, '#e97526', 'headset', 'think'), plantItem(6, 1)
			];
		}
	};

	/* distribute the decor items that fit across the entrance wall */
	function decorRow(zid, P, R, api) {
		var list = (DECOR[zid] || DECOR.cloud)(R, api), avail = P.W - 110, gap = 14, chosen = [], sum = 0;
		list.map(function (it, k) { return { it: it, k: k }; }).sort(function (a, b) { return a.it.p - b.it.p; }).forEach(function (e) {
			var need = sum + e.it.w + (chosen.length ? gap : 0);
			if (need <= avail) { chosen.push(e); sum = need; }
		});
		chosen.sort(function (a, b) { return a.k - b.k; });
		var sw = chosen.reduce(function (s, e) { return s + e.it.w; }, 0);
		var spc = chosen.length > 1 ? Math.min((avail - sw) / (chosen.length - 1), 62) : 0, total = sw + spc * (chosen.length - 1), x = (P.W - total) / 2, out = '', first = null, lastx = 0;
		chosen.forEach(function (e) {
			var c = x + e.it.w / 2; if (first === null) first = x; lastx = x + e.it.w;
			out += g(tr(r1(c), BB), e.it.svg); x += e.it.w + spc;
		});
		var trunk = '';
		if (zid === 'network' && first !== null) {
			['#ffb020', '#ff6f91', '#4fc3ff', '#3ddc84'].forEach(function (c, i) {
				trunk += path('M' + r1(first - 6) + ' ' + (BB + 7 + i * 3.4) + 'H' + r1(lastx + 6), 'd3-flow', 'fill:none;stroke:' + c + ';stroke-width:2.4;stroke-linecap:round;animation-delay:-' + (i * 0.27) + 's');
			});
		}
		return trunk + out;
	}

	/* ---------- scene furniture: sign, floors, walkers ---------- */
	function floorTiles(kind, W, H) {
		if (kind === 'planks') return '<pattern id="d3h-tl" width="90" height="36" patternUnits="userSpaceOnUse"><path d="M0 0H90M0 18H90M30 0v18M75 18v18" class="tile"/></pattern>';
		if (kind === 'checker') return '<pattern id="d3h-tl" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M0 0h26v26h-26zM26 26h26v26h-26z" class="chk"/></pattern>';
		return '<pattern id="d3h-tl" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0V25M0 25H25" class="tile"/></pattern>';
	}
	var FLOOR = { academy: 'planks', network: 'checker', security: 'checker' };
	function sign(api, P) {
		var name = api.name, team = api.zone.name, maxW = P.W - 100, fs = 30, tw = measure(name, fs);
		if (tw > maxW - 64) { fs = Math.max(15, Math.floor(fs * (maxW - 64) / tw)); tw = measure(name, fs); }
		var tf = 13, tt = measure(team, tf, 600) + team.length * 0.8;
		if (tt > maxW - 64) { tf = Math.max(10, Math.floor(tf * (maxW - 64) / tt)); tt = measure(team, tf, 600); }
		var w = Math.round(Math.min(maxW, Math.max(250, Math.max(tw, tt) + 70))), h = 78, x = P.cx - w / 2;
		var nameY = 14 + Math.round(fs * 0.86);
		P.signW = w;
		return path('M' + r1(P.cx - w / 4) + ' 16V' + SIGN_Y + 'M' + r1(P.cx + w / 4) + ' 16V' + SIGN_Y, 'ln', 'fill:none;stroke-width:2.2') +
			g(tr(r1(x), SIGN_Y), rect(2, 4, w, h, 14, '', 'fill:rgba(0,0,0,.2)') + rect(0, 0, w, h, 14, 'sign') + rect(5, 4, w - 10, 6, 3, '', 'fill:rgba(255,255,255,.24)') +
				circ(11, 12, 2.2, '', 'fill:rgba(255,255,255,.5)') + circ(w - 11, 12, 2.2, '', 'fill:rgba(255,255,255,.5)') +
				text(w / 2, nameY, api.esc(name), 'sign-t', 'font-size:' + fs + 'px') +
				text(w / 2, h - 11, api.esc(team), 'sign-s', 'font-size:' + tf + 'px'));
	}
	/* clocks and framed charts on the top wall, either side of the sign */
	function wallArt(P) {
		var s = '', j, side, x, hang;
		for (j = 0; j < 3; j++) for (side = -1; side <= 1; side += 2) {
			x = P.cx + side * (P.signW / 2 + 70 + j * 100);
			if (x < 70 || x > P.W - 70) continue;
			if ((j + (side > 0 ? 1 : 0)) % 2) {
				s += g(tr(r1(x), 70), circ(0, 0, 21, 'paper ln') + circ(0, 0, 2.2, 'rack') + path('M0 0V-13', 'ln', 'fill:none;stroke-width:2') + path('M0 0L9 5', 'ln', 'fill:none;stroke-width:2'));
			} else {
				hang = rect(-30, -22, 60, 44, 5, 'paper ln') + rect(-23, -15, 46, 30, 3, '', 'fill:color-mix(in srgb,var(--zc) 16%,var(--page))') +
					rect(-17, 1, 8, 10, 1.5, 'zc') + rect(-5, -6, 8, 17, 1.5, 'zc', 'opacity:.7') + rect(7, -11, 8, 22, 1.5, 'zc', 'opacity:.5');
				s += g(tr(r1(x), 68), hang);
			}
		}
		return s;
	}
	function walkRoute(i, pts, speed, phase, look_, api) {
		var seq = pts.concat(pts.slice(0, -1).reverse()), total = 0, k, segs = [];
		for (k = 1; k < seq.length; k++) { var dx = seq[k][0] - seq[k - 1][0], dy = seq[k][1] - seq[k - 1][1], L = Math.sqrt(dx * dx + dy * dy); segs.push({ L: L, dx: dx }); total += L; }
		var dur = total / speed, cum = 0, mv = '0%{transform:translate(0px,0px)}', fl = '', dir = 1;
		for (k = 0; k < segs.length; k++) {
			if (segs[k].dx) dir = segs[k].dx > 0 ? 1 : -1;
			var p0 = cum / total * 100; cum += segs[k].L; var p1 = cum / total * 100;
			fl += (k ? (p0 + 0.02).toFixed(3) : '0') + '%{transform:scaleX(' + dir + ')}' + p1.toFixed(3) + '%{transform:scaleX(' + dir + ')}';
			mv += p1.toFixed(3) + '%{transform:translate(' + (seq[k + 1][0] - seq[0][0]).toFixed(1) + 'px,' + (seq[k + 1][1] - seq[0][1]).toFixed(1) + 'px)}';
		}
		var css = '@keyframes d3hm' + i + '{' + mv + '}@keyframes d3hf' + i + '{' + fl + '}' +
			'.d3 .d3hm' + i + '{animation:d3hm' + i + ' ' + dur.toFixed(1) + 's linear infinite;animation-delay:-' + (dur * phase).toFixed(1) + 's}' +
			'.d3 .d3hf' + i + '{animation:d3hf' + i + ' ' + dur.toFixed(1) + 's linear infinite;animation-delay:-' + (dur * phase).toFixed(1) + 's}';
		var html = g('translate(' + seq[0][0] + ' ' + seq[0][1] + ')', g('', g('', api.art.worker(Object.assign({ x: 0, y: 0, s: 1.25, pose: 'walk' }, look_)), 'd3hf' + i), 'd3hm' + i));
		return { css: css, html: html };
	}
	function windowAt(x, y) { return rect(x - 5, y, 10, 36, 3, 'win') + path('M' + x + ' ' + y + 'v36', '', 'stroke:var(--ln);stroke-width:1;fill:none'); }

	/* ---------- render ---------- */
	function render(api) {
		last.api = api;
		var scene = document.getElementById('ao-scene');
		if (!document.getElementById('aw-hub-3-css')) {
			var st = document.createElement('style'); st.id = 'aw-hub-3-css'; st.textContent = CSS; document.head.appendChild(st);
		}
		var mobile = scene.clientWidth > 0 && scene.clientWidth < MOBILE_PX; last.mobile = mobile;
		var ls = api.lessons, n = ls.length, zid = api.zone.id, P = plan(n, mobile), W = P.W, H = P.H;
		var ROOT = new Array((api.hub.depth || 0) + 1).join('../');
		var body = '', k, r, s;

		// floor, runner, walls
		body += '<rect class="bld-shadow" x="22" y="28" width="' + (W - 28) + '" height="' + (H - 28) + '" rx="32"/>';
		body += '<rect class="floor" x="14" y="14" width="' + (W - 28) + '" height="' + (H - 28) + '" rx="30"/>';
		body += '<rect x="14" y="14" width="' + (W - 28) + '" height="' + (H - 28) + '" rx="30" fill="url(#d3h-tl)"/>';
		var rx0 = P.cx - P.corr / 2 + 4, rx1 = P.cx + P.corr / 2 - 4, ry0 = BB + 8, ry1 = H - 14, rr = 28;
		body += path('M' + rx0 + ' ' + ry1 + 'V' + (ry0 + rr) + 'a' + rr + ' ' + rr + ' 0 0 1 ' + rr + ' -' + rr + 'H' + (rx1 - rr) + 'a' + rr + ' ' + rr + ' 0 0 1 ' + rr + ' ' + rr + 'V' + ry1 + 'Z', 'runner');
		body += path('M' + (rx0 + 8) + ' ' + ry1 + 'V' + (ry0 + rr) + 'a' + (rr - 8) + ' ' + (rr - 8) + ' 0 0 1 ' + (rr - 8) + ' -' + (rr - 8) + 'H' + (rx1 - rr) + 'a' + (rr - 8) + ' ' + (rr - 8) + ' 0 0 1 ' + (rr - 8) + ' ' + (rr - 8) + 'V' + ry1, 'runner-ln');
		body += '<rect class="wall-e" x="14" y="14" width="' + (W - 28) + '" height="' + (H - 28) + '" rx="30"/><rect class="wall" x="14" y="14" width="' + (W - 28) + '" height="' + (H - 28) + '" rx="30"/>';
		// entrance door gap + mat
		body += rect(P.cx - 46, H - 27, 92, 26, 6, 'runner') + rect(P.cx - 38, H - 50, 76, 18, 6, 'mat') + path('M' + (P.cx - 28) + ' ' + (H - 41) + 'H' + (P.cx + 28), '', 'fill:none;stroke:#fff;stroke-width:1.6;stroke-dasharray:3 5;opacity:.7');

		// windows on the side walls
		for (r = 0; r < P.rows; r++) if (r % 2 === 0) { var wy = R0 + r * PITCH + 24; body += windowAt(14, wy) + windowAt(W - 14, wy); }

		body += decorRow(zid, P, ROOT, api);
		body += sign(api, P) + wallArt(P);

		// lobby rug in the corridor
		body += g(tr(P.cx, R0 - 4), rect(-60, -26, 120, 52, 26, '', 'fill:color-mix(in srgb,var(--zc) 22%,var(--hall));stroke:color-mix(in srgb,var(--zc) 40%,var(--hall));stroke-width:2.2') +
			rect(-53, -20, 106, 40, 20, '', 'fill:none;stroke:color-mix(in srgb,var(--zc) 40%,var(--hall));stroke-width:1.4;stroke-dasharray:3 5') +
			text(0, -3, 'AZURE', 'legend-t', 'text-anchor:middle;font-size:13px;letter-spacing:.2em;opacity:.8') + text(0, 12, 'ANIMATIONS', 'legend-t', 'text-anchor:middle;font-size:10.5px;letter-spacing:.1em;opacity:.8'));

		// furniture on the wall strips (wide layouts) and corridor edges
		for (r = 0; r < P.rows; r++) {
			var rowTop = R0 + r * PITCH;
			if (P.S >= 70) { body += filler(r % 2 ? 0 : 3, 30 + P.S / 2, rowTop + 46) + filler(r % 2 ? 2 : 1, W - 30 - P.S / 2, rowTop + 46); }
			if (r < P.rows - 1) {
				var py = rowTop + 92 + (PITCH - 92) / 2 - 10;
				body += plant(P.cx - P.corr / 2 + 18, py, .8) + plant(P.cx + P.corr / 2 - 18, py, .8);
			}
		}

		// unused slots of the last row
		var perRow = 2 * P.c, slots = P.rows * perRow;
		for (k = n; k < slots; k++) body += filler(k - n, slotX(P, k % perRow), R0 + Math.floor(k / perRow) * PITCH + 46);

		// stations (reading order: left bay, then right bay, row by row)
		var stations = '';
		ls.forEach(function (l, i) {
			var row = Math.floor(i / perRow), sl = i % perRow, top = R0 + row * PITCH + 46;
			stations += station(api, l, slotX(P, sl), top, W, '');
		});
		body += stations;

		// walkers
		var y0 = R0 - 14, y1 = H - 96, W_ = [];
		W_.push(walkRoute(0, [[P.cx - 38, y0], [P.cx - 38, y1]], 42, 0.05, api.art.look(2, '#e97526', 'badge'), api));
		W_.push(walkRoute(1, [[P.cx + 38, y1 - 10], [P.cx + 38, y0 + 6]], 36, 0.35, api.art.look(6, '#0078d4', zid === 'security' ? 'cap' : 'none'), api));
		W_.push(walkRoute(2, [[64, H - 34], [W - 64, H - 34]], 40, 0.35, api.art.look(8, '#2da44e', 'glasses'), api));
		if (P.rows >= 4) W_.push(walkRoute(3, [[P.cx + 4, y0 + 40], [P.cx + 4, y1 - 30]], 34, 0.7, api.art.look(11, api.color, 'headset'), api));
		body += '<g class="walkers">' + W_.map(function (w) { return w.html; }).join('') + '</g>';

		var defs = '<defs>' + floorTiles(FLOOR[zid], W, H) +
			'<radialGradient id="d3h-warm"><stop offset="0" stop-color="#ffd88a" stop-opacity=".55"/><stop offset="1" stop-color="#ffd88a" stop-opacity="0"/></radialGradient>' +
			'<radialGradient id="d3h-orb" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#d9c4ff"/><stop offset=".55" stop-color="#8b5cf6"/><stop offset="1" stop-color="#4b27a8"/></radialGradient></defs>';
		scene.innerHTML = '<svg class="d3 d3-hub" viewBox="0 0 ' + W + ' ' + H + '" style="--zc:' + api.color + ';max-width:' + Math.round(W * 1.12) + 'px" role="group" aria-label="' + api.esc(api.name) + '" xmlns="http://www.w3.org/2000/svg">' +
			defs + '<style>' + W_.map(function (w) { return w.css; }).join('') + '</style>' + body + '</svg>';

		[].forEach.call(scene.querySelectorAll('.d3-st'), function (el) { api.attach(el, +el.getAttribute('data-st')); });
	}

	global.AWHubDesign[3] = render;

	// switch between the wide and the single-column layout when the viewport crosses the breakpoint
	var tm = 0;
	global.addEventListener('resize', function () {
		clearTimeout(tm);
		tm = setTimeout(function () {
			var scene = document.getElementById('ao-scene');
			if (!last.api || !scene) return;
			var m = scene.clientWidth > 0 && scene.clientWidth < MOBILE_PX;
			if (m !== last.mobile) render(last.api);
		}, 160);
	});
})(window);
