import React, { useState } from 'react';
import * as styles from './Navigation.module.css';
import NavLink from './NavLink';

export const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.desktopNavigation}>
      <div className={styles.navContainer}>
        <div className={styles.leftNav}>
          <NavLink to="/become-a-student">Become A Student</NavLink>
          <NavLink to="/employment-partnerships">
            Employment Partnerships
          </NavLink>
        </div>
        <NavLink to="/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90e984dccac0dee21d06cb24bdc8c9c524f08b8b626d50fa86a7c0941d0973ef?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
            className={styles.logo}
            alt="Stacks + Joules logo"
          />
        </NavLink>
        <div className={styles.rightNav}>
          <NavLink to="/curriculum">Curriculum</NavLink>
          <NavLink to="/team">Meet the Team</NavLink>
          <NavLink to="/donate">Donate</NavLink>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile menu that appears when hamburger is clicked */}
        <div
          className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}
        >
          <NavLink to="/become-a-student">Become A Student</NavLink>
          <NavLink to="/employment-partnerships">
            Employment Partnerships
          </NavLink>
          <NavLink to="/curriculum">Curriculum</NavLink>
          <NavLink to="/team">Meet the Team</NavLink>
          <NavLink to="/donate">Donate</NavLink>
        </div>
      </div>
    </nav>
  );
};
