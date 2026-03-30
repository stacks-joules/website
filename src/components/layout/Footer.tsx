import React from 'react';
import * as styles from './Footer.module.css';
import { Container } from './Container';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Container>Stacks and Joules © {new Date().getFullYear()}</Container>
    </div>
  );
};
