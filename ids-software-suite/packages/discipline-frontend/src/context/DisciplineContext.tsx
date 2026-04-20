import React, { createContext, useContext, useState } from 'react';

export interface Student {
  id: string;
  nombre: string;
  grado: string;
  grupo: string;
  matricula: string;
}

export interface DisciplineRecord {
  id: string;
  studentId: string;
  tipo: 'retardo' | 'uniforme' | 'reporte';
  fecha: string;
  motivo?: string;
  severidad?: 'leve' | 'moderado' | 'severo';
}

interface DisciplineContextType {
  students: Student[];
  records: DisciplineRecord[];
  addRecord: (record: Omit<DisciplineRecord, 'id'>) => void;
}

const DisciplineContext = createContext<DisciplineContextType | undefined>(undefined);

const MOCK_STUDENTS: Student[] = [
  { id: 'ALU001', nombre: 'Sofía Elena Martínez Ruiz', grado: '1° Primaria', grupo: 'A', matricula: '2026001' },
  { id: 'ALU002', nombre: 'Diego Alejandro Hernández Vega', grado: '3° Secundaria', grupo: 'B', matricula: '2026002' },
  { id: 'ALU003', nombre: 'María Fernanda Torres Luna', grado: '5° Primaria', grupo: 'C', matricula: '2026003' },
  { id: 'ALU004', nombre: 'Roberto Javier Díaz Campos', grado: '2° Secundaria', grupo: 'A', matricula: '2026004' },
  { id: 'ALU005', nombre: 'Valentina Isabella Cruz Morales', grado: '6° Primaria', grupo: 'A', matricula: '2026005' },
];

const today = new Date();
const pastDate = new Date(today);
pastDate.setDate(pastDate.getDate() - 2);
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const MOCK_RECORDS: DisciplineRecord[] = [
  { id: 'REC001', studentId: 'ALU002', tipo: 'retardo', fecha: pastDate.toISOString(), motivo: 'Llegó 15 minutos después del toque', severidad: 'leve' },
  { id: 'REC002', studentId: 'ALU003', tipo: 'uniforme', fecha: yesterday.toISOString(), motivo: 'Sin playera del uniforme oficial', severidad: 'leve' },
  { id: 'REC003', studentId: 'ALU004', tipo: 'reporte', fecha: yesterday.toISOString(), motivo: 'Falta de respeto a un compañero durante el recreo', severidad: 'moderado' },
  { id: 'REC004', studentId: 'ALU002', tipo: 'reporte', fecha: pastDate.toISOString(), motivo: 'No presentó tarea de matemáticas por tercera vez consecutiva', severidad: 'moderado' },
];

export const DisciplineProvider: React.FC<{ children: React.ReactNode, mode?: 'mock' | 'api' }> = ({ children, mode = 'mock' }) => {
  const [students] = useState<Student[]>(MOCK_STUDENTS);
  const [records, setRecords] = useState<DisciplineRecord[]>(MOCK_RECORDS);

  const addRecord = (recordData: Omit<DisciplineRecord, 'id'>) => {
    const newRecord: DisciplineRecord = {
      ...recordData,
      id: `REC${String(records.length + 1).padStart(3, '0')}`,
    };
    setRecords(prev => [newRecord, ...prev]);
  };

  return (
    <DisciplineContext.Provider value={{ students, records, addRecord }}>
      {children}
    </DisciplineContext.Provider>
  );
};

export const useDiscipline = () => {
  const context = useContext(DisciplineContext);
  if (!context) throw new Error('useDiscipline must be used within a DisciplineProvider');
  return context;
};
