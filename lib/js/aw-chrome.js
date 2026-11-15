/* aw-chrome.js — builds a browser window frame, and a GitHub repository frame, for
   animation scenes. Pairs with lib/css/aw-chrome.css.

   The mark is GitHub's Invertocat, used unmodified and in a single flat colour
   (black on light, white on dark) per https://brand.github.com/foundations/logo.

   AW.browser({ url, body, cls })            -> browser window
   AW.github({ tab, body, counts, cls, ... }) -> browser window + repo header + tab bar */
(function () {
	if (window.AW && window.AW.github) return;
	var AW = (window.AW = window.AW || {});

	// Fictional org/repo — deliberately not a real training repository. Used until the learner
	// tells us their own on the hub, after which every mock on every page shows theirs instead.
	var DEF_ORG = 'contoso-retail', DEF_REPO = 'weather-map-app';
	AW.GH_ORG = DEF_ORG;
	AW.GH_REPO = DEF_REPO;

	// owner/name only. This value is rendered straight into markup, so anything that is not
	// plainly a GitHub owner/repo pair is REJECTED rather than escaped — no angle brackets,
	// quotes, spaces or slashes can survive this.
	var REPO_RE = /^[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*$/;
	var REPO_KEY = 'aw-gh-repo';

	// Accepts what people actually paste: an HTTPS clone URL, an SSH remote, the address bar
	// of any page inside the repo, or just owner/name.
	AW.parseRepo = function (raw) {
		if (!raw) return null;
		var s = String(raw).trim()
			.replace(/^https?:\/\/(www\.)?github\.com\//i, '')
			.replace(/^git@github\.com:/i, '')
			.replace(/[?#].*$/, '')
			.replace(/\/+$/, '');
		var parts = s.split('/');
		if (parts.length > 2) s = parts[0] + '/' + parts[1];
		s = s.replace(/\.git$/i, '');
		return REPO_RE.test(s) ? s : null;
	};

	AW.getRepo = function () {
		var q = null;
		try { q = AW.parseRepo(new URL(location.href).searchParams.get('repo')); } catch (e) {}
		if (q) { try { localStorage.setItem(REPO_KEY, q); } catch (e) {} return q; }
		try { return AW.parseRepo(localStorage.getItem(REPO_KEY)); } catch (e) { return null; }
	};

	// Empty clears back to the worked example; invalid input is refused WITHOUT discarding
	// whatever the learner had already saved.
	AW.setRepo = function (raw) {
		if (raw == null || String(raw).trim() === '') {
			try { localStorage.removeItem(REPO_KEY); } catch (e) {}
			AW.GH_ORG = DEF_ORG; AW.GH_REPO = DEF_REPO; AW.isOwnRepo = false;
			return null;
		}
		var s = AW.parseRepo(raw);
		if (!s) return null;
		try { localStorage.setItem(REPO_KEY, s); } catch (e) {}
		AW.GH_ORG = s.split('/')[0]; AW.GH_REPO = s.split('/')[1]; AW.isOwnRepo = true;
		return s;
	};

	AW.cloneUrl = function () { return 'https://github.com/' + AW.GH_ORG + '/' + AW.GH_REPO + '.git'; };

	var own = AW.getRepo();
	AW.isOwnRepo = !!own;
	if (own) { AW.GH_ORG = own.split('/')[0]; AW.GH_REPO = own.split('/')[1]; }

	var ICONS = {
		mark: 'M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z',
		lock: 'M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z',
		code: 'M4.72 3.22a.75.75 0 0 1 1.06 1.06L2.06 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L.47 8.53a.75.75 0 0 1 0-1.06Zm6.56 0a.75.75 0 1 0-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06Z',
		issue: 'M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z',
		pull: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z',
		actions: 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z',
		projects: 'M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z',
		security: 'M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 0 0-.174-.237Z',
		settings: 'M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.039.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C5.91.645 6.457.095 7.2.031 7.433.01 7.665 0 7.898 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.08.08-.073.159-.059.19.161.346.353.678.573.99.02.029.086.075.195.045l1.103-.303c.559-.153 1.112-.008 1.529.27.16.107.327.204.5.29.449.222.851.628.998 1.189l.289 1.105c.029.11.101.143.137.146a6.6 6.6 0 0 0 1.146 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.03.175-.016.195-.045.22-.313.412-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.08-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.99c-.02-.029-.086-.075-.195-.045l-1.103.303c-.559.153-1.112.008-1.529-.27a4.44 4.44 0 0 0-.5-.29c-.449-.222-.851-.628-.998-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.146 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z',
		branch: 'M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z',
		merged: 'M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z'
	};

	function svg(path, cls) {
		return '<svg viewBox="0 0 16 16" aria-hidden="true"' + (cls ? ' class="' + cls + '"' : '') +
			'><path fill="currentColor" d="' + path + '"/></svg>';
	}
	AW.icon = function (name, cls) { return ICONS[name] ? svg(ICONS[name], cls) : ''; };

	function fill(node, body) {
		if (body == null) return;
		if (typeof body === 'string') node.innerHTML = body;
		else if (body.nodeType) node.appendChild(body);
		else if (body.length) [].forEach.call(body, function (b) { node.appendChild(b); });
	}

	/* ── LINKS ──────────────────────────────────────────────────────────────────
	   Only these hosts are real and resolvable. Everything else the scenes show
	   (contoso-retail/…, *.azurewebsites.net, ghcr.io/contoso/…) is fictional, so it
	   must stay plain text — a link that 404s is worse than no link. Longest host
	   first, so docs.github.com is not matched as github.com. */
	var URL_RE = /\b((?:https?:\/\/)?(?:docs\.github\.com|cli\.github\.com|learn\.microsoft\.com|aka\.ms|github\.com)(?:\/[A-Za-z0-9._~:\/?#@!$&'()*+,;=%-]*)?)/g;
	var FICTIONAL = /(contoso|weather-map-app|azurewebsites\.net|ghcr\.io|your-account|your-repo)/i;

	function href(clean) { return /^https?:\/\//.test(clean) ? clean : 'https://' + clean; }

	/* A resolvable href for a whole string, or null when it is fictional / not a URL. */
	AW.urlHref = function (text) {
		var s = String(text == null ? '' : text).trim();
		if (!s || FICTIONAL.test(s)) return null;
		var m = s.match(URL_RE);
		return m && m.length === 1 && m[0] === s ? href(s) : null;
	};

	/* Wrap real URLs found in copy, leaving anything already inside an <a> alone. */
	AW.linkify = function (html) {
		var s = String(html == null ? '' : html);
		if (s.indexOf('github.com') < 0 && s.indexOf('learn.microsoft.com') < 0 && s.indexOf('aka.ms') < 0) return s;
		var depth = 0;
		return s.split(/(<[^>]+>)/).map(function (part) {
			if (part.charAt(0) === '<') {
				if (/^<a\b/i.test(part)) depth++;
				else if (/^<\/a>/i.test(part)) depth--;
				return part;
			}
			if (depth > 0) return part;
			return part.replace(URL_RE, function (m) {
				if (FICTIONAL.test(m)) return m;
				var clean = m.replace(/[.,;:]+$/, ''), tail = m.slice(clean.length);
				return '<a class="aw-xlink" href="' + href(clean) + '" target="_blank" rel="noopener">' + clean + '</a>' + tail;
			});
		}).join('');
	};

	/* A browser window. `url` is displayed as-is; the part before the first "/" is bolded
	   so the domain reads as the domain. */
	AW.browser = function (opts) {
		opts = opts || {};
		var root = document.createElement('div');
		root.className = 'aw-br' + (opts.cls ? ' ' + opts.cls : '');
		var url = String(opts.url || 'example.com');
		var cut = url.indexOf('/');
		var host = cut === -1 ? url : url.slice(0, cut);
		var rest = cut === -1 ? '' : url.slice(cut);
		// real addresses are clickable; the fictional Contoso ones stay inert text
		var live = AW.urlHref(url);
		var addr = '<b>' + host + '</b>' + rest;
		addr = live
			? '<a class="aw-br-link" href="' + live + '" target="_blank" rel="noopener">' + addr + '</a>'
			: '<span>' + addr + '</span>';
		root.innerHTML =
			'<div class="aw-br-bar">' +
				'<span class="aw-br-dots"><span class="aw-br-dot"></span><span class="aw-br-dot"></span><span class="aw-br-dot"></span></span>' +
				'<span class="aw-br-url">' + svg(ICONS.lock, 'aw-br-lock') + addr + '</span>' +
			'</div>';
		var body = document.createElement('div');
		body.className = 'aw-br-body';
		fill(body, opts.body);
		root.appendChild(body);
		root.bodyEl = body;
		return root;
	};

	var TABS = [
		{ id: 'code', icon: 'code', label: 'Code' },
		{ id: 'issues', icon: 'issue', label: 'Issues', count: 'issues' },
		{ id: 'pulls', icon: 'pull', label: 'Pull requests', count: 'pulls' },
		{ id: 'actions', icon: 'actions', label: 'Actions' },
		{ id: 'projects', icon: 'projects', label: 'Projects' },
		{ id: 'security', icon: 'security', label: 'Security', count: 'security' },
		{ id: 'settings', icon: 'settings', label: 'Settings' }
	];

	/* A repository page. `tab` underlines the tab the step is about; `path` is appended
	   to the URL so the address bar agrees with the tab. */
	AW.github = function (opts) {
		opts = opts || {};
		var org = opts.org || AW.GH_ORG, repo = opts.repo || AW.GH_REPO;
		var counts = opts.counts || {};
		var tab = opts.tab || 'code';
		var path = opts.path != null ? opts.path : (tab === 'code' ? '' : '/' + tab);
		var frame = AW.browser({ url: 'github.com/' + org + '/' + repo + path, cls: opts.cls });

		var head = document.createElement('div');
		head.className = 'aw-gh-head';
		head.innerHTML = svg(ICONS.mark, 'aw-gh-mark') +
			'<span class="aw-gh-nwo">' + org + ' <span class="aw-gh-sep">/</span> <b>' + repo + '</b></span>' +
			'<span class="aw-gh-vis">' + (opts.visibility || 'Public') + '</span>';

		var tabs = document.createElement('div');
		tabs.className = 'aw-gh-tabs';
		tabs.innerHTML = TABS.map(function (d) {
			var n = d.count ? counts[d.count] : null;
			return '<span class="aw-gh-tab' + (d.id === tab ? ' is-active' : '') + '" data-tab="' + d.id + '">' +
				svg(ICONS[d.icon]) + '<span>' + d.label + '</span>' +
				(n ? '<span class="aw-gh-count">' + n + '</span>' : '') + '</span>';
		}).join('');

		frame.insertBefore(tabs, frame.bodyEl);
		frame.insertBefore(head, tabs);
		fill(frame.bodyEl, opts.body);
		frame.tabEl = tabs.querySelector('.is-active');
		return frame;
	};
	/* A terminal window. `lines` are [text, modifier] — the modifier picks the prompt/colour. */
	AW.terminal = function (opts) {
		opts = opts || {};
		var root = document.createElement('div');
		root.className = 'aw-term' + (opts.cls ? ' ' + opts.cls : '');
		root.innerHTML =
			'<span class="aw-term-bar"><span class="aw-term-dots"><span class="aw-term-dot"></span>' +
				'<span class="aw-term-dot"></span><span class="aw-term-dot"></span></span>' +
				'<span class="aw-term-title">' + (opts.title || '') + '</span></span>' +
			'<span class="aw-term-body">' + (opts.lines || []).map(function (l) {
				return '<span class="aw-term-line ' + (l[1] || '') + '">' + l[0] + '</span>';
			}).join('') + '</span>';
		root.lineEls = [].slice.call(root.querySelectorAll('.aw-term-line'));
		return root;
	};

	/* A "your turn" panel: what to go and do, then the question to answer before moving on. */
	AW.turn = function (opts) {
		opts = opts || {};
		var root = document.createElement('div');
		root.className = 'aw-turn' + (opts.cls ? ' ' + opts.cls : '');
		if (opts.colour) root.style.setProperty('--aw-turn-c', opts.colour);
		root.innerHTML =
			'<span class="aw-turn-h">\uD83D\uDC49 ' + (opts.title || 'Your turn') + '</span>' +
			(opts.steps || []).map(function (s) { return '<span class="aw-turn-step">' + s + '</span>'; }).join('') +
			(opts.ask ? '<span class="aw-turn-ask">' + opts.ask + '</span>' : '');
		root.stepEls = [].slice.call(root.querySelectorAll('.aw-turn-step'));
		return root;
	};

	/* A pointer to the finished worked example, for a learner who has not set up their own repo yet.
	   Returns null once they have one — at that point their own repo is the thing to look at. */
	AW.egNote = function (opts) {
		opts = opts || {};
		if (AW.isOwnRepo) return null;
		var href = opts.kind === 'board'
			? 'https://github.com/orgs/' + DEF_ORG + '/projects/1'
			: 'https://github.com/' + DEF_ORG + '/' + DEF_REPO + '/issues';
		var root = document.createElement('div');
		root.className = 'aw-eg';
		root.innerHTML =
			'<span class="aw-eg-t">' + (opts.text || 'No repository of your own yet?') + '</span>' +
			'<a class="aw-eg-link" href="' + href + '" target="_blank" rel="noopener">' +
			(opts.cta || 'See the finished example') + ' \u2197</a>';
		return root;
	};
})();
