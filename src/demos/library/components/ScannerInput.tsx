import React, { useState, useRef, useEffect } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { Barcode, Search, AlertTriangle, BookCheck, Info, X } from 'lucide-react';

export const ScannerInput: React.FC = () => {
  const { books, students, lendBook, returnBook, addBook } = useLibrary();
  const inputRef = useRef<HTMLInputElement>(null);
  const [code, setCode] = useState('');
  
  // Modals
  const [pendingBook, setPendingBook] = useState<any>(null); // For lending
  const [showAddBook, setShowAddBook] = useState(false); // For adding new book
  const [newBookCode, setNewBookCode] = useState('');
  
  // Forms
  const [lendForm, setLendForm] = useState({ studentId: '', fecha: '' });
  const [addForm, setAddForm] = useState({ titulo: '', autor: '', editorial: '' });
  
  const [notification, setNotification] = useState<{ msg: string, type: 'success' | 'error' | 'info' } | null>(null);

  useEffect(() => {
    // Keep focus on input for barcode scanner
    const timer = setTimeout(() => inputRef.current?.focus(), 100);
    const focusHandler = () => {
      if (!pendingBook && !showAddBook) inputRef.current?.focus();
    };
    window.addEventListener('click', focusHandler);
    return () => { clearTimeout(timer); window.removeEventListener('click', focusHandler); };
  }, [pendingBook, showAddBook]);

  const showNotif = (msg: string, type: 'success' | 'error' | 'info' = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const addDays = (date: Date, days: number) => {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  };

  const handleScan = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const scannedCode = code.trim();
      setCode('');
      if (!scannedCode) return;

      const book = books.find(b => b.codigo === scannedCode || b.id === scannedCode);

      if (!book) {
        setNewBookCode(scannedCode);
        setShowAddBook(true);
        return;
      }

      if (book.estado === 'disponible') {
        setPendingBook(book);
        setLendForm({ studentId: '', fecha: addDays(new Date(), 7) });
      } else {
        returnBook(book.id);
        showNotif(`Devolución Registrada: "${book.titulo}"`, 'success');
      }
    }
  };

  const handleLendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lendForm.studentId) {
      showNotif('Debes seleccionar un estudiante', 'error');
      return;
    }
    lendBook(pendingBook.id, lendForm.studentId, lendForm.fecha);
    setPendingBook(null);
    showNotif(`Préstamo Exitoso: "${pendingBook.titulo}"`, 'success');
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addForm.titulo || !addForm.autor) {
      showNotif('Título y autor son obligatorios', 'error');
      return;
    }
    addBook({
      codigo: newBookCode,
      titulo: addForm.titulo,
      autor: addForm.autor,
      editorial: addForm.editorial,
      estado: 'disponible'
    });
    setShowAddBook(false);
    setAddForm({ titulo: '', autor: '', editorial: '' });
    showNotif('Libro agregado al catálogo', 'success');
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8 relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-vault-blue/5 rounded-bl-full -z-10"></div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-vault-yellow p-4 rounded-2xl shadow-inner shrink-0">
            <Barcode className="text-vault-darkBlue w-10 h-10" />
          </div>
          <div className="flex-1 w-full">
            <h2 className="text-lg font-black text-vault-darkBlue uppercase tracking-widest mb-2">Escáner de Código de Barras</h2>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Escanea el ISBN o ID del libro aquí (Presiona Enter)" 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vault-blue focus:border-vault-blue outline-none transition-all font-mono text-lg text-vault-darkBlue font-bold shadow-inner"
                value={code}
                onChange={e => setCode(e.target.value)}
                onKeyDown={handleScan}
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        {notification && (
          <div className={`mt-4 p-4 rounded-xl flex items-center gap-3 animate-fade-in border ${
            notification.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
            notification.type === 'error' ? 'bg-red-50 border-red-200 text-red-700' :
            'bg-blue-50 border-blue-200 text-vault-blue'
          }`}>
            {notification.type === 'success' ? <BookCheck size={20} /> : <AlertTriangle size={20} />}
            <span className="font-bold text-sm">{notification.msg}</span>
          </div>
        )}
      </div>

      {/* LEND BOOK MODAL */}
      {pendingBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-darkBlue/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <h3 className="text-sm font-black text-vault-darkBlue uppercase tracking-widest flex items-center gap-2">
                <BookOpen className="text-vault-blue" size={18} /> Registrar Préstamo
              </h3>
              <button onClick={() => setPendingBook(null)} className="text-gray-400 hover:text-red-500 transition-colors"><X size={20}/></button>
            </div>
            
            <form onSubmit={handleLendSubmit} className="p-6 space-y-6">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-4">
                <div className="w-12 h-16 bg-blue-200 rounded shadow-inner shrink-0"></div>
                <div>
                  <p className="text-[10px] font-black text-vault-blue uppercase tracking-widest mb-1">Libro Seleccionado</p>
                  <p className="text-lg text-vault-darkBlue font-black leading-tight">{pendingBook.titulo}</p>
                  <p className="text-xs font-bold text-gray-500 mt-1">{pendingBook.autor}</p>
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Estudiante</label>
                <select 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vault-blue outline-none bg-white font-bold text-sm text-vault-darkBlue"
                  value={lendForm.studentId}
                  onChange={(e) => setLendForm({...lendForm, studentId: e.target.value})}
                  required
                >
                  <option value="">Selecciona un estudiante...</option>
                  {students.map(s => (
                    <option key={s.id} value={s.id}>{s.nombre} ({s.grado} - {s.matricula})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Fecha de Entrega Esperada</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vault-blue outline-none font-mono font-bold text-sm text-vault-darkBlue"
                  value={lendForm.fecha}
                  onChange={(e) => setLendForm({...lendForm, fecha: e.target.value})}
                  required
                />
              </div>
              
              <button type="submit" className="w-full py-4 bg-vault-yellow text-vault-darkBlue rounded-xl font-black uppercase tracking-widest shadow-md hover:bg-yellow-400 transition-all active:scale-95">
                Confirmar Préstamo
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ADD BOOK MODAL */}
      {showAddBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-darkBlue/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <h3 className="text-sm font-black text-vault-darkBlue uppercase tracking-widest flex items-center gap-2">
                <AlertTriangle className="text-vault-yellow" size={18} /> Libro No Registrado
              </h3>
              <button onClick={() => setShowAddBook(false)} className="text-gray-400 hover:text-red-500 transition-colors"><X size={20}/></button>
            </div>
            
            <form onSubmit={handleAddSubmit} className="p-6 space-y-6">
              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm font-medium text-yellow-800">
                El código escaneado (<strong className="font-mono">{newBookCode}</strong>) no existe en el catálogo. Registre los detalles para agregarlo al inventario.
              </div>
              
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Título del Libro</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vault-blue outline-none font-bold text-sm text-vault-darkBlue"
                  value={addForm.titulo}
                  onChange={(e) => setAddForm({...addForm, titulo: e.target.value})}
                  required
                  placeholder="Ej. Don Quijote de la Mancha"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Autor</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vault-blue outline-none font-bold text-sm text-vault-darkBlue"
                  value={addForm.autor}
                  onChange={(e) => setAddForm({...addForm, autor: e.target.value})}
                  required
                  placeholder="Ej. Miguel de Cervantes"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Editorial (Opcional)</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-vault-blue outline-none font-bold text-sm text-vault-darkBlue"
                  value={addForm.editorial}
                  onChange={(e) => setAddForm({...addForm, editorial: e.target.value})}
                  placeholder="Ej. Editorial Castalia"
                />
              </div>
              
              <button type="submit" className="w-full py-4 bg-vault-blue text-white rounded-xl font-black uppercase tracking-widest shadow-md hover:bg-vault-darkBlue transition-all active:scale-95">
                Guardar en Catálogo
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};