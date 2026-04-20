import React, { useState, useMemo } from 'react';
import { Search, UserX, ChevronRight } from 'lucide-react';
import { Student } from '../context/DisciplineContext';

interface StudentSearchProps {
  students: Student[];
  onSelect: (student: Student) => void;
}

export const StudentSearch: React.FC<StudentSearchProps> = ({ students, onSelect }) => {
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);

  const filtered = useMemo(() => {
    if (!search.trim()) return [];
    const term = search.toLowerCase();
    return students.filter(s => 
      s.nombre.toLowerCase().includes(term) || 
      s.matricula.toLowerCase().includes(term) || 
      `${s.grado} ${s.grupo}`.toLowerCase().includes(term)
    );
  }, [search, students]);

  return (
    <div className="relative mb-8">
      <div className="relative shadow-sm rounded-xl">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
        <input 
          type="text" 
          placeholder="Buscar alumno por nombre, matrícula o grupo..." 
          className="w-full pl-14 pr-4 py-4 text-lg bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vault-blue focus:border-vault-blue outline-none transition-all font-medium text-gray-800 shadow-sm placeholder:text-gray-400"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          autoFocus
        />
      </div>
      {search && focused && (
        <div className="absolute top-full left-0 right-0 bg-white rounded-xl shadow-2xl border border-gray-100 mt-2 max-h-72 overflow-y-auto z-20 animate-fade-in">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-gray-400 flex flex-col items-center">
              <UserX className="w-10 h-10 mb-3 opacity-50" />
              <p className="font-bold uppercase tracking-widest text-sm">No se encontraron alumnos</p>
            </div>
          ) : (
            filtered.map(s => (
              <button 
                key={s.id} 
                onMouseDown={() => {
                  onSelect(s);
                  setSearch('');
                }} 
                className="w-full text-left px-6 py-4 hover:bg-blue-50 border-b border-gray-50 last:border-0 flex items-center justify-between transition-colors group"
              >
                <div>
                  <p className="font-bold text-vault-darkBlue text-lg">{s.nombre}</p>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">
                    <span className="font-mono text-vault-blue bg-blue-50 px-2 py-0.5 rounded mr-2">{s.matricula}</span>
                    {s.grado} - Grupo {s.grupo}
                  </p>
                </div>
                <ChevronRight className="text-gray-300 group-hover:text-vault-blue transition-colors" />
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};