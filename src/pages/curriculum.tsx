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
      <Block blockTitle="↳Python & Lighting Controls" paddingY="0px">
        <ImagePanel
          imageSrc={CurriculumImage}
          imageAlt="Python & Lighting Image"
          dropShadow
        />
        <AccordionPanel
          accordionItems={[
            {
              title: `Lesson Objectives`,
              textItems: [
                `Learners will use Python to write their first piece of code for controlling LED lights.`,
                `Learners will build upon their understanding of Python to write new code using basic lighting control strategies.`,
                `Learners will develop their skills using Python to control lighting including use of tools (watt meter, heat meter, and various light bulbs).`,
                `Learners will build upon their understanding of lighting controls and will be introduced to the criteria for the unit project.`,
                `Learners will review key concepts around lighting controls and LCA certification as well as work on the light show unit project.`,
                `Learners will begin the process of obtaining LCA certification and prepare their light show unit project presentations.`,
                `Learners will review coding and lighting concepts from previous lessons, and continue work on the light show unit project.`,
                `Learners will participate in S+J Communication Self Assessment and light show unit project presentations.`,
                `Learners will present their light show unit project.`,
              ],
              expanded: true,
            },
            {
              title: `Assessments/Projects`,
              textItems: [
                `“Hello World” coding assignment`,
                `Experiment with lighting control coding`,
                `Innovation presentations`,
                `Group Research Assignment: Lighting control strategies`,
                `Daily Reports`,
                `LCA certificate`,
                `Light Show Final Unit Project`,
              ],
            },
            {
              title: `Skills`,
              textItems: [
                `Basic coding with Python in Visual Studio Basics`,
                `Presentation skills (ongoing throughout course)`,
                `Use of tools: watt meter, heat meter, etc.)`,
                `Use of Qstation`,
                `Groupwork skills`,
                `Research skills`,
              ],
            },
          ]}
        />
      </Block>
      <Buffer height="80px" />
      <Block
        blockTitle="↳HVAC and EPA 608 Certification"
        paddingY="0px"
        topBorder
      >
        <ImagePanel
          imageSrc={CurriculumImage}
          imageAlt="Focus 1 Image"
          dropShadow
        />
        <AccordionPanel
          accordionItems={[
            {
              title: `Lesson Objectives`,
              textItems: [
                `Learners will be introduced to HVAC by exploring the concept of heat transfer, the refrigeration cycle, and what EPA certification means in this industry.`,
                `Learners will review the refrigeration cycle from the previous lesson and gain further insight into obtaining EPA certification.`,
                `Learners will spend class time reviewing key concepts in HVAC, work in groups to present their findings, and prep for EPA certification`,
                `Learners will spend class time reviewing key concepts in HVAC, prep for EPA certification, and work on LinkedIn and jobsearch prep.`,
                `Learners will be introduced to the concept of recovery in a refrigeration system and will continue studying for EPA certification`,
                `Learners take the EPA 608 exam`,
                `Learners are introduced to heat pumps, boiler systems and cooling tower systems and prepare for EPA 608 retesting (if needed)`,
                `Learners will review what they learned about heat pumps, boiler systems, and cooling tower systems and prepare for EPA 608 retesting (if needed)`,
              ],
              expanded: true,
            },
            {
              title: `Assessments/Projects`,
              textItems: [
                `Professionalism practice: thank you emails to class visitors`,
                `EPA 608 practice tests`,
                `Refrigeration cycle video project`,
                `Innovation presentations`,
                `EPA 608 certification`,
              ],
            },
            {
              title: `Skills`,
              textItems: [
                `Presentation skills`,
                `Test taking`,
                `Digital literacy`,
                `Use of heat detector gun`,
                `Management of LinkedIn profile`,
                `Troubleshooting issues in refrigeration cycle in more than one context`,
                `Professional email writing`,
                `Presentation skills (ongoing throughout course)`,
                `Groupwork skills`,
                `Research skills`,
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
