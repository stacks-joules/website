import React from 'react';
import { Navigation } from './Navigation';
import { ContactSection } from './ContactSection';
import { LogoArea } from './LogoArea';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LogoArea />
      <Navigation />
      <main>{children}</main>
      <ContactSection />
    </>
  );
};

export default Layout;
