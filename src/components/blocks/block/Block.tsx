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

  // Check if children is an array and has less than 2 items
  const childrenArray = React.Children.toArray(children);
  const hasSingleChild = childrenArray.length < 2;

  return (
    <div className={`${styles.block} ${styles[themeClass]}`}>
      <Container>
        {/* Set flex direction based on number of children */}
        {hasSingleChild ? (
          <div
            className={styles.innerBlock}
            style={{ flexDirection: 'column' }}
          >
            {children}
          </div>
        ) : (
          <div className={styles.innerBlock}>{children}</div>
        )}
      </Container>
    </div>
  );
};
