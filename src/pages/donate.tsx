import React from 'react';
import Layout from '../components/layout/Layout';
import donateImage from '../assets/images/donate-image.png';
import { Block } from '@components/blocks/block/Block';
import { ImagePanel } from '@components/blocks/panels/ImagePanel';
import { PaypalPanel } from '@components/blocks/panels/PaypalPanel';
import { SectionHeader } from '@components/layout/SectionHeader';

const Donate: React.FC = () => {
  return (
    <Layout>
      <SectionHeader>Make a donation</SectionHeader>
      <Block>
        <ImagePanel imageSrc={donateImage} imageAlt="Donate" />
        <PaypalPanel />
      </Block>
    </Layout>
  );
};

export default Donate;
