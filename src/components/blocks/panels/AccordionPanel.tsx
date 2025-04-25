import React, { useState } from 'react';
import * as styles from './AccordionPanel.module.css';
import { PlusSymbol } from '../../common/PlusSymbol';

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
      <div className={styles.accordionItemHeader}>
        <h3 className={styles.accordionItemTitle}>{title}</h3>
        <PlusSymbol onClick={() => setIsExpanded(!isExpanded)} />
      </div>
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
