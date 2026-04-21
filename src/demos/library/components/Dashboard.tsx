import React, { useMemo } from 'react';
import { useLibrary } from '../context/LibraryContext';
import { BookText, BookUp, AlertCircle, LibraryBig } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { books, loans, students } = useLibrary();

  const metrics = useMemo(() => {
    return {
      total: books.length,
      disponibles: books.filter(b => b.estado === 'disponible').length,
      prestados: books.filter(b => b.estado === 'prestado').length,
      vencidos: books.filter(b => b.estado === 'vencido').length,
    };
  }, [books]);

  const recentLoans = useMemo(() => {
    return loans
      .filter(l => !l.fechaDevolucion) // Active loans
      .sort((a, b) => new Date(a.fechaPrestamo).getTime() - new Date(b.fechaPrestamo).getTime());
  }, [loans]);

  const getBookName = (id: string) => books.find(b => b.id === id)?.titulo || 'Desconocido';
  const getStudentName = (id: string) => students.find(s => s.id === id)?.nombre || 'Desconocido';

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total de Libros</p>
            <p className="text-4xl font-black text-vault-darkBlue font-mono">{metrics.total}</p>
          </div>
          <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
            <LibraryBig className="text-gray-400 w-7 h-7" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Disponibles</p>
            <p className="text-4xl font-black text-emerald-700 font-mono">{metrics.disponibles}</p>
          </div>
          <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100">
            <BookText className="text-emerald-500 w-7 h-7" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-vault-blue uppercase tracking-widest mb-1">En Préstamo</p>
            <p className="text-4xl font-black text-vault-blue font-mono">{metrics.prestados}</p>
          </div>
          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
            <BookUp className="text-vault-blue w-7 h-7" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">Vencidos</p>
            <p className="text-4xl font-black text-red-700 font-mono">{metrics.vencidos}</p>
          </div>
          <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center border border-red-100">
            <AlertCircle className="text-red-500 w-7 h-7" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-lg font-black text-vault-darkBlue uppercase tracking-widest flex items-center gap-3">
            <BookUp className="text-vault-blue" /> Préstamos Activos
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white">
              <tr>
                <th className="py-4 px-8 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Libro</th>
                <th className="py-4 px-8 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Estudiante</th>
                <th className="py-4 px-8 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Préstamo</th>
                <th className="py-4 px-8 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100">Entrega Estimada</th>
                <th className="py-4 px-8 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-100 text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentLoans.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-400 font-bold text-sm uppercase tracking-widest">
                    No hay préstamos activos.
                  </td>
                </tr>
              ) : (
                recentLoans.map(loan => {
                  const today = new Date(); today.setHours(0,0,0,0);
                  const deliveryDate = new Date(loan.fechaEntrega);
                  const isOverdue = deliveryDate < today;

                  return (
                    <tr key={loan.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-8 font-bold text-vault-darkBlue">{getBookName(loan.libroId)}</td>
                      <td className="py-5 px-8 text-sm font-bold text-gray-600">{getStudentName(loan.estudianteId)}</td>
                      <td className="py-5 px-8 font-mono text-xs text-gray-500">{new Date(loan.fechaPrestamo).toLocaleDateString('es-MX')}</td>
                      <td className={`py-5 px-8 font-mono text-xs font-bold ${isOverdue ? 'text-red-600' : 'text-gray-500'}`}>
                        {deliveryDate.toLocaleDateString('es-MX')}
                      </td>
                      <td className="py-5 px-8 text-center">
                        <span className={`inline-flex px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest border ${
                          isOverdue 
                            ? 'bg-red-50 text-red-700 border-red-200' 
                            : 'bg-blue-50 text-vault-blue border-blue-200'
                        }`}>
                          {isOverdue ? 'Vencido' : 'Prestado'}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};