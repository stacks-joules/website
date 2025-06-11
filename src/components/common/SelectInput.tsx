import React from 'react';
import * as styles from './SelectInput.module.css';

interface SelectInputProps {
  options: { name: string; value: string }[];
  choice: string;
  selectedOption: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  options,
  choice,
  selectedOption,
  onChange,
}) => {
  return (
    <div className={styles.selectContainer}>
      {options.map((option) => (
        <div className={styles.selectOption} key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={choice}
            key={option.value}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={onChange}
          />
          <label htmlFor={option.value}>{option.name}</label>
        </div>
      ))}
    </div>
  );
};
