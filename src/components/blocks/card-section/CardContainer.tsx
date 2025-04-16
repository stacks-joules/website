import React from 'react';
import * as styles from './CardContainer.module.css';
import { Container } from '../../layout/Container';

interface CardContainerProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className={styles.cardContainer}>
      <Container>
        {title && <h2>{title}</h2>}
        {description && <div>{description}</div>}
        <div className={styles.cardContainerContent}>{children}</div>
      </Container>
    </div>
  );
};
