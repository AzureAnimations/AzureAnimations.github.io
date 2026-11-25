/* Animated diagrams for the ten key concepts. Each entry returns an SVG string; the page re-inserts it on every selection so the animation replays.
   Illustrative values only. Colours come from the page theme (--c1..--c4). */
window.AIE_CONCEPTS = (function () {
	const W = 640, H = 260;
	const S = (inner, alt) => `<svg class="cs" viewBox="0 0 ${W} ${H}" role="img" aria-label="${alt}">${inner}</svg>`;
	const d = n => `style="--d:${n}s"`;
	const circ = (x, y, r, cls, delay) => `<circle class="pop ${cls}" cx="${x}" cy="${y}" r="${r}" ${d(delay)}/>`;
	const txt = (x, y, t, cls = '', delay = 0) => `<text class="${cls}" x="${x}" y="${y}" text-anchor="middle" ${d(delay)}>${t}</text>`;
	/* hand-drawn connector: a slightly wobbly line that is drawn from start to finish, then its arrowhead is sketched; the whole sequence loops.
	   `seq` (1-3) staggers several connectors inside one loop. */
	let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647 - .5;
	const wobble = pts => pts.map(([x, y], i) => (i === 0 || i === pts.length - 1) ? [x, y] : [x + rnd() * 3.2, y + rnd() * 3.2]);
	const line = (pts, x, y, dx, dy, cls, seq) => {
		const w = wobble(pts), nx = -dy, ny = dx, p = (a, b) => `${(x - dx * a + nx * b).toFixed(1)} ${(y - dy * a + ny * b).toFixed(1)}`;
		return `<path class="hand h${seq} ${cls}" pathLength="1" d="M${w.map(q => q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' L')}"/>` +
			`<path class="head a${seq} ${cls}" d="M${p(14, 10)} L${(x + dx * 2).toFixed(1)} ${(y + dy * 2).toFixed(1)} L${p(12, -9)}"/>`;
	};
	const straight = (x1, y1, x2, y2, cls, seq) => { const n = 9, dx = Math.sign(x2 - x1), pts = Array.from({ length: n + 1 }, (_, i) => [x1 + (x2 - x1) * i / n, y1 + (y2 - y1) * i / n]); return line(pts, x2, y2, dx, 0, cls, seq); };
	return {
		/* Spend -> Decisions -> Value, dashed lines flowing toward each arrowhead */
		ae: () => S(`
			${straight(166, 120, 266, 120, 'f4', 1)}${straight(376, 120, 476, 120, 'f4', 2)}
			${circ(110, 120, 44, 'f1', 0)}${circ(320, 120, 44, 'f2', .3)}${circ(530, 120, 44, 'f4 pulse', .6)}
			${txt(110, 127, '$', 'big w')}${txt(320, 127, '?', 'big w', .3)}${txt(530, 127, '✓', 'big w', .6)}
			${txt(110, 195, 'Spend', '', .2)}${txt(320, 195, 'Decisions', '', .5)}${txt(530, 195, 'Value', '', .8)}
			${txt(110, 217, 'what it costs', 'm', .3)}${txt(320, 217, 'what we choose', 'm', .6)}${txt(530, 217, 'what we get back', 'm', .9)}`, 'Spend flows through decisions to value'),

		/* three teams around one loop, dashes flowing clockwise */
		fo: () => {
			const cx = 320, cy = 125, r = 90, pt = a => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
			const arc = ([a1, a2], k, seq) => {
				const n = 12, pts = Array.from({ length: n + 1 }, (_, i) => pt(a1 + (a2 - a1) * i / n)), rad = a2 * Math.PI / 180;
				return line(pts, pts[n][0], pts[n][1], -Math.sin(rad), Math.cos(rad), k, seq);
			};			return S(`
				${arc([-66, 6], 'f2', 1)}${arc([54, 126], 'f2', 2)}${arc([174, 246], 'f2', 3)}
				<g class="pop" ${d(.3)}><circle class="f1" cx="320" cy="35" r="30"/>${txt(320, 40, 'Inform', 'w nd')}</g>
				<g class="pop" ${d(.6)}><circle class="f3" cx="398" cy="170" r="30"/>${txt(398, 175, 'Optimize', 'w nd')}</g>
				<g class="pop" ${d(.9)}><circle class="f4" cx="242" cy="170" r="30"/>${txt(242, 175, 'Operate', 'w nd')}</g>
				${txt(320, 108, 'FinOps', 'big', 1)}${txt(320, 128, 'one shared set of numbers', 'xsm', 1.1)}
				${txt(110, 125, 'Finance', 'tag', 1.2)}${txt(530, 125, 'Technology', 'tag', 1.3)}${txt(320, 250, 'Business', 'tag', 1.4)}`, 'A repeating loop of inform, optimize and operate');
		},
		/* a sentence splits into tokens */
		tk: () => {
			const parts = ['Summar', 'ize', ' this', ' email', ' thread'];
			let x = 80; const w = [92, 62, 84, 90, 100];
			const chips = parts.map((p, i) => { const g = `<g class="fall" ${d(.3 + i * .45)}><rect class="chip" x="${x}" y="95" width="${w[i]}" height="46" rx="10"/>${txt(x + w[i] / 2, 124, p.replace(' ', '·'), 'mono')}${txt(x + w[i] / 2, 168, String(i + 1), 'm', .3 + i * .45)}</g>`; x += w[i] + 8; return g; }).join('');
			return S(`${txt(320, 52, '“Summarize this email thread”', 'sub', 0)}${chips}
				<g class="pop" ${d(2.9)}><rect class="badge f1b" x="215" y="190" width="210" height="42" rx="21"/>${txt(320, 217, '5 tokens, billed by use', 'w sm')}</g>`, 'A sentence split into five tokens');
		},

		/* usage drives the bill */
		cp: () => S(`
			<line class="axis" x1="70" y1="215" x2="590" y2="215"/>
			${[['Mon', 40], ['Tue', 70], ['Wed', 110], ['Thu', 165]].map(([l, h], i) => `<rect class="grow f${[1, 2, 3, 4][i]}" x="${105 + i * 120}" y="${215 - h}" width="64" height="${h}" rx="8" ${d(.2 + i * .3)}/>${txt(137 + i * 120, 238, l, 'm')}`).join('')}
			<g class="fade" ${d(1.6)}><path class="trend draw" pathLength="1" d="M135 170 L255 140 L375 100 L495 45" ${d(1.4)}/></g>
			<g class="pop" ${d(2)}><rect class="badge f3b" x="375" y="22" width="215" height="38" rx="19"/>${txt(482, 47, 'more use, bigger bill', 'w sm')}</g>`, 'Bars growing: more use means a bigger bill'),

		/* seats */
		sp: () => {
			const seats = Array.from({ length: 12 }, (_, i) => { const used = [0, 1, 3, 4, 7, 9].includes(i); return `<g class="pop" ${d(.15 + i * .08)}><circle class="seat ${used ? 'f1' : 'idle'}" cx="${190 + (i % 6) * 52}" cy="${95 + Math.floor(i / 6) * 58}" r="17"/></g>`; }).join('');
			return S(`${seats}
				${txt(320, 40, 'Every seat has the same monthly fee', 'sub', 0)}
				<g class="fade" ${d(1.4)}>${txt(190 + 1.5 * 52, 208, '6 seats in use', 'tag', 1.4)}</g>
				<g class="fade" ${d(1.8)}>${txt(190 + 4.2 * 52, 208, '6 barely used', 'm', 1.8)}</g>
				<g class="pop" ${d(2.2)}><rect class="badge f3b" x="180" y="226" width="280" height="30" rx="15"/>${txt(320, 247, 'easy to predict, can be wasteful', 'w xs')}</g>`, 'Twelve seats, six in use, one fixed fee');
		},

		/* actual then forecast */
		cf: () => S(`
			<line class="axis" x1="60" y1="210" x2="590" y2="210"/>
			${[34, 46, 60, 76, 92].map((h, i) => `<rect class="grow f1" x="${85 + i * 62}" y="${210 - h * 1.5}" width="42" height="${h * 1.5}" rx="6" ${d(.1 + i * .2)}/>`).join('')}
			${[112, 132, 154].map((h, i) => `<rect class="grow fc" x="${395 + i * 62}" y="${210 - h * 1.1}" width="42" height="${h * 1.1}" rx="6" ${d(1.3 + i * .3)}/>`).join('')}
			<path class="trend draw" pathLength="1" d="M106 150 L168 130 L230 105 L292 85 L354 62 L416 48 L478 30 L540 14" ${d(1.1)}/>
			${txt(220, 238, 'actual', 'm')}${txt(478, 238, 'forecast', 'm')}
			<g class="blink" ${d(2.5)}><rect class="badge f3b" x="40" y="14" width="236" height="36" rx="18"/>${txt(158, 38, 'assumption: +15% / month', 'w xs')}</g>`, 'Actual columns followed by dashed forecast columns'),

		/* live metrics */
		ob: () => {
			const tile = (x, label, color, bars, delay) => `<g class="pop" ${d(delay)}><rect class="tile" x="${x}" y="40" width="170" height="170" rx="16"/>${txt(x + 85, 78, label, 'sm')}
				${bars.map((h, i) => `<rect class="spark ${color}" x="${x + 22 + i * 18}" y="${190 - h}" width="11" height="${h}" rx="3" style="--d:${(i * .13).toFixed(2)}s"/>`).join('')}</g>`;
			return S(`${tile(60, 'Requests', 'f1', [30, 52, 44, 70, 58, 86, 64], .1)}${tile(235, 'Tokens', 'f2', [24, 38, 60, 48, 76, 62, 90], .4)}${tile(410, 'Errors', 'f3', [12, 8, 14, 6, 10, 7, 9], .7)}
				${txt(320, 244, 'you cannot explain a spike you cannot see', 'm', 1.2)}`, 'Three live metric tiles with moving sparkline bars');
		},

		/* value vs cost */
		roi: () => S(`
			<line class="axis" x1="70" y1="200" x2="360" y2="200"/>
			<rect class="grow f4" x="110" y="45" width="90" height="155" rx="10" ${d(.2)}/>${txt(155, 228, 'Value $5,000', 'sm', .2)}
			<rect class="grow f2" x="240" y="124" width="90" height="76" rx="10" ${d(.8)}/>${txt(285, 228, 'Cost $2,000', 'sm', .8)}
			<g class="pop" ${d(1.6)}><rect class="badge f4b" x="400" y="70" width="190" height="110" rx="18"/>${txt(495, 112, '($5,000 − $2,000)', 'w sm', 1.6)}${txt(495, 134, '÷ $2,000', 'w sm', 1.7)}${txt(495, 168, '= 150%', 'w big2', 1.9)}</g>`, 'Value and cost bars giving 150 percent return'),

		/* checklist */
		gv: () => S(`
			<g class="pop" ${d(0)}><path class="shield f1" d="M110 70 L200 100 V160 C200 200 160 225 110 245 C60 225 20 200 20 160 V100 Z" transform="translate(50,5) scale(.78)"/><path class="tick draw" pathLength="1" d="M100 120 l18 20 l34 -40" ${d(.5)}/></g>
			${['Who can use it?', 'Which data is allowed?', 'Who owns the budget?'].map((t, i) => `<g class="fade" ${d(.5 + i * .7)}><rect class="row" x="250" y="${55 + i * 62}" width="340" height="50" rx="12"/><circle class="f4" cx="282" cy="${80 + i * 62}" r="14"/><path class="tick draw" pathLength="1" d="M275 ${80 + i * 62} l5 6 l10 -12" ${d(.9 + i * .7)}/>${txt(308, 86 + i * 62, t, 'left', .5 + i * .7)}</g>`).join('')}`, 'A governance checklist being ticked off'),

		/* shrinking bill, same outcome */
		co: () => S(`
			<line class="axis" x1="60" y1="215" x2="590" y2="215"/>
			<rect class="f2 shrink" x="120" y="55" width="100" height="160" rx="10" ${d(.3)}/>${txt(170, 238, 'Before', 'm')}
			<path class="draw arrow" pathLength="1" d="M250 130 H350" ${d(.6)}/><path class="draw arrow" pathLength="1" d="M335 116 L352 130 L335 144" ${d(1)}/>
			<rect class="f4 shrink2" x="380" y="135" width="100" height="80" rx="10" ${d(1.1)}/>${txt(430, 238, 'After', 'm')}
			<g class="pop" ${d(2)}><circle class="f1" cx="545" cy="120" r="32"/><path class="tick draw" pathLength="1" d="M530 120 l11 12 l20 -24" ${d(2.2)}/>${txt(545, 176, 'same outcome', 'sm', 2)}</g>
			<g class="fade" ${d(1.6)}>${txt(430, 112, 'less waste', 'tag', 1.6)}</g>`, 'A tall bar shrinking while the outcome stays the same')
	};
}());
