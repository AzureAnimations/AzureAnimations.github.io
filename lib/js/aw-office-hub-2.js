/* Hub design 2 — "The Floor": one big isometric department floor where every lesson is a work-pod.
   Same toolkit and art as index-2.html (P / box / planeY / ... in world units: x → right-down, y → left-down, z → up).
   Contract: lib/js/aw-office-hub.js. Pods sit on a grid in reading order (lesson 1 front-left); the decor follows api.zone.id. */
(function (global) {
	'use strict';
	var A = 40, B = 23, Z = 30, T = .2, H = 1.5, ROOT = '';
	var AZ = 'lib/icons/Azure_Public_Service_Icons/';

	/* ---------- isometric toolkit ---------- */
	function P(x, y, z) { return [(x - y) * A, (x + y) * B - (z || 0) * Z]; }
	function pts(a) { return a.map(function (p) { var q = P(p[0], p[1], p[2]); return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' '); }
	function box(x, y, z, w, d, h, c, cls) {
		var t = [[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]],
			l = [[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]],
			r = [[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]];
		return '<g class="bx ' + (cls || '') + '" style="--c:' + c + '"><polygon class="l" points="' + pts(l) + '"/><polygon class="r" points="' + pts(r) + '"/><polygon class="t" points="' + pts(t) + '"/></g>';
	}
	function planeY(x0, y, z0) { var o = P(x0, y, z0); return 'matrix(' + A + ' ' + B + ' 0 ' + (-Z) + ' ' + o[0].toFixed(1) + ' ' + o[1].toFixed(1) + ')'; }
	function planeX(x, y0, z0) { var o = P(x, y0, z0); return 'matrix(' + (-A) + ' ' + B + ' 0 ' + (-Z) + ' ' + o[0].toFixed(1) + ' ' + o[1].toFixed(1) + ')'; }
	function planeF(x0, y0, z) { var o = P(x0, y0, z); return 'matrix(' + A + ' ' + B + ' ' + (-A) + ' ' + B + ' ' + o[0].toFixed(1) + ' ' + o[1].toFixed(1) + ')'; }
	function disc(cx, cy, r, z, c, op, cls) {
		var o = P(cx, cy, z); return '<ellipse' + (cls ? ' class="' + cls + '"' : '') + ' cx="' + o[0].toFixed(1) + '" cy="' + o[1].toFixed(1) + '" rx="' + (r * A * 1.414).toFixed(1) + '" ry="' + (r * B * 1.414).toFixed(1) + '"' + (c ? ' fill="' + c + '"' : '') + (op ? ' opacity="' + op + '"' : '') + '/>';
	}
	function cyl(cx, cy, r, z, h, c) {
		var o = P(cx, cy, z), rx = r * A * 1.414, ry = r * B * 1.414, hp = h * Z, x0 = o[0] - rx;
		return '<g class="bx" style="--c:' + c + '"><path class="l" d="M' + x0.toFixed(1) + ' ' + o[1].toFixed(1) + 'v' + (-hp) + 'a' + rx.toFixed(1) + ' ' + ry.toFixed(1) + ' 0 0 0 ' + (2 * rx).toFixed(1) + ' 0v' + hp + 'a' + rx.toFixed(1) + ' ' + ry.toFixed(1) + ' 0 0 1 ' + (-2 * rx).toFixed(1) + ' 0z"/>' +
			'<ellipse class="t" cx="' + o[0].toFixed(1) + '" cy="' + (o[1] - hp).toFixed(1) + '" rx="' + rx.toFixed(1) + '" ry="' + ry.toFixed(1) + '"/></g>';
	}
	function W(x, y, z, o) { var q = P(x, y, z); o = o || {}; o.x = q[0]; o.y = q[1]; o.s = o.s || .95; return AWArt.worker(o); }
	function look(i, shirt, acc, extra) { return Object.assign(AWArt.look(i, shirt, acc), extra || {}); }
	function ic(p) { return ROOT + p; }
	function tile(src, x, y, z, size, cls) {
		var q = P(x, y, z), s = size || 34;
		return '<g class="tile bob ' + (cls || '') + '"><rect x="' + (q[0] - s / 2 - 5).toFixed(1) + '" y="' + (q[1] - s / 2 - 5).toFixed(1) + '" width="' + (s + 10) + '" height="' + (s + 10) + '" rx="' + Math.round(s / 3.2) + '"/>' +
			'<image href="' + src + '" x="' + (q[0] - s / 2).toFixed(1) + '" y="' + (q[1] - s / 2).toFixed(1) + '" width="' + s + '" height="' + s + '"/></g>';
	}
	function led(x, y, z, c, cls) { var q = P(x, y, z); return '<circle class="led ' + (cls || '') + '" cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="2" fill="' + c + '"/>'; }
	function star(x, y, z, c, s, delay) { var q = P(x, y, z); return '<g transform="translate(' + q[0].toFixed(1) + ' ' + q[1].toFixed(1) + ') scale(' + (s || 1) + ')"><path class="sparkle" style="animation-delay:' + (delay || 0) + 's" d="M0 -9 L2.4 -2.4 L9 0 L2.4 2.4 L0 9 L-2.4 2.4 L-9 0 L-2.4 -2.4Z" fill="' + c + '"/></g>'; }
	function plant(x, y, z) {
		var q = P(x, y, z || 0);
		return cyl(x, y, .22, z || 0, .26, '#b8744a') + '<g transform="translate(' + q[0].toFixed(1) + ' ' + (q[1] - 8).toFixed(1) + ')"><path d="M0 0 C-12 -8 -14 -26 -6 -34 C-3 -22 -1 -12 0 0Z" fill="#4f9d5d"/><path d="M0 0 C12 -8 14 -24 8 -32 C2 -22 0 -12 0 0Z" fill="#3d8a4f"/><path d="M0 0 C-3 -14 1 -30 3 -40 C7 -26 5 -12 0 0Z" fill="#5bb06a"/></g>';
	}
	function chair(x, y, c) { return box(x, y, 0, .5, .5, .38, c || '#5d6b8a') + box(x, y - .06, .38, .5, .08, .5, c || '#5d6b8a'); }
	function mix(c, p) { return 'color-mix(in srgb,' + c + ' ' + p + '%, #fff)'; }
	function rackFace(gx, y, c, rows, leds) { // LED rack front facing +y, standing with its front at world y
		var s = '<g transform="' + planeY(gx + .08, y + .02, .15) + '">';
		for (var k = 0; k < rows; k++) {
			s += '<rect x="0" y="' + (k * .22) + '" width=".64" height=".13" rx=".03" fill="#252d44"/>';
			for (var m = 0; m < leds; m++) s += '<circle class="led ' + 'abc'[(k + m) % 3] + '" cx="' + (leds > 1 ? .08 + m * .1 : .52) + '" cy="' + (k * .22 + .065) + '" r=".03" fill="' + ((k + m) % 2 ? '#5df2a0' : c) + '"/>';
		}
		return s + '</g>';
	}
	function rack(gx, y0, c, rows, leds, col, hgt) {
		var h = hgt || 1.35;
		return box(gx, y0, 0, .8, .8, h, col || 'var(--dark)') + rackFace(gx, y0 + .8, c, rows, leds);
	}

	/* ---------- back-wall decor (x = left edge of the slot; everything sits in y from T to ~1.9) ---------- */
	var ACAD = { Fundamentals: ['AZ-900', 'AI-901'], Architect: ['AZ-305', 'AZ-104'], 'lab-guide': ['LAB', 'GUIDE'] };
	function wallScreen(x, c, k) {
		var bars = [.35, .6, .45, .85, .65, .95].map(function (h, i) { return '<rect x="' + (.22 + i * .33) + '" y=".13" width=".2" height="' + (h * .55).toFixed(2) + '" rx=".02" fill="' + c + '" opacity="' + (.6 + i * .06) + '"/>'; }).join('');
		var line = '<path d="M.25 .45 L.65 .6 L1.0 .5 L1.4 .78 L1.8 .66 L2.2 .88" fill="none" stroke="#7fe3ff" stroke-width=".05" stroke-linecap="round" stroke-linejoin="round"/>';
		return '<g transform="' + planeY(x + .1, T + .02, .5) + '"><rect width="2.4" height="1" rx=".07" fill="var(--dark)" stroke="#8e98ad" stroke-width=".05"/>' + bars + (k % 2 ? line : '') + '</g>';
	}
	function copier(x, c) {
		return box(x + .1, T + .35, 0, .9, .65, .75, '#e3e8f3') + box(x + .05, T + .32, .75, 1, .71, .1, '#b7c3dc') + box(x + .2, T + .5, .85, .5, .3, .04, '#fff') + led(x + .85, T + 1.0, .5, '#5df2a0') + led(x + .7, T + 1.0, .5, c, 'b');
	}
	function meeting(x, c) {
		var s = cyl(x + 1, T + 1.1, .55, 0, .42, 'var(--wood)') + cyl(x + .15, T + 1.0, .2, 0, .3, c) + cyl(x + 1.85, T + 1.0, .2, 0, .3, c) + cyl(x + 1, T + 1.8, .2, 0, .3, c);
		return s + tile(ic(AWArt.icons.Copilot), x + 1, T + 1.1, 2.0, 34, 'b') + star(x + .3, T + .5, 2.6, '#c9a7ff', .8, .4);
	}
	function plantPair(x) { return plant(x + .3, T + .5) + plant(x + .75, T + 1.25); }
	function whiteboard(x, c, k) {
		var s = '<g transform="' + planeY(x + .05, T + .02, .45) + '"><rect width="3.2" height="1" rx=".08" fill="#ffffff" stroke="#b8c2d8" stroke-width=".04"/>';
		if (k % 2) s += [0, 1, 2, 3].map(function (i) { return '<rect x="' + (.2 + i * .75) + '" y="' + (i % 2 ? .5 : .2) + '" width=".55" height=".3" rx=".04" fill="' + ['#ffd36a', '#7ff0e0', '#ff9db0', '#b9a7ff'][i] + '"/>'; }).join('') + '<path d="M.2 .12C1 .05 2 .1 3 .12" stroke="' + c + '" stroke-width=".05" fill="none" stroke-linecap="round"/>';
		else s += '<rect x=".22" y=".3" width=".7" height=".4" rx=".1" fill="#4aa3ff"/><rect x="1.25" y=".26" width=".8" height=".48" rx=".12" fill="' + c + '"/><rect x="2.4" y=".3" width=".6" height=".4" rx=".1" fill="#ff9d4a"/><path d="M.95 .5H1.2M2.08 .5H2.36" stroke="#6b7694" stroke-width=".06" stroke-linecap="round"/><circle cx="1.65" cy=".5" r=".1" fill="#fff"/>';
		return s + '</g>';
	}
	function robot(x, c) {
		var rx = x + .3, ry = T + .7;
		return box(rx, ry, 0, .6, .5, .12, '#8f9bb3') + box(rx + .05, ry + .02, .12, .5, .44, .5, 'var(--glass)') + box(rx - .02, ry, .62, .64, .52, .42, '#eef3fb') +
			'<g transform="' + planeY(rx, ry + .52, .62) + '"><ellipse class="eye" cx=".2" cy=".22" rx=".07" ry=".09" fill="#1b1f2b"/><ellipse cx=".44" cy=".22" rx=".07" ry=".09" fill="#1b1f2b"/><path d="M.26 .1q.06 -.06 .12 0" stroke="#1b1f2b" stroke-width=".03" fill="none"/></g>' +
			box(rx + .3, ry + .22, 1.04, .04, .04, .22, '#8f9bb3') + led(rx + .32, ry + .24, 1.34, c) +
			tile(ic(AWArt.icons.CopilotStudio), rx + .3, ry + .25, 2.5, 30, 'c') + star(rx + .9, ry, 1.9, '#7ff0e0', .8, .2);
	}
	function racks(x, c, k, n) {
		var s = '';
		for (var i = 0; i < (n || 2); i++) s += rack(x + .1 + i * .95, T + .45, c, 5, 3, k === 'cloud' && i === 1 ? '#f1f4fa' : (k === 'cloud' ? '#2f3850' : 'var(--dark)'), i === 1 && k === 'cloud' ? 1.2 : 1.35);
		return s;
	}
	function orb(x, c) {
		var s = cyl(x + .8, T + 1.0, .42, 0, .3, 'var(--metal)'), o = P(x + .8, T + 1.0, 1.35);
		s += '<g class="ao-pulse"><circle cx="' + o[0].toFixed(1) + '" cy="' + o[1].toFixed(1) + '" r="30" fill="' + c + '" opacity=".22"/><circle cx="' + o[0].toFixed(1) + '" cy="' + o[1].toFixed(1) + '" r="19" fill="' + c + '"/><circle cx="' + (o[0] - 6).toFixed(1) + '" cy="' + (o[1] - 7).toFixed(1) + '" r="6" fill="#fff" opacity=".6"/></g>' +
			'<g class="orbit"><ellipse cx="' + o[0].toFixed(1) + '" cy="' + o[1].toFixed(1) + '" rx="38" ry="14" fill="none" stroke="' + c + '" stroke-width="1.5" opacity=".6"/><circle cx="' + (o[0] + 38).toFixed(1) + '" cy="' + o[1].toFixed(1) + '" r="4" fill="#ffd36a"/><circle cx="' + (o[0] - 38).toFixed(1) + '" cy="' + o[1].toFixed(1) + '" r="3" fill="#7fd1ff"/></g>';
		return s + tile(ic(AZ + 'ai%20+%20machine%20learning/03513-icon-service-AI-Studio.svg'), x + .8, T + 1.0, 3.0, 28);
	}
	function blackboard(x, c, k) {
		var t = ACAD[global.AW_HUB.key] || ['AZ-900', 'AZ-305'], a = t[k % 2], b = t[(k + 1) % 2];
		return '<g transform="' + planeY(x + .05, T + .02, .4) + '"><rect width="2.5" height="1" rx=".06" fill="#2f5d4a" stroke="#8a6a3e" stroke-width=".07"/>' +
			'<g transform="scale(1 -1)" fill="#f3f7ef" font-family="Segoe UI,sans-serif" font-weight="700"><text x=".2" y="-.6" font-size=".32">' + a + '</text><text x=".2" y="-.2" font-size=".25" fill="#ffd36a">' + b + '</text></g>' +
			'<path d="M1.65 .25h.6M1.65 .5h.5M1.65 .75h.6" stroke="#f3f7ef" stroke-width=".04" stroke-linecap="round" opacity=".6"/></g>';
	}
	function shelf(x) {
		var cols = ['#d9534f', '#4aa3ff', '#f2b705', '#5bd18a', '#b9a7ff', '#ff9d4a'], s = box(x + .1, T + .15, 0, 1.6, .55, 1.3, 'var(--wood)');
		s += '<g transform="' + planeY(x + .15, T + .15 + .56, .1) + '">';
		for (var r = 0; r < 3; r++) for (var i = 0; i < 9; i++) s += '<rect x="' + (i * .165) + '" y="' + (r * .39 + .04) + '" width=".13" height="' + (.26 + ((i * 7 + r * 3) % 4) * .02) + '" rx=".02" fill="' + cols[(i + r * 2) % cols.length] + '"/>';
		return s + '</g>';
	}
	function rosette(x, c) {
		var q = P(x + .55, T + 1.0, 1.15);
		return box(x + .3, T + .75, 0, .5, .5, .8, '#eef2fa') + box(x + .25, T + .7, .8, .6, .6, .08, '#b7c3dc') +
			'<g transform="translate(' + q[0].toFixed(1) + ' ' + q[1].toFixed(1) + ')"><g class="bob"><path d="M-8 6l-5 18l8 -5l5 6l2 -17z M8 6l5 18l-8 -5l-5 6l-2 -17z" fill="' + c + '"/><circle r="15" fill="#ffd36a" stroke="#fff" stroke-width="2"/><circle r="9" fill="none" stroke="#e0a500" stroke-width="2"/></g></g>' +
			box(x + 1.1, T + 1.0, 0, .45, .4, .22, '#d9534f') + box(x + 1.1, T + 1.0, .22, .45, .4, .16, '#4aa3ff');
	}
	function router(x, c) {
		var q = P(x + .55, T + 1.0, 1.2);
		return box(x + .2, T + .8, 0, .7, .55, .26, '#e9eef8') + box(x + .28, T + .86, .26, .1, .08, .5, '#e9eef8') + box(x + .72, T + .86, .26, .1, .08, .5, '#e9eef8') + led(x + .4, T + 1.35, .13, c) + led(x + .55, T + 1.35, .13, '#ffb347', 'b') +
			'<g class="wifi" fill="none" stroke="' + c + '" stroke-width="3" stroke-linecap="round" transform="translate(' + q[0].toFixed(1) + ' ' + (q[1] - 12).toFixed(1) + ')"><path d="M-9 -2a13 13 0 0 1 18 0"/><path d="M-16 -9a24 24 0 0 1 32 0"/><path d="M-23 -16a35 35 0 0 1 46 0"/></g>';
	}
	function globe(x, c) {
		var g = P(x + .6, T + 1.0, 1.8);
		return cyl(x + .6, T + 1.0, .3, 0, .9, 'var(--metal)') +
			'<g class="bob"><circle cx="' + g[0].toFixed(1) + '" cy="' + g[1].toFixed(1) + '" r="19" fill="' + c + '"/><g fill="none" stroke="#fff" stroke-width="1.3" opacity=".85"><ellipse cx="' + g[0].toFixed(1) + '" cy="' + g[1].toFixed(1) + '" rx="8" ry="19"/><path d="M' + (g[0] - 19) + ' ' + g[1].toFixed(1) + 'h38M' + (g[0] - 15) + ' ' + (g[1] - 9).toFixed(1) + 'h30M' + (g[0] - 15) + ' ' + (g[1] + 9).toFixed(1) + 'h30"/></g></g>';
	}
	function vault(x, c) {
		return box(x + .1, T + .35, 0, 1.5, .7, 1.25, '#8e98ad') + box(x + .1, T + .35, 1.25, 1.5, .7, .1, '#aab3c6') +
			'<g transform="' + planeY(x + .1, T + 1.05, 0) + '"><rect x=".12" y=".12" width="1.26" height="1" rx=".08" fill="#a4adc1" stroke="#6f7a92" stroke-width=".04"/><circle cx=".75" cy=".62" r=".34" fill="#6f7a92"/><circle cx=".75" cy=".62" r=".26" fill="#cfd6e4"/>' +
			'<g stroke="#6f7a92" stroke-width=".05" stroke-linecap="round"><path d="M.75 .4v.44M.53 .62h.44M.6 .47l.3 .3M.9 .47l-.3 .3"/></g><circle cx="1.14" cy=".62" r=".05" fill="' + c + '"/></g>';
	}
	function lasers(x) {
		var s = '<g transform="' + planeF(x, T, .11) + '" stroke-width=".05">' + [0, 1].map(function (k) { return '<path class="led ' + 'bc'[k] + '" d="M.15 ' + (.7 + k * .45) + 'H2.55" stroke="#ff4d5a" stroke-dasharray=".12 .08"/>'; }).join('') + '</g>';
		[[.05, .6], [2.55, .6], [.05, 1.2], [2.55, 1.2]].forEach(function (p) { s += box(x + p[0], T + p[1], 0, .12, .12, .55, '#7a8499'); });
		return s + disc(x + 1.3, T + 1.7, .15, .11, '#f2b705') + disc(x + 1.3, T + 1.7, .07, .12, '#c78f00');
	}
	function shield(x, c) {
		var q = P(x + .7, T + 1.0, 1.9);
		return box(x + .35, T + .65, 0, .7, .7, .55, '#8e98ad') + box(x + .3, T + .6, .55, .8, .8, .08, '#aab3c6') +
			'<g class="bob"><path transform="translate(' + q[0].toFixed(1) + ' ' + q[1].toFixed(1) + ')" d="M0 -22 L18 -15 V0 C18 12 8 20 0 24 C-8 20 -18 12 -18 0 V-15 Z" fill="' + c + '" stroke="#fff" stroke-width="2"/><path transform="translate(' + q[0].toFixed(1) + ' ' + q[1].toFixed(1) + ')" d="M-8 0l5 5l10 -11" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></g>';
	}
	function cams(x) {
		var s = '<g transform="' + planeY(x + .1, T + .02, .5) + '">';
		[0, 1, 2].forEach(function (i) {
			s += '<rect x="' + (i * .8) + '" y="0" width=".72" height=".9" rx=".05" fill="#10192b" stroke="#8e98ad" stroke-width=".04"/><rect x="' + (i * .8 + .07) + '" y=".1" width=".58" height=".7" rx=".03" fill="' + ['#1d3a44', '#2a3350', '#1f3b2c'][i] + '"/>' +
				'<circle class="led ' + 'abc'[i] + '" cx="' + (i * .8 + .6) + '" cy=".74" r=".04" fill="#ff4d5a"/><circle cx="' + (i * .8 + .36) + '" cy=".56" r=".12" fill="#6fd6c5" opacity=".6"/><rect x="' + (i * .8 + .27) + '" y=".25" width=".18" height=".22" rx=".08" fill="#6fd6c5" opacity=".6"/>';
		});
		return s + '</g>' + box(x + 1.15, T + .05, 1.5, .3, .25, .2, '#6f7a92');
	}
	function kanban(x, c, k) {
		var cols = ['#4aa3ff', '#ffb347', '#5bd18a'], s = '<g transform="' + planeY(x + .05, T + .02, .4) + '"><rect width="2.6" height="1.05" rx=".06" fill="#fff" stroke="#b8c2d8" stroke-width=".04"/>';
		cols.forEach(function (cc, i) { s += '<rect x="' + (.1 + i * .84) + '" y=".1" width=".7" height=".13" rx=".04" fill="' + cc + '"/><rect x="' + (.14 + i * .84) + '" y=".34" width=".62" height=".26" rx=".04" fill="' + cc + '" opacity=".35"/><rect x="' + (.14 + i * .84) + '" y=".68" width=".62" height=".26" rx=".04" fill="' + cc + '" opacity=".35"/>'; });
		return s + '<rect class="sticky" style="--sx:.84px" x=".14" y="' + (k % 2 ? .68 : .34) + '" width=".62" height=".26" rx=".04" fill="#ffb347"/></g>';
	}
	function conveyor(x, c) {
		var s = box(x + .1, T + .9, 0, 2.6, .6, .28, '#343c52') + '<g transform="' + planeF(x, T, .28) + '"><path d="M.2 1.1h2.4M.2 1.35h2.4" stroke="#ffb347" stroke-width=".06" stroke-dasharray=".14 .1"/></g>';
		[['', c, 0], ['b', '#4aa3ff', 0], ['c', '#ffb347', 0]].forEach(function (p) {
			s += '<g class="belt ' + p[0] + '" style="--bx:' + (1.9 * A).toFixed(0) + 'px;--by:' + (1.9 * B).toFixed(0) + 'px">' + box(x + .2, T + 1.05, .28, .4, .3, .26, p[1]) + '</g>';
		});
		var q = P(x + 1.4, T + 1.2, 2.5);
		return s + '<g class="bob"><text x="' + q[0].toFixed(1) + '" y="' + (q[1] + 14).toFixed(1) + '" text-anchor="middle" font-size="44" font-weight="800" fill="' + c + '" stroke="#fff" stroke-width="2.4" paint-order="stroke" font-family="Segoe UI,sans-serif">\u221E</text></g>';
	}
	function containers(x) {
		var s = '', cs = ['#e0643a', '#326ce5', '#f2b705'];
		[[0, 0, 0], [.95, 0, 0], [.45, .05, .55]].forEach(function (p, i) {
			var bx = x + .1 + p[0], by = T + .5 + p[1], bz = p[2];
			s += box(bx, by, bz, .9, .6, .5, cs[i]) + '<g transform="' + planeY(bx + .05, by + .61, bz + .05) + '" stroke="#fff" stroke-opacity=".35" stroke-width=".03">' + [1, 2, 3, 4, 5].map(function (j) { return '<path d="M' + (j * .15) + ' .05V.4"/>'; }).join('') + '</g>';
		});
		return s;
	}
	function dbs(x, c) {
		var s = '';
		[[.5, 1.0], [1.3, 1.0]].forEach(function (p) { s += cyl(x + p[0], T + p[1], .38, 0, .22, '#e6edf8') + cyl(x + p[0], T + p[1], .38, .22, .22, '#cfd9ec') + cyl(x + p[0], T + p[1], .38, .44, .22, '#e6edf8') + led(x + p[0] + .25, T + p[1] + .35, .55, c, 'b'); });
		return s;
	}
	function cloudTiles(x, c) {
		var q = P(x + 1.3, T + .9, 3.0);
		return '<g class="bob"><path transform="translate(' + q[0].toFixed(1) + ' ' + q[1].toFixed(1) + ') scale(1.3)" d="M-34 14 C-46 14 -46 -6 -32 -6 C-32 -22 -8 -26 -2 -12 C8 -24 32 -18 30 -2 C46 -2 46 14 32 14 Z" fill="#fff4e6" stroke="' + c + '" stroke-width="2.2"/></g>' +
			tile(ic(AZ + 'compute/10021-icon-service-Virtual-Machine.svg'), x + .5, T + .9, 2.6, 20, 'b') + tile(ic(AZ + 'databases/10121-icon-service-Azure-Cosmos-DB.svg'), x + 1.3, T + .9, 3.0, 20) + tile(ic(AZ + 'storage/10086-icon-service-Storage-Accounts.svg'), x + 2.1, T + .9, 2.6, 20, 'c') +
			box(x + .5, T + .5, 0, .7, .7, .5, c) + box(x + .55, T + .5, .5, .6, .6, .4, '#ffcf99') + cyl(x + 1.9, T + 1.0, .3, 0, .22, '#e6edf8') + cyl(x + 1.9, T + 1.0, .3, .22, .22, '#cfd9ec');
	}

	var BACK = {
		business: [[2.6, wallScreen], [1.3, copier], [2.2, meeting], [1.2, plantPair]],
		makers: [[3.3, whiteboard], [1.3, robot], [3.3, whiteboard], [1.2, plantPair]],
		ai: [[2.0, racks], [1.8, orb], [2.6, wallScreen], [2.0, racks]],
		academy: [[2.6, blackboard], [1.9, shelf], [1.8, rosette], [2.6, blackboard]],
		network: [[2.0, racks], [1.3, router], [1.2, globe], [2.0, racks]],
		security: [[1.8, vault], [2.7, lasers], [1.5, shield], [2.6, cams]],
		devops: [[2.7, kanban], [2.9, conveyor], [2.2, containers], [2.7, kanban]],
		cloud: [[2.9, function (x, c, k) { return racks(x, c, 'cloud', 3); }], [1.9, dbs], [2.8, cloudTiles], [2.9, function (x, c, k) { return racks(x, c, 'cloud', 3); }]]
	};

	/* ---------- side-wall & lobby bits ---------- */
	function sideWindow(y, k) {
		return '<g transform="' + planeX(T + .02, y + .1, .45) + '"><rect width="1.3" height=".95" rx=".05" fill="var(--glass)" stroke="var(--wall-trim)" stroke-width=".06"/><path d="M.65 0V.95M0 .48H1.3" stroke="var(--wall-trim)" stroke-width=".05"/><path d="M.1 .85L.5 .55M.7 .85L1.0 .62" stroke="#fff" stroke-width=".05" opacity=".5" stroke-linecap="round"/></g>';
	}
	function sidePoster(y, c, k) {
		return '<g transform="' + planeX(T + .02, y + .25, .55) + '"><rect width=".9" height="1" rx=".05" fill="var(--sheet)" stroke="#b8c2d8" stroke-width=".04"/><rect x=".12" y=".62" width=".66" height=".26" rx=".04" fill="' + c + '"/>' +
			[.18, .38, .58].map(function (h, i) { return '<rect x="' + (.14 + i * .22) + '" y=".1" width=".14" height="' + (h * (k % 2 ? 1 : .8)).toFixed(2) + '" fill="' + c + '" opacity="' + (.4 + i * .2) + '"/>'; }).join('') + '</g>';
	}
	function sideCabinet(y) { return box(T + .15, y + .25, 0, .5, .9, .75, 'var(--metal)') + box(T + .13, y + .23, .75, .54, .94, .06, '#aab3c6'); }

	/* ---------- the render ---------- */
	function vacant(x, y, k, c) { // fills an unused slot of the last row
		if (k % 3 === 0) return plant(x + .5, y - .1) + plant(x + 1.2, y + .4);
		if (k % 3 === 1) return cyl(x + .9, y + .2, .5, 0, .42, 'var(--wood)') + cyl(x + .1, y + .2, .2, 0, .3, c) + cyl(x + 1.7, y + .2, .2, 0, .3, c) + cyl(x + .9, y - .5, .2, 0, .3, c) + cyl(x + .9, y + .9, .2, 0, .3, c);
		return box(x + .2, y - .2, 0, .6, .6, .8, 'var(--metal)') + box(x + .15, y - .25, .8, .7, .7, .06, '#aab3c6') + plant(x + 1.4, y + .3);
	}

	function pod(api, i, px, py, c, shirts) {
		var l = api._ls[i], accs = ['none', 'glasses', 'headset', 'none', 'badge', 'glasses', 'none', 'headset'], first = l.first;
		var x0 = px - .15, x1 = px + 1.95, y0 = py - .8, y1 = py + 1.0;
		var hull = [[x0, y1, 0], [x0, y1, 2.0], [x0, y0, 2.0], [x1, y0, 2.0], [x1, y0, 0], [x1, y1, 0]];
		var plate = [[x0, y0, .02], [x1, y0, .02], [x1, y1, .02], [x0, y1, .02]];
		var s = '<g class="pod" data-i="' + i + '" style="--zc:' + c + '">';
		s += '<polygon class="rug" points="' + pts(plate) + '"/><polygon class="hl" points="' + pts(plate) + '"/><g class="lift">';
		s += '<ellipse class="glow" cx="' + P(px + .7, py - .15, .04)[0].toFixed(1) + '" cy="' + P(px + .7, py - .15, .04)[1].toFixed(1) + '" rx="62" ry="34" fill="url(#aw-h2-glow)"/>';
		s += chair(px + .45, py - .55, ['#5d6b8a', '#6b5d8a', '#4f7a8a', '#8a6b5d'][i % 4]);
		s += W(px + .7, py - .3, 0, Object.assign(look(i * 2 + 1, shirts[i % shirts.length], accs[i % accs.length], { pose: 'type', sit: true, d: i % 4 }), { s: .95 }));
		s += box(px, py, 0, 1.4, .8, .55, 'var(--wood)') + box(px + .45, py + .12, .55, .5, .06, .36, 'var(--dark)') + box(px + .62, py + .1, .55, .16, .1, .05, 'var(--dark)') + led(px + .7, py + .12, .66, c, 'abc'[i % 3]);
		s += box(px + .1, py + .46, .55, .4, .22, .03, '#e8ecf5');
		var m = i % 3;
		s += m === 0 ? cyl(px + 1.15, py + .5, .08, .55, .12, '#fff') : (m === 1 ? box(px + 1.0, py + .42, .55, .26, .3, .05, '#ffd36a') : box(px + 1.0, py + .45, .55, .3, .2, .04, '#e8ecf5') + box(px + 1.04, py + .48, .59, .3, .2, .04, '#dfe6f7'));
		if (api.zone.id === 'business') s += tile(ic(AWArt.icons[['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams', 'Copilot'][i % 6]]), px + .7, py + .1, 2.45, 22, 'sm ' + 'abc'[i % 3]);
		// number sign
		var sx = px + .2, sy = py + .6, q = P(sx, sy, 1.05), k = api._k, r = 14 * k;
		s += box(sx - .03, sy - .03, .55, .06, .06, .38, '#8e98ad');
		s += '<g class="badge"><circle cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="' + r.toFixed(1) + '"/><text x="' + q[0].toFixed(1) + '" y="' + (q[1] + 5.6 * k).toFixed(1) + '" text-anchor="middle" style="font-size:' + (15.5 * k).toFixed(1) + 'px">' + api.esc(l.n) + '</text></g>';
		if (first) {
			var a = P(sx, sy, 1.05), t = api.ui('here');
			s += '<g class="start"><g transform="translate(' + a[0].toFixed(1) + ' ' + (a[1] - r - 6 * k).toFixed(1) + ') scale(' + (.9 * k).toFixed(2) + ')"><path d="M0 8l-9 -11h6v-9h6v9h6z" fill="' + c + '" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></g>' +
				'<g class="startpill" transform="translate(' + (a[0] - 46 * k).toFixed(1) + ' ' + (a[1] - r - 40 * k).toFixed(1) + ')"><rect x="-40" y="-' + (10 * k).toFixed(1) + '" width="80" height="' + (20 * k).toFixed(1) + '" rx="' + (10 * k).toFixed(1) + '"/><text y="' + (4.4 * k).toFixed(1) + '" text-anchor="middle" style="font-size:' + (12 * k).toFixed(1) + 'px">' + api.esc(t) + '</text></g></g>';
		}
		s += '</g><polygon class="hit" points="' + pts(hull) + '"/><rect class="ao-focus-ring" x="0" y="0" width="0" height="0"/></g>';
		return s;
	}

	function walker(x, y, len, dur, delay, i, shirt, acc, neg) {
		var q = P(x, y, 0), sgn = neg ? -1 : 1;
		return '<g transform="translate(' + q[0].toFixed(1) + ' ' + q[1].toFixed(1) + ')"><g class="walker" style="--dx:' + (sgn * len * A).toFixed(0) + 'px;--dy:' + (sgn * len * B).toFixed(0) + 'px;--dur:' + dur + 's;animation-delay:-' + delay + 's">' +
			AWArt.worker(Object.assign({ x: 0, y: 0, s: .95, pose: 'walk', dir: neg ? -1 : 1 }, look(i, shirt, acc))) + '</g></g>';
	}

	function injectCss() {
		if (document.getElementById('aw-hub-2-css')) return;
		var st = document.createElement('style'); st.id = 'aw-hub-2-css';
		st.textContent = [
			'.ao-body { --floor:#e7dfcf; --floor-edge:#cfc4ad; --slab:#bfb299; --wall:#fbf8f1; --wall-trim:#fff; --wood:#c9a176; --metal:#9aa3b5; --dark:#2b3347; --glass:#bfe3ff; --shade-l:13%; --shade-r:27%; --shadow:rgba(40,30,10,.16); --sheet:#ffffff; --screen:#8fd0ff; --label-bg:#ffffff; --label-ink:#1c2742; --glow:0; --rug:12%; }',
			'.ao-body.theme-dark { --floor:#252e4a; --floor-edge:#1b2238; --slab:#161c30; --wall:#3a4568; --wall-trim:#6c7aa6; --wood:#7a5d45; --metal:#566079; --dark:#141a2c; --glass:#35507a; --shade-l:26%; --shade-r:44%; --shadow:rgba(0,0,0,.4); --sheet:#dfe6fa; --screen:#7fe3ff; --label-bg:#1f2947; --label-ink:#eaf0ff; --glow:.3; --rug:22%; }',
			'#ao-scene .bx .t { fill:var(--c); } #ao-scene .bx .l { fill:color-mix(in srgb, var(--c), #000 var(--shade-l)); } #ao-scene .bx .r { fill:color-mix(in srgb, var(--c), #000 var(--shade-r)); }',
			'#ao-scene .bx polygon { stroke:color-mix(in srgb, var(--c), #000 42%); stroke-width:.7; stroke-linejoin:round; }',
			'#ao-scene .slab-shadow { fill:var(--shadow); filter:blur(8px); }',
			'#ao-scene .pod .lift { transition:transform .26s cubic-bezier(.2,.8,.2,1), filter .26s; }',
			'#ao-scene .pod:hover .lift, #ao-scene .pod.is-active .lift { transform:translateY(-7px); filter:drop-shadow(0 12px 8px rgba(0,0,0,.25)); }',
			'#ao-scene .pod .rug { fill:color-mix(in srgb, var(--zc) var(--rug), var(--floor)); stroke:color-mix(in srgb, var(--zc) 35%, var(--floor)); stroke-width:1.2; stroke-linejoin:round; transition:fill .2s; }',
			'#ao-scene .pod .hl { fill:none; stroke:var(--zc); stroke-width:3.2; stroke-linejoin:round; opacity:0; transition:opacity .2s; pointer-events:none; }',
			'#ao-scene .pod:hover .hl, #ao-scene .pod.is-active .hl { opacity:1; } #ao-scene .pod:hover .rug, #ao-scene .pod.is-active .rug { fill:color-mix(in srgb, var(--zc) 38%, var(--floor)); }',
			'#ao-scene .pod .hit { fill:transparent; }',
			'#ao-scene .pod .glow { opacity:var(--glow); } #ao-scene .gl0 { stop-color:var(--screen); } #ao-scene .gl1 { stop-color:var(--screen); stop-opacity:0; }',
			'#ao-scene .badge circle { fill:color-mix(in srgb, var(--zc) 70%, #0a1226); stroke:#fff; stroke-width:2.2; filter:drop-shadow(0 2px 2px rgba(0,0,0,.3)); }',
			'#ao-scene .badge text, #ao-scene .startpill text { fill:#fff; font-family:"Segoe UI",sans-serif; font-weight:800; paint-order:stroke; stroke:rgba(10,18,38,.45); stroke-width:2px; }',
			'#ao-scene .startpill rect { fill:color-mix(in srgb, var(--zc) 70%, #0a1226); stroke:#fff; stroke-width:1.6; } #ao-scene .startpill text { stroke:none; }',
			'#ao-scene .tile rect { fill:var(--sheet); filter:drop-shadow(0 4px 5px rgba(0,0,0,.28)); } #ao-scene .tile.sm rect { filter:none; stroke:rgba(0,0,0,.12); stroke-width:1; }',
			'#ao-scene .label { pointer-events:none; } #ao-scene .label rect { fill:var(--label-bg); stroke:var(--zc); stroke-width:2; filter:drop-shadow(0 3px 4px rgba(0,0,0,.2)); }',
			'#ao-scene .label text { fill:var(--label-ink); font:700 13.5px "Segoe UI",sans-serif; } #ao-scene .label circle { fill:var(--zc); }',
			'#ao-scene .led { animation:aoBlink 1.2s steps(2,end) infinite; } #ao-scene .led.b { animation-duration:.8s; } #ao-scene .led.c { animation-duration:1.7s; }',
			'#ao-scene .orbit { transform-box:fill-box; transform-origin:center; animation:awH2spin 7s linear infinite; } @keyframes awH2spin { to { transform:rotate(360deg); } }',
			'#ao-scene .wifi path { animation:awH2wifi 2s ease-out infinite; opacity:0; } #ao-scene .wifi path:nth-child(2) { animation-delay:.35s; } #ao-scene .wifi path:nth-child(3) { animation-delay:.7s; }',
			'@keyframes awH2wifi { 0%{ opacity:0; } 30%{ opacity:1; } 100%{ opacity:0; } }',
			'#ao-scene .walker { animation:awH2walk var(--dur,16s) linear infinite; }',
			'@keyframes awH2walk { 0%{ transform:translate(0,0) scaleX(1); } 48%{ transform:translate(var(--dx),var(--dy)) scaleX(1); } 50%{ transform:translate(var(--dx),var(--dy)) scaleX(-1); } 98%{ transform:translate(0,0) scaleX(-1); } 100%{ transform:translate(0,0) scaleX(1); } }',
			'#ao-scene .belt { animation:awH2belt 6s linear infinite; } #ao-scene .belt.b { animation-delay:-2s; } #ao-scene .belt.c { animation-delay:-4s; }',
			'@keyframes awH2belt { 0%{ transform:translate(0,0); opacity:0; } 8%{ opacity:1; } 92%{ opacity:1; } 100%{ transform:translate(var(--bx),var(--by)); opacity:0; } }',
			'#ao-scene .sticky { animation:awH2sticky 7s ease-in-out infinite; } @keyframes awH2sticky { 0%,30%{ transform:translate(0,0); } 50%,80%{ transform:translate(var(--sx),0); } 100%{ transform:translate(0,0); } }',
			'#ao-scene .sparkle { transform-box:fill-box; transform-origin:center; animation:awH2twinkle 2.2s ease-in-out infinite; } @keyframes awH2twinkle { 0%,100%{ transform:scale(.6) rotate(0); opacity:.5; } 50%{ transform:scale(1.15) rotate(45deg); opacity:1; } }',
			'#ao-scene .bob { animation:aoFloat 3.2s ease-in-out infinite; } #ao-scene .bob.b { animation-delay:-1.1s; } #ao-scene .bob.c { animation-delay:-2.2s; }',
			'#ao-scene .start { animation:awH2start 1.3s ease-in-out infinite; } @keyframes awH2start { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-7px); } }',
			'#ao-scene svg { max-height:80vh; }',
			'@media (max-width:700px) { .ao-scene-wrap { overflow-x:auto; -webkit-overflow-scrolling:touch; padding-bottom:.4rem; } #ao-scene svg { min-width:var(--mw,820px); max-height:none; } }'
		].join('\n');
		document.head.appendChild(st);
	}

	function render(api) {
		injectCss();
		ROOT = new Array(api.hub.depth + 1).join('../');
		api._ls = api.lessons;
		var z = api.zone.id, c = api.color, n = api._ls.length;
		// grid: balanced rows, reading order = front row first, left → right
		var C = Math.ceil(Math.sqrt(n * 1.4)), R = Math.ceil(n / C); C = Math.ceil(n / R);
		var roomy = Math.min(1, Math.max(0, (12 - n) / 8)); // few lessons → roomier pods so the floor does not feel empty
		var PX = 2.4 + roomy * .9, PY = 2.3 + roomy * .8, BACKD = 2.3, LOB = 2.5, X0 = 1.5;
		var WW = Math.max(10, X0 + C * PX + .7), DD = BACKD + R * PY + LOB, gx0 = X0 + (WW - X0 - .5 - C * PX) / 2 + .2;
		var vbw0 = (WW + DD) * A, k = Math.min(1.5, Math.max(1, vbw0 / 1000));
		api._k = k;
		var shirts = [c, '#0078d4', '#2da44e', '#e8590c', '#7b4ddc', '#d6407f', '#2f3b5c', '#0f766e'];
		var s = '';
		var C4 = [P(0, 0, 0), P(WW, 0, 0), P(WW, DD, 0), P(0, DD, 0)];
		s += '<polygon class="slab-shadow" points="' + C4.map(function (p) { return (p[0] + 20).toFixed(1) + ',' + (p[1] + 54).toFixed(1); }).join(' ') + '"/>';
		var floor = 'color-mix(in srgb, ' + c + ' 9%, var(--floor))';
		s += box(0, 0, -.55, WW, DD, .55, 'var(--slab)') + box(0, 0, 0, WW, DD, .02, floor);
		var g = '<g transform="' + planeF(0, 0, .03) + '" stroke="var(--floor-edge)" stroke-width=".02" opacity=".7">';
		for (var i = 1; i < WW; i++) g += '<path d="M' + i + ' 0V' + DD + '"/>';
		for (var j = 1; j < DD; j++) g += '<path d="M0 ' + j + 'H' + WW + '"/>';
		s += g + '</g>';
		// the pod carpet and the lobby carpet
		var cp = [[X0 - .1, BACKD - .1, .03], [WW - .4, BACKD - .1, .03], [WW - .4, DD - LOB + .1, .03], [X0 - .1, DD - LOB + .1, .03]];
		s += '<polygon points="' + pts(cp) + '" fill="color-mix(in srgb, ' + c + ' 7%, var(--floor))" opacity=".9"/>';
		var doorX = gx0 + .5;
		s += '<g transform="' + planeF(doorX - .1, DD - 1.35, .035) + '"><rect width="1.4" height="1.2" rx=".12" fill="' + c + '" opacity=".55"/><rect x=".1" y=".1" width="1.2" height=".05" fill="#fff" opacity=".7"/><rect x=".1" y="1.05" width="1.2" height=".05" fill="#fff" opacity=".7"/></g>';
		if (z === 'network') s += '<g transform="' + planeF(0, 0, .04) + '" fill="none" stroke-linecap="round" stroke-width=".07"><path d="M2.2 1.3V' + (BACKD - .2) + 'H' + (WW - 2) + '" stroke="' + c + '"/><path d="M3.1 1.3V' + (BACKD - .02) + 'H' + (WW - 3) + '" stroke="#ffb347"/></g>';

		// walls: tall at the back, low at the front with a door gap
		s += box(0, 0, 0, WW, T, H, 'var(--wall)') + box(0, 0, H, WW, T, .1, c) + box(0, T, 0, T, DD - T, H, 'var(--wall)') + box(0, T, H, T, DD - T, .1, c);

		// back-wall decor, spread evenly across the width
		var items = BACK[z] || BACK.cloud, avail = WW - X0 - .3, used = [], tot = 0, idx = 0;
		while (true) { var it = items[idx % items.length]; if (tot + it[0] > avail && used.length >= 2) break; if (tot + it[0] > avail) break; used.push([it, idx]); tot += it[0]; idx++; if (used.length >= 12) break; }
		var gap = (avail - tot) / (used.length + 1), cx = X0 + gap - .15;
		used.forEach(function (u) { s += u[0][1](cx, c, u[1]); cx += u[0][0] + gap; });

		// side wall (x = 0): windows, posters, cabinets and plants along the left aisle
		var sy = BACKD + .2, sk = 0;
		while (sy + 1.4 < DD - LOB + 1.3) {
			var kind = sk % 4;
			s += kind === 0 ? sideWindow(sy, sk) : (kind === 1 ? sideCabinet(sy) + plant(T + .45, sy + 1.45) : (kind === 2 ? sidePoster(sy, c, sk) : sideWindow(sy, sk) + plant(T + .5, sy + .55)));
			sy += 2.05; sk++;
		}

		// back aisle walker (drawn behind the pods)
		var bl = WW - X0 - 3.4;
		s += walker(X0 + 1.2, BACKD + .35, bl, Math.round(bl * 1.9), 3, 40, '#0078d4', 'badge', false);

		// pods: back row first so the front rows overlap correctly
		var pods = [];
		for (var r = R - 1; r >= 0; r--) {
			for (var q = 0; q < C; q++) {
				var li = r * C + q;
				if (li >= n) { s += vacant(gx0 + q * PX + .1, DD - LOB - .85 - r * PY, q - (n - r * C), c); continue; }
				pods.push(li);
				s += pod(api, li, gx0 + q * PX + .1, DD - LOB - .85 - r * PY, c, shirts);
			}
		}

		// lobby: reception (or a guard post) next to the door, sofa, plants and two walkers
		var ly = DD - 1.95;
		if (z === 'security') {
			s += box(doorX + 1.7, ly + .3, 0, .12, .12, .6, '#7a8499') + box(doorX + 2.9, ly + .3, 0, .12, .12, .6, '#7a8499') + box(doorX + 1.7, ly + .3, .6, 1.32, .12, .06, c) +
				W(doorX + 2.35, ly + .1, 0, Object.assign(look(10, '#26324f', 'cap', { pose: 'stand', d: 1 }), { s: 1 }));
		} else {
			s += W(doorX + 2.5, ly + .25, 0, Object.assign(look(14, c, 'badge', { pose: 'wave', d: 2 }), { s: .95 })) +
				box(doorX + 1.7, ly + .55, 0, 1.6, .5, .55, 'var(--wood)') + box(doorX + 1.65, ly + .52, .55, 1.7, .56, .07, c);
		}
		s += plant(1.0, DD - 1.5) + plant(WW - .8, DD - 1.5);
		if (WW > 13.5) s += box(WW - 4.2, ly + .35, 0, 1.7, .6, .35, mix(c, 55)) + box(WW - 4.2, ly + .2, .35, 1.7, .15, .5, mix(c, 45)) + cyl(WW - 2.1, ly + .65, .25, 0, .2, 'var(--wood)');
		var fl = WW - X0 - 3.2;
		s += walker(X0 + 4.2, DD - .9, fl - 3.5, Math.round(fl * 1.6), 4, 3, '#0078d4', 'badge', false);
		s += walker(WW - 1.8, DD - .75, fl - 2.2, Math.round(fl * 1.4), 9, 13, '#2da44e', 'hardhat', true);

		// low front walls with the door gap
		var dw = 1.3;
		s += box(0, DD - T, 0, doorX, T, .42, 'var(--wall)') + box(doorX + dw, DD - T, 0, WW - doorX - dw, T, .42, 'var(--wall)') + box(0, DD - T, .42, doorX, T, .08, c) + box(doorX + dw, DD - T, .42, WW - doorX - dw, T, .08, c) +
			box(WW - T, T, 0, T, DD - 2 * T, .42, 'var(--wall)') + box(WW - T, T, .42, T, DD - 2 * T, .08, c) + box(WW - T, 0, 0, T, T, .42, 'var(--wall)');

		// zone name tag outside the door
		var lq = P(doorX + .6, DD + 1.0, .3), la = P(doorX + .6, DD, .1);
		s += '<g class="label" style="--zc:' + c + '"><path d="M' + lq[0].toFixed(1) + ' ' + lq[1].toFixed(1) + 'L' + la[0].toFixed(1) + ' ' + la[1].toFixed(1) + '" stroke="' + c + '" stroke-width="2" stroke-dasharray="2 4" stroke-linecap="round" fill="none"/>' +
			'<g transform="translate(' + lq[0].toFixed(1) + ' ' + lq[1].toFixed(1) + ')"><rect x="0" y="-13" width="10" height="26" rx="13"/><circle cx="0" cy="0" r="5"/><text x="0" y="5">' + api.esc(api.zone.name) + '</text></g></g>';

		var vx0 = P(0, DD, 0)[0] - 70, vx1 = P(WW, 0, 0)[0] + 70, vy0 = -3.5 * Z, vy1 = P(WW, DD, 0)[1] + 55;
		var svg = '<svg viewBox="' + vx0.toFixed(0) + ' ' + vy0.toFixed(0) + ' ' + (vx1 - vx0).toFixed(0) + ' ' + (vy1 - vy0).toFixed(0) + '" role="group" aria-label="' + api.esc(api.name) + '" style="--mw:' + Math.round(Math.min(1050, Math.max(700, (vx1 - vx0) * .72))) + 'px"><defs><radialGradient id="aw-h2-glow"><stop class="gl0" offset="0"/><stop class="gl1" offset="1"/></radialGradient></defs>' + s + '</svg>';
		var host = document.getElementById('ao-scene'); host.innerHTML = svg;

		[].forEach.call(host.querySelectorAll('.label'), function (lg) {
			var t = lg.querySelector('text'), bb = t.getBBox(), rect = lg.querySelector('rect'), dot = lg.querySelector('circle'), wpx = bb.width + 36;
			rect.setAttribute('x', -wpx / 2); rect.setAttribute('width', wpx); dot.setAttribute('cx', -wpx / 2 + 15); t.setAttribute('x', 8); t.setAttribute('text-anchor', 'middle');
		});
		[].forEach.call(host.querySelectorAll('.startpill'), function (pl) {
			var t = pl.querySelector('text'), rc = pl.querySelector('rect'), w = t.getBBox().width + 22;
			rc.setAttribute('x', -w / 2); rc.setAttribute('width', w);
		});
		[].forEach.call(host.querySelectorAll('.pod'), function (pg) {
			var ring = pg.querySelector('.ao-focus-ring'), bb = pg.querySelector('.hit').getBBox();
			ring.setAttribute('x', bb.x); ring.setAttribute('y', bb.y); ring.setAttribute('width', bb.width); ring.setAttribute('height', bb.height);
			api.attach(pg, +pg.dataset.i);
		});
		var wrap = document.getElementById('ao-scene-wrap');
		if (wrap && !wrap._centered && wrap.scrollWidth > wrap.clientWidth) { wrap.scrollLeft = (wrap.scrollWidth - wrap.clientWidth) / 2; wrap._centered = true; }
	}

	global.AWHubDesign = global.AWHubDesign || {};
	global.AWHubDesign[2] = render;
})(window);
