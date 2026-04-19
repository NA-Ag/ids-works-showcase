import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AdminApp, DataProvider } from '@ids/admin-frontend';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* We use mode="mock" for the web demo so it doesn't try to use the E2E api */}
      <DataProvider mode="mock">
        <AdminApp />
      </DataProvider>
    </BrowserRouter>
  );
};