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
        {title && <div className={styles.title}>{title}</div>}
        {description && <div className={styles.description}>{description}</div>}
        <div className={styles.cardContainerContent}>{children}</div>
      </Container>
    </div>
  );
};
