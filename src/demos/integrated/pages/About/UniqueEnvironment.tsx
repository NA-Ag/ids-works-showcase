import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';
import { Camera, MapPin, Quote, Award, Monitor, Waves, Cpu, Leaf, Info } from 'lucide-react';

const UniqueEnvironment: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';

  const iconMap: any = {
    Monitor: Monitor,
    Waves: Waves,
    Cpu: Cpu,
    Leaf: Leaf
  };

  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null);

  const buildingData: Record<string, any> = {
    academics: {
        title: isEn ? "Main Academics Building" : "Edificio Académico Principal",
        desc: isEn ? "The core of our rigorous curriculum, featuring smart classrooms and lecture halls." : "El núcleo de nuestro plan de estudios riguroso, con aulas inteligentes y salas de conferencias.",
        img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"
    },
    science: {
        title: isEn ? "Science & Innovation Wing" : "Ala de Ciencia e Innovación",
        desc: isEn ? "State-of-the-art laboratories for chemistry, physics, and robotics." : "Laboratorios de vanguardia para química, física y robótica.",
        img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400"
    },
    athletics: {
        title: isEn ? "Athletic Center" : "Centro Atlético",
        desc: isEn ? "Premium indoor facilities and professional-grade track and field." : "Instalaciones cubiertas premium y pista de atletismo de nivel profesional.",
        img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=400"
    },
    arts: {
        title: isEn ? "Arts & Humanities Center" : "Centro de Artes y Humanidades",
        desc: isEn ? "Dedicated studios for visual arts, music, and dramatic performances." : "Estudios dedicados a artes visuales, música y representaciones teatrales.",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400"
    },
    library: {
        title: isEn ? "The Grand Library" : "La Gran Biblioteca",
        desc: isEn ? "Our massive repository of knowledge, offering quiet study zones and digital archives." : "Nuestro archivo masivo de conocimiento, ofreciendo zonas de estudio y archivos digitales.",
        img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=400"
    }
  };

  const content = {
    title: isEn ? "Campus & Environment" : "Plantel y Entorno",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
        { label: isEn ? "About Us" : "Quiénes somos", href: "#" },
        { label: isEn ? "Campus" : "Plantel" }
    ],
    intro: isEn 
        ? "The Colegio IDS campus is a master-planned environment designed to inspire excellence and foster a culture of high achievement."
        : "El campus de Colegio IDS es un entorno diseñado para inspirar la excelencia y fomentar una cultura de alto rendimiento.",
    quote: isEn ? "A World-Class Learning Ecosystem" : "Un Ecosistema de Aprendizaje de Clase Mundial",
    facilities: {
        title: isEn ? "Institutional Facilities" : "Instalaciones Institucionales",
        subtitle: isEn ? "Infrastructure designed for academic success." : "Infraestructura diseñada para el éxito académico.",
        items: [
            { 
                title: isEn ? "Advanced Labs" : "Laboratorios Avanzados", 
                image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800",
                desc: isEn ? "State-of-the-art facilities for scientific exploration." : "Instalaciones de vanguardia para la exploración científica."
            },
            { 
                title: isEn ? "Creative Studios" : "Estudios Creativos", 
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
                desc: isEn ? "Dedicated spaces for artistic and technical expression." : "Espacios dedicados a la expresión artística y técnica."
            },
            { 
                title: isEn ? "Athletic Complex" : "Complejo Atlético", 
                image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800",
                desc: isEn ? "Premium facilities for physical development and teamwork." : "Instalaciones premium para el desarrollo físico."
            }
        ]
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
        <section className="text-center max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-vault-yellow text-vault-darkWine px-4 py-1 rounded-sm font-sans font-black text-[10px] tracking-widest uppercase">
                    <Award size={12} /> ESTABLISHED INFRASTRUCTURE
                </div>
                <p className="text-2xl text-gray-700 leading-relaxed font-light italic border-l-4 border-vault-yellow pl-8">
                    "{content.intro}"
                </p>
            </div>

            {/* Campus Stats Dashboard */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {data.campus.stats.map((stat: any, idx: number) => (
                    <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center hover:border-vault-yellow transition-all group">
                        <p className="text-4xl font-black text-vault-darkWine group-hover:scale-110 transition-transform italic tracking-tighter">{stat.value}</p>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Features Row */}
        <section className="bg-vault-darkWine -mx-4 lg:-mx-12 px-4 lg:px-12 py-24 text-white relative overflow-hidden border-b-8 border-vault-yellow">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.campus.features.map((feature: any, idx: number) => {
                        const Icon = iconMap[feature.icon] || Info;
                        return (
                            <div key={idx} className="space-y-4 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                <div className="bg-vault-yellow p-3 rounded-xl text-vault-darkWine w-fit group-hover:rotate-12 transition-transform">
                                    <Icon size={24} />
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tighter italic">{feature.title}</h4>
                                <p className="text-blue-100 text-sm font-light leading-relaxed">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Interactive Campus Map */}
        <section className="py-12 border-b-4 border-vault-yellow">
            <div className="flex items-center gap-4 mb-12">
                <div className="bg-vault-darkWine p-3 rounded-none text-white shadow-lg">
                    <MapPin className="w-6 h-6 text-vault-yellow" />
                </div>
                <div>
                    <h2 className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic font-serif">{isEn ? 'Interactive Campus Directory' : 'Directorio de Campus Interactivo'}</h2>
                    <p className="text-gray-500 font-mono text-[10px] font-black uppercase tracking-[0.2em]">{isEn ? 'Explore our master-planned environment' : 'Explore nuestro entorno planificado'}</p>
                </div>
            </div>

            <div className="bg-vault-paper border-4 border-vault-darkWine p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-vault-yellow/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-vault-wine/5 rounded-full blur-3xl"></div>
                
                <div className="relative aspect-video w-full max-w-5xl mx-auto">
                    {/* SVG Blueprint Map */}
                    <svg viewBox="0 0 800 450" className="w-full h-full text-vault-darkWine/60" preserveAspectRatio="xMidYMid meet">
                        {/* Base grid */}
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        
                        {/* Buildings */}
                        {/* Main Academics */}
                        <g className="cursor-pointer group/bldg" onMouseEnter={() => setHoveredBuilding('academics')} onMouseLeave={() => setHoveredBuilding(null)}>
                            <rect x="250" y="150" width="200" height="120" fill="currentColor" className="opacity-40 group-hover/bldg:opacity-80 group-hover/bldg:fill-vault-wine transition-all duration-300" stroke="currentColor" strokeWidth="2" />
                            <text x="350" y="215" textAnchor="middle" className="text-[12px] font-mono font-black uppercase fill-vault-darkWine group-hover/bldg:fill-vault-yellow transition-colors">Main Academics</text>
                            <circle cx="350" cy="180" r="4" fill="#FFD700" className="animate-pulse" />
                        </g>

                        {/* Science Wing */}
                        <g className="cursor-pointer group/bldg" onMouseEnter={() => setHoveredBuilding('science')} onMouseLeave={() => setHoveredBuilding(null)}>
                            <rect x="470" y="100" width="120" height="80" fill="currentColor" className="opacity-40 group-hover/bldg:opacity-80 group-hover/bldg:fill-vault-wine transition-all duration-300" stroke="currentColor" strokeWidth="2" />
                            <text x="530" y="145" textAnchor="middle" className="text-[10px] font-mono font-black uppercase fill-vault-darkWine group-hover/bldg:fill-vault-yellow transition-colors">Science Wing</text>
                        </g>

                        {/* Athletic Center */}
                        <g className="cursor-pointer group/bldg" onMouseEnter={() => setHoveredBuilding('athletics')} onMouseLeave={() => setHoveredBuilding(null)}>
                            <rect x="100" y="250" width="150" height="150" rx="10" fill="currentColor" className="opacity-40 group-hover/bldg:opacity-80 group-hover/bldg:fill-vault-wine transition-all duration-300" stroke="currentColor" strokeWidth="2" />
                            <text x="175" y="330" textAnchor="middle" className="text-[10px] font-mono font-black uppercase fill-vault-darkWine group-hover/bldg:fill-vault-yellow transition-colors">Athletic Center</text>
                            {/* Track */}
                            <path d="M 120 270 A 20 20 0 0 0 120 310 L 230 310 A 20 20 0 0 0 230 270 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                        </g>

                        {/* Arts & Humanities */}
                        <g className="cursor-pointer group/bldg" onMouseEnter={() => setHoveredBuilding('arts')} onMouseLeave={() => setHoveredBuilding(null)}>
                            <polygon points="500,220 620,220 650,300 470,300" fill="currentColor" className="opacity-40 group-hover/bldg:opacity-80 group-hover/bldg:fill-vault-wine transition-all duration-300" stroke="currentColor" strokeWidth="2" />
                            <text x="560" y="265" textAnchor="middle" className="text-[10px] font-mono font-black uppercase fill-vault-darkWine group-hover/bldg:fill-vault-yellow transition-colors">Arts Center</text>
                        </g>
                        
                        {/* Library */}
                        <g className="cursor-pointer group/bldg" onMouseEnter={() => setHoveredBuilding('library')} onMouseLeave={() => setHoveredBuilding(null)}>
                            <circle cx="350" cy="320" r="40" fill="currentColor" className="opacity-40 group-hover/bldg:opacity-80 group-hover/bldg:fill-vault-wine transition-all duration-300" stroke="currentColor" strokeWidth="2" />
                            <text x="350" y="325" textAnchor="middle" className="text-[10px] font-mono font-black uppercase fill-vault-darkWine group-hover/bldg:fill-vault-yellow transition-colors">Library</text>
                        </g>

                        {/* Walkways */}
                        <path d="M 350 270 L 350 280 M 450 180 L 470 180 M 250 210 L 175 210 L 175 250 M 560 220 L 560 180 M 450 240 L 485 240" stroke="currentColor" strokeWidth="4" strokeDasharray="5" className="opacity-20" />
                    </svg>

                    {/* Interactive Overlay Info Box */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-vault-yellow p-6 shadow-2xl max-w-[280px] transition-all duration-500 pointer-events-none z-10" style={{ opacity: hoveredBuilding ? 1 : 0, transform: hoveredBuilding ? 'translateY(0)' : 'translateY(-10px)' }}>
                        {hoveredBuilding ? (
                            <div className="space-y-4">
                                <div className="aspect-video w-full overflow-hidden border border-gray-100">
                                    <img src={buildingData[hoveredBuilding].img} alt={buildingData[hoveredBuilding].title} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-black text-vault-darkWine uppercase tracking-tight text-sm font-serif italic border-b border-gray-100 pb-2">
                                    {buildingData[hoveredBuilding].title}
                                </h4>
                                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                                    {buildingData[hoveredBuilding].desc}
                                </p>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 mb-2">
                                <Monitor className="w-4 h-4 text-vault-wine" />
                                <h4 className="font-black text-vault-darkWine uppercase tracking-tight text-xs font-serif italic">Interactive Campus</h4>
                            </div>
                        )}
                    </div>
                    {/* Default Overlay when nothing is hovered */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-vault-darkWine/20 p-6 shadow-xl max-w-[250px] transition-opacity duration-500 pointer-events-none" style={{ opacity: hoveredBuilding ? 0 : 1 }}>
                        <div className="flex items-center gap-2 mb-2">
                            <Monitor className="w-4 h-4 text-vault-wine" />
                            <h4 className="font-black text-vault-darkWine uppercase tracking-tight text-xs font-serif italic">{isEn ? 'Interactive Campus' : 'Campus Interactivo'}</h4>
                        </div>
                        <p className="text-[10px] text-gray-500 font-medium">{isEn ? 'Hover over the blueprints to explore our master-planned facilities.' : 'Pase el cursor sobre los planos para explorar nuestras instalaciones.'}</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Facilities Gallery */}
        <section>
            <div className="flex items-center gap-4 mb-12 border-b-4 border-gray-100 pb-6">
                <div className="bg-vault-darkWine p-3 rounded-xl text-white">
                    <MapPin className="w-6 h-6 text-vault-yellow" />
                </div>
                <div>
                    <h2 className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic">{content.facilities.title}</h2>
                    <p className="text-gray-500 font-mono text-[10px] font-black uppercase tracking-[0.2em]">{content.facilities.subtitle}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.facilities.items.map((facility, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <div className="relative h-80 overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-transparent hover:border-vault-yellow transition-all mb-6">
                            <img 
                                src={facility.image} 
                                alt={facility.title} 
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-vault-darkWine/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <p className="text-white text-sm font-medium leading-relaxed italic">{facility.desc}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2">
                            <h4 className="text-xl font-black text-vault-darkWine uppercase tracking-tighter italic group-hover:text-vault-wine transition-colors">
                                {facility.title}
                            </h4>
                            <Camera className="w-5 h-5 text-vault-yellow opacity-40 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Full CTA */}
        <div className="bg-gray-50 p-12 md:p-24 rounded-[4rem] text-center shadow-inner relative overflow-hidden border border-gray-100">
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
                <div className="space-y-6">
                    <Quote className="w-12 h-12 text-vault-yellow mx-auto opacity-50" />
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight italic text-vault-darkWine">
                        {content.quote}
                    </h3>
                </div>
                
                <div className="pt-8">
                    <a 
                        href="/demos/integrated/contact" 
                        className="inline-block bg-vault-darkWine text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-vault-wine hover:-translate-y-1 transition-all shadow-xl"
                    >
                        {isEn ? "SCHEDULE A PRIVATE TOUR" : "PROGRAMAR UNA VISITA PRIVADA"}
                    </a>
                </div>
            </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default UniqueEnvironment;