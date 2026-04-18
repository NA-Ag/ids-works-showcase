import React from 'react';
import { Hero } from '../components/Hero';
import { Catalog } from '../components/Catalog';
import { ValueProp } from '../components/ValueProp';
import { PremiumWeb } from '../components/PremiumWeb';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueProp />
      <Catalog />
      <PremiumWeb />
      <FAQ />
      <Contact />
    </>
  );
};