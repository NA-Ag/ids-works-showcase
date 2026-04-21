import React from 'react';
import { BookOpen, LayoutDashboard, List, Barcode } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setView: (v: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="bg-vault-darkBlue border-b-4 border-vault-yellow px-6 py-4 flex items-center justify-between shadow-lg sticky top-0 z-20">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-vault-yellow rounded-xl flex items-center justify-center shadow-inner">
          <BookOpen className="text-vault-darkBlue w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-white">Biblioteca Escolar</h1>
          <p className="text-xs text-blue-200 font-mono uppercase tracking-widest">Sistema de Préstamos</p>
        </div>
      </div>
      <nav className="flex space-x-2 bg-white/10 p-1.5 rounded-xl border border-white/20">
        {[
          { id: 'dashboard', label: 'Panel', icon: LayoutDashboard }, 
          { id: 'catalogo', label: 'Catálogo', icon: List }
        ].map(item => (
          <button 
            key={item.id} 
            onClick={() => setView(item.id)} 
            className={`px-6 py-2 rounded-lg text-sm font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
              currentView === item.id 
                ? 'bg-vault-yellow text-vault-darkBlue shadow-md' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            <item.icon size={16} /> <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
};