import React, { useState } from 'react';
import * as styles from './NewsletterSignup.module.css';
import { Container } from '../layout/Container';
import { Modal } from '../common/Modal';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create form data object for submission
    const formData = new FormData(e.target as HTMLFormElement);

    // Using fetch to submit the form data
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        console.log('Form successfully submitted');
        setIsModalOpen(true);
        setEmail('');
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
          <form
            onSubmit={handleSubmit}
            className={styles.newsletterForm}
            name="newsletter-signup"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="newsletter-signup" />
            <div hidden>
              <input name="bot-field" />
            </div>
            <div className={styles.newsletterFormContent}>
              <label className={styles.emailInputLabel} htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@gmail.com"
                className={styles.emailInput}
                required
              />
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thank you for signing up!"
      >
        <p>
          You will receive an email shortly with the latest news and updates
          from the Stacks + Joules team.
        </p>
      </Modal>
    </section>
  );
};
