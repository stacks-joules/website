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
    <div className={styles.card + ' ' + (border && styles.border)}>
      <div className={styles.cardHeader}>
        {headerText && <h3>{headerText}</h3>}
        {imageSrc && <img src={imageSrc} alt={imageAlt} />}
        {contentTitle && (
          <div className={styles.cardContentTitle}>{contentTitle}</div>
        )}
        <div className={styles.cardContent}>{content}</div>
        {buttonText && (
          <Link to={buttonLink} style={{ textDecoration: 'none' }}>
            <button className={styles.button}>{buttonText}</button>
          </Link>
        )}
      </div>
    </div>
  );
};
