import React, { useMemo } from 'react';
import { useHR } from '../context/HRContext';
import { calcPrePayroll, formatCurrency, getPeriodLabel } from '../utils/payroll';
import { Printer, Info } from 'lucide-react';

export const PreNomina: React.FC = () => {
  const { employees, incidences, period } = useHR();

  const calculations = useMemo(() => employees.map(emp => calcPrePayroll(emp, incidences, period)), [employees, incidences, period]);
  const totals = useMemo(() => calculations.reduce((acc, c) => ({ 
    base: acc.base + c.base, 
    deduccion: acc.deduccion + c.deduccion, 
    neto: acc.neto + c.neto 
  }), { base: 0, deduccion: 0, neto: 0 }), [calculations]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter">Cálculo de Pre-nómina</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mt-1">Periodo: {getPeriodLabel(period)}</p>
        </div>
        <button 
          onClick={() => window.print()} 
          className="bg-vault-blue hover:bg-vault-darkBlue text-white px-6 py-3 rounded-lg font-black uppercase tracking-widest text-xs shadow-md transition-all active:scale-95 flex items-center gap-2 no-print"
        >
          <Printer size={16} />
          <span className="hidden sm:inline">Imprimir Reporte</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden print:border-0 print:shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50 print:bg-transparent">
              <tr>
                <th className="py-4 px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Empleado</th>
                <th className="py-4 px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Puesto</th>
                <th className="py-4 px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200 text-center">Retardos</th>
                <th className="py-4 px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200 text-center">Faltas</th>
                <th className="py-4 px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200 text-center">Incap.</th>
                <th className="py-4 px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200 text-right">Percepciones</th>
                <th className="py-4 px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200 text-right">Deducciones</th>
                <th className="py-4 px-4 text-[10px] font-black text-gray-800 uppercase tracking-widest border-b border-gray-200 text-right">Neto a Pagar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 print:divide-black">
              {calculations.map(calc => (
                <tr key={calc.empleado.id} className="hover:bg-gray-50 transition-colors print:border-b print:border-black">
                  <td className="py-4 px-4">
                    <div className="font-bold text-vault-darkBlue text-sm">{calc.empleado.nombre}</div>
                    <div className="text-[10px] font-mono text-gray-500 mt-1">{calc.empleado.id} • {calc.empleado.rfc}</div>
                  </td>
                  <td className="py-4 px-4 text-xs font-bold text-gray-600">{calc.empleado.puesto}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded font-black text-xs">{calc.retardos}</span>
                    {calc.retardos >= 3 && <div className="text-[9px] font-black text-red-500 uppercase tracking-widest mt-1">= {Math.floor(calc.retardos/3)} Falta</div>}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 bg-red-50 text-red-700 border border-red-200 rounded font-black text-xs">{calc.faltas}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded font-black text-xs">{calc.incapacidades}</span>
                  </td>
                  <td className="py-4 px-4 text-right font-mono font-bold text-gray-700">{formatCurrency(calc.base)}</td>
                  <td className="py-4 px-4 text-right font-mono font-bold text-red-600">{calc.deduccion > 0 ? `- ${formatCurrency(calc.deduccion)}` : '-'}</td>
                  <td className="py-4 px-4 text-right font-mono font-black text-emerald-600">{formatCurrency(calc.neto)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50/50 font-black text-vault-darkBlue print:bg-transparent print:border-t-2 print:border-black">
              <tr>
                <td colSpan={5} className="py-5 px-4 text-right text-xs uppercase tracking-widest">Totales del Periodo:</td>
                <td className="py-5 px-4 text-right font-mono">{formatCurrency(totals.base)}</td>
                <td className="py-5 px-4 text-right font-mono text-red-600">- {formatCurrency(totals.deduccion)}</td>
                <td className="py-5 px-4 text-right font-mono text-emerald-600 text-lg">{formatCurrency(totals.neto)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-[10px] font-bold text-vault-blue uppercase tracking-widest no-print flex items-start gap-2">
        <Info className="shrink-0" size={14} /> 
        <div>
          <span className="font-black">Nota:</span> Este documento es una pre-nómina para efectos de revisión interna. Las deducciones por faltas se calculan dividiendo el salario mensual entre 30 días. 3 retardos equivalen a 1 falta. Los permisos no generan deducción automática salvo acuerdo específico.
        </div>
      </div>
    </div>
  );
};