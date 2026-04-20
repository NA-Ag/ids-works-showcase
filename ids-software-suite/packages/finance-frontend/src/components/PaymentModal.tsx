import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { StudentFinance, useFinance } from '../context/FinanceContext';

interface PaymentModalProps {
  student: StudentFinance;
  onClose: () => void;
}

const SCHOOL_MONTHS = ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const FORMAS_PAGO = ['Efectivo', 'Transferencia (SPEI)', 'Tarjeta de Crédito', 'Tarjeta de Débito', 'Cheque'];

export const PaymentModal: React.FC<PaymentModalProps> = ({ student, onClose }) => {
  const { payments, addPayment } = useFinance();
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    concepto: 'Colegiatura',
    mes: SCHOOL_MONTHS[0],
    monto: student.mensualidad,
    formaPago: 'Transferencia (SPEI)',
  });

  const existingPayment = payments.find(
    p => p.studentId === student.id && p.concepto === form.concepto && p.mes === form.mes && p.estado === 'Pagado'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (existingPayment) return;
    
    addPayment({
      studentId: student.id,
      concepto: form.concepto,
      mes: form.concepto === 'Colegiatura' ? form.mes : null,
      monto: form.monto,
      formaPago: form.formaPago,
      estado: 'Pagado'
    });

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-darkBlue/80 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-xl p-12 max-w-sm w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-emerald-500 w-10 h-10" />
          </div>
          <h3 className="text-2xl font-black text-vault-darkBlue mb-2 uppercase tracking-tighter">¡Pago Registrado!</h3>
          <p className="text-gray-500 font-medium mb-6">Se ha generado el recibo interno.</p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Folio Generado</p>
            <p className="font-mono text-lg font-black text-vault-blue">REC-{new Date().getFullYear()}-{String(payments.length + 1).padStart(4, '0')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-darkBlue/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl w-full max-w-lg shadow-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
          <h3 className="text-sm font-black text-vault-darkBlue uppercase tracking-widest">Registrar Nuevo Pago</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p className="text-[10px] font-black text-vault-blue uppercase tracking-widest mb-1">Alumno Seleccionado</p>
            <p className="font-bold text-vault-darkBlue">{student.nombre}</p>
            <p className="text-xs font-mono text-gray-500 mt-1">{student.grado} • Matrícula: {student.id}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Concepto</label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-vault-blue font-medium text-sm"
                value={form.concepto}
                onChange={(e) => {
                  const val = e.target.value;
                  setForm({...form, concepto: val, monto: val === 'Inscripción' ? student.inscripcion : student.mensualidad});
                }}
              >
                <option value="Colegiatura">Colegiatura</option>
                <option value="Inscripción">Inscripción</option>
                <option value="Actividades Extra">Actividades Extra</option>
              </select>
            </div>
            
            <div>
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Mes</label>
              <select 
                disabled={form.concepto !== 'Colegiatura'}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-vault-blue font-medium text-sm disabled:bg-gray-100 disabled:text-gray-400"
                value={form.mes}
                onChange={(e) => setForm({...form, mes: e.target.value})}
              >
                {SCHOOL_MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Monto a Pagar (MXN)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold">$</span>
              <input 
                type="number"
                step="0.01"
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-vault-blue font-mono font-bold text-lg"
                value={form.monto}
                onChange={(e) => setForm({...form, monto: parseFloat(e.target.value) || 0})}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Forma de Pago</label>
            <select 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-vault-blue font-medium text-sm"
              value={form.formaPago}
              onChange={(e) => setForm({...form, formaPago: e.target.value})}
            >
              {FORMAS_PAGO.map(fp => <option key={fp} value={fp}>{fp}</option>)}
            </select>
          </div>

          {existingPayment && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm font-bold text-red-600 flex items-center gap-2">
              Este concepto ya se encuentra pagado.
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <button type="button" onClick={onClose} className="px-6 py-2 text-sm font-bold text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
              Cancelar
            </button>
            <button disabled={!!existingPayment} type="submit" className="px-6 py-2 text-sm font-bold bg-vault-yellow text-vault-darkBlue uppercase tracking-widest hover:bg-yellow-400 rounded-lg transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
              Procesar Cobro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};