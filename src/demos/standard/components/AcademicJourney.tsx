import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { getSchoolData } from '../data/schoolData';
import { Link } from 'react-router-dom';

const AcademicJourney: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);

  return (
    <section className="py-24 bg-vault-paper overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-sm font-mono font-black text-vault-blue tracking-[0.3em] uppercase mb-4">
                    // {data.resources.offeringTitle}
                </h2>
                <h3 className="text-5xl font-black text-vault-darkBlue uppercase tracking-tighter leading-none">
                    {data.resources.programmesTitle}
                </h3>
            </div>
            <Link to="/demos/standard/about-us/headteacher-welcome" className="bg-vault-darkBlue text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-vault-yellow hover:text-vault-darkBlue transition-all shadow-lg flex items-center gap-3">
                {data.resources.aboutUs} <ChevronRight size={16} />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.academicStages.map((stage) => (
            <Link 
                key={stage.title} 
                to={stage.link}
                className="group relative h-[500px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-vault-yellow"
            >
              <img 
                src={stage.imageUrl} 
                alt={stage.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vault-darkBlue via-vault-darkBlue/20 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-vault-yellow font-mono text-xs font-black uppercase tracking-[0.2em] mb-2">{stage.ageRange}</p>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{stage.title}</h4>
                <p className="text-blue-50 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                    {stage.description}
                </p>
                <div className="mt-6 flex items-center text-vault-yellow font-bold uppercase tracking-widest text-[10px]">
                    {data.resources.learnMore} <ChevronRight size={14} className="ml-1 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcademicJourney;