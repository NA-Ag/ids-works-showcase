import React, { useState, useMemo } from 'react';
import { useFinance, StudentFinance } from '../context/FinanceContext';
import { Search, ArrowRight } from 'lucide-react';

interface StudentsViewProps {
  onSelectStudent: (student: StudentFinance) => void;
}

export const StudentsView: React.FC<StudentsViewProps> = ({ onSelectStudent }) => {
  const { students, payments } = useFinance();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = useMemo(() => {
    if (!searchTerm) return students;
    const term = searchTerm.toLowerCase();
    return students.filter(s => 
      s.nombre.toLowerCase().includes(term) || 
      s.grado.toLowerCase().includes(term) ||
      s.id.toLowerCase().includes(term)
    );
  }, [students, searchTerm]);

  const getPaymentSummary = (studentId: string) => {
    const studentPayments = payments.filter(p => p.studentId === studentId);
    const paid = studentPayments.filter(p => p.estado === 'Pagado').length;
    const total = studentPayments.length;
    return { paid, total, pending: total - paid };
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter">Alumnos</h2>
          <p className="text-gray-500 font-medium">Gestión de estados de cuenta y facturación</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text"
            placeholder="Buscar por nombre, grado o matrícula..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:border-vault-blue focus:ring-2 focus:ring-vault-blue/20 outline-none transition-all font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Matrícula</th>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Alumno</th>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Grado</th>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Estatus de Pagos</th>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStudents.map(student => {
                const summary = getPaymentSummary(student.id);
                return (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-mono text-sm font-bold text-vault-blue">{student.id}</td>
                    <td className="py-4 px-6 font-bold text-gray-800">{student.nombre}</td>
                    <td className="py-4 px-6 text-sm text-gray-600 font-bold bg-gray-100 rounded inline-block mt-3 ml-6 px-2">{student.grado}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-black bg-emerald-50 text-emerald-600 px-2 py-1 rounded uppercase tracking-widest">{summary.paid} pagados</span>
                        {summary.pending > 0 && (
                          <span className="text-xs font-black bg-red-50 text-red-600 px-2 py-1 rounded uppercase tracking-widest">{summary.pending} pendientes</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button 
                        onClick={() => onSelectStudent(student)}
                        className="text-vault-blue hover:text-vault-darkBlue font-black text-xs uppercase tracking-widest transition-colors flex items-center justify-end gap-1 ml-auto"
                      >
                        Estado de Cuenta <ArrowRight size={14} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
