import React, { useEffect, useState } from 'react';
import * as styles from './Logo.module.css';
import StacksLogo from '../../assets/images/stacks-logo.png';
import PlusLogo from '../../assets/images/plus-logo.svg';

interface LogoProps {
  center?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ center }) => {
  return (
    <div className={`${styles.logo} ${center ? styles.center : ''}`}>
      <img src={StacksLogo} alt="Stacks Logo" className={styles.logoImage} />
      <img src={PlusLogo} alt="Plus Logo" className={styles.plusLogo} />
    </div>
  );
};
