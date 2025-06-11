import React from 'react';
import Layout from '../components/layout/Layout';
import { SectionHeader } from '../components/layout/SectionHeader';
import { Block } from '../components/blocks/block/Block';
import { TextPanel } from '../components/blocks/panels/TextPanel';
import { ImagePanel } from '../components/blocks/panels/ImagePanel';

import floatwrenchbolt from '../assets/images/floatwrenchbolt.png';
import spooner from '../assets/images/spooner.png';

const About: React.FC = () => {
  return (
    <Layout>
      <SectionHeader>About</SectionHeader>
      <Block variation="dark">
        <ImagePanel
          imageSrc={floatwrenchbolt}
          imageAlt="Picture of 3d Stacks+Joules logo"
          dropShadow
        />
        <TextPanel description="Stacks+Joules is a 501c3 nonprofit (EIN 82-2358571) project-based learning program in computer programming and wireless network management. Our specialized curriculum engages young peoples’ creativity to supercharge their strengths as learners and get them on the fast-track to valuable technology skills—regardless of prior experience or training." />
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
        <ImagePanel
          imageSrc={floatwrenchbolt}
          imageAlt="Picture of Jon Spooner"
        />
      </Block>
    </Layout>
  );
};

export default About;
