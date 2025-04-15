import React from 'react';
import Layout from '../components/layout/Layout';
import { SectionHeader } from '../components/layout/SectionHeader';
import { AccordionBlock } from '@components/blocks/two-panel/AccordionBlock';
import CurriculumImage from '../assets/images/curriculum-page-1.png';
import { ImagePanel } from '@components/blocks/panels/ImagePanel';
import { AccordionPanel } from '@components/blocks/panels/AccordionPanel';
import { Block } from '@components/blocks/block/Block';

const Curriculum: React.FC = () => {
  return (
    <Layout>
      <SectionHeader>Curriculum</SectionHeader>
      <Block>
        <ImagePanel
          imageSrc={CurriculumImage}
          imageAlt="Focus 1 Image"
          dropShadow
        />
        <AccordionPanel
          title="Curriculum"
          description="Stacks + Joules is passionate about bridging the tech opportunity gap by offering a specialized curriculum in computer programming."
          accordionItems={[
            {
              title: 'Control Knowledge',
              textItems: [
                'Working knowledge of computerized building automation controls',
                'Classroom training on HVAC fundamentals',
                'Strong analytic skills',
                'Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems',
                'Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters',
                'Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes',
              ],
            },
            {
              title: 'Intership Tasks & Competencies',
              textItems: [
                'Working knowledge of computerized building automation controls',
                'Classroom training on HVAC fundamentals',
                'Strong analytic skills',
                'Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems',
                'Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters',
                'Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes',
              ],
            },
          ]}
        />
      </Block>
      <AccordionBlock
        imageSrc={CurriculumImage}
        imageAlt="Focus 1 Image"
        title="↳ Focus 1"
        expanded={true}
        accordionItems={[
          {
            title: 'Control Knowledge',
            textItems: [
              'Working knowledge of computerized building automation controls',
              'Classroom training on HVAC fundamentals',
              'Strong analytic skills',
              'Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems',
              'Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters',
              'Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes',
            ],
          },
          {
            title: 'Intership Tasks & Competencies',
            textItems: [
              'Working knowledge of computerized building automation controls',
              'Classroom training on HVAC fundamentals',
              'Strong analytic skills',
              'Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems',
              'Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters',
              'Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes',
            ],
          },
        ]}
      />
      <AccordionBlock
        imageSrc={CurriculumImage}
        imageAlt="Focus 1 Image"
        title="↳ Focus 1"
        expanded={true}
        accordionItems={[
          {
            title: 'Control Knowledge',
            textItems: [
              'Working knowledge of computerized building automation controls',
              'Classroom training on HVAC fundamentals',
              'Strong analytic skills',
              'Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems',
              'Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters',
              'Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes',
            ],
          },
          {
            title: 'Intership Tasks & Competencies',
            textItems: [
              'Working knowledge of computerized building automation controls',
              'Classroom training on HVAC fundamentals',
              'Strong analytic skills',
              'Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems',
              'Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters',
              'Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes',
            ],
          },
        ]}
      />
    </Layout>
  );
};

export default Curriculum;
