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
})(window);
