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
      <Block
        blockTitle="↳Low voltage wiring & Niagara Workbench"
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
                `Learners will do some resume building before being introduced to Niagara and daily report protocol.`,
                `Learners will start working on Niagara labs to develop knowledge of BAS software`,
                `Learners will do a wiring activity to demonstrate their understanding of Ohm’s law and how electricity travels.`,
                `Learners will participate in a wire stripping competition to build and practice wiring skills.`,
                `Learners will work with their Durst Project Groups to prepare their presentations and make progress with their Niagara labs.`,
                `Learners will be provided with an overview of air handling units to gain a deeper understanding of facility operations, continue work with Durst Project Groups and continue Niagara Labs`,
                `Learners will continue building their resumes, further their work in their Durst Project Groups, and make progress with Niagara labs.`,
                `Learners will work in groups to present their Durst Project Groups research findings to add to our collective understanding of how the Sven Durst Residential Tower (and other buildings like it) functions and continue making progress on Niagara labs.`,
                `Learners will take some time to work on LinkedIn Profiles and Resume Building so they can be successful when seeking work in the BAS field`,
                `Learners will draw a wiring diagram to demonstrate their understanding of electrical currents and wiring.`,
                `Learners will work in groups to analyze a wiring diagram so they can use it in a wiring simulation activity and will select their job fair group for the final presentation.`,
                `Learners will conclude the final labs in Niagara workbench and begin working in their job fair groups for the final presentation.`,
                `Learner presentations, graduation ceremony and networking event`,
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
