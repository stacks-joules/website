import React, { useEffect, useState } from 'react';
import * as styles from './Header.module.css';
import { NeuroNoiseBackground } from '../common/NeuroNoiseBackground';
import { Logo } from '../common/Logo';
// Add an interface for the Logo component props
import { useTheme } from '../common/ThemeProvider';
import { Starfield } from '@components/common/StarField';

// Static header background per theme — used as the fallback when the WebGL
// plasma is skipped (mobile / reduced-motion). Mirrors the accent.
const backgroundByTheme: Record<string, string> = {
  pink: `/images/background-pink.webp`,
  sky: `/images/background-blue.webp`,
  yellow: `/images/background-yellow.webp`,
};

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
  const backgroundImage =
    backgroundByTheme[componentTheme] ?? backgroundByTheme.pink;

  const toggleStars = () => setShowStars((s) => !s);

  // Trigger differs by device: hover-capable (desktop) toggles on mouseover;
  // touch (mobile) toggles on tap. The (hover: hover) guard keeps the two
  // from double-firing on either device.
  const isHoverCapable = () =>
    typeof window !== `undefined` &&
    window.matchMedia(`(hover: hover)`).matches;

  const handleLogoMouseEnter = () => {
    if (isHoverCapable()) toggleStars();
  };

  const handleLogoClick = () => {
    if (!isHoverCapable()) toggleStars();
  };

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
      {/* Toggle starfield <-> plasma: hover on desktop, tap on mobile */}
      <Logo
        center
        handleClick={handleLogoClick}
        handleMouseEnter={handleLogoMouseEnter}
      />
    </div>
  );
};
