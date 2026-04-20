import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DisciplineApp, DisciplineProvider } from '@ids/discipline-frontend';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* We use mode="mock" for the web demo so it runs completely in-browser */}
      <DisciplineProvider mode="mock">
        <DisciplineApp />
      </DisciplineProvider>
    </BrowserRouter>
  );
};