import React from 'react';
import * as styles from './PaypalPanel.module.css';

interface PaypalPanelProps {
  children: React.ReactNode;
}

export const PaypalPanel: React.FC<PaypalPanelProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
