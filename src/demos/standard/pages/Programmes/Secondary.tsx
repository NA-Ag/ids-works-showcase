import React, { useState, useRef } from 'react';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';
import { Shield, GraduationCap, ChevronRight, Award, Globe, BookOpen, Clock, Users, Target, CheckCircle2, FileText, School, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuickViewModal } from '../../components/QuickViewModal';

const Secondary: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';
  const curriculumRef = useRef<HTMLDivElement>(null);

  const [selectedTrack, setSelectedStage] = useState<any | null>(null);

  const trackDetails: any = {
    "Humanities & Arts": {
        features: isEn 
            ? ["World Literature", "Historical Analysis", "Creative Arts Portfolio", "Global Ethics & Values"]
            : ["Literatura Universal", "Análisis Histórico", "Portafolio de Artes", "Ética y Valores Globales"]
    },
    "STEM & Innovation": {
        features: isEn
            ? ["Advanced Mathematics", "Physics & Chemistry Labs", "Computer Science", "Engineering Principles"]
            : ["Matemáticas Avanzadas", "Labs de Física y Química", "Ciencias de la Computación", "Principios de Ingeniería"]
    },
    "Economics & Business": {
        features: isEn
            ? ["Macroeconomics", "Business Management", "Accounting Foundations", "Strategic Leadership"]
            : ["Macroeconomía", "Gestión de Negocios", "Bases de Contabilidad", "Liderazgo Estratégico"]
    }
  };

  trackDetails["Humanidades y Artes"] = trackDetails["Humanities & Arts"];
  trackDetails["STEM e Innovación"] = trackDetails["STEM & Innovation"];
  trackDetails["Economía y Negocios"] = trackDetails["Economics & Business"];

  const content = {
    hero: {
        title: isEn ? "ACADEMIC RIGOUR" : "RIGOR ACADÉMICO",
        subtitle: isEn ? "Providing a world-class secondary education through international standards and bilingual excellence." : "Brindando una educación secundaria de clase mundial a través de estándares internacionales y excelencia bilingüe."
    },
    intro: {
        title: isEn ? "Excellence in Secondary Education" : "Excelencia en Educación Secundaria",
        text: isEn 
            ? "The Secondary School at Colegio IDS focuses on the transition from fundamental skills to advanced academic specialisation. We prepare our students for the demands of high school and university entrance through a balanced, rigorous curriculum."
            : "La Secundaria en Colegio IDS se enfoca en la transición de habilidades fundamentales a la especialización académica avanzada."
    }
  };

  return (
    <>
    <div className="bg-white min-h-screen font-sans selection:bg-vault-blue/10 overflow-hidden">
      
      <QuickViewModal 
        isOpen={selectedTrack !== null}
        onClose={() => setSelectedStage(null)}
        title={selectedTrack?.title || ''}
        description={selectedTrack?.desc || ''}
        features={selectedTrack ? trackDetails[selectedTrack.title]?.features || [] : []}
        color="bg-vault-darkBlue"
      />

      {/* 1. ACADEMIC HERO SECTION */}
      <section className="relative h-[600px] md:h-[750px] flex items-center bg-vault-darkBlue overflow-hidden pt-20">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="container mx-auto px-4 lg:px-12 relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8 animate-fade-in-left">
                      <div className="inline-flex items-center gap-2 bg-vault-yellow text-vault-darkBlue px-4 py-1 rounded-sm font-black text-[10px] tracking-widest uppercase">
                          <School size={14} /> {isEn ? 'Secondary Division' : 'División Secundaria'}
                      </div>
                      
                      <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-white uppercase tracking-tighter italic">
                          {isEn ? "RIGOUR &" : "RIGOR Y"}<br/>
                          <span className="text-vault-yellow">SUCCESS</span>
                      </h1>
                      
                      <p className="text-xl md:text-2xl text-blue-50 font-light leading-relaxed border-l-4 border-idsRed pl-8 max-w-xl">
                          {content.hero.subtitle}
                      </p>

                      <div className="pt-4 flex flex-wrap gap-4">
                          <button 
                            onClick={() => curriculumRef.current?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-vault-darkBlue px-10 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-vault-yellow transition-all shadow-xl"
                          >
                              {isEn ? "VIEW CURRICULUM" : "VER CURRÍCULO"}
                          </button>
                          <Link 
                            to="/demos/standard/contact"
                            className="border-2 border-white/30 text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white hover:text-vault-darkBlue transition-all"
                          >
                              {isEn ? "ADMISSIONS" : "ADMISIONES"}
                          </Link>
                      </div>
                  </div>

                  <div className="relative h-[450px] md:h-[550px] hidden lg:block">
                      <div className="absolute right-0 top-0 w-[90%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10 group">
                          <img 
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                            alt="Secondary Students" 
                            className="w-full h-full object-cover transition-all duration-1000"
                          />
                      </div>
                      <div className="absolute left-0 bottom-0 w-[45%] h-[45%] bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 border-4 border-vault-blue transform -rotate-3 text-vault-darkBlue">
                          <GraduationCap size={60} className="text-idsRed" />
                          <span className="mt-4 font-black text-xs uppercase tracking-widest">Year 7 - 11</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 2. QUALITY INDICATORS */}
      <section className="bg-gray-50 py-24 border-b border-gray-200">
          <div className="container mx-auto px-4 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {data.secondary.stats.map((stat: any, idx: number) => (
                      <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group">
                          <p className="text-5xl font-black text-vault-darkBlue mb-2 italic tracking-tighter group-hover:text-idsRed transition-colors">{stat.value}</p>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">{stat.label}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. ACADEMIC OVERVIEW */}
      <section className="py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-10">
                      <div className="space-y-4">
                          <h2 className="text-5xl font-black text-vault-darkBlue uppercase tracking-tighter leading-tight italic">
                              {content.intro.title}
                          </h2>
                          <div className="h-1.5 w-32 bg-vault-blue"></div>
                      </div>
                      <p className="text-xl text-gray-600 leading-relaxed font-medium">
                          {content.intro.text}
                      </p>
                      <div className="grid grid-cols-1 gap-4 pt-4">
                          {['Authorized IB World School', 'Cambridge International Certification', 'Specialized Science & Technology Labs'].map((item, i) => (
                              <div key={i} className="flex items-center gap-4 text-vault-darkBlue font-black uppercase tracking-widest text-[11px] bg-gray-50 p-4 rounded-xl border-l-4 border-vault-blue">
                                  <CheckCircle2 size={18} className="text-idsRed" /> {item}
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=1000" 
                        alt="Academic Environment" 
                        className="rounded-[3rem] shadow-2xl border-8 border-gray-50 object-cover w-full h-[500px]"
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* 4. CURRICULUM TRACKS */}
      <section ref={curriculumRef} className="bg-vault-darkBlue py-32 text-white relative overflow-hidden border-y-8 border-vault-yellow">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="container mx-auto px-4 lg:px-12 relative z-10">
              <div className="text-center mb-20">
                  <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-4">{isEn ? "Curriculum Pathways" : "Vías Curriculares"}</h2>
                  <div className="h-1.5 w-32 bg-idsRed mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {data.secondary.tracks.map((track: any, idx: number) => (
                      <div key={idx} onClick={() => setSelectedStage(track)} className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:bg-white hover:text-vault-darkBlue transition-all group cursor-pointer flex flex-col justify-between h-full border-b-8 hover:border-vault-yellow">
                          <div>
                              <div className="bg-idsRed p-3 rounded-xl text-white w-fit mb-8 group-hover:rotate-6 transition-transform">
                                  {idx === 0 && <BookOpen size={28} />}
                                  {idx === 1 && <Target size={28} />}
                                  {idx === 2 && <BarChart3 size={28} />}
                              </div>
                              <h4 className="text-2xl font-black uppercase tracking-tighter italic mb-4">{track.title}</h4>
                              <p className="text-blue-100 font-light leading-relaxed group-hover:text-gray-600 mb-8">
                                  {track.desc}
                              </p>
                          </div>
                          <span className="text-vault-yellow font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-vault-blue">
                              {isEn ? "View Details" : "Ver Detalles"} <ChevronRight size={14} />
                          </span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. ADMISSIONS & ENRICHMENT */}
      <section className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Admissions CTA */}
                  <div className="bg-white rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl border border-gray-100 border-b-8 border-vault-blue group">
                      <div className="relative z-10 space-y-8">
                          <FileText size={48} className="mx-auto text-idsRed animate-pulse" />
                          <h2 className="text-3xl md:text-4xl font-black text-vault-darkBlue uppercase tracking-tighter italic">
                              {isEn ? "Formal Admissions" : "Admisión Formal"}
                          </h2>
                          <Link 
                              to="/demos/standard/admissions" 
                              className="inline-block bg-vault-darkBlue text-white px-12 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-idsRed transition-all shadow-xl"
                          >
                              {isEn ? "INQUIRE ABOUT ADMISSIONS" : "SOLICITAR INFORMACIÓN"}
                          </Link>
                      </div>
                  </div>

                  {/* Enrichment Section */}
                  <div className="bg-vault-darkBlue rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border-b-8 border-vault-yellow group">
                      <div className="relative z-10 space-y-8">
                          <Zap size={48} className="mx-auto text-vault-yellow" />
                          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">
                              {isEn ? "Co-Curricular Support" : "Apoyo Cocurricular"}
                          </h2>
                          <p className="text-blue-100 text-sm font-light">
                              {isEn ? "Specialized academic societies and technical certification programs." : "Sociedades académicas y programas de certificación técnica."}
                          </p>
                          <Link 
                              to="/demos/standard/plus/secondary" 
                              className="inline-block bg-vault-yellow text-vault-darkBlue px-12 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                          >
                              {isEn ? "VIEW ENRICHMENT" : "VER ENRIQUECIMIENTO"}
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <footer className="py-20 text-center opacity-30 grayscale border-t border-gray-100">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.5em] text-vault-darkBlue">
              &gt; Excellence in Secondary Education &lt;
          </p>
      </footer>

    </div>
    </>
  );
};

export default Secondary;