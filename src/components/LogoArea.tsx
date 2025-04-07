import React from 'react';
import * as styles from './LogoArea.module.css';
import StacksLogo from '../assets/images/stacks-logo.png';
import PlusLogo from '../assets/images/plus-logo.svg';

// Add an interface for the Logo component props
interface LogoProps {
  center?: boolean;
}

export const LogoArea: React.FC = () => {
  return (
    <div className={styles.logoArea}>
      <Logo center />
    </div>
  );
};

// Update the component definition to use the interface
export const Logo: React.FC<LogoProps> = () => {
  return (
    <div className={styles.logo}>
      <img src={StacksLogo} alt="Stacks Logo" className={styles.logoImage} />
      <img src={PlusLogo} alt="Plus Logo" className={styles.plusLogo} />
    </div>
  );
};
