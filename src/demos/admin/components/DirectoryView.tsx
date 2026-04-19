import React from 'react';
import { Search, Filter, MoreVertical, Edit2, FileText, UserMinus } from 'lucide-react';

const STUDENTS = [
  { id: '24-001', name: 'García Pérez, Ana María', grade: '3º Secundaria', status: 'Activo', bloodType: 'O+', tutor: 'María Pérez (Madre)' },
  { id: '24-002', name: 'López Hernández, Carlos', grade: '1º Primaria', status: 'Activo', bloodType: 'A+', tutor: 'Juan López (Padre)' },
  { id: '24-003', name: 'Martínez Silva, Sofía', grade: '2º Preparatoria', status: 'Inactivo', bloodType: 'B-', tutor: 'Roberto Martínez (Padre)' },
  { id: '24-004', name: 'Ramírez Gómez, Diego', grade: '3º Kinder', status: 'Activo', bloodType: 'O+', tutor: 'Ana Gómez (Madre)' },
  { id: '24-005', name: 'Sánchez Ruiz, Valeria', grade: '2º Secundaria', status: 'Activo', bloodType: 'AB+', tutor: 'Luis Sánchez (Padre)' },
];

export const DirectoryView: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Buscar por nombre, matrícula o tutor..." className="pl-10 pr-4 py-2 w-full bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:border-vault-blue focus:ring-2 focus:ring-vault-blue/20 outline-none transition-all" />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-100">
              <Filter size={16} /> Filtros
            </button>
            <button className="px-4 py-2 bg-vault-blue text-white rounded-lg text-sm font-bold hover:bg-vault-darkBlue transition-colors shadow-md">
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
              {STUDENTS.map((student) => (
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
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      student.status === 'Activo' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-red-50 text-red-600 border border-red-100'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${student.status === 'Activo' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-vault-blue transition-colors rounded-full hover:bg-blue-50">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <p>Mostrando 5 de 1,248 alumnos</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 font-bold">Anterior</button>
            <button className="px-3 py-1 bg-vault-blue text-white rounded font-bold">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 font-bold">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 font-bold">3</button>
            <span className="px-2 py-1">...</span>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 font-bold">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
};