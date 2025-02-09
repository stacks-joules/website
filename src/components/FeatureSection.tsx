import React from 'react';
import * as styles from './FeatureSection.module.css';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  buttonText: string;
  isPrimary?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  buttonText,
  isPrimary = false,
}) => {
  const cardClass = isPrimary ? styles.featureCardPrimary : styles.featureCard;
  const buttonClass = isPrimary ? styles.buttonPrimary : styles.buttonSecondary;

  return (
    <div className={cardClass}>
      <div className={styles.featureContent}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className={styles.featureTitle}>{title}</div>
      </div>
      <button className={buttonClass}>{buttonText}</button>
    </div>
  );
};

export const FeatureSection: React.FC = () => {
  return (
    <section className={styles.featureSection}>
      <h2 className={styles.featureSectionTitle}>I Want to</h2>
      <div className={styles.featureCardContainer}>
        <FeatureCard
          icon={<div className={styles.iconPlaceholder} />}
          title="Become A Student"
          buttonText="Explore our Curriculum"
        />
        <FeatureCard
          icon={<div className={styles.iconPlaceholder} />}
          title="Hire The Best"
          buttonText="Employment Partnerships"
          isPrimary
        />
        <FeatureCard
          icon={<div className={styles.iconPlaceholder} />}
          title="Support Our Cause"
          buttonText="Make a Donation"
        />
      </div>
    </section>
  );
};
