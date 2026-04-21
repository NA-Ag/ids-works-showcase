import React, { useState, useMemo } from 'react';
import { useClinic, Student } from '../context/ClinicContext';
import { Search, UserX, AlertTriangle, Users, Clock, Pill } from 'lucide-react';

interface DashboardProps {
  onSelectStudent: (s: Student) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onSelectStudent }) => {
  const { students, visits } = useClinic();
  const [search, setSearch] = useState('');

  const filteredStudents = useMemo(() => {
    if (!search.trim()) return [];
    const term = search.toLowerCase();
    return students.filter(s => 
      s.nombre.toLowerCase().includes(term) || 
      `${s.grado} ${s.grupo}`.toLowerCase().includes(term)
    );
  }, [search, students]);

  const todayVisits = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    return visits.filter(v => v.fechaHora.startsWith(today));
  }, [visits]);

  const studentsWithAllergies = students.filter(s => s.alergias.length > 0 && s.alergias[0] !== 'Ninguna conocida').length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Panel Principal</h1>
            <p className="text-slate-500 mt-1 capitalize">{new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg border border-blue-200">
            <span className="text-sm font-medium">{todayVisits.length} visitas hoy</span>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Buscar estudiante por nombre o grado..." 
            className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg font-medium shadow-inner bg-gray-50 placeholder:text-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {search && filteredStudents.length > 0 && (
          <div className="mt-2 bg-white border border-slate-200 rounded-lg shadow-lg max-h-72 overflow-y-auto z-10 relative animate-fade-in">
            {filteredStudents.map(student => (
              <button 
                key={student.id} 
                onClick={() => {
                  setSearch('');
                  onSelectStudent(student);
                }}
                className="w-full text-left px-6 py-4 hover:bg-slate-50 border-b border-slate-100 last:border-0 transition-colors flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-slate-800 text-lg">{student.nombre}</p>
                  <p className="text-sm font-medium text-slate-500 mt-1">{student.grado} - Grupo {student.grupo}</p>
                </div>
                {student.alergias.length > 0 && student.alergias[0] !== 'Ninguna conocida' && (
                  <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full flex items-center gap-1 border border-red-200">
                    <AlertTriangle size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Alergias</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {search && filteredStudents.length === 0 && (
          <div className="mt-2 text-center py-10 text-slate-400 bg-white border border-slate-200 rounded-lg">
            <UserX className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p className="font-bold">No se encontraron estudiantes</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Estudiantes</p>
            <p className="text-3xl font-black text-slate-800 font-mono">{students.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center space-x-4">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Visitas Hoy</p>
            <p className="text-3xl font-black text-slate-800 font-mono">{todayVisits.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center space-x-4">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
            <Pill size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Con Alergias</p>
            <p className="text-3xl font-black text-slate-800 font-mono">{studentsWithAllergies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};