import React from 'react';
import { Navigation } from './Navigation';
import { ContactSection } from './ContactSection';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <ContactSection />
    </div>
  );
};

export default Layout;
