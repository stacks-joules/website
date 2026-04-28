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
  const toggle = () => setIsExpanded(!isExpanded);

  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionItemHeader}
        onClick={toggle}
        style={{ cursor: `pointer` }}
      >
        <h3 className={styles.accordionItemTitle}>{title}</h3>
        <div onClick={(e) => e.stopPropagation()}>
          <PlusSymbol onClick={toggle} expanded={isExpanded} />
        </div>
      </div>
      <div
        className={
          styles.accordionItemText + ` ` + (isExpanded ? styles.expanded : ``)
        }
      >
        <ul>
          {textItems &&
            textItems.map((item, index) => (
              <li key={index + item.slice(5)}>{item}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

interface AccordianPanelProps {
  accordionItems: AccordionItemProps[];
}

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
          expanded={item.expanded}
        />
      ))}
    </div>
  );
};
