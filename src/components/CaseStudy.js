import React, { useState } from 'react';
import styles from './CaseStudy.module.css';
import { projects } from '../data';
import ScrollTour from './ScrollTour';

export default function CaseStudy({ projectId, setPage }) {
  const project = projects.find((p) => p.id === projectId);
  const [lightbox, setLightbox] = useState(null); // { type: 'image' | 'video', src }
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
            Array.isArray(section.screens) && typeof section.screens[0] === 'object' ? (
              // new format: [{ image, title, description }] -> scroll-driven tour
              <ScrollTour
                stops={section.screens.map((s) => ({
                  image: s.image || s.src,
                  title: s.title,
                  description: s.description,
                }))}
                onExpand={(src) => setLightbox({ type: 'image', src })}
              />
            ) : (
              // old format: plain array of image strings -> click-to-enlarge grid
              <>
                <p className={styles.hint}>click to enlarge</p>
                <div className={styles.screens}>
                  {section.screens.map((src, n) => (
                    <div
                      key={n}
                      className={styles.screen}
                      onClick={() => setLightbox({ type: 'image', src })}
                    >
                      <img src={src} alt={`screen ${n + 1}`} className={styles.screenImg} />
                    </div>
                  ))}
                </div>
              </>
            )
          )}

          {section.video && (
            <>
              <p className={styles.hint}>click to enlarge</p>
              <div className={styles.screens}>
                <div
                  className={styles.screen}
                  onClick={() => setLightbox({ type: 'video', src: section.video })}
                >
                  <video
                    src={section.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.screenImg}
                  />
                </div>
              </div>
            </>
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

      {lightbox && (
        <div className={styles.lightboxOverlay} onClick={() => setLightbox(null)}>
          {lightbox.type === 'video' ? (
            <video
              src={lightbox.src}
              controls
              autoPlay
              loop
              muted
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightbox.src}
              alt="expanded screen"
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
}