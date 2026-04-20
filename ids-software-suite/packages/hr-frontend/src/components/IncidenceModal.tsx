import React, { useState } from 'react';
import { Employee, Incidence } from '../context/HRContext';
import { AlertTriangle, X, CheckCircle2 } from 'lucide-react';

interface IncidenceModalProps {
  employee: Employee;
  onClose: () => void;
  onSave: (inc: Incidence) => void;
}

export const IncidenceModal: React.FC<IncidenceModalProps> = ({ employee, onClose, onSave }) => {
  const [form, setForm] = useState({ 
    fecha: new Date().toISOString().split('T')[0], 
    tipo: 'retardo', 
    notas: '' 
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: `INC${Date.now()}`,
      empleadoId: employee.id,
      fecha: form.fecha,
      tipo: form.tipo as any,
      notas: form.notas
    });
    setSuccess(true);
    setTimeout(onClose, 1500);
  };

  if (success) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-darkBlue/80 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-emerald-500 w-10 h-10" />
          </div>
          <h3 className="text-xl font-black text-vault-darkBlue mb-2 uppercase tracking-tighter">Incidencia Registrada</h3>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Aparecerá en la pre-nómina del periodo.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-darkBlue/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
          <h3 className="text-sm font-black text-vault-darkBlue uppercase tracking-widest flex items-center gap-2">
            <AlertTriangle className="text-vault-yellow" size={18} /> Registrar Incidencia
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-[10px] font-black text-vault-blue uppercase tracking-widest mb-1">Empleado Seleccionado</p>
            <p className="text-sm text-vault-darkBlue font-bold">{employee.nombre}</p>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{employee.puesto} • {employee.tipoPago === 'fijo' ? 'Fijo Mensual' : 'Por Hora'}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Fecha</label>
              <input 
                type="date" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vault-blue outline-none font-mono font-bold text-sm" 
                value={form.fecha} 
                onChange={e => setForm({...form, fecha: e.target.value})} 
                required 
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Tipo de Incidencia</label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vault-blue outline-none bg-white font-bold text-sm" 
                value={form.tipo} 
                onChange={e => setForm({...form, tipo: e.target.value})} 
                required
              >
                <option value="retardo">Retardo</option>
                <option value="falta_injustificada">Falta Injustificada</option>
                <option value="incapacidad_imss">Incapacidad IMSS</option>
                <option value="permiso">Permiso</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Notas / Observaciones</label>
            <textarea 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vault-blue outline-none resize-none text-sm font-medium" 
              rows={3} 
              placeholder="Detalle de la incidencia..." 
              value={form.notas} 
              onChange={e => setForm({...form, notas: e.target.value})}
            ></textarea>
          </div>
          
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-100">
            <button type="button" onClick={onClose} className="px-6 py-2.5 text-gray-500 font-bold uppercase tracking-widest text-[10px] hover:bg-gray-50 rounded-lg transition-colors">
              Cancelar
            </button>
            <button type="submit" className="px-6 py-2.5 bg-vault-yellow text-vault-darkBlue rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-yellow-400 transition-all shadow-md active:scale-95">
              Guardar Incidencia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};