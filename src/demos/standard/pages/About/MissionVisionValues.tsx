import React from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';
import * as LucideIcons from 'lucide-react';
import { Target, Shield, Globe, Award as AwardIcon } from 'lucide-react';

const MissionVisionValues: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);

  const isEn = language === 'en';

  const content = {
    title: isEn ? "Mission, Vision and Values" : "Misión, Visión y Valores",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/standard" },
        { label: isEn ? "About Us" : "Quiénes somos", href: "#" },
        { label: isEn ? "Mission, Vision and Values" : "Misión, Visión y Valores" }
    ],
    valuesIntro: isEn 
        ? "At Colegio IDS, our core values guide every interaction and academic pursuit. We are dedicated to creating a nurturing environment where every student can achieve their full potential."
        : "En Colegio IDS, nuestros valores fundamentales guían cada interacción. Estamos dedicados a crear un entorno enriquecedor donde cada estudiante pueda alcanzar su máximo potencial.",
    mission: {
        title: isEn ? "Our Mission" : "Nuestra Misión",
        text: isEn 
            ? "To empower students through academic excellence, fostering critical thinking, integrity, and a passion for lifelong learning in a diverse and inclusive community."
            : "Empoderar a los estudiantes a través de la excelencia académica, fomentando el pensamiento crítico, la integridad y la pasión por el aprendizaje."
    },
    vision: {
        title: isEn ? "Our Vision" : "Nuestra Vision",
        text: isEn 
            ? "To be recognized globally as a leading educational institution that prepares students to thrive and lead in an interconnected and rapidly evolving world."
            : "Ser reconocidos globalmente como una institución educativa líder que prepara a los estudiantes para prosperar y liderar en un mundo interconectado."
    },
    profile: {
        title: isEn ? "Graduate Profile" : "Perfil del Egresado",
        subtitle: isEn ? "Compentencies for a complex world" : "Competencias para un mundo complejo"
    }
  };

  const profileIcons = [Target, Shield, Globe, AwardIcon];

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs} 
        bannerImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="space-y-24">
        
        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <section className="bg-vault-darkBlue p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group border-b-8 border-vault-yellow">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
                <h2 className="text-3xl font-black mb-6 relative z-10 uppercase tracking-tighter italic">{content.mission.title}</h2>
                <p className="text-xl leading-relaxed font-light relative z-10 opacity-90">
                    {content.mission.text}
                </p>
            </section>

            <section className="bg-vault-blue p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group border-b-8 border-vault-yellow">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full -ml-20 -mb-20 group-hover:scale-110 transition-transform duration-700"></div>
                <h2 className="text-3xl font-black mb-6 relative z-10 uppercase tracking-tighter italic">{content.vision.title}</h2>
                <p className="text-xl leading-relaxed font-light relative z-10 opacity-90">
                    {content.vision.text}
                </p>
            </section>
        </div>

        {/* Graduate Profile Section */}
        <section className="bg-gray-50 -mx-4 lg:-mx-12 px-4 lg:px-12 py-24 border-y border-gray-100">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-vault-darkBlue uppercase tracking-tighter italic mb-4">{content.profile.title}</h2>
                    <div className="h-1 w-24 bg-vault-yellow mx-auto mb-6"></div>
                    <p className="text-gray-500 font-mono font-bold uppercase tracking-widest text-xs">{content.profile.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.graduateProfile.map((item: any, idx: number) => {
                        const Icon = profileIcons[idx % profileIcons.length];
                        return (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start hover:shadow-md transition-shadow">
                                <div className="bg-vault-blue/10 p-4 rounded-xl text-vault-blue shrink-0">
                                    <Icon size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-vault-darkBlue uppercase tracking-tight mb-2 italic">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Values Section */}
        <section>
            <h2 className="text-3xl font-sans font-black text-vault-darkBlue mb-6 border-l-4 border-vault-yellow pl-4 uppercase tracking-tighter italic">
                {isEn ? "Core Values" : "Valores Fundamentales"}
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed font-medium">
                {content.valuesIntro}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.values.map((value) => {
                    const IconComponent = (LucideIcons as any)[value.icon] || LucideIcons.HelpCircle;
                    return (
                        <div key={value.name} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all group border-b-4 hover:border-vault-yellow">
                            <div className="flex items-center mb-6">
                                <div className="bg-white p-3 rounded-xl shadow-sm mr-4 group-hover:bg-vault-blue group-hover:text-white transition-colors">
                                    <IconComponent className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-black text-vault-darkBlue uppercase tracking-tight">{value.name}</h3>
                            </div>
                            <p className="text-gray-600 font-medium leading-relaxed">{value.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* Closing Image */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border-8 border-white">
            <img 
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=2000" 
                alt="Colegio IDS Students" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vault-darkBlue/80 via-transparent to-transparent flex items-end p-16">
                <p className="text-white text-3xl font-sans font-black uppercase tracking-tighter italic max-w-2xl">
                    {isEn 
                        ? "Empowering students to lead the future." 
                        : "Empoderando a los estudiantes para liderar el futuro."}
                </p>
            </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default MissionVisionValues;