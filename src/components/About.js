import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>about me</h1>

      <div className={styles.section}>
        <p className={styles.label}>who I am</p>
        <p className={styles.body}>
          I have a knack for making life more fun and whimsical — whether that's through a piece of
          software, a late-night food crawl through the Mission, or finding the perfect song for a
          moment that needed one.
        </p>
        <p className={styles.body} style={{ marginTop: '1rem' }}>
          My work is shaped by curiosity that shifts with the tides. I'm drawn to the spaces where
          technology meets real human experience — where a well-designed app can make a city feel
          more alive, or a conversation with an AI can actually feel like being heard.
        </p>
        <p className={styles.body} style={{ marginTop: '1rem' }}>
          I build things for people. Not users. People — the ones who want to discover something
          unexpected on a Saturday, who need support that doesn't feel clinical, who deserve tools
          that meet them where they are.
        </p>
      </div>

      <div className={styles.section}>
        <p className={styles.label}>skills</p>
        <div className={styles.skillsGrid}>
          {[
            { label: 'design', skills: 'Product Design · UX Research · Prototyping · UI Design · Figma · Adobe Suite' },
            { label: 'engineering', skills: 'Python · JavaScript · TypeScript · React Native · REST APIs · Docker · Firebase' },
            { label: 'AI/ML', skills: 'OpenAI API · RAG Systems · ChromaDB · Semantic Search · Embeddings' },
            { label: 'collaboration', skills: 'Jira · Slack · Stakeholder Communication · Cross-functional Leadership' },
          ].map((g) => (
            <div key={g.label} className={styles.skillGroup}>
              <label>{g.label}</label>
              <p>{g.skills}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.label}>education</p>
        <p className={styles.body}>
          B.S. Computer Science · Minor in UI/UX<br />
          University of San Francisco · May 2026
        </p>
      </div>

      <div className={styles.section}>
        <p className={styles.label}>contact</p>
        <p className={styles.body}>
          <a href="mailto:ascantlebury@dons.usfca.edu">ascantlebury@dons.usfca.edu</a>
        </p>
      </div>
    </div>
  );
}
