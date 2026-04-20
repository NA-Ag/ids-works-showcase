import React from 'react';
import { Student, DisciplineRecord } from '../context/DisciplineContext';

interface PrintableReportProps {
  record: DisciplineRecord;
  student: Student;
}

export const PrintableReport: React.FC<PrintableReportProps> = ({ record, student }) => {
  const severidadLabels = { leve: 'Leve', moderado: 'Moderado', severo: 'Severo' };
  
  return (
    <div className="print-only bg-white p-8 max-w-3xl mx-auto font-serif">
      <div className="text-center border-b-2 border-slate-800 pb-6 mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-wide uppercase">Reporte Disciplinario</h1>
        <p className="text-slate-600 mt-2 uppercase tracking-widest text-sm font-bold">Departamento de Prefectura</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Alumno</p>
          <p className="text-lg font-bold text-slate-900">{student.nombre}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Grado y Grupo</p>
          <p className="text-lg font-bold text-slate-900">{student.grado} - Grupo "{student.grupo}"</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Matrícula</p>
          <p className="font-mono font-bold text-slate-900">{student.matricula}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Fecha y Hora</p>
          <p className="font-bold text-slate-900">{new Date(record.fecha).toLocaleString('es-MX')}</p>
        </div>
      </div>

      <div className="mb-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Severidad</p>
          <span className={`px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest border ${record.severidad === 'leve' ? 'bg-green-50 border-green-200 text-green-700' : record.severidad === 'moderado' ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
            {severidadLabels[record.severidad || 'leve']}
          </span>
        </div>
        <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Descripción de los Hechos</p>
        <p className="text-base text-slate-900 leading-relaxed font-medium">{record.motivo}</p>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-8">
        <div className="text-center">
          <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
          <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">Firma del Prefecto</p>
        </div>
        <div className="text-center">
          <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
          <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">Firma del Alumno</p>
        </div>
        <div className="text-center">
          <div className="border-b-2 border-slate-400 mb-3 h-12"></div>
          <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">Firma del Padre o Tutor</p>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-slate-200 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Documento Generado por I.D.S Works • {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};