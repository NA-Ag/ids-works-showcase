import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';
import { Globe, GraduationCap, X, ChevronLeft, ChevronRight, Maximize2, Award, Briefcase } from 'lucide-react';

const InternationalOutlook: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  const isEn = language === 'en';

  const galleryImages = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  ];

  const content = {
    title: isEn ? "International Outlook" : "Enfoque Internacional",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
        { label: isEn ? "About Us" : "Quiénes somos", href: "#" },
        { label: isEn ? "International Outlook" : "Enfoque Internacional" }
    ],
    mainTitle: isEn 
        ? "Colegio IDS: A Global Learning Community" 
        : "Colegio IDS: Una Comunidad de Aprendizaje Global",
    globalCitizensText: isEn
        ? "At Colegio IDS we prepare young people to become successful global citizens. We proudly have both staff and students from various international backgrounds."
        : "En Colegio IDS preparamos a los jóvenes para convertirse en ciudadanos globales de éxito. Contamos con personal y estudiantes de diversos orígenes internacionales.",
    bilingualText: isEn
        ? "Colegio IDS is proud to offer a truly bilingual environment where students are immersed in both English and Spanish language. Students work with highly qualified teachers to develop their language skills."
        : "Colegio IDS se enorgullece de ofrecer un entorno verdaderamente bilingüe donde los estudiantes se sumergen en inglés y español con profesores altamente calificados.",
    curriculumText: isEn
        ? "We are strongly committed to providing students with access to both Spanish and English as prominent languages of instruction. We value the richness of global cultures."
        : "Estamos firmemente comprometidos a proporcionar a los estudiantes acceso tanto al español como al inglés como idiomas principales de instrucción.",
    partnersTitle: isEn ? "Strategic Global Partnerships" : "Alianzas Globales Estratégicas",
    statsTitle: isEn ? "Global Impact by Numbers" : "Impacto Global en Números"
  };

  const openLightbox = (idx: number) => setSelectedImg(idx);
  const closeLightbox = () => setSelectedImg(null);
  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImg !== null) setSelectedImg((selectedImg + 1) % galleryImages.length);
  };
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImg !== null) setSelectedImg((selectedImg - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs} 
        bannerImage="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="space-y-24 animate-fade-in">
        
        {/* Main Image Block & Stats */}
        <section className="space-y-12">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] border-8 border-white group">
                <img 
                    src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=2000" 
                    alt="Colegio IDS Students" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vault-darkWine/80 via-transparent to-transparent flex items-end p-12">
                    <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic max-w-3xl leading-tight">
                        {content.mainTitle}
                    </h2>
                </div>
            </div>
            
            {/* Stats Dashboard */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {data.internationalOutlook.stats.map((stat: any, idx: number) => (
                    <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center hover:border-vault-yellow transition-all group">
                        <p className="text-4xl font-black text-vault-darkWine group-hover:scale-110 transition-transform italic tracking-tighter">{stat.value}</p>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>

            <p className="text-2xl text-gray-700 leading-relaxed font-light italic text-center max-w-4xl mx-auto border-l-4 border-vault-yellow pl-8">
                "{content.globalCitizensText}"
            </p>
        </section>

        {/* Partnerships Section */}
        <section className="bg-gray-50 -mx-4 lg:-mx-12 px-4 lg:px-12 py-24 border-y border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-vault-darkWine uppercase tracking-tighter italic mb-4">{content.partnersTitle}</h2>
                    <div className="h-1 w-24 bg-vault-yellow mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.internationalOutlook.partnerships.map((partner: any, idx: number) => (
                        <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-8 hover:border-vault-wine flex flex-col items-center text-center">
                            <div className="bg-vault-wine/10 p-4 rounded-2xl text-vault-wine mb-6">
                                <Briefcase size={32} />
                            </div>
                            <h4 className="text-xl font-black text-vault-darkWine uppercase tracking-tight mb-1 italic">{partner.name}</h4>
                            <p className="text-[10px] font-black text-vault-wine uppercase tracking-widest mb-4">{partner.type}</p>
                            <p className="text-gray-600 font-medium leading-relaxed text-sm">
                                {partner.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Detailed Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8 bg-vault-darkWine p-12 rounded-[3rem] border-b-8 border-vault-yellow shadow-xl hover:-translate-y-1 transition-all text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-white/10 p-3 rounded-xl">
                        <Globe className="w-6 h-6 text-vault-yellow" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter italic">
                        {isEn ? "Truly Bilingual" : "Verdaderamente Bilingüe"}
                    </h3>
                </div>
                <p className="text-blue-100 font-light leading-relaxed relative z-10 text-lg">
                    {content.bilingualText}
                </p>
            </div>

            <div className="space-y-8 bg-vault-wine p-12 rounded-[3rem] border-b-8 border-vault-yellow shadow-xl hover:-translate-y-1 transition-all text-white relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="bg-white/10 p-3 rounded-xl">
                        <GraduationCap className="w-6 h-6 text-vault-yellow" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter italic">
                        {isEn ? "Global Curriculum" : "Plan Global"}
                    </h3>
                </div>
                <p className="text-blue-50 font-light leading-relaxed relative z-10 text-lg">
                    {content.curriculumText}
                </p>
            </div>
        </div>

        {/* Gallery Grid */}
        <section className="pt-8">
            <div className="flex items-center justify-between mb-12 border-b-4 border-gray-100 pb-6">
                <h3 className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic">
                    {isEn ? "Global Community Gallery" : "Galería Comunidad Global"}
                </h3>
                <div className="flex items-center gap-2 font-mono text-[10px] font-black text-vault-wine tracking-widest">
                    <Award size={14} /> // FIELD TRIPS & EXCHANGES
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryImages.map((img, idx) => (
                    <div 
                        key={idx} 
                        className="relative group cursor-pointer aspect-square rounded-[2rem] overflow-hidden shadow-lg border-2 border-transparent hover:border-vault-yellow transition-all"
                        onClick={() => openLightbox(idx)}
                    >
                        <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-vault-darkWine/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="text-white w-8 h-8" />
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Lightbox */}
        {selectedImg !== null && (
            <div 
                className="fixed inset-0 z-[200] bg-vault-darkWine/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
                onClick={closeLightbox}
            >
                <button className="absolute top-8 right-8 text-white hover:text-vault-yellow transition-colors z-[210]">
                    <X className="w-10 h-10" />
                </button>
                <button className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors" onClick={prevImg}><ChevronLeft className="w-12 h-12" /></button>
                <div className="max-w-5xl max-h-full relative z-[205]"><img src={galleryImages[selectedImg]} alt="Enlarged" className="max-w-full max-h-[80vh] object-contain rounded-[2rem] shadow-2xl border-4 border-white/10" /></div>
                <button className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors" onClick={nextImg}><ChevronRight className="w-12 h-12" /></button>
            </div>
        )}

      </div>
    </PageLayout>
  );
};

export default InternationalOutlook;