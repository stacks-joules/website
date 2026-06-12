import React, { useEffect, useState } from 'react';
import * as styles from './Header.module.css';
import { NeuroNoiseBackground } from '../common/NeuroNoiseBackground';
import { Logo } from '../common/Logo';
// Add an interface for the Logo component props
import { useTheme } from '../common/ThemeProvider';
import { Starfield } from '@components/common/StarField';

const backgroundImage = `/images/background-pink.png`;

// Accent hex per theme — keep in sync with .theme-* in global.css
const themeHex: Record<string, string> = {
  pink: `#FD3ABB`,
  sky: `#4DE5F9`,
  yellow: `#FAE150`,
};

export const Header: React.FC<{ color?: string }> = () => {
  // import color from ThemeProvider
  const { theme } = useTheme();
  const [showStars, setShowStars] = useState(false);
  const [componentTheme, setComponentTheme] = useState(theme);

  useEffect(() => {
    setComponentTheme(theme);
  }, [theme]);

  const accent = themeHex[componentTheme] ?? themeHex.pink;

  return (
    <div className={styles.header}>
      <div className={styles.background}>
        {showStars ? (
          <Starfield position="absolute" iconColor={accent} />
        ) : (
          <NeuroNoiseBackground
            height={`100%`}
            fallbackImage={backgroundImage}
            fallbackColor={accent}
            color={componentTheme}
          />
        )}
      </div>
      {/* Click the logo to toggle starfield <-> plasma (hover was
          impossible to trigger on touch devices) */}
      <Logo center handleClick={() => setShowStars((s) => !s)} />
    </div>
  );
};
