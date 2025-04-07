import * as React from 'react';
import Layout from './layout/Layout';
import { Header } from './Header';
import { FeatureSection } from './FeatureSection';
import { MissionSection } from './MissionSection';
import { CurriculumSection } from './CurriculumSection';
import { NewsletterSignup } from './NewsletterSignup';
import * as styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <Layout>
        <Header />
        <FeatureSection />
        <MissionSection />
        <CurriculumSection />
        <NewsletterSignup />
      </Layout>
    </div>
  );
};

export const Head = () => <title>Stacks & Joules</title>;
export default LandingPage;
