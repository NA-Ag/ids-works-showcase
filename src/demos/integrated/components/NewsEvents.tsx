import React from 'react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsEvents: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-xs font-mono font-black text-vault-wine tracking-[0.4em] uppercase mb-4">
                {language === 'en' ? '// INSTITUTIONAL UPDATES //' : '// ACTUALIZACIONES INSTITUCIONALES //'}
            </h2>
            <h3 className="text-5xl font-black text-vault-darkWine uppercase tracking-tighter leading-none font-serif italic">{data.news.title}</h3>
          </div>
          <Link 
            to="/demos/integrated/publications" 
            className="hidden md:flex items-center text-vault-darkWine font-black uppercase tracking-[0.3em] text-[10px] border border-vault-darkWine px-6 py-3 hover:bg-vault-darkWine hover:text-vault-yellow transition-all shadow-sm"
          >
            {data.news.viewAll} <ArrowRight className="ml-3 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-vault-darkWine">
          {data.news.items.map((news) => (
            <Link 
                key={news.id} 
                to="/demos/integrated/publications"
                className="group cursor-pointer flex flex-col md:flex-row items-stretch bg-vault-paper border border-vault-darkWine/20 hover:border-vault-darkWine hover:bg-vault-darkWine transition-all duration-500 overflow-hidden relative z-0 hover:z-10 hover:shadow-2xl"
            >
              <div className="relative w-full md:w-56 h-56 md:h-auto shrink-0 overflow-hidden rounded-none">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-vault-darkWine/40 group-hover:bg-transparent transition-colors duration-500 mix-blend-multiply"></div>
              </div>
              <div className="flex flex-col h-full p-8 md:p-10 text-left">
                <div className="text-[10px] font-mono font-black text-vault-wine group-hover:text-vault-yellow uppercase tracking-[0.3em] mb-4 transition-colors duration-500">
                  {news.date}
                </div>
                <h3 className="text-2xl font-black text-vault-darkWine mb-4 uppercase tracking-tighter font-serif group-hover:text-white transition-colors duration-500">
                  {news.title}
                </h3>
                <p className="text-gray-600 line-clamp-2 mb-8 font-medium leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {news.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center text-[10px] font-mono font-black text-vault-wine uppercase tracking-[0.3em] group-hover:text-vault-yellow transition-colors duration-500">
                  {data.news.readMore} <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;