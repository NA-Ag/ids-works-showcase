import React from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
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

  const content = {
    title: isEn ? "Campus & Environment" : "Plantel y Entorno",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/standard" },
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
                <div className="inline-flex items-center gap-2 bg-vault-yellow text-vault-darkBlue px-4 py-1 rounded-sm font-sans font-black text-[10px] tracking-widest uppercase">
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
                        <p className="text-4xl font-black text-vault-darkBlue group-hover:scale-110 transition-transform italic tracking-tighter">{stat.value}</p>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Features Row */}
        <section className="bg-vault-darkBlue -mx-4 lg:-mx-12 px-4 lg:px-12 py-24 text-white relative overflow-hidden border-b-8 border-vault-yellow">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.campus.features.map((feature: any, idx: number) => {
                        const Icon = iconMap[feature.icon] || Info;
                        return (
                            <div key={idx} className="space-y-4 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                <div className="bg-vault-yellow p-3 rounded-xl text-vault-darkBlue w-fit group-hover:rotate-12 transition-transform">
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

        {/* Facilities Gallery */}
        <section>
            <div className="flex items-center gap-4 mb-12 border-b-4 border-gray-100 pb-6">
                <div className="bg-vault-darkBlue p-3 rounded-xl text-white">
                    <MapPin className="w-6 h-6 text-vault-yellow" />
                </div>
                <div>
                    <h2 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter italic">{content.facilities.title}</h2>
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
                            <div className="absolute inset-0 bg-gradient-to-t from-vault-darkBlue/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <p className="text-white text-sm font-medium leading-relaxed italic">{facility.desc}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2">
                            <h4 className="text-xl font-black text-vault-darkBlue uppercase tracking-tighter italic group-hover:text-vault-blue transition-colors">
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
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight italic text-vault-darkBlue">
                        {content.quote}
                    </h3>
                </div>
                
                <div className="pt-8">
                    <a 
                        href="/demos/standard/contact" 
                        className="inline-block bg-vault-darkBlue text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-vault-blue hover:-translate-y-1 transition-all shadow-xl"
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