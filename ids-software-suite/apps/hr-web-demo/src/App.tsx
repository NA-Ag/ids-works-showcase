import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HRApp, HRProvider } from '@ids/hr-frontend';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* We use mode="mock" for the web demo so it runs completely in-browser */}
      <HRProvider mode="mock">
        <HRApp />
      </HRProvider>
    </BrowserRouter>
  );
};