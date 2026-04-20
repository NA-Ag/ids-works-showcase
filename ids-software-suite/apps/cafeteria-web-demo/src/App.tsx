import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CafeteriaApp, POSProvider } from '@ids/cafeteria-frontend';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* We use mode="mock" for the web demo so it runs completely in-browser */}
      <POSProvider mode="mock">
        <CafeteriaApp />
      </POSProvider>
    </BrowserRouter>
  );
};