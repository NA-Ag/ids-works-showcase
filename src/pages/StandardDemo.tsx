import React, { useEffect } from 'react';
import App from '@/demos/standard/App';
import { LanguageProvider } from '@/demos/standard/context/LanguageContext';

export const StandardDemo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};