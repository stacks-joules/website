import React from 'react';
import * as styles from './AccordionBlock.module.css';
import { ImagePanel } from '../panels/ImagePanel';
import { AccordionPanel } from '../panels/AccordionPanel';
import { Container } from '../../layout/Container';

interface AccordionBlockProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string; // Optional button text
  accordionItems: [];
}

export const AccordionBlock: React.FC<AccordionBlockProps> = ({
  title,
  imageSrc,
  imageAlt,
  accordionItems,
}) => {
  return (
    <div className={styles.accordionBlock}>
      <Container>
        <div className={styles.horizontalRule}></div>
        <h2 className={styles.accordionTitle}>{title}</h2>
        <div className={styles.accordionContainer}>
          <ImagePanel imageSrc={imageSrc} imageAlt={imageAlt} />
          <AccordionPanel accordionItems={accordionItems} />
        </div>
      </Container>
    </div>
  );
};
