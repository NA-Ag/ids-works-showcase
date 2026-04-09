import React from 'react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsEvents: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-mono font-black text-vault-blue tracking-[0.3em] uppercase mb-4">
                {language === 'en' ? '// Institutional Updates' : '// Actualizaciones Institucionales'}
            </h2>
            <h3 className="text-5xl font-black text-vault-darkBlue uppercase tracking-tighter leading-none">{data.news.title}</h3>
          </div>
          <Link 
            to="/demos/standard/publications" 
            className="hidden md:flex items-center text-vault-blue font-black uppercase tracking-widest text-xs hover:text-[#B8860B] transition-colors font-mono"
          >
            {data.news.viewAll} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.news.items.map((news) => (
            <Link 
                key={news.id} 
                to="/demos/standard/publications"
                className="group cursor-pointer flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[2.5rem] border-2 border-transparent hover:border-[#B8860B] transition-all hover:shadow-2xl"
            >
              <div className="relative w-full md:w-48 h-48 shrink-0 overflow-hidden rounded-3xl">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-vault-darkBlue/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex flex-col h-full py-2 text-left">
                <div className="text-[10px] font-mono font-black text-vault-blue uppercase tracking-widest mb-3 opacity-60">
                  {news.date}
                </div>
                <h3 className="text-2xl font-black text-vault-darkBlue mb-4 uppercase tracking-tight group-hover:text-vault-blue transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-500 line-clamp-2 mb-6 font-medium leading-relaxed">
                  {news.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center text-[10px] font-mono font-black text-vault-blue uppercase tracking-[0.2em] group-hover:text-[#B8860B] transition-colors">
                  {data.news.readMore} <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
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