import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useData } from '../context/DataContext';

export const NewStudentModal: React.FC = () => {
  const { isNewStudentModalOpen, setIsNewStudentModalOpen, addStudent, addActivity } = useData();

  const [formData, setFormData] = useState({
    name: '',
    grade: '1º Primaria',
    bloodType: 'O+',
    tutor: ''
  });

  if (!isNewStudentModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addStudent({
      ...formData,
      status: 'Activo'
    });
    addActivity(`Alumno '${formData.name}' registrado`, 'add');
    setIsNewStudentModalOpen(false);
    setFormData({ name: '', grade: '1º Primaria', bloodType: 'O+', tutor: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-darkBlue/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl relative overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-black text-vault-darkBlue uppercase tracking-widest text-sm">Registrar Nuevo Alumno</h3>
          <button onClick={() => setIsNewStudentModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1">Nombre Completo</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-vault-blue focus:ring-1 focus:ring-vault-blue" 
              placeholder="Ej. Hernández Silva, Mateo"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1">Nivel/Grado</label>
              <select 
                value={formData.grade}
                onChange={e => setFormData({...formData, grade: e.target.value})}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-vault-blue"
              >
                <option>1º Kinder</option>
                <option>3º Kinder</option>
                <option>1º Primaria</option>
                <option>6º Primaria</option>
                <option>1º Secundaria</option>
                <option>3º Secundaria</option>
                <option>1º Preparatoria</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1">Tipo de Sangre</label>
              <select 
                value={formData.bloodType}
                onChange={e => setFormData({...formData, bloodType: e.target.value})}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-vault-blue"
              >
                <option>O+</option>
                <option>O-</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>AB+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1">Tutor Principal</label>
            <input 
              type="text" 
              required
              value={formData.tutor}
              onChange={e => setFormData({...formData, tutor: e.target.value})}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-vault-blue focus:ring-1 focus:ring-vault-blue" 
              placeholder="Nombre y Parentesco (Ej. Luis Hernández - Padre)"
            />
          </div>

          <div className="pt-6 flex justify-end gap-3 border-t border-gray-50 mt-6">
            <button type="button" onClick={() => setIsNewStudentModalOpen(false)} className="px-6 py-2 text-sm font-bold text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
              Cancelar
            </button>
            <button type="submit" className="px-6 py-2 text-sm font-bold bg-vault-blue text-white hover:bg-vault-darkBlue rounded-lg transition-colors shadow-md">
              Guardar Alumno
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
