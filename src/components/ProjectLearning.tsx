import React from 'react';
import * as styles from './ProjectLearning.module.css';

interface ProjectLearningProps {
  headingText: string;
  descriptionText: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

export const ProjectLearning: React.FC<ProjectLearningProps> = ({
  headingText,
  descriptionText,
  buttonText,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className={styles.projectLearning}>
      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <div className={styles.headingWrapper}>
              <h2 className={styles.heading}>{headingText}</h2>
              <p className={styles.description}>{descriptionText}</p>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.ctaButton}>{buttonText}</button>
        </div>
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className={styles.projectImage}
      />
    </div>
  );
};
