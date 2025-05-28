import React from 'react';
import Layout from '../components/layout/Layout';
import { SectionHeader } from '../components/layout/SectionHeader';
import { ImagePanel } from '../components/blocks/panels/ImagePanel';
import { Block } from '../components/blocks/block/Block';
import StudentImage from '../assets/images/contact-image.png';
import { MarkupPanel } from '../components/blocks/panels/MarkupPanel';

const About: React.FC = () => {
  return (
    <Layout>
      <SectionHeader>About</SectionHeader>
      <Block variation="dark">
        <ImagePanel
          imageSrc={StudentImage}
          imageAlt="Students examining an hvac component."
          dropShadow
        />
        <MarkupPanel>
          <h1>This is my markup panel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
        </MarkupPanel>
      </Block>
    </Layout>
  );
};

export default About;
