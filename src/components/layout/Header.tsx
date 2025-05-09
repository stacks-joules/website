import React from 'react';
import * as styles from './Header.module.css';
import { NeuroNoiseBackground } from '../common/NeuroNoiseBackground';
import { Logo } from '../common/Logo';
import backgroundImage from '../../assets/images/background-pink.png';
// Add an interface for the Logo component props
import { useTheme } from '../common/ThemeProvider';

export const Header: React.FC<{ color?: string }> = () => {
  // import color from ThemeProvider
  const { theme } = useTheme();

  return (
    <div className={styles.header}>
      <NeuroNoiseBackground
        height={`100%`}
        fallbackImage={backgroundImage}
        fallbackColor="#FD3ABB"
        color={theme}
      >
        <Logo center />
      </NeuroNoiseBackground>
    </div>
  );
};
