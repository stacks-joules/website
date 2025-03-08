import React, { useState } from 'react';
import * as styles from './NewsletterSignup.module.css';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup for:', email);
    setEmail('');
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContainer}>
        <div className={styles.highlightText}>Stay In Touch</div>
        <div className={styles.newsletterTitle}>
          Keep Up With Stacks & Joules
        </div>
        <p className={styles.newsletterDescription}>
          An every-so-often email recapping the efforts of the Stacks + Joules
          team.
        </p>
        <form onSubmit={handleSubmit} className={styles.newsletterForm}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className={styles.emailInput}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Light it up!
          </button>
        </form>
      </div>
    </section>
  );
};
