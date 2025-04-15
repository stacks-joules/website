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
        <TextPanel title="The Team" description="The Team" />
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
