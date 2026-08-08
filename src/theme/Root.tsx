import React, {useEffect, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Root.module.css';

// Homepage-only overlay: let visitors pick the new interactive v2 experience or
// stay on the classic docs site. If they don't choose, it auto-redirects to v2.
const AUTO_REDIRECT_SECONDS = 10;
const CHOICE_KEY = 'aw-site-choice';

function ChooseExperience({onClose}: {onClose: () => void}) {
  const newSiteUrl = useBaseUrl('/v2/index.html');
  const [secs, setSecs] = useState(AUTO_REDIRECT_SECONDS);
  const dismissed = useRef(false);

  // `remember` = true persists the "classic" choice so the overlay never nags again.
  function close(remember: boolean) {
    dismissed.current = true;
    if (remember) {
      try {
        localStorage.setItem(CHOICE_KEY, 'classic');
      } catch (_) {}
    }
    onClose();
  }

  function goNew() {
    dismissed.current = true;
    window.location.assign(newSiteUrl);
  }

  useEffect(() => {
    const tick = window.setInterval(
      () => setSecs((s) => (s > 0 ? s - 1 : 0)),
      1000,
    );
    const redirect = window.setTimeout(() => {
      if (!dismissed.current) {
        window.location.assign(newSiteUrl);
      }
    }, AUTO_REDIRECT_SECONDS * 1000);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(redirect);
      document.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newSiteUrl]);

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="aw-choose-title"
      onClick={() => close(false)}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.close}
          type="button"
          aria-label="Close"
          onClick={() => close(false)}>
          ×
        </button>
        <span className={styles.badge}>✨ New experience</span>
        <h2 id="aw-choose-title" className={styles.title}>
          Azure Animations has a new home
        </h2>
        <p className={styles.text}>
          Explore the new <strong>interactive animated journeys</strong>, or
          continue on the classic site.
        </p>
        <div className={styles.actions}>
          <button className={styles.primary} type="button" onClick={goNew}>
            🚀 Explore the new site
          </button>
          <button
            className={styles.secondary}
            type="button"
            onClick={() => close(true)}>
            Stay on the classic site
          </button>
        </div>
        <p className={styles.hint}>Taking you to the new site in {secs}s…</p>
      </div>
    </div>
  );
}

export default function Root({children}: {children: React.ReactNode}) {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let choice: string | null = null;
    try {
      choice = localStorage.getItem(CHOICE_KEY);
    } catch (_) {}
    const isHome = location.pathname === '/' || location.pathname === '';
    setShow(isHome && choice !== 'classic');
  }, [location.pathname]);

  return (
    <>
      {children}
      {show && <ChooseExperience onClose={() => setShow(false)} />}
    </>
  );
}
