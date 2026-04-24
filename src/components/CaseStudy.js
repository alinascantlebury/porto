import React from 'react';
import styles from './CaseStudy.module.css';
import { projects } from '../data';



export default function CaseStudy({ projectId, setPage }) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  return (
    <div className={styles.wrap}>
      <button className={styles.back} onClick={() => setPage('home')}>
        ← back to work
      </button>

      <div className={styles.header}>
        <div className={styles.metaRow}>
          <span className={styles.roleBadge}>{project.role}</span>
          <div className={styles.tags}>
            {project.tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.hook}>{project.hook}</p>
      </div>

      <div className={styles.metaGrid}>
        <div className={styles.metaItem}>
          <label>team</label>
          <span>{project.team}</span>
        </div>
        <div className={styles.metaItem}>
          <label>timeline</label>
          <span>{project.timeline}</span>
        </div>
        <div className={styles.metaItem}>
        </div>
      </div>

      {project.sections.map((section, i) => (
        <div key={i} className={styles.section}>
          <p className={styles.sectionLabel}>{section.label}</p>

          {section.content && (
            <p className={styles.body}>{section.content}</p>
          )}

          {section.bullets && (
            <ul className={styles.bullets}>
              {section.bullets.map((b, j) => (
                <li key={j}>
                  {b.bold && <strong>{b.bold}</strong>}
                  {b.text}
                </li>
              ))}
            </ul>
          )}

          {section.callout && (
            <blockquote className={styles.callout}>{section.callout}</blockquote>
          )}

          {section.screens && (
            <div className={styles.screens}>
              {section.screens.map((src, n) => (
                <div key={n} className={styles.screen}>
                  <img src={src} alt={`screen ${n + 1}`} className={styles.screenImg} />
                </div>
              ))}
            </div>
          )}

          {section.recognition && (
            <div className={styles.recognitionList}>
              {section.recognition.map((r, j) => (
                <div key={j} className={styles.recognitionItem}>
                  <div className={styles.dot} />
                  <div>
                    <strong>{r.title}</strong>
                    <span>{r.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
