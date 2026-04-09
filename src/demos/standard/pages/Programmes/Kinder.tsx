import React, { useState, useRef } from 'react';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';
import { Palette, ChevronRight, Play, BookOpen, Heart, Star, Sparkles, Sun, Smile, Rocket, Cloud, Music, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuickViewModal } from '../../components/QuickViewModal';

const Kinder: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';
  const welcomeRef = useRef<HTMLDivElement>(null);

  const [selectedProgram, setSelectedProgram] = useState<any | null>(null);

  const iconMap: any = {
    Smile: Smile,
    Palette: Palette,
    Play: Play,
    BookOpen: BookOpen
  };

  const programDetails: any = {
    "Foundation": {
        features: isEn 
            ? ["Sensory Play", "Social Interaction", "Emotional Security", "Basic Motor Skills"]
            : ["Juego Sensorial", "Interacción Social", "Seguridad Emocional", "Motricidad Básica"]
    },
    "Fundación": {
        features: ["Juego Sensorial", "Interacción Social", "Seguridad Emocional", "Motricidad Básica"]
    },
    "Discovery": {
        features: isEn
            ? ["Early Literacy", "Exploratory Science", "Creative Arts", "Bilingual Songs"]
            : ["Alfabetización Temprana", "Ciencia Exploratoria", "Artes Creativas", "Canciones Bilingües"]
    },
    "Descubrimiento": {
        features: ["Alfabetización Temprana", "Ciencia Exploratoria", "Artes Creativas", "Canciones Bilingües"]
    },
    "Exploration": {
        features: isEn
            ? ["Analytical Thinking", "Structured Problem Solving", "Advanced Language", "Team Projects"]
            : ["Pensamiento Analítico", "Resolución de Problemas", "Lenguaje Avanzado", "Proyectos en Equipo"]
    },
    "Exploración": {
        features: ["Pensamiento Analítico", "Resolución de Problemas", "Lenguaje Avanzado", "Proyectos en Equipo"]
    },
    "Transition": {
        features: isEn
            ? ["Independent Research", "Academic Rigour", "Primary Readiness", "Leadership Skills"]
            : ["Investigación Independiente", "Rigor Académico", "Preparación Primaria", "Liderazgo"]
    },
    "Transición": {
        features: ["Investigación Independiente", "Rigor Académico", "Preparación Primaria", "Liderazgo"]
    }
  };

  const content = {
    hero: {
        title: isEn ? "LEARN & PLAY" : "APRENDE Y JUEGA",
        subtitle: isEn ? "Where every day is an adventure in discovery." : "Donde cada día es una aventura de descubrimiento."
    },
    welcome: {
        title: isEn ? "A World of Wonder" : "Un Mundo de Maravillas",
        text: isEn 
            ? "In our Kinder section, we believe that children learn best when they are happy, safe, and inspired. Our 'Learn and Play' philosophy merges rigorous early-years standards with the pure joy of childhood exploration."
            : "En nuestra sección de Kinder, creemos que los niños aprenden mejor cuando son felices, están seguros e inspirados. Nuestra filosofía 'Aprende y Juega' fusiona estándares académicos con la alegría de la exploración."
    },
    curriculumTitle: isEn ? "A Curriculum of Wonder" : "Un Currículo de Maravillas",
    programsTitle: isEn ? "Our Learning Stages" : "Nuestras Etapas de Aprendizaje",
    programs: [
        { 
            name: isEn ? "Foundation" : "Fundación", 
            age: "2-3", 
            img: "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?auto=format&fit=crop&q=80&w=800",
            color: "bg-pink-400",
            desc: isEn 
                ? "First steps into a loving, social environment."
                : "Primeros pasos en un entorno social y amoroso."
        },
        { 
            name: isEn ? "Discovery" : "Descubrimiento", 
            age: "3-4", 
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
            color: "bg-orange-400",
            desc: isEn
                ? "Active exploration through stimulating resources."
                : "Exploración activa mediante recursos estimulantes."
        },
        { 
            name: isEn ? "Exploration" : "Exploración", 
            age: "4-5", 
            img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
            color: "bg-yellow-400",
            desc: isEn
                ? "Positive and interactive bilingual engagement."
                : "Compromiso bilingüe positivo e interactivo."
        },
        { 
            name: isEn ? "Transition" : "Transición", 
            age: "5-6", 
            img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
            color: "bg-blue-400",
            desc: isEn
                ? "Building independence for the primary years."
                : "Construyendo independencia para los años de primaria."
        }
    ]
  };

  const scrollToWelcome = () => {
    welcomeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans selection:bg-pink-200 overflow-hidden">
      
      <QuickViewModal 
        isOpen={selectedProgram !== null}
        onClose={() => setSelectedProgram(null)}
        title={selectedProgram?.name || ''}
        age={selectedProgram?.age}
        description={selectedProgram?.desc || ''}
        features={selectedProgram ? programDetails[selectedProgram.name]?.features || [] : []}
        color={selectedProgram?.color}
      />

      {/* 1. Playful Hero Section */}
      <section className="relative h-[700px] md:h-[800px] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute top-20 left-10 text-pink-300 animate-bounce opacity-40"><Heart size={80} fill="currentColor" /></div>
          <div className="absolute top-40 right-20 text-yellow-300 animate-pulse opacity-40"><Star size={100} fill="currentColor" /></div>
          <div className="absolute bottom-40 left-1/4 text-blue-300 animate-float opacity-30"><Cloud size={120} fill="currentColor" /></div>
          <div className="absolute top-1/2 right-1/3 text-orange-300 animate-spin-slow opacity-20"><Sun size={150} /></div>
          
          <div className="container mx-auto px-4 relative z-20 flex flex-col items-center">
              <div className="bg-white/80 backdrop-blur-md px-8 py-3 rounded-full mb-8 border-2 border-pink-100 shadow-sm animate-fade-in-down">
                  <span className="text-pink-500 font-black tracking-[0.4em] text-xs md:text-sm uppercase flex items-center gap-3">
                      <Sparkles size={16} /> COLEGIO IDS KINDER <Sparkles size={16} />
                  </span>
              </div>
              
              <div className="relative mb-16 text-center">
                  <h1 className="text-7xl md:text-[140px] leading-none font-black drop-shadow-2xl animate-scale-up" style={{ letterSpacing: '-0.05em' }}>
                      <span className="text-vault-darkBlue">{isEn ? "LEARN" : "APRENDE"}</span><br/>
                      <span className="text-pink-500 italic">&</span> 
                      <span className="text-vault-blue"> {isEn ? "PLAY" : "JUEGA"}</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-500 font-medium italic mt-6 max-w-2xl mx-auto">
                      "{content.hero.subtitle}"
                  </p>
                  <button 
                    onClick={scrollToWelcome}
                    className="mt-10 bg-vault-darkBlue text-white w-16 h-16 rounded-full flex items-center justify-center animate-bounce shadow-xl hover:bg-pink-500 transition-colors mx-auto"
                  >
                    <ChevronRight size={32} className="rotate-90" />
                  </button>
              </div>
              
              {/* Overlapping Rounded Images */}
              <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] mt-12">
                  <div className="absolute left-0 top-0 w-[60%] h-full transform -rotate-3 hover:rotate-0 transition-transform duration-700 z-10">
                      <img 
                        src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1000" 
                        alt="Kinder Joy" 
                        className="w-full h-full object-cover rounded-[4rem] shadow-2xl border-[12px] border-white"
                      />
                  </div>
                  <div className="absolute right-0 bottom-0 w-[55%] h-[90%] transform rotate-3 hover:rotate-0 transition-transform duration-700 z-20">
                      <img 
                        src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000" 
                        alt="Creative Learning" 
                        className="w-full h-full object-cover rounded-[4rem] shadow-2xl border-[12px] border-white"
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* 2. Welcome Section */}
      <section ref={welcomeRef} className="py-32 bg-white relative">
          <div className="container mx-auto px-4 lg:px-12">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2 space-y-8">
                      <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest">
                          <Rocket size={14} /> {isEn ? 'THE JOURNEY BEGINS' : 'COMIENZA EL VIAJE'}
                      </div>
                      <h2 className="text-5xl font-black text-vault-darkBlue uppercase tracking-tighter italic leading-tight">
                          {content.welcome.title}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed font-light">
                          {content.welcome.text}
                      </p>
                  </div>
                  <div className="md:w-1/2 grid grid-cols-2 gap-6">
                      {data.kinder.playfulStats.map((stat: any, idx: number) => {
                          const Icon = iconMap[stat.icon] || Smile;
                          return (
                              <div key={idx} className="bg-vault-paper p-8 rounded-[3rem] text-center border-2 border-transparent hover:border-pink-200 transition-all shadow-sm hover:shadow-xl group">
                                  <div className="bg-white p-4 rounded-2xl text-pink-500 w-fit mx-auto mb-4 shadow-inner group-hover:rotate-12 transition-transform">
                                      <Icon size={32} />
                                  </div>
                                  <p className="text-4xl font-black text-vault-darkBlue mb-1 italic">{stat.value}</p>
                                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      </section>

      {/* 3. Curriculum of Wonder */}
      <section className="bg-vault-darkBlue py-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="container mx-auto px-4 lg:px-12 relative z-10">
              <div className="text-center mb-20">
                  <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-4">{content.curriculumTitle}</h2>
                  <div className="h-1.5 w-32 bg-pink-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {data.kinder.curriculum.map((item: any, idx: number) => (
                      <div key={idx} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group">
                          <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center text-pink-400 mb-8 group-hover:scale-110 transition-transform">
                              {idx === 0 && <Sun size={32} />}
                              {idx === 1 && <Music size={32} />}
                              {idx === 2 && <Users size={32} />}
                              {idx === 3 && <Rocket size={32} />}
                          </div>
                          <h4 className="text-2xl font-black uppercase tracking-tighter italic mb-4">{item.title}</h4>
                          <p className="text-blue-100 font-light leading-relaxed">
                              {item.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. Programs Grid */}
      <section className="py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-12">
              <div className="text-center mb-20">
                  <h2 className="text-5xl font-black text-vault-darkBlue uppercase tracking-tighter italic mb-4">{content.programsTitle}</h2>
                  <div className="h-1 w-24 bg-vault-blue mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {content.programs.map((prog) => (
                      <div key={prog.name} className="group flex flex-col">
                          <div className="relative h-96 overflow-hidden rounded-[3rem] shadow-xl mb-6 border-4 border-transparent hover:border-pink-400 transition-all">
                              <img src={prog.img} alt={prog.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                              <div className={`absolute top-6 left-6 ${prog.color} text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg`}>
                                  AGES {prog.age}
                              </div>
                          </div>
                          <div className="px-4">
                              <h4 className="text-2xl font-black text-vault-darkBlue uppercase tracking-tighter italic mb-2">{prog.name}</h4>
                              <p className="text-gray-500 font-medium leading-relaxed mb-6">{prog.desc}</p>
                              <button 
                                onClick={() => setSelectedProgram(prog)}
                                className="flex items-center gap-2 text-pink-500 font-black text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform"
                              >
                                  {isEn ? "EXPLORE PROGRAM" : "EXPLORAR PROGRAMA"} <ChevronRight size={14} />
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. Playful CTA & Enrichment */}
      <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Admissions CTA */}
                  <div className="bg-pink-500 rounded-[4rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border-b-8 border-pink-700">
                      <div className="relative z-10 space-y-8">
                          <Smile size={48} className="mx-auto text-pink-200" />
                          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">
                              {isEn ? "Start the Adventure" : "Comienza la Aventura"}
                          </h2>
                          <Link 
                              to="/demos/standard/contact" 
                              className="inline-block bg-white text-pink-500 px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-vault-darkBlue hover:text-white transition-all shadow-xl"
                          >
                              {isEn ? "ADMISSIONS ENQUIRY" : "SOLICITUD DE ADMISIÓN"}
                          </Link>
                      </div>
                  </div>

                  {/* Enrichment Section */}
                  <div className="bg-vault-blue rounded-[4rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border-b-8 border-vault-darkBlue group">
                      <div className="relative z-10 space-y-8">
                          <Palette size={48} className="mx-auto text-blue-200" />
                          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">
                              {isEn ? "Afternoon Activities" : "Actividades de Tarde"}
                          </h2>
                          <p className="text-blue-100 text-sm font-light">
                              {isEn ? "Explore our specialized co-curricular enrichment programs." : "Explore nuestros programas cocurriculares especializados."}
                          </p>
                          <Link 
                              to="/demos/standard/plus/kinder" 
                              className="inline-block bg-vault-yellow text-vault-darkBlue px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl group-hover:-translate-y-1"
                          >
                              {isEn ? "VIEW CO-CURRICULAR" : "VER COCURRICULAR"}
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. Closing Note */}
      <footer className="py-20 text-center opacity-30 grayscale">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.5em] text-vault-darkBlue">
              &gt; Excellence in Early Education &lt;
          </p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
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
      `}} />
    </div>
  );
};

export default Kinder;