import React from 'react';
import { BookOpen, Calendar, Lock, FileText, ArrowRight } from 'lucide-react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { Link } from 'react-router-dom';

const QuickLinks: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);

  const links = [
    { 
        title: data.resources.newspaperBtn, 
        icon: <FileText className="w-8 h-8 text-vault-wine" />,
        desc: language === 'en' ? 'Institutional feed and news logs.' : 'Feed institucional y bitácoras.',
        href: "/demos/integrated/publications"
    },
    { 
        title: language === 'en' ? 'Digital Library' : 'Biblioteca Digital', 
        icon: <BookOpen className="w-8 h-8 text-vault-wine" />,
        desc: language === 'en' ? 'Access our academic assets.' : 'Accede a nuestro catálogo académico.',
        href: "/demos/integrated/about-us/library"
    },
    { 
        title: language === 'en' ? 'System Calendar' : 'Calendario de Sistema', 
        icon: <Calendar className="w-8 h-8 text-vault-wine" />,
        desc: language === 'en' ? 'Stay synchronized with events.' : 'Manténgase sincronizado con eventos.',
        href: "/demos/integrated/calendar" // Pointing to new protected page
    },
    { 
        title: language === 'en' ? 'Intranet Access' : 'Acceso Intranet', 
        icon: <Lock className="w-8 h-8 text-vault-wine" />,
        desc: language === 'en' ? 'Unified authentication portals.' : 'Portales de acceso unificado.',
        href: "/demos/integrated/login"
    }
  ];

  return (
    <section className="py-24 bg-vault-paper border-y-4 border-vault-darkWine">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono font-black text-vault-wine tracking-[0.4em] uppercase mb-4 border-b border-vault-wine pb-2 inline-block">
            // SYSTEM ACCESS //
          </h2>
          <h3 className="text-4xl font-black text-vault-darkWine uppercase tracking-tighter font-serif italic">
            {language === 'en' ? 'Institutional Resources' : 'Recursos Institucionales'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 bg-gray-200">
          {links.map((link) => (
            <Link 
                key={link.title} 
                to={link.href} 
                className="bg-white p-12 rounded-none hover:shadow-2xl transition-all duration-500 group border-[0.5px] border-gray-200 hover:border-vault-darkWine flex flex-col items-center text-center relative overflow-hidden z-0 hover:z-10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-vault-darkWine transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="bg-vault-paper p-6 rounded-none mb-8 group-hover:bg-vault-darkWine transition-colors border border-gray-100 group-hover:border-vault-darkWine">
                {React.cloneElement(link.icon, { className: 'w-8 h-8 text-vault-wine group-hover:text-vault-yellow transition-colors' })}
              </div>
              <h3 className="text-xl font-black text-vault-darkWine mb-4 uppercase tracking-tighter font-serif">{link.title}</h3>
              <p className="text-sm text-gray-500 mb-8 font-medium leading-relaxed">{link.desc}</p>
              <span className="mt-auto text-[10px] font-mono font-black uppercase tracking-[0.3em] text-vault-wine flex items-center gap-2 group-hover:text-vault-darkWine transition-colors">
                {language === 'en' ? 'BEGIN' : 'ACCEDER'} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;