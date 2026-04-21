import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ClinicApp, ClinicProvider } from '@ids/clinic-frontend';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* We use mode="mock" for the web demo so it runs completely in-browser */}
      <ClinicProvider mode="mock">
        <ClinicApp />
      </ClinicProvider>
    </BrowserRouter>
  );
};