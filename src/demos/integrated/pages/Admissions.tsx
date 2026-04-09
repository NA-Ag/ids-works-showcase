import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { getSchoolData } from '../data/schoolData';
import { 
  Mail, 
  MessageSquare, 
  School, 
  ArrowRight, 
  FileSearch, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ClipboardCheck, 
  Users, 
  X,
  Send,
  Loader2
} from 'lucide-react';

const Admissions: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const content = {
    title: isEn ? "Admissions" : "Admisiones",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
        { label: isEn ? "Admissions" : "Admisiones" }
    ],
    institutionalCommitment: isEn 
        ? "Colegio IDS is committed to identifying and nurturing the scholars, leaders, and innovators of tomorrow. Our admissions process is designed to evaluate academic potential, character alignment, and global mindset."
        : "Colegio IDS se compromete a identificar y nutrir a los académicos, líderes e innovadores del mañana.",
    processTitle: isEn ? "Admissions Pathway" : "Proceso de Admisión",
    requirementsTitle: isEn ? "Documentation Requirements" : "Requisitos de Documentación",
    policiesTitle: isEn ? "Admissions Policies" : "Políticas de Admisión",
    formTitle: isEn ? "Formal Admissions Enquiry" : "Solicitud Formal de Admisión",
    processSteps: [
        { title: isEn ? "Inquiry" : "Consulta", icon: Mail, color: "bg-vault-darkWine" },
        { title: isEn ? "Interview" : "Entrevista", icon: MessageSquare, color: "bg-vault-wine" },
        { title: isEn ? "Tour" : "Visita", icon: School, color: "bg-vault-wine" },
        { title: isEn ? "Assessment" : "Evaluación", icon: FileSearch, color: "bg-vault-darkWine" },
        { title: isEn ? "Review" : "Revisión", icon: ClipboardCheck, color: "bg-vault-wine" },
        { title: isEn ? "Enrollment" : "Inscripción", icon: CheckCircle2, color: "bg-vault-wine" }
    ],
    testimonials: [
        {
            name: "Sofia Villalobos",
            role: isEn ? "Parent of Year 9 Student" : "Madre de alumno en Año 9",
            text: isEn 
                ? "The transition to Colegio IDS was the best decision for our family. The academic rigour combined with the bicultural environment has truly prepared our daughter for a global future."
                : "La transición a Colegio IDS fue la mejor decisión para nuestra familia. El rigor académico y el ambiente bicultural han preparado a nuestra hija para un futuro global."
        },
        {
            name: "Dr. Julian Herzog",
            role: isEn ? "Alumni Class of 2018" : "Exalumno Generación 2018",
            text: isEn 
                ? "The IB Diploma Programme at IDS gave me the analytical foundations required for my medical degree. I felt miles ahead of my peers in my first year of university."
                : "El Programa del Diploma IB en IDS me dio las bases analíticas necesarias para mi carrera de medicina."
        }
    ]
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
    <PageLayout title={content.title} breadcrumbs={content.breadcrumbs} bannerImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000">
      <div className="space-y-24 animate-fade-in">
        
        {/* Scarcity Banner */}
        <div className="bg-vault-darkWine text-white p-6 border-l-4 border-vault-yellow shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 -mt-8 mx-auto relative z-10 max-w-5xl">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-vault-yellow/20 text-vault-yellow rounded-none">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h4 className="font-serif font-black text-xl uppercase tracking-tighter italic">{isEn ? 'Cycle 2026 Admissions' : 'Admisiones Ciclo 2026'}</h4>
                    <p className="text-xs font-medium text-gray-300">{isEn ? 'Late applications are now being reviewed on a rolling basis.' : 'Las solicitudes tardías están siendo revisadas de forma continua.'}</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-[10px] font-mono font-black text-vault-yellow uppercase tracking-[0.3em] mb-1">{isEn ? 'Applications Close In:' : 'Cierre de Solicitudes En:'}</p>
                <div className="flex items-center gap-2 font-mono text-2xl font-black">
                    <span className="bg-black/40 px-3 py-1 border border-white/10">14</span><span className="text-vault-yellow text-sm">d</span>
                    <span className="bg-black/40 px-3 py-1 border border-white/10">08</span><span className="text-vault-yellow text-sm">h</span>
                    <span className="bg-black/40 px-3 py-1 border border-white/10">42</span><span className="text-vault-yellow text-sm">m</span>
                </div>
            </div>
        </div>

        {/* 1. Institutional Commitment */}
        <section className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-vault-darkWine text-white px-6 py-2 rounded-sm font-black text-[10px] tracking-[0.4em] uppercase shadow-lg">
                <ShieldCheck size={14} className="text-vault-yellow" /> {isEn ? 'PEDAGOGICAL INTEGRITY' : 'INTEGRIDAD PEDAGÓGICA'}
            </div>
            <p className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic leading-tight">
                "{content.institutionalCommitment}"
            </p>
            <div className="h-1.5 w-32 bg-vault-yellow mx-auto rounded-full"></div>
        </section>

        {/* 2. Admissions Process (Blueprint Style) */}
        <section className="bg-gray-50 -mx-4 lg:-mx-12 px-4 lg:px-12 py-24 border-y border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#003366 1px, transparent 1px), linear-gradient(90deg, #003366 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <h3 className="text-4xl font-black text-vault-darkWine uppercase tracking-tighter italic text-center mb-20">{content.processTitle}</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {content.processSteps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center group">
                            <div className={`w-24 h-24 ${step.color} rounded-[2rem] flex items-center justify-center text-white shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 mb-6 border-4 border-white`}>
                                <step.icon size={32} />
                            </div>
                            <span className="font-mono text-[10px] text-gray-400 mb-2 font-bold tracking-widest">STEP 0{idx + 1}</span>
                            <h4 className="text-sm font-black text-vault-darkWine uppercase tracking-widest text-center">{step.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. Policies & Requirements (High Contrast) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Policies */}
            <div className="space-y-12">
                <div className="flex items-center gap-4 border-b-4 border-vault-yellow pb-4 w-fit">
                    <h3 className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic">{content.policiesTitle}</h3>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {data.admissions.policies.map((policy: any, idx: number) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6">
                            <div className="bg-vault-paper p-3 rounded-xl text-vault-wine h-fit">
                                <Users size={20} />
                            </div>
                            <div>
                                <h4 className="font-black text-vault-darkWine uppercase tracking-tight mb-1 italic">{policy.title}</h4>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{policy.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Requirements Checklist */}
            <div className="bg-vault-darkWine p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden border-b-8 border-vault-yellow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-10 relative z-10">{content.requirementsTitle}</h3>
                <ul className="space-y-6 relative z-10">
                    {data.admissions.requirements.map((req: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-4 group">
                            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-vault-yellow group-hover:text-vault-darkWine transition-colors">
                                <CheckCircle2 size={18} />
                            </div>
                            <span className="font-black uppercase tracking-widest text-xs text-blue-100">{req}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                    <p className="text-[10px] font-mono text-blue-300 uppercase tracking-widest">
                        &gt; All documents must be notarized <br/>
                        &gt; Digital submission preferred
                    </p>
                </div>
            </div>
        </section>

        {/* 4. Scholarly Testimonials */}
        <section id="testimonials" className="py-12 scroll-mt-24">
            <div className="text-center mb-16">
                <h3 className="text-4xl font-black text-vault-darkWine uppercase tracking-tighter italic mb-4">{isEn ? "Scholarly Testimonials" : "Testimonios Académicos"}</h3>
                <div className="h-1 w-24 bg-idsRed mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {content.testimonials.map((t, i) => (
                    <div key={i} className="bg-vault-paper p-12 rounded-[3rem] border border-vault-wine/10 relative group">
                        <div className="text-idsRed opacity-20 absolute top-8 left-8"><FileText size={48} /></div>
                        <p className="text-xl text-vault-darkWine font-medium leading-relaxed italic mb-8 relative z-10">"{t.text}"</p>
                        <div className="pt-6 border-t border-vault-wine/5">
                            <h5 className="font-black text-vault-darkWine uppercase tracking-widest text-xs">{t.name}</h5>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* 5. Formal Enquiry Form */}
        <section className="max-w-4xl mx-auto bg-white rounded-[4rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-vault-darkWine p-12 text-center text-white relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10">
                    <FileText size={48} className="mx-auto text-vault-yellow mb-6" />
                    <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-4">{content.formTitle}</h3>
                    <p className="text-blue-100 font-light italic">{isEn ? "Initiate your scholarly journey with Colegio IDS." : "Inicie su camino académico con Colegio IDS."}</p>
                </div>
            </div>

            <div className="p-12 md:p-20">
                {submitted ? (
                    <div className="text-center space-y-8 animate-scale-up">
                        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 size={48} />
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic">Enquiry Received</h4>
                            <p className="text-gray-500 font-medium max-w-md mx-auto">
                                Your formal admissions enquiry has been logged into our system. An admissions officer will contact you within 48 hours.
                            </p>
                        </div>
                        <button onClick={() => setSubmitted(false)} className="text-vault-wine font-black text-xs uppercase tracking-widest hover:underline">Submit another enquiry</button>
                    </div>
                ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Parent Full Name</label>
                                <input required type="text" className="w-full bg-gray-50 border-2 border-transparent focus:border-vault-wine focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-vault-darkWine" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Email Address</label>
                                <input required type="email" className="w-full bg-gray-50 border-2 border-transparent focus:border-vault-wine focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-vault-darkWine" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Stage of Interest</label>
                                <select className="w-full bg-gray-50 border-2 border-transparent focus:border-vault-wine focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-vault-darkWine appearance-none">
                                    <option>Kinder (Waitlist / Lista de Espera)</option>
                                    <option>Primary (3 Spots Left / 3 Lugares)</option>
                                    <option>Secondary</option>
                                    <option>High School (Waitlist / Lista de Espera)</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Student Birth Date</label>
                                <input required type="date" className="w-full bg-gray-50 border-2 border-transparent focus:border-vault-wine focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-vault-darkWine" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Additional Information</label>
                            <textarea rows={4} className="w-full bg-gray-50 border-2 border-transparent focus:border-vault-wine focus:bg-white p-4 rounded-xl outline-none transition-all font-bold text-vault-darkWine resize-none" />
                        </div>
                        <button 
                            disabled={isSubmitting}
                            type="submit" 
                            className="w-full bg-vault-darkWine text-white py-6 rounded-xl font-black uppercase tracking-[0.2em] text-sm hover:bg-vault-wine transition-all shadow-2xl flex items-center justify-center gap-4 group disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <Loader2 className="animate-spin" />
                            ) : (
                                <>Initiate Inquiry <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /></>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default Admissions;