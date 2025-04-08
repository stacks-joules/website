import React from 'react';
import { Card } from './Card';
import * as styles from './CardContainer.module.css';

export const CardContainer: React.FC = ({ cards }) => {
  return (
    <div className={styles.cardContainer}>
      {cards.map((card) => (
        <Card
          key={card.headerText}
          headerText={card.headerText}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          content={card.content}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
        />
      ))}
    </div>
  );
};
