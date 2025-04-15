import React, { useState } from 'react';
import * as styles from './NewsletterSignup.module.css';
import { Container } from '../layout/Container';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState(``);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log(`Newsletter signup for:`, email);
    setEmail(``);
  };

  return (
    <section className={styles.newsletterSection}>
      <Container>
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletterTitle}>Get The Newsletter</div>
          <p className={styles.newsletterDescription}>
            An every-so-often email recapping the efforts of the Stacks + Joules
            team.
          </p>
          <form onSubmit={handleSubmit} className={styles.newsletterForm}>
            <div className={styles.newsletterFormContent}>
              <label className={styles.emailInputLabel} htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="emai@gmail.com"
                className={styles.emailInput}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};
