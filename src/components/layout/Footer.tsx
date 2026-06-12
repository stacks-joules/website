import React from 'react';
import * as styles from './Footer.module.css';
import { Container } from './Container';
import { TransparencyBadges } from '../sections/TransparencyBadges';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.transparency}>
          <div className={styles.transparencyTitle}>
            Accountability &amp; Transparency
          </div>
          <TransparencyBadges variant="compact" />
        </div>
        <div className={styles.divider} />
        <div className={styles.bottomRow}>
          <span className={styles.copyright}>
            Stacks and Joules © {new Date().getFullYear()} · 501(c)(3) · EIN
            82-2358571
          </span>
          <a href="/about#accountability" className={styles.financialsLink}>
            Financials
          </a>
        </div>
      </Container>
    </footer>
  );
};
