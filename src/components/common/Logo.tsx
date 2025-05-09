import React from 'react';
import * as styles from './Logo.module.css';
import StacksLogo from '../../assets/images/stacks-logo.png';

interface LogoProps {
  center?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ center }) => {
  return (
    <div className={`${styles.logo} ${center ? styles.center : ``}`}>
      <img src={StacksLogo} alt="Stacks Logo" className={styles.logoImage} />
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
    </div>
  );
};
