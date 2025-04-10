import React from 'react';
import * as styles from './Header.module.css';
import { Logo } from '../common/Logo';

// Add an interface for the Logo component props

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Logo center />
    </div>
  );
};
