import React, { useState } from 'react';
import * as styles from './ContactSection.module.css';
import { Logo } from '../common/Logo';
import Cityscape from '../../assets/images/contact-image.png';
import { Container } from '../layout/Container';

interface ContactInfo {
  name: string;
  phone: string;
  street: string;
  state: string;
}

const ContactLocation: React.FC<ContactInfo> = ({
  name,
  street,
  state,
  phone,
}) => (
  <div className={styles.contactInfo}>
    <h3 className={styles.locationName}>{name}</h3>
    <div className={styles.locationDetails}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bef0e5cd7e02f390d2e9f7db1558a293018a8fa7bcc39e7fb7013fff134e0a6?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
        alt="Location icon"
        className={styles.icon}
      />
      <div className={styles.locationDetailsColumn}>
        <div>{street}</div>
        <div>{state}</div>
      </div>
    </div>
    <div className={styles.locationDetails}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f850981521c75fd74d8846051462cdd1e368de2f30ab1f9685f2d794ffc9421?placeholderIfAbsent=true&apiKey=cc44f98401e848c18ff1a7327392e464"
        alt="Phone icon"
        className={styles.icon}
      />
      <div>{phone}</div>
    </div>
  </div>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: ``,
    lastName: ``,
    email: ``,
    phone: ``,
    message: ``,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Form submitted:`, formData);
  };

  return (
    <section className={styles.contactSection}>
      <Container>
        <div className={styles.contactContent}>
          <div className={styles.leftContent}>
            <div className={styles.contactTitle}>
              <Logo />
            </div>
            <p className={styles.contactDescription}>
              Have questions about our program or want to become a student? Get
              in touch!
            </p>
            <div className={styles.imageContainer}>
              <img src={Cityscape} alt="Cityscape" />
            </div>
            <div className={styles.locationContainer}>
              <ContactLocation
                name="New York"
                street="175 WEST 93RD STREET #3K"
                state="New York, NY 10001"
                phone="+1 917 555 5555"
              />
            </div>
          </div>
          <div className={styles.rightContent}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formTitle}>Get in touch</div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className={styles.nameField}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className={styles.nameField}
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
