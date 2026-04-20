import React, { useState } from 'react';
import { usePOS } from '../context/POSContext';
import { LayoutGrid } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const { categories, products, addToCart } = usePOS();
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(p => p.categoria === selectedCategory);

  const getCategoryColor = (catId: string) => {
    const cat = categories.find(c => c.id === catId);
    return cat ? cat.color : 'from-gray-400 to-gray-500';
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(amount);
  };

  return (
    <div className="flex flex-col h-full bg-[#f8fafc] p-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
        <button 
          onClick={() => setSelectedCategory('todos')}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold uppercase tracking-widest transition-all min-w-[120px] flex items-center justify-center gap-2 ${selectedCategory === 'todos' ? 'bg-vault-darkBlue text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
        >
          <LayoutGrid size={16} /> Todos
        </button>
        {categories.map(cat => (
          <button 
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold uppercase tracking-widest transition-all min-w-[120px] flex items-center justify-center gap-2 ${selectedCategory === cat.id ? 'bg-vault-darkBlue text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <i className={`fas ${cat.icon}`}></i> {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-20">
          {filteredProducts.map(product => (
            <button 
              key={product.id}
              onClick={() => addToCart(product)}
              className="bg-white rounded-2xl p-4 shadow-sm border-b-4 border-gray-200 hover:border-vault-blue hover:shadow-md flex flex-col items-center justify-center text-center group min-h-[140px] transition-all active:scale-95 active:border-b"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getCategoryColor(product.categoria)} flex items-center justify-center mb-3 group-hover:-translate-y-1 transition-transform shadow-inner`}>
                <i className={`fas ${product.icon} text-white text-xl`}></i>
              </div>
              <h3 className="font-bold text-vault-darkBlue text-sm leading-tight mb-1">{product.nombre}</h3>
              <p className="text-emerald-600 font-black font-mono text-base">{formatCurrency(product.precio)}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
