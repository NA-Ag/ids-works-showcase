import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Product {
  id: string;
  nombre: string;
  precio: number;
  categoria: string;
  icon: string;
}

export interface StudentBalance {
  id: string;
  nombre: string;
  saldo: number;
  grado: string;
}

export interface TicketItem extends Product {
  cantidad: number;
}

interface POSContextType {
  categories: Category[];
  products: Product[];
  students: StudentBalance[];
  cart: TicketItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  checkoutCash: () => void;
  checkoutStudent: (studentId: string) => boolean; // Returns true if successful
  total: number;
}

const POSContext = createContext<POSContextType | undefined>(undefined);

const CATEGORIES: Category[] = [
  { id: 'comida', name: 'Comida', icon: 'fa-utensils', color: 'from-orange-500 to-red-500' },
  { id: 'bebidas', name: 'Bebidas', icon: 'fa-glass-water', color: 'from-vault-blue to-blue-500' },
  { id: 'snacks', name: 'Snacks', icon: 'fa-cookie-bite', color: 'from-vault-yellow to-yellow-500' }
];

const MOCK_PRODUCTS: Product[] = [
  // Comida
  { id: 'P001', nombre: 'Torta de Jamón', precio: 35, categoria: 'comida', icon: 'fa-bread-slice' },
  { id: 'P002', nombre: 'Torta de Milanesa', precio: 45, categoria: 'comida', icon: 'fa-drumstick-bite' },
  { id: 'P003', nombre: 'Orden de Tacos (3)', precio: 40, categoria: 'comida', icon: 'fa-pepper-hot' },
  { id: 'P004', nombre: 'Quesadilla de Queso', precio: 25, categoria: 'comida', icon: 'fa-cheese' },
  // Bebidas
  { id: 'P009', nombre: 'Jugo Boing', precio: 15, categoria: 'bebidas', icon: 'fa-box-open' },
  { id: 'P010', nombre: 'Jugo Del Valle', precio: 18, categoria: 'bebidas', icon: 'fa-box-open' },
  { id: 'P011', nombre: 'Agua Natural 500ml', precio: 12, categoria: 'bebidas', icon: 'fa-bottle-water' },
  // Snacks
  { id: 'P016', nombre: 'Papas Sabritas', precio: 18, categoria: 'snacks', icon: 'fa-bag-shopping' },
  { id: 'P019', nombre: 'Galletas Marías', precio: 12, categoria: 'snacks', icon: 'fa-cookie' },
  { id: 'P021', nombre: 'Palomitas', precio: 14, categoria: 'snacks', icon: 'fa-popcorn' },
];

const MOCK_STUDENTS: StudentBalance[] = [
  { id: 'ALU001', nombre: 'Sofía Martínez Ruiz', saldo: 500, grado: '3° Primaria' },
  { id: 'ALU002', nombre: 'Diego Hernández Vega', saldo: 750, grado: '5° Primaria' },
  { id: 'ALU003', nombre: 'María Fernanda Torres', saldo: 300, grado: '1° Secundaria' },
];

export const POSProvider: React.FC<{ children: React.ReactNode, mode?: 'mock' | 'api' }> = ({ children, mode = 'mock' }) => {
  const [categories] = useState<Category[]>(CATEGORIES);
  const [products] = useState<Product[]>(MOCK_PRODUCTS);
  const [students, setStudents] = useState<StudentBalance[]>(MOCK_STUDENTS);
  const [cart, setCart] = useState<TicketItem[]>([]);

  const total = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, cantidad: i.cantidad + 1 } : i);
      }
      return [...prev, { ...product, cantidad: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = i.cantidad + delta;
        return { ...i, cantidad: Math.max(1, newQty) };
      }
      return i;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCart([]);

  const checkoutCash = () => {
    // Process checkout
    clearCart();
  };

  const checkoutStudent = (studentId: string): boolean => {
    const student = students.find(s => s.id === studentId);
    if (student && student.saldo >= total) {
      setStudents(prev => prev.map(s => s.id === studentId ? { ...s, saldo: s.saldo - total } : s));
      clearCart();
      return true;
    }
    return false;
  };

  return (
    <POSContext.Provider value={{
      categories, products, students, cart, total,
      addToCart, updateQuantity, removeFromCart, clearCart, checkoutCash, checkoutStudent
    }}>
      {children}
    </POSContext.Provider>
  );
};

export const usePOS = () => {
  const context = useContext(POSContext);
  if (!context) throw new Error('usePOS must be used within a POSProvider');
  return context;
};
