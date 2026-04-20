import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Employee {
  id: string;
  nombre: string;
  puesto: string;
  tipoPago: 'fijo' | 'hora';
  salarioBase: number;
  rfc: string;
  nss: string;
}

export interface Incidence {
  id: string;
  empleadoId: string;
  fecha: string;
  tipo: 'retardo' | 'falta_injustificada' | 'incapacidad_imss' | 'permiso';
  notas: string;
}

export interface PayrollPeriod {
  year: number;
  month: number;
  quincena: 1 | 2;
}

interface HRContextType {
  employees: Employee[];
  incidences: Incidence[];
  period: PayrollPeriod;
  setPeriod: (p: PayrollPeriod) => void;
  addIncidence: (i: Incidence) => void;
}

const HRContext = createContext<HRContextType | undefined>(undefined);

const MOCK_EMPLOYEES: Employee[] = [
  { id: 'EMP001', nombre: 'María Elena Ríos Gutiérrez', puesto: 'Coordinador Académico', tipoPago: 'fijo', salarioBase: 28500, rfc: 'RIGM850615XX0', nss: '12345678901' },
  { id: 'EMP002', nombre: 'Carlos Alberto Mendoza Silva', puesto: 'Maestro de Matemáticas', tipoPago: 'hora', salarioBase: 195, rfc: 'MESC900210YY1', nss: '09876543210' },
  { id: 'EMP003', nombre: 'Sofía Valentina Torres Luna', puesto: 'Maestra de Ciencias', tipoPago: 'hora', salarioBase: 185, rfc: 'TOLS950422ZZ2', nss: '11223344556' },
  { id: 'EMP004', nombre: 'Roberto Alejandro Díaz Campos', puesto: 'Director General', tipoPago: 'fijo', salarioBase: 52000, rfc: 'DICR780830AA3', nss: '66554433221' },
];

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const monthStr = String(month).padStart(2, '0');

const MOCK_INCIDENCES: Incidence[] = [
  { id: 'INC001', empleadoId: 'EMP002', fecha: `${year}-${monthStr}-03`, tipo: 'retardo', notas: 'Llegó 15 minutos tarde' },
  { id: 'INC002', empleadoId: 'EMP002', fecha: `${year}-${monthStr}-05`, tipo: 'retardo', notas: 'Llegó 20 minutos tarde' },
  { id: 'INC003', empleadoId: 'EMP001', fecha: `${year}-${monthStr}-08`, tipo: 'permiso', notas: 'Asesoría externa' },
  { id: 'INC004', empleadoId: 'EMP003', fecha: `${year}-${monthStr}-10`, tipo: 'falta_injustificada', notas: 'Sin justificación previa' },
];

export const HRProvider: React.FC<{ children: React.ReactNode, mode?: 'mock' | 'api' }> = ({ children, mode = 'mock' }) => {
  const [employees, setEmployees] = useState<Employee[]>(MOCK_EMPLOYEES);
  const [incidences, setIncidences] = useState<Incidence[]>(MOCK_INCIDENCES);
  const [period, setPeriod] = useState<PayrollPeriod>({
    year: today.getFullYear(),
    month: today.getMonth(),
    quincena: today.getDate() >= 16 ? 2 : 1
  });

  const addIncidence = (inc: Incidence) => {
    setIncidences(prev => [...prev, inc]);
  };

  return (
    <HRContext.Provider value={{ employees, incidences, period, setPeriod, addIncidence }}>
      {children}
    </HRContext.Provider>
  );
};

export const useHR = () => {
  const context = useContext(HRContext);
  if (!context) throw new Error('useHR must be used within a HRProvider');
  return context;
};
