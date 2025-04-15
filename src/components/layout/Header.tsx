import React from 'react';
import * as styles from './Header.module.css';
import { NeuroNoiseBackground } from '../common/NeuroNoiseBackground';
import { Logo } from '../common/Logo';
import backgroundImage from '../../assets/images/background-pink.png';
import { Container } from './Container';
// Add an interface for the Logo component props

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <NeuroNoiseBackground
        height={250}
        fallbackImage={backgroundImage}
        fallbackColor="#FD3ABB"
      >
        <Logo center />
      </NeuroNoiseBackground>
    </div>
  );
};
