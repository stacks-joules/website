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
      <SectionHeader>Meet The Team</SectionHeader>
      <Block variation="dark">
        <ImagePanel
          imageSrc={conway}
          imageAlt="Picture of J Michael Conway"
          dropShadow
        />
        <TextPanel
          caption="Co-Founder and Executive Director"
          smallTitle="J Michael Conway"
          description="Founding educator Mike Conway brings over 20 years of experience as a teacher and leader.  He specializes in making high school mathematics and technical learning accessible to all, especially those who have been late to experience success. 

Inspired by his work as Lead Advisor at the High School for Recording Arts (Hip Hop High) in St. Paul, Minnesota, Mike is an expert in making challenging subjects engaging and instilling the confidence essential to achievement. 

As a faculty coach, he has supported schools and teachers from across the country by implementing project-based learning and other innovative yet proven student-centered learning strategies."
        />
      </Block>
      <Block variation="light">
        <TextPanel
          caption="Co-Founder and Chief Technology Officer"
          smallTitle="Jonathan Spooner"
          description="Jonathan brings a trove of experience in technology, innovation and marketing to the Stacks + Joules team. Having led innovation teams at Intersection (a division of Alphabet) and launching multiple high-tech businesses he has a wide breadth of knowledge. His entrepreneurial passion has led him to plan, budget, oversee and lead all sizes of businesses across the span of his career. A lifelong DJ having played multiple gigs around the globe he also co-founded the internet's first DJ mix site. Jonathan speaks frequently on emerging technology innovation, and his insight has been featured in the New York Times, Ad Age, Fast Company, The Motley Fool and the Wall Street Journal, among others. "
        />
        <ImagePanel
          imageSrc={spooner}
          imageAlt="Picture of Jonathan Spooner"
          dropShadow
        />
      </Block>
      <Block variation="dark">
        <TextPanel title="The Team" description="The Team" />
        <ImagePanel imageSrc={conway} imageAlt="Picture of Jon Spooner" />
      </Block>
      <Block>
        <TextPanel title="The Team" description="The Team" />
        <ImagePanel imageSrc={spooner} imageAlt="Picture of Jon Spooner" />
      </Block>
    </Layout>
  );
};

export default Team;
