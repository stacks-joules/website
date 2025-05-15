import React, { useState, useRef, useEffect } from 'react';
import * as styles from './PlusSymbol.module.css';

export const PlusSymbol: React.FC<{
  onClick: () => void;
  expanded: boolean;
}> = ({ onClick, expanded }) => {
  const [isOpen, setIsOpen] = useState(expanded);
  const verticalLineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!verticalLineRef.current) return;
    verticalLineRef.current.style.transform = isOpen
      ? `rotate(90deg)`
      : `rotate(0deg)`;
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          onClick();
        }}
        className={styles.button}
        aria-label={isOpen ? `Collapse` : `Expand`}
      >
        <div className={styles.plusSymbol}>
          <span className={styles.horizontalLine}></span>
          <span ref={verticalLineRef} className={styles.verticalLine}></span>
        </div>
      </button>
    </div>
  );
};
