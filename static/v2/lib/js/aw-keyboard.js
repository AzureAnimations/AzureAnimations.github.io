/* AnimationWorks keyboard navigation.
   Call AW.keyboard.bind({ next, prev, reset, replay }) from your page.
   Handles Space / Enter / ArrowRight => next, ArrowLeft => prev,
   R => reset, P => replay. Ignores typing inside form fields. */
(function (global) {
  const AW = global.AW = global.AW || {};

  function isTyping(e) {
    const t = e.target;
    if (!t) return false;
    const tag = (t.tagName || '').toLowerCase();
    if (t.isContentEditable) return true;
    return tag === 'input' || tag === 'textarea' || tag === 'select';
  }

  AW.keyboard = {
    bind(handlers) {
      function onKey(e) {
        if (isTyping(e)) return;
        if (e.code === 'Space' || e.code === 'ArrowRight' || e.code === 'Enter') {
          if (handlers.next) { e.preventDefault(); handlers.next(); }
        } else if (e.code === 'ArrowLeft') {
          if (handlers.prev) { e.preventDefault(); handlers.prev(); }
        } else if (e.code === 'KeyR') {
          if (handlers.reset) { e.preventDefault(); handlers.reset(); }
        } else if (e.code === 'KeyP') {
          if (handlers.replay) { e.preventDefault(); handlers.replay(); }
        }
      }
      document.addEventListener('keydown', onKey);
      return () => document.removeEventListener('keydown', onKey);
    }
  };
})(window);
