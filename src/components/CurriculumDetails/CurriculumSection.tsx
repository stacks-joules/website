import React from 'react';
import styles from './CurriculumSection.module.css';

interface CurriculumSectionProps {
  focusNumber: number | string;
  imageSrc: string;
  whatYouLearn?: string;
  whatYouLearnDetails?: string[];
  whatYouDo?: string;
  whatYouDoDetails?: string[];
  generalSkills?: Array<{ title: string; details: string[] }>;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  focusNumber,
  imageSrc,
  whatYouLearn,
  whatYouLearnDetails,
  whatYouDo,
  whatYouDoDetails,
  generalSkills,
}) => {
  return (
    <div className={styles.curriculumSection}>
      <div className={styles.focusArea}>
        <div className={styles.focusTitle}>
          <div className={styles.focusLabel}>Focus </div>
          <div className={styles.focusNumber}>{focusNumber}</div>
        </div>
        <img
          loading="lazy"
          src={imageSrc}
          className={styles.focusImage}
          alt={`Focus ${focusNumber} illustration`}
        />
      </div>
      <div className={styles.sectionContent}>
        {generalSkills ? (
          generalSkills.map((skill, index) => (
            <div key={index} className={styles.skillGroup}>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <ul className={styles.skillList}>
                {skill.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <>
            <div className={styles.learningSection}>
              <h3 className={styles.sectionTitle}>What You Learn</h3>
              <h4 className={styles.sectionSubtitle}>{whatYouLearn}</h4>
              <ul className={styles.detailsList}>
                {whatYouLearnDetails?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className={styles.learningSection}>
              <h3 className={styles.sectionTitle}>What You Do</h3>
              <h4 className={styles.sectionSubtitle}>{whatYouDo}</h4>
              <ul className={styles.detailsList}>
                {whatYouDoDetails?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
