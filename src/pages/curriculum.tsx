import React from 'react';
import Layout from '../components/layout/Layout';
import { SectionHeader } from '../components/layout/SectionHeader';
import LightCurriculumImage from '../assets/images/light-curriculum.png';
import HVACCurriculumImage from '../assets/images/curriculum-page-1.png';
import WiringCurriculumImage from '../assets/images/wiring-curriculum.png';
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
          imageSrc={LightCurriculumImage}
          imageAlt="Python & Lighting Image"
          dropShadow
        />
        <AccordionPanel
          accordionItems={[
            {
              title: `Learning Objectives`,
              textItems: [
                `Write first lines of Python code to control LED lights.`,
                `Expand Python knowledge by programming basic lighting control strategies.`,
                `Use Python with tools like watt meters, heat meters, and various light bulbs to control lighting.`,
                `Build on understanding of lighting controls and get introduced to unit project criteria.`,
                `Review core lighting control concepts and LCA certification topics while advancing the light show unit project.`,
                `Begin the LCA certification process and prepare to present the light show unit project.`,
                `Revisit key coding and lighting concepts while continuing work on the light show unit project.`,
                `Complete the S+J Communication Self-Assessment and present the light show unit project.`,
                `Present the completed light show unit project.`,
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
          imageSrc={HVACCurriculumImage}
          imageAlt="Focus 1 Image"
          dropShadow
        />
        <AccordionPanel
          accordionItems={[
            {
              title: `Learning Objectives`,
              textItems: [
                `Explore the concept of heat transfer, the refrigeration cycle, and the role of EPA certification in the HVAC industry.`,
                `Review the refrigeration cycle and gain deeper insight into obtaining EPA certification.`,
                `Review key HVAC concepts, collaborate in groups to present findings, and prepare for EPA certification.`,
                `Continue HVAC concept review, prepare for EPA certification, and work on LinkedIn and job search readiness.`,
                `Learn about recovery in refrigeration systems and continue EPA certification prep.`,
                `Take the EPA 608 exam.`,
                `Get introduced to heat pumps, boiler systems, and cooling tower systems while preparing for potential EPA 608 retesting.`,
                `Review heat pumps, boiler systems, and cooling tower systems in preparation for EPA 608 retesting (if needed).`,
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
      <Block
        blockTitle="↳Low voltage wiring & Niagara Workbench"
        paddingY="0px"
        topBorder
      >
        <ImagePanel
          imageSrc={WiringCurriculumImage}
          imageAlt="Focus 1 Image"
          dropShadow
        />
        <AccordionPanel
          accordionItems={[
            {
              title: `Learning Objectives`,
              textItems: [
                `Develop and polish a professional resume tailored to the building automation industry.`,
                `Begin working on Niagara labs to develop knowledge of BAS software.`,
                `Complete a wiring and multimeter activity to demonstrate understanding of Ohm’s law. `,
                `Participate in a wire stripping competition to build and practice wiring skills.`,
                `Collaborate with Durst Project Groups to prepare presentations.`,
                `Receive an overview of air handling units to gain deeper understanding of facility operations.`,
                `Present Durst Project Group research findings to deepen collective understanding of the Sven Durst Residential Tower (and similar buildings).`,
                `Work on their LinkedIn profiles to support success in the BAS job market.`,
                `Draw a wiring diagram to demonstrate understanding of electrical currents and wiring.`,
                `Conclude final labs in Niagara Workbench.`,
                `Present final projects, participate in the graduation ceremony, and engage in a networking event.`,
              ],
              expanded: true,
            },
            {
              title: `Assessments/Projects`,
              textItems: [
                `Professional Practice: resume building`,
                `Professional practice: thank you emails to class visitors`,
                `Daily reports`,
                `Niagara Workbench Labs`,
                `Low Voltage Wiring activity`,
                `Wire stripping competition`,
                `Wiresheets in Niagara`,
                `One-on-one assessments using Communication Skills rubric`,
                `Group research project: Durst trip project presentations`,
                `Professional practice: updating LinkedInprofiles`,
                `Wiring diagrams`,
                `Professional Practice: mock interviews`,
                `Networking event project: Group Presentations`,
              ],
            },
            {
              title: `Skills`,
              textItems: [
                `Resume building`,
                `Professional email writing`,
                `Building wire sheets using Niagara workbench`,
                `Simulating models using Niagara`,
                `Job interview skills`,
                `Wiring`,
                `Wire stripping`,
                `Ability to assess air handling units`,
                `Presentation and public speaking skills`,
                `Networking for success`,
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
