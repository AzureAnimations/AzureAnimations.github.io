/* Hub page, design 4: the DOLLHOUSE. The building is the team's department building and every lesson is an office bay.
   Lesson 1 is on the ground floor (next to the lobby), reading left to right, climbing floor by floor.
   Same look as index-4.html (side-view cutaway, glass elevator, rooftop sculpture). Contract: see lib/js/aw-office-hub.js. */
(function (global) {
	'use strict';
	var BY = 196, RH = 210, PITCH = 224, X0 = 122, FW = 938, GAP = 6, TOP = 152;
	var APPS = ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams', 'Copilot'];
	var ACCS = ['glasses', 'headset', 'badge', 'none', 'tie'];
	var W = function (o) { return global.AWArt.worker(o); };
	var esc, ZNAME = '', ROOT = '', ZID = 'cloud', COLOR = '#0078d4';

	var CSS = [
		'#ao-scene { --sky1:#7cc6fb; --sky2:#e7f5ff; --grass:#9ed58a; --pave:#d3d6de; --shell:#e2d3ba; --slab:#c4b093; --ln:#2a3552;',
		'	--wallb:#fdf8ee; --wallmix:16%; --flr:#ead9bd; --ceil:#d6c8ae; --lobbyW:#f4ecdd; --lobbyF:#e1d3bc; --wallIT:#dfe5f2;',
		'	--deskt:#e0b07a; --deskf:#c58d55; --chair:#6a7aa3; --mon:#37425f; --rack:#3c4763; --rku:#5a688a; --glass:rgba(170,222,255,.32);',
		'	--win1:#9bd6ff; --win2:#eaf7ff; --bldg:#a3c5e6; --cone:.11; --cloud:#ffffff; --cloudo:.95; --board:#ffffff; --boardln:#cfd6e6;',
		'	--paper:#ffffff; --lampc:#ffe9a6; --pot:#d9794a; --leaf:#4fae6a; --leaf2:#7cc98b; --carf:rgba(255,255,255,.55); --lt:.17; }',
		'body.theme-dark #ao-scene { --sky1:#050924; --sky2:#1c2a63; --grass:#1d3a36; --pave:#2a3358; --shell:#2c3665; --slab:#202850; --ln:#070b1c;',
		'	--wallb:#2a3568; --wallmix:30%; --flr:#3a4373; --ceil:#1c2447; --lobbyW:#2d386b; --lobbyF:#3a4478; --wallIT:#1a2248;',
		'	--deskt:#a47649; --deskf:#835d37; --chair:#4a5784; --mon:#0f152b; --rack:#151c36; --rku:#2a3562; --glass:rgba(120,170,255,.16);',
		'	--win1:#08103a; --win2:#25387f; --bldg:#0b1235; --cone:.34; --cloud:#8d99d6; --cloudo:.28; --board:#e7ebfb; --boardln:#9aa5cf;',
		'	--paper:#dfe5fb; --lampc:#ffd979; --pot:#c4663c; --leaf:#3f9a5c; --leaf2:#62b774; --carf:rgba(255,235,170,.28); --lt:.12; }',
		'#ao-scene svg { display:block; width:100%; height:auto; overflow:visible; font-family:"Segoe UI",sans-serif; }',
		'#ao-scene .o { stroke:var(--ln); stroke-width:1.4; stroke-linejoin:round; stroke-linecap:round; }',
		'#ao-scene .l { fill:none; stroke:var(--ln); stroke-width:1.4; stroke-linecap:round; stroke-linejoin:round; }',
		'.bshell { fill:var(--shell); stroke:var(--ln); stroke-width:3; } .slab { fill:var(--slab); stroke:var(--ln); stroke-width:2; }',
		'.shaftbg { fill:color-mix(in srgb, var(--wallIT) 70%, var(--sky1)); } .rail { stroke:var(--ln); stroke-opacity:.45; stroke-width:2; }',
		'.ledge { fill:var(--slab); stroke:var(--ln); stroke-width:1.4; } .car { fill:var(--carf); stroke:var(--ln); stroke-width:2; } .carw { fill:var(--lobbyW); }',
		'.glint { stroke:#fff; stroke-opacity:.7; stroke-width:3; stroke-linecap:round; fill:none; } .cable { stroke:var(--ln); stroke-width:1.6; stroke-opacity:.7; }',
		'.d4car { animation:d4HCar var(--cardur,40s) infinite; }',
		'.wlk { animation:d4Walk 56s linear infinite; } .wlayer { pointer-events:none; }',
		'@keyframes d4Walk { 0% { transform:translateX(0) scaleX(1); } 47% { transform:translateX(var(--L)) scaleX(1); } 50% { transform:translateX(var(--L)) scaleX(-1); } 97% { transform:translateX(0) scaleX(-1); } 100% { transform:translateX(0) scaleX(1); } }',
		'body.theme-dark .roofln { --ln:#aab6e8; }',
		'.bay { cursor:pointer; } .lounge { cursor:default; }',
		'.wall { fill:color-mix(in srgb, var(--zc) var(--wallmix), var(--wallb)); } .alt .wall { fill:color-mix(in srgb, var(--zc) calc(var(--wallmix) * .62), var(--wallb)); }',
		'.lounge .wall { fill:color-mix(in srgb, var(--zc) calc(var(--wallmix) * .45), var(--wallb)); }',
		'.flr { fill:color-mix(in srgb, var(--zc) 10%, var(--flr)); } .ceil { fill:color-mix(in srgb, var(--zc) 28%, var(--ceil)); }',
		'.base { fill:none; stroke:var(--ln); stroke-opacity:.5; stroke-width:1.6; }',
		'.lamp { fill:var(--lampc); stroke:var(--ln); stroke-width:1.2; } .cone { fill:url(#d4cone); opacity:var(--cone); }',
		'.lt { fill:#fff; opacity:0; pointer-events:none; transition:opacity .2s; } .hl { fill:var(--zc); opacity:0; pointer-events:none; transition:opacity .2s; }',
		'.glow { fill:none; stroke:var(--zc); stroke-width:4; stroke-opacity:0; pointer-events:none; transition:stroke-opacity .2s; }',
		'.bay.is-active .lt { opacity:var(--lt); } .bay.is-active .hl { opacity:.14; } .bay.is-active .glow { stroke-opacity:.95; filter:drop-shadow(0 0 7px var(--zc)); }',
		'.bay .sgn { transition:transform .25s var(--ao-ease); } .bay.is-active .sgn { transform:translateY(3px); }',
		'.str { fill:none; stroke:var(--ln); stroke-width:1.6; } .plq { fill:color-mix(in srgb, var(--zc) 68%, #000); stroke:var(--ln); stroke-width:1.4; }',
		'.stx { font-family:"Segoe UI",sans-serif; font-weight:800; fill:#fff; } .pin { fill:#fff; fill-opacity:.7; }',
		'.deskt { fill:var(--deskt); } .deskf { fill:var(--deskf); } .drw { fill:var(--deskt); stroke:var(--ln); stroke-width:1; }',
		'.chair { fill:var(--chair); } .kbd { fill:#e8ecf5; } .mon { fill:var(--mon); }',
		'.scr { fill:color-mix(in srgb, var(--zc) 55%, #fff); } .scl { fill:none; stroke:#fff; stroke-opacity:.85; stroke-width:1.6; stroke-linecap:round; }',
		'body.theme-dark .scr { fill:color-mix(in srgb, var(--zc) 65%, #bfe2ff); filter:drop-shadow(0 0 4px var(--zc)); }',
		'.mug { fill:#fff; } .pot { fill:var(--pot); } .leaf { fill:var(--leaf); } .leaf2 { fill:var(--leaf2); }',
		'.rk { fill:var(--rack); } .rku { fill:var(--rku); } .slot { stroke:#fff; stroke-opacity:.35; stroke-width:1.4; stroke-linecap:round; }',
		'.paper { fill:var(--paper); } .brd { fill:var(--board); stroke:var(--boardln); stroke-width:2; }',
		'.winF { fill:#f5efe3; } .winM { fill:none; stroke:#f5efe3; stroke-width:3; } body.theme-dark .winF { fill:#4a557f; } body.theme-dark .winM { stroke:#4a557f; }',
		'.bldg { fill:var(--bldg); } .dstar, .dark-only { display:none; } body.theme-dark .dstar, body.theme-dark .dark-only { display:inline; } body.theme-dark .light-only { display:none; }',
		'.cld { fill:#fff; fill-opacity:.85; } body.theme-dark .cld { display:none; } .lit { fill:#ffd978; }',
		'.flow { fill:none; stroke-dasharray:5 4; animation:d4Flow 1.1s linear infinite; } @keyframes d4Flow { to { stroke-dashoffset:-9; } }',
		'.infl { stroke-dasharray:22 78; animation:d4Inf 3.2s linear infinite; } @keyframes d4Inf { to { stroke-dashoffset:-100; } }',
		'.spin { transform-box:fill-box; transform-origin:center; animation:d4Spin 16s linear infinite; } @keyframes d4Spin { to { transform:rotate(360deg); } }',
		'.pkg { animation:d4Pkg 4.8s linear infinite; } @keyframes d4Pkg { 0% { transform:translateX(0); opacity:0; } 10% { opacity:1; } 88% { opacity:1; } 100% { transform:translateX(40px); opacity:0; } }',
		'.door-l { animation:d4DoorL 9s ease-in-out infinite; } .door-r { animation:d4DoorR 9s ease-in-out infinite; }',
		'@keyframes d4DoorL { 0%,55%,100% { transform:translateX(0); } 68%,86% { transform:translateX(-24px); } } @keyframes d4DoorR { 0%,55%,100% { transform:translateX(0); } 68%,86% { transform:translateX(24px); } }',
		'.ink { fill:none; stroke:#fff; stroke-opacity:.9; stroke-width:1.6; stroke-linecap:round; } .chalk { font:italic 700 15px "Segoe UI",sans-serif; fill:#fff; fill-opacity:.92; }',
		'.twink { animation:aoBlink 2.6s ease-in-out infinite; }',
		'.sparkle { transform-box:fill-box; transform-origin:center; animation:d4Spark 2.2s ease-in-out infinite; } @keyframes d4Spark { 0%,100% { transform:scale(.3); opacity:.2; } 50% { transform:scale(1); opacity:1; } }',
		'.drift { animation:d4Drift linear infinite; } @keyframes d4Drift { from { transform:translateX(-260px); } to { transform:translateX(1340px); } }',
		'.bob { animation:aoFloat 4.5s ease-in-out infinite; }',
		'.nudge { animation:d4Nudge 1.3s ease-in-out infinite; } @keyframes d4Nudge { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-5px); } }',
		'.fl { font:800 9.5px "Segoe UI",sans-serif; fill:#7cf0c4; }',
		'.pilltx { font:800 12px "Segoe UI",sans-serif; fill:#3a2a00; }',
		'.bname { font-family:"Segoe UI",sans-serif; font-weight:800; fill:#fff; } .bteam { font-family:"Segoe UI",sans-serif; font-weight:700; fill:#fff; fill-opacity:.88; letter-spacing:.06em; }'
	].join('\n');

	function ensureCss() {
		if (document.getElementById('aw-hub-4-css')) return;
		var st = document.createElement('style'); st.id = 'aw-hub-4-css'; st.textContent = CSS; document.head.appendChild(st);
	}
	function mix(a, b, t) {
		function p(h) { h = h.replace('#', ''); return [0, 2, 4].map(function (i) { return parseInt(h.substr(i, 2), 16); }); }
		var A = p(a), B = p(b);
		return '#' + A.map(function (v, i) { var r = Math.round(v * (1 - t) + B[i] * t); return (r < 16 ? '0' : '') + r.toString(16); }).join('');
	}
	function fl(i, d) { return 'animation-delay:' + (-(i * 0.55)).toFixed(2) + 's;animation-duration:' + (d || 3.4) + 's'; }
	function logo(name, x, y, s) { return '<image href="' + ROOT + global.AWArt.icons[name] + '" x="' + (x - s / 2) + '" y="' + (y - s / 2) + '" width="' + s + '" height="' + s + '"/>'; }

	/* ---------- small props (bay-local, baseline BY) ---------- */
	function win(x, y, w, h) {
		return '<g><rect class="winF o" x="' + (x - 4) + '" y="' + (y - 4) + '" width="' + (w + 8) + '" height="' + (h + 8) + '" rx="4"/>' +
			'<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="2" fill="url(#d4win)"/>' +
			'<ellipse class="cld" cx="' + (x + w * 0.32) + '" cy="' + (y + h * 0.36) + '" rx="' + (w * 0.18) + '" ry="' + (h * 0.09) + '"/>' +
			'<circle class="dstar" cx="' + (x + w * 0.3) + '" cy="' + (y + h * 0.3) + '" r="1.4" fill="#fff"/><circle class="dstar" cx="' + (x + w * 0.72) + '" cy="' + (y + h * 0.55) + '" r="1.2" fill="#fff"/>' +
			'<path class="winM" d="M' + (x + w / 2) + ' ' + y + 'V' + (y + h) + 'M' + x + ' ' + (y + h / 2) + 'H' + (x + w) + '"/></g>';
	}
	function lamp(x) {
		return '<path class="cone" d="M' + (x - 8) + ' 18L' + (x - 44) + ' 140L' + (x + 44) + ' 140L' + (x + 8) + ' 18Z"/><path class="lamp" d="M' + (x - 12) + ' 12h24l-5 8h-14z"/>';
	}
	function plant(x, base, s) {
		return '<g transform="translate(' + x + ' ' + base + ') scale(' + (s || 1) + ')">' +
			'<path class="leaf o" d="M0 -15C-16 -20 -18 -38 -6 -44C-2 -34 0 -26 0 -15Z"/><path class="leaf o" d="M0 -15C16 -20 18 -38 6 -44C2 -34 0 -26 0 -15Z"/>' +
			'<path class="leaf2 o" d="M0 -15C-7 -28 -4 -44 0 -54C4 -44 7 -28 0 -15Z"/><path class="pot o" d="M-9 -16h18l-3 16h-12z"/></g>';
	}
	function mug(x, y) { return '<g><rect class="mug o" x="' + (x - 4) + '" y="' + (y - 9) + '" width="8" height="9" rx="2"/><path class="l" d="M' + (x + 4) + ' ' + (y - 7) + 'q4 0 0 5"/></g>'; }
	function desk(cx, w) {
		var x = cx - w / 2, t = BY - 34;
		return '<rect class="deskf o" x="' + (x + 5) + '" y="' + (t + 5) + '" width="' + (w - 10) + '" height="29" rx="2"/>' +
			'<rect class="deskt o" x="' + x + '" y="' + t + '" width="' + w + '" height="7" rx="3.5"/>' +
			'<rect class="drw" x="' + (cx + w / 2 - 38) + '" y="' + (t + 12) + '" width="28" height="9" rx="2"/><path class="l" d="M' + (cx + w / 2 - 28) + ' ' + (t + 16.5) + 'h8"/>';
	}
	function mon(cx, base, w, h) {
		var x = cx - w / 2, y = base - 7 - h;
		return '<rect class="mon o" x="' + (cx - 3) + '" y="' + (base - 8) + '" width="6" height="8"/><rect class="mon o" x="' + (cx - w / 4) + '" y="' + (base - 3) + '" width="' + (w / 2) + '" height="3" rx="1.5"/>' +
			'<rect class="mon o" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3"/><rect class="scr" x="' + (x + 3) + '" y="' + (y + 3) + '" width="' + (w - 6) + '" height="' + (h - 6) + '" rx="1.5"/>' +
			'<path class="scl" d="M' + (x + 7) + ' ' + (y + 8) + 'h' + (w * 0.5) + 'M' + (x + 7) + ' ' + (y + 13) + 'h' + (w * 0.34) + (h > 24 ? 'M' + (x + 7) + ' ' + (y + 18) + 'h' + (w * 0.44) : '') + '"/>';
	}
	function seat(cx, w, idx, shirt, acc, side) {
		var t = BY - 34, wy = BY - 28, mx = cx + side * (w / 2 - 26);
		return '<rect class="chair o" x="' + (cx - 15) + '" y="' + (wy - 44) + '" width="30" height="40" rx="9"/>' + mon(mx, t, 36, 25) +
			W(Object.assign({ x: cx, y: wy, pose: 'type', sit: true }, global.AWArt.look(idx, shirt, acc))) + desk(cx, w) +
			'<rect class="kbd o" x="' + (cx - 13) + '" y="' + (t - 3) + '" width="26" height="4" rx="2"/>' + mug(cx - side * (w / 2 - 20), t);
	}
	function rack(x, y, w, h, units, cols, seed) {
		var o = '<rect class="rk o" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="4"/>', uh = (h - 10) / units;
		for (var i = 0; i < units; i++) {
			var yy = y + 5 + i * uh, cy = yy + (uh - 3) / 2;
			o += '<rect class="rku o" x="' + (x + 4) + '" y="' + yy + '" width="' + (w - 8) + '" height="' + (uh - 3) + '" rx="2"/><path class="slot" d="M' + (x + w - 24) + ' ' + cy + 'h16"/>';
			for (var j = 0; j < 2; j++) {
				var k = (i * 2 + j + seed) % 7;
				o += '<circle cx="' + (x + 11 + j * 8) + '" cy="' + cy + '" r="2.1" fill="' + cols[(i + j + seed) % cols.length] + '"' +
					(k % 3 === 0 ? '' : ' class="ao-blink" style="animation-delay:' + (-(k * 0.37)).toFixed(2) + 's;animation-duration:' + (0.9 + k * 0.23).toFixed(2) + 's"') + '/>';
			}
		}
		return o;
	}
	function robot(x, base) {
		return '<g transform="translate(' + x + ' ' + base + ')"><g class="bob"><path class="l" d="M0 -62V-74"/><circle class="o" cx="0" cy="-76" r="3.6" fill="#ff6b81"/>' +
			'<rect class="o" x="-14" y="-36" width="28" height="29" rx="8" fill="#e8eef9"/><rect class="o" x="-11" y="-30" width="22" height="9" rx="4" fill="#fff"/>' +
			'<circle cx="0" cy="-17" r="4" fill="var(--zc)"/><rect class="o" x="-17" y="-34" width="4" height="14" rx="2" fill="#cfd8ea"/><rect class="o" x="13" y="-34" width="4" height="14" rx="2" fill="#cfd8ea"/>' +
			'<rect class="o" x="-17" y="-62" width="34" height="26" rx="10" fill="#f4f7fd"/><rect x="-12" y="-57" width="24" height="15" rx="6" fill="#26304f"/>' +
			'<g style="transform-box:fill-box;transform-origin:center;animation:awBlink 4.2s infinite"><circle cx="-5" cy="-49.5" r="2.4" fill="#7ff5e6"/><circle cx="5" cy="-49.5" r="2.4" fill="#7ff5e6"/></g>' +
			'<path d="M-3 -45q3 2.4 6 0" fill="none" stroke="#7ff5e6" stroke-width="1.2" stroke-linecap="round"/>' +
			'<rect class="o" x="-10" y="-7" width="8" height="7" rx="3" fill="#cfd8ea"/><rect class="o" x="2" y="-7" width="8" height="7" rx="3" fill="#cfd8ea"/></g></g>';
	}

	/* standing floor prop for the hub's team: centred on cx, feet on base, at most ~46 wide */
	function fprop(cx, base, i, s) {
		s = s || 1;
		var o = '<g transform="translate(' + cx + ' ' + base + ') scale(' + s + ')">';
		switch (ZID) {
			case 'business':
				if (i % 2) o += '<rect class="o" x="-22" y="-34" width="44" height="34" rx="5" fill="#dfe5f2"/><rect class="o" x="-22" y="-42" width="44" height="10" rx="4" fill="#c9d1e3"/><rect class="paper o" x="-12" y="-56" width="24" height="16" rx="1" style="stroke-width:1"/><path class="l" d="M-8 -50h16M-8 -45h10" style="stroke-opacity:.5"/><rect x="-14" y="-26" width="28" height="4" rx="2" fill="var(--ln)" fill-opacity=".35"/><circle class="ao-blink" cx="15" cy="-37" r="1.8" fill="#4cd964"/>';
				else o += '<rect x="-10" y="-96" width="20" height="30" rx="8" fill="#9fd8ff" fill-opacity=".75" stroke="var(--ln)" stroke-width="1.4"/>' +
					'<rect class="paper o" x="-13" y="-68" width="26" height="68" rx="4"/><rect x="-7" y="-52" width="14" height="6" rx="2" fill="#4aa3ff"/><circle cx="0" cy="-30" r="2.4" fill="#e65"/>';
				break;
			case 'makers': o += robot(0, 0); break;
			case 'ai':
				if (i % 2) o += '<ellipse class="ao-pulse" cx="0" cy="-48" rx="30" ry="28" fill="url(#d4glowP)"/><rect class="o" x="-7" y="-20" width="14" height="20" rx="3" fill="var(--rku)"/><ellipse class="o" cx="0" cy="0" rx="20" ry="4.5" fill="var(--rack)"/><circle class="o" cx="0" cy="-42" r="22" fill="url(#d4orb)"/>' +
					'<circle class="ao-blink" cx="-6" cy="-48" r="2.4" fill="#fff"/><circle class="ao-blink" cx="7" cy="-40" r="2.4" fill="#fff" style="animation-delay:-.6s"/><circle class="ao-blink" cx="-2" cy="-33" r="2" fill="#fff" style="animation-delay:-.3s"/><path d="M-6 -48L7 -40L-2 -33" stroke="#fff" stroke-opacity=".6" fill="none"/>';
				else o += rack(-22, -92, 44, 92, 5, ['#7cf0c4', '#a78bfa', '#ffd34d'], i) + '<path class="l" d="M0 -92v-8"/><circle class="o ao-pulse" cx="0" cy="-103" r="5" fill="#a78bfa"/>';
				break;
			case 'academy':
				if (i % 2) o += '<path class="l" d="M-10 0h20M0 0V-18"/><circle class="o" cx="0" cy="-34" r="17" fill="#4aa3e8"/><path d="M-9 -42q6 -6 10 0q-1 8 -7 8z M3 -30q8 -2 8 6q-6 5 -10 -1z" fill="#6dcf8a"/><ellipse class="l" cx="0" cy="-34" rx="7" ry="17" style="stroke-opacity:.5"/>';
				else o += '<rect class="o" x="-17" y="-60" width="34" height="60" rx="3" fill="var(--deskf)"/>' + ['#d95b5b', '#4a8be8', '#f0b429', '#3aa675'].map(function (c, k) { return '<rect class="o" x="' + (-13 + k * 7) + '" y="' + (-54 + (k % 2) * 3) + '" width="6" height="' + (22 - (k % 2) * 3) + '" rx="1" fill="' + c + '"/>'; }).join('') +
					['#8b5cf6', '#e97526', '#3aa675', '#4a8be8'].map(function (c, k) { return '<rect class="o" x="' + (-13 + k * 7) + '" y="-24" width="6" height="21" rx="1" fill="' + c + '"/>'; }).join('');
				break;
			case 'network':
				if (i % 2) { for (var q = 0; q < 3; q++) o += '<rect class="o" x="-22" y="' + (-14 - q * 13) + '" width="44" height="11" rx="3" fill="var(--rku)"/><circle class="ao-blink" cx="-14" cy="' + (-8.5 - q * 13) + '" r="1.8" fill="#7cf0c4" style="animation-delay:' + (-q * 0.4) + 's"/><circle class="ao-blink" cx="-8" cy="' + (-8.5 - q * 13) + '" r="1.8" fill="#ffd34d" style="animation-delay:' + (-q * 0.2) + 's"/><path class="slot" d="M2 ' + (-8.5 - q * 13) + 'h16"/>'; o += '<path class="l" d="M0 -53V-64"/><g stroke="#00a3b0" stroke-width="2.2" fill="none" stroke-linecap="round"><path class="ao-blink" d="M-10 -68a14 14 0 0 1 20 0"/><path class="ao-blink" d="M-5 -63a7 7 0 0 1 10 0" style="animation-delay:-.4s"/></g>'; }
				else o += rack(-22, -88, 44, 88, 5, ['#7cf0c4', '#4ac3ff', '#ffd34d'], i) +
					'<g stroke="#00a3b0" stroke-width="2.2" fill="none" stroke-linecap="round"><path class="ao-blink" d="M-12 -98a17 17 0 0 1 24 0" style="animation-delay:-.6s"/><path class="ao-blink" d="M-7 -93a10 10 0 0 1 14 0"/></g><circle cx="0" cy="-89" r="2" fill="#00a3b0"/>';
				break;
			case 'security':
				if (i % 2) o += '<path class="l" d="M0 0V-70" style="stroke-width:3"/><rect class="o" x="-14" y="-4" width="28" height="4" rx="2" fill="#59627d"/><g transform="translate(0 -74) rotate(-14)"><rect class="o" x="-16" y="-9" width="32" height="18" rx="5" fill="#2a2f3d"/><circle class="o" cx="10" cy="0" r="6" fill="#59627d"/><circle class="ao-blink" cx="10" cy="0" r="2.4" fill="#ff4d5e"/></g><path class="cone" d="M-10 -66L-42 -2H24Z" style="fill:#ff4d5e;opacity:.16"/>';
				else o += '<rect class="o" x="-20" y="-54" width="40" height="54" rx="5" fill="#8f98ad"/><rect class="o" x="-14" y="-48" width="28" height="42" rx="3" fill="#c4cbdb"/><circle class="o" cx="0" cy="-27" r="9" fill="#e9edf6"/>' +
					'<g class="spin" style="animation-duration:24s"><path class="l" d="M0 -34V-20M-7 -27H7" style="stroke-width:2"/></g><rect class="o" x="-17" y="-2" width="7" height="3" fill="#59627d"/><rect class="o" x="10" y="-2" width="7" height="3" fill="#59627d"/>' +
					'<circle class="ao-blink" cx="13" cy="-44" r="1.8" fill="#4cd964"/>';
				break;
			case 'devops':
				o += '<g transform="translate(-22 0) scale(.75)"><rect class="o" x="0" y="-24" width="58" height="24" rx="2" fill="#0078d4"/><path class="l" d="M10 -24v24M20 -24v24M30 -24v24M40 -24v24M50 -24v24" style="stroke-opacity:.35"/>' +
					'<rect class="o" x="6" y="-48" width="48" height="24" rx="2" fill="#2da44e"/><path class="l" d="M16 -48v24M26 -48v24M36 -48v24M46 -48v24" style="stroke-opacity:.35"/>' +
					'<rect class="o" x="14" y="-70" width="32" height="22" rx="2" fill="#d9a26a"/><path class="l" d="M30 -70v22" style="stroke-opacity:.5"/></g>'; break;
			default:
				if (i % 2) { o += rack(-22, -74, 44, 74, 4, ['#ffb347', '#7cf0c4', '#4ac3ff'], i); break; }
				for (var k = 0; k < 3; k++) { var yy = -(k + 1) * 15;
					o += '<ellipse class="o" cx="0" cy="' + (yy + 15) + '" rx="22" ry="5.5" fill="#d9661b"/><rect x="-22" y="' + yy + '" width="44" height="15" fill="#e97526"/><path class="l" d="M-22 ' + yy + 'V' + (yy + 15) + 'M22 ' + yy + 'V' + (yy + 15) + '"/>' +
						'<ellipse class="o" cx="0" cy="' + yy + '" rx="22" ry="5.5" fill="#f59a54"/><circle cx="12" cy="' + (yy + 8) + '" r="1.8" fill="#7cf0c4" class="ao-blink" style="animation-delay:' + (-k * 0.5) + 's"/>'; }
		}
		return o + '</g>';
	}

	/* wall panel (w x h, translated to x,y) with the team's signature picture; v picks a variant */
	function panel(x, y, w, h, i, v) {
		var s = '<g transform="translate(' + x + ' ' + y + ')">', k, n;
		switch (ZID) {
			case 'business':
				s += '<rect class="winF o" width="' + w + '" height="' + h + '" rx="4"/><rect x="3" y="3" width="' + (w - 6) + '" height="' + (h - 6) + '" fill="url(#d4win)"/>';
				var seed = (i * 7 + 3) % 97, bx = 3;
				while (bx < w - 6) { seed = (seed * 37 + 11) % 97; var bw = Math.min(8 + seed % 9, w - 3 - bx), bh = 6 + (seed * 3) % 14;
					s += '<rect class="bldg" x="' + bx + '" y="' + (h - 3 - bh) + '" width="' + bw + '" height="' + bh + '"/>';
					if (seed % 2) s += '<rect class="lit dark-only" x="' + (bx + 2) + '" y="' + (h - 3 - bh + 3) + '" width="2.4" height="2.4"/>';
					bx += bw + 2; }
				s += '<ellipse class="cld" cx="' + (w * 0.82) + '" cy="12" rx="12" ry="3.4"/><path class="winM" d="M' + (w / 3) + ' 3V' + (h - 3) + 'M' + (2 * w / 3) + ' 3V' + (h - 3) + '" style="stroke-width:1.6"/>';
				s += '<g class="ao-float" style="' + fl(i, 3.4) + '">' + logo(APPS[(i + v) % 6], w * 0.5, h * 0.5, h - 12) + '</g>' +
					'<g class="ao-float" style="' + fl(i + 2, 4) + '">' + logo(APPS[(i + v + 2) % 6], w * 0.17, h * 0.56, 24) + '</g>' +
					'<g class="ao-float" style="' + fl(i + 4, 3.7) + '">' + logo(APPS[(i + v + 4) % 6], w * 0.83, h * 0.56, 24) + '</g>';
				break;
			case 'makers':
				var pal = [['#9ae6b4', '#ffe08a', '#ffd34d'], ['#ffc2d1', '#9ae6b4', '#bde0fe'], ['#bde0fe', '#ffd34d', '#9ae6b4']][(i + v) % 3];
				s += '<rect class="brd" width="' + w + '" height="' + h + '" rx="5"/>' +
					'<rect class="o" x="8" y="' + (h / 2 - 10) + '" width="' + (w * 0.2) + '" height="20" rx="7" fill="' + pal[0] + '"/><path class="scl" d="M14 ' + (h / 2) + 'h' + (w * 0.2 - 12) + '" style="stroke:#1f6f43"/>' +
					'<rect class="o" x="' + (w / 2 - 19) + '" y="' + (h / 2 - 19) + '" width="38" height="38" rx="10" fill="#fff"/>' + logo('CopilotStudio', w / 2, h / 2, 28) +
					'<path class="o" d="M' + (w - 24) + ' ' + (h / 2 - 15) + 'l17 15l-17 15l-17 -15z" fill="' + pal[1] + '"/>' +
					'<path class="flow" d="M' + (8 + w * 0.2) + ' ' + (h / 2) + 'H' + (w / 2 - 19) + '" style="stroke:var(--zc);stroke-width:2.4"/><path class="flow" d="M' + (w / 2 + 19) + ' ' + (h / 2) + 'H' + (w - 41) + '" style="stroke:var(--zc);stroke-width:2.4"/>' +
					'<rect class="o" x="' + (w - 22) + '" y="4" width="11" height="11" rx="2" fill="' + pal[2] + '" transform="rotate(8 ' + (w - 16) + ' 10)" style="stroke-width:1"/>';
				break;
			case 'ai':
				s += '<rect class="o" width="' + w + '" height="' + h + '" rx="6" fill="#1b1446"/>';
				if (v === 0) {
					var N =  [[.1, .5], [.3, .24], [.3, .76], [.52, .5], [.72, .24], [.72, .76], [.9, .5]], E = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6], [1, 4], [2, 5]];
					E.forEach(function (e) { s += '<path d="M' + (N[e[0]][0] * w) + ' ' + (N[e[0]][1] * h) + 'L' + (N[e[1]][0] * w) + ' ' + (N[e[1]][1] * h) + '" stroke="#c4b5fd" stroke-opacity=".6" stroke-width="1.2" fill="none"/>'; });
					N.forEach(function (p, q) { s += '<circle class="ao-blink" cx="' + (p[0] * w) + '" cy="' + (p[1] * h) + '" r="3.2" fill="#fff" style="animation-delay:' + (-(q * 0.31)).toFixed(2) + 's;animation-duration:' + (1.4 + (q % 3) * 0.5) + 's"/>'; });
				} else if (v === 1) {
					for (k = 0; k < 7; k++) { var bh2 = 8 + ((k * 5 + i * 3) % 7) * 4; s += '<rect x="' + (10 + k * (w - 20) / 7) + '" y="' + (h - 7 - bh2) + '" width="' + ((w - 20) / 7 - 4) + '" height="' + bh2 + '" rx="1.5" fill="' + (k % 2 ? '#a78bfa' : '#7cf0c4') + '"/>'; }
					s += '<path class="ink" d="M8 ' + (h * 0.6) + 'L' + (w * 0.3) + ' ' + (h * 0.4) + 'L' + (w * 0.5) + ' ' + (h * 0.5) + 'L' + (w * 0.74) + ' ' + (h * 0.22) + 'L' + (w - 8) + ' ' + (h * 0.3) + '" style="stroke:#fff"/>';
				} else {
					s += '<g transform="translate(' + (w / 2) + ' ' + (h / 2) + ')"><rect class="ao-pulse" x="-30" y="-20" width="60" height="40" rx="6" fill="#a78bfa" fill-opacity=".25"/><rect x="-14" y="-14" width="28" height="28" rx="5" fill="#2e1f7a" stroke="#c4b5fd" stroke-width="1.6"/><text x="0" y="5" text-anchor="middle" style="font:800 12px Segoe UI,sans-serif" fill="#7cf0c4">AI</text>';
					for (k = 0; k < 4; k++) s += '<path d="M' + (-8 + k * 5.4) + ' -14v-6M' + (-8 + k * 5.4) + ' 14v6M-14 ' + (-8 + k * 5.4) + 'h-6M14 ' + (-8 + k * 5.4) + 'h6" stroke="#c4b5fd" stroke-width="1.6" stroke-linecap="round"/>';
					s += '</g>';
				}
				break;
			case 'academy':
				s += '<rect class="o" width="' + w + '" height="' + h + '" rx="5" fill="#b27a3f"/><rect x="5" y="5" width="' + (w - 10) + '" height="' + (h - 10) + '" rx="3" fill="#1f5a48"/>' +
					'<text class="chalk" style="font-size:14px" x="14" y="' + (h * 0.5 - 2) + '">' + (Math.floor(i / 2) % 2 ? 'AZ-305' : 'AZ-900') + '</text><path class="ink" d="M14 ' + (h * 0.5 + 6) + 'h' + (w * 0.32) + '" style="stroke-dasharray:3 4"/>' +
					'<path class="ink" d="M' + (w * 0.68) + ' ' + (h * 0.62) + 'h' + (w * 0.22) + 'a7 7 0 0 0 0 -14a10 10 0 0 0 -18 -3a8 8 0 0 0 -8 17z"/><path class="ink" d="M14 ' + (h - 12) + 'l5 5l9 -10"/>' +
					'<rect x="' + (w * 0.4) + '" y="' + (h - 8) + '" width="12" height="3" rx="1.5" fill="#fff"/>';
				break;
			case 'network':
				var r = h * 0.34, gx = r + 10, gy = h / 2;
				s += '<rect class="o mon" width="' + w + '" height="' + h + '" rx="6"/>';
				if (v === 2) {
					var T = [[.2, .5], [.42, .22], [.42, .78], [.68, .22], [.68, .78], [.88, .5]];
					[[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [1, 2], [3, 4]].forEach(function (e) { s += '<path class="flow" d="M' + (T[e[0]][0] * w) + ' ' + (T[e[0]][1] * h) + 'L' + (T[e[1]][0] * w) + ' ' + (T[e[1]][1] * h) + '" style="stroke:#7cf0c4;stroke-width:1.5"/>'; });
					T.forEach(function (p, q) { s += '<rect class="o" x="' + (p[0] * w - 6) + '" y="' + (p[1] * h - 5) + '" width="12" height="10" rx="2.5" fill="' + (q % 3 ? '#4ac3ff' : '#ffd34d') + '" style="stroke-width:1"/>'; });
					break;
				}
				s += '<g transform="translate(' + gx + ' ' + gy + ') scale(' + (r / 22) + ')"><circle class="o" r="22" fill="#4aa3e8"/><path d="M-12 -10q8 -8 14 -2q-2 8 -8 8q-4 6 -8 2z M6 4q8 -4 10 4q-4 8 -10 4z" fill="#6dcf8a"/><ellipse class="l" rx="9" ry="22" style="stroke-opacity:.55"/><path class="l" d="M-22 0h44" style="stroke-opacity:.4"/></g>';
				[[.58, .28], [.82, .52], [.6, .78]].forEach(function (p, q) { s += '<path class="flow" d="M' + gx + ' ' + gy + 'L' + (p[0] * w) + ' ' + (p[1] * h) + '" style="stroke:#7cf0c4;stroke-width:1.6"/><circle class="ao-blink" cx="' + (p[0] * w) + '" cy="' + (p[1] * h) + '" r="3.6" fill="' + (q % 2 ? '#ffd34d' : '#4ac3ff') + '" style="animation-delay:' + (-q * 0.4) + 's"/>'; });
				if (v === 1) s += '<g stroke="#7cf0c4" stroke-width="2" fill="none" stroke-linecap="round"><path class="ao-blink" d="M' + (w - 30) + ' 16a14 14 0 0 1 22 0"/><path class="ao-blink" d="M' + (w - 26) + ' 21a8 8 0 0 1 14 0" style="animation-delay:-.4s"/></g>';
				break;
			case 'security':
				s += '<rect class="o" width="' + w + '" height="' + h + '" rx="6" fill="#242a42"/>';
				if (v === 2) {
					s += '<rect class="o" x="' + (w / 2 - 38) + '" y="6" width="76" height="' + (h - 12) + '" rx="5" fill="#e9edf6"/><circle class="o" cx="' + (w / 2 - 20) + '" cy="' + (h / 2 - 3) + '" r="9" fill="#8d5a3b" style="stroke-width:1"/><circle cx="' + (w / 2 - 20) + '" cy="' + (h / 2 - 5) + '" r="4" fill="#eab98d"/>' +
						'<path class="l" d="M' + (w / 2 - 4) + ' ' + (h / 2 - 10) + 'h30M' + (w / 2 - 4) + ' ' + (h / 2 - 3) + 'h22M' + (w / 2 - 4) + ' ' + (h / 2 + 4) + 'h26" style="stroke:#6b7490"/><rect x="' + (w / 2 - 38) + '" y="6" width="76" height="6" rx="3" fill="var(--zc)"/><circle class="ao-blink" cx="' + (w / 2 + 28) + '" cy="' + (h - 11) + '" r="2.2" fill="#4cd964"/>';
					break;
				}
				for (k = 0; k < 3; k++) s += '<path class="ao-blink" d="M6 ' + (10 + k * 14) + 'L' + (w - 6) + ' ' + (h - 10 - k * 14 + (k - 1) * 4) + '" stroke="#ff5c6c" stroke-width="1.4" stroke-dasharray="4 3" stroke-opacity=".8" style="animation-delay:' + (-k * 0.5) + 's"/>';
				s += '<g transform="translate(' + (w / 2) + ' 3) scale(.76)"><path class="o" d="M0 0l24 8v18c0 14 -10 24 -24 30c-14 -6 -24 -16 -24 -30v-18z" fill="url(#d4shield)"/>' +
					(v === 1 ? '<rect class="o" x="-9" y="22" width="18" height="14" rx="3" fill="#ffd34d"/><path class="l" d="M-5 22v-5a5 5 0 0 1 10 0v5" style="stroke-width:2.2"/>' : '<path class="ink" d="M-11 28l8 8l14 -16" style="stroke-width:3.4"/>') + '</g>';
				break;
			case 'devops':
				if (v === 0) {
					var cw = (w - 12) / 3;
					s += '<rect class="brd" width="' + w + '" height="' + h + '" rx="5"/>';
					['#ffd34d', '#4ac3ff', '#4cd964'].forEach(function (c, q) {
						s += '<rect x="' + (6 + q * cw) + '" y="5" width="' + (cw - 4) + '" height="7" rx="3" fill="' + c + '"/><path class="l" d="M' + (6 + (q + 1) * cw - 2) + ' 14V' + (h - 5) + '" style="stroke-opacity:.18"/>';
						for (n = 0; n < (q === 1 ? 1 : 2); n++) s += '<rect class="o" x="' + (8 + q * cw) + '" y="' + (16 + n * 13) + '" width="' + (cw - 8) + '" height="10" rx="3" fill="' + ['#fff6d8', '#cfe9ff', '#d4f5dc'][q] + '" style="stroke-width:1"/>';
					});
				} else if (v === 2) {
					s += '<rect class="brd" width="' + w + '" height="' + h + '" rx="5"/>';
					['#4ac3ff', '#ffd34d', '#4cd964'].forEach(function (c, q) {
						var px = w * (0.2 + q * 0.3);
						if (q) s += '<path class="flow" d="M' + (px - w * 0.3 + 12) + ' ' + (h / 2) + 'H' + (px - 12) + '" style="stroke:#59627d;stroke-width:2"/>';
						s += '<circle class="o" cx="' + px + '" cy="' + (h / 2) + '" r="10" fill="' + c + '"/><path class="ink" d="' + ['M' + (px - 4) + ' ' + (h / 2 - 3) + 'l-3 3l3 3M' + (px + 4) + ' ' + (h / 2 - 3) + 'l3 3l-3 3', 'M' + (px - 4) + ' ' + (h / 2) + 'l3 3l5 -6', 'M' + (px - 4) + ' ' + (h / 2 + 3) + 'l4 -7l4 7z'][q] + '" style="stroke:#1b2236"/>';
					});
				} else {
					var inf = 'M0 0C-8 -20 -30 -20 -30 0S-8 20 0 0S30 -20 30 0S8 20 0 0Z';
					s += '<rect class="brd" width="' + w + '" height="' + h + '" rx="5"/><g transform="translate(' + (w / 2) + ' ' + (h / 2) + ')"><path d="' + inf + '" fill="none" stroke="#2da44e" stroke-width="6" stroke-opacity=".28"/><path d="' + inf + '" fill="none" stroke="#2da44e" stroke-width="5" stroke-linecap="round" pathLength="100" class="infl"/></g>';
				}
				break;
			default:
				s += '<rect class="o" width="' + w + '" height="' + h + '" rx="5" fill="url(#d4win)"/><ellipse class="cld" cx="' + (w * 0.2) + '" cy="10" rx="12" ry="3.4"/>' +
					'<g class="ao-float" style="' + fl(i, 4.4) + '"><g transform="translate(' + (w * 0.34) + ' ' + (h * 0.6) + ') scale(.66)"><path class="o" d="M-38 14H38A15 15 0 0 0 38 -16A22 22 0 0 0 -2 -26A20 20 0 0 0 -34 -8A11 11 0 0 0 -38 14Z" fill="url(#d4cloud)"/><path d="M-24 4q10 -12 24 -12" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="3" stroke-linecap="round"/></g></g>';
				for (k = 0; k < (v === 2 ? 3 : 2); k++) { var yy = h - 8 - (k + 1) * (v === 2 ? 11 : 12), cxx = w * 0.8; s += '<ellipse class="o" cx="' + cxx + '" cy="' + (yy + 12) + '" rx="17" ry="4.4" fill="#d9661b" style="stroke-width:1"/><rect x="' + (cxx - 17) + '" y="' + yy + '" width="34" height="12" fill="#e97526"/><ellipse class="o" cx="' + cxx + '" cy="' + yy + '" rx="17" ry="4.4" fill="#f59a54" style="stroke-width:1"/>'; }
				if (v === 1) s +=  '<g class="ao-float" style="' + fl(i + 3, 3.6) + '"><rect class="o" x="' + (w * 0.56 - 9) + '" y="8" width="18" height="12" rx="2" fill="#fff" style="stroke-width:1"/><path class="l" d="M' + (w * 0.56 - 9) + ' 8l9 7l9 -7" style="stroke-width:1"/></g>';
		}
		return s + '</g>';
	}

	/* ---------- bays ---------- */
	function badge(cx, r, text) {
		var t = String(text), fs = r * (t.length >= 3 ? 0.78 : t.length === 2 ? 0.98 : 1.18), cy = 12 + r * 1.4;
		return '<g class="sgn"><path class="str" d="M' + (cx - r * 0.55) + ' 12V' + (cy - r * 0.84) + 'M' + (cx + r * 0.55) + ' 12V' + (cy - r * 0.84) + '"/>' +
			'<circle class="plq" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 3.4) + '" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.3"/>' +
			'<text class="stx" x="' + cx + '" y="' + (cy + fs * 0.36) + '" text-anchor="middle" style="font-size:' + fs.toFixed(1) + 'px">' + esc(t) + '</text></g>';
	}
	function bayFrame(cls, i, x, y, w, body, extra) {
		var s = '<g class="' + cls + '"' + (i != null ? ' data-bay="' + i + '"' : '') + ' transform="translate(' + x + ' ' + y + ')"><rect class="wall" width="' + w + '" height="184"/>' +
			'<rect class="flr" y="184" width="' + w + '" height="26"/><path class="base" d="M0 184H' + w + '"/>' + lamp(w * 0.2) + lamp(w * 0.8) + body +
			'<rect class="ceil" width="' + w + '" height="12"/><path class="base" d="M0 12H' + w + '"/>' +
			'<path class="lamp" d="M' + (w * 0.2 - 12) + ' 12h24l-5 8h-14z"/><path class="lamp" d="M' + (w * 0.8 - 12) + ' 12h24l-5 8h-14z"/>' + (extra || '');
		return s;
	}
	function bay(i, x, y, bw, l, SH) {
		var v = i % 4, deskW = Math.max(98, Math.min(128, Math.round(bw * 0.62))), s = '', cx = bw / 2, shirt = SH[i % SH.length];
		var acc = ACCS[(i * 3 + 1) % ACCS.length], pw = Math.min(bw - 36, 150), py = 70, sp = (bw - deskW) / 2;
		if (v !== 2 && sp >= 46) pw = Math.min(150, bw - sp - 58);
		if (v === 3) s += win(cx - Math.min(bw - 60, 90) / 2, 66, Math.min(bw - 60, 90), 46);
		else s += panel((bw - pw) / 2, py, pw, 48, i, v);
		if (v === 2) {
			cx = Math.max(deskW / 2 + 8, bw * 0.36); var wx = (cx + deskW / 2 + bw) / 2;
			s += seat(cx, deskW, i, shirt, acc, 1);
			var spec = { business: 'badge', makers: 'headset', ai: 'glasses', academy: 'tie', network: 'headset', security: 'cap', devops: 'hardhat', cloud: 'headset' }[ZID];
			s += W(Object.assign({ x: wx, y: BY + 6, pose: ['wave', 'think', 'stand'][(i >> 2) % 3] }, global.AWArt.look(i + 5, SH[(i + 2) % SH.length], spec)));
		} else {
			s += seat(cx, deskW, i, shirt, acc, v === 1 ? -1 : 1);
			if (sp >= 46) s += fprop(sp / 2, BY, i, 0.92) + plant(bw - sp / 2, BY, 1.15);
			else if (sp >= 26 || v === 3) s += plant(bw - Math.max(sp / 2, 15), BY, 0.8);
		}
		s += badge(bw / 2, Math.max(19, Math.min(25, bw * 0.12)), l.n);
		var body = s;
		s = bayFrame('bay' + (i % 2 ? ' alt' : ''), i, x, y, bw, body);
		return s + '<rect class="lt" width="' + bw + '" height="' + RH + '"/><rect class="hl" width="' + bw + '" height="' + RH + '"/>' +
			'<rect class="glow" x="2" y="2" width="' + (bw - 4) + '" height="' + (RH - 4) + '" rx="3"/><rect class="ao-focus-ring" x="3" y="3" width="' + (bw - 6) + '" height="' + (RH - 6) + '" rx="4"/>' +
			'<rect class="hit" width="' + bw + '" height="' + RH + '" fill="transparent"/></g>';
	}
	function lounge(x, y, lw, SH, rowSeed) {
		var s = '', m = Math.max(1, Math.floor((lw - 20) / 60)), step = (lw - 20) / m, k, kinds = [1, 0, 2, 3];
		var nw = Math.max(1, Math.floor((lw - 24) / 96));
		for (k = 0; k < nw; k++) s += win(24 + k * (lw - 48) / nw + ((lw - 48) / nw - 56) / 2 + 4, 58, 48, 38);
		for (k = 0; k < m; k++) {
			var px = 10 + step * (k + 0.5), kind = kinds[k % 4];
			if (kind === 0) s += fprop(px, BY, k + rowSeed, 1);
			else if (kind === 1) s += W(Object.assign({ x: px, y: BY + 6, pose: ['wave', 'think', 'stand'][k % 3] }, global.AWArt.look(rowSeed + k * 3 + 2, SH[(k + 1) % SH.length], 'badge')));
			else if (kind === 2) s += plant(px, BY, 1.25);
			else s += fprop(px, BY, k + rowSeed + 1, 0.9);
		}
		var zn = ZNAME, cx = lw / 2;
		s += '<g class="sgn lsign" data-cx="' + cx + '" data-max="' + (lw - 20) + '"><path class="str" d="M' + (cx - 40) + ' 12V26M' + (cx + 40) + ' 12V26"/><rect class="plq" x="' + (cx - 70) + '" y="24" width="140" height="27" rx="9"/>' +
			'<circle class="pin" cx="' + (cx - 40) + '" cy="26" r="2"/><circle class="pin" cx="' + (cx + 40) + '" cy="26" r="2"/><text class="stx" x="' + cx + '" y="43" text-anchor="middle" style="font-size:15px">' + esc(zn) + '</text></g>';
		return bayFrame('bay lounge', null, x, y, lw, s) + '</g>';
	}

	/* ---------- scene pieces ---------- */
	function skyCloud(x, y, sc, dur, delay) {
		return '<g class="drift" style="animation-duration:' + dur + 's;animation-delay:' + delay + 's"><g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')" opacity="var(--cloudo)">' +
			'<path d="M-38 14H38A15 15 0 0 0 38 -16A22 22 0 0 0 -2 -26A20 20 0 0 0 -34 -8A11 11 0 0 0 -38 14Z" fill="var(--cloud)"/></g></g>';
	}
	function sky(H) {
		var s = '<g clip-path="url(#d4clip)"><rect width="1100" height="' + H + '" fill="url(#d4sky)"/>', seed = 5, i;
		for (i = 0; i < 46; i++) { seed = (seed * 53 + 17) % 211; var sx = (seed * 5) % 1100, sy = (seed * 7 + i * 13) % 150 + 6;
			s += '<circle class="dstar twink" cx="' + sx + '" cy="' + sy + '" r="' + (1 + (i % 3) * 0.5) + '" fill="#fff" style="animation-delay:' + (-(i * 0.37)).toFixed(2) + 's;animation-duration:' + (2 + (i % 4)) + 's"/>'; }
		s += '<g class="light-only"><circle cx="1004" cy="62" r="42" fill="#fff3b0" opacity=".55"/><circle class="ao-pulse" cx="1004" cy="62" r="25" fill="#ffd54a"/></g>';
		s += '<g class="dark-only"><circle cx="1004" cy="62" r="44" fill="#cfd8ff" opacity=".12"/><path d="M1018 42.5A24 24 0 1 0 1018 81.5A20 20 0 1 1 1018 42.5Z" transform="translate(-14 0)" fill="#fff6d6" stroke="#fff6d6" stroke-width="1"/></g>';
		s += skyCloud(120, 46, 1.1, 120, -30) + skyCloud(430, 96, .8, 150, -90) + skyCloud(740, 36, 1, 130, -10) + skyCloud(260, 120, .6, 170, -60);
		return s + '<rect y="' + (H - 20) + '" width="1100" height="16" fill="var(--pave)"/><rect y="' + (H - 24) + '" width="1100" height="6" fill="var(--grass)"/></g>';
	}
	function roof(api) {
		var s = '<g transform="translate(590 0)"><ellipse cx="0" cy="138" rx="96" ry="6" fill="#000" opacity=".16"/>' +
			'<g class="ao-float" style="animation-duration:5s"><g transform="translate(0 94) scale(2)"><path class="o" d="M-38 14H38A15 15 0 0 0 38 -16A22 22 0 0 0 -2 -26A20 20 0 0 0 -34 -8A11 11 0 0 0 -38 14Z" fill="url(#d4az)" style="stroke-width:.8"/>' +
			'<path d="M-26 6q8 -14 24 -14" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/><path d="M-9 -9L11 2L-9 12Z" fill="#fff" stroke="#fff" stroke-width="3" stroke-linejoin="round"/></g></g>' +
			'<g class="sparkle" style="animation-delay:-.5s"><path d="M92 52l3 9l9 3l-9 3l-3 9l-3 -9l-9 -3l9 -3z" fill="#fff"/></g><g class="sparkle" style="animation-delay:-1.4s"><path d="M-100 70l2.4 7l7 2.4l-7 2.4l-2.4 7l-2.4 -7l-7 -2.4l7 -2.4z" fill="#fff"/></g></g>';
		// billboard: hub name + team
		var pc = mix(COLOR, '#000000', 0.3), pc2 = mix(COLOR, '#000000', 0.12);
		s += '<g transform="translate(96 0)"><rect class="o" x="44" y="100" width="9" height="38" fill="var(--slab)"/><rect class="o" x="337" y="100" width="9" height="38" fill="var(--slab)"/>' +
			'<rect class="o" x="0" y="34" width="390" height="72" rx="14" fill="url(#d4plate)" style="stroke-width:2.4"/><rect x="5" y="39" width="380" height="62" rx="10" fill="none" stroke="#fff" stroke-opacity=".38" stroke-width="1.4"/>' +
			'<rect x="14" y="46" width="6" height="48" rx="3" fill="#fff" fill-opacity=".85"/>';
		[70, 195, 320].forEach(function (lx) { s += '<path class="o" d="M' + (lx - 7) + ' 34v-8h14v8z" fill="var(--lampc)" style="stroke-width:1.2"/>'; });
		s += '<text id="d4bn" class="bname" x="205" y="76" text-anchor="middle" style="font-size:30px"></text><text id="d4bt" class="bteam" x="205" y="96" text-anchor="middle" style="font-size:13px"></text></g>';
		// dish + mast + plants + zone prop
		s += '<g class="roofln" transform="translate(806 140)"><path class="l" d="M0 0V-26M-10 0l10 -26l10 26" style="stroke-width:2.2"/><g transform="rotate(-24 0 -30)"><path class="o" d="M-30 -42A32 22 0 0 0 30 -42Z" fill="#f1f4fb"/><path class="l" d="M0 -42V-62" /><circle class="o" cx="0" cy="-64" r="3.4" fill="#ff6b81"/></g></g>';
		s += '<g class="roofln" transform="translate(880 140)"><path class="l" d="M0 0V-84M-12 0L0 -64L12 0M-8 -30H8M-6 -48H6" style="stroke-width:2.2"/><circle class="ao-blink o" cx="0" cy="-88" r="4.4" fill="#ff4d5e"/>' +
			'<path d="M-14 -96a18 18 0 0 1 0 14M14 -96a18 18 0 0 0 0 14" class="ao-blink" fill="none" stroke="#ff4d5e" stroke-width="2" stroke-linecap="round"/></g>';
		[[938, .9], [992, 1], [1046, .8]].forEach(function (p) {
			s += '<g transform="translate(' + p[0] + ' 140) scale(' + p[1] + ')"><rect class="o" x="-22" y="-14" width="44" height="14" rx="3" fill="#b07a4b"/><circle class="o" cx="-8" cy="-26" r="14" fill="var(--leaf)"/><circle class="o" cx="10" cy="-24" r="12" fill="var(--leaf2)"/></g>';
		});
		s += fprop(742, 138, (ZID === 'business' || ZID === 'cloud') ? 2 : 3, 0.8);
		if (ZID === 'business') s += '<g class="ao-float" style="' + fl(1) + '">' + logo('Teams', 524, 24, 28) + '</g><g class="ao-float" style="' + fl(3, 4) + '">' + logo('Copilot', 704, 40, 30) + '</g>';
		return s;
	}
	function elevator(H, G, F, ls, P, n) {
		var s = '<rect class="shaftbg" x="40" y="' + TOP + '" width="76" height="' + (G - TOP) + '"/><path class="rail" d="M52 ' + TOP + 'V' + G + 'M104 ' + TOP + 'V' + G + '"/>', r, f;
		for (r = 0; r <= F; r++) {
			var y = r < F ? TOP + PITCH * r + RH : G - 6, lab;
			if (r < F) { f = F - r; var a = (f - 1) * P, b = Math.min(f * P, n) - 1; lab = ls[a].n === ls[b].n ? String(ls[a].n) : ls[a].n + '\u2013' + ls[b].n; } else lab = 'G';
			s += '<rect class="o" x="47" y="' + (y - 76) + '" width="62" height="76" rx="3" fill="var(--wallIT)" fill-opacity=".55"/><path class="l" d="M78 ' + (y - 76) + 'V' + y + '" style="stroke-opacity:.6"/>' +
				'<rect class="o" x="54" y="' + (y - 91) + '" width="48" height="14" rx="3" fill="#2a2f3d"/><text class="fl" x="78" y="' + (y - 81) + '" text-anchor="middle">' + lab + '</text>';
			if (r < F) s += '<rect class="ledge" x="42" y="' + y + '" width="72" height="14"/>';
		}
		s += '<rect class="ledge" x="42" y="' + (G - 6) + '" width="72" height="6"/>';
		var offs = [0]; for (f = 1; f <= F; f++) offs.push(TOP + PITCH * (F - f) + RH - G);
		var seq = [], k; for (k = 0; k <= F; k++) seq.push(k); for (k = F - 1; k >= 1; k--) seq.push(k);
		var share = 100 / seq.length, kf = '@keyframes d4HCar {';
		seq.forEach(function (lv, j) { var p = j * share; kf += (p).toFixed(2) + '%,' + (p + share * 0.55).toFixed(2) + '% { transform:translateY(' + offs[lv] + 'px); } '; });
		kf += '100% { transform:translateY(0); } }';
		var cy = G - 70;
		s += '<g clip-path="url(#d4shaft)"><g class="d4car" style="--cardur:' + (seq.length * 4.5) + 's"><path class="cable" d="M78 -4000V' + cy + '"/><rect class="car" x="48" y="' + cy + '" width="60" height="70" rx="5"/>' +
			'<rect class="carw" x="51" y="' + (cy + 4) + '" width="54" height="62" rx="3" opacity=".35"/><path class="lamp" d="M68 ' + (cy + 2) + 'h20l-4 5h-12z"/>' +
			W({ x: 78, y: cy + 66, s: .85, pose: 'wave', skin: global.AWArt.skins[3], hair: '#151515', hairStyle: 'curly', shirt: '#0078d4', acc: 'glasses', d: 1 }) +
			'<rect class="car" x="48" y="' + cy + '" width="60" height="70" rx="5" style="fill:var(--carf);fill-opacity:.35"/><path class="glint" d="M56 ' + (cy + 8) + 'l16 0M54 ' + (cy + 24) + 'l26 0" transform="rotate(-50 70 ' + (cy + 28) + ')"/></g></g>';
		return { svg: s, css: kf };
	}
	function lobby(G, bx0, bw0) {
		var x0 = 122, w = 938, t = 824, dy = G - 106 - 824, s = '<g transform="translate(0 ' + dy + ')" style="--zc:' + COLOR + '">' +
			'<rect fill="var(--lobbyW)" x="' + x0 + '" y="' + t + '" width="' + w + '" height="90"/><rect fill="var(--lobbyF)" x="' + x0 + '" y="910" width="' + w + '" height="20"/><path class="base" d="M' + x0 + ' 910H1060"/>' +
			'<path class="cone" d="M380 836L320 910H440Z"/><path class="cone" d="M570 836L490 910H650Z"/><path class="cone" d="M820 836L760 910H880Z"/>' +
			'<rect class="ceil" x="' + x0 + '" y="' + t + '" width="' + w + '" height="12"/>';
		[380, 570, 820].forEach(function (lx) { s += '<path class="lamp" d="M' + (lx - 12) + ' 836h24l-5 8h-14z"/>'; });
		s += '<rect class="mon o" x="472" y="852" width="96" height="40" rx="5"/><rect x="476" y="856" width="88" height="32" rx="3" fill="url(#d4tv)"/><g class="ao-pulse"><path d="M512 862l16 10l-16 10z" fill="#fff"/></g>';
		s += '<rect class="o" x="428" y="898" width="184" height="20" rx="3" fill="var(--deskf)"/><rect class="o" x="420" y="889" width="200" height="10" rx="5" fill="var(--deskt)"/><rect x="438" y="905" width="164" height="4" rx="2" fill="#4aa3ff" class="ao-blink" style="animation-duration:2.6s;animation-timing-function:ease-in-out"/>';
		s += '<g transform="translate(588 889)"><path class="o" d="M-8 0a8 6 0 0 1 16 0z" fill="#ffd34d"/><rect x="-1" y="-9" width="2" height="3" fill="var(--ln)"/></g>' + plant(444, 889, .7);
		s += '<g><rect class="o" x="190" y="872" width="120" height="30" rx="10" fill="#e97526"/><rect class="o" x="182" y="886" width="20" height="30" rx="8" fill="#d6641a"/><rect class="o" x="298" y="886" width="20" height="30" rx="8" fill="#d6641a"/><rect class="o" x="196" y="892" width="108" height="22" rx="7" fill="#f08a45"/></g>' + plant(352, 918, 1.2) + plant(146, 918, 1.05);
		s += '<g transform="translate(654 862)"><circle class="o" r="12" fill="var(--paper)"/><path class="l" d="M0 -7V0H5" style="stroke-width:1.6"/></g>' +
			'<rect class="o" x="780" y="848" width="30" height="40" rx="2" fill="#fff"/><path class="scl" d="M786 858h18M786 866h18M786 874h10" style="stroke:#0078d4"/>' + plant(840, 918, 1.1);
		s += fprop(726, 918, ZID === 'business' ? 2 : 1, 0.8);
		s += '<rect class="o" x="880" y="840" width="132" height="78" rx="4" fill="#9fd8ff"/><path class="cone" d="M886 918L1006 918L1040 930L850 930Z" style="opacity:.3;fill:#ffe9a6"/>' +
			'<g class="door-l"><rect class="o" x="884" y="844" width="62" height="74" rx="3" fill="#d6efff" fill-opacity=".9"/><path class="glint" d="M894 860l16 0M894 874l26 0" transform="rotate(-50 905 868)"/></g>' +
			'<g class="door-r"><rect class="o" x="946" y="844" width="62" height="74" rx="3" fill="#d6efff" fill-opacity=".9"/></g>';
		s += '<rect class="o" x="864" y="918" width="164" height="6" rx="3" fill="#4a5784" fill-opacity=".5"/>';
		// "start here" arrow under lesson 1
		var cx = bx0 + bw0 / 2;
		s += '<g class="nudge" id="d4start"><path class="o" d="M' + (cx - 7) + ' 840l7 -10l7 10z" fill="#ffd34d" style="stroke-width:1.2"/><rect class="o" id="d4sr" x="' + (cx - 46) + '" y="840" width="92" height="22" rx="11" fill="#ffd34d" style="stroke-width:1.4"/>' +
			'<text id="d4st" class="pilltx" x="' + cx + '" y="855" text-anchor="middle"></text></g>';
		s += '<g class="wlayer"><g transform="translate(150 ' + (t + 102) + ')"><g class="wlk" style="--L:' + (cx > 400 ? 340 : 250) + 'px;animation-duration:40s;animation-delay:-8s">' + W(Object.assign({ pose: 'walk', s: .92 }, global.AWArt.look(15, '#0f6cbd', 'badge'))) + '</g></g>' +
			'<g transform="translate(700 ' + (t + 102) + ')"><g class="wlk" style="--L:170px;animation-duration:20s;animation-delay:-4s">' + W(Object.assign({ pose: 'walk', s: .92 }, global.AWArt.look(16, '#8b5cf6', 'glasses'))) + '</g></g></g>';
		return s + '</g>';
	}
	function fit(t, max) {
		var w = t.getComputedTextLength ? t.getComputedTextLength() : 0;
		if (w > max) { t.setAttribute('textLength', max); t.setAttribute('lengthAdjust', 'spacingAndGlyphs'); w = max; }
		return w;
	}

	function render(api) {
		ensureCss();
		esc = api.esc; ZID = api.zone.id; COLOR = api.color;
		ZNAME = api.zone.name;
		ROOT = new Array((api.hub.depth || 0) + 1).join('../');
		var ls = api.lessons, n = ls.length, narrow = innerWidth <= 640, maxP = narrow ? 4 : 6;
		var F = Math.ceil(n / maxP), P = Math.ceil(n / F), bw = (FW - GAP * (P - 1)) / P;
		var G = TOP + PITCH * F + 106, H = G + 30;
		var SH = [mix(COLOR, '#000000', 0.1), mix(COLOR, '#ffffff', 0.28), mix(COLOR, '#2b3a67', 0.5), mix(COLOR, '#000000', 0.35)];
		var el = elevator(H, G, F, ls, P, n), bays = '', slabs = '', r, f, c;
		for (f = 1; f <= F; f++) {
			r = F - f; var y = TOP + PITCH * r, a = (f - 1) * P, cnt = Math.min(P, n - a);
			for (c = 0; c < cnt; c++) bays += bay(a + c, X0 + c * (bw + GAP), y, bw, ls[a + c], SH);
			if (cnt < P) bays += lounge(X0 + cnt * (bw + GAP), y, (P - cnt) * bw + (P - cnt - 1) * GAP, SH, f);
			slabs += '<rect class="slab" x="116" y="' + (y + RH) + '" width="944" height="14"/>';
		}
		slabs += '<rect class="slab" x="14" y="138" width="1072" height="14" rx="4"/><rect class="slab" x="14" y="' + G + '" width="1072" height="14" rx="4"/>';
		var defs = '<defs><clipPath id="d4clip"><rect width="1100" height="' + H + '" rx="30"/></clipPath><clipPath id="d4shaft"><rect x="40" y="' + TOP + '" width="76" height="' + (G - TOP) + '"/></clipPath>' +
			'<linearGradient id="d4sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--sky1)"/><stop offset=".5" style="stop-color:var(--sky2)"/><stop offset="1" style="stop-color:var(--sky2)"/></linearGradient>' +
			'<linearGradient id="d4win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--win1)"/><stop offset="1" style="stop-color:var(--win2)"/></linearGradient>' +
			'<linearGradient id="d4cone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--lampc)"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
			'<linearGradient id="d4cloud" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3fbff"/><stop offset="1" stop-color="#9dd0f5"/></linearGradient>' +
			'<linearGradient id="d4az" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#66c2ff"/><stop offset="1" stop-color="#0078d4"/></linearGradient>' +
			'<linearGradient id="d4shield" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#5b2fb0"/></linearGradient>' +
			'<linearGradient id="d4tv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a8cff"/><stop offset="1" stop-color="#7b4ddc"/></linearGradient>' +
			'<radialGradient id="d4orb" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#e4d9ff"/><stop offset=".45" stop-color="#8b5cf6"/><stop offset="1" stop-color="#3b1a8a"/></radialGradient>' +
			'<radialGradient id="d4glowP" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#a78bfa" stop-opacity=".55"/><stop offset="1" stop-color="#a78bfa" stop-opacity="0"/></radialGradient>' +
			'<linearGradient id="d4plate" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + mix(COLOR, '#000000', 0.12) + '"/><stop offset="1" stop-color="' + mix(COLOR, '#000000', 0.36) + '"/></linearGradient>' +
			'<style>' + el.css + '</style></defs>';
		var svg = '<svg viewBox="0 0 1100 ' + H + '" role="group" aria-label="' + esc(api.name) + '" xmlns="http://www.w3.org/2000/svg" style="--zc:' + COLOR + '">' + defs + sky(H) + roof(api) +
			'<rect class="bshell" x="26" y="' + TOP + '" width="1048" height="' + (G + 10 - TOP) + '" rx="4"/>' + el.svg + bays + lobby(G, X0, bw) + slabs + '</svg>';
		var root = document.getElementById('ao-scene');
		root.innerHTML = svg;

		var bn = root.querySelector('#d4bn'), bt = root.querySelector('#d4bt'), fs = 30, mw = 296, w;
		bn.textContent = api.name; bt.textContent = api.zone.name;
		w = bn.getComputedTextLength(); if (w > mw) { fs = Math.max(16, Math.floor(fs * mw / w)); bn.style.fontSize = fs + 'px'; } fit(bn, mw);
		fit(bt, mw);
		var st = root.querySelector('#d4st'), sr = root.querySelector('#d4sr'); st.textContent = api.ui('here');
		var sw = Math.min(Math.max(fit(st, 150) + 26, 70), 176), scx = +st.getAttribute('x'); sr.setAttribute('x', scx - sw / 2); sr.setAttribute('width', sw);
		[].forEach.call(root.querySelectorAll('.lsign'), function (g) {
			var t = g.querySelector('text'), cx = +g.dataset.cx, max = +g.dataset.max, tw = fit(t, max - 34), pw = Math.max(tw + 34, 96), half = pw / 2 - 14;
			g.querySelector('.plq').setAttribute('x', cx - pw / 2); g.querySelector('.plq').setAttribute('width', pw);
			g.querySelector('.str').setAttribute('d', 'M' + (cx - half) + ' 12V26M' + (cx + half) + ' 12V26');
			var pins = g.querySelectorAll('.pin'); pins[0].setAttribute('cx', cx - half); pins[1].setAttribute('cx', cx + half);
		});
		[].forEach.call(root.querySelectorAll('[data-bay]'), function (g) { api.attach(g, +g.dataset.bay); });
		render.last = { api: api, narrow: narrow };
	}

	global.AWHubDesign = global.AWHubDesign || {};
	global.AWHubDesign[4] = function (api) {
		render(api);
		if (!render.bound) {
			render.bound = true;
			addEventListener('resize', function () {
				var s = render.last; if (!s) return;
				var nw = innerWidth <= 640; if (nw !== s.narrow) { if (s.api.close) s.api.close(); render(s.api); }
			});
		}
	};
})(window);
