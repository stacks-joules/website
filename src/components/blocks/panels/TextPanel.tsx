import React from 'react';
import * as styles from './TextPanel.module.css';
import { Button } from '../../common/Button';
interface TextPanelProps {
  caption?: string;
  title?: string;
  smallTitle?: string;
  description: React.ReactNode;
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
  textOrientation?: 'left' | 'right' | 'center'; // Optional text orientation with default
  theme?: 'dark' | 'light';
}

export const TextPanel: React.FC<TextPanelProps> = ({
  caption,
  title,
  smallTitle,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={`${styles.content}`}>
      {caption && <h3>{caption}</h3>}
      {smallTitle && <h2 className={styles.smallTitle}>{smallTitle}</h2>}
      {title && <h1 className={styles.title}>{title}</h1>}
      <p className={styles.description}>{description}</p>

      {/* Render button only if buttonText is provided */}
      {buttonText && (
        <a href={buttonLink}>
          <Button color="white">{buttonText}</Button>
        </a>
      )}
    </div>
  );
};
