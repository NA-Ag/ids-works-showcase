import React, { useState } from 'react';
import { usePOS } from '../context/POSContext';
import { Receipt, Plus, Minus, Trash2, Banknote, Fingerprint, X } from 'lucide-react';

export const Ticket: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, total, checkoutCash, checkoutStudent } = usePOS();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [checkoutError, setCheckoutError] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(amount);
  };

  const handleStudentCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutError('');
    if (checkoutStudent(studentId.toUpperCase())) {
      setCheckoutSuccess(true);
      setTimeout(() => {
        setIsCheckoutModalOpen(false);
        setCheckoutSuccess(false);
        setStudentId('');
      }, 2000);
    } else {
      setCheckoutError('Saldo insuficiente o ID inválido.');
    }
  };

  const handleCashCheckout = () => {
    checkoutCash();
    setCheckoutSuccess(true);
    setTimeout(() => {
      setIsCheckoutModalOpen(false);
      setCheckoutSuccess(false);
    }, 2000);
  };

  return (
    <div className="bg-white h-full flex flex-col shadow-2xl border-l border-gray-200">
      {/* Ticket Header */}
      <div className="bg-vault-darkBlue px-6 py-4 flex items-center justify-between shadow-md z-10">
        <div className="flex items-center space-x-3">
          <Receipt className="text-vault-yellow w-5 h-5" />
          <h2 className="font-black text-white uppercase tracking-widest text-sm">Ticket Actual</h2>
        </div>
        <span className="bg-vault-yellow text-vault-darkBlue text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
          {cart.reduce((sum, i) => sum + i.cantidad, 0)} items
        </span>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f8fafc]">
        {cart.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-50">
            <Receipt className="w-16 h-16 mb-4" />
            <p className="font-bold uppercase tracking-widest text-sm">Ticket Vacío</p>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between animate-fade-in">
              <div className="flex-1">
                <h3 className="font-bold text-vault-darkBlue text-sm">{item.nombre}</h3>
                <p className="text-emerald-600 font-mono font-bold text-xs">{formatCurrency(item.precio)}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-1">
                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white rounded text-gray-500 transition-colors">
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center font-bold text-vault-darkBlue">{item.cantidad}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white rounded text-gray-500 transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Totals & Checkout Button */}
      <div className="bg-white p-6 border-t border-gray-200 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] z-10">
        <div className="flex justify-between items-end mb-6">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Total a Pagar</span>
          <span className="text-4xl font-black text-vault-darkBlue font-mono">{formatCurrency(total)}</span>
        </div>
        <button 
          disabled={cart.length === 0}
          onClick={() => setIsCheckoutModalOpen(true)}
          className="w-full bg-vault-yellow text-vault-darkBlue py-4 rounded-xl font-black uppercase tracking-widest shadow-lg hover:bg-yellow-400 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          <Banknote size={20} /> Cobrar
        </button>
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-darkBlue/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            
            {checkoutSuccess ? (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <Banknote className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-black text-vault-darkBlue mb-2">¡Pago Exitoso!</h2>
                <p className="text-gray-500">El ticket ha sido cerrado.</p>
              </div>
            ) : (
              <>
                <div className="bg-vault-darkBlue p-6 flex justify-between items-center text-white">
                  <h3 className="text-xl font-black uppercase tracking-widest">Método de Pago</h3>
                  <button onClick={() => setIsCheckoutModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-8">
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Total</p>
                    <p className="text-5xl font-black text-vault-darkBlue font-mono">{formatCurrency(total)}</p>
                  </div>

                  <div className="space-y-4">
                    <button 
                      onClick={handleCashCheckout}
                      className="w-full bg-emerald-50 border-2 border-emerald-500 text-emerald-700 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-100 transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                      <Banknote size={24} /> Pago en Efectivo
                    </button>

                    <div className="relative py-4 flex items-center">
                      <div className="flex-grow border-t border-gray-200"></div>
                      <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-bold uppercase tracking-widest">O con saldo digital</span>
                      <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <form onSubmit={handleStudentCheckout} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Fingerprint size={14} className="text-vault-blue" /> ID de Estudiante
                      </label>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          value={studentId}
                          onChange={(e) => setStudentId(e.target.value)}
                          placeholder="Ej. ALU001"
                          className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2 font-mono uppercase focus:outline-none focus:border-vault-blue focus:ring-2 focus:ring-vault-blue/20"
                        />
                        <button type="submit" className="bg-vault-blue text-white px-6 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-vault-darkBlue transition-colors shadow-md">
                          Cobrar
                        </button>
                      </div>
                      {checkoutError && (
                        <p className="text-red-500 text-xs font-bold mt-2 animate-fade-in">{checkoutError}</p>
                      )}
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
