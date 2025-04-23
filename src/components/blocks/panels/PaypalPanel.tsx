import React from 'react';
import * as styles from './PaypalPanel.module.css';
import wrenchbolt from '../../../assets/images/wrenchbolt.svg';

export const PaypalPanel: React.FC = () => {
  return (
    <div className={styles.content}>
      <img className={styles.wrenchbolt} src={wrenchbolt} alt="Wrench Bolt" />
      <div className={styles.subHeadline}>Donate to</div>
      <h2 className={styles.title}>Stacks and Joules, Inc.</h2>
      <p className={styles.description}>
        Help us raise funds to train more student facilitators for our New York
        City building automation cohorts. Thank you.
      </p>
      <form method="POST">
        <span>$</span>
        <input type="number" name="amount" placeholder="Amount" />
        <div className={styles.amountContainer}></div>
        <input type="checkbox" name="recurring" />
        Make this a monthly donation.
        <p>Become a sustaining donor.</p>
        <div>
          <button type="submit">Pay with PayPal</button>
        </div>
        <div>
          <button type="submit">Pay with Credit Card</button>
        </div>
      </form>
    </div>
  );
};
