import React, { useRef, useEffect } from 'react';
import * as styles from './PlusSymbol.module.css';

export const PlusSymbol: React.FC<{
  onClick: () => void;
  expanded: boolean;
}> = ({ onClick, expanded }) => {
  const verticalLineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!verticalLineRef.current) return;
    verticalLineRef.current.style.transform = expanded
      ? `rotate(90deg)`
      : `rotate(0deg)`;
  }, [expanded]);

  return (
    <div className={styles.container}>
      <button
        onClick={onClick}
        className={styles.button}
        aria-label={expanded ? `Collapse` : `Expand`}
      >
        <div className={styles.plusSymbol}>
          <span className={styles.horizontalLine}></span>
          <span ref={verticalLineRef} className={styles.verticalLine}></span>
        </div>
      </button>
    </div>
  );
};
