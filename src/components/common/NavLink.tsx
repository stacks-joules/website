import React from 'react';
import { Link } from 'gatsby';
import * as styles from './NavLink.module.css';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={`${styles.navLink} ${className || ``}`}
      activeClassName="active"
    >
      {children}
    </Link>
  );
};

export default NavLink;
