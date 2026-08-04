/* ──────────────────────────────────────────────────────────────────────────
   aw-captions.js — Closed captions for Azure Animations narrated explainers.

   Loads the page's narration Markdown (the same script used to synthesize the
   audio), splits each step into caption segments (one spoken line per segment,
   split on the [NNNms] pause markers), and reveals them in sync with the step's
   audio clip — proportional to the clip's play time.

   Per-page wiring (self-contained pages):
     AWCaptions.configure({
       page:     'StorageNetworkSecurity',          // narration file stem
       base:     '../../narration/v2/Storage/',      // dir holding <page>.md (+ <lang>/)
       lang:     () => currentLang,                  // current UI language
       fallback: (i) => t(STEPS[i].descKey)          // on-screen text if .md 404s
     });
     playStepAudio(): AWCaptions.bind(audioEl, stepIndex);   // when a clip starts
     stopAudio():     AWCaptions.clear();                    // when audio stops
     CC toggle:       AWCaptions.setEnabled(bool);           // show/hide the bar

   The caption bar is #aw-caption; visibility is driven by body.cc-on.
   ────────────────────────────────────────────────────────────────────────── */
(function () {
	'use strict';

	let cfg = null;
	let box = null;
	let enabled = false;

	const cache = {};              // lang -> steps: Array<Array<string>>
	let boundAudio = null;
	let segs = [];                 // segments for the current step
	let bounds = [];               // per-segment start fraction (0..1)
	let curSeg = -1;
	let onTime = null;

	const PAUSE_RE = /^\[\s*\d+(?:\.\d+)?\s*(?:ms|s)\s*\]$/i;   // a lone [600ms] / [1.2s] pause line
	const PAUSE_VAL = /\[\s*(\d+(?:\.\d+)?)\s*(ms|s)\s*\]/i;    // capture a pause's value + unit
	const CUE_RE = /\[[a-zA-Z][^\]]*\]/g;                       // inline [style] delivery cues
	// Split a spoken line into sentences so each caption tracks the voice more closely.
	// Non-Latin scripts (no . ! ?) fall back to the whole line as one segment.
	const SENT_RE = /[^.!?]+[.!?]+(?=\s|$)|[^.!?]+$/g;

	function configure(c) {
		cfg = c;
		box = document.getElementById('aw-caption');
		window.addEventListener('resize', reserveSpace);
	}

	function narrationUrl() {
		const l = cfg.lang && cfg.lang();
		return cfg.base + (l && l !== 'en' ? l + '/' : '') + cfg.page + '.md';
	}

	function pauseMs(line) {
		const m = line.match(PAUSE_VAL);
		if (!m) return 0;
		const v = parseFloat(m[1]);
		return m[2].toLowerCase() === 's' ? v * 1000 : v;
	}

	function splitSentences(text) {
		const parts = text.match(SENT_RE);
		return parts ? parts.map(function (s) { return s.trim(); }).filter(Boolean) : [text];
	}

	// Parse the narration .md into an array (by on-screen step order) of segment arrays.
	// Each segment is { t: spokenText, pause: msOfSilenceAfterIt }.
	function parse(md) {
		const lines = md.split(/\r?\n/);
		const steps = [];
		let cur = null;
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();
			if (/^##\s+step\b/i.test(line)) { cur = []; steps.push(cur); continue; }
			if (cur === null) continue;
			if (!line) continue;
			if (line[0] === '#' || line[0] === '-' || line.slice(0, 2) === '**') continue;
			if (PAUSE_RE.test(line)) { if (cur.length) cur[cur.length - 1].pause += pauseMs(line); continue; }
			const text = line.replace(CUE_RE, '').replace(/\s+/g, ' ').trim();
			if (text) splitSentences(text).forEach(function (s) { cur.push({ t: s, pause: 0 }); });
		}
		return steps;
	}

	function loadSteps() {
		const l = (cfg.lang && cfg.lang()) || 'en';
		if (cache[l]) return Promise.resolve(cache[l]);
		return fetch(narrationUrl())
			.then(function (r) { if (!r.ok) throw new Error('404'); return r.text(); })
			.then(function (txt) { cache[l] = parse(txt); return cache[l]; })
			.catch(function () { cache[l] = null; return null; });
	}

	// Write caption text into a dedicated span so sibling controls (e.g. the drag/resize
	// reset pin appended by the page) survive text updates instead of being wiped.
	function textSpan() {
		if (!box) return null;
		let s = box.querySelector('.aw-cc-text');
		if (!s) { s = document.createElement('span'); s.className = 'aw-cc-text'; box.insertBefore(s, box.firstChild); }
		return s;
	}

	function show(i) {
		if (!box) return;
		curSeg = i;
		const txt = segs[i] || '';
		const s = textSpan();
		if (s) s.textContent = txt;
		box.classList.toggle('has-text', !!txt);
	}

	function detach() {
		if (boundAudio && onTime) boundAudio.removeEventListener('timeupdate', onTime);
		onTime = null;
		boundAudio = null;
	}

	function clear() {
		detach();
		segs = []; bounds = []; curSeg = -1;
		if (box) { const s = box.querySelector('.aw-cc-text'); if (s) s.textContent = ''; box.classList.remove('has-text'); }
	}

	function bind(audio, stepIdx) {
		detach();
		if (!enabled || !box || !audio) return;
		boundAudio = audio;
		loadSteps().then(function (steps) {
			if (boundAudio !== audio) return;   // step already changed
			const fromMd = steps && steps[stepIdx];
			const list = (fromMd && fromMd.length)
				? fromMd.slice()
				: (cfg.fallback ? [{ t: cfg.fallback(stepIdx), pause: 0 }].filter(function (o) { return o.t; }) : []);
			segs = list.map(function (o) { return o.t; });
			const pausesSec = list.map(function (o) { return (o.pause || 0) / 1000; });
			const lens = segs.map(function (s) { return s.length; });
			const totalLen = lens.reduce(function (a, b) { return a + b; }, 0) || 1;
			curSeg = -1;
			show(0);
			onTime = function () {
				if (boundAudio !== audio) return;
				const d = audio.duration;
				if (!isFinite(d) || d <= 0) return;
				// Speaking time = clip length minus the scripted pauses; give each segment
				// speech time by its length, then hold it through its trailing pause.
				const totalPause = pausesSec.reduce(function (a, b) { return a + b; }, 0);
				const speechDur = Math.max(d - totalPause, d * 0.4);
				const cur = audio.currentTime;
				let idx = 0, tAcc = 0;
				for (let k = 0; k < segs.length; k++) {
					if (cur >= tAcc) idx = k;
					tAcc += speechDur * (lens[k] / totalLen) + pausesSec[k];
				}
				if (idx !== curSeg) show(idx);
			};
			audio.addEventListener('timeupdate', onTime);
		});
	}

	// Reserve horizontal room on the right so the bar never sits under the pinned dock.
	// Pages that overlay the caption INSIDE the stage frame pass reserve:false to opt out.
	function reserveSpace() {
		if (!box) return;
		if (cfg && cfg.reserve === false) { box.style.right = ''; return; }
		if (!enabled) { box.style.right = ''; return; }
		const dock = document.getElementById('controls');
		if (dock) box.style.right = (dock.offsetWidth + 28) + 'px';
	}

	function setEnabled(on) {
		enabled = !!on;
		document.body.classList.toggle('cc-on', enabled);
		if (!enabled) clear();
		reserveSpace();
	}

	function isEnabled() { return enabled; }

	window.AWCaptions = {
		configure: configure,
		bind: bind,
		clear: clear,
		setEnabled: setEnabled,
		isEnabled: isEnabled,
		reserveSpace: reserveSpace
	};
})();
