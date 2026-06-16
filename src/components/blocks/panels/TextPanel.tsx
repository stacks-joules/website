import React from 'react';
import * as styles from './TextPanel.module.css';
import { Button } from '../../common/Button';
interface TextPanelProps {
  caption?: string;
  title?: string;
  smallTitle?: string;
  description: string;
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
  textOrientation?: 'left' | 'right' | 'center'; // Optional text orientation with default
  theme?: 'dark' | 'light';
  /** Heading level for `title`. Defaults to h1; pass 'h2' on pages where the
   *  SectionHeader band is already the page's single h1. Visual is unchanged —
   *  the .title class carries the full headline typography either way. */
  titleAs?: 'h1' | 'h2';
}

export const TextPanel: React.FC<TextPanelProps> = ({
  caption,
  title,
  smallTitle,
  description,
  buttonText,
  buttonLink,
  titleAs = `h1`,
}) => {
  const TitleTag = titleAs;
  return (
    <div className={`${styles.content}`}>
      {caption && <p className={styles.caption}>{caption}</p>}
      {smallTitle && <h2>{smallTitle}</h2>}
      {title && <TitleTag className={styles.title}>{title}</TitleTag>}
      <p style={{ whiteSpace: `pre-line` }}>{description}</p>

      {/* Render button only if buttonText is provided */}
      {buttonText && (
        <a href={buttonLink}>
          <Button color="white">{buttonText}</Button>
        </a>
      )}
    </div>
  );
};
