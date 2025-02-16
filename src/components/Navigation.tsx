import React from 'react';
import * as styles from './Navigation.module.css';
import { Link } from 'gatsby';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.desktopNavigation}>
      <div className={styles.navContainer}>
        <Link to="/become-a-student">
          <div className={styles.navItem}>Become A Student</div>
        </Link>
        <Link to="/employment-partnerships">
          <div className={styles.navItem}>Employment Partnerships</div>
        </Link>
        <Link to="/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90e984dccac0dee21d06cb24bdc8c9c524f08b8b626d50fa86a7c0941d0973ef?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
            className={styles.logo}
            alt="Stacks + Joules logo"
          />
        </Link>
        <Link to="/curriculum">
          <div className={styles.navItem}>Curriculum</div>
        </Link>
        <Link to="/team">
          <div className={styles.navItem}>Meet the Team</div>
        </Link>
        <Link to="/donate">
          <div className={styles.navItem}>Donate</div>
        </Link>
      </div>
    </nav>
  );
};
