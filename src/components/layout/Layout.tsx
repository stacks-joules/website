import React from 'react';
import { Navigation } from './Navigation';
import { ContactSection } from '../ContactSection';
import { Header } from './Header';
import { Footer } from './Footer';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Layout;
