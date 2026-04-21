import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Student {
  id: string;
  nombre: string;
  grado: string;
  grupo: string;
  alergias: string[];
}

export interface MedicalVisit {
  id: string;
  studentId: string;
  motivo: string;
  tratamiento: string;
  notas: string;
  fechaHora: string; // ISO String
  enfermera: string;
}

interface ClinicContextType {
  students: Student[];
  visits: MedicalVisit[];
  addVisit: (visit: Omit<MedicalVisit, 'id' | 'fechaHora'>) => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

const MOCK_STUDENTS: Student[] = [
  { id: '1', nombre: 'Juan Pérez Hernández', grado: '5° Primaria', grupo: 'A', alergias: ['Penicilina', 'Nueces'] },
  { id: '2', nombre: 'María García López', grado: '3° Primaria', grupo: 'B', alergias: [] },
  { id: '3', nombre: 'Sofía Martínez Ruiz', grado: '1° Secundaria', grupo: 'A', alergias: ['Polen', 'Ácaros'] },
  { id: '4', nombre: 'Diego Torres Sánchez', grado: '6° Primaria', grupo: 'A', alergias: ['Ninguna conocida'] },
  { id: '5', nombre: 'Valentina Rodríguez Cruz', grado: '2° Primaria', grupo: 'C', alergias: ['Sulfas', 'Lactosa'] },
];

const today = new Date().toISOString().split('T')[0];
const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

const MOCK_VISITS: MedicalVisit[] = [
  { id: 'v1', studentId: '1', motivo: 'Dolor de cabeza', tratamiento: 'Reposo', notas: 'Estudiante refiere dolor leve.', fechaHora: `${today}T09:30:00Z`, enfermera: 'Enf. Laura' },
  { id: 'v2', studentId: '2', motivo: 'Golpe/Caída', tratamiento: 'Curación', notas: 'Rasguño en rodilla derecha.', fechaHora: `${today}T11:15:00Z`, enfermera: 'Enf. Laura' },
  { id: 'v3', studentId: '3', motivo: 'Fiebre', tratamiento: 'Llamada a Padres', notas: 'Temperatura: 38.5°C.', fechaHora: `${today}T13:45:00Z`, enfermera: 'Enf. María' },
  { id: 'v4', studentId: '1', motivo: 'Dolor de estómago', tratamiento: 'Reposo', notas: 'Dolor abdominal leve.', fechaHora: `${yesterday}T10:00:00Z`, enfermera: 'Enf. Laura' },
  { id: 'v5', studentId: '5', motivo: 'Dolor de cabeza', tratamiento: 'Medicamento', notas: 'Se administra paracetamol.', fechaHora: `${yesterday}T14:30:00Z`, enfermera: 'Enf. María' },
];

export const ClinicProvider: React.FC<{ children: React.ReactNode, mode?: 'mock' | 'api' }> = ({ children, mode = 'mock' }) => {
  const [students] = useState<Student[]>(MOCK_STUDENTS);
  const [visits, setVisits] = useState<MedicalVisit[]>(MOCK_VISITS);

  const addVisit = (visitData: Omit<MedicalVisit, 'id' | 'fechaHora'>) => {
    const newVisit: MedicalVisit = {
      ...visitData,
      id: `VIS${String(visits.length + 1).padStart(4, '0')}`,
      fechaHora: new Date().toISOString()
    };
    setVisits(prev => [newVisit, ...prev]);
  };

  return (
    <ClinicContext.Provider value={{ students, visits, addVisit }}>
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) throw new Error('useClinic must be used within a ClinicProvider');
  return context;
};