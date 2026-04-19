import React, { useState } from 'react';
import { Search, Filter, MoreVertical, X } from 'lucide-react';
import { useData } from '../context/DataContext';

export const DirectoryView: React.FC = () => {
  const { students, addStudent, toggleStudentStatus, addActivity, isNewStudentModalOpen, setIsNewStudentModalOpen } = useData();
  const [searchTerm, setSearchQuery] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    grade: '1º Primaria',
    bloodType: 'O+',
    tutor: ''
  });

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.tutor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addStudent({
      ...formData,
      status: 'Activo'
    });
    addActivity(`Alumno '${formData.name}' registrado`, 'add');
    setIsModalOpen(false);
    setFormData({ name: '', grade: '1º Primaria', bloodType: 'O+', tutor: '' });
  };

  return (
    <div className="animate-fade-in space-y-6 relative">
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar por nombre, matrícula o tutor..." 
              value={searchTerm}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:border-vault-blue focus:ring-2 focus:ring-vault-blue/20 outline-none transition-all" 
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-100 transition-colors">
              <Filter size={16} /> Filtros
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-vault-blue text-white rounded-lg text-sm font-bold hover:bg-vault-darkBlue transition-colors shadow-md"
            >
              + Nuevo Alumno
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="py-3 px-4 text-xs font-black uppercase tracking-widest text-gray-400">Matrícula</th>
                <th className="py-3 px-4 text-xs font-black uppercase tracking-widest text-gray-400">Alumno</th>
                <th className="py-3 px-4 text-xs font-black uppercase tracking-widest text-gray-400">Nivel/Grado</th>
                <th className="py-3 px-4 text-xs font-black uppercase tracking-widest text-gray-400">Tutor Principal</th>
                <th className="py-3 px-4 text-xs font-black uppercase tracking-widest text-gray-400">Estado</th>
                <th className="py-3 px-4 text-xs font-black uppercase tracking-widest text-gray-400 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-4 font-mono text-xs font-bold text-vault-blue">{student.id}</td>
                  <td className="py-4 px-4">
                    <p className="font-bold text-gray-800">{student.name}</p>
                    <p className="text-xs text-gray-500 font-mono">Tipo Sangre: {student.bloodType}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold">
                      {student.grade}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{student.tutor}</td>
                  <td className="py-4 px-4">
                    <button 
                      onClick={() => toggleStudentStatus(student.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 ${
                        student.status === 'Activo' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100' : 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${student.status === 'Activo' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                      {student.status}
                    </button>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-vault-blue transition-colors rounded-full hover:bg-blue-50">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-400 font-bold">
                    No se encontraron alumnos con ese criterio.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <p>Mostrando {filteredStudents.length} de {students.length} alumnos</p>
        </div>
      </div>

      {/* New Student Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-darkBlue/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl relative overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-black text-vault-darkBlue uppercase tracking-widest text-sm">Registrar Nuevo Alumno</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
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
      )}
    </div>
  );
};