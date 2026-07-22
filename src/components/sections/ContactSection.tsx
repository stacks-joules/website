import React, { useState, useEffect, useRef } from 'react';
import * as styles from './ContactSection.module.css';
import { Logo } from '../common/Logo';
import { Container } from '../layout/Container';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { SelectInput } from '../common/SelectInput';

const Cityscape = `/images/contact-image.webp`;
const LocationIcon = `/images/location-icon.svg`;
interface ContactInfo {
  name: string;
  street: string;
  state: string;
}

const ContactLocation: React.FC<ContactInfo> = ({ name, street, state }) => (
  <div className={styles.contactInfo}>
    <h3 className={styles.locationName}>{name}</h3>
    <div className={styles.locationDetails}>
      <img src={LocationIcon} alt="Location icon" className={styles.icon} />
      <div>
        <div>{street}</div>
        <div>{state}</div>
      </div>
    </div>
  </div>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: ``,
    lastName: ``,
    email: ``,
    message: ``,
    interest: ``,
  });

  const [formState, setFormState] = useState({
    submitting: false,
    success: false,
    error: false,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const path = window.location.pathname.toLowerCase();

    if (path.includes(`employment-partnerships`)) {
      setFormData((prev) => ({ ...prev, interest: `Employer` }));
    } else if (path.includes(`become-a-student`)) {
      setFormData((prev) => ({ ...prev, interest: `Student` }));
    } else if (path.includes(`support-mentors`)) {
      setFormData((prev) => ({ ...prev, interest: `Mentor` }));
    } else {
      setFormData((prev) => ({ ...prev, interest: `` }));
    }
  }, []);

  // In-page "Get in touch" / #contact CTAs land on the top of the footer by
  // default — the logo and blurb. On mobile that buries the form below the
  // fold, so scroll straight to the form instead. On every device, flicker
  // the form's "Get in touch" title in the active accent on arrival.
  useEffect(() => {
    const flickerTitle = () => {
      const el = titleRef.current;
      if (!el) return;
      // Drop then re-add across two frames so the animation restarts cleanly
      // on repeat clicks (a same-frame re-add wouldn't replay it).
      el.classList.remove(styles.flicker);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => el.classList.add(styles.flicker));
      });
    };

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.(
        `a[href$="#contact"]`,
      );
      if (!anchor) return;

      const isMobile = window.matchMedia(`(max-width: 768px)`).matches;
      const dest = isMobile
        ? formRef.current
        : document.getElementById(`contact`);
      if (!dest) return;

      e.preventDefault();
      dest.scrollIntoView({ behavior: `smooth`, block: `start` });
      flickerTitle();
    };

    document.addEventListener(`click`, handleClick);
    return () => document.removeEventListener(`click`, handleClick);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ submitting: true, success: false, error: false });

    // Forward the honeypot value so the function can reject bot fills;
    // real users leave the hidden field empty.
    const botField =
      formRef.current?.querySelector<HTMLInputElement>(
        `input[name="bot-field"]`,
      )?.value ?? ``;

    const payload = {
      ...formData,
      'bot-field': botField,
    };

    try {
      const response = await fetch(`/.netlify/functions/submitForm`, {
        method: `POST`,
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();

      if (data?.success || data?.item?.id) {
        setFormData({
          firstName: ``,
          lastName: ``,
          email: ``,
          message: ``,
          interest: ``,
        });
        setModalOpen(true);
        setFormState({ submitting: false, success: true, error: false });
      } else {
        throw new Error(`Unexpected response from backend`);
      }
    } catch (error) {
      console.error(`Error submitting form:`, error);
      setFormState({ submitting: false, success: false, error: true });
    }
  };

  // Easter egg: clicking the footer logo takes over the page with the
  // logo-sprite tunnel, tinted to the active accent. three.js is only
  // fetched on first click via dynamic import. Click-only on all devices.
  const handlePlusClick = () => {
    import(`../../lib/logoTunnel`)
      .then((m) => m.openLogoTunnel())
      .catch((err) => console.error(`Failed to load logo tunnel:`, err));
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <Container>
        <div className={styles.contactContent}>
          <div className={styles.leftContent}>
            <div className={styles.contactTitle}>
              <Logo handleClick={handlePlusClick} />
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
                state="New York, NY 10025"
              />
            </div>
          </div>
          <div className={styles.rightContent}>
            <form
              ref={formRef}
              className={styles.contactForm}
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>

              <div ref={titleRef} className={styles.formTitle}>
                Get in touch
              </div>

              {formState.success && (
                <div>
                  Thank you for your message! We will get back to you soon.
                </div>
              )}

              {formState.error && (
                <div>
                  There was an error submitting the form. Please try again.
                </div>
              )}

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
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  placeholder="your@email.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="interest">Interest</label>
                <SelectInput
                  choice="interest"
                  options={[
                    { name: `Student/Apply`, value: `Student` },
                    { name: `Industry/Hiring`, value: `Employer` },
                    { name: `Support/Volunteer`, value: `Mentor` },
                    { name: `Other`, value: `Other` },
                  ]}
                  selectedOption={formData.interest}
                  onChange={handleChange}
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
              <Button
                type="submit"
                color="white"
                disabled={formState.submitting}
              >
                {formState.submitting ? `SUBMITTING...` : `SUBMIT`}
              </Button>
            </form>
          </div>
        </div>
      </Container>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Thanks for reaching out!"
      >
        <p>We will get back to you soon.</p>
      </Modal>
    </section>
  );
};
