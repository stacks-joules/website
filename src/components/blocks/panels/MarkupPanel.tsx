import React from 'react';
import * as styles from './TextPanel.module.css';

export const MarkupPanel = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};
