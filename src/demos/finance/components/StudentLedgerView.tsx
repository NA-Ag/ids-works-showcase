import React from 'react';
import { StudentFinance, useFinance } from '../context/FinanceContext';
import { ArrowLeft, Plus, FileText, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

interface StudentLedgerViewProps {
  student: StudentFinance;
  onBack: () => void;
  onLogPayment: () => void;
}

const SCHOOL_MONTHS = ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

export const StudentLedgerView: React.FC<StudentLedgerViewProps> = ({ student, onBack, onLogPayment }) => {
  const { payments } = useFinance();
  const studentPayments = payments.filter(p => p.studentId === student.id);
  
  const totalPaid = studentPayments.filter(p => p.estado === 'Pagado').reduce((sum, p) => sum + p.monto, 0);
  const totalPending = studentPayments.filter(p => p.estado === 'Pendiente' || p.estado === 'Vencido').reduce((sum, p) => sum + p.monto, 0);
  
  const getPaymentStatus = (concepto: string, mes: string | null = null) => {
    return studentPayments.find(p => p.concepto === concepto && p.mes === mes);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(amount);
  };

  const formatDate = (isoString: string | null) => {
    if (!isoString) return '-';
    return new Date(isoString).toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const StatusBadge = ({ status }: { status: string }) => {
    if (status === 'Pagado') return <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-1 w-max mx-auto"><CheckCircle2 size={12}/> Pagado</span>;
    if (status === 'Vencido') return <span className="bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-1 w-max mx-auto"><AlertCircle size={12}/> Vencido</span>;
    return <span className="bg-yellow-50 text-yellow-600 border border-yellow-200 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-1 w-max mx-auto"><Clock size={12}/> Pendiente</span>;
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center text-gray-500 hover:text-vault-darkBlue transition-colors font-bold text-sm uppercase tracking-widest">
          <ArrowLeft size={16} className="mr-2" /> Regresar
        </button>
        <button 
          onClick={onLogPayment}
          className="bg-vault-yellow hover:bg-yellow-400 text-vault-darkBlue px-6 py-3 rounded-lg font-black uppercase tracking-widest text-xs shadow-md transition-all active:scale-95 flex items-center gap-2"
        >
          <Plus size={16} /> Registrar Pago
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <h3 className="text-3xl font-black text-vault-darkBlue">{student.nombre}</h3>
            <p className="text-gray-500 font-bold mt-1 uppercase tracking-widest text-sm">{student.grado} • Matrícula: <span className="font-mono text-vault-blue">{student.id}</span></p>
          </div>
          <div className="md:text-right bg-gray-50 p-4 rounded-lg border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Mensualidad Base</p>
            <p className="text-3xl font-black text-emerald-600 font-mono">{formatCurrency(student.mensualidad)}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Total Pagado</p>
          <p className="text-3xl font-black text-emerald-700 font-mono">{formatCurrency(totalPaid)}</p>
        </div>
        <div className="bg-red-50 rounded-xl p-6 border border-red-100">
          <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">Pendiente de Pago</p>
          <p className="text-3xl font-black text-red-700 font-mono">{formatCurrency(totalPending)}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Total del Ciclo</p>
          <p className="text-3xl font-black text-gray-800 font-mono">{formatCurrency(totalPaid + totalPending)}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-lg font-black text-vault-darkBlue uppercase tracking-widest">Estado de Cuenta Detallado</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white">
              <tr>
                <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Concepto</th>
                <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Periodo</th>
                <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100 text-right">Monto</th>
                <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100 text-center">Estado</th>
                <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Fecha de Pago</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {(() => {
                const insc = getPaymentStatus('Inscripción');
                return (
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-vault-darkBlue">Inscripción</td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500">Agosto {new Date().getFullYear()}</td>
                    <td className="py-4 px-6 text-right font-mono font-bold text-gray-800">{formatCurrency(student.inscripcion)}</td>
                    <td className="py-4 px-6 text-center"><StatusBadge status={insc?.estado || 'Pendiente'} /></td>
                    <td className="py-4 px-6 text-sm font-mono text-gray-500">{insc ? formatDate(insc.fecha) : '-'}</td>
                  </tr>
                );
              })()}
              
              {SCHOOL_MONTHS.map(mes => {
                const pago = getPaymentStatus('Colegiatura', mes);
                return (
                  <tr key={mes} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-vault-darkBlue">Colegiatura</td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500">{mes}</td>
                    <td className="py-4 px-6 text-right font-mono font-bold text-gray-800">{formatCurrency(student.mensualidad)}</td>
                    <td className="py-4 px-6 text-center"><StatusBadge status={pago?.estado || 'Pendiente'} /></td>
                    <td className="py-4 px-6 text-sm font-mono text-gray-500">{pago ? formatDate(pago.fecha) : '-'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <h3 className="text-lg font-black text-vault-darkBlue uppercase tracking-widest flex items-center gap-2">
            <FileText className="text-vault-blue" size={20} /> Datos de Facturación (CFDI)
          </h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">RFC del Receptor</label>
            <p className="font-mono text-lg font-bold text-vault-darkBlue">{student.rfc}</p>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Razón Social</label>
            <p className="text-lg font-bold text-gray-800">{student.razonSocial}</p>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Uso de CFDI</label>
            <p className="text-sm font-bold text-vault-blue bg-blue-50 px-3 py-1.5 rounded inline-block border border-blue-100">
              {student.usoCFDI} - Pagos por servicios educativos
            </p>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Régimen Fiscal</label>
            <p className="text-sm font-bold text-gray-800">616 - Sin obligaciones fiscales</p>
          </div>
        </div>
      </div>
    </div>
  );
};