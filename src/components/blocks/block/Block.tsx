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
  paddingY?: string;
  blockTitle?: string;
  topBorder?: boolean;
  singleColumn?: boolean;
}

export const Block: React.FC<BlockProps> = ({
  children,
  variation,
  blockTitle,
  paddingY = `80px`,
  topBorder = false,
  singleColumn = false,
}) => {
  const themeClass = variation ? themes[variation] : ``;
  const layoutClass = singleColumn
    ? styles.innerBlockColumn
    : styles.innerBlock;

  return (
    <>
      <div
        className={`${styles.block} ${styles[themeClass]}`}
        style={{ paddingTop: paddingY, paddingBottom: paddingY }}
      >
        <Container>
          {topBorder && <hr />}
          {blockTitle && <h2 className={styles.blockTitle}>{blockTitle}</h2>}
          <div className={layoutClass}>{children}</div>
        </Container>
      </div>
    </>
  );
};
