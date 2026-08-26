/*
 * aw-likes.js — anonymous "like / heart" button backed by Supabase.
 * Records a like + the visitor's city and country (IP geolocation) with no login required. The IP address is never stored.
 *
 * SETUP
 *   1. Create the `likes` table + RLS policies in the Supabase SQL editor
 *      (see supabase/likes.sql at the repo root).
 *   2. Paste your Project URL + publishable key below. The publishable key
 *      (sb_publishable_…) is designed to be public in client code — safe to commit.
 *   3. Load this AFTER the Supabase JS CDN, then add a button anywhere:
 *        <button data-aw-like data-page-slug="my-page" aria-pressed="false">
 *          <span aria-hidden="true">❤️</span> <span data-like-count>0</span>
 *        </button>
 *      Every [data-aw-like] on the page is wired up automatically. `data-page-slug`
 *      is optional (defaults to window.location.pathname).
 */
(function () {
  'use strict';

  // ── Paste your Supabase credentials here ─────────────────────────────
  var SUPABASE_URL = 'https://ccegdfemxygwboertsth.supabase.co';
  var SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_RV-6Le7VBqREjhxgupVCaA_MqeHOQ_6';
  // ─────────────────────────────────────────────────────────────────────

  var isConfigured =
    SUPABASE_URL.indexOf('YOUR_PROJECT_REF') === -1 &&
    SUPABASE_PUBLISHABLE_KEY.indexOf('YOUR_KEY_HERE') === -1;

  // The CDN exposes the client factory on window.supabase — don't shadow it.
  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    console.warn('[aw-likes] Supabase JS not found — load the CDN before aw-likes.js.');
    return;
  }
  if (!isConfigured) {
    console.warn('[aw-likes] Not configured — set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY in lib/js/aw-likes.js.');
  }

  var client = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

  // Coarse location only — we never read or store the IP address.
  // Two free, keyless providers: ipapi.co first, ipwho.is as a fallback if it fails / rate-limits.
  async function detectGeo() {
    try {
      var r = await fetch('https://ipapi.co/json/');
      if (r.ok) {
        var d = await r.json();
        if (d && !d.error && d.country_name) {
          return { city: d.city || null, country: d.country_name };
        }
      }
    } catch (e) { /* try the fallback */ }
    try {
      var r2 = await fetch('https://ipwho.is/');
      if (r2.ok) {
        var d2 = await r2.json();
        if (d2 && d2.success !== false && d2.country) {
          return { city: d2.city || null, country: d2.country };
        }
      }
    } catch (e) { /* fall through to Unknown */ }
    console.warn('[aw-likes] geo lookup failed, storing "Unknown".');
    return { city: null, country: 'Unknown' };
  }

  // The button ships its own copy so no hub has to carry these strings in its I18N block.
  // Language follows <html lang>, which every hub sets when the visitor picks a language.
  var LABELS = {
    en: { label: 'Support', aria: 'Support Azure Animations \u2014 tap the heart',
          nudge: 'Tap to show love',
          title: 'A little tap makes our day \ud83d\udc99',
          body: 'These Azure animations are a labour of love. If they helped you, a tap of the heart means the world \u2014 thank you for your support! \ud83d\ude4f',
          geo: function (c, t) { return '\ud83c\udf0d Loved in ' + c + (c === 1 ? ' country' : ' countries') + (t ? ' \u00b7 ' + t + (t === 1 ? ' city' : ' cities') : ''); } },
    es: { label: 'Apoyar', aria: 'Apoya Azure Animations \u2014 toca el coraz\u00f3n',
          nudge: 'Dale al coraz\u00f3n',
          title: 'Un toque nos alegra el d\u00eda \ud83d\udc99',
          body: 'Estas animaciones de Azure est\u00e1n hechas con cari\u00f1o. Si te han servido, un toque en el coraz\u00f3n lo significa todo. \u00a1Gracias por tu apoyo! \ud83d\ude4f',
          geo: function (c, t) { return '\ud83c\udf0d Con cari\u00f1o desde ' + c + (c === 1 ? ' pa\u00eds' : ' pa\u00edses') + (t ? ' \u00b7 ' + t + (t === 1 ? ' ciudad' : ' ciudades') : ''); } },
    ja: { label: '\u5fdc\u63f4', aria: 'Azure Animations \u3092\u5fdc\u63f4 \u2014 \u30cf\u30fc\u30c8\u3092\u30bf\u30c3\u30d7',
          nudge: '\u30cf\u30fc\u30c8\u3092\u62bc\u3057\u3066\u306d',
          title: '\u30ef\u30f3\u30bf\u30c3\u30d7\u304c\u52b1\u307f\u306b\u306a\u308a\u307e\u3059 \ud83d\udc99',
          body: '\u3053\u308c\u3089\u306e Azure \u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u611b\u60c5\u3092\u8fbc\u3081\u3066\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u304a\u5f79\u306b\u7acb\u3066\u305f\u306a\u3089\u3001\u30cf\u30fc\u30c8\u3092\u3072\u3068\u3064\u3002\u5fdc\u63f4\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01\ud83d\ude4f',
          geo: function (c, t) { return '\ud83c\udf0d ' + c + ' \u304b\u56fd' + (t ? '\u30fb' + t + ' \u90fd\u5e02' : '') + '\u304b\u3089\u611b\u3055\u308c\u3066\u3044\u307e\u3059'; } },
    ko: { label: '\uc751\uc6d0', aria: 'Azure Animations \uc751\uc6d0 \u2014 \ud558\ud2b8\ub97c \ub204\ub974\uc138\uc694',
          nudge: '\ud558\ud2b8\ub97c \ub20c\ub7ec\uc8fc\uc138\uc694',
          title: '\ud55c \ubc88\uc758 \ud0ed\uc774 \ud070 \ud798\uc774 \ub429\ub2c8\ub2e4 \ud83d\udc99',
          body: '\uc774 Azure \uc560\ub2c8\uba54\uc774\uc158\uc740 \uc560\uc815\uc744 \ub2f4\uc544 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \ub3c4\uc6c0\uc774 \ub418\uc168\ub2e4\uba74 \ud558\ud2b8\ub97c \ub20c\ub7ec \uc8fc\uc138\uc694. \uc751\uc6d0\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4! \ud83d\ude4f',
          geo: function (c, t) { return '\ud83c\udf0d ' + c + '\uac1c\uad6d' + (t ? ' \u00b7 ' + t + '\uac1c \ub3c4\uc2dc' : '') + '\uc5d0\uc11c \uc0ac\ub791\ubc1b\uace0 \uc788\uc5b4\uc694'; } },
    pt: { label: 'Apoiar', aria: 'Apoie o Azure Animations \u2014 toque no cora\u00e7\u00e3o',
          nudge: 'Toque no cora\u00e7\u00e3o',
          title: 'Um toque alegra o nosso dia \ud83d\udc99',
          body: 'Estas anima\u00e7\u00f5es do Azure s\u00e3o feitas com carinho. Se ajudaram voc\u00ea, um toque no cora\u00e7\u00e3o significa muito \u2014 obrigado pelo seu apoio! \ud83d\ude4f',
          geo: function (c, t) { return '\ud83c\udf0d Amado em ' + c + (c === 1 ? ' pa\u00eds' : ' pa\u00edses') + (t ? ' \u00b7 ' + t + (t === 1 ? ' cidade' : ' cidades') : ''); } }
  };
  function strings() {
    var l = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
    return LABELS[l] || LABELS.en;
  }
  var localizers = [];

  function initButton(btn) {
    var slug = btn.getAttribute('data-page-slug') || window.location.pathname;
    var storageKey = 'aw_liked_' + slug;
    var countEl = btn.querySelector('[data-like-count]');
    var geoEl = btn.parentNode ? btn.parentNode.querySelector('[data-like-geo]') : null;
    var liked = localStorage.getItem(storageKey) === '1';
    // data-like-total → show the grand total across every page instead of just this slug.
    var totalMode = btn.hasAttribute('data-like-total');
    var labelEl = btn.querySelector('.aw-like-label');
    var pop = btn.parentNode ? btn.parentNode.querySelector('.aw-like-pop') : null;
    var geoCounts = null;   // remembered so the stat can be re-rendered on a language switch

    // Must sit after the button so `.aw-like.is-liked ~ .like-nudge` can retire it once tapped.
    var nudge = null;
    if (btn.parentNode && btn.parentNode.classList.contains('aw-like-top')) {
      nudge = btn.parentNode.querySelector('.like-nudge');
      if (!nudge) {
        nudge = document.createElement('span');
        nudge.className = 'like-nudge';
        nudge.setAttribute('aria-hidden', 'true');
        btn.parentNode.appendChild(nudge);
      }
    }

    function localize() {
      var s = strings();
      if (labelEl) labelEl.textContent = s.label;
      btn.setAttribute('aria-label', s.aria);
      if (nudge) nudge.textContent = s.nudge;
      if (pop) {
        var t = pop.querySelector('strong');
        var b = pop.querySelector('span:not(.aw-like-geo)');
        if (t) t.textContent = s.title;
        if (b) b.textContent = s.body;
      }
      renderGeo();
    }

    function renderGeo() {
      if (!geoEl) return;
      if (!geoCounts || !geoCounts.countries) { geoEl.hidden = true; return; }
      geoEl.textContent = strings().geo(geoCounts.countries, geoCounts.cities);
      geoEl.hidden = false;
    }
    localizers.push(localize);

    function reflect() {
      btn.classList.toggle('is-liked', liked);
      btn.setAttribute('aria-pressed', liked ? 'true' : 'false');
    }

    async function refreshCount() {
      if (!isConfigured) return;
      try {
        // SELECT COUNT(*) FROM likes  [WHERE page_slug = slug]  — head:true returns the count only.
        var q = client.from('likes').select('*', { count: 'exact', head: true });
        if (!totalMode) q = q.eq('page_slug', slug);
        var res = await q;
        if (!res.error && countEl) countEl.textContent = res.count || 0;
      } catch (e) {
        /* offline / unreachable — keep the current count */
      }
    }

    // Global "loved around the world" stat (all rows), read from the aggregate views.
    async function refreshGeo() {
      if (!geoEl || !isConfigured) return;
      try {
        var c = await client.from('likes_by_country').select('*', { count: 'exact', head: true });
        var ci = await client.from('likes_by_city').select('*', { count: 'exact', head: true });
        geoCounts = {
          countries: (!c.error && c.count) ? c.count : 0,
          cities: (!ci.error && ci.count) ? ci.count : 0
        };
        renderGeo();
      } catch (e) {
        geoEl.hidden = true;
      }
    }

    btn.addEventListener('click', async function () {
      if (liked || btn.disabled) return;
      if (!isConfigured) {
        console.warn('[aw-likes] not configured — add your Supabase credentials.');
        return;
      }
      btn.disabled = true;
      var geo = await detectGeo();
      try {
        var ins = await client.from('likes').insert([{
          page_slug: slug,
          city: geo.city,
          country: geo.country
        }]);
        if (ins.error) {
          console.error('[aw-likes] insert failed:', ins.error.message);
        } else {
          liked = true;
          localStorage.setItem(storageKey, '1');
          btn.classList.add('just-liked');
          reflect();
          await refreshCount();
          await refreshGeo();
        }
      } catch (e) {
        console.error('[aw-likes] insert error:', e);
      } finally {
        btn.disabled = false;
      }
    });

    reflect();
    localize();
    refreshCount();
    refreshGeo();
  }

  function boot() {
    var btns = document.querySelectorAll('[data-aw-like]');
    for (var i = 0; i < btns.length; i++) initButton(btns[i]);
    // Hubs localize by setting <html lang>, so follow it rather than hooking each hub's own switcher.
    if (window.MutationObserver && localizers.length) {
      new MutationObserver(function () {
        for (var j = 0; j < localizers.length; j++) localizers[j]();
      }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
