import React from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';
import { FileText, ShieldCheck, Download, ExternalLink, Award, CheckCircle2, History, AlertCircle } from 'lucide-react';

const InspectionReports: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';

  const content = {
    title: isEn ? "Academic Reports" : "Reportes Académicos",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/standard" },
        { label: isEn ? "About Us" : "Quiénes somos", href: "#" },
        { label: isEn ? "Reports" : "Reportes" }
    ],
    intro: isEn 
        ? "Colegio IDS undergoes regular academic assessments to ensure we maintain the highest educational standards and operational excellence."
        : "Colegio IDS se somete regularmente a evaluaciones académicas para garantizar los más altos estándares y excelencia operativa.",
    statusTitle: isEn ? "Institutional Status" : "Estatus Institucional",
    reportsTitle: isEn ? "Inspection Archive" : "Archivo de Inspecciones",
    cta: {
        title: isEn ? "Transparency in Excellence" : "Transparencia en la Excelencia",
        desc: isEn ? "Full digital copies of all inspection reports are available for registered parents upon request through the Parent Portal." : "Copias digitales completas de todos los reportes están disponibles para padres registrados bajo solicitud.",
        btn: isEn ? "REQUEST FORMAL DOCUMENTATION" : "SOLICITAR DOCUMENTACIÓN FORMAL"
    }
  };

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs}
        bannerImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="space-y-24 animate-fade-in">
        
        {/* Intro Section */}
        <section className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl border-b-8 border-vault-yellow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                <div className="bg-vault-darkBlue p-6 rounded-2xl shrink-0 shadow-lg relative z-10">
                    <ShieldCheck className="w-12 h-12 text-vault-yellow" />
                </div>
                <p className="text-2xl text-vault-darkBlue leading-relaxed font-light italic relative z-10 border-l-4 border-vault-paper pl-8">
                    "{content.intro}"
                </p>
            </div>

            {/* Quality Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 flex items-center gap-6">
                    <div className="bg-emerald-500 p-3 rounded-xl text-white shadow-lg">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">{isEn ? 'Current Rating' : 'Calificación Actual'}</p>
                        <p className="text-2xl font-black text-emerald-800 uppercase italic tracking-tighter">{data.inspections.overallScore}</p>
                    </div>
                </div>
                <div className="bg-vault-blue/5 p-8 rounded-[2rem] border border-vault-blue/10 flex items-center gap-6">
                    <div className="bg-vault-blue p-3 rounded-xl text-white shadow-lg">
                        <History size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-vault-blue uppercase tracking-widest mb-1">{isEn ? 'Last Inspection' : 'Última Inspección'}</p>
                        <p className="text-2xl font-black text-vault-darkBlue uppercase italic tracking-tighter">{data.inspections.lastVisit}</p>
                    </div>
                </div>
                <div className="bg-vault-paper p-8 rounded-[2rem] border border-vault-blue/10 flex items-center gap-6">
                    <div className="bg-vault-darkBlue p-3 rounded-xl text-vault-yellow shadow-lg">
                        <Award size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-vault-darkBlue uppercase tracking-widest mb-1">{isEn ? 'Certifications' : 'Certificaciones'}</p>
                        <p className="text-2xl font-black text-vault-blue uppercase italic tracking-tighter">100% Active</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Reports List */}
        <section className="space-y-12">
            <div className="flex items-center gap-4 mb-8 border-b-4 border-vault-yellow pb-4 w-fit">
                <h3 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter italic leading-none">
                    {content.reportsTitle}
                </h3>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {data.inspections.reports.map((report: any, idx: number) => (
                    <div key={idx} className="group bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-xl transition-all border-b-8 hover:border-vault-blue">
                        <div className="flex items-center gap-8">
                            <div className="bg-vault-paper p-6 rounded-3xl text-vault-blue group-hover:bg-vault-darkBlue group-hover:text-white transition-colors border border-vault-blue/5">
                                <FileText className="w-10 h-10" />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="text-2xl font-black text-vault-darkBlue uppercase tracking-tighter italic">{report.title}</h4>
                                    <span className="bg-vault-yellow text-vault-darkBlue text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-widest">{report.year}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <p className="text-[10px] text-vault-blue font-black uppercase tracking-[0.2em]">{report.org}</p>
                                    <span className="text-gray-300">|</span>
                                    <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">{report.status}</p>
                                </div>
                                <p className="text-gray-600 font-medium leading-relaxed max-w-2xl text-lg">
                                    {report.summary}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <button className="flex items-center justify-center gap-3 px-6 py-3 bg-vault-paper rounded-xl text-vault-blue font-black text-[10px] uppercase tracking-widest border border-vault-blue/10 hover:bg-vault-blue hover:text-white transition-all shadow-sm">
                                <Download size={16} /> DOWNLOAD PDF
                            </button>
                            <button className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-50 rounded-xl text-gray-400 font-black text-[10px] uppercase tracking-widest border border-transparent hover:border-gray-200 transition-all">
                                <ExternalLink size={16} /> VERIFY SOURCE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Closing CTA */}
        <div className="bg-vault-darkBlue text-white p-12 md:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden border-b-8 border-vault-yellow">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
                <div className="space-y-6">
                    <AlertCircle className="w-12 h-12 text-vault-yellow mx-auto opacity-50" />
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight italic">
                        {content.cta.title}
                    </h3>
                    <p className="text-blue-100 text-xl font-light leading-relaxed">
                        {content.cta.desc}
                    </p>
                </div>
                
                <div className="pt-8">
                    <a 
                        href="/demos/standard/contact" 
                        className="inline-block bg-vault-yellow text-vault-darkBlue px-12 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-white hover:-translate-y-1 transition-all shadow-xl"
                    >
                        {content.cta.btn}
                    </a>
                </div>
            </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default InspectionReports;