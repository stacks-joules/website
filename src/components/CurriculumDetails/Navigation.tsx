import React from 'react';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navContent}>
        <div className={styles.navItem}>Become A Student</div>
        <div className={styles.navItem}>Employment Partnerships</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90e984dccac0dee21d06cb24bdc8c9c524f08b8b626d50fa86a7c0941d0973ef?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
          className={styles.logo}
          alt="Company logo"
        />
        <div className={styles.navItem}>Curriculum</div>
        <div className={styles.navItem}>Meet the Team</div>
        <div className={styles.navItem}>Donate</div>
      </div>
    </nav>
  );
};
