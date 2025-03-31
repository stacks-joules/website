import React from 'react';
import * as styles from './FeatureBlock.module.css';

interface FeatureBlockProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
  textOrientation?: 'left' | 'right' | 'center'; // Optional text orientation with default
  theme?: 'dark' | 'light';
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink, // Default link if not provided
  textOrientation = 'left', // Default to left alignment
  theme = 'dark',
}) => {
  // Determine if image should be on the left or right
  const imageOnLeft = textOrientation === 'right';
  const themeClass = theme === 'dark' ? styles.darkTheme : '';

  return (
    <div
      className={`${styles.featureBlock} ${
        imageOnLeft ? styles.imageLeft : ''
      } ${themeClass}`}
    >
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

      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
      </div>
    </div>
  );
};
