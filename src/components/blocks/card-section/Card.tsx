import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Card.module.css';

interface CardProps {
  border?: boolean;
  headerText?: string;
  imageSrc?: string;
  imageAlt?: string;
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
          {headerText && <div className={styles.headerText}>{headerText}</div>}
        </div>
      )}

      {imageSrc && (
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}

      <div className={styles.contentContainer}>
        {contentTitle && (
          <div className={styles.cardContentTitle}>{contentTitle}</div>
        )}

        <div className={styles.cardContent}>{content}</div>
      </div>

      {buttonText && (
        <div className={styles.buttonContainer}>
          <Link to={buttonLink ?? ``} style={{ textDecoration: `none` }}>
            <button className={styles.button}>{buttonText}</button>
          </Link>
        </div>
      )}
    </div>
  );
};
