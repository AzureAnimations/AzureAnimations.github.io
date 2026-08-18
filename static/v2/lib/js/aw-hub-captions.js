/* ──────────────────────────────────────────────────────────────────────────
   aw-hub-captions.js — self-installing closed captions for Azure Animations
   HUB pages (the index.html landing pages).

   Drop-in: add ONE line to a hub <head> and it wires everything —
       <script src="../lib/js/aw-hub-captions.js"></script>     (one-level hubs)
       <script src="../../lib/js/aw-hub-captions.js"></script>  (e.g. AI/Foundry)

   It (a) loads aw-captions.js if not already present, (b) injects a "CC" toggle
   next to the hub's #audio-toggle + a full-width bottom caption bar, (c) hooks the
   welcome clip (audio/index[/lang]/step-01.mp3) so captions sync to it, and
   (d) turns CC on when the speaker turns on — the user can still turn CC off.

   Requires (already true for every hub): an #audio-toggle that plays
   audio/index[/lang]/step-01.mp3, and a narration script at
   ../…/narration/v2/<domain>/index.md (+ <lang>/). No per-hub JS edits needed.
   ────────────────────────────────────────────────────────────────────────── */
(function () {
	'use strict';
	if (window.__awHubCaptionsLoaded) return;
	window.__awHubCaptionsLoaded = true;

	var MY = document.currentScript;      // captured while running synchronously
	var CC_KEY = 'aw-hub-cc';
	var current = null;                   // the welcome <audio> currently playing
	var ccBtn = null;
	var inited = false;

	function ccOn() { try { return localStorage.getItem(CC_KEY) === '1'; } catch (e) { return false; } }

	// Relative path from this hub to its narration folder (base-path safe):
	//   /v2/Security/index.html   → ../../narration/v2/Security/
	//   /v2/AI/Foundry/index.html → ../../../narration/v2/AI/Foundry/
	function narrationBase() {
		var p = location.pathname, i = p.lastIndexOf('/v2/');
		if (i < 0) return '../../narration/v2/';
		var afterV2 = p.slice(i + 1).replace(/[^/]*$/, '');          // v2/AI/Foundry/
		var depth = afterV2.replace(/\/+$/, '').split('/').length;    // 3
		return new Array(depth + 1).join('../') + 'narration/' + afterV2;
	}

	function curLang() {
		var s = document.getElementById('lang-select');
		if (s && s.value) return s.value;
		return document.documentElement.getAttribute('lang') || 'en';
	}

	function injectStyles() {
		if (document.getElementById('aw-hubcap-style')) return;
		var css =
			'#aw-caption{position:fixed;left:0;right:0;bottom:0;z-index:60;display:flex;align-items:center;justify-content:center;text-align:center;padding:0.95rem 1.5rem;min-height:54px;background:rgba(10,12,18,0.82);color:#fff;font-size:1.12rem;line-height:1.42;font-weight:600;box-shadow:0 -8px 26px rgba(0,0,0,0.32);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);clip-path:inset(0 100% 0 0);opacity:0;pointer-events:none;transition:clip-path .5s cubic-bezier(.2,.7,.3,1),opacity .3s ease;}' +
			'#aw-caption .aw-cc-text{display:block;max-width:1080px;}' +
			'body.cc-on #aw-caption.has-text{clip-path:inset(0 0 0 0);opacity:1;}' +
			'.aw-cc-toggle{display:inline-flex;align-items:center;justify-content:center;height:2.3rem;min-width:2.3rem;padding:0 0.55rem;border-radius:999px;border:1px solid var(--theme-border,rgba(128,128,128,0.3));background:transparent;color:var(--theme-text,inherit);cursor:pointer;font-size:0.75rem;font-weight:700;letter-spacing:0.03em;transition:background .15s,color .15s,border-color .15s;}' +
			'.aw-cc-toggle:hover{border-color:var(--theme-primary,var(--aw-blue,#0a84e0));color:var(--theme-primary,var(--aw-blue,#0a84e0));}' +
			'.aw-cc-toggle.on{background:var(--aw-blue,#0a84e0);color:#fff;border-color:transparent;}' +
			'@media (prefers-reduced-motion:reduce){#aw-caption{transition:opacity .2s ease;}}' +
			'@media (max-width:640px){#aw-caption{font-size:0.98rem;padding:0.78rem 1rem;min-height:46px;}}';
		var st = document.createElement('style'); st.id = 'aw-hubcap-style'; st.textContent = css;
		(document.head || document.documentElement).appendChild(st);
	}

	function injectUI() {
		if (!document.getElementById('aw-caption')) {
			var box = document.createElement('div');
			box.id = 'aw-caption'; box.setAttribute('aria-live', 'polite'); box.setAttribute('aria-hidden', 'true');
			document.body.appendChild(box);
		}
		var audioBtn = document.getElementById('audio-toggle');
		ccBtn = document.getElementById('cc-toggle');
		if (audioBtn && !ccBtn) {
			ccBtn = document.createElement('button');
			ccBtn.id = 'cc-toggle'; ccBtn.type = 'button'; ccBtn.className = 'aw-cc-toggle'; ccBtn.textContent = 'CC';
			ccBtn.setAttribute('aria-label', 'Toggle captions');
			ccBtn.setAttribute('aria-pressed', 'false');
			ccBtn.title = 'Captions (CC)';
			var anchor = audioBtn.closest('.audio-cta-wrap') || audioBtn;   // sit right next to the speaker
			anchor.parentNode.insertBefore(ccBtn, anchor.nextSibling);
			ccBtn.addEventListener('click', function () { setCC(!ccOn()); });
		}
	}

	function bind() { if (window.AWCaptions && ccOn() && current) AWCaptions.bind(current, 0); }

	function setCC(on) {
		try { localStorage.setItem(CC_KEY, on ? '1' : '0'); } catch (e) {}
		if (ccBtn) { ccBtn.classList.toggle('on', on); ccBtn.setAttribute('aria-pressed', on ? 'true' : 'false'); }
		if (window.AWCaptions) { AWCaptions.setEnabled(on); if (on) bind(); }
	}

	function clearCap() { if (window.AWCaptions) AWCaptions.clear(); }

	function isWelcome(el) {
		return /\/audio\/index\/(?:[a-z]{2}\/)?step-01\.mp3(?:$|\?)/.test(el.currentSrc || el.src || '');
	}

	// Catch the welcome clip however the hub creates/plays it, and sync captions to it.
	function hookPlay() {
		var proto = window.HTMLMediaElement && window.HTMLMediaElement.prototype;
		if (!proto || proto.__awHubHooked) return;
		proto.__awHubHooked = true;
		var orig = proto.play;
		proto.play = function () {
			var el = this, ret = orig.apply(this, arguments);
			try {
				if (isWelcome(el)) {
					current = el;
					// Clear only when THIS clip stops (a language-change replay swaps current first).
					var onStop = function () { if (current === el) clearCap(); };
					el.addEventListener('pause', onStop, { once: true });
					el.addEventListener('ended', onStop, { once: true });
					setCC(true);   // speaker on ⇒ captions on (still manually toggleable)
				}
			} catch (e) {}
			return ret;
		};
	}

	function init() {
		if (inited) return; inited = true;
		injectStyles();
		injectUI();
		if (window.AWCaptions) AWCaptions.configure({ page: 'index', base: narrationBase(), lang: curLang, reserve: false });
		hookPlay();
		setCC(ccOn());   // reflect saved pref (bar stays hidden until audio plays)
	}

	function ready(fn) {
		if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
		else fn();
	}

	if (window.AWCaptions) { ready(init); }
	else {
		var url = (MY && MY.src) ? MY.src.replace(/aw-hub-captions\.js(\?.*)?$/, 'aw-captions.js') : 'aw-captions.js';
		var s = document.createElement('script'); s.src = url;
		s.onload = function () { ready(init); };
		s.onerror = function () { ready(init); };   // still inject UI; captions just no-op
		(document.head || document.documentElement).appendChild(s);
	}
})();
