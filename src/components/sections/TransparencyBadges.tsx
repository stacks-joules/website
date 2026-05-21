import React from 'react';
import * as styles from './TransparencyBadges.module.css';

interface TransparencyBadgesProps {
  variant?: 'full' | 'compact';
}

const badges = [
  { name: 'Charity Navigator', subtitle: 'Four-Star Rating' },
  { name: 'Candid', subtitle: 'Platinum Transparency 2026' },
  { name: 'ImpactMatters', subtitle: 'Impact Rated Nonprofit' },
  { name: 'Catalogue for Philanthropy', subtitle: 'One of the Best' },
];

// Placeholder badge boxes. Swap each <li> for an <img src="/images/badge-..."> when actual badge files arrive.
export const TransparencyBadges: React.FC<TransparencyBadgesProps> = ({
  variant = 'full',
}) => {
  const rowClass =
    variant === 'compact' ? `${styles.row} ${styles.rowCompact}` : `${styles.row} ${styles.rowFull}`;

  return (
    <ul className={rowClass}>
      {badges.map((b) => (
        <li key={b.name} className={styles.badge}>
          <strong>{b.name}</strong>
          <span>{b.subtitle}</span>
        </li>
      ))}
    </ul>
  );
};
