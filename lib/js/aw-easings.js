/* AnimationWorks shared GSAP easings + helper tweens.
   Exposes window.AW.easings + window.AW.helpers. */
(function (global) {
  const AW = global.AW = global.AW || {};

  AW.easings = {
    entrance: 'power3.out',
    exit: 'power2.in',
    springy: 'back.out(1.4)',
    bounce: 'back.out(2)',
    elastic: 'elastic.out(1, 0.5)',
    lineDraw: 'power2.inOut',
    pulse: 'sine.inOut'
  };

  AW.helpers = {
    /* Stagger fade-in + slight rise. */
    staggerIn(els, opts = {}) {
      if (!global.gsap || !els || !els.length) return null;
      const { duration = 0.55, stagger = 0.12, y = 14 } = opts;
      return gsap.fromTo(els,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration, stagger, ease: AW.easings.entrance });
    },

    /* SVG path stroke draw-on. */
    lineDraw(pathEl, opts = {}) {
      if (!global.gsap || !pathEl || !pathEl.getTotalLength) return null;
      const { duration = 0.7 } = opts;
      const len = pathEl.getTotalLength();
      gsap.set(pathEl, { strokeDasharray: len, strokeDashoffset: len });
      return gsap.to(pathEl, {
        strokeDashoffset: 0,
        duration,
        ease: AW.easings.lineDraw
      });
    },

    /* Comic POW splash. */
    pow(el, opts = {}) {
      if (!global.gsap || !el) return null;
      const { duration = 0.45 } = opts;
      return gsap.fromTo(el,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration, ease: AW.easings.elastic });
    }
  };
})(window);
