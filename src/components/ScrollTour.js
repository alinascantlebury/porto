import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './ScrollTour.module.css';
import { ExpandedContext } from './ProjectModal';

/**
 * stops: [{ image, title, description }]
 * A sticky screen frame on one side crossfades as the user scrolls past
 * text stops on the other side — same pattern as sajilo.fyi's "Every screen".
 */
export default function ScrollTour({ stops, onExpand }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stopRefs = useRef([]);
  const expanded = useContext(ExpandedContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      {
        root: null,
        // fire when a stop crosses the vertical center of the viewport
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    const els = stopRefs.current.filter(Boolean);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [stops]);

  if (!stops || stops.length === 0) return null;

  return (
    <div className={`${styles.tour} ${expanded ? styles.tourLarge : ''}`}>
      <div className={styles.stops}>
        {stops.map((stop, i) => (
          <div
            key={i}
            ref={(el) => (stopRefs.current[i] = el)}
            data-index={i}
            className={`${styles.stop} ${i === activeIndex ? styles.stopActive : ''}`}
          >
            <span className={styles.stopNum}>{String(i + 1).padStart(2, '0')}</span>
            {stop.title && <h3 className={styles.stopTitle}>{stop.title}</h3>}
            {stop.description && <p className={styles.stopDesc}>{stop.description}</p>}
          </div>
        ))}
      </div>

      <div className={styles.stage}>
        <div className={`${styles.frame} ${expanded ? styles.frameLarge : ''}`}>
          {stops.map((stop, i) => (
            <img
              key={i}
              src={stop.image}
              alt={stop.title || `screen ${i + 1}`}
              className={`${styles.frameImg} ${i === activeIndex ? styles.frameImgActive : ''}`}
              onClick={() => onExpand && onExpand(stop.image)}
            />
          ))}
          <span className={styles.stageCount}>
            {String(activeIndex + 1).padStart(2, '0')} / {String(stops.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}