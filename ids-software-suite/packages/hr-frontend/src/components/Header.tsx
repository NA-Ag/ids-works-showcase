import React from 'react';
import { School, ChartPie, Users, FileInvoiceDollar } from 'lucide-react';
import { PayrollPeriod } from '../context/HRContext';

interface HeaderProps {
  currentView: string;
  setView: (v: string) => void;
  period: PayrollPeriod;
  setPeriod: (p: PayrollPeriod) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView, period, setPeriod }) => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  const navItems = [
    { id: 'dashboard', icon: ChartPie, label: 'Panel Principal' },
    { id: 'directorio', icon: Users, label: 'Directorio' },
    { id: 'prenomina', icon: FileInvoiceDollar, label: 'Pre-nómina' }
  ];

  const getPeriodDates = (p: PayrollPeriod) => {
    const start = new Date(p.year, p.month, p.quincena === 1 ? 1 : 16);
    const end = new Date(p.year, p.month, p.quincena === 1 ? 15 : new Date(p.year, p.month + 1, 0).getDate());
    return { start, end };
  };

  const getPeriodLabel = (p: PayrollPeriod) => {
    const { start, end } = getPeriodDates(p);
    return `${start.getDate()} al ${end.getDate()} de ${months[p.month]} ${p.year}`;
  };

  return (
    <aside className="w-64 bg-vault-darkBlue text-white min-h-screen flex flex-col shadow-2xl shrink-0">
      <div className="p-6 border-b border-white/10 flex items-center space-x-3">
        <div className="w-10 h-10 bg-vault-blue rounded-lg flex items-center justify-center">
          <School className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-black uppercase tracking-tighter">RH Escolar</h1>
          <p className="text-xs text-blue-200 font-mono tracking-widest uppercase">Gestión de Nómina</p>
        </div>
      </div>

      <nav className="flex-1 py-4">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center px-6 py-4 text-sm transition-all font-bold uppercase tracking-widest ${
              currentView === item.id 
                ? 'bg-vault-blue text-white border-r-4 border-vault-yellow shadow-inner' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3 shrink-0" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-white/10">
        <p className="text-[10px] text-gray-400 mb-2 font-black uppercase tracking-widest">Periodo Activo</p>
        <select 
          value={`${period.year}-${period.month}-${period.quincena}`} 
          onChange={(e) => { 
            const [y, m, q] = e.target.value.split('-').map(Number); 
            setPeriod({ year: y, month: m, quincena: q as 1 | 2 }); 
          }} 
          className="w-full bg-slate-800 border border-white/20 rounded-lg px-3 py-2 text-xs font-bold text-white outline-none focus:border-vault-blue"
        >
          {months.map((mes, idx) => (
            <optgroup key={idx} label={`${mes} ${period.year}`}>
              <option value={`${period.year}-${idx}-1`}>1ra Quincena</option>
              <option value={`${period.year}-${idx}-2`}>2da Quincena</option>
            </optgroup>
          ))}
        </select>
        <p className="text-[10px] text-vault-blue mt-3 font-bold uppercase tracking-widest leading-tight">{getPeriodLabel(period)}</p>
      </div>
    </aside>
  );
};
