import React, { useMemo } from 'react';
import { useClinic, Student } from '../context/ClinicContext';
import { ClipboardList, AlertTriangle } from 'lucide-react';

interface VisitHistoryProps {
  onSelectStudent: (student: Student) => void;
}

export const VisitHistory: React.FC<VisitHistoryProps> = ({ onSelectStudent }) => {
  const { visits, students } = useClinic();

  const getStudentDetails = (id: string) => students.find(s => s.id === id);

  const sortedVisits = useMemo(() => {
    return [...visits].sort((a, b) => new Date(b.fechaHora).getTime() - new Date(a.fechaHora).getTime());
  }, [visits]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
      <div className="px-6 py-5 border-b border-gray-200 bg-gray-50/50 shrink-0">
        <h2 className="text-lg font-black text-slate-800 uppercase tracking-widest flex items-center gap-3">
          <ClipboardList className="text-blue-600" />
          Bitácora General
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
        {sortedVisits.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            <ClipboardList className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="font-bold uppercase tracking-widest text-sm">No hay visitas registradas</p>
          </div>
        ) : (
          sortedVisits.map(visit => {
            const student = getStudentDetails(visit.studentId);
            const hasAllergies = student && student.alergias.length > 0 && student.alergias[0] !== 'Ninguna conocida';

            return (
              <button 
                key={visit.id} 
                onClick={() => student && onSelectStudent(student)}
                className="w-full text-left px-6 py-5 hover:bg-blue-50 transition-colors flex items-center justify-between group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-black text-lg border border-blue-200">
                    {student?.nombre.charAt(0) || '?'}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-base group-hover:text-blue-700 transition-colors">
                      {student?.nombre || 'Desconocido'}
                    </p>
                    <p className="text-sm font-medium text-slate-500 mt-1">
                      {visit.motivo} <span className="mx-2 text-gray-300">•</span> {visit.tratamiento}
                    </p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-2">
                  <p className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {new Date(visit.fechaHora).toLocaleString('es-MX', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </p>
                  {hasAllergies && (
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded flex items-center gap-1">
                      <AlertTriangle size={10} /> Alergias
                    </span>
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};