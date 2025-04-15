import React from 'react';
import * as styles from './Block.module.css';

import { Container } from '../../layout/Container';

const themes = {
  light: `lightTheme`,
  dark: `darkTheme`,
};

interface BlockProps {
  children: React.ReactNode;
  variation?: 'light' | 'dark' | undefined;
}

export const Block: React.FC<BlockProps> = ({ children, variation }) => {
  const themeClass = variation ? themes[variation] : ``;

  return (
    <div className={`${styles.block} ${styles[themeClass]}`}>
      <Container>
        <div className={styles.innerBlock}>{children}</div>
      </Container>
    </div>
  );
};
