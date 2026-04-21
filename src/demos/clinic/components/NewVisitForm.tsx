import React, { useState } from 'react';
import { Student, useClinic } from '../context/ClinicContext';
import { AlertTriangle, Stethoscope, Pill, StickyNote, X, Save } from 'lucide-react';

interface NewVisitFormProps {
  student: Student;
  onCancel: () => void;
}

export const NewVisitForm: React.FC<NewVisitFormProps> = ({ student, onCancel }) => {
  const { addVisit } = useClinic();
  const [form, setForm] = useState({ motivo: '', tratamiento: '', notas: '' });

  const motivos = ['Dolor de cabeza', 'Dolor de estómago', 'Golpe/Caída', 'Fiebre', 'Náuseas', 'Malestar general', 'Otro'];
  const tratamientos = ['Reposo', 'Medicamento', 'Curación', 'Llamada a Padres', 'Observación', 'Derivación médica'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.motivo || !form.tratamiento) return;

    addVisit({
      studentId: student.id,
      motivo: form.motivo,
      tratamiento: form.tratamiento,
      notas: form.notas,
      enfermera: 'Enf. Laura' // Hardcoded mock nurse
    });
    
    onCancel();
  };

  const hasAllergies = student.alergias.length > 0 && student.alergias[0] !== 'Ninguna conocida';

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden animate-fade-in">
      <div className="px-8 py-6 border-b border-gray-200 bg-gray-50 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
            <Stethoscope className="text-blue-600" /> Registrar Nueva Visita
          </h2>
          <p className="text-slate-600 mt-2 font-medium">Estudiante: <span className="font-bold text-slate-900">{student.nombre}</span> • {student.grado} - Grupo {student.grupo}</p>
        </div>
        <button onClick={onCancel} className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {hasAllergies && (
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5 flex items-start gap-4">
            <AlertTriangle className="text-red-500 w-8 h-8 shrink-0" />
            <div>
              <p className="font-black text-red-800 uppercase tracking-widest text-xs mb-1">Alerta de Alergias Crítica</p>
              <p className="font-bold text-red-700">Este estudiante es alérgico a: {student.alergias.join(', ')}</p>
              <p className="text-sm text-red-600 mt-1 font-medium">Verifique estrictamente el expediente antes de administrar cualquier medicamento oral o tópico.</p>
            </div>
          </div>
        )}

        <div>
          <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Stethoscope size={14} className="text-blue-500"/> Motivo de la visita *
          </label>
          <select 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white font-bold text-slate-700"
            value={form.motivo}
            onChange={(e) => setForm({...form, motivo: e.target.value})}
            required
          >
            <option value="">Seleccionar motivo...</option>
            {motivos.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Pill size={14} className="text-blue-500"/> Tratamiento / Acción *
          </label>
          <select 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white font-bold text-slate-700"
            value={form.tratamiento}
            onChange={(e) => setForm({...form, tratamiento: e.target.value})}
            required
          >
            <option value="">Seleccionar tratamiento...</option>
            {tratamientos.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
            <StickyNote size={14} className="text-blue-500"/> Notas Clínicas y Observaciones
          </label>
          <textarea 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none font-medium text-slate-700"
            rows={4}
            placeholder="Describa los síntomas observados, signos vitales y respuesta al tratamiento..."
            value={form.notas}
            onChange={(e) => setForm({...form, notas: e.target.value})}
          ></textarea>
        </div>

        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100">
          <button 
            type="button"
            onClick={onCancel}
            className="px-8 py-3 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition-colors uppercase tracking-widest text-xs"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black uppercase tracking-widest text-xs shadow-md transition-all active:scale-95 flex items-center gap-2"
          >
            <Save size={16} /> Guardar Expediente
          </button>
        </div>
      </form>
    </div>
  );
};