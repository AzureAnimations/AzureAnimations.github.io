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

  function initButton(btn) {
    var slug = btn.getAttribute('data-page-slug') || window.location.pathname;
    var storageKey = 'aw_liked_' + slug;
    var countEl = btn.querySelector('[data-like-count]');
    var geoEl = btn.parentNode ? btn.parentNode.querySelector('[data-like-geo]') : null;
    var liked = localStorage.getItem(storageKey) === '1';
    // data-like-total → show the grand total across every page instead of just this slug.
    var totalMode = btn.hasAttribute('data-like-total');

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
        var countries = (!c.error && c.count) ? c.count : 0;
        var cities = (!ci.error && ci.count) ? ci.count : 0;
        if (countries > 0) {
          var txt = '🌍 Loved in ' + countries + (countries === 1 ? ' country' : ' countries');
          if (cities > 0) txt += ' · ' + cities + (cities === 1 ? ' city' : ' cities');
          geoEl.textContent = txt;
          geoEl.hidden = false;
        } else {
          geoEl.hidden = true;
        }
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
    refreshCount();
    refreshGeo();
  }

  function boot() {
    var btns = document.querySelectorAll('[data-aw-like]');
    for (var i = 0; i < btns.length; i++) initButton(btns[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
