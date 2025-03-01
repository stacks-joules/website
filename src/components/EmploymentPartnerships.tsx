import React from 'react';
import * as styles from './EmploymentPartnerships.module.css';
import Logo from './Logo';

interface EmployerPartnershipsProps {}

const EmployerPartnerships: React.FC<EmployerPartnershipsProps> = () => {
  const logos = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0a871db85124ebf09fe701024c28a9287f0639b6ffb326dca68b80a605451327?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464',
      className: styles.logo,
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4e147e0412d74d27d038e8c608bde4eea1f96202f9d889111faa8af208499b36?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464',
      className: styles.logo2,
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/54fd4708dd7a70b0299ecdf322670a5bf89be1073c91185d3f692a163f80a2d9?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464',
      className: styles.logo3,
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a24db244b4c5823dac06ba054b79360a65e864071eb1a0e1204b8d8cb6191d82?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464',
      className: styles.logo4,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Employer Partnerships</h2>
        <div className={styles.titleWrapper}>
          <h3 className={styles.subtitle}>— We worked with</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
      </div>
      <div className={styles.logoContainer}>
        {logos.map((logo, index) => (
          <Logo key={index} src={logo.src} className={logo.className} />
        ))}
        <div className={styles.fictionalLogo}>
          <div className={styles.shape}>
            <div className={styles.innerShape}>
              <div className={styles.innerMostShape} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerPartnerships;
