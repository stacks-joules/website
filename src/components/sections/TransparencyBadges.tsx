import React from 'react';
import * as styles from './TransparencyBadges.module.css';

interface TransparencyBadgesProps {
  variant?: 'full' | 'compact';
}

// Only badges Stacks+Joules actually holds, each linking to its public,
// verifiable profile. (Dropped the placeholder ImpactMatters — discontinued
// after Charity Navigator acquired it in 2020 — and Catalogue for Philanthropy,
// which is a DC-region program, not relevant to a NYC nonprofit.)
const badges = [
  {
    name: `Charity Navigator`,
    subtitle: `Three-Star Rating`,
    href: `https://www.charitynavigator.org/ein/822358571`,
  },
  {
    name: `Candid`,
    subtitle: `Gold Transparency 2026`,
    href: `https://www.guidestar.org/profile/82-2358571`,
  },
];

export const TransparencyBadges: React.FC<TransparencyBadgesProps> = ({
  variant = `full`,
}) => {
  const rowClass =
    variant === `compact`
      ? `${styles.row} ${styles.rowCompact}`
      : `${styles.row} ${styles.rowFull}`;

  return (
    <ul className={rowClass}>
      {badges.map((b) => (
        <li key={b.name} className={styles.badge}>
          <a
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${b.name} — ${b.subtitle} (opens in a new tab)`}
          >
            <strong>{b.name}</strong>
            <span>{b.subtitle}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
