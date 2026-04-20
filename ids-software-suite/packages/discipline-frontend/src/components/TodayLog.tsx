import React, { useMemo } from 'react';
import { History, Clock, Shirt, FileText, ClipboardCheck, AlertCircle } from 'lucide-react';
import { DisciplineRecord, Student } from '../context/DisciplineContext';

interface TodayLogProps {
  records: DisciplineRecord[];
  students: Student[];
}

export const TodayLog: React.FC<TodayLogProps> = ({ records, students }) => {
  const isToday = (iso: string) => {
    const d = new Date(iso);
    const t = new Date();
    return d.toDateString() === t.toDateString();
  };

  const todayRecords = useMemo(() => {
    return records
      .filter(r => isToday(r.fecha))
      .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
  }, [records]);

  const getStudentName = (id: string) => students.find(s => s.id === id)?.nombre || 'Desconocido';

  const tipoColors = {
    retardo: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    uniforme: 'bg-purple-50 text-purple-700 border-purple-200',
    reporte: 'bg-red-50 text-red-700 border-red-200'
  };

  const tipoLabels = { retardo: 'Retardo', uniforme: 'Falta de Uniforme', reporte: 'Reporte Disciplinario' };
  
  const getIcon = (tipo: string) => {
    if (tipo === 'retardo') return <Clock size={12} className="mr-1.5" />;
    if (tipo === 'uniforme') return <Shirt size={12} className="mr-1.5" />;
    return <FileText size={12} className="mr-1.5" />;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full overflow-hidden no-print">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between shrink-0">
        <h3 className="font-black text-vault-darkBlue uppercase tracking-widest text-sm flex items-center">
          <History className="mr-2 text-vault-blue" size={18} /> Historial de Hoy
        </h3>
        <span className="bg-vault-yellow text-vault-darkBlue text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
          {todayRecords.length} logs
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f8fafc]">
        {todayRecords.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-60">
            <ClipboardCheck className="w-16 h-16 mb-4" />
            <p className="text-sm font-bold uppercase tracking-widest">Sin registros hoy</p>
          </div>
        ) : (
          todayRecords.map(rec => (
            <div key={rec.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm animate-fade-in hover:border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className={`inline-flex items-center px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-widest border ${tipoColors[rec.tipo]}`}>
                  {getIcon(rec.tipo)} {tipoLabels[rec.tipo]}
                </span>
                <span className="text-[10px] font-mono font-bold text-gray-400">
                  {new Date(rec.fecha).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="font-bold text-sm text-vault-darkBlue truncate">{getStudentName(rec.studentId)}</p>
              
              {rec.severidad && rec.severidad !== 'leve' && (
                <span className={`inline-flex items-center mt-2 text-[9px] font-black uppercase tracking-widest ${rec.severidad === 'moderado' ? 'text-yellow-600' : 'text-red-600'}`}>
                  <AlertCircle size={10} className="mr-1" /> {rec.severidad}
                </span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};