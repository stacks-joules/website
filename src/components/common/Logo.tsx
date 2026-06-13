import React from 'react';
import * as styles from './Logo.module.css';
const StacksLogo = `/images/stacks-logo.png`;
interface LogoProps {
  center?: boolean;
  handleClick?: () => void;
  absolute?: boolean;
  onPlusEnter?: () => void;
  onPlusLeave?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  center,
  handleClick,
  absolute,
  onPlusEnter,
  onPlusLeave,
}) => {
  const logoClass = `${styles.logo} ${center ? styles.center : ``} ${
    absolute ? styles.absolute : ``
  }`;

  return (
    <div className={logoClass}>
      <img src={StacksLogo} alt="Stacks Logo" className={styles.logoImage} />
      <svg
        width="114"
        height="101"
        viewBox="0 0 114 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.plusLogo}
        onClick={handleClick}
        onMouseEnter={onPlusEnter}
        onMouseLeave={onPlusLeave}
        role={handleClick ? `button` : undefined}
        tabIndex={handleClick ? 0 : undefined}
        aria-label={handleClick ? `A little surprise` : undefined}
        onKeyDown={
          handleClick
            ? (e) => {
                if (e.key === `Enter` || e.key === ` `) {
                  e.preventDefault();
                  handleClick();
                }
              }
            : undefined
        }
      >
        <path
          id="+"
          d="M40.9437 36.6264V0H72.6549V36.6264H114V64.3736H73.0563V101H41.3451V64.3736H0V36.6264H40.9437Z"
        />
      </svg>
    </div>
  );
};
