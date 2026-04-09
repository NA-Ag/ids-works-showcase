import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Pricing } from '../components/Pricing';
import { Security } from '../components/Security';
import { TierComparison } from '../components/TierComparison';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Security />
      <Pricing />
      <TierComparison />
      <Contact />
    </>
  );
};