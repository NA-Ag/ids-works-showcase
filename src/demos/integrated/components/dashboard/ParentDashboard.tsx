import React, { useState } from 'react';
import { 
  CheckCircle2, Megaphone, ChevronRight, GraduationCap, 
  CreditCard, Calendar, BookOpen, Send, Sparkles, MessageSquare, 
  HelpCircle, AlertCircle, TrendingUp, FileText,
  User, QrCode, ShieldCheck, Lock, Download, File
} from 'lucide-react';

interface ParentDashboardProps {
  isEn: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ParentDashboard = ({ isEn, activeTab, setActiveTab }: ParentDashboardProps) => {
    const [aiQuery, setAiQuery] = useState('');
    const [aiResponse, setAiResponse] = useState<string | null>(null);
    const [isAiLoading, setIsAiLoading] = useState(false);
    const [localActiveTab, setLocalActiveTab] = useState('home');
    const [showDigitalId, setShowDigitalId] = useState(false);

    const [onboardingDocs, setOnboardingDocs] = useState([
        { id: 1, name: isEn ? "Birth Certificate" : "Acta de Nacimiento", status: "Verified", date: "Jan 12" },
        { id: 2, name: isEn ? "Medical Record" : "Ficha Médica", status: "Pending", date: "---" },
        { id: 3, name: isEn ? "Previous Grades" : "Boleta Anterior", status: "Action Required", date: "Feb 05" }
    ]);

    const handleUpload = (id: number) => {
        setOnboardingDocs(prev => prev.map(doc => doc.id === id ? { ...doc, status: 'Uploading...' } : doc));
        setTimeout(() => {
            setOnboardingDocs(prev => prev.map(doc => doc.id === id ? { ...doc, status: 'Reviewing', date: 'Today' } : doc));
        }, 1500);
    };

    const handleAiSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!aiQuery) return;
        
