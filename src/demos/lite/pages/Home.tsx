import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { ShieldCheck, BookOpen, GraduationCap, Globe, Mail, MapPin, Phone, MessageSquare, Baby, Heart, Palette, ChevronRight, Award, CheckCircle, Camera, LayoutGrid, Monitor, Users, HardDrive, X, Send, Calendar, Info, LogIn, ExternalLink, Sparkles, Cloud, Sun, Star, Music, Ghost, Pizza } from 'lucide-react';
import { useLite } from '../context/LiteContext';
import { ColegioIDSLogo } from '@/demos/standard/components/IDSLogo';

const IBLogo = () => (
  <svg viewBox="0 0 100 100" className="h-full w-auto">
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
    <text x="50" y="58" textAnchor="middle" fill="currentColor" fontSize="28" fontWeight="bold" fontFamily="serif">IB</text>
    <path d="M20 50 A30 30 0 0 1 80 50" fill="none" stroke="currentColor" strokeWidth="1"/>
    <path d="M20 50 A30 30 0 0 0 80 50" fill="none" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const CambridgeLogo = () => (
  <svg viewBox="0 0 300 60" className="h-full w-auto">
    <rect width="10" height="40" x="10" y="10" fill="currentColor"/>
    <text x="30" y="42" fill="currentColor" fontSize="24" fontWeight="900" fontFamily="sans-serif">Cambridge</text>
    <text x="160" y="42" fill="currentColor" fontSize="20" fontWeight="100" fontFamily="sans-serif">International</text>
  </svg>
);

const CISLogo = () => (
  <svg viewBox="0 0 100 100" className="h-full w-auto">
    <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="currentColor" opacity="0.2"/>
    <text x="50" y="55" textAnchor="middle" fill="currentColor" fontSize="35" fontWeight="black" fontFamily="sans-serif">CIS</text>
    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
  </svg>
);

const LiteHome: React.FC = () => {
  const { isKinder } = useLite();
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<'admissions' | 'program' | 'visit' | 'calendar' | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = isKinder ? 'text-pink-500' : 'text-vault-blue';
  const bgColor = isKinder ? 'bg-pink-500' : 'bg-vault-blue';
  const bgSoft = isKinder ? 'bg-pink-50' : 'bg-blue-50';
  const roundedStyle = isKinder ? 'rounded-[4rem]' : 'rounded-sm';
  const cardStyle = isKinder ? 'rounded-[2.5rem] shadow-xl shadow-pink-100/50 border-2 border-pink-50' : 'rounded-sm shadow-sm border border-gray-100';
  
  // Kinder Palette
  const kinderColors = [
    { text: 'text-pink-500', bg: 'bg-pink-50', border: 'border-pink-100', main: 'bg-pink-500', light: 'bg-pink-50' },
    { text: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100', main: 'bg-amber-500', light: 'bg-amber-50' },
    { text: 'text-sky-500', bg: 'bg-sky-50', border: 'border-sky-100', main: 'bg-sky-500', light: 'bg-sky-50' },
    { text: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100', main: 'bg-emerald-500', light: 'bg-emerald-50' },
    { text: 'text-violet-500', bg: 'bg-violet-50', border: 'border-violet-100', main: 'bg-violet-500', light: 'bg-violet-50' },
  ];

  const handleOpenLogin = () => {
    navigate('/demos/lite/login');
  };

  const features = isKinder ? [
    { icon: Heart, title: 'Mucho Amor', desc: 'Un entorno cálido donde cada niño se siente seguro, amado y valorado.', color: 'text-rose-400', bg: 'bg-rose-50' },
    { icon: Palette, title: 'Arte y Juego', desc: 'Despertamos la imaginación bilingüe a través del arte y el juego.', color: 'text-amber-400', bg: 'bg-amber-50' },
    { icon: Sparkles, title: 'Momentos Mágicos', desc: 'Cada día es una nueva aventura llena de descubrimientos.', color: 'text-sky-400', bg: 'bg-sky-50' }
  ] : [
    { icon: ShieldCheck, title: 'Excelencia Académica', desc: 'Programas de vanguardia diseñados para el desarrollo de un pensamiento crítico y analítico.' },
    { icon: BookOpen, title: 'Enfoque Internacional', desc: 'Currículo bicultural que prepara a los alumnos para enfrentar retos globales con éxito.' },
    { icon: GraduationCap, title: 'Liderazgo y Valores', desc: 'Formación en integridad, responsabilidad y respeto como pilares de nuestro sello educativo.' }
  ];

  const academicPrograms = isKinder ? [
    { 
      title: 'Nursery', 
      age: '1.5 - 2 años', 
      desc: 'Primeros pasos en un ambiente de estimulación temprana y afecto.', 
      details: 'Nuestro programa de Nursery prioriza la seguridad afectiva y el desarrollo sensorial como base del aprendizaje futuro. Entendemos que esta etapa es crucial para la formación de la personalidad, por lo que ofrecemos un ambiente cálido, 100% bilingüe y monitoreado, donde el juego dirigido y la exploración táctil son los protagonistas.',
      features: [
        'Estimulación temprana con especialistas en desarrollo infantil',
        'Ambiente seguro con mobiliario ergonómico para la primera infancia',
        'Inmersión natural al inglés a través de cantos y rimas',
        'Seguimiento diario de hitos del desarrollo y bienestar',
        'Ratio docente-alumno reducido para atención personalizada'
      ],
      color: kinderColors[0]
    },
    { 
      title: 'Pre-Kinder', 
      age: '3 años', 
      desc: 'Desarrollo de habilidades motrices y lenguaje en un entorno bilingüe.', 
      details: 'En Pre-Kinder, impulsamos la autonomía y la socialización a través de un currículo basado en proyectos. Los alumnos participan en proyectos basados en el juego que integran el pensamiento matemático temprano y la expresión artística, consolidando sus bases lingüísticas en español e inglés, todo en un marco de respeto y valores.',
      features: [
        'Aprendizaje basado en la indagación y el asombro',
        'Programa de psicomotricidad fina y gruesa',
        'Iniciación a las artes plásticas y expresión rítmica',
        'Entorno bicultural que fomenta la identidad y la diversidad',
        'Integración de herramientas digitales básicas supervisadas'
      ],
      color: kinderColors[2]
    },
    { 
      title: 'Kinder', 
      age: '4 - 5 años', 
      desc: 'Preparación integral para la transición a la educación primaria.', 
      details: 'El nivel de Kinder representa la consolidación de las competencias pre-académicas. Nos enfocamos en el desarrollo de la lectoescritura bilingüe, el razonamiento lógico avanzado y la inteligencia emocional. Nuestros graduados de Kinder IDS poseen la seguridad y las bases académicas necesarias para una transición exitosa y fluida a la escuela primaria.',
      features: [
        'Programa de lectoescritura fonética en ambos idiomas',
        'Pensamiento matemático a través de resolución de problemas reales',
        'Proyectos de ciencia y cuidado del medio ambiente',
        'Evaluación integral de madurez escolar y socioemocional',
        'Certificaciones internas de nivelación bicultural'
      ],
      color: kinderColors[1]
    }
  ] : [
    { 
      title: 'Primaria', 
      levels: '1º - 6º', 
      desc: 'Bases sólidas en lectoescritura, matemáticas y ciencias bajo un marco bilingüe.', 
      details: 'Nuestra Primaria ofrece una educación integral que equilibra el rigor académico con el desarrollo humano. Los estudiantes no solo dominan el inglés como segunda lengua, sino que aprenden a pensar de manera crítica, colaborando en proyectos de tecnología y ciencias que los conectan con el mundo real, bajo la certificación de organismos internacionales.',
      features: [
        'Certificaciones Cambridge English desde 3º grado',
        'Uso de plataformas educativas digitales para colaboración',
        'Laboratorio de robótica y pensamiento computacional (coding)',
        'Programa de deportes competitivos y educación física integral',
        'Formación en valores y liderazgo ético diario'
      ]
      },
      {
      title: 'Secundaria',
      levels: '1º - 3º',
      desc: 'Desarrollo de pensamiento complejo y proyectos de investigación interdisciplinarios.',
      details: 'En Secundaria, fomentamos la curiosidad intelectual y el sentido de responsabilidad global. Los alumnos se involucran en investigaciones profundas, debates institucionales y laboratorios especializados. El sistema IDS permite un seguimiento académico preciso, preparando a los jóvenes para los retos de la preparatoria con una mentalidad analítica y emprendedora.',
      features: [
        'Modelo de Naciones Unidas (MUN) y oratoria institucional',
        'Certificaciones de tecnología de grado profesional',        'Proyectos interdisciplinarios enfocados en la sustentabilidad',
        'Intercambios internacionales y programas de inmersión cultural',
        'Seguimiento psicopedagógico para la orientación vocacional'
      ]
    },
    { 
      title: 'Preparatoria', 
      levels: '1º - 3º', 
      desc: 'Preparación pre-universitaria de alto nivel con enfoque en liderazgo global.', 
      details: 'La Preparatoria IDS es el último paso hacia la excelencia universitaria. Con un currículo internacional y un fuerte énfasis en la autonomía, nuestros alumnos desarrollan proyectos de impacto social, dominan la tecnología institucional y egresan con certificaciones que les abren las puertas a las mejores universidades de México y el extranjero.',
      features: [
        'Convenios exclusivos con universidades de prestigio (pase directo)',
        'Programa de emprendimiento y creación de startups escolares',
        'Certificaciones internacionales de alto impacto (IB/Cambridge)',
        'Servicio social comunitario con enfoque en liderazgo y legado',
        'Uso avanzado de herramientas de productividad grado empresarial'
      ]
    }
  ];

  const values = [
    { name: 'Respeto', desc: 'Valoramos la diversidad y la dignidad de cada persona.', icon: Heart, color: 'text-rose-400' },
    { name: 'Responsabilidad', desc: 'Asumimos con integridad nuestros actos.', icon: CheckCircle, color: 'text-emerald-400' },
    { name: 'Honestidad', desc: 'Actuamos con rectitud y transparencia.', icon: Star, color: 'text-amber-400' },
    { name: 'Excelencia', desc: 'Buscamos superar nuestros propios límites.', icon: Sparkles, color: 'text-purple-400' }
  ];

  const certifications = [
    { name: 'International Baccalaureate', component: <IBLogo /> },
    { name: 'Cambridge International', component: <CambridgeLogo /> },
    { name: 'CIS Accreditation', component: <CISLogo /> },
    { name: 'Cognia Certified', component: <div className="font-black text-red-800 text-3xl italic tracking-tighter">cognia</div> },
    { name: 'NEASC Verified', component: <div className="font-black text-blue-900 text-3xl tracking-tighter uppercase">NEASC</div> },
    { name: 'WASC Accredited', component: <div className="font-black text-blue-700 text-3xl tracking-tighter uppercase">WASC</div> }
  ];

  const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-vault-darkBlue/60 backdrop-blur-sm" onClick={onClose}></div>
        <div className={`bg-white w-full max-w-lg ${roundedStyle} shadow-2xl relative z-10 animate-scale-up overflow-hidden`}>
           <div className={`p-6 border-b border-gray-100 flex justify-between items-center ${isKinder ? 'bg-pink-50' : 'bg-gray-50'}`}>
              <h3 className={`font-black uppercase tracking-tighter italic ${isKinder ? 'text-pink-600' : 'text-vault-darkBlue'}`}>{title}</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-vault-darkBlue transition-colors"><X size={20} /></button>
           </div>
           <div className="p-8 max-h-[80vh] overflow-y-auto">
              {children}
           </div>
        </div>
      </div>
    );
  };

  const getFeatureColor = (f: any) => {
    if (!isKinder) return '#005C97';
    if (f.color === 'text-rose-400') return '#fb7185';
    if (f.color === 'text-amber-400') return '#fbbf24';
    return '#38bdf8';
  };

  return (
    <div className={`min-h-screen bg-white text-vault-darkBlue selection:bg-vault-blue selection:text-white ${isKinder ? 'kinder-font' : ''}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kinder-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes kinder-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-kinder-float { animation: kinder-float 6s ease-in-out infinite; }
        .animate-kinder-bounce { animation: kinder-bounce 3s ease-in-out infinite; }
        .kinder-font { font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif; }
        .blob { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
      `}} />

      <Header 
        onOpenLogin={handleOpenLogin} 
        onOpenAdmissions={() => setActiveModal('admissions')}
        onOpenCalendar={() => setActiveModal('calendar')}
      />
      <Hero onOpenAdmissions={() => setActiveModal('admissions')} onOpenLogin={handleOpenLogin} />

      {/* Basic Features Section */}
      <section id="propuesta" className={`py-32 bg-white relative ${isKinder ? 'overflow-hidden' : 'border-y border-gray-100'}`}>
        {isKinder && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <svg className="absolute top-[-10%] left-[-5%] text-pink-200 w-[500px] h-[500px] animate-kinder-float opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.4,-2.2C98.1,13.6,93.4,29.6,83.1,42.5C72.8,55.4,56.9,65.2,40.6,73.1C24.3,81,7.6,87,-8.4,85.5C-24.4,84,-38.3,75,-51.9,64.9C-65.5,54.8,-78.8,43.6,-85.7,29.3C-92.6,15,-93.1,-2.1,-87.3,-16.9C-81.5,-31.7,-69.4,-44.2,-55.8,-51.8C-42.2,-59.4,-27.1,-62.1,-12.9,-65.4C1.3,-68.7,15.6,-72.1,30.3,-83.6L44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
             </svg>
             <div className="absolute top-10 left-[10%] text-yellow-300 animate-kinder-float"><Sun size={120} fill="currentColor" /></div>
             <div className="absolute top-40 right-[15%] text-sky-200 animate-kinder-float" style={{ animationDelay: '-2s' }}><Cloud size={150} fill="currentColor" /></div>
             <div className="absolute bottom-20 left-[20%] text-pink-200 animate-kinder-float" style={{ animationDelay: '-4s' }}><Heart size={80} fill="currentColor" /></div>
             <div className="absolute bottom-40 right-[5%] text-purple-200 animate-kinder-float" style={{ animationDelay: '-1s' }}><Star size={100} fill="currentColor" /></div>
          </div>
        )}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <div key={i} className={`text-center p-10 ${isKinder ? 'bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-current group' : 'space-y-6'}`} style={{ color: getFeatureColor(f) }}>
                <div className={`w-24 h-24 ${isKinder ? (f as any).bg : bgSoft} ${isKinder ? 'blob' : 'rounded-full'} flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg`}>
                  <f.icon className={`${isKinder ? (f as any).color : accentColor} w-12 h-12`} />
                </div>
                <div className={isKinder ? 'mt-8 space-y-4' : 'space-y-6'}>
                  <h3 className={`text-2xl font-black uppercase tracking-tighter italic transition-all duration-500 ${isKinder ? (f as any).color : ''}`}>{f.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academia Section */}
      <section id="academia" className={`py-32 relative ${isKinder ? 'bg-gradient-to-b from-white via-amber-100 to-sky-100' : 'bg-gray-50'}`}>
        {isKinder && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50 z-0">
             <svg className="absolute top-20 right-[-5%] text-amber-300 w-[600px] h-[600px] animate-kinder-float" style={{animationDelay: '-3s'}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               <path fill="currentColor" d="M51.3,-72.2C65.5,-64.1,75.4,-48.5,82.2,-31.8C89,-15.1,92.7,2.8,87.6,18.4C82.5,34,68.6,47.3,53.4,57.1C38.2,66.9,21.6,73.2,4.3,77.5C-13,81.8,-30.9,84.1,-46.8,76.5C-62.7,68.9,-76.6,52.4,-82.9,33.5C-89.2,14.6,-87.9,-6.7,-80.4,-24.8C-72.9,-42.9,-59.2,-57.8,-43.8,-65.6C-28.4,-73.4,-14.2,-74.1,1.4,-76.1C17,-78.1,34.1,-81.4,51.3,-72.2Z" transform="translate(100 100)" />
             </svg>
             <svg className="absolute bottom-10 left-[-10%] text-sky-200 w-[500px] h-[500px] animate-kinder-bounce" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               <path fill="currentColor" d="M42.7,-72.4C55.4,-65.8,65.8,-53.6,75.4,-40C85,-26.4,93.8,-11.4,94.1,3.8C94.4,19.1,86.2,34.5,75.5,47.1C64.8,59.6,51.6,69.4,36.7,75.4C21.8,81.4,5.2,83.7,-10.8,81.6C-26.8,79.5,-42.1,73.1,-55.8,63.1C-69.5,53.1,-81.6,39.5,-87.6,23.3C-93.6,7.1,-93.5,-11.7,-87.5,-28.9C-81.5,-46.1,-69.5,-61.8,-54.6,-69.1C-39.7,-76.5,-23,-75.4,-6.6,-73.5C9.8,-71.5,29.9,-79.1,42.7,-72.4Z" transform="translate(100 100)" />
             </svg>
          </div>
        )}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
            <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter italic ${isKinder ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-amber-500 to-sky-500 drop-shadow-sm' : ''}`}>Oferta Académica</h2>
            <div className={`h-2 w-32 ${isKinder ? 'bg-gradient-to-r from-pink-400 to-sky-400' : bgColor} mx-auto rounded-full`}></div>
            <p className="text-gray-500 font-medium text-xl">Nuestros niveles educativos están diseñados para acompañar cada etapa del desarrollo estudiantil.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {academicPrograms.map((p, i) => (
              <div key={i} className={`bg-white p-10 ${isKinder ? 'rounded-[4rem] shadow-2xl hover:rotate-2' : cardStyle} transition-all hover:-translate-y-4 group relative overflow-hidden border-2 ${isKinder ? (p as any).color?.border : 'border-transparent'}`}>
                {isKinder && <div className={`absolute -top-10 -right-10 w-32 h-32 ${(p as any).color?.bg} rounded-full transition-transform group-hover:scale-150`}></div>}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                     <h3 className={`text-3xl font-black uppercase tracking-tighter italic ${isKinder ? (p as any).color?.text : 'text-vault-darkBlue'}`}>{p.title}</h3>
                     <span className={`text-[10px] font-black uppercase tracking-widest text-white ${isKinder ? ((p as any).color?.main || accentColor) : bgColor} px-4 py-2 rounded-full shadow-lg`}>{isKinder ? p.age : (p as any).levels}</span>
                  </div>
                  <p className="text-gray-500 font-bold text-lg leading-relaxed mb-10">{p.desc}</p>
                  <button 
                    onClick={() => { setSelectedProgram(p); setActiveModal('program'); }}
                    className={`w-full py-4 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest text-white transition-all active:scale-95 ${isKinder ? ((p as any).color?.main || accentColor) + ' rounded-[2rem] shadow-[0_6px_0_rgba(0,0,0,0.15)] active:shadow-none active:translate-y-1' : bgColor + ' rounded-2xl hover:shadow-xl'}`}
                  >
                    ¡DESCUBRIR! <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="valores" className={`py-32 ${isKinder ? 'bg-sky-500 text-white' : 'bg-vault-darkBlue text-white'} relative overflow-hidden`}>
        {isKinder && (
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
             <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
             <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        )}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12">
               <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">Nuestros <br/> <span className={isKinder ? 'text-yellow-300 animate-kinder-bounce inline-block' : accentColor}>Valores</span></h2>
               <p className={`${isKinder ? 'text-white' : 'text-blue-100'} text-2xl font-light leading-relaxed`}>
                 La formación académica en IDS no es solo intelectual, es humana. Forjamos el carácter de nuestros alumnos a través de principios que los acompañarán toda la vida.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8">
                 {values.map((v, i) => (
                   <div key={i} className={`flex gap-6 items-center p-6 ${isKinder ? 'bg-white/10 rounded-3xl backdrop-blur-md' : ''} group`}>
                      <v.icon className={`${isKinder ? 'text-yellow-300' : accentColor} group-hover:scale-125 group-hover:rotate-12 transition-all`} size={40} />
                      <div>
                        <h4 className="font-black uppercase tracking-tighter italic text-xl mb-1">{v.name}</h4>
                        <p className={`text-sm ${isKinder ? 'text-white/80' : 'text-blue-100/60'} font-medium`}>{v.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:w-1/2">
               <div className={`p-4 ${isKinder ? 'bg-yellow-300 rotate-3' : 'bg-white/10 backdrop-blur-md'} ${roundedStyle} shadow-2xl overflow-hidden transition-transform hover:rotate-0 duration-700`}>
                  <img src={isKinder ? "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?auto=format&fit=crop&q=80&w=1000" : "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"} alt="Vida IDS" className={`${roundedStyle} transition-all duration-1000`} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Teaser Section */}
      <section id="ms365" className={`py-32 bg-white ${isKinder ? 'border-y-[20px] border-emerald-100' : 'border-y-8 border-vault-yellow'} overflow-hidden relative`}>
        {isKinder && (
          <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-pink-200 via-amber-200 to-sky-200 opacity-50"></div>
        )}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3 text-center lg:text-left space-y-10">
              <div className={`inline-flex items-center gap-2 ${isKinder ? 'bg-emerald-500' : bgColor} text-white px-6 py-2 ${isKinder ? 'rounded-full' : 'rounded-sm'} font-black text-xs tracking-widest uppercase shadow-lg animate-kinder-bounce`}>
                  {isKinder ? <Ghost size={16} /> : <Users size={12} />} {isKinder ? 'PARA PAPÁ Y MAMÁ' : 'ACCESO INSTITUCIONAL'}
              </div>
              <h2 className={`text-6xl font-black uppercase tracking-tighter italic leading-none ${isKinder ? 'text-emerald-600' : 'text-vault-darkBlue'}`}>
                  PORTAL<br/>
                  <span className={isKinder ? 'text-sky-500' : accentColor}>{isKinder ? 'DE FAMILIAS' : 'ESTUDIANTIL'}</span>
              </h2>
              
              <button 
                onClick={handleOpenLogin}
                className={`group w-full flex flex-col items-center gap-6 bg-white text-vault-darkBlue p-12 ${isKinder ? 'rounded-[4rem] border-4 border-emerald-50 shadow-emerald-100' : roundedStyle} shadow-2xl transition-all hover:-translate-y-4 hover:rotate-1`}
              >
                <div className={`p-6 ${isKinder ? 'bg-emerald-50 rounded-full' : ''}`}>
                  <LogIn className={`w-16 h-16 ${isKinder ? 'text-emerald-500' : accentColor} transition-transform group-hover:scale-125`} />
                </div>
                <span className="text-3xl font-black uppercase tracking-tighter">¡ENTRAR AQUÍ!</span>
                <span className="text-xs font-mono font-bold text-gray-300">Portal Institucional</span>
              </button>
            </div>

            <div className="lg:w-2/3 flex flex-col md:flex-row gap-16 items-center">
               <div className="md:w-2/3 space-y-12">
                  <h2 className={`text-4xl font-black uppercase tracking-tight ${isKinder ? 'text-emerald-600' : 'text-vault-darkBlue'}`}>{isKinder ? '¡Siempre Conectados!' : 'Infraestructura Digital Soberana'}</h2>
                  <div className="space-y-10">
                      <div className="flex items-start gap-8 group">
                          <div className={`p-5 ${isKinder ? 'rounded-[2rem] bg-emerald-50 text-emerald-500' : 'rounded-lg bg-gray-50 ' + accentColor} group-hover:scale-110 transition-all shadow-md`}>
                              <ShieldCheck size={32} />
                          </div>
                          <p className="text-xl font-bold text-gray-500 leading-relaxed">
                            {isKinder ? 'La seguridad de tus pequeños es nuestra prioridad, incluso en el mundo digital.' : 'Garantizamos los más altos estándares de seguridad y soberanía de datos para nuestra comunidad educativa.'}
                          </p>
                      </div>
                      <div className="flex items-start gap-8 group">
                          <div className={`p-5 ${isKinder ? 'rounded-[2rem] bg-sky-50 text-sky-500' : 'rounded-lg bg-gray-50 ' + accentColor} group-hover:scale-110 transition-all shadow-md`}>
                              {isKinder ? <Pizza size={32} /> : <Monitor size={32} />}
                          </div>
                          <p className="text-xl font-bold text-gray-500 leading-relaxed">
                            {isKinder ? 'Recibe fotos de sus actividades, el menú del día y avisos importantes al instante.' : 'Acceso unificado a Teams, OneDrive y Office 365 con su dominio institucional @colegio-ids.edu.mx.'}
                          </p>
                      </div>
                  </div>
               </div>
               <div className="md:w-1/3 w-full">
                  <div className={`relative ${isKinder ? 'rounded-[5rem] rotate-6' : roundedStyle} overflow-hidden border-8 border-white shadow-2xl group transition-transform hover:rotate-0 duration-700`}>
                      <img src={isKinder ? "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"} alt="Digital" className="w-full h-auto" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Excellence Section */}
      <section id="excelencia" className={`py-32 overflow-hidden ${isKinder ? 'bg-amber-50/20' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-24">
            <div className="md:w-1/2 relative">
               <div className={`bg-vault-darkBlue p-12 ${isKinder ? 'rounded-[5rem]' : roundedStyle} text-white space-y-10 shadow-2xl relative z-10 transition-all duration-500`}>
                 <h2 className="text-5xl font-black uppercase tracking-tighter italic">{isKinder ? 'Pasos Gigantes' : 'Estándares Globales'}</h2>
                 <p className="text-xl text-blue-100 font-light leading-relaxed">
                   En <span className={`font-black italic transition-colors ${accentColor}`}>{isKinder ? 'Kinder IDS' : 'Colegio IDS'}</span>, nuestra calidad académica está respaldada por las organizaciones educativas más prestigiosas del mundo.
                 </p>
                 <div className="flex gap-4">
                    <div className={`w-16 h-2 ${isKinder ? 'bg-amber-400' : bgColor} rounded-full transition-colors`}></div>
                    <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                 </div>
               </div>
               <div className={`absolute -top-10 -left-10 w-full h-full ${isKinder ? 'bg-amber-400 animate-kinder-float' : 'bg-gray-100'} -z-20 ${isKinder ? 'rounded-[5rem]' : roundedStyle} overflow-hidden`}>
                  {!isKinder && <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" alt="Excellence" className="w-full h-full object-cover opacity-20" />}
               </div>
            </div>
            <div className="md:w-1/2 space-y-12">
               <div className="space-y-6 text-center md:text-left">
                 <h3 className={`text-4xl font-black uppercase tracking-tighter italic ${isKinder ? 'text-amber-500' : 'text-vault-darkBlue'}`}>Certificaciones</h3>
                 <p className="text-gray-500 font-bold text-xl leading-relaxed">
                   {isKinder ? 'Preparamos a tus hijos para un mundo sin fronteras con un programa bicultural de excelencia.' : 'Nuestros alumnos egresan con doble y triple titulación, abriendo las puertas a las mejores universidades nacionales e internacionales.'}
                 </p>
               </div>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                 {certifications.map((c, i) => (
                   <div key={i} className="flex flex-col items-center gap-4 group">
                      <div className={`h-20 flex items-center justify-center ${isKinder ? 'text-amber-400' : 'text-vault-darkBlue'}`}>
                        {c.component ? (
                          <div className="h-full w-full transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 flex items-center justify-center">
                            {c.component}
                          </div>
                        ) : (
                          <img src={c.img} alt={c.name} className="h-full w-auto object-contain transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12" />
                        )}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 text-center group-hover:text-amber-500 transition-colors">{c.name}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery Section */}
      <section id="campus" className={`py-32 ${isKinder ? 'bg-gradient-to-b from-amber-50/20 to-white' : 'bg-gray-50'} overflow-hidden`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-10">
            <div className="space-y-6 text-center md:text-left">
              <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter italic ${isKinder ? 'text-sky-500' : ''}`}>Nuestro Campus</h2>
              <p className="text-gray-500 font-bold text-xl max-w-xl">Instalaciones mágicas diseñadas para inspirar el juego, la creatividad y el bienestar de nuestros pequeños.</p>
            </div>
            <button 
              onClick={() => setActiveModal('visit')}
              className={`flex items-center gap-4 ${isKinder ? 'bg-sky-500' : bgColor} text-white px-12 py-6 ${isKinder ? 'rounded-full' : 'rounded-sm'} font-black uppercase tracking-widest text-sm group transition-all shadow-xl hover:shadow-sky-200 active:scale-95`}
            >
              AGENDAR VISITA <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${isKinder ? 'p-4' : ''}`}>
             <div className={`md:col-span-2 md:row-span-2 relative group overflow-hidden bg-gray-200 ${isKinder ? 'rounded-[5rem] rotate-1' : roundedStyle} shadow-2xl`}>
                <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1000" alt="Instalaciones" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className={`absolute inset-0 ${isKinder ? 'bg-sky-500/20' : 'bg-vault-darkBlue/20'} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
             </div>
             <div className={`aspect-square relative group overflow-hidden bg-gray-200 ${isKinder ? 'rounded-[4rem] -rotate-2' : roundedStyle} shadow-xl`}>
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" alt="Aula" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
             </div>
             <div className={`aspect-square relative group overflow-hidden bg-gray-200 ${isKinder ? 'rounded-[4rem] rotate-2' : roundedStyle} shadow-xl`}>
                <img src="https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?auto=format&fit=crop&q=80&w=800" alt="Kinder" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
             </div>
             <div className={`md:col-span-2 aspect-[16/9] md:aspect-auto relative group overflow-hidden bg-gray-200 ${isKinder ? 'rounded-[5rem] -rotate-1' : roundedStyle} shadow-2xl`}>
                <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800" alt="Canchas" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-r ${isKinder ? 'from-sky-500/40' : 'from-vault-darkBlue/60'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center p-12`}>
                   <p className="text-white font-black uppercase tracking-widest text-2xl italic">Diversión Total</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer id="contacto" className={`${isKinder ? 'bg-gradient-to-b from-white to-pink-50' : 'bg-gray-50'} pt-32 pb-16 border-t border-gray-100`}>
        <div className="container mx-auto px-6 space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-1 space-y-8">
               <div className="flex items-center space-x-3 animate-kinder-bounce">
                  <ColegioIDSLogo className="h-12" />
               </div>
               <p className="text-sm text-gray-500 font-bold leading-relaxed">
                 {isKinder ? 'El inicio de un gran camino de alegría y descubrimientos.' : 'Educación para un mundo soberano.'} <br/>
                 Poder digital grado institucional.
               </p>
            </div>
            <div className="space-y-8">
              <h4 className={`text-[10px] font-black uppercase tracking-widest ${isKinder ? 'text-pink-500' : 'text-vault-darkBlue'} opacity-40`}>Contacto Oficial</h4>
              <ul className="space-y-6">
                <li className={`flex items-center gap-4 text-sm font-black text-gray-600 hover:${accentColor} transition-colors cursor-pointer group`} onClick={() => setActiveModal('admissions')}>
                  <div className={`p-2 ${isKinder ? 'bg-pink-50 rounded-lg' : ''} group-hover:scale-110 transition-transform`}><Mail size={20} className={accentColor} /></div> {isKinder ? 'hola@kinder-ids.com' : 'admissions@colegio-ids.com'}
                </li>
                <li className="flex items-center gap-4 text-sm font-black text-gray-600 group">
                  <div className={`p-2 ${isKinder ? 'bg-amber-50 rounded-lg' : ''} group-hover:scale-110 transition-transform`}><Phone size={20} className={isKinder ? 'text-amber-500' : accentColor} /></div> +52 (55) 0000-0000
                </li>
                <li className="flex items-center gap-4 text-sm font-black text-gray-600 group">
                  <div className={`p-2 ${isKinder ? 'bg-sky-50 rounded-lg' : ''} group-hover:scale-110 transition-transform`}><MapPin size={20} className={isKinder ? 'text-sky-500' : accentColor} /></div> Av. de la Excelencia 101, CDMX.
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className={`text-[10px] font-black uppercase tracking-widest ${isKinder ? 'text-pink-500' : 'text-vault-darkBlue'} opacity-40`}>Identidad Digital</h4>
              <div className={`p-8 bg-white ${isKinder ? 'rounded-[3rem] border-2 border-pink-50 shadow-pink-100' : 'rounded-sm'} border border-gray-100 shadow-xl space-y-6`}>
                 <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600">
                    <span className="flex items-center gap-1"><ShieldCheck size={14} /> Dominio Activo</span>
                    <span>HTTPS</span>
                 </div>
                 <p className={`text-sm font-mono font-black border-b border-gray-50 pb-2 ${isKinder ? 'text-pink-600' : 'text-vault-darkBlue'}`}>{isKinder ? 'www.kinder-ids.com' : 'www.colegio-ids.com'}</p>
                 <p className="text-[10px] text-gray-400 italic">Certificado SSL vigente.</p>
              </div>
            </div>
            <div className="space-y-8">
              <h4 className={`text-[10px] font-black uppercase tracking-widest ${isKinder ? 'text-pink-500' : 'text-vault-darkBlue'} opacity-40`}>Atención Directa</h4>
              <button 
                onClick={() => setActiveModal('admissions')}
                className={`w-full ${bgColor} text-white py-5 ${isKinder ? 'rounded-full' : 'rounded-sm'} font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 shadow-2xl hover:shadow-pink-200 transition-all active:scale-95`}
              >
                <MessageSquare size={22} /> CHAT DE SOPORTE
              </button>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
             <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">© 2026 COLEGIO IDS. TODOS LOS DERECHOS RESERVADOS.</p>
             <div className="flex gap-10">
                <span className={`text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:${accentColor} cursor-pointer transition-colors`}>Aviso de Privacidad</span>
                <span className={`text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:${accentColor} cursor-pointer transition-colors`}>Términos de Uso</span>
             </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={activeModal === 'program'} onClose={() => setActiveModal(null)} title={selectedProgram?.title || ''}>
         <div className="space-y-8">
            <p className={`text-gray-600 font-bold text-lg leading-relaxed ${isKinder ? 'text-center' : ''}`}>{selectedProgram?.details}</p>
            
            {selectedProgram?.features && (
              <div className={`${isKinder ? (selectedProgram.color?.bg || 'bg-pink-50') : 'bg-gray-50'} p-8 ${isKinder ? 'rounded-[3rem]' : 'rounded-sm'} space-y-6 shadow-inner`}>
                <h4 className={`text-[10px] font-black uppercase tracking-widest ${isKinder ? (selectedProgram.color?.text || 'text-pink-600') : 'text-vault-darkBlue'} opacity-60`}>Lo que nos distingue</h4>
                <ul className="grid grid-cols-1 gap-4">
                    {selectedProgram.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-4 text-sm font-black text-gray-700">
                          <CheckCircle size={20} className={`${isKinder ? (selectedProgram.color?.text || 'text-pink-500') : accentColor} shrink-0 mt-0.5`} />
                          <span>{feature}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            <button 
              onClick={() => setActiveModal('admissions')}
              className={`w-full ${isKinder ? (selectedProgram?.color?.main || bgColor) : bgColor} text-white py-5 ${isKinder ? 'rounded-full' : 'rounded-sm'} font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all`}
            >
              Solicitar Más Información
            </button>
         </div>
      </Modal>

      <Modal isOpen={activeModal === 'calendar'} onClose={() => setActiveModal(null)} title="Calendario Escolar 2025-2026">
         <div className="space-y-8">
            <div className={`flex items-center gap-6 p-6 ${isKinder ? 'bg-sky-50 text-sky-600 border-sky-100' : 'bg-blue-50 text-vault-blue border-blue-100'} rounded-2xl border-2`}>
               <Info size={32} />
               <p className="text-sm font-black italic">Calendario preliminar sujeto a cambios oficiales por la autoridad educativa.</p>
            </div>
            <div className="space-y-4 px-2">
               {[
                 { date: '18 Ago 2025', event: 'Inicio de Ciclo Escolar', icon: Star, color: 'text-amber-400' },
                 { date: '15-16 Sep 2025', event: 'Aniversario de la Independencia', icon: Music, color: 'text-rose-400' },
                 { date: '20 Nov 2025', event: 'Aniversario de la Revolución', icon: Heart, color: 'text-pink-400' },
                 { date: '19 Dic 2025', event: 'Inicio de Vacaciones de Invierno', icon: Cloud, color: 'text-sky-400' },
                 { date: '05 Ene 2026', event: 'Reanudación de Clases', icon: Sparkles, color: 'text-purple-400' }
               ].map((item, i) => (
                 <div key={i} className={`flex justify-between items-center py-4 border-b border-gray-50 last:border-0 group`}>
                    <div className="flex items-center gap-4">
                       {isKinder && <item.icon size={18} className={`${item.color} group-hover:scale-125 transition-transform`} />}
                       <span className={`text-xs font-mono font-black ${isKinder ? 'text-gray-400' : 'text-vault-darkBlue'}`}>{item.date}</span>
                    </div>
                    <span className="text-sm font-black text-gray-600 group-hover:text-vault-darkBlue transition-colors">{item.event}</span>
                 </div>
               ))}
            </div>
            <button className={`w-full border-4 ${accentColor === 'text-pink-500' ? 'border-pink-500 text-pink-500' : 'border-vault-blue text-vault-blue'} py-4 ${isKinder ? 'rounded-full' : 'rounded-sm'} font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-all`}>
               Descargar PDF Completo
            </button>
         </div>
      </Modal>

      <Modal isOpen={activeModal === 'admissions' || activeModal === 'visit'} onClose={() => setActiveModal(null)} title={activeModal === 'visit' ? 'Agendar Visita' : 'Solicitud de Información'}>
         <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('¡Recibido! Nos pondremos en contacto muy pronto con ustedes. ✨'); setActiveModal(null); }}>
            <div className="space-y-2">
               <label className={`text-[10px] font-black uppercase tracking-widest ${isKinder ? 'text-pink-400' : 'text-gray-400'}`}>Nombre del Tutor</label>
               <input type="text" required className={`w-full border-b-2 border-gray-100 py-3 text-lg outline-none transition-all ${isKinder ? 'focus:border-pink-500' : 'focus:border-vault-blue'}`} placeholder="Ej. Juan Pérez" />
            </div>
            <div className="space-y-2">
               <label className={`text-[10px] font-black uppercase tracking-widest ${isKinder ? 'text-pink-400' : 'text-gray-400'}`}>Correo Electrónico</label>
               <input type="email" required className={`w-full border-b-2 border-gray-100 py-3 text-lg outline-none transition-all ${isKinder ? 'focus:border-pink-500' : 'focus:border-vault-blue'}`} placeholder="juan@ejemplo.com" />
            </div>
            <div className="space-y-2">
               <label className={`text-[10px] font-black uppercase tracking-widest ${isKinder ? 'text-pink-400' : 'text-gray-400'}`}>Nivel de Interés</label>
               <select className={`w-full border-b-2 border-gray-100 py-3 text-lg outline-none bg-transparent transition-all ${isKinder ? 'focus:border-pink-500' : 'focus:border-vault-blue'}`}>
                  <option>Maternal / Kinder</option>
                  <option>Primaria</option>
                  <option>Secundaria</option>
                  <option>Preparatoria</option>
               </select>
            </div>
            <div className="pt-6">
               <button className={`w-full ${bgColor} text-white py-5 ${isKinder ? 'rounded-full shadow-pink-200' : 'rounded-sm'} font-black uppercase tracking-widest text-sm shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all`}>
                  <Send size={20} /> {activeModal === 'visit' ? '¡AGENDAR AHORA!' : '¡ENVIAR SOLICITUD!'}
               </button>
            </div>
         </form>
      </Modal>
    </div>
  );
};

export default LiteHome;