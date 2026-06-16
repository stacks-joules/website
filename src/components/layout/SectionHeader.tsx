import React from 'react';
import * as styles from './SectionHeader.module.css';
import { Container } from './Container';
interface SectionHeaderProps {
  children: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => {
  return (
    <div className={styles.sectionHeader}>
      <Container>
        <h1 className={styles.heading}>{children}</h1>
      </Container>
    </div>
  );
};
