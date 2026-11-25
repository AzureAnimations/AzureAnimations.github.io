/* AI Economics & FinOps · page behaviour. Reads everything from window.AIE_CONTENT (content.js). English only, no audio. */
(function () {
	'use strict';
	const C = window.AIE_CONTENT;
	const $ = (s, r = document) => r.querySelector(s);
	const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
	const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
	const reduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const money = n => '$' + Math.round(n).toLocaleString('en-US');
	const money2 = n => '$' + n.toFixed(2);
	const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
	const scrollToEl = el => el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
	function node(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }

	const ICON = {
		usage: '<path d="M4 5h16v11H9l-5 4z"/>',
		cost: '<circle cx="12" cy="12" r="8"/><path d="M12 7v10M9.5 9.5c0-1 1-1.5 2.5-1.5s2.5.6 2.5 1.6c0 2.4-5 1.2-5 3.7 0 1 1 1.7 2.5 1.7s2.5-.6 2.5-1.6"/>',
		gov: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
		opt: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
		value: '<path d="M4 19h16M6 15l4-4 3 3 5-6"/><path d="M15 8h3v3"/>',
		invest: '<path d="M3 12V4h8l9 9-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>',
		costs: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
		manage: '<path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 16l4-5"/>',
		target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>'
	};
	const svgIcon = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;
	const STAGE_ICON = { invest: 'invest', costs: 'costs', manage: 'manage', value: 'target' };

	/* ───────── progress (stages explored) ───────── */
	const KEY = 'aie-progress';
	let explored = new Set();
	try { explored = new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch (e) { /* private mode */ }
	function saveProgress() { try { localStorage.setItem(KEY, JSON.stringify([...explored])); } catch (e) { /* ignore */ } }
	function updateProgress() {
		const total = C.learningStages.length;
		$('#prog-label').textContent = `${explored.size} of ${total} stages explored`;
		$('#prog-label').parentElement.title = $('#prog-label').textContent;
		$$('#prog-dots i').forEach((d, i) => d.classList.toggle('on', explored.has(C.learningStages[i].id)));
		$$('.stage').forEach(b => b.classList.toggle('is-done', explored.has(b.dataset.id)));
		const m = $('#done-status'); if (m) m.textContent = completionStatus();
		const mark = $('#mark-btn'); if (mark && mark.dataset.id) mark.setAttribute('aria-pressed', explored.has(mark.dataset.id) ? 'true' : 'false');
		if (mark && mark.dataset.id) mark.textContent = explored.has(mark.dataset.id) ? '✓ Explored' : 'Mark explored';
	}
	function markExplored(id) { if (!explored.has(id)) { explored.add(id); saveProgress(); updateProgress(); } }

	/* ───────── hero ───────── */
	function renderHero() {
		const H = C.hero;
		const nodes = H.flow.map((n, i) => `<li class="node"><div class="ico">${svgIcon(n.id)}</div><div><b>${esc(n.label)}</b><small>${esc(n.hint)}</small></div></li>${i < H.flow.length - 1 ? '<li class="link" aria-hidden="true"></li>' : ''}`).join('');
		$('#hero-body').innerHTML = `
			<p class="eyebrow">${esc(H.eyebrow)}</p>
			<h1 id="hero-h">AI <span>Economics &amp; FinOps</span></h1>
			<p class="sub">${esc(H.subheading)}</p>
			${H.introduction.map(p => `<p class="intro">${esc(p)}</p>`).join('')}
			<div class="btns"><a class="btn pri" href="#journey">${esc(H.primary)}</a><a class="btn" href="#outcomes">${esc(H.secondary)}</a></div>
			<figure class="flow" role="group" aria-label="${esc(H.flowAlt)}" style="margin-inline:0;">
				<ol>${nodes}</ol>
				<p class="loop"><b>↻</b> What you learn from value shapes the next round of AI usage.</p>
			</figure>`;
	}

	/* ───────── why it matters ───────── */
	function renderWhy() {
		const W = C.why;
		$('#why-body').innerHTML = `
			<h2 id="why-h">${esc(W.headline)}</h2>
			<p class="lead">${esc(W.lead)}</p>
			<div class="grid4">${W.questions.map((q, i) => `<button type="button" class="qcard reveal" aria-expanded="false"><span class="num">${i + 1}</span><h3>${esc(q.q)}</h3><p>${esc(q.a)}</p><span class="hint">Tap to see why</span></button>`).join('')}</div>
			<p class="lead">${esc(W.body)}</p>
			<div class="key reveal"><small>Key message</small>${esc(W.keyMessage)}</div>`;
		$$('#why-body .qcard').forEach(b => b.addEventListener('click', () => {
			const open = b.getAttribute('aria-expanded') === 'true';
			b.setAttribute('aria-expanded', open ? 'false' : 'true');
			$('.hint', b).textContent = open ? 'Tap to see why' : 'Tap to hide';
		}));
	}

	/* ───────── learning journey ───────── */
	let openStageId = null;
	function renderJourney() {
		const J = C.journey;
		$('#journey-body').innerHTML = `
			<h2 id="journey-h">${esc(J.headline)}</h2>
			<p class="lead">${esc(J.intro)}</p>
			<div class="stages">${C.learningStages.map(s => `<button type="button" class="stage reveal" data-id="${s.id}" aria-expanded="false" aria-controls="detail"><span class="done">✓ Explored</span><div class="sico">${svgIcon(STAGE_ICON[s.id])}</div><div class="step">Stage ${s.n}</div><h3>${esc(s.title)}</h3><p class="q">${esc(s.question)}</p><p class="d">${esc(s.description)}</p></button>`).join('')}</div>
			<section class="detail" id="detail" hidden aria-live="polite" tabindex="-1"></section>`;
		$$('.stage').forEach(b => b.addEventListener('click', () => openStage(b.dataset.id)));
		// On a desktop screen the panel is always on show, so start with the first stage open rather than an empty box
		if (matchMedia('(min-width:901px) and (min-height:520px)').matches) openStage(C.learningStages[0].id, true);
	}

	function openStage(id, noScroll) {
		const d = $('#detail');
		if (openStageId === id && !noScroll) { closeStage(); return; }
		const s = C.learningStages.find(x => x.id === id), idx = C.learningStages.indexOf(s);
		openStageId = id;
		$$('.stage').forEach(b => b.setAttribute('aria-expanded', b.dataset.id === id ? 'true' : 'false'));
		const last = idx === C.learningStages.length - 1, next = C.learningStages[idx + 1];
		d.innerHTML = `
			<div class="dcols">
				<div class="dinfo">
					<div class="d1"><p class="eyebrow" style="margin:0">Stage ${s.n} of ${C.learningStages.length}</p><h3>${esc(s.title)}</h3><p class="dq">${esc(s.question)}</p><p class="dd">${esc(s.description)}</p></div>
					<div class="d2"><h4>Topics</h4><ul class="topics">${s.topics.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>
					<div class="d3"><div class="outcome"><b>Learning outcome.</b> ${esc(s.outcome)}</div>
						<div class="dfoot">
							<button type="button" class="btn sm" id="mark-btn" data-id="${s.id}" aria-pressed="false">Mark explored</button>
							${last ? '<a class="btn sm pri" href="#concepts">Key concepts →</a>' : `<button type="button" class="btn sm pri" id="next-btn" title="Next: ${esc(next.title)}">Next stage →</button>`}
							<button type="button" class="btn sm" id="close-btn">Close</button>
						</div></div>
				</div>
				<div class="widget" id="widget-host"><h4>${esc(s.animationTitle)}</h4><p class="note wi" style="margin:0 0 .4rem">${esc(s.animationIntro)}</p></div>
			</div>`;
		d.hidden = false; $('#journey-body').classList.add('has-open');
		document.dispatchEvent(new CustomEvent('aie:stage', { detail: { id } }));
		const touch = () => markExplored(s.id);
		$('#widget-host', d).appendChild(WIDGETS[s.animation](touch));   // built only when the stage is opened
		$('#mark-btn', d).addEventListener('click', () => { if (explored.has(s.id)) { explored.delete(s.id); saveProgress(); updateProgress(); } else markExplored(s.id); });
		$('#close-btn', d).addEventListener('click', closeStage);
		const nb = $('#next-btn', d); if (nb) nb.addEventListener('click', () => openStage(next.id));
		updateProgress();
		if (!noScroll && !matchMedia('(min-width:901px) and (min-height:520px)').matches) { scrollToEl(d); setTimeout(() => d.focus({ preventScroll: true }), 350); }
	}
	function closeStage() {
		openStageId = null; $('#detail').hidden = true; $('#journey-body').classList.remove('has-open');
		$$('.stage').forEach(b => b.setAttribute('aria-expanded', 'false'));
		scrollToEl($('#journey'));
	}

	/* ───────── widgets ───────── */
	function rangeCtl(id, label, min, max, step, val, fmt) {
		return `<div class="ctl"><label for="${id}">${label}</label><output for="${id}" id="${id}-o">${fmt(val)}</output><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}"></div>`;
	}
	function segCtl(id, label, opts, cur) {
		return `<div class="ctl" style="grid-template-columns:1fr"><label id="${id}-l">${label}</label><div class="seg" role="group" aria-labelledby="${id}-l" id="${id}">${opts.map(o => `<button type="button" data-v="${esc(o.v)}" aria-pressed="${o.v === cur}">${esc(o.t)}</button>`).join('')}</div></div>`;
	}
	function bindSeg(root, id, fn) {
		const g = $('#' + id, root);
		g.addEventListener('click', e => {
			const b = e.target.closest('button'); if (!b) return;
			$$('button', g).forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
			fn(b.dataset.v);
		});
	}

	const WIDGETS = {
		/* Stage 1: subscription vs usage-based */
		pricingCompare(touch) {
			const SUB = 30, PRICE = 0.02, DAYS = 22, CROSS = SUB / (DAYS * PRICE);
			const root = node(`<div class="w2"><div class="wl"><span class="ill">Illustrative prices</span>
				${rangeCtl('pc-u', 'Employees using the assistant', 10, 500, 10, 100, v => v)}
				${rangeCtl('pc-r', 'Requests per person, per working day', 0, 200, 2, 40, v => v)}
				<div class="bars" id="pc-bars"></div><div class="verdict" id="pc-verdict" aria-live="polite"></div>
				</div><div class="wr"><svg class="chart" id="pc-chart" viewBox="0 0 440 210" role="img" aria-label="Line chart of monthly cost per person: the subscription is a flat line, the usage-based cost rises with requests and crosses it near 68 requests a day."></svg></div>
				<p class="note wn">Assumptions: subscription $${SUB} per person per month; usage-based $${PRICE.toFixed(2)} per request; ${DAYS} working days a month. Made-up numbers for learning.</p></div>`);
			const u = $('#pc-u', root), r = $('#pc-r', root);
			function draw() {
				const users = +u.value, req = +r.value;
				$('#pc-u-o', root).textContent = users; $('#pc-r-o', root).textContent = req;
				const sub = users * SUB, use = users * req * DAYS * PRICE, max = Math.max(sub, use, 1);
				$('#pc-bars', root).innerHTML = `
					<div class="barrow"><span>Subscription</span><div class="track"><div class="fill" style="width:${sub / max * 100}%;background:var(--c1)"></div></div><b>${money(sub)}</b></div>
					<div class="barrow"><span>Usage-based</span><div class="track"><div class="fill" style="width:${use / max * 100}%;background:var(--c2)"></div></div><b>${money(use)}</b></div>`;
				requestAnimationFrame(() => { $$('.fill', root).forEach(f => { const w = f.style.width; f.style.width = '0'; requestAnimationFrame(() => f.style.width = w); }); });
				const diff = Math.abs(sub - use);
				let v;
				if (diff < Math.max(sub, use) * 0.01) v = 'About equal at this level.';
				else v = (use < sub ? 'Usage-based' : 'Subscription') + ` costs ${money(diff)} less per month at this level.`;
				$('#pc-verdict', root).innerHTML = `${v}<br><span style="font-weight:400">With these assumptions the two cost the same at about <b>${Math.round(CROSS)}</b> requests per person per day. Below it usage-based is cheaper. Above it the flat subscription wins. Predictability is a separate question.</span>`;
				// chart: cost per person per month vs requests per day
				const W = 440, Hh = 210, L = 46, B = 30, T = 12, R = 12, xs = x => L + x / 200 * (W - L - R), ys = y => Hh - B - y / 100 * (Hh - B - T);
				let g = '';
				[0, 25, 50, 75, 100].forEach(t => { g += `<line class="axis" x1="${L}" x2="${W - R}" y1="${ys(t)}" y2="${ys(t)}"/><text x="${L - 6}" y="${ys(t) + 4}" text-anchor="end">$${t}</text>`; });
				[0, 50, 100, 150, 200].forEach(t => { g += `<text x="${xs(t)}" y="${Hh - 12}" text-anchor="middle">${t}</text>`; });
				g += `<text x="${(L + W - R) / 2}" y="${Hh - 1}" text-anchor="middle">requests per person per day</text>`;
				g += `<line x1="${xs(0)}" y1="${ys(SUB)}" x2="${xs(200)}" y2="${ys(SUB)}" stroke="var(--c1)" stroke-width="3"/><text x="${xs(200) - 4}" y="${ys(SUB) - 6}" text-anchor="end" style="fill:var(--c1);font-weight:700">Subscription</text>`;
				g += `<line x1="${xs(0)}" y1="${ys(0)}" x2="${xs(200)}" y2="${ys(DAYS * PRICE * 200)}" stroke="var(--c2)" stroke-width="3"/><text x="${xs(140)}" y="${ys(DAYS * PRICE * 140) - 8}" text-anchor="end" style="fill:var(--c2);font-weight:700">Usage-based</text>`;
				g += `<circle cx="${xs(CROSS)}" cy="${ys(SUB)}" r="5" fill="var(--warn)"/><text x="${xs(CROSS) + 8}" y="${ys(SUB) + 16}" style="fill:var(--warn);font-weight:700">cross-over ≈ ${Math.round(CROSS)}</text>`;
				g += `<line x1="${xs(req)}" x2="${xs(req)}" y1="${T}" y2="${Hh - B}" stroke="var(--text)" stroke-dasharray="4 4"/>`;
				$('#pc-chart', root).innerHTML = g;
			}
			[u, r].forEach(x => x.addEventListener('input', () => { draw(); touch(); }));
			draw(); return root;
		},

		/* Stage 2: usage simulator */
		usageSimulator(touch) {
			const TIERS = { Small: [0.15, 0.6], Standard: [2.5, 10], Advanced: [10, 40] };
			const SIZES = { Short: 300, Medium: 1000, Long: 3000 };
			const st = { size: 'Medium', tier: 'Standard' };
			const root = node(`<div class="w2"><div class="wl"><span class="ill">Illustrative prices</span>
				${rangeCtl('us-r', 'Requests per day', 100, 20000, 100, 2000, v => (+v).toLocaleString('en-US'))}
				${segCtl('us-s', 'Request size (tokens in)', Object.entries(SIZES).map(([k, v]) => ({ v: k, t: `${k} · ${v.toLocaleString('en-US')}` })), st.size)}
				${segCtl('us-t', 'Model tier', Object.keys(TIERS).map(k => ({ v: k, t: k })), st.tier)}
				${rangeCtl('us-g', 'Growth in usage per month', 0, 30, 1, 10, v => v + '%')}
				${rangeCtl('us-v', 'Value of each request (for the ROI example)', 0, 0.1, 0.005, 0.03, v => '$' + (+v).toFixed(3))}
				</div><div class="wr"><div class="kpis" id="us-k" aria-live="polite"></div>
				<div class="bars" id="us-b"></div>
				<h4 style="margin:.8rem 0 .2rem">Six-month forecast</h4><div id="us-f"></div>
				</div><p class="note wn">Assumptions: 30 days a month, the answer is half as long as the request, and illustrative prices per million tokens (in / out): Small $0.15 / $0.60, Standard $2.50 / $10, Advanced $10 / $40. A cheaper model is not automatically better. It has to be good enough for the task.</p></div>`);
			function draw() {
				const req = +$('#us-r', root).value, g = +$('#us-g', root).value / 100, val = +$('#us-v', root).value;
				$('#us-r-o', root).textContent = req.toLocaleString('en-US'); $('#us-g-o', root).textContent = Math.round(g * 100) + '%'; $('#us-v-o', root).textContent = '$' + val.toFixed(3);
				const inT = SIZES[st.size], outT = inT / 2, [pi, po] = TIERS[st.tier];
				const cin = inT * pi / 1e6, cout = outT * po / 1e6, per = cin + cout, month = per * req * 30, tokens = (inT + outT) * req * 30;
				const roi = per ? (val - per) / per * 100 : 0;
				$('#us-k', root).innerHTML = `
					<div class="kpi"><small>Estimated per month</small><b>${money(month)}</b></div>
					<div class="kpi"><small>Cost per request</small><b>$${per < 0.01 ? per.toFixed(5) : per.toFixed(4)}</b></div>
					<div class="kpi"><small>Tokens per month</small><b>${(tokens / 1e6).toFixed(1)}M</b></div>
					<div class="kpi"><small>Example ROI</small><b>${val ? Math.round(roi).toLocaleString('en-US') + '%' : '–'}</b></div>`;
				const mx = Math.max(cin, cout) || 1;
				$('#us-b', root).innerHTML = `
					<div class="barrow"><span>Tokens in</span><div class="track"><div class="fill" style="width:${cin / mx * 100}%;background:var(--c1)"></div></div><b>${money(cin * req * 30)}</b></div>
					<div class="barrow"><span>Tokens out</span><div class="track"><div class="fill" style="width:${cout / mx * 100}%;background:var(--c3)"></div></div><b>${money(cout * req * 30)}</b></div>`;
				const vals = [0, 1, 2, 3, 4, 5].map(k => month * Math.pow(1 + g, k)), top = Math.max(...vals, 1);
				$('#us-f', root).innerHTML = `<div style="display:flex;align-items:flex-end;gap:8px;height:70px">${vals.map((v, k) => `<div style="flex:1;text-align:center;font-size:.78rem"><div style="font-weight:700">${money(v)}</div><div style="height:${Math.max(4, v / top * 34)}px;background:${k ? 'var(--c2)' : 'var(--c1)'};border-radius:5px 5px 0 0;margin-top:2px"></div><div style="color:var(--muted)">${k ? '+' + k : 'Now'}</div></div>`).join('')}</div>`;
			}
			$$('input', root).forEach(i => i.addEventListener('input', () => { draw(); touch(); }));
			bindSeg(root, 'us-s', v => { st.size = v; draw(); touch(); });
			bindSeg(root, 'us-t', v => { st.tier = v; draw(); touch(); });
			draw(); return root;
		},

		/* Stage 3: spending dashboard */
		spendDashboard(touch) {
			const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
			const TEAMS = [
				{ n: 'Support', c: 'var(--c1)', v: [2.0, 2.3, 2.8, 3.4, 4.1, 4.9], route: true },
				{ n: 'Sales', c: 'var(--c2)', v: [1.5, 1.6, 1.9, 2.2, 2.6, 3.0], route: true },
				{ n: 'Engineering', c: 'var(--c4)', v: [2.2, 2.4, 2.5, 2.7, 2.9, 3.1], route: false }
			];
			const BUDGET = 12, GROWTH = 1.15;
			const on = { tag: false, budget: false, cache: false, route: false, trim: false };
			const defs = [
				['tag', 'Tag spend by team', 'Allocation: see who spent what'],
				['budget', 'Set a budget and alerts', 'A $12k monthly guardrail with an early warning'],
				['cache', 'Reuse repeated answers', 'Optimization: about 12% fewer repeat requests'],
				['route', 'Use a smaller model for simple tasks', 'Optimization: about 25% less for Support and Sales'],
				['trim', 'Trim long prompts', 'Optimization: about 8% fewer tokens']
			];
			const root = node(`<div class="w2"><div class="wl"><span class="ill">Illustrative data, in $ thousands</span>
				<div id="sd-alert"></div><svg class="chart" id="sd-chart" viewBox="0 0 520 250" role="img" aria-label="Stacked bar chart of monthly AI spend for six months plus next month's forecast."></svg>
				<div class="legend" id="sd-leg"></div></div><div class="wr"><div class="kpis" id="sd-k" aria-live="polite"></div>
				<div class="toggles">${defs.map(([k, t, s]) => `<button type="button" class="tgl" data-k="${k}" aria-pressed="false"><span class="sw"></span><span class="t"><b>${t}</b><small>${s}</small></span></button>`).join('')}</div>
				</div><p class="note wn">Next month's forecast assumes 15% growth before any optimization. Made-up numbers for learning.</p></div>`);
			function forecast() {
				return TEAMS.map(t => {
					let f = t.v[5] * GROWTH;
					if (on.cache) f *= 0.88; if (on.trim) f *= 0.92; if (on.route && t.route) f *= 0.75;
					return f;
				});
			}
			function draw() {
				const fc = forecast(), fTot = fc.reduce((a, b) => a + b, 0), last = TEAMS.reduce((a, t) => a + t.v[5], 0);
				const W = 520, Hh = 250, L = 40, B = 30, T = 14, R = 10, MAX = 16, ys = v => Hh - B - v / MAX * (Hh - B - T), n = 7, bw = (W - L - R) / n, w = bw * 0.62;
				let g = '';
				[0, 4, 8, 12, 16].forEach(t => { g += `<line class="axis" x1="${L}" x2="${W - R}" y1="${ys(t)}" y2="${ys(t)}"/><text x="${L - 6}" y="${ys(t) + 4}" text-anchor="end">$${t}k</text>`; });
				for (let m = 0; m < n; m++) {
					const x = L + m * bw + (bw - w) / 2, isF = m === 6; let acc = 0;
					const vals = isF ? fc : TEAMS.map(t => t.v[m]);
					if (on.tag) vals.forEach((v, i) => { g += `<rect x="${x}" y="${ys(acc + v)}" width="${w}" height="${ys(acc) - ys(acc + v)}" fill="${TEAMS[i].c}" ${isF ? 'fill-opacity=".55" stroke="var(--text)" stroke-dasharray="4 3"' : ''}/>`; acc += v; });
					else { const tot = vals.reduce((a, b) => a + b, 0); g += `<rect x="${x}" y="${ys(tot)}" width="${w}" height="${ys(0) - ys(tot)}" fill="#8793a3" ${isF ? 'fill-opacity=".55" stroke="var(--text)" stroke-dasharray="4 3"' : ''}/>`; }
					g += `<text x="${x + w / 2}" y="${Hh - 12}" text-anchor="middle">${isF ? 'Jul (forecast)' : MONTHS[m]}</text>`;
				}
				if (on.budget) g += `<line x1="${L}" x2="${W - R}" y1="${ys(BUDGET)}" y2="${ys(BUDGET)}" stroke="var(--bad)" stroke-width="2" stroke-dasharray="6 4"/><text x="${W - R}" y="${ys(BUDGET) - 5}" text-anchor="end" style="fill:var(--bad);font-weight:700">Budget $${BUDGET}k</text>`;
				$('#sd-chart', root).innerHTML = g;
				$('#sd-leg', root).innerHTML = on.tag ? TEAMS.map(t => `<span><i style="background:${t.c}"></i>${t.n} $${t.v[5].toFixed(1)}k</span>`).join('') : '<span><i style="background:#8793a3"></i>Untagged: nobody can tell which team the spend belongs to</span>';
				const ratio = fTot / BUDGET; let a;
				if (!on.budget) a = ['off', 'No budget set. Nobody is warned when spend grows.'];
				else if (ratio > 1) a = ['bad', `Alert: next month is forecast at $${fTot.toFixed(1)}k, above the $${BUDGET}k budget.`];
				else if (ratio > 0.8) a = ['warn', `Heads-up: forecast $${fTot.toFixed(1)}k is ${Math.round(ratio * 100)}% of the budget.`];
				else a = ['ok', `On track: forecast $${fTot.toFixed(1)}k is ${Math.round(ratio * 100)}% of the budget.`];
				$('#sd-alert', root).innerHTML = `<div class="alert ${a[0]}" role="status">${a[0] === 'ok' ? '✓' : a[0] === 'off' ? '○' : '⚠'} ${a[1]}</div>`;
				$('#sd-k', root).innerHTML = `<div class="kpi"><small>Last month</small><b>$${last.toFixed(1)}k</b></div><div class="kpi"><small>Next month (forecast)</small><b>$${fTot.toFixed(1)}k</b></div><div class="kpi"><small>Saved by optimizing</small><b>$${(last * GROWTH - fTot).toFixed(1)}k</b></div>`;
			}
			$$('.tgl', root).forEach(b => b.addEventListener('click', () => { on[b.dataset.k] = !on[b.dataset.k]; b.setAttribute('aria-pressed', on[b.dataset.k]); draw(); touch(); }));
			draw(); return root;
		},

		/* Stage 4: before / after */
		beforeAfter(touch) {
			const M = [
				{ k: 'Time per inquiry', a: 12, b: 7, f: v => v + ' min', lower: true },
				{ k: 'Cost per inquiry', a: 6, b: 3.9, f: v => '$' + v.toFixed(2), lower: true },
				{ k: 'Customer satisfaction (of 5)', a: 4.1, b: 4.3, f: v => v.toFixed(1), lower: false, max: 5 },
				{ k: 'Solved on first contact', a: 68, b: 74, f: v => v + '%', lower: false, max: 100 },
				{ k: 'Inquiries needing rework', a: 9, b: 11, f: v => v + '%', lower: true, max: 20 }
			];
			let mode = 'a';
			const root = node(`<div class="w2"><div class="wl"><span class="ill">Illustrative data · fictional support team</span>
				<div class="seg" id="ba-seg" role="group" aria-label="View"><button type="button" data-v="a" aria-pressed="true">Without AI</button><button type="button" data-v="b" aria-pressed="false">With AI assistance</button></div>
				<div class="legend" id="ba-flow" style="margin:.8rem 0"></div></div><div class="wr"><div class="bars" id="ba-bars" aria-live="polite"></div><div class="verdict" id="ba-note"></div>
				</div><p class="note wn">Cost per inquiry with AI includes about $0.40 of AI usage plus the staff time to review each suggestion. Count every cost, not just the obvious one.</p></div>`);
			function draw() {
				const FLOW = { a: ['Read inquiry', 'Search the knowledge base', 'Write the reply', 'Send'], b: ['Read inquiry', 'AI drafts a reply', 'Person reviews and edits', 'Send'] };
				$('#ba-flow', root).innerHTML = FLOW[mode].map((s, i) => `<span class="pill" ${mode === 'b' && i === 1 ? 'style="background:var(--good-soft);border-color:var(--good)"' : ''}>${i + 1}. ${s}</span>`).join('<span class="arrow">→</span>');
				$('#ba-bars', root).innerHTML = M.map(m => {
					const v = m[mode], mx = m.max || Math.max(m.a, m.b) * 1.15, worse = mode === 'b' && (m.lower ? m.b > m.a : m.b < m.a), better = mode === 'b' && !worse;
					return `<div class="barrow" style="grid-template-columns:190px 1fr 70px"><span>${m.k}</span><div class="track"><div class="fill" style="width:${v / mx * 100}%;background:${worse ? 'var(--bad)' : better ? 'var(--good)' : 'var(--c1)'}"></div></div><b>${m.f(v)}</b></div>`;
				}).join('');
				$('#ba-note', root).textContent = mode === 'a' ? 'This is the starting point. Measure it before you change anything, so you have something to compare with.' : 'Faster, cheaper, and happier customers, but rework went up. A good evaluation looks at several measures, then investigates the one that moved the wrong way before scaling.';
			}
			bindSeg(root, 'ba-seg', v => { mode = v; draw(); touch(); });
			draw(); return root;
		}
	};

	/* ───────── glossary ───────── */
	const VIS = {
		flow3: '<span class="pill">Spend</span><span class="arrow">→</span><span class="pill">Decisions</span><span class="arrow">→</span><span class="pill">Value</span>',
		loop: '<span class="pill">Inform</span><span class="arrow">→</span><span class="pill">Optimize</span><span class="arrow">→</span><span class="pill">Operate</span><span class="arrow">↻</span>',
		tokens: '<span class="tok">Summar</span><span class="tok">ize</span><span class="tok"> this</span><span class="tok"> email</span><span class="arrow">≈ 4 tokens (example)</span>',
		rising: '<div class="mini"><i style="height:18px"></i><i style="height:34px"></i><i style="height:58px"></i><i style="height:84px"></i></div><span class="arrow">more use → bigger bill</span>',
		flat: '<div class="mini"><i style="height:50px"></i><i style="height:50px"></i><i style="height:50px"></i><i style="height:50px"></i></div><span class="arrow">same fee every month</span>',
		forecast: '<div class="mini"><i style="height:30px"></i><i style="height:38px"></i><i style="height:48px"></i><i class="d" style="height:58px"></i><i class="d" style="height:70px"></i></div><span class="arrow">solid = actual, dashed = forecast</span>',
		tiles: '<div class="tile"><b>1.2k</b><small>requests</small></div><div class="tile"><b>340k</b><small>tokens</small></div><div class="tile"><b>0.4%</b><small>errors</small></div>',
		roi: '<span>($5,000 value − $2,000 cost) ÷ $2,000 = </span><span class="pill">150% ROI</span>',
		checks: '<div><div class="ck">Who can use it?</div><div class="ck">Which data is allowed?</div><div class="ck">Who owns the budget?</div></div>',
		shrink: '<div class="mini"><i style="height:70px"></i></div><span class="arrow">→</span><div class="mini"><i style="height:36px;background:var(--c4)"></i></div><span class="arrow">same outcome, less waste</span>'
	};
	function renderConcepts() {
		const G = C.glossary, T = G.terms;
		$('#concepts-body').innerHTML = `<h2 id="concepts-h">${esc(G.headline)}</h2><p class="lead">${esc(G.intro.replace('Open a card for a plain-language explanation and a small picture.', 'Pick one to see it explained and animated.'))}</p>
			<div class="gl"><div class="gl-panel" id="gl-panel" role="tabpanel" aria-live="polite"></div>
			<ul class="gl-list" role="tablist" aria-label="Key concepts" aria-orientation="vertical">${T.map((t, i) => `<li><button type="button" class="gl-item" role="tab" id="gl-t${i}" data-i="${i}" aria-selected="false" tabindex="-1"><span class="n">${i + 1}</span>${esc(t.term)}</button></li>`).join('')}</ul></div>`;
		const panel = $('#gl-panel'), items = $$('.gl-item');
		function show(i, focus) {
			const t = T[i], scene = window.AIE_CONCEPTS && window.AIE_CONCEPTS[t.id];
			items.forEach((b, n) => { b.setAttribute('aria-selected', n === i); b.tabIndex = n === i ? 0 : -1; });
			panel.setAttribute('aria-labelledby', 'gl-t' + i);
			document.dispatchEvent(new CustomEvent('aie:concept', { detail: { i } }));
			panel.classList.remove('swap'); void panel.offsetWidth; panel.classList.add('swap');
			panel.innerHTML = `<p class="gl-no">Concept ${i + 1} of ${T.length}</p><h3>${esc(t.term)}</h3><p class="gl-def">${esc(t.def)}</p><div class="gl-stage">${scene ? scene() : `<div class="vis">${VIS[t.visual]}</div>`}</div><p class="gl-more">${esc(t.more)}</p>`;
			if (focus) items[i].focus();
		}
		items.forEach((b, i) => b.addEventListener('click', () => show(i)));
		$('.gl-list').addEventListener('keydown', e => {
			const cur = items.findIndex(b => b.getAttribute('aria-selected') === 'true'); let n = cur;
			if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (cur + 1) % T.length; else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (cur - 1 + T.length) % T.length; else if (e.key === 'Home') n = 0; else if (e.key === 'End') n = T.length - 1; else return;
			e.preventDefault(); show(n, true);
		});
		show(0);
	}
	/* ───────── scenarios ───────── */
	function panelHtml(p) {
		if (p.type === 'options') return `<div class="panel"><h4>${esc(p.title)}</h4><div class="opts2">${p.items.map(i => `<div class="opt2"><b>${esc(i.name)}</b><span class="price">${esc(i.price)}</span><br><small>${esc(i.note)}</small></div>`).join('')}</div></div>`;
		if (p.type === 'table') return `<div class="panel"><h4>${esc(p.title)}</h4><table class="dt"><thead><tr>${p.head.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${p.rows.map(r => `<tr><th scope="row" style="text-transform:none;letter-spacing:0;font-size:.95rem;color:var(--text)">${esc(r[0])}</th><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</tbody></table></div>`;
		const mx = Math.max(...p.values), W = 460, H = 150, bw = W / p.values.length;
		return `<div class="panel"><h4>${esc(p.title)}</h4><svg class="chart" viewBox="0 0 ${W} ${H + 24}" role="img" aria-label="Bar chart of monthly spend rising from ${p.values[0]} to ${p.values[p.values.length - 1]} thousand dollars.">${p.values.map((v, i) => { const h = v / mx * (H - 20); return `<rect x="${i * bw + 10}" y="${H - h}" width="${bw - 20}" height="${h}" rx="5" fill="var(--c${i === p.values.length - 1 ? 3 : 1})"/><text x="${i * bw + bw / 2}" y="${H - h - 5}" text-anchor="middle" style="font-weight:700">${v}</text><text x="${i * bw + bw / 2}" y="${H + 16}" text-anchor="middle">${esc(p.labels[i])}</text>`; }).join('')}</svg><p class="note">${esc(p.note)}</p></div>`;
	}
	function renderScenarios() {
		const S = C.scenarios;
		$('#scenarios-body').innerHTML = `<h2 id="scenarios-h">${esc(S.headline)}</h2><p class="lead">${esc(S.intro)}</p><p class="note"><span class="ill">Illustrative</span> ${esc(S.disclaimer)}</p>
			${S.items.map(s => `<article class="scn reveal" data-id="${s.id}"><button type="button" class="head" aria-expanded="false" aria-controls="scn-${s.id}"><span class="badge">${s.id}</span><span><b>Scenario ${s.id}: ${esc(s.title)}</b><small>${esc(s.org)}</small></span></button><div class="body" id="scn-${s.id}"><dl><dt>Situation</dt><dd>${esc(s.story)}</dd><dt>Challenge</dt><dd>${esc(s.challenge)}</dd><dt>Your task</dt><dd>${esc(s.activity)}</dd></dl>${panelHtml(s.panel)}<div class="runner"></div></div></article>`).join('')}`;
		$$('.scn').forEach(el => {
			const sc = S.items.find(x => x.id === el.dataset.id), head = $('.head', el);
			head.addEventListener('click', () => { const o = el.classList.toggle('open'); head.setAttribute('aria-expanded', o); if (o && !el.dataset.ready) { el.dataset.ready = '1'; runScenario(sc, $('.runner', el)); } });
		});
	}
	function runScenario(sc, host) {
		let idx = 0;
		function step() {
			const s = sc.steps[idx], multi = s.type === 'multi', sel = new Set();
			let answered = false;
			host.innerHTML = `<p class="q-prompt" id="qp">${esc(s.prompt)}</p><div class="choices" role="group" aria-labelledby="qp">${s.options.map((o, i) => `<button type="button" class="choice ${multi ? '' : 'single'}" data-i="${i}" aria-pressed="false"><span class="mark" aria-hidden="true"></span><span>${esc(o.t)}<span class="why" hidden></span></span></button>`).join('')}</div>
				<div id="fb" aria-live="polite"></div><div class="stepnav"><span class="cnt">Question ${idx + 1} of ${sc.steps.length}</span>${multi ? '<button type="button" class="btn sm pri" id="chk">Check my answers</button>' : ''}<button type="button" class="btn sm" id="retry" hidden>Try again</button><button type="button" class="btn sm pri" id="nxt" hidden>${idx < sc.steps.length - 1 ? 'Next question →' : 'Finish scenario'}</button></div>`;
			const btns = $$('.choice', host), fb = $('#fb', host);
			function reveal(i, cls, show) { const b = btns[i]; b.classList.remove('good', 'bad', 'miss'); if (cls) b.classList.add(cls); const w = $('.why', b); w.textContent = s.options[i].why; w.hidden = !show; b.disabled = true; }
			function finish(ok, msg) { answered = true; fb.innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">${msg}</div>`; $('#retry', host).hidden = false; $('#nxt', host).hidden = false; if (multi) $('#chk', host).hidden = true; }
			btns.forEach((b, i) => b.addEventListener('click', () => {
				if (answered) return;
				if (multi) { sel.has(i) ? sel.delete(i) : sel.add(i); b.setAttribute('aria-pressed', sel.has(i)); return; }
				const ok = s.options[i].ok; btns.forEach((x, j) => reveal(j, j === i ? (ok ? 'good' : 'bad') : (s.options[j].ok && !ok ? 'miss' : ''), j === i || (s.options[j].ok && !ok)));
				finish(ok, ok ? 'Good choice. ' + s.options[i].why : 'Not quite. ' + s.options[i].why + ' A better choice is marked with a dashed outline.');
			}));
			if (multi) $('#chk', host).addEventListener('click', () => {
				if (!sel.size) { fb.innerHTML = '<div class="fb no">Select at least one answer first.</div>'; return; }
				let right = 0, wrong = 0, total = s.options.filter(o => o.ok).length;
				s.options.forEach((o, i) => { const picked = sel.has(i); if (picked && o.ok) { right++; reveal(i, 'good', true); } else if (picked) { wrong++; reveal(i, 'bad', true); } else reveal(i, o.ok ? 'miss' : '', o.ok); });
				finish(right === total && !wrong, `You found ${right} of ${total} that apply${wrong ? ` and picked ${wrong} that do not` : ''}. ${right === total && !wrong ? 'Well spotted.' : 'Dashed outlines show ones you missed.'}`);
			});
			$('#retry', host).addEventListener('click', step);
			$('#nxt', host).addEventListener('click', () => { if (idx < sc.steps.length - 1) { idx++; step(); } else done(); });
		}
		function done() { host.innerHTML = `<div class="fb ok">✓ Scenario ${sc.id} complete. You compared options, weighed the factors, and read the reasons.</div><div class="stepnav"><button type="button" class="btn sm" id="again">Replay this scenario</button></div>`; $('#again', host).addEventListener('click', () => { idx = 0; step(); }); }
		step();
	}

	/* ───────── outcomes ───────── */
	function renderOutcomes() {
		const O = C.outcomes;
		$('#outcomes-body').innerHTML = `<h2 id="outcomes-h">${esc(O.headline)}</h2><p class="lead">${esc(O.intro)}</p><div class="outs">${O.items.map(i => `<div class="out reveal"><h3>${esc(i.t)}</h3><p>${esc(i.d)}</p></div>`).join('')}</div><p class="note">${esc(O.note)}</p>`;
	}

	/* ───────── knowledge check ───────── */
	let quizScore = null;
	function renderQuiz() {
		const K = C.knowledgeCheck, host = $('#check-body');
		host.innerHTML = `<h2 id="check-h">${esc(K.headline)}</h2><p class="lead">${esc(K.intro)}</p><div class="quiz" id="quiz"></div>`;
		const quiz = $('#quiz');
		let i = 0, answers = [];
		function ask() {
			const q = K.questions[i]; let locked = false;
			quiz.innerHTML = `<div class="qprog" role="progressbar" aria-valuemin="0" aria-valuemax="${K.questions.length}" aria-valuenow="${i}"><i style="width:${i / K.questions.length * 100}%"></i></div>
				<div class="qtopic">Question ${i + 1} of ${K.questions.length} · ${esc(q.topic)}</div><p class="q-prompt" id="quiz-q">${esc(q.q)}</p>
				<div class="choices" role="group" aria-labelledby="quiz-q">${q.options.map((o, k) => `<button type="button" class="choice single" data-k="${k}"><span class="mark" aria-hidden="true"></span><span>${esc(o.t)}</span></button>`).join('')}</div>
				<div id="qfb" aria-live="polite"></div><div class="stepnav"><button type="button" class="btn sm pri" id="qn" hidden>${i < K.questions.length - 1 ? 'Next question →' : 'See my results'}</button></div>`;
			requestAnimationFrame(() => { const f = $('.qprog i', quiz); if (f) f.style.width = (i + 0.0) / K.questions.length * 100 + '%'; });
			$$('.choice', quiz).forEach((b, k) => b.addEventListener('click', () => {
				if (locked) return; locked = true;
				const ok = q.options[k].ok; answers[i] = ok;
				$$('.choice', quiz).forEach((x, j) => { x.disabled = true; if (j === k) x.classList.add(ok ? 'good' : 'bad'); else if (q.options[j].ok && !ok) x.classList.add('miss'); });
				$('#qfb', quiz).innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">${ok ? 'Correct. ' : 'Not quite. '}${esc(q.why)}</div>`;
				$('#qn', quiz).hidden = false; $('#qn', quiz).focus();
			}));
			$('#qn', quiz).addEventListener('click', () => { if (i < K.questions.length - 1) { i++; ask(); } else results(); });
		}
		function results() {
			const score = answers.filter(Boolean).length, r = K.results.find(x => score >= x.min); quizScore = score;
			quiz.innerHTML = `<div class="score"><div class="qprog"><i style="width:100%"></i></div><div class="big">${score} / ${K.questions.length}</div><h3>${esc(r.title)}</h3><p>${esc(r.text)}</p></div>
				<ul class="review">${K.questions.map((q, k) => `<li><b style="color:var(${answers[k] ? '--good' : '--bad'})">${answers[k] ? '✓' : '✕'}</b><span>${esc(q.topic)}</span></li>`).join('')}</ul>
				<div class="btns" style="margin-top:.5rem"><button type="button" class="btn pri" id="retry-q">Try again</button><a class="btn" href="#concepts">Review key concepts</a><a class="btn" href="#done">Finish</a></div>`;
			$('#retry-q', quiz).addEventListener('click', restart);
			const s = $('#done-status'); if (s) s.textContent = completionStatus();
		}
		function restart() { i = 0; answers = []; quizScore = null; ask(); const s = $('#done-status'); if (s) s.textContent = completionStatus(); }
		window.AIE_restartQuiz = () => { restart(); scrollToEl($('#check')); };
		ask();
	}

	/* ───────── completion ───────── */
	function completionStatus() {
		const total = C.learningStages.length;
		return `Stages explored: ${explored.size} of ${total}.` + (quizScore === null ? ' Knowledge check: not taken yet.' : ` Knowledge check: ${quizScore} of ${C.knowledgeCheck.questions.length}.`);
	}
	function renderDone() {
		const D = C.completion;
		$('#done-body').innerHTML = `<h2 id="done-h">${esc(D.headline)}</h2><p class="lead" style="margin-inline:auto">${esc(D.body)}</p><p class="lead" style="margin-inline:auto">${esc(D.body2)}</p>
			<div class="msg">${esc(D.message)}</div><p class="note" id="done-status" aria-live="polite">${completionStatus()}</p>
			<div class="btns">${D.actions.map((a, k) => `<button type="button" class="btn ${k === 2 ? 'pri' : ''}" data-act="${a.id}">${esc(a.id === 'quiz' && quizScore === null ? 'Take the Knowledge Check' : a.label)}</button>`).join('')}</div>`;
		$$('[data-act]').forEach(b => b.addEventListener('click', () => {
			const a = b.dataset.act;
			if (a === 'concepts') scrollToEl($('#concepts'));
			else if (a === 'stages') { scrollToEl($('#journey')); }
			else window.AIE_restartQuiz();
		}));
	}

	/* ───────── page chrome: nav highlight, reveal, theme ───────── */
	function observe() {
		const secs = $$('main section[id]'), links = $$('#nav a');
		if ('IntersectionObserver' in window) {
			const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
			secs.forEach(s => io.observe(s));
			const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
			$$('.reveal').forEach(el => rv.observe(el));
		} else $$('.reveal').forEach(el => el.classList.add('in'));
	}

	renderHero(); renderWhy(); renderJourney(); renderConcepts(); renderScenarios(); renderOutcomes(); renderQuiz(); renderDone();
	updateProgress(); observe();
}());
