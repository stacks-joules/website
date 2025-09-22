import React, { useState, useEffect } from 'react';
import * as styles from './Navigation.module.css';
import NavLink from '../common/NavLink';
import wrenchboltLogo from '../../assets/images/wrenchbolt.svg';
import backArrow from '../../assets/images/back-arrow.svg';
import { Container } from './Container';
import { Button } from '../common/Button';

export const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const donationLink = `https://giving.classy.org/campaign/700902/donate`;

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
    <nav className={styles.desktopNavigation}>
      <Container>
        <div className={styles.navContainer}>
          <div className={styles.wrenchbolt}>
            <NavLink to="/" className={styles.wrenchboltLogo}>
              <img
                loading="lazy"
                src={wrenchboltLogo}
                className={styles.logo}
                alt="Stacks + Joules Logo"
              />
            </NavLink>
          </div>
          <div className={styles.leftNav}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/team">Our Team</NavLink>
            <NavLink to="/curriculum">Curriculum</NavLink>
            <NavLink to="/become-a-student">Become A Student</NavLink>
            <NavLink to="/employment-partnerships">
              Employment Partnerships
            </NavLink>
            <NavLink to="/support-mentors">Support/Mentor</NavLink>
          </div>
          <div className={styles.rightNav}>
            <a href={donationLink}>
              <Button>Donate</Button>
            </a>
          </div>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile menu that appears when hamburger is clicked */}
        <div
          className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ``}`}
        >
          <div className={styles.closeMenu} onClick={toggleMenu}>
            <img src={backArrow} alt="Back" />
          </div>
          <div className={styles.horizontalLine} />
          <div onClick={() => setMenuOpen(false)}>
            <NavLink to="/">Home</NavLink>
          </div>
          <NavLink to="/team">Our Team</NavLink>
          <NavLink to="/curriculum">Curriculum</NavLink>
          <NavLink to="/employment-partnerships">
            Employment Partnerships
          </NavLink>
          <div className={styles.buttonContainer}>
            <NavLink to="/become-a-student" className={styles.button}>
              <Button color="white">BECOME A STUDENT</Button>
            </NavLink>
            <a href={donationLink}>
              <Button>Donate</Button>
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};
