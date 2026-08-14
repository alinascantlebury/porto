import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';
import { projects } from '../data';

export default function Home({ setPage, setProject }) {
  const [active, setActive] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { type: 'image' | 'video', src }
  const rightRef = useRef(null);

  function openProject(id) {
    const p = projects.find((proj) => proj.id === id);
    if (p.externalUrl) {
      window.open(p.externalUrl, '_blank');
      return;
    }
    setProject(id);
    setPage('case');  }

  function closeProject() {
    setActive(null);
    setLightbox(null);
  }

  useEffect(() => {
    if (rightRef.current) {
      const top = rightRef.current.getBoundingClientRect().top + window.scrollY - 57;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [active]);

  const activeProject = active ? projects.find((p) => p.id === active) : null;

  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <div>
          <h1 className={styles.title}> Alina Scantlebury </h1>

          <p className={styles.role}>cs + ux/ui · university of san francisco · 2026</p>
          <p className={styles.bio}>
            : a product-minded engineer who builds consumer apps with a strong focus on user behavior, personalization, and conversion.
          </p>
        </div>

        <div className={styles.researchGroup}>
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

          {/* MINI GAMES SECTION */}
          <div className={styles.research}>
            <p className={styles.researchLabel}>mini games</p>
            <a
              href="https://alinascantlebury.github.io/mini-games"
              target="_blank"
              rel="noreferrer"
              className={styles.researchLink}
            >
              <span className={styles.researchTitle}>Play my mini games</span>
              <span className={styles.researchMeta}>Qless and more — battle my high scores</span>
              <span className={styles.researchArrow}>↗</span>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.mascotRow}>
            <p className={styles.role}>Send pigeons to → <a href="mailto:aascantlebury0@gmail.com">San Francisco, CA</a></p>
          </div>
          <a href="https://github.com/alinascantlebury" target="_blank" rel="noreferrer" className={styles.githubLink}>or check out my github</a>
        </div>
      </div>

      <div className={styles.right} ref={rightRef}>
        {activeProject ? (
          <div className={styles.detail}>
            <button className={styles.detailBack} onClick={closeProject}>
              ← back to work
            </button>

            <div className={styles.detailHeader}>
              <div className={styles.detailMetaRow}>
                <span className={styles.detailRoleBadge}>{activeProject.role}</span>
                <div className={styles.tags}>
                  {activeProject.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
              <h2 className={styles.detailTitle}>{activeProject.title}</h2>
              {activeProject.hook && <p className={styles.detailHook}>{activeProject.hook}</p>}
            </div>

            <div className={styles.detailMetaGrid}>
              <div className={styles.detailMetaItem}>
                <label>team</label>
                <span>{activeProject.team}</span>
              </div>
              <div className={styles.detailMetaItem}>
                <label>timeline</label>
                <span>{activeProject.timeline}</span>
              </div>
            </div>

            {activeProject.sections && activeProject.sections.map((section, i) => (
              <div key={i} className={styles.detailSection}>
                <p className={styles.detailSectionLabel}>{section.label}</p>

                {section.content && (
                  <p className={styles.detailBody}>{section.content}</p>
                )}

                {section.bullets && (
                  <ul className={styles.detailBullets}>
                    {section.bullets.map((b, j) => (
                      <li key={j}>
                        {b.bold && <strong>{b.bold}</strong>}
                        {b.text}
                      </li>
                    ))}
                  </ul>
                )}

                {section.screens && (
                  <>
                    <p className={styles.detailHint}>click to enlarge</p>
                    <div className={styles.detailScreens}>
                      {section.screens.map((src, n) => (
                        <div
                          key={n}
                          className={styles.detailScreen}
                          onClick={() => setLightbox({ type: 'image', src })}
                        >
                          <img src={src} alt={`screen ${n + 1}`} className={styles.detailScreenImg} />
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {section.video && (
                  <>
                    <p className={styles.detailHint}>click to enlarge</p>
                    <div className={styles.detailScreens}>
                      <div
                        className={styles.detailScreen}
                        onClick={() => setLightbox({ type: 'video', src: section.video })}
                      >
                        <video
                          src={section.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className={styles.detailScreenImg}
                        />
                      </div>
                    </div>
                  </>
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
        ) : (
          <>
            {projects.map((p) => (
              <div
                key={p.id}
                className={styles.card}
                onClick={() => openProject(p.id)}
              >
                {p.image && (
                  <div className={styles.cardImageWrapper}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className={styles.cardImage}
                    />
                  </div>
                )}
                {p.externalUrl && (
                  <span className={styles.researchArrow}>↗</span>
                )}
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
          </>
        )}
      </div>
    </div>
  );
}