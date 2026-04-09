import React from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';

const HeadmasterWelcome: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';

  const content = {
    title: isEn ? "Headmaster Welcome" : "Bienvenida del Rector",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/standard" },
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
            <p className="mb-6 font-bold text-vault-darkBlue uppercase tracking-tight">{content.greeting}</p>
            
            <div className="bg-vault-blue/5 border-l-4 border-vault-yellow p-6 my-8 rounded-r-lg shadow-inner">
                <h2 className="text-xl md:text-2xl font-black text-vault-darkBlue uppercase tracking-tighter italic leading-tight">
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
                <h4 className="text-2xl font-black text-vault-darkBlue uppercase tracking-tighter italic">{data.headmasterName}</h4>
                <p className="text-xs text-vault-blue font-black uppercase tracking-[0.2em] mt-1">{data.headmasterRole}</p>
            </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HeadmasterWelcome;