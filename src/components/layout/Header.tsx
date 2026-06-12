import React, { useEffect, useState } from 'react';
import * as styles from './Header.module.css';
import { NeuroNoiseBackground } from '../common/NeuroNoiseBackground';
import { Logo } from '../common/Logo';
// Add an interface for the Logo component props
import { useTheme } from '../common/ThemeProvider';
import { Starfield } from '@components/common/StarField';

const backgroundImage = `/images/background-pink.png`;
export const Header: React.FC<{ color?: string }> = () => {
  // import color from ThemeProvider
  const { theme } = useTheme();
  const [showStars, setShowStars] = useState(false);
  const [componentTheme, setComponentTheme] = useState(theme);

  useEffect(() => {
    setComponentTheme(theme);
  }, [theme]);

  return (
    <div className={styles.header}>
      <div className={styles.background}>
        {showStars ? (
          <Starfield position="absolute" iconColor="#fd3abb" />
        ) : (
          <NeuroNoiseBackground
            height={`100%`}
            fallbackImage={backgroundImage}
            fallbackColor="#FD3ABB"
            color={componentTheme}
          />
        )}
      </div>
      <Logo
        center
        onPlusEnter={() => setShowStars(true)}
        onPlusLeave={() => setShowStars(false)}
      />
    </div>
  );
};
