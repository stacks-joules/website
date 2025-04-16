import React from 'react';
import Layout from '../components/layout/Layout';
import { SectionHeader } from '../components/layout/SectionHeader';
import { Block } from '../components/blocks/block/Block';
import { TextPanel } from '../components/blocks/panels/TextPanel';
import { ImagePanel } from '../components/blocks/panels/ImagePanel';

import conway from '../assets/images/conway.png';
import spooner from '../assets/images/spooner.png';

const Team: React.FC = () => {
  return (
    <Layout>
      <SectionHeader>The Team</SectionHeader>
      <Block variation="dark">
        <ImagePanel
          imageSrc={conway}
          imageAlt="Picture of J Michael Conway"
          dropShadow
        />
        <TextPanel
          caption="Founder and President"
          smallTitle="J Michael Conway"
          description="Founding educator Mike Conway brings over 20 years of experience as a teacher and leader.  He specializes in making high school mathematics and technical learning accessible to all, especially those who have been late to experience success. 

Inspired by his work as Lead Advisor at the High School for Recording Arts (Hip Hop High) in St. Paul, Minnesota, Mike is an expert in making challenging subjects engaging and instilling the confidence essential to achievement. 

As a faculty coach, he has supported schools and teachers from across the country by implementing project-based learning and other innovative yet proven student-centered learning strategies."
        />
      </Block>
      <Block variation="light">
        <TextPanel title="The Team" description="The Team" />
        <ImagePanel imageSrc={conway} imageAlt="Picture of Jon Spooner" />
      </Block>
      <Block>
        <TextPanel title="The Team" description="The Team" />
        <ImagePanel imageSrc={conway} imageAlt="Picture of Jon Spooner" />
      </Block>
    </Layout>
  );
};

export default Team;
