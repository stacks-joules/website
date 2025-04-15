import React from 'react';
import Layout from '../components/layout/Layout';
import { FeatureBlock } from '../components/blocks/two-panel/FeatureBlock';
import { CardContainer } from '../components/blocks/card-section/CardContainer';
import { Infographic } from '../components/sections/Infographic';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import * as styles from '../components/LandingPage.module.css';
import { Card } from '../components/blocks/card-section/Card';
import StudentImage from '../assets/images/student-photo-1.png';
import TeamImage from '../assets/images/team.png';
import CardOne from '../assets/images/card-1.png';
import CardTwo from '../assets/images/card-2.png';
import CardThree from '../assets/images/card-3.png';
import CurriculumImage1 from '../assets/images/curriculum-image-1.png';
import CurriculumImage2 from '../assets/images/curriculum-image-2.png';
import CurriculumImage3 from '../assets/images/curriculum-image-3.png';
import CurriculumImage4 from '../assets/images/curriculum-image-4.png';

import { ImagePanel } from '@components/blocks/panels/ImagePanel';
import { TextPanel } from '@components/blocks/panels/TextPanel';
import { Block } from '@components/blocks/block/Block';
const LandingPage: React.FC = () => {
  const cards = [
    {
      headerText: `↳Become a student`,
      border: true,
      imageSrc: CardOne,
      imageAlt: `see the curriculum`,
      content: `Our goal is to equip students with valuable tech skills, engaging their creativity and strengths, no matter their prior experience.`,
      buttonText: `See the curriculum`,
      buttonLink: `/`,
    },
    {
      headerText: `↳Employment partnerships`,
      border: true,
      imageSrc: CardTwo,
      imageAlt: `Explore partnerships`,
      content: `Graduates receive support through internships, job placement, and career guidance from industry professionals.`,
      buttonText: `Explore partnerships`,
      buttonLink: `/`,
    },
    {
      headerText: `↳Make a donation`,
      border: true,
      imageSrc: CardThree,
      imageAlt: `Make a donation`,
      content: `Your donation helps support students and furthers our nonprofit mission to provide valuable education and opportunities.`,
      buttonText: `Donate`,
      buttonLink: `/`,
    },
  ];

  const curriculumCards = [
    {
      imageSrc: CurriculumImage1,
      imageAlt: `Students at work`,
      contentTitle: `Hands on learning`,
      content: `Students use wireless LED lighting and Python coding to learn building automation and create games, leading to a final light show exhibition.`,
    },
    {
      imageSrc: CurriculumImage2,
      imageAlt: `see the curriculum`,
      contentTitle: `Supportive classroom`,
      content: `Students use wireless LED lighting and Python coding to learn building automation and create games, leading to a final light show exhibition.`,
    },
    {
      imageSrc: CurriculumImage3,
      imageAlt: `On-site experience`,
      contentTitle: `On-site experience`,
      content: `Facility tours led by industry professionals expose students to real work environments open opportunities to connect with potential employers and mentors.`,
    },
    {
      imageSrc: CurriculumImage4,
      imageAlt: `see the curriculum`,
      contentTitle: `Internship & Job Placement`,
      content: `Graduates are further supported with internship and job placement assistance, as well as future career development guidance and mentorship from building automation professionals.`,
    },
  ];
  return (
    <div className={styles.landingPage}>
      <Layout>
        <Block variation="dark">
          <TextPanel
            title="Learn To Light It Up!"
            description="Stacks + Joules is passionate about bridging the tech opportunity gap by offering a specialized curriculum in computer programming."
            buttonText="Become A Student"
            buttonLink="/become-a-student"
          />
          <ImagePanel
            imageSrc={StudentImage}
            imageAlt="Students examining an hvac component."
            dropShadow
          />
        </Block>
        <CardContainer>
          {cards.map((card) => (
            <Card key={card.headerText} {...card} />
          ))}
        </CardContainer>
        <Block variation="dark">
          <ImagePanel
            imageSrc={TeamImage}
            imageAlt="Staff and students posing for a photo."
            dropShadow
          />
          <TextPanel
            title="Our Mission"
            description="Stacks + Joules is passionate about bridging the tech opportunity gap by offering a specialized curriculum in computer programming."
          />
        </Block>
        <Infographic
          title="↳ Student Success"
          cards={[
            { title: `Complete Training`, number: `89`, symbol: `%` },
            { title: `Candidates Employed`, number: `98`, symbol: `%` },
            { title: `Average Pay Rate`, number: `28`, symbol: `$` },
            { title: `In Green Tech`, number: `76`, symbol: `%` },
          ]}
        />

        <CardContainer
          title="↳ Curriculum"
          description="We have developed our practical curriculum through continuous collaboration with BELLEDS Technologies based at MIT and Rose-Hulman Institute of Technology in Terra Haute, Indiana."
        >
          {curriculumCards.map((card) => (
            <Card key={card.headerText} {...card} />
          ))}
        </CardContainer>

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
