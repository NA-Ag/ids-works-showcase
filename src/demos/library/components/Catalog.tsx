import React, { useState, useMemo } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { Search, LibraryBig } from 'lucide-react';

export const Catalog: React.FC = () => {
  const { books } = useLibrary();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = useMemo(() => {
    if (!searchTerm) return books;
    const term = searchTerm.toLowerCase();
    return books.filter(b => 
      b.titulo.toLowerCase().includes(term) || 
      b.autor.toLowerCase().includes(term) || 
      b.codigo.toLowerCase().includes(term)
    );
  }, [books, searchTerm]);

  const getStatusBadge = (estado: string) => {
    switch(estado) {
      case 'disponible':
        return <span className="inline-flex px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest border bg-emerald-50 text-emerald-700 border-emerald-200">Disponible</span>;
      case 'prestado':
        return <span className="inline-flex px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest border bg-blue-50 text-vault-blue border-blue-200">Prestado</span>;
      case 'vencido':
        return <span className="inline-flex px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest border bg-red-50 text-red-700 border-red-200">Vencido</span>;
      default:
        return <span className="text-gray-500">{estado}</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter">Catálogo General</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mt-1">Inventario físico de la biblioteca</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text"
            placeholder="Buscar por título, autor o código ISBN..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-vault-blue focus:ring-2 focus:ring-vault-blue/20 outline-none transition-all font-bold text-sm text-vault-darkBlue placeholder:text-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Código / ISBN</th>
                <th className="py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Título</th>
                <th className="py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Autor</th>
                <th className="py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Editorial</th>
                <th className="py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100 text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredBooks.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-16 text-center text-gray-400 flex flex-col items-center justify-center">
                    <LibraryBig className="w-12 h-12 mb-3 opacity-30" />
                    <span className="font-bold uppercase tracking-widest text-sm">No se encontraron libros</span>
                  </td>
                </tr>
              ) : (
                filteredBooks.map(book => (
                  <tr key={book.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-mono text-sm font-bold text-vault-blue">{book.codigo}</td>
                    <td className="py-4 px-6 font-black text-vault-darkBlue">{book.titulo}</td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-600">{book.autor}</td>
                    <td className="py-4 px-6 text-xs font-bold text-gray-400">{book.editorial || '-'}</td>
                    <td className="py-4 px-6 text-center">{getStatusBadge(book.estado)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};