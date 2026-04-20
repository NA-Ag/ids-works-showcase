import React, { useState, useEffect } from 'react';
import { Store, Clock as ClockIcon, FileText } from 'lucide-react';

interface HeaderProps {
  onCorteDeCaja: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCorteDeCaja }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-vault-darkBlue text-white px-6 py-4 flex items-center justify-between shadow-lg z-10 relative border-b-4 border-vault-yellow">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-vault-yellow rounded-xl flex items-center justify-center shadow-inner">
          <Store className="text-vault-darkBlue w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight">Cooperativa Escolar</h1>
          <p className="text-xs text-blue-200 font-mono uppercase tracking-widest">Punto de Venta</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="text-right hidden md:block">
          <p className="text-sm font-bold">{new Date().toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
          <p className="text-xs text-blue-200 font-mono flex items-center justify-end gap-1"><ClockIcon size={12} /> {time}</p>
        </div>
        <button 
          onClick={onCorteDeCaja}
          className="bg-white/10 hover:bg-vault-yellow hover:text-vault-darkBlue text-white px-6 py-3 rounded-lg text-sm font-black uppercase tracking-widest transition-all flex items-center space-x-2 border border-white/20 shadow-md active:scale-95"
        >
          <FileText size={18} />
          <span className="hidden sm:inline">Corte de Caja</span>
        </button>
      </div>
    </header>
  );
};
