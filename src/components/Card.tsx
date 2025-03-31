import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Card.module.css';

interface CardProps {
  headerText: string;
  imageSrc: string;
  imageAlt: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

export const Card: React.FC<CardProps> = ({
  headerText,
  imageSrc,
  imageAlt,
  content,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{headerText}</h3>
        <img src={imageSrc} alt={imageAlt} />
        <div className={styles.cardContent}>{content}</div>
        <div className={styles.buttonContainer}>
          <Link to={buttonLink} style={{ textDecoration: 'none' }}>
            <button className={styles.button}>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
