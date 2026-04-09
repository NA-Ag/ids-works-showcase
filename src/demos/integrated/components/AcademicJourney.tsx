import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
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
                <h2 className="text-xs font-mono font-black text-vault-wine tracking-[0.4em] uppercase mb-4 border-b border-vault-wine pb-2 inline-block">
                    // {data.resources.offeringTitle} //
                </h2>
                <h3 className="text-5xl font-black text-vault-darkWine uppercase tracking-tighter leading-none font-serif">
                    {data.resources.programmesTitle}
                </h3>
            </div>
            <Link to="/demos/integrated/about-us/headteacher-welcome" className="bg-vault-darkWine border border-vault-yellow text-vault-yellow px-10 py-4 rounded-none font-black uppercase tracking-[0.3em] text-[10px] hover:bg-vault-yellow hover:text-vault-darkWine transition-all shadow-2xl flex items-center gap-3">
                {data.resources.aboutUs} <ChevronRight size={16} />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-4 border-vault-darkWine">
          {data.academicStages.map((stage) => (
            <Link 
                key={stage.title} 
                to={stage.link}
                className="group relative h-[550px] overflow-hidden transition-all duration-500 border border-vault-darkWine/50 hover:z-10"
            >
              <img 
                src={stage.imageUrl} 
                alt={stage.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vault-darkWine via-vault-darkWine/50 to-transparent mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end border-b-4 border-transparent group-hover:border-vault-yellow transition-all duration-500">
                <div className="bg-vault-yellow text-vault-darkWine self-start px-3 py-1 text-[9px] font-mono font-black uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0">
                    {stage.ageRange}
                </div>
                <h4 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 font-serif italic">{stage.title}</h4>
                <p className="text-gray-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 line-clamp-3">
                    {stage.description}
                </p>
                <div className="mt-8 flex items-center text-vault-yellow font-black uppercase tracking-[0.3em] text-[10px]">
                    {data.resources.learnMore} <ChevronRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
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