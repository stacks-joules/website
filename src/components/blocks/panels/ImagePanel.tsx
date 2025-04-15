import React from 'react';
import * as styles from './ImagePanel.module.css';

interface ImagePanelProps {
  imageSrc: string;
  imageAlt: string;
  dropShadow?: boolean;
}

export const ImagePanel: React.FC<ImagePanelProps> = ({
  imageSrc,
  imageAlt,
  dropShadow,
}) => {
  return (
    <div className={styles.imageContainer}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`${styles.image} ${dropShadow ? styles.dropShadow : ''}`}
      />
    </div>
  );
};
