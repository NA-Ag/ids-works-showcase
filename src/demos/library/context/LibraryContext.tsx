import React, { createContext, useContext, useState } from 'react';

export interface Book {
  id: string;
  codigo: string;
  titulo: string;
  autor: string;
  editorial: string;
  estado: 'disponible' | 'prestado' | 'vencido';
}

export interface Student {
  id: string;
  nombre: string;
  grado: string;
  matricula: string;
}

export interface Loan {
  id: string;
  libroId: string;
  estudianteId: string;
  fechaPrestamo: string;
  fechaEntrega: string;
  fechaDevolucion: string | null;
  estado: 'prestado' | 'devuelto' | 'vencido';
}

interface LibraryContextType {
  books: Book[];
  students: Student[];
  loans: Loan[];
  addBook: (book: Omit<Book, 'id'>) => void;
  updateBookStatus: (id: string, status: Book['estado']) => void;
  lendBook: (bookId: string, studentId: string, dueDate: string) => void;
  returnBook: (bookId: string) => void;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

const MOCK_BOOKS: Book[] = [
  { id: 'LIB001', codigo: '978-0316769488', titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', editorial: 'HarperCollins', estado: 'prestado' },
  { id: 'LIB002', codigo: '978-0451524935', titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', editorial: 'Penguin', estado: 'disponible' },
  { id: 'LIB003', codigo: '978-8437604947', titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', editorial: 'Castalia', estado: 'vencido' },
  { id: 'LIB004', codigo: '978-0307474278', titulo: 'Rayuela', autor: 'Julio Cortázar', editorial: 'Vintage', estado: 'disponible' },
  { id: 'LIB005', codigo: '978-0307744432', titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', editorial: 'Penguin', estado: 'prestado' },
];

const MOCK_STUDENTS: Student[] = [
  { id: 'EST001', nombre: 'Sofía Martínez Ruiz', grado: '3° Primaria', matricula: '2024001' },
  { id: 'EST002', nombre: 'Diego Hernández Vega', grado: '5° Primaria', matricula: '2024002' },
  { id: 'EST003', nombre: 'María Fernanda Torres', grado: '1° Secundaria', matricula: '2024003' },
];

const today = new Date();
const pastDate = new Date(); pastDate.setDate(today.getDate() - 10);
const futureDate = new Date(); futureDate.setDate(today.getDate() + 2);
const activeDate = new Date(); activeDate.setDate(today.getDate() + 5);

const MOCK_LOANS: Loan[] = [
  { id: 'PRE001', libroId: 'LIB003', estudianteId: 'EST001', fechaPrestamo: pastDate.toISOString(), fechaEntrega: pastDate.toISOString(), fechaDevolucion: null, estado: 'vencido' },
  { id: 'PRE002', libroId: 'LIB001', estudianteId: 'EST002', fechaPrestamo: futureDate.toISOString(), fechaEntrega: futureDate.toISOString(), fechaDevolucion: null, estado: 'prestado' },
  { id: 'PRE003', libroId: 'LIB005', estudianteId: 'EST003', fechaPrestamo: activeDate.toISOString(), fechaEntrega: activeDate.toISOString(), fechaDevolucion: null, estado: 'prestado' },
];

export const LibraryProvider: React.FC<{ children: React.ReactNode, mode?: 'mock' | 'api' }> = ({ children, mode = 'mock' }) => {
  const [books, setBooks] = useState<Book[]>(MOCK_BOOKS);
  const [students] = useState<Student[]>(MOCK_STUDENTS);
  const [loans, setLoans] = useState<Loan[]>(MOCK_LOANS);

  const addBook = (bookData: Omit<Book, 'id'>) => {
    const newBook: Book = {
      ...bookData,
      id: `LIB${String(books.length + 1).padStart(3, '0')}`,
    };
    setBooks(prev => [...prev, newBook]);
  };

  const updateBookStatus = (id: string, status: Book['estado']) => {
    setBooks(prev => prev.map(b => b.id === id ? { ...b, estado: status } : b));
  };

  const lendBook = (bookId: string, studentId: string, dueDate: string) => {
    const newLoan: Loan = {
      id: `PRE${String(loans.length + 1).padStart(3, '0')}`,
      libroId: bookId,
      estudianteId: studentId,
      fechaPrestamo: new Date().toISOString(),
      fechaEntrega: new Date(dueDate).toISOString(),
      fechaDevolucion: null,
      estado: 'prestado'
    };
    setLoans(prev => [...prev, newLoan]);
    updateBookStatus(bookId, 'prestado');
  };

  const returnBook = (bookId: string) => {
    setLoans(prev => prev.map(l => l.libroId === bookId && !l.fechaDevolucion ? { ...l, fechaDevolucion: new Date().toISOString(), estado: 'devuelto' } : l));
    updateBookStatus(bookId, 'disponible');
  };

  return (
    <LibraryContext.Provider value={{ books, students, loans, addBook, updateBookStatus, lendBook, returnBook }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) throw new Error('useLibrary must be used within a LibraryProvider');
  return context;
};
