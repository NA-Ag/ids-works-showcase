import React, { useState, useRef } from 'react';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';
import { Compass, Atom, Search, Lightbulb, Globe, ChevronRight, BookOpen, Award, GraduationCap, Trophy, Sparkles, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuickViewModal } from '../../components/QuickViewModal';

const Primary: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';
  const welcomeRef = useRef<HTMLDivElement>(null);

  const [selectedStage, setSelectedStage] = useState<any | null>(null);

  const iconMap: any = {
    Search: Search,
    Lightbulb: Lightbulb,
    Globe: Globe,
    Atom: Atom
  };

  const stageDetails: any = {
    "Lower Primary": {
        features: isEn 
            ? ["Mathematical Logic", "Bicultural Literacy", "Scientific Exploration", "Social Leadership"]
            : ["Lógica Matemática", "Alfabetización Bicultural", "Exploración Científica", "Liderazgo Social"]
    },
    "Primaria Baja": {
        features: ["Lógica Matemática", "Alfabetización Bicultural", "Exploración Científica", "Liderazgo Social"]
    },
    "Upper Primary": {
        features: isEn
            ? ["Independent Research", "Advanced STEM", "Debate & Public Speaking", "Global Awareness"]
            : ["Investigación Independiente", "STEM Avanzado", "Debate y Oratoria", "Conciencia Global"]
    },
    "Primaria Alta": {
        features: ["Investigación Independiente", "STEM Avanzado", "Debate y Oratoria", "Conciencia Global"]
    }
  };

  const content = {
    hero: {
        title: isEn ? "EXPLORE & DISCOVER" : "EXPLORA Y DESCUBRE",
        subtitle: isEn ? "Nurturing curious minds for a complex world." : "Nutriendo mentes curiosas para un mundo complejo."
    },
    welcome: {
        title: isEn ? "A Journey of Discovery" : "Un Viaje de Descubrimiento",
        text: isEn 
            ? "Primary education at Colegio IDS is built on the foundation of inquiry. We move beyond rote learning to foster a deep sense of curiosity, encouraging students to analyze, question, and create."
            : "La educación primaria en Colegio IDS se basa en la indagación. Vamos más allá del aprendizaje memorístico para fomentar un profundo sentido de curiosidad."
    },
    pillarsTitle: isEn ? "Academic Pillars" : "Pilares Académicos",
    levelsTitle: isEn ? "Primary Stages" : "Etapas de Primaria",
    levels: [
        {
            name: isEn ? "Lower Primary" : "Primaria Baja",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
            desc: isEn 
                ? "Building strong foundations in literacy, numeracy, and social exploration."
                : "Construyendo bases sólidas en lenguaje, matemáticas y exploración social."
        },
        {
            name: isEn ? "Upper Primary" : "Primaria Alta",
            img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
            desc: isEn 
                ? "Honing independent research skills and advanced bilingual mastery."
                : "Perfeccionando habilidades de investigación independiente y dominio bilingüe."
        }
    ]
  };

  const scrollToWelcome = () => {
    welcomeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-blue-100 overflow-hidden">
      
      <QuickViewModal 
        isOpen={selectedStage !== null}
        onClose={() => setSelectedStage(null)}
        title={selectedStage?.name || ''}
        description={selectedStage?.desc || ''}
        features={selectedStage ? stageDetails[selectedStage.name]?.features || [] : []}
        color="bg-vault-blue"
      />

      {/* 1. Hero Section */}
      <section className="relative h-[600px] md:h-[750px] flex items-center overflow-hidden pt-20 bg-vault-darkBlue">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vault-yellow/5 to-transparent h-40 w-full animate-scan z-10"></div>
          
          <div className="container mx-auto px-4 lg:px-12 relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-10">
                      <div className="inline-flex items-center gap-3 bg-vault-yellow text-vault-darkBlue px-6 py-2 rounded-sm font-black text-xs tracking-widest uppercase animate-bounce-slow">
                          <Compass size={16} className="animate-spin-slow" /> {isEn ? 'CURIOUS BY DESIGN' : 'CURIOSOS POR DISEÑO'}
                      </div>
                      
                      <h1 className="text-6xl md:text-8xl font-black leading-none text-white uppercase tracking-tighter italic">
                          {isEn ? "EXPLORE" : "EXPLORA"}<br/>
                          <span className="text-vault-yellow">&</span> {isEn ? "DISCOVER" : "DESCUBRE"}
                      </h1>
                      
                      <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed border-l-4 border-vault-yellow pl-8 max-w-xl">
                          "{content.hero.subtitle}"
                      </p>
                  </div>

                  <div className="relative h-[400px] md:h-[500px] hidden lg:block animate-float">
                      <div className="absolute right-0 top-0 w-[85%] h-[80%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
                          <img 
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                            alt="Primary Learning" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-vault-blue/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
                      </div>
                      <div className="absolute left-0 bottom-0 w-[50%] h-[50%] bg-vault-yellow rounded-[2rem] shadow-2xl flex items-center justify-center p-8 border-8 border-vault-darkBlue transform -rotate-6 hover:rotate-0 transition-transform duration-500 cursor-help group">
                          <Atom size={80} className="text-vault-darkBlue group-hover:scale-125 transition-transform duration-700" />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 2. Welcome & Stats Section */}
      <section ref={welcomeRef} className="py-32 bg-white relative overflow-hidden">
          <div className="absolute -left-20 top-1/4 text-vault-blue/5 animate-spin-slow"><Atom size={300} /></div>
          <div className="absolute -right-20 bottom-1/4 text-vault-yellow/10 animate-float"><Compass size={250} /></div>

          <div className="container mx-auto px-4 lg:px-12 relative z-10">
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                  <div className="lg:w-1/2 space-y-8">
                      <h2 className="text-5xl font-black text-vault-darkBlue uppercase tracking-tighter italic leading-tight">
                          {content.welcome.title}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed font-medium">
                          {content.welcome.text}
                      </p>
                      <div className="pt-4">
                          <button 
                            onClick={scrollToWelcome}
                            className="group bg-vault-darkBlue text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-vault-blue transition-all flex items-center gap-3 shadow-lg hover:shadow-vault-blue/20"
                          >
                              {isEn ? "START DISCOVERY" : "INICIAR DESCUBRIMIENTO"} 
                              <Search size={16} className="group-hover:scale-125 transition-transform" />
                          </button>
                      </div>
                  </div>
                  
                  <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                      {data.primary.stats.map((stat: any, idx: number) => (
                          <div key={idx} className="bg-vault-paper p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group text-center cursor-default">
                              <p className="text-5xl font-black text-vault-blue mb-2 italic tracking-tighter group-hover:text-vault-darkBlue transition-colors">{stat.value}</p>
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">{stat.label}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* 3. Academic Pillars */}
      <section className="bg-gray-50 py-32 border-y border-gray-100 relative">
          <div className="container mx-auto px-4 lg:px-12">
              <div className="text-center mb-20">
                  <h2 className="text-5xl font-black text-vault-darkBlue uppercase tracking-tighter italic mb-4">{content.pillarsTitle}</h2>
                  <div className="h-1.5 w-32 bg-vault-yellow mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {data.primary.pillars.map((pillar: any, idx: number) => {
                      const Icon = iconMap[pillar.icon] || Search;
                      return (
                          <div 
                            key={idx} 
                            className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 border-b-8 hover:border-vault-blue group hover:-rotate-1 cursor-default"
                          >
                              <div className="bg-vault-blue/5 p-4 rounded-2xl text-vault-blue w-fit mb-8 group-hover:bg-vault-darkBlue group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                                  <Icon size={32} />
                              </div>
                              <h4 className="text-2xl font-black text-vault-darkBlue uppercase tracking-tight italic mb-4 group-hover:text-vault-blue transition-colors">{pillar.title}</h4>
                              <p className="text-gray-600 font-medium leading-relaxed">
                                  {pillar.desc}
                              </p>
                          </div>
                      );
                  })}
              </div>
          </div>
      </section>

      {/* 4. Primary Stages Grid */}
      <section className="py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-12">
              <div className="text-center mb-20">
                  <h2 className="text-5xl font-black text-vault-darkBlue uppercase tracking-tighter italic mb-4">{content.levelsTitle}</h2>
                  <div className="h-1 w-24 bg-vault-blue mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {content.levels.map((level, idx) => (
                      <div key={idx} onClick={() => setSelectedStage(level)} className="group relative overflow-hidden rounded-[4rem] shadow-2xl h-[500px] border-8 border-white cursor-pointer">
                          <img 
                            src={level.img} 
                            alt={level.name} 
                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-vault-darkBlue/90 via-vault-darkBlue/20 to-transparent flex flex-col justify-end p-16">
                              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                <h4 className="text-4xl font-black text-white uppercase tracking-tighter italic mb-4">{level.name}</h4>
                                <p className="text-blue-100 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {level.desc}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-vault-yellow font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                                    {isEn ? "Click to Explore" : "Clic para Explorar"} <ChevronRight size={14} />
                                </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. Exploration CTA & Enrichment */}
      <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Admissions CTA */}
                  <div className="bg-vault-darkBlue rounded-[4rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border-b-8 border-vault-yellow group">
                      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                      <div className="relative z-10 space-y-8">
                          <Sparkles size={48} className="mx-auto text-vault-yellow animate-pulse" />
                          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic leading-tight">
                              {isEn ? "Fuel the Spark of Inquiry" : "Alimenta la Chispa de la Indagación"}
                          </h2>
                          <Link 
                              to="/demos/standard/admissions" 
                              className="inline-block bg-vault-yellow text-vault-darkBlue px-12 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                          >
                              {isEn ? "ADMISSIONS PROCESS" : "PROCESO DE ADMISIÓN"}
                          </Link>
                      </div>
                  </div>

                  {/* Enrichment Section */}
                  <div className="bg-white rounded-[4rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl border border-gray-100 border-b-8 border-vault-blue group">
                      <div className="relative z-10 space-y-8">
                          <BookOpen size={48} className="mx-auto text-vault-blue" />
                          <h2 className="text-3xl md:text-4xl font-black text-vault-darkBlue uppercase tracking-tighter italic">
                              {isEn ? "Co-Curricular Clubs" : "Clubes Cocurriculares"}
                          </h2>
                          <p className="text-gray-500 text-sm font-medium">
                              {isEn ? "Beyond the classroom: exploring arts, sports, and sciences." : "Más allá del aula: explorando artes, deportes y ciencias."}
                          </p>
                          <Link 
                              to="/demos/standard/plus/primary" 
                              className="inline-block bg-vault-blue text-white px-12 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-vault-darkBlue transition-all shadow-xl"
                          >
                              {isEn ? "VIEW ENRICHMENT" : "VER ENRIQUECIMIENTO"}
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <footer className="py-20 text-center opacity-30 grayscale">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.5em] text-vault-darkBlue">
              &gt; Excellence in Primary Education &lt;
          </p>
      </footer>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(800%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}} />
    </>
  );
};

export default Primary;