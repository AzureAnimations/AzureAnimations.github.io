/* AnimationWorks step controller.
   Owns: current step index, prev/next/reset/replay, ARIA announce,
   counter + progress bar update, prev/next/reset/replay button wiring,
   speed buttons (+/-).

   Usage:
     AW.StepController.init({
       steps: STEPS,                  // array of arbitrary step objects
       render: (step, index, ctx) => {...},  // page-supplied scene builder
       announce: step => step.title,  // optional, defaults to step.title || step.short
       onStepChange: (index) => {...} // optional notification
     });
     AW.StepController.next(); // etc.
*/
(function (global) {
  const AW = global.AW = global.AW || {};

  let cfg = null;
  let current = -1;
  let speed = 1;

  function el(id) { return document.getElementById(id); }

  function announce(step) {
    const a = el('step-announcer');
    if (!a) return;
    const msg = (cfg.announce ? cfg.announce(step) : null)
                || step.title || step.short || step.id || '';
    a.textContent = '';
    setTimeout(() => { a.textContent = msg; }, 30);
  }

  function updateChrome(index) {
    const counter = el('step-counter');
    const breadcrumb = el('breadcrumb');
    const progress = el('progress-fill');
    const total = cfg.steps.length;
    if (counter) counter.textContent = `${index + 1} / ${total}`;
    if (breadcrumb) breadcrumb.textContent = `Step ${index + 1}`;
    if (progress) progress.style.width = `${((index + 1) / total) * 100}%`;
    const prevBtn = el('prev-btn'); const nextBtn = el('next-btn');
    if (prevBtn) prevBtn.disabled = index <= 0;
    if (nextBtn) nextBtn.disabled = index >= total - 1;
  }

  function go(index) {
    if (!cfg) return;
    if (index < 0 || index >= cfg.steps.length) return;
    current = index;
    const step = cfg.steps[index];
    try {
      cfg.render(step, index, { paused: AW.motion && AW.motion.isPaused() });
    } catch (err) { console.error('Step render failed:', err); }
    updateChrome(index);
    announce(step);
    if (cfg.onStepChange) cfg.onStepChange(index, step);
  }

  function setSpeed(x) {
    speed = Math.max(0.25, Math.min(3, x));
    const lbl = el('speed-label');
    if (lbl) lbl.textContent = `${speed}×`;
    if (AW.motion) AW.motion.setSpeed(speed);
  }

  AW.StepController = {
    init(config) {
      cfg = Object.assign({ steps: [], render() {} }, config);
      current = -1;

      const prevBtn = el('prev-btn'); const nextBtn = el('next-btn');
      const resetBtn = el('reset-btn'); const replayBtn = el('replay-btn');
      const sUp = el('speed-up'); const sDn = el('speed-down');

      if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
      if (nextBtn) nextBtn.addEventListener('click', () => this.next());
      if (resetBtn) resetBtn.addEventListener('click', () => this.reset());
      if (replayBtn) replayBtn.addEventListener('click', () => this.replay());
      if (sUp) sUp.addEventListener('click', () => setSpeed(speed + 0.25));
      if (sDn) sDn.addEventListener('click', () => setSpeed(speed - 0.25));

      if (AW.keyboard) {
        AW.keyboard.bind({
          next: () => this.next(),
          prev: () => this.prev(),
          reset: () => this.reset(),
          replay: () => this.replay()
        });
      }

      go(0);
      return this;
    },
    next()   { go(current + 1); },
    prev()   { go(current - 1); },
    reset()  { go(0); },
    replay() { go(current); },
    goTo(i)  { go(i); },
    current() { return current; },
    steps()   { return cfg ? cfg.steps : []; },
    speed()   { return speed; }
  };
})(window);
