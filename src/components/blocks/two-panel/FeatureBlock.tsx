import React from 'react';
import * as styles from './FeatureBlock.module.css';
import { TextPanel } from '../panels/TextPanel';
import { ImagePanel } from '../panels/ImagePanel';

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
      <TextPanel
        title={title}
        description={description}
        buttonText={buttonText}
        buttonLink={buttonLink}
        textOrientation={textOrientation}
      />
      <ImagePanel imageSrc={imageSrc} imageAlt={imageAlt} />
    </div>
  );
};
