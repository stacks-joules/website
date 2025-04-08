import React from 'react';
import Layout from '../components/layout/Layout';
import { FeatureBlock } from '../components/FeatureBlock';
import { CardContainer } from '../components/CardContainer';
import { Infographic } from '../components/sections/Infographic';
import { NewsletterSignup } from '../components/NewsletterSignup';
import * as styles from '../components/LandingPage.module.css';

import StudentImage from '../assets/images/student-photo-1.png';
import TeamImage from '../assets/images/team.png';
import CardOne from '../assets/images/card-1.png';
import CardTwo from '../assets/images/card-2.png';
import CardThree from '../assets/images/card-3.png';

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
        <CardContainer
          cards={[
            {
              headerText: '↳Become a student',
              imageSrc: CardOne,
              imageAlt: 'see the curriculum',
              content:
                'Our goal is to equip students with valuable tech skills, engaging their creativity and strengths, no matter their prior experience.',
              buttonText: 'See the curriculum',
              buttonLink: '/',
            },
            {
              headerText: '↳Employment partnerships',
              imageSrc: CardTwo,
              imageAlt: 'Explore partnerships',
              content:
                'Graduates receive support through internships, job placement, and career guidance from industry professionals.',
              buttonText: 'Explore partnerships',
              buttonLink: '/',
            },
            {
              headerText: '↳Make a donation',
              imageSrc: CardThree,
              imageAlt: 'Make a donation',
              content:
                'Your donation helps support students and furthers our nonprofit mission to provide valuable education and opportunities.',
              buttonText: 'Dontate',
              buttonLink: '/',
            },
          ]}
        />
        <FeatureBlock
          title="Our Mission"
          description={`Stacks + Joules is passionate about bridging the tech opportunity gap by offering a specialized curriculum in computer programming. 
      
        We are a 501(c)(3) nonprofit organization focused on project-based learning in computer programming and wireless network management for young people.`}
          imageSrc={TeamImage}
          imageAlt="Placeholder"
          textOrientation="right"
          theme="dark"
        />
        <Infographic
          title="↳ Student Success"
          cards={[
            { title: `Complete Training`, number: `89`, symbol: `%` },
            { title: `Candidates Employed`, number: `98`, symbol: `%` },
            { title: `Average Pay Rate`, number: `28`, symbol: `$` },
            { title: `In Green Tech`, number: `76`, symbol: `%` },
          ]}
        />
        <NewsletterSignup />
      </Layout>
    </div>
  );
};

export default LandingPage;
// import { Header } from '../components/Header';
// import { FeatureSection } from '../components/FeatureSection';
// import { MissionSection } from '../components/MissionSection';
// import { CurriculumSection } from '../components/CurriculumSection';
// import { NewsletterSignup } from '../components/NewsletterSignup';
