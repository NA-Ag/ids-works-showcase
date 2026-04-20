import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FinanceApp, FinanceProvider } from '@ids/finance-frontend';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* We use mode="mock" for the web demo so it runs completely in-browser */}
      <FinanceProvider mode="mock">
        <FinanceApp />
      </FinanceProvider>
    </BrowserRouter>
  );
};