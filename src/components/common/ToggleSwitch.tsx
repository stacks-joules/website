import React from 'react';
import * as styles from './ToggleSwitch.module.css';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <div className={styles.toggleWrapper}>
      <span className={styles.label}>Cruise</span>
      <label className={styles.toggleSwitch}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={styles.slider}></span>
      </label>
      <span className={styles.label}>Warp</span>
    </div>
  );
};

export default ToggleSwitch;
