import React from 'react';
import { ArrowRight, Globe, Users } from 'lucide-react';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { getSchoolData } from '../data/schoolData';
import { Link } from 'react-router-dom';

const LifeAtIDS: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="mb-16">
            <h2 className="text-sm font-mono font-black text-vault-wine tracking-[0.3em] uppercase mb-4">
                // Global Community
            </h2>
            <h3 className="text-5xl font-black text-vault-darkWine uppercase tracking-tighter leading-none">
                {language === 'en' ? 'Beyond the Classroom' : 'Más allá del Aula'}
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Academic Success Pillar */}
            <div className="group relative h-[500px] overflow-hidden rounded-none shadow-2xl border-4 border-vault-darkWine hover:border-vault-yellow transition-all duration-500 cursor-pointer">
                <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                    alt="Academic Success" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vault-darkWine via-vault-darkWine/60 to-transparent mix-blend-multiply opacity-80 group-hover:opacity-90 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-12 border-b-4 border-transparent group-hover:border-vault-yellow transition-all duration-500">
                    <div className="bg-vault-yellow w-12 h-12 rounded-none flex items-center justify-center text-vault-darkWine mb-8 shadow-2xl transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Globe size={24} />
                    </div>
                    <h3 className="font-serif font-black text-4xl text-white uppercase tracking-tighter mb-4 italic">
                        {language === 'en' ? 'International Outlook' : 'Enfoque Internacional'}
                    </h3>
                    <p className="text-gray-200 mb-8 max-w-md font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                        {language === 'en' 
                            ? 'Preparing students for success in a globalized world through diverse perspectives.' 
                            : 'Preparando a los estudiantes para el éxito en un mundo globalizado.'}
                    </p>
                    <Link to="/demos/integrated/about-us/international-outlook" className="inline-flex items-center text-vault-yellow font-black uppercase tracking-[0.3em] text-[10px] border border-vault-yellow px-6 py-3 w-fit hover:bg-vault-yellow hover:text-vault-darkWine transition-colors shadow-lg">
                        {data.resources.learnMore} <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Campus Life Pillar */}
            <div className="group relative h-[500px] overflow-hidden rounded-none shadow-2xl border-4 border-vault-darkWine hover:border-vault-yellow transition-all duration-500 cursor-pointer">
                <img 
                    src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1000" 
                    alt="Campus Life" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vault-darkWine via-vault-darkWine/60 to-transparent mix-blend-multiply opacity-80 group-hover:opacity-90 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-12 border-b-4 border-transparent group-hover:border-vault-yellow transition-all duration-500">
                    <div className="bg-vault-yellow w-12 h-12 rounded-none flex items-center justify-center text-vault-darkWine mb-8 shadow-2xl transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Users size={24} />
                    </div>
                    <h3 className="font-serif font-black text-4xl text-white uppercase tracking-tighter mb-4 italic">
                        {language === 'en' ? 'A Unique Environment' : 'Un Entorno Único'}
                    </h3>
                    <p className="text-gray-200 mb-8 max-w-md font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                        {language === 'en' 
                            ? 'Experience a campus designed to inspire creativity, collaboration, and personal growth.' 
                            : 'Vive un campus diseñado para inspirar la creatividad, la colaboración y el crecimiento.'}
                    </p>
                    <Link to="/demos/integrated/about-us/unique-environment" className="inline-flex items-center text-vault-yellow font-black uppercase tracking-[0.3em] text-[10px] border border-vault-yellow px-6 py-3 w-fit hover:bg-vault-yellow hover:text-vault-darkWine transition-colors shadow-lg">
                        {data.resources.learnMore} <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default LifeAtIDS;