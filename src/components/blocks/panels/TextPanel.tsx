import React from 'react';
import * as styles from './TextPanel.module.css';

interface TextPanelProps {
  title: string;
  description: React.ReactNode;
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
  textOrientation?: 'left' | 'right' | 'center'; // Optional text orientation with default
  theme?: 'dark' | 'light';
}

export const TextPanel: React.FC<TextPanelProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  textOrientation = `right`,
}) => {
  return (
    <div
      className={`${styles.content} ${
        styles[
          `align${
            textOrientation.charAt(0).toUpperCase() + textOrientation.slice(1)
          }`
        ]
      }`}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      {/* Render button only if buttonText is provided */}
      {buttonText && (
        <a href={buttonLink} className={styles.button}>
          {buttonText}
        </a>
      )}
    </div>
  );
};
