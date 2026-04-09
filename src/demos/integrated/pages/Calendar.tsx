import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { Lock, ShieldAlert, LogIn, Calendar as CalendarIcon, Info } from 'lucide-react';

const CalendarPage: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isEn = language === 'en';

  const content = {
    title: isEn ? "School Calendar" : "Calendario Escolar",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
        { label: isEn ? "Calendar" : "Calendario" }
    ],
    protectionTitle: isEn ? "Protected Institutional Resource" : "Recurso Institucional Protegido",
    protectionDesc: isEn 
        ? "To ensure the safety of our students and community, the full academic calendar and event details are restricted to authorized users."
        : "Para garantizar la seguridad de nuestra comunidad, el calendario académico completo está restringido a usuarios autorizados.",
    actionText: isEn ? "Please login with your institutional account to view the full schedule." : "Por favor, inicie sesión con su cuenta institucional para ver el calendario.",
    loginBtn: isEn ? "Login to Student Portal" : "Acceder al Portal Estudiantil",
    previewTitle: isEn ? "Upcoming Key Dates" : "Próximas Fechas Clave",
    mockEvents: [
        { date: "Aug 24", event: isEn ? "Academic Year Commencement" : "Inicio de Ciclo Escolar" },
        { date: "Sep 16", event: isEn ? "National Holiday - No Classes" : "Día Festivo - Sin Clases" },
        { date: "Oct 12", event: isEn ? "Professional Development Day" : "Día de Desarrollo Profesional" }
    ]
  };

  return (
    <PageLayout title={content.title} breadcrumbs={content.breadcrumbs}>
      <div className="max-w-4xl mx-auto space-y-12 py-12">
        
        {/* Protection Banner */}
        <div className="bg-vault-darkWine rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border-b-8 border-vault-yellow">
            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                <div className="bg-vault-yellow p-4 rounded-2xl text-vault-darkWine shadow-lg">
                    <Lock size={40} />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic">{content.protectionTitle}</h2>
                    <p className="text-blue-100 text-lg font-light leading-relaxed max-w-2xl">
                        {content.protectionDesc}
                    </p>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-vault-yellow font-bold">
                    {content.actionText}
                </p>
                <button 
                    onClick={() => navigate('/demos/integrated/login')}
                    className="group bg-white text-vault-darkWine px-12 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-vault-yellow transition-all flex items-center gap-4 shadow-xl"
                >
                    <LogIn size={20} />
                    {content.loginBtn}
                </button>
            </div>
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-vault-yellow/10 rounded-full -ml-24 -mb-24"></div>
        </div>

        {/* Public Preview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <CalendarIcon className="text-vault-wine w-8 h-8" />
                    <h3 className="text-2xl font-black text-vault-darkWine uppercase tracking-tight">{content.previewTitle}</h3>
                </div>
                <div className="space-y-4">
                    {content.mockEvents.map((ev, i) => (
                        <div key={i} className="flex items-center gap-6 p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-vault-yellow transition-colors">
                            <span className="font-mono font-black text-vault-wine text-sm whitespace-nowrap">{ev.date}</span>
                            <div className="w-px h-8 bg-gray-200"></div>
                            <span className="text-gray-600 font-medium">{ev.event}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-50 p-10 rounded-[3rem] border-2 border-dashed border-gray-200 flex flex-col items-center text-center gap-6">
                <Info className="text-gray-300 w-12 h-12" />
                <p className="text-gray-400 text-sm leading-relaxed italic">
                    {isEn 
                        ? "Additional events including sports fixtures, parent-teacher conferences, and extracurricular schedules are available in the portal." 
                        : "Eventos adicionales como encuentros deportivos y conferencias de padres están disponibles en el portal."}
                </p>
            </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default CalendarPage;