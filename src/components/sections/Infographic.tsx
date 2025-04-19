import React from 'react';
import * as styles from './Infographic.module.css';
import { Container } from '../layout/Container';
import { Block } from '../blocks/block/Block';
interface InfographicProps {
  title: string;
  cards: [];
}

export const InfographicCard: React.FC<InfographicCardProps> = ({
  title,
  number,
  symbol,
}) => {
  return (
    <div className={styles.infographicCard}>
      <div className={styles.infographicCardStat}>
        {number}
        <span>{symbol}</span>
      </div>
      <div className={styles.infographicCardTitle}>{title}</div>
    </div>
  );
};

export const Infographic: React.FC<InfographicProps> = ({ title, cards }) => {
  return (
    <Block variation="light" paddingY="0px">
      <section>
        <Container>
          <div className={styles.infographicContainer}>
            <div className={styles.infographicContent}>
              <div className={styles.infographicTitle}>
                <div>{title}</div>
              </div>
              <div className={styles.infographicCardContainer}>
                {cards.map((card) => (
                  <InfographicCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Block>
  );
};
