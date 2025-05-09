import React from 'react';
import { Navigation } from './Navigation';
import { ContactSection } from '../sections/ContactSection';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemeProvider } from '../common/ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <Navigation />
      <main>{children}</main>
      <ContactSection />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
