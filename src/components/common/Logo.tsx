import React from 'react';
import * as styles from './Logo.module.css';
const StacksLogo = `/images/stacks-logo.png`;
interface LogoProps {
  center?: boolean;
  handleClick?: () => void;
  handleMouseEnter?: () => void;
  absolute?: boolean;
  onPlusEnter?: () => void;
  onPlusLeave?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  center,
  handleClick,
  handleMouseEnter,
  absolute,
  onPlusEnter,
  onPlusLeave,
}) => {
  const interactive = handleClick || handleMouseEnter;
  const logoClass = `${styles.logo} ${center ? styles.center : ``} ${
    absolute ? styles.absolute : ``
  } ${interactive ? styles.clickable : ``}`;

  const inner = (
    <>
      <img src={StacksLogo} alt="Stacks Logo" className={styles.logoImage} />
      <svg
        width="114"
        height="101"
        viewBox="0 0 114 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.plusLogo}
        onMouseEnter={onPlusEnter}
        onMouseLeave={onPlusLeave}
      >
        <path
          id="+"
          d="M40.9437 36.6264V0H72.6549V36.6264H114V64.3736H73.0563V101H41.3451V64.3736H0V36.6264H40.9437Z"
        />
      </svg>
    </>
  );

  /* When interactive, render a real <button> — universally tappable on
     touch devices, keyboard-accessible for free. */
  if (interactive) {
    return (
      <button
        type="button"
        className={logoClass}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        aria-label="A little surprise"
      >
        {inner}
      </button>
    );
  }

  return <div className={logoClass}>{inner}</div>;
};
