import React, { useEffect, useState } from 'react';
import * as styles from './NavLink.module.css';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className }) => {
  // Computed after mount: hydration ignores attribute mismatches, so an
  // inline render-time check never makes it into the DOM.
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setIsActive(path === to || path === `${to}/`);
  }, [to]);

  return (
    <a
      href={to}
      className={`${styles.navLink} ${className || ``}`}
      aria-current={isActive ? `page` : undefined}
    >
      {children}
    </a>
  );
};

export default NavLink;
