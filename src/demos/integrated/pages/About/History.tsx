import React from 'react';
import PageLayout from '../../components/PageLayout';
import Timeline from '../../components/Timeline';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';

const History: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const content = {
    title: isEn ? "A Century of Excellence" : "Un Siglo de Excelencia",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
        { label: isEn ? "About Us" : "Quiénes somos", href: "#" },
        { label: isEn ? "History" : "Historia" }
    ],
    intro: isEn 
        ? "Founded in 1926, Colegio IDS has provided a century of unwavering educational stability and academic leadership."
        : "Fundado en 1926, el Colegio IDS ha proporcionado un siglo de estabilidad educativa inquebrantable y liderazgo académico.",
    text: [
        isEn 
        ? "For 100 years, Colegio IDS has been the gold standard for institutional sovereignty. What began as a visionary project to safeguard the future through education has evolved into a world-class ecosystem."
        : "Durante 100 años, el Colegio IDS ha sido el estándar de oro para la soberanía institucional. Lo que comenzó como un proyecto visionario se ha convertido en un ecosistema de clase mundial.",
        
        isEn
        ? "Our history is rooted in the philosophy of 'Sovereign Education'—the belief that an institution must own its infrastructure, its data, and its destiny. This commitment to self-reliance has allowed us to thrive through a century of global change."
        : "Nuestra historia tiene sus raíces en la filosofía de la 'Educación Soberana'. Este compromiso con la autosuficiencia nos ha permitido prosperar a través de un siglo de cambios globales.",

        isEn
        ? "Today, we celebrate our Centennial. We remain dedicated to the same principles established in 1926: rigorous biculturalism, technological independence, and the development of leaders prepared for any future."
        : "Hoy celebramos nuestro Centenario. Seguimos dedicados a los mismos principios establecidos in 1926: biculturalismo riguroso e independencia tecnológica.",

        isEn
        ? "Colegio IDS: One hundred years of securing the future, one student at a time."
        : "Colegio IDS: Cien años asegurando el futuro, un estudiante a la vez."
    ]
  };

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs} 
        bannerImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="flex flex-col md:flex-row gap-12 items-start animate-fade-in mb-24">
        {/* Text Content */}
        <div className="md:w-3/5 space-y-10">
            <p className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter leading-tight italic">
                "{content.intro}"
            </p>

            <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                {content.text.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>

            <div className="bg-vault-darkWine p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group border-b-8 border-vault-yellow">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic relative z-10">
                    {isEn 
                        ? "100 Years of Institutional Sovereignty" 
                        : "100 Años de Soberanía Institucional"}
                </h3>
                <p className="mt-4 text-vault-yellow font-black uppercase tracking-widest text-[10px] relative z-10">
                    {isEn 
                        ? "// PROTECTING THE FUTURE SINCE 1926" 
                        : "// PROTEGIENDO EL FUTURO DESDE 1926"}
                </p>
            </div>
        </div>

        {/* Stats Side */}
        <div className="md:w-2/5 space-y-8">
            <div className="grid grid-cols-1 gap-6">
                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 text-center hover:border-vault-yellow transition-all group shadow-sm">
                    <p className="text-6xl font-black text-vault-darkWine group-hover:scale-110 transition-transform">100</p>
                    <p className="text-xs font-black text-gray-400 uppercase mt-2 tracking-widest">{isEn ? 'Years of Excellence' : 'Años de Excelencia'}</p>
                </div>
                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 text-center hover:border-vault-yellow transition-all group shadow-sm">
                    <p className="text-6xl font-black text-vault-darkWine group-hover:scale-110 transition-transform">100%</p>
                    <p className="text-xs font-black text-gray-400 uppercase mt-2 tracking-widest">{isEn ? 'Commitment' : 'Compromiso'}</p>
                </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border-l-8 border-vault-yellow shadow-xl italic text-gray-600 font-medium">
                "{isEn ? 'Security, Stability, and Excellence.' : 'Seguridad, Estabilidad y Excelencia.'}"
            </div>
        </div>
      </div>

      <div className="pt-24 border-t-2 border-gray-100">
        <h3 className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic mb-12 text-center">
            {isEn ? "Historical Milestones" : "Hitos Históricos"}
        </h3>
        <Timeline />
      </div>
    </PageLayout>
  );
};

export default History;