import React, { useState, useEffect } from 'react';
import * as styles from './ContactSection.module.css';
import { Logo } from '../common/Logo';
import Cityscape from '../../assets/images/contact-image.png';
import PhoneIcon from '../../assets/images/phone-icon.svg';
import LocationIcon from '../../assets/images/location-icon.svg';
import { Container } from '../layout/Container';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { SelectInput } from '../common/SelectInput';

const boardId = process.env.GATSBY_MONDAY_BOARD_ID;
const apiKey = process.env.GATSBY_MONDAY_API_KEY;

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
      <img src={LocationIcon} alt="Location icon" className={styles.icon} />
      <div>
        <div>{street}</div>
        <div>{state}</div>
      </div>
    </div>
    <div className={styles.locationDetails}>
      <img src={PhoneIcon} alt="Phone icon" className={styles.icon} />
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
    interest: ``,
  });

  const [formState, setFormState] = useState({
    submitting: false,
    success: false,
    error: false,
  });
  const [modalOpen, setModalOpen] = useState(false);

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
    console.log(formData);
  }, [formData]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ submitting: true, success: false, error: false });

    try {
      // Send form data to Monday.com
      await sendToMonday(formData);

      // Reset form and show success
      setFormData({
        firstName: ``,
        lastName: ``,
        email: ``,
        phone: ``,
        message: ``,
        interest: ``,
      });
      setModalOpen(true);
      setFormState({ submitting: false, success: true, error: false });
    } catch (error) {
      console.error(`Error submitting form:`, error);
      setFormState({ submitting: false, success: false, error: true });
    }
  };

  // Function to send form data to Monday.com via GraphQL
  const sendToMonday = async (formData: any) => {
    const columnValues = JSON.stringify({
      lead: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    const query = `
      mutation {
        create_item (
          board_id: ${boardId}, 
          item_name: "${formData.firstName} ${formData.lastName}", 
          column_values: ${JSON.stringify(columnValues)}
        ) {
          id
        }
      }
    `;

    const response = await fetch(`https://api.monday.com/v2`, {
      method: `POST`,
      headers: {
        Authorization: `${apiKey}`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    if (data.errors) {
      throw new Error(
        `Error submitting to Monday.com: ${data.errors[0].message}`,
      );
    }
    console.log(`Successfully created item in Monday.com:`, data);
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
            <form
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

              <div className={styles.formTitle}>Get in touch</div>

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
