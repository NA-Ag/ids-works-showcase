import React, { createContext, useContext, useState, useEffect } from 'react';
import { generateClientKeys, exportPublicKey, importServerPublicKey, deriveSharedSecret } from '../utils/crypto';

// Define the types for our data
export interface Student {
  id: string;
  name: string;
  grade: string;
  status: 'Activo' | 'Inactivo';
  bloodType: string;
  tutor: string;
}

export interface Activity {
  id: number;
  action: string;
  user: string;
  time: string;
  type: 'add' | 'doc' | 'edit' | 'finance';
}

export interface ClientDevice {
  ip: string;
  name: string;
  type: string;
  time: string;
}

interface DataContextType {
  isServerRunning: boolean;
  setIsServerRunning: (val: boolean) => void;
  students: Student[];
  activities: Activity[];
  connectedClients: ClientDevice[];
  stats: {
    activeStudents: string;
    staff: string;
    enrollmentPercentage: string;
    absencesToday: string;
  };
  sharedSecret: CryptoKey | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Initial mock data
const MOCK_STUDENTS: Student[] = [
  { id: '24-001', name: 'García Pérez, Ana María', grade: '3º Secundaria', status: 'Activo', bloodType: 'O+', tutor: 'María Pérez (Madre)' },
  { id: '24-002', name: 'López Hernández, Carlos', grade: '1º Primaria', status: 'Activo', bloodType: 'A+', tutor: 'Juan López (Padre)' },
  { id: '24-003', name: 'Martínez Silva, Sofía', grade: '2º Preparatoria', status: 'Inactivo', bloodType: 'B-', tutor: 'Roberto Martínez (Padre)' },
  { id: '24-004', name: 'Ramírez Gómez, Diego', grade: '3º Kinder', status: 'Activo', bloodType: 'O+', tutor: 'Ana Gómez (Madre)' },
  { id: '24-005', name: 'Sánchez Ruiz, Valeria', grade: '2º Secundaria', status: 'Activo', bloodType: 'AB+', tutor: 'Luis Sánchez (Padre)' },
];

const MOCK_ACTIVITIES: Activity[] = [
  { id: 1, action: "Alumno 'Ana García' registrado", user: "Control Escolar", time: "Hace 5 minutos", type: "add" },
  { id: 2, action: "Constancia de Estudios generada", user: "Dirección", time: "Hace 15 minutos", type: "doc" },
  { id: 3, action: "Calificaciones de 3º B actualizadas", user: "Profesor Martínez", time: "Hace 1 hora", type: "edit" },
  { id: 4, action: "Cobro de colegiatura registrado", user: "Caja Principal", time: "Hace 2 horas", type: "finance" },
];

const MOCK_CLIENTS: ClientDevice[] = [
  { ip: '192.168.1.112', name: 'PC-Caja-01', type: 'Finanzas', time: '08:30 AM' },
  { ip: '192.168.1.115', name: 'MacBook-Dir', type: 'Dirección', time: '09:15 AM' },
  { ip: '192.168.1.120', name: 'PC-Prefectura', type: 'Control Escolar', time: '09:45 AM' },
];

export const DataProvider: React.FC<{ children: React.ReactNode, mode?: 'mock' | 'api' }> = ({ children, mode = 'mock' }) => {
  const [isServerRunning, setIsServerRunning] = useState(true);
  const [isNewStudentModalOpen, setIsNewStudentModalOpen] = useState(false);
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);
  const [activities, setActivities] = useState<Activity[]>(MOCK_ACTIVITIES);
  const [connectedClients, setConnectedClients] = useState<ClientDevice[]>(MOCK_CLIENTS);
  const [sharedSecret, setSharedSecret] = useState<CryptoKey | null>(null);

  const stats = {
    activeStudents: students.filter(s => s.status === 'Activo').length.toLocaleString(),
    staff: '84',
    enrollmentPercentage: '89%',
    absencesToday: '12'
  };

  const addStudent = (student: Omit<Student, 'id'>) => {
    const newId = `24-${(students.length + 1).toString().padStart(3, '0')}`;
    setStudents(prev => [{ ...student, id: newId }, ...prev]);
  };

  const toggleStudentStatus = (id: string) => {
    setStudents(prev => prev.map(s => 
      s.id === id ? { ...s, status: s.status === 'Activo' ? 'Inactivo' : 'Activo' } : s
    ));
  };

  const addActivity = (action: string, type: Activity['type']) => {
    const newActivity: Activity = {
      id: Date.now(),
      action,
      user: "Administrador",
      time: "Ahora mismo",
      type
    };
    setActivities(prev => [newActivity, ...prev].slice(0, 10)); // Keep last 10
  };

  useEffect(() => {
    if (mode === 'api') {
      const initHandshake = async () => {
        try {
          console.log("Generating client ECDH keys...");
          const keyPair = await generateClientKeys();
          const publicKeyHex = await exportPublicKey(keyPair.publicKey);

          console.log("Sending public key to Host...");
          // In a real scenario, this IP will come from user input or IPC from Electron
          const res = await fetch('http://localhost:3000/api/handshake', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ publicKey: publicKeyHex })
          });
          
          if (!res.ok) throw new Error('Handshake failed');
          
          const { serverPublicKey, sessionId } = await res.json();
          
          console.log("Deriving shared AES-GCM secret...");
          const importedServerKey = await importServerPublicKey(serverPublicKey);
          const secret = await deriveSharedSecret(keyPair.privateKey, importedServerKey);
          
          setSharedSecret(secret);
          sessionStorage.setItem('e2e_session_id', sessionId);
          console.log("E2E Handshake complete! Ready for encrypted communication.");
        } catch (err) {
          console.error("E2E Handshake error:", err);
        }
      };

      initHandshake();
    }
  }, [mode]);

  return (
    <DataContext.Provider value={{
      isServerRunning, setIsServerRunning,
      isNewStudentModalOpen, setIsNewStudentModalOpen,
      students, addStudent, toggleStudentStatus,
      activities, addActivity,
      connectedClients, setConnectedClients,
      stats,
      sharedSecret
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};