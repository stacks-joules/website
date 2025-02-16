import React from 'react';
import styles from './ContactSection.module.css';

export const ContactSection: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.leftContent}>
        <div className={styles.title}>
          <h2 className={styles.mainTitle}>Level Up at Stacks & Joules</h2>
          <p className={styles.subtitle}>
            Have questions about our program or want to become a student? Get in
            touch!
          </p>
        </div>
        <div className={styles.image} aria-hidden="true" />
        <div className={styles.locationInfo}>
          <div className={styles.locationColumn}>
            <h3 className={styles.cityName}>New York</h3>
            <div className={styles.addressBlock}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea4781baef06abb854b6985d548f9de3fe955aaf49f50dd4c8a98828fbe04ddc?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
                className={styles.icon}
                alt=""
              />
              <address className={styles.address}>
                100 New York St
                <br />
                New York, NY 10001
              </address>
            </div>
            <div className={styles.phoneBlock}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d7b76966776149eb849871f444f5223e6ae53439c730ab2a2604095553ccc0?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
                className={styles.icon}
                alt=""
              />
              <a href="tel:+19175555555" className={styles.phoneNumber}>
                +1 917 555 5555
              </a>
            </div>
          </div>
          <div className={styles.locationColumn}>
            <h3 className={styles.cityName}>Los Angeles</h3>
            <div className={styles.addressBlock}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/27628de04b5bd125dd20e1646d9b257f268d6dc46fbcdc051aad13a5a1b2d580?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
                className={styles.icon}
                alt=""
              />
              <address className={styles.address}>
                100 Los Angeles St
                <br />
                Los Angeles, CA 90210
              </address>
            </div>
            <div className={styles.phoneBlock}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d7b76966776149eb849871f444f5223e6ae53439c730ab2a2604095553ccc0?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
                className={styles.icon}
                alt=""
              />
              <a href="tel:+13105555555" className={styles.phoneNumber}>
                +1 310 555 5555
              </a>
            </div>
          </div>
        </div>
      </div>
      <form className={styles.contactForm}>
        <h2 className={styles.formTitle}>Get in touch</h2>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="firstName" className={styles.label}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className={styles.input}
              placeholder="Your first name"
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="lastName" className={styles.label}>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className={styles.input}
              placeholder="Your last name"
            />
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="Your email address"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className={styles.input}
            placeholder="Your phone number"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            className={styles.textarea}
            placeholder="Your message"
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </section>
  );
};
