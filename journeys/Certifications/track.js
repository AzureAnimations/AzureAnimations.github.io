/* Renders a per-vertical certification page from the page's own window.TRACK object.
   Every page shares this file, so the six verticals can never drift apart visually. */
(function () {
	var T = window.TRACK;
	if (!T) return;

	function esc(s) { return String(s == null ? '' : s); }
	function ext(href, label) {
		return '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + label + '</a>';
	}

	var h = '';

	/* ── hero band ── */
	h += '<div class="band"><div class="wrap"><div>';
	h += '<a class="band-back" href="index.html">&larr;&nbsp; All certification paths</a>';
	h += '<div class="band-kick">' + esc(T.kicker) + '</div>';
	h += '<h1>' + esc(T.headline) + '</h1>';
	h += '<p class="tag">' + esc(T.tagline) + '</p>';
	h += '<div class="who">' + T.who.map(function (w) { return '<span>' + esc(w) + '</span>'; }).join('') + '</div>';
	h += '</div><div class="stats">';
	h += T.stats.map(function (s) { return '<div class="stat"><b>' + esc(s.n) + '</b><span>' + esc(s.l) + '</span></div>'; }).join('');
	h += '</div></div></div>';

	/* ── what you will be able to do ── */
	h += '<section class="wrap sec"><div class="sec-head"><span class="rail">Why this path</span>';
	h += '<h2>' + esc(T.outcomeTitle) + '</h2><p>' + esc(T.outcomeLead) + '</p></div>';
	h += '<div class="outcomes">';
	h += T.outcomes.map(function (o, i) {
		return '<div class="oc"><span class="oc-no">' + (i + 1) + '</span><h3>' + esc(o.t) + '</h3><p>' + esc(o.d) + '</p></div>';
	}).join('');
	h += '</div></section>';

	/* ── the single first move ── */
	h += '<section class="wrap sec"><div class="sec-head"><span class="rail">Start here</span>';
	h += '<h2>' + esc(T.start.title) + '</h2><p>' + esc(T.start.lead) + '</p></div>';
	h += '<div class="start"><div class="start-badge"><b>1</b><span>' + esc(T.start.badge) + '</span></div><div class="start-body">';
	h += '<span class="code">' + esc(T.start.code) + '</span>';
	h += '<h3>' + esc(T.start.name) + '</h3><p>' + esc(T.start.why) + '</p></div>';
	h += '<a class="start-go" href="' + esc(T.start.href) + '" target="_blank" rel="noopener">' + esc(T.start.cta) + ' &#8599;</a>';
	h += '</div></section>';

	/* ── the ordered path ── */
	h += '<section class="wrap sec"><div class="sec-head"><span class="rail">The path</span>';
	h += '<h2>' + esc(T.pathTitle) + '</h2><p>' + esc(T.pathLead) + '</p></div><div class="path">';
	var n = 0;
	T.steps.forEach(function (s) {
		if (s.cred) {
			h += '<div class="node is-cred"><span class="node-dot" aria-hidden="true">&#9733;</span><div class="cred">';
			h += '<div class="ctop"><span class="pill">Certification</span>';
			if (s.level) h += '<span class="pill">' + esc(s.level) + '</span>';
			h += '</div>';
			h += '<span class="code">' + esc(s.code) + '</span><h3>' + esc(s.name) + '</h3>';
			h += '<p>' + esc(s.proves) + '</p>';
			if (s.facts && s.facts.length) {
				h += '<div class="facts">' + s.facts.map(function (f) { return '<span>' + esc(f) + '</span>'; }).join('') + '</div>';
			}
			h += '<a class="cred-go" href="' + esc(s.href) + '" target="_blank" rel="noopener">See the credential &#8599;</a>';
			h += '</div></div>';
			return;
		}
		n++;
		h += '<div class="node"><span class="node-dot">' + n + '</span><div class="step">';
		h += '<div class="step-top"><span class="pill k-course">Course</span>';
		if (s.level) h += '<span class="pill lv-' + esc(s.level).toLowerCase() + '">' + esc(s.level) + '</span>';
		if (s.days) h += '<span class="pill k-days">' + esc(s.days) + '</span>';
		h += '</div>';
		h += '<span class="code">' + esc(s.code) + '</span><h3>' + esc(s.name) + '</h3>';
		h += '<p class="blurb">' + esc(s.blurb) + '</p>';
		h += '<ul class="learn">' + s.learn.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul>';
		h += '<div class="after"><b>After it you can</b> &mdash; ' + esc(s.after) + '</div>';
		h += '<a class="step-go" href="' + esc(s.href) + '" target="_blank" rel="noopener">Course outline on Microsoft Learn &#8599;</a>';
		h += '</div></div>';
	});
	h += '</div></section>';

	/* ── where this leads ── */
	h += '<section class="wrap sec"><div class="sec-head"><span class="rail">What&rsquo;s next</span>';
	h += '<h2>' + esc(T.nextTitle) + '</h2><p>' + esc(T.nextLead) + '</p></div><div class="nexts">';
	h += T.next.map(function (x) {
		return '<a class="nx" href="' + esc(x.href) + '"' + (x.external ? ' target="_blank" rel="noopener"' : '') +
			' style="--nc:' + esc(x.colour) + '"><span class="nx-k">' + esc(x.kicker) + '</span>' +
			'<h3>' + esc(x.name) + '</h3><p>' + esc(x.why) + '</p></a>';
	}).join('');
	h += '</div></section>';

	/* ── questions people actually ask ── */
	h += '<section class="wrap sec"><div class="sec-head"><span class="rail">Before you start</span>';
	h += '<h2>The questions everyone asks</h2></div><div class="faq">';
	h += T.faq.map(function (f) { return '<div class="qa"><h3>' + esc(f.q) + '</h3><p>' + f.a + '</p></div>'; }).join('');
	h += '</div></section>';

	document.getElementById('app').innerHTML = h;
	document.title = T.name + ' certifications \u2014 where to start';

	var ht = document.getElementById('head-title');
	if (ht) ht.textContent = T.name;

	/* reveal each section as it scrolls in — skipped entirely under reduced motion */
	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (!reduce && window.gsap) {
		var blocks = [].slice.call(document.querySelectorAll('#app .oc, #app .start, #app .node, #app .nx, #app .qa'));
		gsap.set(blocks, { opacity: 0, y: 14 });
		if (window.IntersectionObserver) {
			var io = new IntersectionObserver(function (es) {
				es.forEach(function (e) {
					if (!e.isIntersecting) return;
					gsap.to(e.target, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
					io.unobserve(e.target);
				});
			}, { threshold: 0.12 });
			blocks.forEach(function (b) { io.observe(b); });
		} else {
			gsap.set(blocks, { opacity: 1, y: 0 });
		}
	}

	var btn = document.getElementById('theme-toggle');
	if (btn) {
		var sync = function () {
			var dark = document.body.classList.contains('theme-dark');
			btn.dataset.theme = dark ? 'dark' : 'light';
			var l = dark ? 'Switch to light theme' : 'Switch to dark theme';
			btn.setAttribute('aria-label', l); btn.setAttribute('title', l);
		};
		if (window.AW && AW.theme) { AW.theme.onChange(sync); sync(); }
		else {
			sync();
			btn.addEventListener('click', function () {
				document.body.classList.toggle('theme-dark');
				document.body.classList.toggle('theme-light');
				sync();
			});
		}
	}
})();
