import React from 'react';
import Layout from '../components/Layout';
import { LogoArea } from '../components/LogoArea';
import { FeatureBlock } from '../components/FeatureBlock';
import { ContactSection } from '../components/ContactSection';

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <LogoArea />
      <FeatureBlock
        title="LEARN BUILDING AUTOMATION"
        description="Our curriculum teaches the fundamentals of building automation systems, preparing students for careers in a growing field with high demand for skilled technicians."
        imageSrc="/images/feature-image-1.jpg"
        imageAlt="Building Automation"
        buttonText="Learn More"
        buttonLink="/curriculum"
      />
      <FeatureBlock
        title="GET HIRED"
        description="We connect our graduates with industry partners looking for skilled technicians. Our program has a high placement rate with competitive starting salaries."
        imageSrc="/images/feature-image-2.jpg"
        imageAlt="Job Placement"
        buttonText="Employment Partners"
        buttonLink="/employment-partnerships"
        textOrientation="right"
      />
      <ContactSection />
    </Layout>
  );
};

export default LandingPage;
