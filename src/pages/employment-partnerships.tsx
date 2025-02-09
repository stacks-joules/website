import React from 'react';
import { Navigation } from '../components/Navigation';
import { EmploymentPartnerships } from '../components/EmploymentPartnerships';
import { ContactSection } from '../components/ContactSection';

const BecomeAStudent: React.FC = () => {
  return (
    <div>
      <Navigation />
      <EmploymentPartnerships />
    </div>
  );
};

export default BecomeAStudent;
