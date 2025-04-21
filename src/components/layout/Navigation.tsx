import React, { useState, useEffect } from 'react';
import * as styles from './Navigation.module.css';
import NavLink from '../NavLink';
import wrenchboltLogo from '../../assets/images/wrenchbolt.svg';
import { Container } from './Container';

export const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener(`scroll`, handleScroll);

    // Clean up
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`${styles.desktopNavigation} ${
        scrolled ? styles.scrolled : ``
      }`}
    >
      <Container>
        <div className={styles.navContainer}>
          <div className={styles.leftNav}>
            <NavLink to="/" className={styles.wrenchboltLogo}>
              <img
                loading="lazy"
                src={wrenchboltLogo}
                className={styles.logo}
                alt="Stacks + Joules Logo"
              />
            </NavLink>

            <NavLink to="/about">About</NavLink>
            <NavLink to="/team">Meet the Team</NavLink>
            <NavLink to="/curriculum">Curriculum</NavLink>
            <NavLink to="/become-a-student">Become A Student</NavLink>
            <NavLink to="/employment-partnerships">
              Employment Partnerships
            </NavLink>
            <NavLink to="/support-mentors">Support/Mentor</NavLink>
          </div>
          <div className={styles.rightNav}>
            <NavLink to="/donate" className={styles.donateButton}>
              Donate
            </NavLink>
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Mobile menu that appears when hamburger is clicked */}
          <div
            className={`${styles.mobileMenu} ${
              menuOpen ? styles.menuOpen : ''
            }`}
          >
            <NavLink to="/become-a-student">Become A Student</NavLink>
            <NavLink to="/employment-partnerships">
              Employment Partnerships
            </NavLink>
            <NavLink to="/curriculum">Curriculum</NavLink>
            <NavLink to="/team">Meet the Team</NavLink>
            <NavLink to="/donate" className={styles.donateButton}>
              Donate
            </NavLink>
          </div>
        </div>
      </Container>
    </nav>
  );
};
