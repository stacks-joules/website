import React from 'react';
import styles from './CurriculumDetails.module.css';
import { Navigation } from './Navigation';
import { CurriculumSection } from './CurriculumSection';
import { ContactSection } from './ContactSection';

const CurriculumDetails: React.FC = () => {
  return (
    <div className={styles.curriculumDetails}>
      <Navigation />
      <h1 className={styles.curriculumTitle}>Curriculum</h1>
      <div className={styles.focusAreas}>
        <div>Focus 1</div>
        <div>Focus 2</div>
        <div>General Skills</div>
      </div>
      <div className={styles.curriculumContent}>
        <CurriculumSection
          focusNumber={1}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/32751f5d78b1aa6d3db1c58a99da07da4e6deead76392f1d83028840027ed826?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
          whatYouLearn="Control Knowledge"
          whatYouLearnDetails={[
            'Working knowledge of computerized building automation controls',
            'Classroom training on HVAC fundamentals',
            'Strong analytic skills',
            'Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems',
            'Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters',
            'Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes',
          ]}
          whatYouDo="Internship Tasks & Competencies"
          whatYouDoDetails={[
            'Working knowledge of computerized building automation controls',
            'Classroom training on HVAC fundamentals',
            'Strong analytic skills',
            'Ability to navigate graphical user interfaces for Johnson Controls, Siemens and Distech building automation systems',
            'Ability to use temperature and relative humidity meters, data loggers, electrical volt and amp meters',
            'Interest in strengthening industry knowledge through participation in educational opportunities & skills development classes',
          ]}
        />
        <hr className={styles.sectionDivider} />
        <CurriculumSection
          focusNumber={2}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3ed4a99023737688e2ede7ef7a109086809ad40c3879ef1432aad6d737580a0f?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
          whatYouLearn="Control Knowledge"
          whatYouLearnDetails={[
            'Demonstrate knowledge of electronics, direct digital controls, pneumatic controls, HVAC systems',
            'Working knowledge of commissioning, diagnosing, and repair of building automation systems',
            'Training and experience writing software code for building automation systems',
            'Ability to document code, identify problems with control routines and draft upgrades as needed',
            'Proficient knowledge of BACnet',
          ]}
          whatYouDo="Internship Tasks & Competencies"
          whatYouDoDetails={[
            'Under supervision, performs commissioning and start-up of HVAC and building systems',
            'Assists in creating or revising operator-interface graphics',
            'Maintains site back-ups and documentation',
            'Properly documents changes to the programs and graphic on BAS systems',
            'Provide quality control checks of all work to eliminate mistakes, ensure proper control and to provide proper building conditions for the client',
            'Assists in tuning existing PID loop controllers, and develops and implements control schemes and control techniques',
          ]}
        />
        <hr className={styles.sectionDivider} />
        <CurriculumSection
          focusNumber="General"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4fcf927ebf21f5e163c8911ccf701e24e791b97a40f4326f6f600ae1b26fa4?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
          generalSkills={[
            {
              title: 'Customer Orientation',
              details: [
                'Strong customer orientation including the ability to manage expectations and satisfy customers',
                'Maintain customer relations by resolving concerns and answering questions',
                'Demonstrated effective communication skills including the ability to keep others informed',
                'Deliver technical support and training as required by end users and building staff',
              ],
            },
            {
              title: 'Basic Computer Competency',
              details: [
                'Knowledge of computers, various operating systems and latest software',
                'Working knowledge of MS Office software products',
                'Working knowledge of at least one graphical software platform',
              ],
            },
            {
              title: 'Programming and Networks',
              details: [
                'Knowledge of HVAC network systems, including fiber optic networks and building communication networks',
                'Experience loading and configuring software',
                'Supports and appropriately uses standard software libraries',
                'Understanding of sequences of operation and the development of logic to meet those sequences',
                'Experience with understanding software code and troubleshooting control system programs',
              ],
            },
            {
              title: 'Accountability & Reliability',
              details: [
                'Programming and Networks',
                'Knowledge of HVAC network systems, including fiber optic networks and building communication networks',
                'Experience loading and configuring software',
                'Supports and appropriately uses standard software libraries',
                'Understanding of sequences of operation and the development of logic to meet those sequences',
                'Experience with understanding software code and troubleshooting control system programs',
              ],
            },
            {
              title: 'Stay Focused',
              details: [
                'Maintains safe and secure work environment by following safe practices',
                'Follows all appropriate laws, Company policies and procedures',
              ],
            },
          ]}
        />
      </div>
      <ContactSection />
    </div>
  );
};

export default CurriculumDetails;
