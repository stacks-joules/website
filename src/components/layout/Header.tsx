import React, { useEffect, useState } from 'react';
import * as styles from './Header.module.css';
import { NeuroNoiseBackground } from '../common/NeuroNoiseBackground';
import { Logo } from '../common/Logo';
import backgroundImage from '../../assets/images/background-pink.png';
// Add an interface for the Logo component props
import { useTheme } from '../common/ThemeProvider';

export const Header: React.FC<{ color?: string }> = () => {
  // import color from ThemeProvider
  const { theme } = useTheme();
  const [componentTheme, setComponentTheme] = useState(theme);

  useEffect(() => {
    setComponentTheme(theme);
  }, [theme]);

  return (
    <div className={styles.header}>
      <NeuroNoiseBackground
        height={`100%`}
        fallbackImage={backgroundImage}
        fallbackColor="#FD3ABB"
        color={componentTheme}
      >
        <Logo center />
      </NeuroNoiseBackground>
    </div>
  );
};
