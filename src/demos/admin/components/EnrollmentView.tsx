import React from 'react';
import { Users, BookOpen, Layers } from 'lucide-react';

export const EnrollmentView: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Layers className="w-8 h-8 text-vault-blue" />
        </div>
        <h3 className="text-xl font-black text-vault-darkBlue mb-2">Gestión de Grupos y Materias</h3>
        <p className="text-gray-500 max-w-md mx-auto text-sm">
          Este módulo permite configurar los ciclos escolares, asignar salones y armar las listas de asistencia.
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
           <button className="px-6 py-2 bg-vault-blue text-white rounded-lg text-sm font-bold shadow-md hover:bg-vault-darkBlue transition-colors">
             Ver Grupos 2026
           </button>
           <button className="px-6 py-2 bg-gray-50 text-gray-600 border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors">
             Histórico de Ciclos
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Primaria Alta', 'Secundaria', 'Preparatoria'].map((level, i) => (
          <div key={i} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:border-vault-blue transition-colors cursor-pointer">
            <h4 className="font-black text-lg text-vault-darkBlue mb-4">{level}</h4>
            <div className="space-y-3">
               <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                 <span className="text-gray-600 font-bold">1º Grado</span>
                 <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-mono font-bold text-[10px]">120 Alumnos</span>
               </div>
               <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                 <span className="text-gray-600 font-bold">2º Grado</span>
                 <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-mono font-bold text-[10px]">115 Alumnos</span>
               </div>
               <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                 <span className="text-gray-600 font-bold">3º Grado</span>
                 <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-mono font-bold text-[10px]">108 Alumnos</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};