import React, { useState } from 'react';
import { Users, LayoutDashboard, UserPlus, Network, LogOut, Bell, Search, Menu } from 'lucide-react';
import { DashboardView } from './components/DashboardView';
import { DirectoryView } from './components/DirectoryView';
import { EnrollmentView } from './components/EnrollmentView';
import { NetworkView } from './components/NetworkView';

export const AdminApp: React.FC = () => {
  const [activeView, setActiveView] = useState<'dashboard'|'directorio'|'inscripciones'|'red'>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const TABS = [
    { id: 'dashboard', label: 'Resumen Principal', icon: LayoutDashboard },
    { id: 'directorio', label: 'Directorio Escolar', icon: Users },
    { id: 'inscripciones', label: 'Inscripciones y Grupos', icon: UserPlus },
    { id: 'red', label: 'Centro de Red Local', icon: Network },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-vault-darkBlue text-white flex flex-col transition-all duration-300 z-20 shadow-xl shrink-0`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 shrink-0">
          {isSidebarOpen && <span className="font-black tracking-widest uppercase text-sm">IDS Admin Suite</span>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/10 rounded transition-colors">
            <Menu size={20} />
          </button>
        </div>
        
        <div className="flex-1 py-6 space-y-2 px-3 overflow-y-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id as any)}
              className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors ${activeView === tab.id ? 'bg-vault-blue text-white shadow-lg' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
            >
              <tab.icon size={20} className="shrink-0" />
              {isSidebarOpen && <span className="font-bold text-sm truncate">{tab.label}</span>}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-white/10 shrink-0">
          <button className="w-full flex items-center gap-4 px-3 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut size={20} className="shrink-0" />
            {isSidebarOpen && <span className="font-bold text-sm">Cerrar Sistema</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <h2 className="text-xl font-black text-vault-darkBlue uppercase tracking-tighter">
            {TABS.find(t => t.id === activeView)?.label}
          </h2>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Buscar alumno o maestro..." className="pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-full text-sm focus:bg-white focus:border-vault-blue focus:ring-2 focus:ring-vault-blue/20 outline-none transition-all w-64" />
            </div>
            <button className="relative p-2 text-gray-400 hover:text-vault-blue transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-8 h-8 rounded-full bg-vault-blue text-white flex items-center justify-center font-bold text-xs">
                DG
              </div>
              <div className="hidden md:block">
                <p className="text-xs font-bold text-vault-darkBlue leading-none">Dirección General</p>
                <p className="text-[10px] text-emerald-600 font-mono font-bold uppercase tracking-widest mt-1">Conexión Segura</p>
              </div>
            </div>
          </div>
        </header>

        {/* View Content */}
        <div className="flex-1 overflow-auto bg-[#F8FAFC] p-8">
          {activeView === 'dashboard' && <DashboardView />}
          {activeView === 'directorio' && <DirectoryView />}
          {activeView === 'inscripciones' && <EnrollmentView />}
          {activeView === 'red' && <NetworkView />}
        </div>
      </main>
    </div>
  );
};