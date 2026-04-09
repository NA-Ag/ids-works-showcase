import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { getSchoolData } from '../data/schoolData';
import { Calendar, User, ArrowRight, Search, BookOpen, FileText, Download, Bookmark, ChevronRight, AlertCircle, X } from 'lucide-react';

const Publications: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';

  const [showDemoAlert, setShowDemoAlert] = useState(false);

  const triggerAlert = () => {
    setShowDemoAlert(true);
    setTimeout(() => setShowDemoAlert(false), 3000);
  };

  const content = {
    title: isEn ? "Publications & Archive" : "Publicaciones y Archivo",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/standard" },
        { label: isEn ? "Publications" : "Publicaciones" }
    ],
    magazinesTitle: isEn ? "Institutional Journals" : "Revistas Institucionales",
    newsTitle: isEn ? "Scholarly News" : "Noticias Académicas",
    archiveTitle: isEn ? "Publications Archive" : "Archivo de Publicaciones"
  };

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs} 
        bannerImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="space-y-24 animate-fade-in">
        
        {/* 1. Institutional Journals (Magazines) */}
        <section className="space-y-12">
            <div className="flex items-center gap-4 border-b-4 border-vault-yellow pb-4 w-fit">
                <BookOpen size={32} className="text-vault-blue" />
                <h3 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter italic">{content.magazinesTitle}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {data.publications.magazines.map((mag: any, idx: number) => (
                    <div key={idx} className="bg-vault-paper p-10 rounded-[3rem] border border-vault-blue/10 shadow-xl flex flex-col justify-between relative group hover:border-idsRed transition-all">
                        <div className="absolute top-8 right-10 text-vault-blue/5 group-hover:text-idsRed/5 transition-colors">
                            <Bookmark size={120} fill="currentColor" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div>
                                <span className="bg-vault-darkBlue text-white text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-widest">{mag.type}</span>
                                <h4 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter italic mt-4">{mag.title}</h4>
                                <p className="text-idsRed font-black text-[10px] uppercase tracking-[0.2em] mt-1">{mag.issue || mag.edición}</p>
                            </div>
                            <p className="text-gray-600 font-medium leading-relaxed italic">
                                "{mag.desc}"
                            </p>
                        </div>
                        <button 
                            onClick={triggerAlert}
                            className="relative z-10 mt-10 flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-xl text-vault-blue font-black text-[10px] uppercase tracking-widest hover:bg-vault-blue hover:text-white transition-all shadow-sm"
                        >
                            <Download size={16} /> DOWNLOAD DIGITAL COPY
                        </button>
                    </div>
                ))}
            </div>
        </section>

        {/* 2. Main News Feed & Sidebar */}
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* News Feed */}
            <div className="lg:w-2/3 space-y-16">
                <div className="flex items-center gap-4 border-b-4 border-vault-yellow pb-4 w-fit">
                    <FileText size={32} className="text-vault-blue" />
                    <h3 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter italic">{content.newsTitle}</h3>
                </div>

                <div className="space-y-12">
                    {data.publications.news.map((post: any, idx: number) => (
                        <article key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row border-b-8 hover:border-idsRed">
                            <div className="md:w-2/5 relative overflow-hidden">
                                <img 
                                    src={post.imageUrl} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                                />
                                <div className="absolute top-6 left-6 bg-vault-yellow text-vault-darkBlue px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest shadow-lg">
                                    {post.category}
                                </div>
                            </div>
                            <div className="md:w-3/5 p-10 space-y-6">
                                <div className="flex items-center gap-6 text-[10px] text-gray-400 font-black uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-idsRed" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4 text-idsRed" />
                                        COMMUNICATIONS DIV.
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter leading-tight italic">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <button 
                                    onClick={triggerAlert}
                                    className="inline-flex items-center text-vault-blue font-black uppercase tracking-[0.2em] text-[10px] hover:gap-4 transition-all"
                                >
                                    {isEn ? "READ FULL ARTICLE" : "LEER ARTÍCULO COMPLETO"}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Sidebar Archive */}
            <aside className="lg:w-1/3 space-y-12">
                <div className="bg-vault-darkBlue p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden border-b-8 border-vault-yellow">
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    <div className="relative z-10 space-y-8">
                        <h4 className="text-2xl font-black uppercase tracking-tighter italic">{isEn ? "Search Archive" : "Buscar en Archivo"}</h4>
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder={isEn ? "Keywords..." : "Palabras clave..."}
                                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-6 text-white focus:outline-none focus:bg-white/20 transition-all font-bold placeholder:text-white/30"
                            />
                            <Search className="absolute right-6 top-4.5 w-6 h-6 text-vault-yellow" />
                        </div>
                    </div>
                </div>

                <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 shadow-inner">
                    <h4 className="text-xl font-black text-vault-darkBlue uppercase tracking-tighter italic mb-8 border-b-2 border-vault-yellow pb-4 inline-block">{content.archiveTitle}</h4>
                    <ul className="space-y-4">
                        {['Academic Reports', 'Newsletters', 'Board Communications', 'Student Journals', 'Digital Policy'].map((cat, i) => (
                            <li key={i}>
                                <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-vault-blue hover:translate-x-2 transition-all group shadow-sm">
                                    <span className="font-black uppercase tracking-widest text-[10px] text-gray-400 group-hover:text-vault-blue">{cat}</span>
                                    <ChevronRight size={14} className="text-gray-300 group-hover:text-vault-blue" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

        </div>

      </div>

      {/* Simulation Toast */}
      {showDemoAlert && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[300] bg-vault-darkBlue text-white px-8 py-4 rounded-full shadow-2xl border-2 border-vault-yellow flex items-center gap-4 animate-fade-in-up">
            <AlertCircle className="text-vault-yellow" size={24} />
            <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Demo Environment</p>
                <p className="text-xs font-bold">{isEn ? 'This document is simulated for demonstration purposes.' : 'Este documento está simulado para fines de demostración.'}</p>
            </div>
            <button onClick={() => setShowDemoAlert(false)} className="ml-4 text-white/40 hover:text-white"><X size={16} /></button>
        </div>
      )}
    </PageLayout>
  );
};

export default Publications;
