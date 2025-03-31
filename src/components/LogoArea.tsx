import React from 'react';
import * as styles from './LogoArea.module.css';
import StacksLogo from '../assets/images/stacks-logo.png';
import PlusLogo from '../assets/images/plus-logo.svg';

export const LogoArea: React.FC = () => {
  return (
    <div className={styles.logoArea}>
      <div className={styles.title}>
        <img src={StacksLogo} alt="Stacks Logo" className={styles.logoImage} />
        <img src={PlusLogo} alt="Plus Logo" className={styles.plusLogo} />
      </div>
    </div>
  );
};
