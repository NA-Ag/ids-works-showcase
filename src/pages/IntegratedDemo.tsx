import React, { useEffect } from 'react';
import App from '@/demos/integrated/App';
import { LanguageProvider } from '@/demos/integrated/context/LanguageContext';

export const IntegratedDemo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};