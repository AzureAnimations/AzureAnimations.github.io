/* AnimationWorks outline panel toggle.
   Wires #outline-toggle button to show/hide #step-outline.
   Renders content via AW.outline.render({ title, paragraphs, list, callout }). */
(function (global) {
  const AW = global.AW = global.AW || {};

  function panel() { return document.getElementById('step-outline'); }
  function btn()   { return document.getElementById('outline-toggle'); }
  function body()  { return document.getElementById('outline-body'); }
  function title() { return document.getElementById('outline-title'); }

  function syncBtn() {
    const b = btn(); const p = panel();
    if (!b || !p) return;
    const visible = !p.hasAttribute('hidden');
    b.setAttribute('aria-expanded', String(visible));
    b.setAttribute('aria-label', visible ? 'Hide text outline' : 'Show text outline');
  }

  AW.outline = {
    show() { const p = panel(); if (p) p.removeAttribute('hidden'); syncBtn(); },
    hide() { const p = panel(); if (p) p.setAttribute('hidden', ''); syncBtn(); },
    toggle() {
      const p = panel(); if (!p) return;
      if (p.hasAttribute('hidden')) this.show(); else this.hide();
    },
    isVisible() { const p = panel(); return p && !p.hasAttribute('hidden'); },
    render(data) {
      const t = title(); const b = body();
      if (!b) return;
      if (t && data.title) t.textContent = data.title;
      let html = '';
      (data.paragraphs || []).forEach(p => {
        html += `<p>${p}</p>`;
      });
      if (data.list && data.list.length) {
        html += '<ul>';
        data.list.forEach(it => {
          if (typeof it === 'string') html += `<li>${it}</li>`;
          else html += `<li><strong>${it.label}:</strong> ${it.value}</li>`;
        });
        html += '</ul>';
      }
      if (data.callout) {
        html += `<div class="outline-callout">${data.callout}</div>`;
      }
      b.innerHTML = html;
    }
  };

  function init() {
    const b = btn();
    if (b) b.addEventListener('click', () => AW.outline.toggle());
    syncBtn();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})(window);
