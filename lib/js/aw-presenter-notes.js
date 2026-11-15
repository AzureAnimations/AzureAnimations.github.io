/* Shared speaker notes. The seven legacy presenter views retain their own notes and controls. */
(function () {
	'use strict';
	if (window.__awSpeakerNotesLoaded || document.getElementById('presenter-toggle') ||
		new URLSearchParams(location.search).has('present')) return;
	window.__awSpeakerNotesLoaded = true;
	var scriptUrl = document.currentScript.src;
	var pagePath = decodeURIComponent(location.pathname).replace(/^.*?\/journeys\//, '').replace(/\.html$/, '.json');
	var notesUrl = new URL('../presenter-notes/' + pagePath, scriptUrl).href;
	var data = null;
	var stylesheet = null;
	var pending = null;
	var loadError = null;
	var popup = null;
	var drawer = null;
	var view = null;
	var previousStep = -1;
	var button = document.createElement('button');
	button.id = 'presenter-toggle';
	button.type = 'button';
	button.className = 'ovl-btn';
	button.setAttribute('aria-label', 'Presenter notes (N)');
	button.setAttribute('aria-expanded', 'false');
	button.dataset.tip = 'Presenter notes (N)';
	button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" d="M3 4h18v12H3zM12 16v3.5M8 20h8M8.6 13.2a3.4 3.4 0 0 1 6.8 0"/><circle cx="12" cy="8.4" r="1.7" fill="currentColor"/></svg>';
	var dock = document.getElementById('controls');
	if (!dock || typeof STEPS === 'undefined' || !STEPS.length) return;
	var insertionPoint = document.getElementById('help-toggle') || document.getElementById('prev-btn');
	if (insertionPoint && dock.contains(insertionPoint)) insertionPoint.parentNode.insertBefore(button, insertionPoint);
	else dock.appendChild(button);
	var css = new URL('../css/aw-presenter-notes.css', scriptUrl).href;

	function index() {
		return typeof current === 'number' ? current : 0;
	}
	function language() {
		return document.documentElement.lang || 'en';
	}
	function locale() {
		// Custom workshops are English-only, like their learner pages.
		return data && (data.locales[language()] || data.locales.en);
	}
	function noteAt(i) {
		var local = locale();
		return local && (local.notes ? local.notes[STEPS[i].id] : local.steps[i]);
	}
	function titleAt(i) {
		var step = STEPS[i];
		if (step.titleKey && typeof t === 'function') return t(step.titleKey);
		return step.title || (noteAt(i) && noteAt(i).title) || step.id;
	}
	function announce(message) {
		var live = document.getElementById('announcer');
		if (live) live.textContent = message;
	}
	function load() {
		if (data) return Promise.resolve(data);
		if (pending) return pending;
		loadError = null;
		pending = Promise.all([
			fetch(notesUrl).then(function (response) {
				if (!response.ok) throw new Error('HTTP ' + response.status + ' loading presenter notes');
				return response.json();
			}),
			fetch(css).then(function (response) {
				if (!response.ok) throw new Error('HTTP ' + response.status + ' loading presenter styles');
				return response.text();
			})
		]).then(function (assets) {
			var value = assets[0];
			if (!value.locales || !value.locales.en) throw new Error('Presenter notes have no English scripts');
			data = value;
			stylesheet = assets[1];
			for (var i = 0; i < STEPS.length; i++) {
				var n = noteAt(i);
				if (!n || !Array.isArray(n.say) || !n.say.length) throw new Error('Missing presenter script for step ' + STEPS[i].id);
			}
			return data;
		}).catch(function (error) {
			data = null;
			loadError = error;
			console.error('Presenter notes:', error);
			announce('Presenter notes could not be loaded. Please retry.');
			return null;
		}).finally(function () { pending = null; });
		return pending;
	}
	function syncButton() {
		var open = !!view;
		button.setAttribute('aria-expanded', String(open));
		button.classList.toggle('toggle-active', open);
	}
	function close(refocus) {
		var oldPopup = popup;
		popup = null;
		view = null;
		previousStep = -1;
		if (oldPopup && !oldPopup.closed) oldPopup.close();
		if (drawer) { drawer.remove(); drawer = null; }
		syncButton();
		if (refocus) button.focus({ preventScroll: true });
	}
	function move(direction) {
		var control = document.getElementById(direction === 'next' ? 'next-btn' : 'prev-btn');
		if (control) control.click();
		refresh();
	}
	function section(doc, heading, paragraphs, className) {
		var result = doc.createElement('section');
		result.className = className || '';
		var h = doc.createElement('h3');
		h.textContent = heading;
		result.appendChild(h);
		paragraphs.forEach(function (text) {
			var p = doc.createElement('p');
			p.textContent = text;
			result.appendChild(p);
		});
		return result;
	}
	function notesText() {
		var lines = [document.title + ' - Presenter notes', 'Script language: ' + (data.locales[language()] ? language() : 'en'), ''];
		STEPS.forEach(function (step, i) {
			var n = noteAt(i);
			lines.push('STEP ' + (i + 1) + ' / ' + STEPS.length + ': ' + titleAt(i), '', 'SAY:', ...n.say);
			if (n.ask) lines.push('', 'ASK THE ROOM: ' + n.ask);
			if (n.watch) lines.push('', 'WATCH FOR: ' + n.watch);
			(n.demos || []).forEach(function (d) { lines.push('', 'OPTIONAL DEMO: ' + d.title, ...d.say); });
			lines.push('', '-'.repeat(60), '');
		});
		return lines.join('\r\n');
	}
	function downloadNotes() {
		var blob = new Blob([notesText()], { type: 'text/plain;charset=utf-8' });
		var url = URL.createObjectURL(blob);
		var a = document.createElement('a');
		a.href = url;
		a.download = location.pathname.split('/').pop().replace(/\.html$/, '') + '-presenter-notes.txt';
		a.click();
		setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
	}
	function buildView(doc, isDrawer) {
		var root = doc.createElement('div');
		root.className = 'aw-notes-view';
		root.setAttribute('role', isDrawer ? 'dialog' : 'region');
		root.setAttribute('aria-label', 'Presenter notes');
		root.innerHTML = '<header class="aw-notes-header"><div><span class="aw-notes-kicker">Presenter notes</span><span class="aw-notes-language"></span></div><button type="button" class="aw-notes-close" aria-label="Close presenter notes">Close</button></header>'
			+ '<main class="aw-notes-body" tabindex="0"><span class="aw-notes-step" aria-live="polite"></span><h2 class="aw-notes-title"></h2><div class="aw-notes-content"></div><section class="aw-notes-next"><h3>Next up</h3><p></p></section></main>'
			+ '<footer class="aw-notes-footer"><button type="button" class="aw-notes-prev">Previous</button><button type="button" class="aw-notes-forward">Next</button><button type="button" class="aw-notes-download">Download all notes (.txt)</button></footer>';
		root.querySelector('.aw-notes-close').addEventListener('click', function () { close(true); });
		root.querySelector('.aw-notes-prev').addEventListener('click', function () { move('prev'); });
		root.querySelector('.aw-notes-forward').addEventListener('click', function () { move('next'); });
		root.querySelector('.aw-notes-download').addEventListener('click', downloadNotes);
		// The drawer's keys must not accidentally advance the learner animation.
		root.addEventListener('keydown', function (event) {
			if (event.key === 'Escape' || event.code === 'KeyN') {
				event.preventDefault();
				event.stopPropagation();
				close(true);
			} else if (isDrawer) event.stopPropagation();
		});
		return { root: root, doc: doc, q: function (s) { return root.querySelector(s); } };
	}
	function refresh() {
		if (!view) return;
		var i = index();
		if (!STEPS[i]) return;
		// Fetch in the opener: some browsers do not load linked CSS in a written about:blank popup.
		if (stylesheet && !view.doc.getElementById('aw-notes-css')) {
			var style = view.doc.createElement('style');
			style.id = 'aw-notes-css';
			style.textContent = stylesheet;
			view.doc.head.appendChild(style);
		}
		view.root.dataset.theme = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
		view.root.lang = data && !data.locales[language()] ? 'en' : language();
		view.q('.aw-notes-language').textContent = 'Script: ' + view.root.lang.toUpperCase();
		view.q('.aw-notes-step').textContent = 'Step ' + (i + 1) + ' of ' + STEPS.length;
		view.q('.aw-notes-title').textContent = titleAt(i);
		var content = view.q('.aw-notes-content');
		content.replaceChildren();
		if (!data) {
			var p = view.doc.createElement('p');
			p.setAttribute('role', 'status');
			p.textContent = loadError ? 'Presenter notes could not be loaded. Close and reopen this view to retry.' : 'Loading speaker notes...';
			content.appendChild(p);
		} else {
			var n = noteAt(i);
			if (!n) {
				content.appendChild(section(view.doc, 'Missing script', ['No presenter script for this step.']));
			} else {
				content.appendChild(section(view.doc, 'Say', n.say, 'aw-notes-say'));
				if (n.ask) content.appendChild(section(view.doc, 'Ask the room', [n.ask]));
				if (n.watch) content.appendChild(section(view.doc, 'Watch for', [n.watch]));
				(n.demos || []).forEach(function (demo) {
					var details = view.doc.createElement('details');
					var summary = view.doc.createElement('summary');
					summary.textContent = demo.title + ' (optional demo)';
					details.append(summary, section(view.doc, 'Say', demo.say));
					content.appendChild(details);
				});
			}
		}
		view.q('.aw-notes-prev').disabled = i === 0;
		view.q('.aw-notes-forward').disabled = i === STEPS.length - 1;
		view.q('.aw-notes-download').disabled = !data;
		view.q('.aw-notes-next p').textContent = i + 1 < STEPS.length ? titleAt(i + 1) : 'End of the journey.';
		if (i !== previousStep) view.q('.aw-notes-body').scrollTop = 0;
		previousStep = i;
	}
	function showDrawer() {
		drawer = document.createElement('aside');
		drawer.id = 'aw-notes-drawer';
		view = buildView(document, true);
		drawer.appendChild(view.root);
		document.body.appendChild(drawer);
		announce('Popup blocked. Presenter notes opened on this screen; close them before sharing it.');
	}
	function toggle() {
		if (view) { close(true); return; }
		// Open synchronously in the user's click, before fetching scripts, to avoid the popup blocker.
		popup = window.open('', 'aw-speaker-' + location.pathname, 'popup=yes,width=560,height=780');
		if (popup && !popup.closed) {
			var doc = popup.document;
			doc.open();
			doc.write('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body></body></html>');
			doc.close();
			doc.body.style.margin = '0';
			doc.title = document.title + ' - Presenter notes';
			view = buildView(doc, false);
			doc.body.appendChild(view.root);
			popup.addEventListener('keydown', function (event) {
				if (event.ctrlKey || event.metaKey || event.altKey || event.repeat ||
					/INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
				if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
					event.preventDefault();
					move(event.code === 'ArrowRight' ? 'next' : 'prev');
				}
			});
			popup.addEventListener('pagehide', function () { popup = null; view = null; syncButton(); });
		} else {
			popup = null;
			showDrawer();
		}
		syncButton();
		refresh();
		view.q('.aw-notes-body').focus();
		load().then(refresh);
	}
	button.addEventListener('click', function (event) { event.stopPropagation(); toggle(); });
	document.addEventListener('keydown', function (event) {
		if (event.ctrlKey || event.metaKey || event.altKey || event.repeat ||
			/INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
		if (event.code === 'KeyN') { event.preventDefault(); toggle(); }
	});
	var counter = document.getElementById('step-counter');
	if (counter) new MutationObserver(refresh).observe(counter, { childList: true, characterData: true, subtree: true });
	new MutationObserver(refresh).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
	new MutationObserver(refresh).observe(document.body, { attributes: true, attributeFilter: ['class'] });
	window.addEventListener('pagehide', function () { close(false); });
})();
