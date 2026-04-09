import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { Phone, Mail, MapPin, Clock, Send, Globe, ShieldCheck, MessageSquare, Loader2, CheckCircle2, Building2 } from 'lucide-react';
import { SCHOOL_PHONE, SCHOOL_EMAIL, SCHOOL_ADDRESS } from '../data/schoolData';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const content = {
    title: isEn ? "Contact & Directory" : "Contacto y Directorio",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
        { label: isEn ? "Contact" : "Contacto" }
    ],
    intro: isEn 
        ? "Colegio IDS maintains open channels of communication for all institutional inquiries. Our Office of Communications is dedicated to providing efficient and professional support to our global community."
        : "Colegio IDS mantiene canales abiertos de comunicación para todas las consultas institucionales.",
    infoTitle: isEn ? "Institutional Directory" : "Directorio Institucional",
    formTitle: isEn ? "Formal Communication Protocol" : "Protocolo de Comunicación Formal",
    info: [
        { icon: Phone, label: isEn ? "Registrar's Office" : "Oficina del Registrador", value: SCHOOL_PHONE },
        { icon: Mail, label: isEn ? "Admissions Desk" : "Mesa de Admisiones", value: SCHOOL_EMAIL },
        { icon: MapPin, label: isEn ? "Campus Location" : "Ubicación del Plantel", value: SCHOOL_ADDRESS },
        { icon: Clock, label: isEn ? "Operational Hours" : "Horario de Operación", value: isEn ? "Mon-Fri: 07:30 - 16:30" : "Lun-Vie: 07:30 - 16:30" }
    ],
    form: {
        name: isEn ? "Parent / Guardian Name" : "Nombre del Padre / Tutor",
        email: isEn ? "Official Email Address" : "Correo Electrónico Oficial",
        subject: isEn ? "Nature of Inquiry" : "Naturaleza de la Consulta",
        message: isEn ? "Communication Detail" : "Detalle de la Comunicación",
        submit: isEn ? "SUBMIT FORMAL INQUIRY" : "ENVIAR CONSULTA FORMAL"
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
    }, 2000);
  };

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs} 
        bannerImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="space-y-24 animate-fade-in">
        
        {/* 1. Institutional Commitment */}
        <section className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-vault-darkWine text-white px-6 py-2 rounded-sm font-black text-[10px] tracking-[0.4em] uppercase shadow-lg">
                <ShieldCheck size={14} className="text-vault-yellow" /> {isEn ? 'VERIFIED COMMUNICATION' : 'COMUNICACIÓN VERIFICADA'}
            </div>
            <p className="text-2xl text-vault-darkWine font-black uppercase tracking-tighter italic leading-tight border-l-4 border-vault-yellow pl-8">
                "{content.intro}"
            </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-16">
            {/* 2. Directory Column */}
            <div className="lg:w-1/3 space-y-8">
                <div className="flex items-center gap-4 border-b-2 border-vault-yellow pb-4 mb-8">
                    <Building2 size={24} className="text-vault-wine" />
                    <h3 className="text-xl font-black text-vault-darkWine uppercase tracking-widest italic">{content.infoTitle}</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                    {content.info.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-all group border-b-4 hover:border-vault-wine">
                            <div className="bg-vault-paper p-3 rounded-xl text-vault-wine group-hover:bg-vault-darkWine group-hover:text-white transition-colors">
                                <item.icon size={20} />
                            </div>
                            <div>
                                <h5 className="font-black text-vault-darkWine text-[10px] uppercase tracking-[0.2em] mb-2 opacity-40">{item.label}</h5>
                                <p className="text-gray-600 font-bold text-sm leading-relaxed">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Secure Node Info */}
                <div className="bg-vault-darkWine p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group border-b-8 border-idsRed">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <Globe className="text-vault-yellow w-10 h-10" />
                        <h4 className="font-black uppercase tracking-tighter italic text-xl">Global Reach</h4>
                    </div>
                </div>
            </div>

            {/* 3. Formal Protocol Form */}
            <div className="lg:w-2/3">
                <div className="bg-vault-paper p-1 border-2 border-vault-wine/10 rounded-[3rem] shadow-2xl">
                    <div className="bg-white p-10 md:p-16 rounded-[2.8rem] space-y-10">
                        <div className="text-center space-y-4">
                            <h3 className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic">{content.formTitle}</h3>
                            <div className="h-1 w-20 bg-idsRed mx-auto"></div>
                        </div>

                        {submitted ? (
                            <div className="text-center space-y-8 animate-scale-up py-12">
                                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 size={40} />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-black text-vault-darkWine uppercase tracking-tighter italic">Message Logged</h4>
                                    <p className="text-gray-500 font-medium max-w-md mx-auto">
                                        Your communication has been successfully routed to the appropriate department. A formal response will be issued shortly.
                                    </p>
                                </div>
                                <button onClick={() => setSubmitted(false)} className="text-vault-wine font-black text-[10px] uppercase tracking-widest hover:underline">New Communication</button>
                            </div>
                        ) : (
                            <form className="space-y-8" onSubmit={handleFormSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-4">{content.form.name}</label>
                                        <input required type="text" className="w-full bg-gray-50 border-2 border-transparent focus:border-vault-wine focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-vault-darkWine" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-4">{content.form.email}</label>
                                        <input required type="email" className="w-full bg-gray-50 border-2 border-transparent focus:border-vault-wine focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-vault-darkWine" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-4">{content.form.subject}</label>
                                    <input required type="text" className="w-full bg-gray-50 border-2 border-transparent focus:border-vault-wine focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-vault-darkWine" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-4">{content.form.message}</label>
                                    <textarea required rows={5} className="w-full bg-gray-50 border-2 border-transparent focus:border-vault-wine focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-vault-darkWine resize-none"></textarea>
                                </div>
                                <button 
                                    disabled={isSubmitting}
                                    type="submit" 
                                    className="w-full bg-vault-darkWine text-white py-6 rounded-xl font-black uppercase tracking-[0.2em] text-sm hover:bg-vault-wine transition-all shadow-2xl flex items-center justify-center gap-4 group disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="animate-spin" />
                                    ) : (
                                        <>{content.form.submit} <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Contact;