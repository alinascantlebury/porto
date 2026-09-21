import React, { createContext, useEffect, useState } from 'react';
import styles from './ProjectModal.module.css';

export const ExpandedContext = createContext(false);

export default function ProjectModal({ onClose, children }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className={`${styles.overlay} ${expanded ? styles.overlayExpanded : ''}`} onClick={onClose}>
      <div
        className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.chrome}>
          <button className={styles.iconBtn} onClick={onClose} aria-label="Close">
            <HomeIcon />
          </button>
          <button
            className={styles.iconBtn}
            onClick={() => setExpanded((v) => !v)}
            aria-label="Expand"
          >
            <ExpandIcon expanded={expanded} />
          </button>
        </div>
        <div className={styles.body}>
          <ExpandedContext.Provider value={expanded}>
            {children}
          </ExpandedContext.Provider>
        </div>
      </div>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExpandIcon({ expanded }) {
  return expanded ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}