        setIsAiLoading(true);
        // Simulated AI response (RAG Logic)
        setTimeout(() => {
            const responses: Record<string, string> = {
                'uniforme': 'El uniforme oficial debe portarse de lunes a jueves. Los viernes se permite el uniforme deportivo. Puede adquirir las prendas en la tienda del plantel de 8:00 a 14:00 hrs.',
                'becas': 'Las convocatorias para becas de excelencia se abren en el mes de mayo. Los requisitos incluyen un promedio mínimo de 9.5 y conducta sobresaliente.',
                'horario': 'El horario de entrada para Primaria es a las 7:45 AM. La salida es a las 2:30 PM. Contamos con horario extendido hasta las 4:00 PM.',
                'onboarding': 'El proceso de inscripción digital requiere que suba sus documentos en formato PDF. Una vez subidos, el departamento de admisiones los validará en un plazo de 48 horas.',
                'inscripcion': 'El proceso de inscripción digital requiere que suba sus documentos en formato PDF. Una vez subidos, el departamento de admisiones los validará en un plazo de 48 horas.',
                'default': 'Lo siento, no encontré esa información específica en el reglamento actual. Por favor, contacte a la oficina de Admisiones para más detalles.'
            };
            
            const query = aiQuery.toLowerCase();
            const foundKey = Object.keys(responses).find(key => query.includes(key));
            setAiResponse(responses[foundKey || 'default']);
            setIsAiLoading(false);
        }, 800);
    };

    return (
        <div className="animate-fade-in p-4 md:p-10 max-w-7xl mx-auto w-full space-y-10">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-gray-100 pb-10">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-vault-wine rounded-2xl flex items-center justify-center text-vault-yellow shadow-lg shadow-vault-wine/20">
                            <Sparkles size={24} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-vault-darkWine uppercase tracking-tighter italic">
                            {isEn ? 'Parent Portal' : 'Portal de Padres'}
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => setLocalActiveTab('home')} className={`text-[10px] font-black uppercase tracking-widest pb-2 border-b-2 transition-all ${localActiveTab === 'home' ? 'border-vault-wine text-vault-wine' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
                            {isEn ? 'Overview' : 'Resumen'}
                        </button>
                        <button onClick={() => setLocalActiveTab('finanzas')} className={`text-[10px] font-black uppercase tracking-widest pb-2 border-b-2 transition-all ${localActiveTab === 'finanzas' ? 'border-vault-wine text-vault-wine' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
                            {isEn ? 'Finances' : 'Finanzas'}
                        </button>
                        <button onClick={() => setLocalActiveTab('onboarding')} className={`text-[10px] font-black uppercase tracking-widest pb-2 border-b-2 transition-all ${localActiveTab === 'onboarding' ? 'border-vault-wine text-vault-wine' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
                            {isEn ? 'Digital Onboarding' : 'Inscripción Digital'}
                        </button>
                    </div>
                </div>
                <div className="bg-emerald-50 text-emerald-700 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 border-2 border-emerald-100 shadow-sm">
                    <CheckCircle2 size={16} /> {isEn ? 'Sovereign ID Verified' : 'ID Soberano Verificado'}
                </div>
            </header>

            {localActiveTab === 'home' && (
                <>
                {/* AI Assistant Section (Spanish Focus) */}
                <div className="bg-white rounded-[3rem] border-2 border-vault-wine/10 shadow-xl overflow-hidden group">
                    <div className="p-8 border-b border-gray-50 bg-gray-50/50 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-4 items-center">
                            <div className="p-4 bg-vault-yellow rounded-2xl text-vault-darkWine shadow-md group-hover:rotate-12 transition-transform">
                                <HelpCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-vault-darkWine uppercase tracking-tighter italic leading-none mb-1">
                                    {isEn ? 'School AI Guide' : 'Guía AI Escolar'}
                                </h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">
                                    {isEn ? 'Ask anything about policies, events, or schedules' : 'Pregunte sobre reglamentos, eventos o trámites'}
                                </p>
                            </div>
                        </div>
                        
                        <form onSubmit={handleAiSearch} className="relative w-full md:w-1/2">
                            <input 
                                type="text" 
                                placeholder={isEn ? "e.g. 'What is the uniform policy?'" : "ej. '¿Cuál es el reglamento del uniforme?'"}
                                className="w-full pl-6 pr-16 py-5 bg-white rounded-2xl border-2 border-transparent focus:border-vault-wine outline-none shadow-inner transition-all font-medium text-sm"
                                value={aiQuery}
                                onChange={(e) => setAiQuery(e.target.value)}
                            />
                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-vault-wine text-white rounded-xl hover:bg-vault-darkWine transition-colors shadow-md">
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                    <div className={`p-8 bg-white transition-all duration-500 overflow-hidden ${aiResponse || isAiLoading ? 'max-h-96' : 'max-h-0'}`}>
                        {isAiLoading ? (
                            <div className="flex items-center gap-4 animate-pulse">
                                <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                                <div className="space-y-2 flex-grow">
                                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                                    <div className="h-4 bg-gray-50 rounded w-full"></div>
                                </div>
                            </div>
                        ) : aiResponse && (
                            <div className="flex gap-6 items-start bg-vault-yellow/5 p-8 rounded-3xl border border-vault-yellow/20">
                                <div className="p-3 bg-vault-yellow rounded-xl text-vault-darkWine shrink-0">
                                    <Sparkles size={20} />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-gray-700 font-medium leading-relaxed italic">"{aiResponse}"</p>
                                    <div className="flex gap-4">
                                        <button onClick={() => setAiResponse(null)} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#8B0000]">{isEn ? 'Close Response' : 'Cerrar Respuesta'}</button>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-vault-wine border-l border-gray-200 pl-4">{isEn ? 'Sourced from Student Handbook' : 'Fuente: Reglamento Estudiantil'}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Academic Timeline */}
                    <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                            <div className="flex gap-4 items-center">
                                <Calendar size={20} className="text-vault-wine" />
                                <h3 className="font-black text-vault-darkWine uppercase tracking-widest text-xs">
                                    {isEn ? 'Upcoming Tasks & Assignments' : 'Tareas y Entregas Próximas'}
                                </h3>
                            </div>
                            <TrendingUp size={16} className="text-emerald-500" />
                        </div>
                        <div className="p-8 space-y-6">
                            {[
                                { title: isEn ? "Physics Lab Report" : "Reporte Lab. Física", date: "Feb 22", child: "Alejandro", status: "In Progress" },
                                { title: isEn ? "English Essay: Sovereignty" : "Ensayo Inglés: Soberanía", date: "Feb 24", child: "Alejandro", status: "Pending" },
                                { title: isEn ? "Math Quiz - Calculus" : "Examen Matemáticas", date: "Mar 01", child: "Alejandro", status: "Scheduled" }
                            ].map((b, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer p-4 hover:bg-gray-50 rounded-[1.5rem] transition-all border border-transparent hover:border-gray-100">
                                    <div className="flex gap-6 items-center">
                                        <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex flex-col items-center justify-center shadow-sm group-hover:bg-vault-wine group-hover:text-white transition-all">
                                            <span className="text-[10px] font-black uppercase tracking-tighter leading-none mb-1 opacity-50">{b.date.split(' ')[0]}</span>
                                            <span className="text-xl font-black italic">{b.date.split(' ')[1]}</span>
                                        </div>
                                        <div>
                                            <p className="text-lg font-black text-vault-darkWine group-hover:text-vault-wine transition-colors uppercase tracking-tighter italic leading-none mb-2">{b.title}</p>
                                            <div className="flex gap-4 items-center">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{b.child}</span>
                                                <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${b.status === 'Pending' ? 'bg-[#8B0000]/10 text-[#8B0000]' : 'bg-vault-wine/10 text-vault-wine'}`}>{b.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-200 group-hover:translate-x-1 transition-transform" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Financial & Merit Status */}
                    <div className="space-y-8">
                        <div className="bg-vault-darkWine rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl">
                            <div className="relative z-10 space-y-8">
                                <div className="flex justify-between items-start">
                                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                                        <CreditCard size={24} className="text-vault-yellow" />
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 opacity-60 mb-1">{isEn ? 'Current Balance' : 'Balance Actual'}</p>
                                        <p className="text-3xl font-black italic">$0.00 MXN</p>
                                    </div>
                                </div>
                                
                                <div className="pt-6 border-t border-white/10">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 opacity-60 mb-4">{isEn ? 'Institutional Merit' : 'Mérito Institucional'}</p>
                                    <div className="flex items-end gap-4">
                                        <p className="text-6xl font-black text-vault-yellow italic">+42</p>
                                        <div className="pb-2">
                                            <p className="text-[10px] font-black uppercase tracking-widest leading-none">Pts</p>
                                            <p className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest">Top 5%</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={() => setLocalActiveTab('finanzas')}
                                    className="w-full py-4 bg-vault-yellow text-vault-darkWine rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-lg hover:-translate-y-1"
                                >
                                    {isEn ? 'Manage Payments' : 'Gestionar Pagos'}
                                </button>
                                <button 
                                    onClick={() => setShowDigitalId(true)}
                                    className="w-full py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                >
                                    <QrCode size={16} /> {isEn ? 'Digital Pickup ID' : 'ID Digital de Salida'}
                                </button>
                            </div>
                            <GraduationCap className="absolute right-[-40px] bottom-[-40px] w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-700 rotate-12" />
                        </div>

                        {/* Digital ID Modal Simulation */}
                        {showDigitalId && (
                            <div className="fixed inset-0 bg-vault-darkWine/90 backdrop-blur-md z-[200] flex items-center justify-center p-4 animate-fade-in">
                                <div className="bg-white w-full max-w-sm rounded-[3rem] overflow-hidden shadow-2xl relative">
                                    <button onClick={() => setShowDigitalId(false)} className="absolute top-6 right-6 text-gray-400 hover:text-vault-darkWine"><X size={24} /></button>
                                    <div className="bg-vault-wine p-8 text-center text-white">
                                        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 border-4 border-vault-yellow flex items-center justify-center text-vault-darkWine">
                                            <User size={48} />
                                        </div>
                                        <h4 className="text-xl font-black uppercase tracking-tighter italic">Alejandro García</h4>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Year 10A • Student ID: 2026-042</p>
                                    </div>
                                    <div className="p-10 text-center space-y-6">
                                        <div className="bg-gray-50 p-6 rounded-3xl border-2 border-dashed border-gray-200 inline-block">
                                            <QrCode size={160} className="text-vault-darkWine" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-1 flex items-center justify-center gap-2">
                                                <CheckCircle2 size={12} /> {isEn ? 'Secure Token Active' : 'Token Seguro Activo'}
                                            </p>
                                            <p className="text-[9px] font-bold text-gray-400 italic">
                                                {isEn ? 'Scan at South Gate for secure pickup authorization.' : 'Escanee en Puerta Sur para autorización de salida.'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-6 text-center">
                                        <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none">Powered by IDS Digital Passport • Entra ID</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Quick Access Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: BookOpen, label: isEn ? 'Library' : 'Biblioteca', color: 'bg-emerald-50 text-emerald-600' },
                                { icon: MessageSquare, label: isEn ? 'Contact' : 'Contacto', color: 'bg-blue-50 text-blue-600' },
                                { icon: AlertCircle, label: isEn ? 'Help' : 'Ayuda', color: 'bg-[#8B0000]/5 text-[#8B0000]' },
                                { icon: CheckCircle2, label: isEn ? 'Grades' : 'Calificaciones', color: 'bg-vault-yellow/10 text-vault-darkWine' }
                            ].map((item, i) => (
                                <div key={i} className={`p-6 rounded-[2rem] flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-lg transition-all border border-gray-50 ${item.color}`}>
                                    <item.icon size={24} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-center">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </>
            )}

            {localActiveTab === 'finanzas' && (
                <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-gray-100">
                                <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-vault-wine/10 text-vault-wine rounded-xl">
                                            <CreditCard size={24} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black text-vault-darkWine uppercase tracking-tighter italic">
                                            {isEn ? 'Account Statement' : 'Estado de Cuenta'}
                                        </h3>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 shadow-sm flex items-center gap-2">
                                        <CheckCircle2 size={14} /> {isEn ? 'Up to date' : 'Al Corriente'}
                                    </span>
                                </div>
                                
                                <div className="space-y-4">
                                    {[
                                        { id: '1023', concept: isEn ? 'February Tuition' : 'Colegiatura Febrero', amount: '$12,500.00 MXN', status: 'Paid', date: '01 Feb 2026' },
                                        { id: '1024', concept: isEn ? 'March Tuition' : 'Colegiatura Marzo', amount: '$12,500.00 MXN', status: 'Pending', date: 'Due 10 Mar 2026' },
                                        { id: '1025', concept: isEn ? 'Extracurricular: Robotics' : 'Taller: Robótica', amount: '$1,200.00 MXN', status: 'Pending', date: 'Due 15 Mar 2026' }
                                    ].map(invoice => (
                                        <div key={invoice.id} className="p-6 bg-gray-50 rounded-2xl flex flex-col md:flex-row justify-between md:items-center gap-4 border border-transparent hover:border-vault-wine/20 transition-all group">
                                            <div className="flex gap-4 items-start md:items-center">
                                                <div className="hidden md:flex p-3 bg-white rounded-xl text-gray-400 group-hover:text-vault-wine shadow-sm">
                                                    <FileText size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-800">{invoice.concept}</p>
                                                    <div className="flex items-center gap-3 mt-1">
                                                        <span className="text-[10px] font-mono text-gray-400">REF: #{invoice.id}</span>
                                                        <span className="text-[10px] font-bold text-gray-500">• {invoice.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 border-t md:border-t-0 border-gray-200 pt-4 md:pt-0">
                                                <p className="text-lg font-black italic text-vault-darkWine">{invoice.amount}</p>
                                                {invoice.status === 'Paid' ? (
                                                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg transition-colors">
                                                        <Download size={14} /> Factura XML/PDF
                                                    </button>
                                                ) : (
                                                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white bg-vault-wine hover:bg-vault-darkWine px-6 py-2 rounded-lg transition-colors shadow-md hover:-translate-y-0.5">
                                                        {isEn ? 'Pay Now' : 'Pagar'} <ChevronRight size={14} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-vault-darkWine p-8 md:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Lock size={20} className="text-vault-yellow" />
                                        <h3 className="text-xl font-black uppercase tracking-tighter italic text-vault-yellow">
                                            {isEn ? 'Secure Payment Gateway' : 'Pasarela Segura'}
                                        </h3>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 opacity-60 mb-2">{isEn ? 'Total Due' : 'Total a Pagar'}</p>
                                            <p className="text-4xl font-black italic">$13,700.00 MXN</p>
                                        </div>
                                        
                                        <button className="w-full py-4 bg-vault-yellow text-vault-darkWine rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:-translate-y-1 flex items-center justify-center gap-2">
                                            <CreditCard size={18} /> {isEn ? 'Pay Full Amount' : 'Pagar Saldo Total'}
                                        </button>
                                        <div className="text-center pt-2">
                                            <p className="text-[8px] font-mono uppercase tracking-widest text-gray-400">Tarjetas de Crédito, Débito y SPEI</p>
                                        </div>
                                    </div>
                                </div>
                                <ShieldCheck className="absolute right-[-40px] bottom-[-40px] w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-700 -rotate-12 text-vault-yellow" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {localActiveTab === 'onboarding' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
                    <div className="space-y-8">
                        <div className="bg-white p-10 rounded-[3rem] border-2 border-vault-wine/5 shadow-xl space-y-6">
                            <h3 className="text-2xl font-black text-vault-darkWine uppercase tracking-tighter italic border-b border-gray-50 pb-4">
                                {isEn ? 'SharePoint Document Vault' : 'Bóveda de Documentos SharePoint'}
                            </h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                {isEn 
                                    ? "Please upload the required documentation. All files are stored directly in your school's private SharePoint tenant." 
                                    : "Por favor, suba la documentación requerida. Los archivos se almacenan directamente en el SharePoint privado de la escuela."}
                            </p>
                            
                            <div className="space-y-4">
                                {onboardingDocs.map(doc => (
                                    <div key={doc.id} className="p-6 bg-gray-50 rounded-2xl flex items-center justify-between group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-vault-wine/10">
                                        <div className="flex gap-4 items-center">
                                            <div className="p-3 bg-white rounded-xl text-gray-400 group-hover:text-vault-wine">
                                                <FileText size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-700">{doc.name}</p>
                                                <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${doc.status === 'Verified' ? 'text-emerald-500' : doc.status === 'Action Required' ? 'text-[#8B0000]' : 'text-gray-400'}`}>
                                                    {doc.status}
                                                </span>
                                            </div>
                                        </div>
                                        {doc.status !== 'Verified' && (
                                            <button 
                                                onClick={() => handleUpload(doc.id)}
                                                disabled={doc.status.includes('...')}
                                                className="px-6 py-2 bg-vault-wine text-white text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-vault-darkWine transition-all disabled:bg-gray-200"
                                            >
                                                {doc.status.includes('...') ? doc.status : (isEn ? "Upload" : "Subir")}
                                            </button>
                                        )}
                                        {doc.status === 'Verified' && (
                                            <span className="text-[9px] font-black uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{doc.date}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-vault-darkWine p-10 rounded-[3rem] text-white space-y-8 relative overflow-hidden group">
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-xl font-black uppercase tracking-tighter italic text-vault-yellow">
                                    {isEn ? 'Institutional Verification' : 'Verificación Institucional'}
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-1 h-12 bg-vault-yellow rounded-full"></div>
                                        <div>
                                            <p className="text-xs font-bold text-blue-200 opacity-60 uppercase tracking-widest mb-1">{isEn ? 'Step 1' : 'Paso 1'}</p>
                                            <p className="text-sm font-medium">{isEn ? 'Parent uploads documents' : 'Padre sube documentos'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 opacity-40">
                                        <div className="w-1 h-12 bg-white rounded-full"></div>
                                        <div>
                                            <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-1">{isEn ? 'Step 2' : 'Paso 2'}</p>
                                            <p className="text-sm font-medium">{isEn ? 'IT/Admin Department reviews in SharePoint' : 'Depto. Administrativo revisa en SharePoint'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 opacity-40">
                                        <div className="w-1 h-12 bg-white rounded-full"></div>
                                        <div>
                                            <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-1">{isEn ? 'Step 3' : 'Paso 3'}</p>
                                            <p className="text-sm font-medium">{isEn ? 'Automatic notification of acceptance' : 'Notificación automática de aceptación'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ShieldCheck className="absolute right-[-40px] bottom-[-40px] w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-700 rotate-12" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
