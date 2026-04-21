import React from 'react';
import { Stethoscope } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-20">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <Stethoscope className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800">Enfermería Escolar</h1>
          <p className="text-xs text-slate-500">Control de Visitas Médicas</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
          EL
        </div>
        <div className="hidden sm:block">
          <p className="text-xs font-bold leading-none">Enfermera(o)</p>
          <p className="text-[10px] text-emerald-500 font-mono mt-1">Conexión Local Segura</p>
        </div>
      </div>
    </header>
  );
};