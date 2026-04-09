import React, { useState, useRef } from 'react';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';
import { Shield, GraduationCap, ChevronRight, Award, Globe, BookOpen, Map, Compass, Briefcase, Star, Sparkles, ExternalLink, ArrowRight, Book, Library } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuickViewModal } from '../../components/QuickViewModal';

const Plus: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';
  const mainContentRef = useRef<HTMLDivElement>(null);

  const [selectedProgram, setSelectedProgram] = useState<any | null>(null);

  const iconMap: any = {
    Map: Map,
    Award: Award,
    Compass: Compass,
    Briefcase: Briefcase
  };

  const programDetails: any = {
    "Higher Education Counselling": {
        features: isEn 
            ? ["Global Application Support", "Portfolio Development", "Interview Workshops", "Scholarship Guidance"]
            : ["Apoyo a Aplicaciones Globales", "Desarrollo de Portafolio", "Talleres de Entrevista", "Guía de Becas"]
    },
    "Orientación Universitaria": {
        features: ["Apoyo a Aplicaciones Globales", "Desarrollo de Portafolio", "Talleres de Entrevista", "Guía de Becas"]
    },
    "IB Diploma Programme": {
        features: isEn
            ? ["Theory of Knowledge (TOK)", "Extended Essay Research", "Advanced Lab Sciences", "HL Mathematics"]
            : ["Teoría del Conocimiento", "Ensayo Extendido", "Ciencias de Lab Avanzadas", "Matemáticas HL"]
    },
    "Programa del Diploma IB": {
        features: ["Teoría del Conocimiento", "Ensayo Extendido", "Ciencias de Lab Avanzadas", "Matemáticas HL"]
    },
    "Service & Leadership": {
        features: isEn
            ? ["CAS Projects", "Public Speaking", "Community Engagement", "Legacy Initiatives"]
            : ["Proyectos CAS", "Oratoria", "Compromiso Comunitario", "Iniciativas de Legado"]
    },
    "Liderazgo y CAS": {
        features: ["Proyectos CAS", "Oratoria", "Compromiso Comunitario", "Iniciativas de Legado"]
    },
    "Advanced Research": {
        features: isEn
            ? ["Academic Integrity", "Scholarly Writing", "Data Analysis", "University-Level Seminars"]
            : ["Integridad Académica", "Escritura Erudita", "Análisis de Datos", "Seminarios Universitarios"]
    },
    "Investigación Avanzada": {
        features: ["Integridad Académica", "Escritura Erudita", "Análisis de Datos", "Seminarios Universitarios"]
    }
  };

  const content = {
    hero: {
        title: isEn ? "HIGHER EDUCATION PREP" : "PREPARACIÓN UNIVERSITARIA",
        subtitle: isEn ? "The definitive stage for academic integrity, scholarly research, and global matriculation." : "La etapa definitiva para la integridad académica y el ingreso universitario global."
    },
    intro: {
        title: isEn ? "Upper Secondary & College Prep" : "Preparatoria y Nivel Superior",
        text: isEn 
            ? "High School at Colegio IDS represents the pinnacle of our pedagogical framework. Our students engage with the IB Diploma Programme, ensuring they meet the entrance requirements for the world's most prestigious universities while developing a mature sense of academic independence."
            : "La Preparatoria en Colegio IDS representa la cima de nuestro marco pedagógico. Los estudiantes se comprometen con el Programa del Diploma IB."
    },
    academicExcellence: isEn ? "Scholarly Environment" : "Entorno Académico"
  };

  return (
    <>
    <div className="bg-white min-h-screen font-sans selection:bg-vault-yellow/20 overflow-hidden">
      
      <QuickViewModal 
        isOpen={selectedProgram !== null}
        onClose={() => setSelectedProgram(null)}
        title={selectedProgram?.title || ''}
        description={selectedProgram?.desc || ''}
        features={selectedProgram ? programDetails[selectedProgram.title]?.features || [] : []}
        color="bg-vault-darkWine"
      />

      {/* 1. UNIVERSITY QUALITY HERO */}
      <section className="relative h-[70vh] flex items-center bg-[#FDFBF7] overflow-hidden pt-20 border-b-2 border-gray-100">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#003366 1px, transparent 1px), linear-gradient(90deg, #003366 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          
          <div className="container mx-auto px-4 lg:px-12 relative z-20">
              <div className="max-w-4xl space-y-10">
                  <div className="inline-flex items-center gap-3 bg-vault-darkWine text-white px-6 py-2 rounded-sm font-black text-[10px] tracking-[0.4em] uppercase shadow-lg">
                      <GraduationCap size={14} className="text-vault-yellow" /> {isEn ? 'UPPER SECONDARY DIVISION' : 'DIVISIÓN PREPARATORIA'}
                  </div>
                  
                  <h1 className="text-6xl md:text-[110px] font-black leading-[0.85] text-vault-darkWine uppercase tracking-tighter italic">
                      {isEn ? "LEGACY &" : "LEGADO Y"}<br/>
                      <span className="text-vault-yellow underline decoration-vault-darkWine/10 underline-offset-8">SUCCESS</span>
                  </h1>
                  
                  <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-2xl border-l-4 border-vault-yellow pl-8">
                      {content.hero.subtitle}
                  </p>

                  <div className="pt-4">
                      <button 
                        onClick={() => mainContentRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center gap-8 bg-vault-darkWine text-white px-12 py-6 rounded-sm hover:bg-vault-yellow hover:text-vault-darkWine transition-all duration-500 shadow-2xl"
                      >
                          <span className="font-black uppercase tracking-widest text-sm">{isEn ? 'EXAMINE THE PATHWAY' : 'EXAMINAR LA RUTA'}</span>
                          <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                  </div>
              </div>
          </div>
      </section>

      {/* 2. ELITE PERFORMANCE METRICS */}
      <section ref={mainContentRef} className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                  {data.highSchool.stats.map((stat: any, idx: number) => (
                      <div key={idx} className="space-y-4 group p-8 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">{stat.label}</p>
                          <div className="h-1 w-12 bg-vault-yellow group-hover:w-full transition-all duration-700"></div>
                          <p className="text-6xl font-black text-vault-darkWine italic tracking-tighter">
                              {stat.value}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. ACADEMIC INTEGRITY (Professional Focus) */}
      <section className="py-32 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                  <div className="space-y-10">
                      <div className="space-y-4">
                          <h2 className="text-5xl font-black text-vault-darkWine uppercase tracking-tighter leading-tight italic">
                              {content.intro.title}
                          </h2>
                          <div className="h-1.5 w-32 bg-vault-darkWine"></div>
                      </div>
                      <p className="text-xl text-gray-600 leading-relaxed font-medium">
                          {content.intro.text}
                      </p>
                      <div className="grid grid-cols-1 gap-4 pt-4">
                          {['Pedagogical Excellence', 'Curricular Integrity', 'Scholarly Research'].map((item, i) => (
                              <div key={i} className="flex items-center gap-4 text-vault-darkWine font-black uppercase tracking-widest text-[11px] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                  <Shield size={18} className="text-idsRed" /> {item}
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="relative">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                          <img 
                            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=1000" 
                            alt="University Quality" 
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                          />
                      </div>
                      <div className="absolute -bottom-10 -right-10 bg-vault-darkWine text-white p-10 rounded-2xl shadow-2xl border-b-8 border-vault-yellow hidden md:block">
                          <Book size={48} className="text-vault-yellow" />
                      </div>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {data.highSchool.programs.map((program: any, idx: number) => {
                      const Icon = iconMap[program.icon] || Award;
                      return (
                          <div 
                            key={idx} 
                            onClick={() => setSelectedProgram(program)}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer group flex flex-col h-full border-b-8 hover:border-vault-darkWine"
                          >
                              <div className="bg-gray-50 p-4 rounded-xl text-vault-darkWine w-fit mb-8 group-hover:bg-vault-darkWine group-hover:text-white transition-all">
                                  <Icon size={28} />
                              </div>
                              <h4 className="text-xl font-black text-vault-darkWine uppercase tracking-tight italic mb-4">{program.title}</h4>
                              <p className="text-gray-500 text-sm font-medium leading-relaxed flex-grow">
                                  {program.desc}
                              </p>
                              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-vault-darkWine transition-colors">Enquire</span>
                                  <ChevronRight size={16} className="text-gray-300 group-hover:translate-x-2 transition-transform" />
                              </div>
                          </div>
                      );
                  })}
              </div>
          </div>
      </section>

      {/* 4. SCHOLARLY CTA */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
          <div className="container mx-auto max-w-6xl text-center">
              <div className="space-y-12 mb-20">
                  <Library size={80} className="mx-auto text-vault-darkWine opacity-20" />
                  <h2 className="text-5xl md:text-8xl font-black text-vault-darkWine uppercase tracking-tighter leading-[0.9] italic">
                      ESTABLISH YOUR<br/>
                      <span className="text-vault-yellow">SCHOLARLY LEGACY</span>
                  </h2>
                  <p className="text-gray-500 text-xl font-medium max-w-3xl mx-auto italic leading-relaxed">
                      {isEn 
                        ? "Join an elite cohort of students accepted into the world's most prestigious higher education institutions." 
                        : "Únase a una cohorte élite de estudiantes aceptados en las instituciones de educación superior más prestigiosas del mundo."}
                  </p>
              </div>
              
              <Link 
                  to="/demos/integrated/contact" 
                  className="inline-block bg-vault-darkWine text-white px-20 py-8 rounded-sm font-black uppercase tracking-[0.2em] text-lg hover:bg-vault-yellow hover:text-vault-darkWine transition-all shadow-2xl transform hover:-translate-y-2 border-b-8 border-idsRed"
              >
                  {isEn ? "INQUIRE FOR ADMISSIONS" : "SOLICITAR ADMISIÓN"}
              </Link>
          </div>
      </section>

      <footer className="py-20 text-center opacity-30 grayscale border-t border-gray-100">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.5em] text-vault-darkWine">
              &gt; Higher Education Division // Scholarly Excellence &lt;
          </p>
      </footer>

    </div>
    </>
  );
};

export default Plus;