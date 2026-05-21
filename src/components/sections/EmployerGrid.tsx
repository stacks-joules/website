import React from 'react';
import * as styles from './EmployerGrid.module.css';
import { Container } from '../layout/Container';
import { Block } from '../blocks/block/Block';

interface EmployerGridProps {
  title?: string;
  description?: string;
  employers: string[];
}

export const EmployerGrid: React.FC<EmployerGridProps> = ({
  title,
  description,
  employers,
}) => {
  return (
    <Block variation="light" paddingY="0px" singleColumn>
      <section>
        <Container>
          <div className={styles.gridContainer}>
            <div className={styles.gridContent}>
              {title && <div className={styles.gridTitle}>{title}</div>}
              {description && (
                <div className={styles.gridDescription}>{description}</div>
              )}
              <ul className={styles.grid}>
                {employers.map((name) => (
                  <li key={name} className={styles.gridItem}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </Block>
  );
};
