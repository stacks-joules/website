import React from 'react';
import Layout from '../components/layout/Layout';
import { SectionHeader } from '../components/layout/SectionHeader';
import CurriculumImage from '../assets/images/curriculum-page-1.png';
import { ImagePanel } from '@components/blocks/panels/ImagePanel';
import { AccordionPanel } from '@components/blocks/panels/AccordionPanel';
import { Block } from '@components/blocks/block/Block';
import { Buffer } from '@components/common/Buffer';
const Curriculum: React.FC = () => {
  return (
    <Layout>
      <SectionHeader>Curriculum</SectionHeader>
      <Block blockTitle="↳Focus 1" paddingY="0px">
        <ImagePanel
          imageSrc={CurriculumImage}
          imageAlt="Focus 1 Image"
          dropShadow
        />
        <AccordionPanel
          accordionItems={[
            {
              title: `Control Knowledge`,
              textItems: [
                `Working knowledge of computerized building automation controls`,
                `Classroom training on HVAC fundamentals`,
                `Strong analytic skills`,
                `Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems`,
                `Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters`,
                `Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes`,
              ],
              expanded: true,
            },
            {
              title: `Intership Tasks & Competencies`,
              textItems: [
                `Working knowledge of computerized building automation controls`,
                `Classroom training on HVAC fundamentals`,
                `Strong analytic skills`,
                `Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems`,
                `Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters`,
                `Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes`,
              ],
            },
          ]}
        />
      </Block>
      <Buffer height="80px" />
      <Block blockTitle="↳Focus 2 " paddingY="0px" topBorder>
        <ImagePanel
          imageSrc={CurriculumImage}
          imageAlt="Focus 1 Image"
          dropShadow
        />
        <AccordionPanel
          accordionItems={[
            {
              title: `Control Knowledge`,
              textItems: [
                `Working knowledge of computerized building automation controls`,
                `Classroom training on HVAC fundamentals`,
                `Strong analytic skills`,
                `Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems`,
                `Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters`,
                `Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes`,
              ],
              expanded: true,
            },
            {
              title: `Intership Tasks & Competencies`,
              textItems: [
                `Working knowledge of computerized building automation controls`,
                `Classroom training on HVAC fundamentals`,
                `Strong analytic skills`,
                `Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems`,
                `Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters`,
                `Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes`,
              ],
            },
          ]}
        />
      </Block>
      <Buffer height="80px" />
    </Layout>
  );
};

export default Curriculum;
