import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Card.module.css';
import { Button } from '../../common/Button';
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
          {headerText && <div>{headerText}</div>}
        </div>
      )}

      {imageSrc && (
        <div>
          <img src={imageSrc} alt={imageAlt} className={styles.cardImage} />
        </div>
      )}

      <div>
        {contentTitle && (
          <div className={styles.cardContentTitle}>{contentTitle}</div>
        )}

        <div className={styles.cardContent}>{content}</div>
      </div>

      {buttonText && (
        <div>
          <Link to={buttonLink ?? ``} style={{ textDecoration: `none` }}>
            <Button color="white">{buttonText}</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
