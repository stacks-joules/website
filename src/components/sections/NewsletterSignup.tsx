import React, { useState } from 'react';
import * as styles from './NewsletterSignup.module.css';
import { Container } from '../layout/Container';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState(``);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    // Forward the honeypot value so the function can reject bot fills;
    // real users leave the hidden field empty.
    const form = e.target as HTMLFormElement;
    const botField =
      form.querySelector<HTMLInputElement>(`input[name="bot-field"]`)?.value ??
      ``;

    // Creates a Givebutter contact tagged "newsletter" via our function.
    fetch(`/.netlify/functions/subscribeNewsletter`, {
      method: `POST`,
      headers: { 'Content-Type': `application/json` },
      body: JSON.stringify({ email, 'bot-field': botField }),
    })
      .then((response) => {
        // fetch resolves on 4xx/5xx too — only a 2xx is a real signup.
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        setIsModalOpen(true);
        setEmail(``);
      })
      .catch((error) => {
        console.error(`Form submission error:`, error);
        setHasError(true);
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
            An every-so-often email recapping the efforts of the Stacks+Joules
            team.
          </p>
          <form
            onSubmit={handleSubmit}
            className={styles.newsletterForm}
            name="newsletter-signup"
          >
            <div hidden>
              <input name="bot-field" />
            </div>
            {hasError && (
              <div role="alert">
                There was an error signing you up. Please try again.
              </div>
            )}
            <div>
              <label
                className={styles.emailInputLabel}
                htmlFor="newsletter-email"
              >
                Email Address
              </label>
              <input
                type="email"
                name="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@email.com"
                className={styles.emailInput}
                required
                id="newsletter-email"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="off"
                autoCorrect="off"
              />
            </div>
            <Button type="submit" color="black" disabled={isSubmitting}>
              {isSubmitting ? `SUBMITTING...` : `SUBMIT`}
            </Button>
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
          from the Stacks+Joules team.
        </p>
      </Modal>
    </section>
  );
};
