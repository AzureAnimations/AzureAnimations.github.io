/* AnimationWorks motion-preference module.
   Watches prefers-reduced-motion and exposes a manual pause toggle.
   Wires up #motion-toggle button if present and notifies subscribers. */
(function (global) {
  const AW = global.AW = global.AW || {};

  const mq = (typeof global.matchMedia === 'function')
    ? global.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false, addEventListener() {}, addListener() {} };
  const subs = new Set();
  let paused = mq.matches;

  function notify() {
    subs.forEach(fn => { try { fn(paused); } catch (e) { console.error(e); } });
  }

  function setPaused(next) {
    paused = !!next;
    if (global.gsap) {
      gsap.globalTimeline.timeScale(paused ? 0.0001 : (AW.motion._speed || 1));
    }
    syncBtn();
    notify();
  }

  function syncBtn() {
    const btn = document.getElementById('motion-toggle');
    if (!btn) return;
    btn.setAttribute('aria-pressed', String(paused));
    btn.textContent = paused ? '▶ Play' : '⏸ Pause';
    btn.setAttribute('aria-label',
      paused ? 'Resume animations' : 'Pause animations');
  }

  AW.motion = {
    _speed: 1,
    isPaused() { return paused; },
    pause() { setPaused(true); },
    resume() { setPaused(false); },
    toggle() { setPaused(!paused); },
    setSpeed(x) {
      this._speed = x;
      if (!paused && global.gsap) gsap.globalTimeline.timeScale(x);
    },
    onChange(fn) { subs.add(fn); return () => subs.delete(fn); }
  };

  /* Auto-wire when DOM ready. */
  function init() {
    const btn = document.getElementById('motion-toggle');
    if (btn) btn.addEventListener('click', () => AW.motion.toggle());
    syncBtn();
    if (mq.addEventListener) {
      mq.addEventListener('change', e => setPaused(e.matches));
    } else if (mq.addListener) {
      mq.addListener(e => setPaused(e.matches));
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

  /* Arrowhead guard. SVG markers ignore stroke-dash, so a connector that is
     "drawn in" via strokeDasharray/strokeDashoffset shows its arrowhead from
     frame one. Every frame: hide the markers of any line still mid-draw
     (single dash >= its length, non-zero offset) and restore them once it lands.
     Moving flow dashes ('9 7') are never touched. */
  const lenCache = new WeakMap();
  const parked = new Set();
  function pathLen(el) {
    const key = el.getAttribute('d') || el.getAttribute('points') || (el.getAttribute('x1') + ',' + el.getAttribute('y2'));
    const hit = lenCache.get(el);
    if (hit && hit.key === key) return hit.len;
    let len = 0;
    try { len = el.getTotalLength(); } catch (e) { len = 0; }
    lenCache.set(el, { key, len });
    return len;
  }
  function midDraw(el) {
    const dash = (el.style.strokeDasharray || '').split(/[\s,]+/).map(parseFloat).filter(n => !isNaN(n));
    if (!dash.length) return false;
    const len = pathLen(el);
    if (!len || dash[0] < len * 0.9) return false;
    return Math.abs(parseFloat(el.style.strokeDashoffset) || 0) > 0.5;
  }
  function park(el) {
    if (parked.has(el)) return;
    const cs = getComputedStyle(el);
    if (cs.markerEnd === 'none' && cs.markerStart === 'none') return;
    el.style.markerEnd = 'none'; el.style.markerStart = 'none';
    parked.add(el);
  }
  function release(el) {
    el.style.markerEnd = ''; el.style.markerStart = '';
    parked.delete(el);
  }
  function guardArrowheads() {
    if (document.hidden) return;
    parked.forEach(el => { if (!el.isConnected || !midDraw(el)) release(el); });
    document.querySelectorAll('path[style*="stroke-dash"], line[style*="stroke-dash"], polyline[style*="stroke-dash"]')
      .forEach(el => { if (!parked.has(el) && midDraw(el)) park(el); });
  }
  AW.guardArrowheads = guardArrowheads;
  if (global.gsap && gsap.ticker) gsap.ticker.add(guardArrowheads);
})(window);
