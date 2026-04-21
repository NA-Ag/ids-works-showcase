import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LibraryApp, LibraryProvider } from '@ids/library-frontend';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* We use mode="mock" for the web demo so it runs completely in-browser */}
      <LibraryProvider mode="mock">
        <LibraryApp />
      </LibraryProvider>
    </BrowserRouter>
  );
};