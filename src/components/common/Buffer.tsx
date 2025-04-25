import React from 'react';
import * as styles from './Buffer.module.css';
interface BufferProps {
  height: string;
}

export const Buffer: React.FC<BufferProps> = () => {
  return <div className={styles.buffer} />;
};
