import React from 'react';
import NavLink from './NavLink';
import * as styles from './CurriculumSection.module.css';

interface CurriculumFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CurriculumFeature: React.FC<CurriculumFeatureProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.curriculumFeature}>
      <div className={styles.featureIcon}>{icon}</div>
      <div className={styles.featureContent}>
        <div className={styles.featureTitle}>{title}</div>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
};

export const CurriculumSection: React.FC = () => {
  const features = [
    {
      icon: <div className={styles.iconPlaceholder} />,
      title: `Hands On Learning`,
      description: `Students use wireless LED lighting and Python coding to learn building automation and create games, leading to a final light show exhibition.`,
    },
    {
      icon: <div className={styles.iconPlaceholder} />,
      title: `Emotionally Supportive Classroom`,
      description: `Our classroom environment fosters emotional growth alongside technical skills, ensuring students feel supported throughout their learning journey.`,
    },
    {
      icon: <div className={styles.iconPlaceholder} />,
      title: `On-site Experience`,
      description: `Facility tours led by industry professionals expose students to real work environments, opening opportunities to connect with potential employers and mentors.`,
    },
    {
      icon: <div className={styles.iconPlaceholder} />,
      title: `Internship & Job Placement`,
      description: `Graduates are further supported with internship and job placement assistance, as well as future career development guidance and mentorship from building automation professionals.`,
    },
  ];

  return (
    <section className={styles.curriculumSection}>
      <div className={styles.curriculumContainer}>
        <div className={styles.curriculumTitle}>
          The Curriculum & The Classroom
        </div>
        <p className={styles.curriculumDescription}>
          We have developed our practical curriculum through continuous
          collaboration with BELLEDS Technologies based at <strong>MIT</strong>{' '}
          and the <strong>Rose-Hulman Institute of Technology</strong> in Terra
          Haute, Indiana.
        </p>
        <div className={styles.curriculumContent}>
          <div className={styles.curriculumImageContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/461123ab0beb2912491992687095be5d92a802e9f4b826b470560c273b771626?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
              alt="Curriculum illustration"
              className={styles.curriculumImage}
            />
          </div>
          <div className={styles.featuresContainer}>
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <CurriculumFeature {...feature} />
                {index < features.length - 1 && (
                  <div className={styles.featureDivider} />
                )}
              </React.Fragment>
            ))}
            <NavLink to="/curriculum">
              <button className={styles.seeDetailsButton}>See Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
