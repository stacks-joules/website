import React, { useEffect, useState } from 'react';
import * as styles from './Header.module.css';
import { NeuroNoiseBackground } from '../common/NeuroNoiseBackground';
import { Logo } from '../common/Logo';
import backgroundImage from '../../assets/images/background-pink.png';
// Add an interface for the Logo component props
import { useTheme } from '../common/ThemeProvider';
import { Starfield } from '@components/common/StarField';

export const Header: React.FC<{ color?: string }> = () => {
  // import color from ThemeProvider
  const { theme } = useTheme();
  const [showStars, setShowStars] = useState(false);
  const [componentTheme, setComponentTheme] = useState(theme);

  useEffect(() => {
    setComponentTheme(theme);
  }, [theme]);

  useEffect(() => {
    console.log(`showStars`, showStars);
  }, [showStars]);

  if (showStars) {
    return (
      <div className={styles.header}>
        <Starfield position="relative">
          <Logo center absolute handleClick={() => setShowStars(!showStars)} />
        </Starfield>
      </div>
    );
  }

  return (
    <div className={styles.header}>
      <NeuroNoiseBackground
        height={`100%`}
        fallbackImage={backgroundImage}
        fallbackColor="#FD3ABB"
        color={componentTheme}
      >
        <Logo center handleClick={() => setShowStars(!showStars)} />
      </NeuroNoiseBackground>
    </div>
  );
};
