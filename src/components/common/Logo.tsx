import React, { useState, useEffect } from 'react';
import * as styles from './Logo.module.css';
import StacksLogo from '../../assets/images/stacks-logo.png';
import MobileLogo from '../../assets/images/mobile-logo-pink.svg';

interface LogoProps {
  center?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ center }) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(`(max-width: 768px)`).matches,
  );

  useEffect(() => {
    console.log(`isMobile`, isMobile);
    const mediaQuery = window.matchMedia(`(max-width: 768px)`);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener(`change`, handleResize);
    return () => mediaQuery.removeEventListener(`change`, handleResize);
  }, []);

  const logoClass = `${styles.logo} ${center ? styles.center : ``}`;

  return (
    <div className={logoClass}>
      <img
        src={isMobile ? MobileLogo : StacksLogo}
        alt="Stacks Logo"
        className={styles.logoImage}
      />
      {!isMobile && (
        <svg
          width="114"
          height="101"
          viewBox="0 0 114 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.plusLogo}
        >
          <path
            id="+"
            d="M40.9437 36.6264V0H72.6549V36.6264H114V64.3736H73.0563V101H41.3451V64.3736H0V36.6264H40.9437Z"
          />
        </svg>
      )}
    </div>
  );
};
