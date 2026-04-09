import React from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';

const HeadmasterWelcome: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';

  const content = {
    title: isEn ? "Headmaster Welcome" : "Bienvenida del Rector",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
        { label: isEn ? "About Us" : "Quiénes somos", href: "#" },
        { label: isEn ? "Headmaster Welcome" : "Bienvenida del Rector" }
    ],
    greeting: isEn ? "Dear Parents and Guardians," : "Estimados Padres y Tutores,",
    quote: isEn ? "Welcome to Colegio IDS." : "Bienvenidos al Colegio IDS.",
    text: [
        isEn 
        ? "At Colegio IDS you will find a progressive, nurturing community that champions uniqueness through a broad, forward-thinking, and academically exciting education that prepares students to make a meaningful impact on the wider world."
        : "Aquí en Colegio IDS encontrarán una comunidad progresista y enriquecedora que defiende la singularidad a través de una educación amplia, con visión de futuro y académicamente emocionante.",
        
        isEn
        ? "As a leading institution, we proudly embrace a multicultural perspective in our classrooms. Our students hail from various backgrounds, ensuring a truly international perspective."
        : "Como institución líder, abrazamos con orgullo una perspectiva multicultural en nuestras aulas. Nuestros estudiantes provienen de diversos orígenes, asegurando una perspectiva verdaderamente internacional.",

        isEn
        ? "Our rigorous curriculum prepares students for global challenges, developing critical thinking, intellectual curiosity, and advanced language skills."
        : "Nuestro riguroso plan de estudios prepara a los estudiantes para desafíos globales, desarrollando el pensamiento crítico y la curiosidad intelectual.",

        isEn
        ? "If this sounds like the kind of school you would like your children to attend, we welcome you to apply!"
        : "Si este suena como el tipo de escuela a la que les gustaría que asistieran sus hijos, ¡los invitamos a aplicar!"
    ],
    signOff: isEn ? "All the best," : "Con los mejores deseos,"
  };

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs} 
        bannerImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in">
        {/* Image */}
        <div className="md:w-1/3 w-full shrink-0">
            <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt={data.headmasterName} 
                className="w-full h-auto rounded-lg shadow-md grayscale hover:grayscale-0 transition-all duration-700"
            />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3">
            <p className="mb-6 font-bold text-vault-darkWine uppercase tracking-tight">{content.greeting}</p>
            
            <div className="bg-vault-wine/5 border-l-4 border-vault-yellow p-6 my-8 rounded-r-lg shadow-inner">
                <h2 className="text-xl md:text-2xl font-black text-vault-darkWine uppercase tracking-tighter italic leading-tight">
                    "{content.quote}"
                </h2>
            </div>

            <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                {content.text.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="mb-2 font-bold text-gray-400 uppercase tracking-widest text-[10px]">{content.signOff}</p>
                <h4 className="text-2xl font-black text-vault-darkWine uppercase tracking-tighter italic">{data.headmasterName}</h4>
                <p className="text-xs text-vault-wine font-black uppercase tracking-[0.2em] mt-1">{data.headmasterRole}</p>
            </div>
        </div>
      </div>

      {/* Board of Trustees Section */}
      <div className="mt-32 pt-20 border-t-8 border-vault-darkWine animate-fade-in relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-vault-paper px-8 text-vault-yellow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div className="text-center mb-16">
            <h2 className="text-xs font-mono font-black text-vault-wine tracking-[0.4em] uppercase mb-4 border-b border-vault-wine pb-2 inline-block">
                // INSTITUTIONAL GOVERNANCE //
            </h2>
            <h3 className="text-4xl font-black text-vault-darkWine uppercase tracking-tighter font-serif italic">
                {isEn ? 'Board of Trustees' : 'Consejo Directivo'}
            </h3>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto mt-6 font-serif">
                {isEn 
                    ? 'Our esteemed Board provides strategic oversight, ensuring Colegio IDS remains at the forefront of global education while preserving its foundational legacy.' 
                    : 'Nuestro distinguido Consejo proporciona supervisión estratégica, asegurando que el Colegio IDS se mantenga a la vanguardia de la educación global preservando su legado fundacional.'}
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-4 border-vault-darkWine">
            {[
                { name: 'Arthur Penhaligon', role: isEn ? 'President of the Board' : 'Presidente del Consejo', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
                { name: 'Dr. Elena Rostova', role: isEn ? 'Director of Academics' : 'Directora Académica', icon: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z' },
                { name: 'Marcus Sterling', role: isEn ? 'Director of Finance' : 'Director de Finanzas', icon: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' },
                { name: 'Sarah Jenkins', role: isEn ? 'Alumni Representative' : 'Representante de Egresados', icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' }
            ].map((member, idx) => (
                <div key={idx} className="bg-white p-10 border border-gray-200 text-center hover:bg-vault-darkWine hover:text-white transition-all duration-500 group relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-vault-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="w-20 h-20 mx-auto bg-gray-50 group-hover:bg-white/10 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 border border-gray-200 group-hover:border-vault-yellow/50">
                        <svg className="w-8 h-8 text-vault-wine group-hover:text-vault-yellow transition-colors" viewBox="0 0 24 24" fill="currentColor">
                            <path d={member.icon} />
                        </svg>
                    </div>
                    <h5 className="font-serif font-black text-xl text-vault-darkWine group-hover:text-white uppercase tracking-tighter mb-2">{member.name}</h5>
                    <p className="text-[10px] font-mono font-bold text-gray-400 group-hover:text-vault-yellow uppercase tracking-widest">{member.role}</p>
                </div>
            ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default HeadmasterWelcome;