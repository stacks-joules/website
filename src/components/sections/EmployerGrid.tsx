import React from 'react';
import * as styles from './EmployerGrid.module.css';
import { Container } from '../layout/Container';
import { Block } from '../blocks/block/Block';

interface EmployerGridProps {
  title?: string;
  description?: string;
  employers: string[];
}

/**
 * Maps each employer key (as listed in the page `employers` arrays) to its
 * logo asset slug and full display name shown on hover/focus.
 * Logo assets live in /public/images/employers/{slug}-gray.png and -color.png.
 */
const LOGO_MAP: Record<string, { slug: string; name: string }> = {
  Alberio: { slug: `01`, name: `Albireo Energy` },
  'Automated Logic': { slug: `02`, name: `Automated Logic` },
  Bosch: { slug: `03`, name: `Bosch` },
  Climatec: { slug: `04`, name: `Climatec` },
  ConEd: { slug: `05`, name: `Con Edison` },
  'Distech Controls': { slug: `06`, name: `Distech Controls` },
  'Distinctive Windows': { slug: `07`, name: `Distinctive Windows` },
  'Dual Fuel': { slug: `08`, name: `Dual Fuel` },
  'Johnson Controls': { slug: `09`, name: `Johnson Controls` },
  'Mr Air NYC': { slug: `10`, name: `Mr Air NYC` },
  RGSB: { slug: `11`, name: `RGBS Energy` },
  'Richards Heating & Plumbing': {
    slug: `12`,
    name: `Richards Heating & Plumbing`,
  },
  'Richmar Controls & Service Company': {
    slug: `13`,
    name: `Richmar Controls & Service Company`,
  },
  'SB Building Solutions': { slug: `14`, name: `SB Building Solutions` },
  'Soulful Synergy': { slug: `15`, name: `Soulful Synergy` },
  'Stratco Property Group': { slug: `16`, name: `Stratco Property Group` },
  'T.M. Bier and Associates': { slug: `17`, name: `T.M. Bier and Associates` },
  'TEC Systems': { slug: `18`, name: `TEC Systems` },
  Trane: { slug: `19`, name: `Trane` },
  'Walker Hotels Tribeca': { slug: `20`, name: `Walker Hotels Tribeca` },
};

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
                {employers.map((employer) => {
                  const logo = LOGO_MAP[employer];
                  if (!logo) {
                    // Graceful fallback: no logo mapped -> show the name as text.
                    return (
                      <li key={employer} className={styles.gridItem}>
                        <span className={styles.fallbackText}>{employer}</span>
                      </li>
                    );
                  }
                  const base = `/images/employers/${logo.slug}`;
                  return (
                    <li key={employer} className={styles.gridItem}>
                      <span
                        className={styles.card}
                        tabIndex={0}
                        aria-label={logo.name}
                      >
                        <span className={styles.tooltip} role="tooltip">
                          {logo.name}
                        </span>
                        <span className={styles.logoWrap}>
                          <img
                            className={styles.logo}
                            src={`${base}-gray.png`}
                            alt={logo.name}
                            loading="lazy"
                            decoding="async"
                          />
                          <img
                            className={styles.logoColor}
                            src={`${base}-color.png`}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </Block>
  );
};
