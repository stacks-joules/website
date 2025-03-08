import React from 'react';
import * as styles from './MissionSection.module.css';

export const MissionSection: React.FC = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionContainer}>
        <h2 className={styles.missionTitle}>Our Mission</h2>
        <p className={styles.missionText}>
          Stacks & Joules is passionate about bridging the tech opportunity gap
          by offering a specialized curriculum in computer programming. We are a
          501(c)(3) nonprofit organization (EIN 82-2358571) focused on
          project-based learning in computer programming and wireless network
          management for young people.
          <br />
          <br />
          Our goal is to equip students with valuable technology skills,
          regardless of their prior experience, by engaging their creativity and
          unique strengths. Join us to embark on a journey of innovation and
          learning.
        </p>
        <button className={styles.readMoreButton}>Read more</button>
      </div>
      <span className={styles.missionDivider}></span>
    </section>
  );
};
