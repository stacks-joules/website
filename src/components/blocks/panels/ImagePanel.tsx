import React from 'react';
import * as styles from './ImagePanel.module.css';
import { imageMeta } from '../../../data/imageMeta';

interface ImagePanelProps {
  imageSrc: string;
  imageAlt: string;
  dropShadow?: boolean;
  /** Eager-load + high fetch priority. Set on above-the-fold hero images (LCP). */
  priority?: boolean;
}

export const ImagePanel: React.FC<ImagePanelProps> = ({
  imageSrc,
  imageAlt,
  dropShadow,
  priority,
}) => {
  // Intrinsic dimensions reserve space and prevent layout shift (CLS).
  const dims = imageMeta[imageSrc];
  // Above-the-fold hero: load eagerly with a high fetch priority for LCP.
  // Spread keeps fetchPriority out of literal JSX (eslint react/no-unknown-property).
  const loadProps = priority
    ? ({ loading: `eager`, fetchPriority: `high` } as const)
    : ({ loading: `lazy` } as const);
  return (
    <div className={styles.imageContainer}>
      <img
        decoding="async"
        {...loadProps}
        src={imageSrc}
        alt={imageAlt}
        width={dims?.width}
        height={dims?.height}
        className={`${styles.image} ${dropShadow ? styles.dropShadow : ``}`}
      />
    </div>
  );
};
