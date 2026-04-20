import React, { useState } from 'react';
import { FileSignature, CheckCircle2 } from 'lucide-react';
import { Student, DisciplineRecord } from '../context/DisciplineContext';

interface ReportFormProps {
  student: Student;
  onSave: (record: Omit<DisciplineRecord, 'id'>) => void;
  onCancel: () => void;
}

export const ReportForm: React.FC<ReportFormProps> = ({ student, onSave, onCancel }) => {
  const [form, setForm] = useState<{ motivo: string; severidad: 'leve' | 'moderado' | 'severo' }>({ motivo: '', severidad: 'leve' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.motivo.trim()) {
      alert('Escribe el motivo del reporte');
      return;
    }
    
    onSave({
      studentId: student.id,
      tipo: 'reporte',
      fecha: new Date().toISOString(),
      motivo: form.motivo.trim(),
      severidad: form.severidad
    });
    
    setSuccess(true);
    setTimeout(() => onCancel(), 2000);
  };

  if (success) {
    return (
      <div className="text-center py-12 animate-fade-in bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-emerald-500 w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-vault-darkBlue mb-2 uppercase tracking-tighter">Reporte Generado</h3>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">El reporte ha sido guardado exitosamente.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-black text-vault-darkBlue uppercase tracking-tighter">Generar Reporte Disciplinario</h2>
        <button onClick={onCancel} className="text-sm font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors">Cancelar</button>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-black text-vault-blue uppercase tracking-widest mb-1">Alumno Implicado</p>
          <p className="font-bold text-vault-darkBlue">{student.nombre}</p>
        </div>
        <span className="font-mono text-sm font-bold text-vault-blue bg-white px-3 py-1 rounded border border-blue-100">{student.matricula}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Fecha y Hora</label>
          <input 
            type="text" 
            disabled 
            value={new Date().toLocaleString('es-MX')} 
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-500 text-sm font-mono font-bold" 
          />
        </div>
        <div>
          <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Nivel de Severidad</label>
          <select 
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vault-blue outline-none bg-white font-bold text-sm text-vault-darkBlue" 
            value={form.severidad} 
            onChange={e => setForm({...form, severidad: e.target.value as any})}
          >
            <option value="leve">🟢 Leve</option>
            <option value="moderado">🟡 Moderado</option>
            <option value="severo">🔴 Severo</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Descripción de los Hechos</label>
          <textarea 
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vault-blue outline-none resize-none font-medium text-sm text-gray-800" 
            rows={5} 
            placeholder="Describa detalladamente los hechos que motivan el presente reporte disciplinario..." 
            value={form.motivo} 
            onChange={e => setForm({...form, motivo: e.target.value})}
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full py-4 bg-vault-yellow hover:bg-yellow-400 text-vault-darkBlue rounded-xl font-black uppercase tracking-widest shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <FileSignature size={20} /> Generar Reporte Oficial
        </button>
      </form>
    </div>
  );
};