import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScannerInput } from './components/ScannerInput';
import { Dashboard } from './components/Dashboard';
import { Catalog } from './components/Catalog';

export const LibraryApp: React.FC = () => {
  const [currentView, setView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <Header currentView={currentView} setView={setView} />
      
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <ScannerInput />
          
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'catalogo' && <Catalog />}
        </div>
      </main>
    </div>
  );
};