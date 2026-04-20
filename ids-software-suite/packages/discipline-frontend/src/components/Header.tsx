import React, { useState, useEffect } from 'react';
import { ShieldAlert, Clock } from 'lucide-react';

export const Header: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-vault-darkBlue text-white px-6 py-4 flex items-center justify-between shadow-lg z-10 relative border-b-4 border-vault-yellow no-print">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-vault-yellow rounded-xl flex items-center justify-center shadow-inner">
          <ShieldAlert className="text-vault-darkBlue w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight">Prefectura Escolar</h1>
          <p className="text-xs text-blue-200 font-mono uppercase tracking-widest">Control Disciplinario</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="text-right hidden md:block">
          <p className="text-sm font-bold">{new Date().toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
          <p className="text-xs text-blue-200 font-mono flex items-center justify-end gap-1"><Clock size={12} /> {time}</p>
        </div>
        <div className="flex items-center gap-3 border-l border-white/20 pl-6">
          <div className="w-8 h-8 rounded-full bg-vault-blue flex items-center justify-center text-xs font-black shadow-md border border-white/10">PR</div>
          <div className="hidden sm:block">
            <p className="text-xs font-bold leading-none uppercase tracking-widest text-white">Prefecto(a)</p>
            <p className="text-[10px] font-mono text-emerald-400 mt-1">Conexión Local</p>
          </div>
        </div>
      </div>
    </header>
  );
};