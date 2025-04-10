import React from 'react';
import * as styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  children: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => {
  return <div className={styles.sectionHeader}>{children}</div>;
};
