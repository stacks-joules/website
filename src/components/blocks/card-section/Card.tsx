import React from 'react';
import * as styles from './Card.module.css';
import { Button } from '../../common/Button';

interface CardProps {
  /** React reserved key — declared explicitly so TS allows it via spread */
  key?: string;
  border?: boolean;
  headerText?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** CSS object-position for the image crop, e.g. '50% 30%' */
  imagePosition?: string;
  contentTitle?: string;
  content: string;
  buttonText?: string;
  buttonLink?: string;
}

export const Card: React.FC<CardProps> = ({
  border,
  headerText,
  imageSrc,
  imageAlt,
  imagePosition,
  contentTitle,
  content,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className={`${styles.card} ${border ? styles.border : ``} ${
        headerText ? `` : styles.noHeader
      }`}
    >
      {headerText && (
        <div className={styles.cardHeader}>
          {headerText && <div>{headerText}</div>}
        </div>
      )}

      {imageSrc && (
        <div className={styles.cardImageWrap}>
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className={styles.cardImage}
            style={
              imagePosition ? { objectPosition: imagePosition } : undefined
            }
          />
        </div>
      )}

      <div className={styles.cardContentBlock}>
        {contentTitle && (
          <div className={styles.cardContentTitle}>{contentTitle}</div>
        )}

        <div className={styles.cardContent}>{content}</div>
      </div>

      {buttonText && (
        <div className={styles.cardButtonWrap}>
          <a href={buttonLink ?? ``} style={{ textDecoration: `none` }}>
            <Button color="white">{buttonText}</Button>
          </a>
        </div>
      )}
    </div>
  );
};
