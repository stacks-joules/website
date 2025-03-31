import React from 'react';
import { Card } from './Card';
import * as styles from './CardContainer.module.css';
import CardOne from '../assets/images/card-1.png';
import CardTwo from '../assets/images/card-2.png';
import CardThree from '../assets/images/card-3.png';

export const CardContainer: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <Card
        headerText="↳Become a student"
        imageSrc={CardOne}
        imageAlt="Card Image"
        content="Our goal is to equip students with valuable tech skills, engaging their creativity and strengths, no matter their prior experience."
        buttonText="Card Button"
        buttonLink="/"
      />
      <Card
        headerText="↳Employment partnerships"
        imageSrc={CardTwo}
        imageAlt="Card Image"
        content="Graduates receive support through internships, job placement, and career guidance from industry professionals."
        buttonText="EXPLORE PARTNERSHIPS"
        buttonLink="/"
      />
      <Card
        headerText="↳Make a donation"
        imageSrc={CardThree}
        imageAlt="Card Image"
        content="
Your donation helps support students and furthers our nonprofit mission to provide valuable education and opportunities.
Donate"
        buttonText="Card Button"
        buttonLink="/"
      />
    </div>
  );
};
