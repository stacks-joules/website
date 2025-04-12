import React, { useState } from 'react';
import * as styles from './AccordionBlock.module.css';
import { ImagePanel } from '../panels/ImagePanel';
import { AccordionPanel } from '../panels/AccordionPanel';

interface AccordionBlockProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
  textOrientation?: 'left' | 'right' | 'center'; // Optional text orientation with default
  theme?: 'dark' | 'light';
}

export const AccordionBlock: React.FC<FeatureBlockProps> = ({
  title,
  imageSrc,
  imageAlt,
  accordionItems,
}) => {
  return (
    <div className={styles.accordionBlock}>
      <div className={styles.horizontalRule}></div>
      <h2 className={styles.accordionTitle}>{title}</h2>
      <div className={styles.accordionContainer}>
        <ImagePanel imageSrc={imageSrc} imageAlt={imageAlt} />
        <AccordionPanel accordionItems={accordionItems} />
      </div>
    </div>
  );
};
