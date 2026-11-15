/* AnimationWorks theme manager.
   Manages two orthogonal axes:
     - light/dark via .theme-light / .theme-dark on <body> (key: aw-theme)
     - preset via [data-theme-preset] on <body>      (key: aw-preset)
   Wires #theme-toggle if present. */
(function (global) {
  const AW = global.AW = global.AW || {};

  const KEY_THEME = 'aw-theme';
  const KEY_PRESET = 'aw-preset';
  const subs = new Set();

  function getTheme() {
    return document.body.classList.contains('theme-dark') ? 'dark' : 'light';
  }
  function setTheme(t) {
    const next = t === 'dark' ? 'theme-dark' : 'theme-light';
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(next);
    try { localStorage.setItem(KEY_THEME, next); } catch (e) {}
    syncBtn();
    notify();
  }
  function toggleTheme() { setTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

  function getPreset() {
    return document.body.dataset.themePreset
        || document.documentElement.dataset.themePreset
        || 'atlas';
  }
  function setPreset(p) {
    document.body.dataset.themePreset = p;
    try { localStorage.setItem(KEY_PRESET, p); } catch (e) {}
    notify();
  }

  function syncBtn() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const isDark = getTheme() === 'dark';
    const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
    btn.dataset.theme = isDark ? 'dark' : 'light';
  }

  function notify() {
    const detail = { theme: getTheme(), preset: getPreset() };
    subs.forEach(fn => { try { fn(detail); } catch (e) { console.error(e); } });
  }

  AW.theme = {
    get: getTheme,
    set: setTheme,
    toggle: toggleTheme,
    getPreset,
    setPreset,
    onChange(fn) { subs.add(fn); return () => subs.delete(fn); }
  };

  function init() {
    /* Restore saved values without overriding explicit page markup unless saved exists. */
    try {
      const savedTheme = localStorage.getItem(KEY_THEME);
      if (savedTheme) {
        document.body.classList.remove('theme-dark', 'theme-light');
        document.body.classList.add(savedTheme);
      }
      const savedPreset = localStorage.getItem(KEY_PRESET);
      if (savedPreset) document.body.dataset.themePreset = savedPreset;
    } catch (e) {}

    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
    syncBtn();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})(window);
