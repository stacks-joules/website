import React from 'react';
import NavLink from './NavLink';
import * as styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerText}>
          <div className={styles.welcomeText}>Welcome to</div>
          <div className={styles.brandName}>
            <span className={styles.stacks}>Stacks</span>
            <span className={styles.plus}>+</span>
            <span className={styles.joules}>JOULES</span>
          </div>
          <p className={styles.headerDescription}>
            Unleash Your Potential with our Specialized Curriculum in Computer
            Programming for Building Automation Controls.
          </p>
          <div className={styles.ctaContainer}>
            <NavLink to="/become-a-student">
              <button className={styles.primaryButton}>Become a Student</button>
            </NavLink>
            <NavLink to="/curriculum">
              <div className={styles.secondaryCta}>
                <span>Explore our Curriculum</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dca583711d64d997f93a882b13b4b182e4f0a5ccc5eb18c15d26e259202a44c8?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
                  className={styles.arrowIcon}
                  alt=""
                />
              </div>
            </NavLink>
          </div>
        </div>
        <div className={styles.headerImage}>
          <div className={styles.imagePlaceholder} />
        </div>
      </div>
    </header>
  );
};
