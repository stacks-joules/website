import React from 'react';
import * as styles from './NavLink.module.css';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className }) => {
  const isActive =
    typeof window !== `undefined` &&
    (window.location.pathname === to || window.location.pathname === `${to}/`);

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
