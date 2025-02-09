import React from 'react';
import { Navigation } from '../../components/Navigation';
import { Header } from '../../components/Header';
import { FeatureSection } from '../../components/FeatureSection';
import { MissionSection } from '../../components/MissionSection';
import { CurriculumSection } from '../../components/CurriculumSection';
import { NewsletterSignup } from '../../components/NewsletterSignup';
import { ContactSection } from '../../components/ContactSection';
import * as styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <Navigation />
      <Header />
      <FeatureSection />
      <MissionSection />
      <CurriculumSection />
      <NewsletterSignup />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
