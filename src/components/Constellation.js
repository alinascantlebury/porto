import React from 'react';
import styles from './Constellation.module.css';

// Scattered stars + dots, loosely modeled on the corner mark you liked.
// Tweak positions/symbols freely — top/left are % of the field's box.
const marks = [
  { symbol: '✳', top: '4%', left: '6%', size: 16 },
  { symbol: '·', top: '2%', left: '30%', size: 10 },
  { symbol: '★', top: '14%', left: '18%', size: 12 },
  { symbol: '·', top: '20%', left: '2%', size: 8 },
  { symbol: '✦', top: '30%', left: '10%', size: 14 },
  { symbol: '·', top: '38%', left: '26%', size: 8 },
  { symbol: '✳', top: '44%', left: '4%', size: 18 },
  { symbol: '·', top: '10%', left: '42%', size: 8 },
];

export default function Constellation() {
  return (
    <div className={styles.field} aria-hidden="true">
      {marks.map((m, i) => (
        <span
          key={i}
          className={styles.mark}
          style={{
            top: m.top,
            left: m.left,
            fontSize: m.size,
            animationDelay: `${i * 0.12}s`,
          }}
        >
          {m.symbol}
        </span>
      ))}
    </div>
  );
}
