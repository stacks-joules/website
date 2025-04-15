// Container.jsx - Reusable container component
import React from 'react';
import * as styles from './Container.module.css';

export const Container = ({ children, className = '' }) => {
  return <div className={styles.container}>{children}</div>;
};
