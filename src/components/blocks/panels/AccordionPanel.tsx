import React, { useState } from 'react';
import * as styles from './AccordionPanel.module.css';

interface AccordionItemProps {
  title: string;
  textItems: string[];
  expanded?: boolean;
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

export const AccordionPanel: React.FC<AccordianPanelProps> = ({
  accordionItems,
}) => {
  return (
    <div className={styles.content}>
      {accordionItems.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          textItems={item.textItems}
        />
      ))}
    </div>
  );
};
