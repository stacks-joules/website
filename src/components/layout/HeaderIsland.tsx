import React from 'react';
import { ThemeProvider } from '../common/ThemeProvider';
import { Header } from './Header';

export const HeaderIsland: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};
