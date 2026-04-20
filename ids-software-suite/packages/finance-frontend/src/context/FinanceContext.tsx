import React, { createContext, useContext, useState, useEffect } from 'react';

export interface StudentFinance {
  id: string;
  nombre: string;
  grado: string;
  mensualidad: number;
  inscripcion: number;
  rfc: string;
  razonSocial: string;
  usoCFDI: string;
  curp: string;
}

export interface Payment {
  id: string;
  studentId: string;
  concepto: string;
  mes: string | null;
  monto: number;
  fecha: string | null;
  formaPago: string | null;
  estado: 'Pagado' | 'Pendiente' | 'Vencido';
  folio: string | null;
}

interface FinanceContextType {
  students: StudentFinance[];
  payments: Payment[];
  addPayment: (payment: Omit<Payment, 'id' | 'fecha' | 'folio'>) => void;
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

// MOCK DATA GENERATOR
const schoolMonths = ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const currentYear = new Date().getFullYear();

const MOCK_STUDENTS: StudentFinance[] = [
  {
    id: 'EST001', nombre: 'Sofía Elena Martínez Ruiz', grado: '3° Primaria', mensualidad: 4500, inscripcion: 8000,
    rfc: 'MARS120315HDFRNP09', razonSocial: 'Carlos Martínez López', usoCFDI: 'D10', curp: 'MARS120315MDFRPN09'
  },
  {
    id: 'EST002', nombre: 'Diego Alejandro Hernández Vega', grado: '5° Primaria', mensualidad: 5200, inscripcion: 9500,
    rfc: 'HEVD100822HDFRGA02', razonSocial: 'Patricia Vega Sánchez', usoCFDI: 'D10', curp: 'HEVD100822HDFRGA02'
  },
  {
    id: 'EST003', nombre: 'María Fernanda Torres Castillo', grado: '1° Secundaria', mensualidad: 6100, inscripcion: 12000,
    rfc: 'TOCF110405MDFRRL08', razonSocial: 'Roberto Torres Aguilar', usoCFDI: 'D10', curp: 'TOCF110405MDFRRL08'
  },
  {
    id: 'EST004', nombre: 'Mateo Sebastián Cruz Flores', grado: '6° Primaria', mensualidad: 5800, inscripcion: 10000,
    rfc: 'CRFM090718HDFRRT04', razonSocial: 'Ana María Flores García', usoCFDI: 'D10', curp: 'CRFM090718HDFRRT04'
  },
  {
    id: 'EST005', nombre: 'Valentina Isabella López Morales', grado: '2° Primaria', mensualidad: 4200, inscripcion: 7500,
    rfc: 'LOMV130930MDFRRL11', razonSocial: 'Jorge López Ramírez', usoCFDI: 'D10', curp: 'LOMV130930MDFRRL11'
  }
];

const MOCK_PAYMENTS: Payment[] = [];
let paymentIdCounter = 1;
const formasPago = ['Efectivo', 'Transferencia (SPEI)', 'Tarjeta de Débito', 'Tarjeta de Crédito', 'Cheque'];

MOCK_STUDENTS.forEach(student => {
  MOCK_PAYMENTS.push({
    id: `PAY${String(paymentIdCounter++).padStart(4, '0')}`,
    studentId: student.id,
    concepto: 'Inscripción',
    mes: null,
    monto: student.inscripcion,
    fecha: `${currentYear}-08-15T10:30:00`,
    formaPago: 'Transferencia (SPEI)',
    estado: 'Pagado',
    folio: `REC-${currentYear}-${String(paymentIdCounter).padStart(4, '0')}`
  });

  const paidMonths = Math.floor(Math.random() * 3) + 2; 
  
  schoolMonths.forEach((mes, index) => {
    const isPaid = index < paidMonths;
    const paymentDate = isPaid ? 
      `${currentYear}-${String(index + 9 > 12 ? index - 3 : index + 9).padStart(2, '0')}-${String(Math.floor(Math.random() * 15) + 1).padStart(2, '0')}T${String(Math.floor(Math.random() * 8) + 9).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00` : null;

    MOCK_PAYMENTS.push({
      id: `PAY${String(paymentIdCounter++).padStart(4, '0')}`,
      studentId: student.id,
      concepto: 'Colegiatura',
      mes: mes,
      monto: student.mensualidad,
      fecha: paymentDate,
      formaPago: isPaid ? formasPago[Math.floor(Math.random() * formasPago.length)] : null,
      estado: isPaid ? 'Pagado' : 'Pendiente',
      folio: isPaid ? `REC-${currentYear}-${String(paymentIdCounter).padStart(4, '0')}` : null
    });
  });
});

export const FinanceProvider: React.FC<{ children: React.ReactNode, mode?: 'mock' | 'api' }> = ({ children, mode = 'mock' }) => {
  const [students, setStudents] = useState<StudentFinance[]>(MOCK_STUDENTS);
  const [payments, setPayments] = useState<Payment[]>(MOCK_PAYMENTS);

  const addPayment = (paymentData: Omit<Payment, 'id' | 'fecha' | 'folio'>) => {
    const newPayment: Payment = {
      ...paymentData,
      id: `PAY${String(payments.length + 1).padStart(4, '0')}`,
      fecha: new Date().toISOString(),
      estado: 'Pagado',
      folio: `REC-${new Date().getFullYear()}-${String(payments.length + 1).padStart(4, '0')}`
    };
    
    setPayments(prev => {
      // Update existing pending payment to paid, or add new
      const existingIndex = prev.findIndex(p => p.studentId === newPayment.studentId && p.concepto === newPayment.concepto && p.mes === newPayment.mes);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = newPayment;
        return updated;
      }
      return [...prev, newPayment];
    });
  };

  return (
    <FinanceContext.Provider value={{ students, payments, addPayment }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (!context) throw new Error('useFinance must be used within a FinanceProvider');
  return context;
};
