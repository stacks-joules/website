import React from 'react';
import Layout from '../components/Layout';
import { FeatureBlock } from '../components/FeatureBlock';
import { CardContainer } from '../components/CardContainer';
import * as styles from '../components/LandingPage.module.css';

import StudentImage from '../assets/images/student-photo-1.png';
import TeamImage from '../assets/images/team.png';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <Layout>
        <FeatureBlock
          title="Learn To Light It Up!"
          description="Stacks + Joules is passionate about bridging the tech opportunity gap by offering a specialized curriculum in computer programming."
          imageSrc={StudentImage}
          imageAlt="Placeholder"
          buttonText="Become A Student"
          buttonLink="/become-a-student"
          textOrientation="left"
          theme="dark"
        />
        <CardContainer />
        <FeatureBlock
          title="Our Mission"
          description={`Stacks + Joules is passionate about bridging the tech opportunity gap by offering a specialized curriculum in computer programming. 
      
        We are a 501(c)(3) nonprofit organization focused on project-based learning in computer programming and wireless network management for young people.`}
          imageSrc={TeamImage}
          imageAlt="Placeholder"
          textOrientation="right"
          theme="dark"
        />
      </Layout>
    </div>
  );
};

export default LandingPage;
// import { Header } from '../components/Header';
// import { FeatureSection } from '../components/FeatureSection';
// import { MissionSection } from '../components/MissionSection';
// import { CurriculumSection } from '../components/CurriculumSection';
import { NewsletterSignup } from '../components/NewsletterSignup';
