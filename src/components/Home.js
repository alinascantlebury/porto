import React from 'react';
import styles from './Home.module.css';
import { projects } from '../data';

export default function Home({ setPage, setProject }) {
  function openProject(id) {
    setProject(id);
    setPage('case');
  }

  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <div>
          <h1 className={styles.title}>(full stack engineer)</h1>
          <p className={styles.role}>cs + ux/ui · university of san francisco · 2026</p>
          <p className={styles.bio}>
            : a product-minded engineer who builds consumer apps with a strong focus on user behavior, personalization, and conversion.
          </p>
        </div>

        {/* RESEARCH SECTION */}
        <div className={styles.research}>
          <p className={styles.researchLabel}>published research</p>
          <a
            href="https://repository.usfca.edu/cgi/viewcontent.cgi?article=1127&context=jips"
            target="_blank"
            rel="noreferrer"
            className={styles.researchLink}
          >
            <span className={styles.researchTitle}>Nala: AI Health Coach</span>
            <span className={styles.researchMeta}>Journal of Interdisciplinary Professional Studies · USF · 2026</span>
            <span className={styles.researchArrow}>↗</span>
          </a>
        </div>

        <div className={styles.bottom}>
          <p className={styles.role}>Send pigeons to → <a href="mailto:ascantlebury@dons.usfca.edu">San Francisco, CA</a></p>
          <a href="https://github.com/alinascantlebury" target="_blank" rel="noreferrer" className={styles.githubLink}>or check out my github</a>
        </div>
      </div>

      <div className={styles.right}>
        {projects.map((p) => (
          <div
            key={p.id}
            className={styles.card}
            onClick={() => openProject(p.id)}
          >
            <div className={styles.cardImageWrapper}>
              <img
                src={p.image}
                alt={p.title}
                className={styles.cardImage}
              />
            </div>
            <div>
              <p className={styles.cardMeta}>{p.meta}</p>
              <h2 className={styles.cardTitle}>{p.title}</h2>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}

        <div className={`${styles.card} ${styles.cardEmpty}`}>
          <div>
            <p className={styles.cardLabel}>coming soon</p>
            <h2 className={styles.cardTitle}>next project</h2>
            <p className={styles.cardDesc}>Always building something.</p>
          </div>
        </div>
      </div>
    </div>
  );
}