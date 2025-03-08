import React from 'react';
import { Link } from 'gatsby';
import * as styles from './NavLink.module.css';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className={styles.navLink}>
      {children}
    </Link>
  );
};

export default NavLink;
