import React from 'react';
import { Navigation } from '../components/Navigation';
import { ProjectLearning } from '../components/ProjectLearning';
import { ContactSection } from '../components/ContactSection';

const BecomeAStudent: React.FC = () => {
  return (
    <div>
      <Navigation />
      <ProjectLearning
        headingText="Become a Student"
        descriptionText="Join our community of students and learn to code building automation controls."
        buttonText="Become a Student"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/461123ab0beb2912491992687095be5d92a802e9f4b826b470560c273b771626?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
        imageAlt="Project Learning"
      />
      <ContactSection />
    </div>
  );
};

export default BecomeAStudent;
