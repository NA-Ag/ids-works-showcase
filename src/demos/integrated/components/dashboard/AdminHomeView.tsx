import React from 'react';
import { Users, Activity, CheckCircle2, Shield, Database, Lock, Globe, Key, FileCode, Settings } from 'lucide-react';

interface AdminHomeViewProps {
  isEn: boolean;
  setActiveAdminTab: (tab: string) => void;
}

export const AdminHomeView = ({ isEn, setActiveAdminTab }: AdminHomeViewProps) => (
    <div className="space-y-8 animate-fade-in">
        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 space-y-6 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-700 flex items-center gap-2 border-b border-gray-50 pb-4"><Users size={18} className="text-[#0078d4]" /> {isEn ? "Active Users" : "Usuarios Activos"}</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-end"><span className="text-4xl font-black text-gray-800 tracking-tighter italic">1,240</span><span className="text-xs text-green-600 font-bold">+12 this week</span></div>
                    <button onClick={() => setActiveAdminTab('users')} className="w-full py-2 bg-gray-50 rounded-sm text-[10px] font-black uppercase tracking-widest text-[#0078d4] hover:bg-blue-50 transition-colors">Manage All Users</button>
                </div>
            </div>
            <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 space-y-6 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-700 flex items-center gap-2 border-b border-gray-50 pb-4"><Activity size={18} className="text-green-600" /> {isEn ? "System Health" : "Salud del Sistema"}</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded border border-green-100"><CheckCircle2 size={20} className="text-green-600" /><span className="text-xs font-bold text-green-800 uppercase tracking-widest">Operational</span></div>
                    <button onClick={() => setActiveAdminTab('health')} className="w-full py-2 bg-gray-50 rounded-sm text-[10px] font-black uppercase tracking-widest text-[#0078d4] hover:bg-blue-50 transition-colors">View Status</button>
                </div>
            </div>
            <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 space-y-6 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-700 flex items-center gap-2 border-b border-gray-50 pb-4"><Shield size={18} className="text-orange-500" /> {isEn ? "Security" : "Seguridad"}</h3>
                <div className="text-center py-2">
                    <span className="text-5xl font-black text-gray-800 italic">75%</span>
                    <p className="text-[10px] text-gray-500 mt-2 font-black uppercase tracking-widest">Identity Secure Score</p>
                    <button onClick={() => setActiveAdminTab('security')} className="w-full mt-6 py-2 bg-gray-50 rounded-sm text-[10px] font-black uppercase tracking-widest text-[#0078d4] hover:bg-blue-50 transition-colors">Improve Score</button>
                </div>
            </div>
        </div>

        {/* Sovereignty Audit & Domain Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 border-b border-gray-100 bg-[#f8fafc] flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <Database size={20} className="text-vault-wine" />
                        <h3 className="font-black text-vault-darkWine uppercase tracking-tighter italic text-sm">
                            {isEn ? 'Digital Sovereignty Audit' : 'Auditoría de Soberanía Digital'}
                        </h3>
                    </div>
                    <span className="px-3 py-1 bg-vault-yellow text-vault-darkWine rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">Audit: Passed</span>
                </div>
                <div className="p-8 space-y-6 flex-grow">
                    {[
                        { label: '.edu.mx Domain verification', icon: Globe, status: 'Verified' },
                        { label: 'Microsoft 365 A1 Eligibility', icon: CheckCircle2, status: 'Active' },
                        { label: 'SharePoint Site Hierarchy', icon: FileCode, status: 'Deployed' },
                        { label: 'Microsoft Graph API Integration', icon: Key, status: 'Hardened' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between group">
                            <div className="flex gap-4 items-center">
                                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-vault-wine group-hover:text-white transition-colors">
                                    <item.icon size={16} />
                                </div>
                                <span className="text-xs font-bold text-gray-600 group-hover:text-vault-darkWine transition-colors">{item.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-green-600">{item.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 border-b border-gray-100 bg-[#f8fafc] flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <Globe size={20} className="text-vault-wine" />
                        <h3 className="font-black text-vault-darkWine uppercase tracking-tighter italic text-sm">
                            {isEn ? 'Domain Management' : 'Gestión de Dominios'}
                        </h3>
                    </div>
                    <button className="text-[10px] font-black text-[#0078d4] uppercase tracking-widest hover:underline">+ {isEn ? 'New Subdomain' : 'Nuevo Subdominio'}</button>
                </div>
                <div className="p-8 space-y-4 flex-grow">
                    {[
                        { url: 'www.colegioids.edu.mx', type: 'Public Web', secure: true },
                        { url: 'portal.colegioids.edu.mx', type: 'Intranet', secure: true },
                        { url: 'alumni.colegioids.edu.mx', type: 'Enterprise App', secure: true },
                        { url: 'biblioteca.colegioids.edu.mx', type: 'Resources', secure: true }
                    ].map((d, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100 group hover:border-vault-wine transition-all">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-mono font-bold text-gray-800">{d.url}</span>
                                <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">{d.type}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Lock size={12} className="text-emerald-500" />
                                <Settings size={14} className="text-gray-300 group-hover:text-vault-wine cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Institutional Bunker & Audit */}
        <div className="bg-vault-darkWine rounded-md shadow-sm p-8 text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
                <div className="p-4 bg-white/10 rounded-xl w-fit backdrop-blur-md">
                    <Lock size={24} className="text-vault-yellow" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tighter italic text-vault-yellow">
                        {isEn ? 'Institutional Bunker' : 'Búnker Institucional'}
                    </h3>
                    <p className="text-xs text-blue-200 opacity-80 leading-relaxed max-w-sm">
                        {isEn 
                            ? 'Security configuration is strictly limited to your institution. No third-party tracking or data mining is active.' 
                            : 'La configuración de seguridad está limitada estrictamente a su institución. No hay rastreo de terceros activo.'}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-vault-darkWine transition-all">
                        <FileCode size={16} /> {isEn ? 'Export Security Policy' : 'Exportar Política'}
                    </button>
                    <button 
                        onClick={() => alert(isEn ? "Generating Institutional Compliance Report... Please wait." : "Generando Reporte de Cumplimiento Institucional... Por favor espere.")}
                        className="flex items-center justify-center gap-3 px-6 py-3 bg-vault-yellow text-vault-darkWine rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl"
                    >
                        <Shield size={16} /> {isEn ? 'Generate Audit PDF' : 'Generar Auditoría PDF'}
                    </button>
                </div>
            </div>
            <Shield className="absolute right-[-40px] bottom-[-40px] w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-700 rotate-12" />
        </div>
    </div>
);
