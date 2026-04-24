import React from 'react';
import styles from './Nav.module.css';

export default function Nav({ page, setPage }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.name}>Alina Scantlebury</span>
      <ul className={styles.links}>
        <li>
          <button
            className={page === 'home' ? styles.active : ''}
            onClick={() => setPage('home')}
          >
            work
          </button>
        </li>
        <li>
          <button
            className={page === 'about' ? styles.active : ''}
            onClick={() => setPage('about')}
          >
            about
          </button>
        </li>
      </ul>
    </nav>
  );
}
