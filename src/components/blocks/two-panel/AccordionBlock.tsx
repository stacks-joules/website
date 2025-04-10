import React, { useState } from 'react';
import * as styles from './AccordionBlock.module.css';

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

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  textItems,
  expanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  return (
    <div className={styles.accordionItem}>
      <h3 className={styles.accordionItemTitle}>
        {title}
        <span
          className={styles.accordionItemArrow}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '-' : '+'}
        </span>
      </h3>
      <p
        className={
          styles.accordionItemText + ' ' + (isExpanded ? styles.expanded : '')
        }
      >
        <ul>{textItems && textItems.map((item) => <li>{item}</li>)}</ul>
      </p>
    </div>
  );
};

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
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        </div>
        <div className={styles.accordionItems}>
          {accordionItems.map((item) => (
            <AccordionItem
              key={item.title}
              title={item.title}
              textItems={item.textItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
