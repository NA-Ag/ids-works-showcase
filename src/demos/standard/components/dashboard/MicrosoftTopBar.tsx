import React, { useState } from 'react';
import { 
  Menu, Grid, X, Mail, HardDrive, Users, Settings, GraduationCap, 
  Search, Bell, LogOut, Share2, FileText, BookOpen, TrendingUp, RefreshCcw 
} from 'lucide-react';

interface MicrosoftTopBarProps {
  title: string;
  color?: string;
  isEn: boolean;
  email: string;
  isWaffleOpen: boolean;
  setIsWaffleOpen: (open: boolean) => void;
  isProfileOpen: boolean;
  setIsProfileOpen: (open: boolean) => void;
  onLogout: () => void;
  onAppSwitch: (role: string) => void;
  originalRole: string;
  showToast: (msg: string) => void;
  toggleSidebar: () => void;
}

export const MicrosoftTopBar = ({ 
    title, color = "#0078d4", isEn, email, 
    isWaffleOpen, setIsWaffleOpen, 
    isProfileOpen, setIsProfileOpen,
    onLogout, onAppSwitch, originalRole, showToast,
    toggleSidebar
}: MicrosoftTopBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleReset = () => {
    localStorage.removeItem('ids_cms_data');
    window.location.reload();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query.includes('lib') || query.includes('bib')) {
        window.location.href = '/demos/standard/about-us/library';
    } else {
        showToast(isEn ? "No pages found for your search." : "No se encontraron páginas.");
    }
  };

  return (
    <header className="h-12 bg-white border-b border-gray-200 flex items-center px-2 md:px-4 justify-between sticky top-0 z-[60]">
      <div className="flex items-center gap-1 md:gap-4 relative">
        <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-md md:hidden">
            <Menu size={20} className="text-gray-600" />
        </button>
        <div 
            onClick={() => setIsWaffleOpen(!isWaffleOpen)} 
            className={`p-2 rounded-md cursor-pointer transition-colors ${isWaffleOpen ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >
            <Grid size={20} className="text-gray-600" />
        </div>
        
        {isWaffleOpen && (
            <div className="absolute top-12 left-0 w-72 md:w-80 bg-[#f3f2f1] shadow-2xl border-r border-b border-gray-200 z-[100] animate-fade-in flex flex-col h-[500px]">
                <div className="p-6 bg-white flex justify-between items-center border-b border-gray-200">
                    <span className="font-bold text-[#0078d4]">Microsoft 365</span>
                    <button onClick={() => setIsWaffleOpen(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
                </div>
                <div className="p-4 grid grid-cols-3 gap-4 overflow-y-auto">
                    {[
                        { id: 'outlook', name: "Outlook", icon: <Mail className="text-[#0078d4]" />, locked: true },
                        { id: 'teams', name: "Teams", icon: <Users className="text-[#5b5fc7]" />, locked: originalRole === 'parent', action: () => onAppSwitch('teacher') },
                        { id: 'admin', name: "Admin", icon: <Settings className="text-gray-700" />, locked: originalRole !== 'admin', action: () => onAppSwitch('admin') },
                        { id: 'parent', name: "Parent", icon: <GraduationCap className="text-emerald-600" />, locked: originalRole !== 'parent' && originalRole !== 'admin', action: () => onAppSwitch('parent') },
                        { id: 'library', name: "Library", icon: <BookOpen className="text-vault-blue" />, action: () => window.location.href = '/demos/standard/about-us/library' },
                        { id: 'alumni', name: "Alumni", icon: <TrendingUp className="text-orange-600" />, action: () => onAppSwitch('alumni') },
                        { id: 'onedrive', name: "OneDrive", icon: <HardDrive className="text-blue-400" />, locked: true },
                        { id: 'sharepoint', name: "SharePoint", icon: <Share2 className="text-teal-600" />, locked: true },
                        { id: 'forms', name: "Forms", icon: <FileText className="text-teal-700" />, locked: true },
                    ].map(app => (
                        <div key={app.id} onClick={() => !app.locked ? app.action?.() : showToast(isEn ? `${app.name} is available in Production.` : `${app.name} disponible en Producción.`)}
                             className="flex flex-col items-center justify-center p-4 rounded-md hover:bg-white hover:shadow-md cursor-pointer transition-all gap-2 group">
                            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 group-active:scale-95 transition-transform">{app.icon}</div>
                            <span className="text-[10px] font-bold text-gray-600">{app.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        )}
        <span className="font-semibold text-xs md:text-sm text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] md:max-w-none">{title}</span>
      </div>

      <form onSubmit={handleSearch} className="flex-grow max-w-2xl mx-2 md:mx-8 relative hidden sm:block">
        <Search size={14} className="absolute left-3 top-2.5 text-gray-400" />
        <input 
            type="text" 
            placeholder={isEn ? "Search catalog or jump to page..." : "Buscar catálogo o ir a página..."} 
            className="w-full bg-gray-100 border-transparent focus:bg-white focus:border-gray-300 rounded-sm py-1.5 pl-10 pr-4 text-xs outline-none transition-all font-medium" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <div className="flex items-center gap-1 md:gap-2">
        {originalRole === 'admin' && (
            <button 
                onClick={handleReset}
                title={isEn ? "Reset Demo Content" : "Reiniciar Contenido"}
                className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-md transition-colors"
            >
                <RefreshCcw size={18} />
            </button>
        )}
        <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer"><Bell size={18} className="text-gray-600" /></div>
        <div className="relative">
            <div onClick={() => setIsProfileOpen(!isProfileOpen)} style={{ backgroundColor: color }} className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ml-1 md:ml-2 cursor-pointer border-2 border-white shadow-sm transition-transform active:scale-95 uppercase">
                {email.charAt(0)}
            </div>
            {isProfileOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 md:w-80 bg-white shadow-2xl border border-gray-200 rounded-lg z-[100] animate-fade-in py-6 px-8 text-center">
                    <div className="flex flex-col items-center space-y-4 mb-6">
                        <div className="w-20 h-20 bg-[#0078d4] rounded-full flex items-center justify-center text-white text-3xl font-black border-4 border-gray-50 shadow-inner uppercase">{email.charAt(0)}</div>
                        <div>
                            <p className="font-black text-gray-800 uppercase tracking-tight">
                                {title.toLowerCase().includes('admin') ? (isEn ? 'Global Admin' : 'Admin Global') : (isEn ? originalRole.toUpperCase() : originalRole.toUpperCase())}
                            </p>
                            <p className="text-sm text-gray-500 font-mono break-all">{email}</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                        <button onClick={onLogout} className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors text-gray-700 font-bold text-sm uppercase tracking-widest">
                            <LogOut size={18} /> {isEn ? 'Sign out' : 'Cerrar sesión'}
                        </button>
                    </div>
                </div>
            )}
        </div>
      </div>
    </header>
  );
};

