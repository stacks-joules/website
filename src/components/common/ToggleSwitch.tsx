import React from 'react';
import * as styles from './ToggleSwitch.module.css';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  offLabel: string;
  onLabel: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  offLabel,
  onLabel,
  onChange,
  checked,
}) => {
  return (
    <div className={styles.toggleWrapper}>
      <span className={styles.label}>{onLabel}</span>
      <label className={styles.toggleSwitch}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={styles.slider}></span>
      </label>
      <span className={styles.label}>{offLabel}</span>
    </div>
  );
};
