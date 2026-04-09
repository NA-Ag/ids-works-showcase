import React from 'react';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import AcademicJourney from '../components/AcademicJourney';
import LifeAtIDS from '../components/LifeAtIDS';
import QuickLinks from '../components/QuickLinks';
import NewsEvents from '../components/NewsEvents';
import VideoSection from '../components/VideoSection';
import Accreditations from '../components/Accreditations';
import IDSConnect from '../components/IDSConnect';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <AcademicJourney />
      <LifeAtIDS />
      <QuickLinks />
      <IDSConnect />
      <NewsEvents />
      <Accreditations />
    </>
  );
};

export default Home;