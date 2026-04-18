import React from 'react';
import { Hero } from '../components/Hero';
import { Catalog } from '../components/Catalog';
import { ValueProp } from '../components/ValueProp';
import { PremiumWeb } from '../components/PremiumWeb';
import { FAQ } from '../components/FAQ';
import { HowItWorks } from '../components/HowItWorks';
import { FinalCTA } from '../components/FinalCTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueProp />
      <HowItWorks />
      <Catalog />
      <PremiumWeb />
      <FAQ />
      <FinalCTA />
    </>
  );
};