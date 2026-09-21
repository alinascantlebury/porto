import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.name}>Alina Scantlebury</span>
      <ul className={styles.links}>
        <li><a href="#work">work</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#play">play</a></li>
      </ul>
    </nav>
  );
}
