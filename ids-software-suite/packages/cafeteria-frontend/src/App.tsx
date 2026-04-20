import React from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Ticket } from './components/Ticket';

export const CafeteriaApp: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-100 font-sans overflow-hidden">
      <Header onCorteDeCaja={() => alert('Corte de Caja próximamente...')} />
      
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 relative">
          <ProductGrid />
        </main>
        
        <aside className="w-96 shrink-0 relative z-20">
          <Ticket />
        </aside>
      </div>
    </div>
  );
};
