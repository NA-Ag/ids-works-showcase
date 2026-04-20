import React from 'react';
import { useHR, Employee } from '../context/HRContext';
import { isInPeriod, formatCurrency } from '../utils/payroll';
import { PlusCircle, Calculator } from 'lucide-react';

interface DirectoryViewProps {
  onAddIncident: (empId: string) => void;
  setView: (view: string) => void;
}

export const DirectoryView: React.FC<DirectoryViewProps> = ({ onAddIncident, setView }) => {
  const { employees, incidences, period } = useHR();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter">Directorio de Personal</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Gestión de empleados e incidencias</p>
        </div>
        <button 
          onClick={() => setView('prenomina')} 
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-black uppercase tracking-widest text-xs shadow-md transition-all active:scale-95 flex items-center gap-2"
        >
          <Calculator size={16} />
          <span className="hidden sm:inline">Ver Pre-nómina</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="py-4 px-6 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">ID</th>
                <th className="py-4 px-6 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Nombre Completo</th>
                <th className="py-4 px-6 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Puesto</th>
                <th className="py-4 px-6 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Tipo de Pago</th>
                <th className="py-4 px-6 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200 text-right">Base / Tarifa</th>
                <th className="py-4 px-6 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200 text-center">Incidencias</th>
                <th className="py-4 px-6 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {employees.map(emp => {
                const periodIncidences = incidences.filter(i => i.empleadoId === emp.id && isInPeriod(i.fecha, period));
                return (
                  <tr key={emp.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-mono text-sm font-bold text-vault-blue">{emp.id}</td>
                    <td className="py-4 px-6">
                      <div className="font-bold text-vault-darkBlue">{emp.nombre}</div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">RFC: {emp.rfc}</div>
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-600">{emp.puesto}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest ${emp.tipoPago === 'fijo' ? 'bg-blue-50 border border-blue-100 text-vault-blue' : 'bg-purple-50 border border-purple-100 text-purple-700'}`}>
                        {emp.tipoPago === 'fijo' ? 'Mensual Fijo' : 'Por Hora'}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-mono font-bold text-gray-800">
                      {emp.tipoPago === 'fijo' ? formatCurrency(emp.salarioBase) : `${formatCurrency(emp.salarioBase)}/hr`}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {periodIncidences.length > 0 ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-50 text-red-600 rounded border border-red-100 text-xs font-black">
                          {periodIncidences.length}
                        </span>
                      ) : (
                        <span className="text-xs font-black text-gray-300">-</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button 
                        onClick={() => onAddIncident(emp.id)} 
                        className="text-vault-blue hover:text-vault-darkBlue font-black text-[10px] uppercase tracking-widest transition-colors flex items-center justify-end gap-1 ml-auto"
                      >
                        <PlusCircle size={14} /> Registrar
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
