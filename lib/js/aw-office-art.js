/* Cute chibi office workers (SVG strings) shared by the home-page "office" designs.
   Local origin = the feet; the character is ~50 units tall. Animations live in lib/css/aw-office.css.

     AWArt.worker({ x, y, s, dir, pose, skin, hair, hairStyle, shirt, pants, acc, sit, d, shadow })
       pose : 'stand' | 'type' | 'wave' | 'walk' | 'think'
       acc  : 'none' | 'glasses' | 'headset' | 'cap' | 'hardhat' | 'tie' | 'badge'
       sit  : hide the legs and drop the torso (desk / chair hides the rest)
       d    : 0-3, desynchronises the idle animation so a room never moves in lockstep
     AWArt.look(i, shirt, acc)  -> a varied, deterministic look for the i-th person
     AWArt.logo(name, x, y, size) -> <image> of a Microsoft 365 app icon */
(function (global) {
	'use strict';
	var SKINS = ['#f7d6b8', '#eab98d', '#c98e63', '#8d5a3b', '#f2c9a8', '#d9a47c'];
	var HAIRS = ['#2b2118', '#4a3322', '#7a4a24', '#d9a441', '#151515', '#a33a2a', '#6b6b78'];
	var STYLES = ['short', 'long', 'bun', 'short', 'curly', 'long'];
	var PANTS = ['#2f3b5c', '#3b3b46', '#44546a', '#5a4a3a'];
	var ICONS = {
		Word: 'lib/icons/brands/m365/Word.svg', Excel: 'lib/icons/brands/m365/Excel.svg',
		PowerPoint: 'lib/icons/brands/m365/PowerPoint.svg', Outlook: 'lib/icons/brands/m365/Outlook.svg',
		Teams: 'lib/icons/brands/m365/Teams.svg', Copilot: 'lib/icons/brands/Microsoft365Copilot.svg',
		CopilotStudio: 'lib/icons/Power-Platform-icons-scalable/CopilotStudio_scalable.svg'
	};

	function hair(style, c) {
		var top = '<path d="M-10.6 -37.6 A10.6 10.6 0 0 1 10.6 -37.6 Q5 -43.4 -1 -41 Q-7 -40 -10.6 -37.6Z" fill="' + c + '"/>';
		if (style === 'long') return top + '<rect x="-11.4" y="-39" width="4.2" height="17" rx="2.1" fill="' + c + '"/><rect x="7.2" y="-39" width="4.2" height="17" rx="2.1" fill="' + c + '"/>';
		if (style === 'bun') return top + '<circle cx="0" cy="-50" r="4.6" fill="' + c + '"/>';
		if (style === 'curly') return top + '<circle cx="-9" cy="-40" r="4" fill="' + c + '"/><circle cx="9" cy="-40" r="4" fill="' + c + '"/><circle cx="0" cy="-47" r="4.4" fill="' + c + '"/>';
		return top;
	}
	function accessory(acc, shirt) {
		switch (acc) {
			case 'glasses': return '<g fill="none" stroke="#1b1f2b" stroke-width="1.2"><circle cx="-4" cy="-37.6" r="3.3"/><circle cx="4" cy="-37.6" r="3.3"/><path d="M-0.7 -37.6h1.4"/></g>';
			case 'headset': return '<path d="M-10.6 -38 A10.6 10.6 0 0 1 10.6 -38" fill="none" stroke="#2a2f3d" stroke-width="2.2"/><rect x="-12.6" y="-40" width="4" height="8" rx="2" fill="#2a2f3d"/><path d="M-10.8 -32.5 q0 4 5 4.6" fill="none" stroke="#2a2f3d" stroke-width="1.4"/><circle cx="-5.4" cy="-27.8" r="1.5" fill="#2a2f3d"/>';
			case 'cap': return '<path d="M-11 -41 A11 11 0 0 1 11 -41 Z" fill="#1d2a4a"/><rect x="-12.4" y="-42" width="24.8" height="3.2" rx="1.6" fill="#16203a"/><circle cx="0" cy="-47" r="2" fill="#f2b705"/>';
			case 'hardhat': return '<path d="M-11.4 -40 A11.4 11.4 0 0 1 11.4 -40 Z" fill="#f2b705"/><rect x="-13" y="-41" width="26" height="3.4" rx="1.7" fill="#e0a500"/><rect x="-1.6" y="-51" width="3.2" height="8" rx="1.4" fill="#ffd34d"/>';
			case 'tie': return '<path d="M0 -27 l3 4 l-3 8 l-3 -8z" fill="#c8362f"/>';
			case 'badge': return '<rect x="-6.6" y="-23" width="6.2" height="8" rx="1.4" fill="#fff" stroke="' + shirt + '" stroke-width="1"/><rect x="-5.4" y="-21.8" width="3.8" height="2.4" fill="' + shirt + '"/>';
		}
		return '';
	}

	function worker(o) {
		o = o || {};
		var skin = o.skin || SKINS[0], hc = o.hair || HAIRS[0], shirt = o.shirt || '#0078d4', pants = o.pants || PANTS[0];
		var pose = o.pose || 'stand', dir = o.dir || 1, s = o.s || 1, drop = o.sit ? 7 : 0;
		var legs = o.sit ? '' :
			'<g class="leg-l"><rect x="-5.6" y="-11" width="5" height="11" rx="2.5" fill="' + pants + '"/><ellipse cx="-3.1" cy="-0.6" rx="3.6" ry="2" fill="#27283a"/></g>' +
			'<g class="leg-r"><rect x="0.6" y="-11" width="5" height="11" rx="2.5" fill="' + pants + '"/><ellipse cx="3.1" cy="-0.6" rx="3.6" ry="2" fill="#27283a"/></g>';
		var shadow = o.shadow === false ? '' : '<ellipse cx="0" cy="0.5" rx="11" ry="3.4" fill="#000" opacity="0.16"/>';
		return '<g transform="translate(' + (o.x || 0) + ' ' + (o.y || 0) + ') scale(' + (s * dir) + ' ' + s + ')">' +
			'<g class="aw-w pose-' + pose + (o.d ? ' d' + o.d : '') + '">' + shadow + legs +
			'<g class="body" transform="translate(0 ' + drop + ')">' +
			'<g class="arm-l" style="transform:rotate(7deg)"><rect x="-12.2" y="-27" width="4.6" height="14" rx="2.3" fill="' + shirt + '"/><circle cx="-9.9" cy="-12.6" r="2.5" fill="' + skin + '"/></g>' +
			'<rect x="-8.4" y="-28.4" width="16.8" height="19" rx="6.4" fill="' + shirt + '"/>' +
			accessory(o.acc === 'tie' || o.acc === 'badge' ? o.acc : '', shirt) +
			'<g class="arm-r" style="transform:rotate(-7deg)"><rect x="7.6" y="-27" width="4.6" height="14" rx="2.3" fill="' + shirt + '"/><circle cx="9.9" cy="-12.6" r="2.5" fill="' + skin + '"/></g>' +
			'<circle cx="0" cy="-37.6" r="10.2" fill="' + skin + '"/>' + hair(o.hairStyle || 'short', hc) +
			'<g class="eye"><ellipse cx="-3.6" cy="-36.6" rx="1.3" ry="1.8" fill="#1b1f2b"/><ellipse cx="3.6" cy="-36.6" rx="1.3" ry="1.8" fill="#1b1f2b"/></g>' +
			'<circle cx="-6.6" cy="-33.6" r="1.9" fill="#ff8da1" opacity="0.5"/><circle cx="6.6" cy="-33.6" r="1.9" fill="#ff8da1" opacity="0.5"/>' +
			'<path d="M-2 -32.4 q2 2 4 0" fill="none" stroke="#7a3b3b" stroke-width="1.1" stroke-linecap="round"/>' +
			(o.acc && o.acc !== 'tie' && o.acc !== 'badge' && o.acc !== 'none' ? accessory(o.acc, shirt) : '') +
			'</g></g></g>';
	}

	function look(i, shirt, acc) {
		return { skin: SKINS[i % SKINS.length], hair: HAIRS[(i * 3 + 1) % HAIRS.length], hairStyle: STYLES[(i * 5 + 2) % STYLES.length],
			pants: PANTS[i % PANTS.length], shirt: shirt, acc: acc || 'none', d: i % 4 };
	}
	function logo(name, x, y, size) {
		var s = size || 28;
		return '<image href="' + ICONS[name] + '" x="' + (x - s / 2) + '" y="' + (y - s / 2) + '" width="' + s + '" height="' + s + '"/>';
	}

	global.AWArt = { worker: worker, look: look, logo: logo, icons: ICONS, skins: SKINS };
})(window);
