import React from 'react';
import { School, ChartBar, Users, CreditCard } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'dashboard', icon: ChartBar, label: 'Panel de Control' },
    { id: 'students', icon: Users, label: 'Alumnos' },
    { id: 'payments', icon: CreditCard, label: 'Pagos' }
  ];

  return (
    <aside className="w-64 bg-vault-darkBlue text-white min-h-screen flex flex-col shadow-xl shrink-0">
      <div className="p-6 border-b border-white/10 flex items-center space-x-3">
        <div className="w-10 h-10 bg-vault-yellow rounded-lg flex items-center justify-center">
          <School className="text-vault-darkBlue w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-black uppercase tracking-tighter">Control Finanzas</h1>
          <p className="text-xs text-blue-200 font-mono tracking-widest uppercase">ColegiosPay</p>
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
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-vault-blue rounded-full flex items-center justify-center text-xs font-black">
            ADM
          </div>
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-widest">Administración</p>
            <p className="text-[10px] text-vault-yellow font-mono uppercase tracking-widest">Offline Mode</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
