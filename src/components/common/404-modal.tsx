import React from 'react';
import * as styles from './404-modal.module.css';
import { ToggleSwitch } from './ToggleSwitch';

export const ErrorModal: React.FC<{
  warpSpeed: boolean;
  toggle: () => void;
}> = ({ warpSpeed, toggle }) => {
  return (
    <div className={styles.overlay}>
      <h1>404</h1>
      <p>
        You appear to have reached an uncharted area. Please check your url or
        {` `}
        <a href="/">return to the homepage</a>.
      </p>
      <ToggleSwitch
        checked={warpSpeed}
        onChange={toggle}
        offLabel="Cruise"
        onLabel="Warp"
      />
    </div>
  );
};
