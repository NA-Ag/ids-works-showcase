import React from 'react';
import { BookOpen, Calendar, Lock, FileText, ArrowRight } from 'lucide-react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { Link } from 'react-router-dom';

const QuickLinks: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);

  const links = [
    { 
        title: data.resources.newspaperBtn, 
        icon: <FileText className="w-8 h-8 text-vault-blue" />,
        desc: language === 'en' ? 'Institutional feed and news logs.' : 'Feed institucional y bitácoras.',
        href: "/demos/standard/publications"
    },
    { 
        title: language === 'en' ? 'Digital Library' : 'Biblioteca Digital', 
        icon: <BookOpen className="w-8 h-8 text-vault-blue" />,
        desc: language === 'en' ? 'Access our academic assets.' : 'Accede a nuestro catálogo académico.',
        href: "/demos/standard/about-us/library"
    },
    { 
        title: language === 'en' ? 'System Calendar' : 'Calendario de Sistema', 
        icon: <Calendar className="w-8 h-8 text-vault-blue" />,
        desc: language === 'en' ? 'Stay synchronized with events.' : 'Manténgase sincronizado con eventos.',
        href: "/demos/standard/calendar" // Pointing to new protected page
    },
    { 
        title: language === 'en' ? 'Intranet Access' : 'Acceso Intranet', 
        icon: <Lock className="w-8 h-8 text-vault-blue" />,
        desc: language === 'en' ? 'Unified authentication portals.' : 'Portales de acceso unificado.',
        href: "/demos/standard/login"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono font-black text-vault-blue tracking-[0.3em] uppercase mb-4">// System Access</h2>
          <h3 className="text-4xl font-black text-vault-darkBlue uppercase tracking-tighter">
            {language === 'en' ? 'Institutional Resources' : 'Recursos Institucionales'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link) => (
            <Link 
                key={link.title} 
                to={link.href} 
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group border-2 border-transparent hover:border-vault-yellow flex flex-col items-center text-center"
            >
              <div className="bg-gray-50 p-6 rounded-2xl mb-8 group-hover:bg-vault-blue/10 transition-colors">
                {link.icon}
              </div>
              <h3 className="text-xl font-black text-vault-darkBlue mb-3 uppercase tracking-tight">{link.title}</h3>
              <p className="text-sm text-gray-500 mb-8 font-medium leading-relaxed">{link.desc}</p>
              <span className="mt-auto text-[10px] font-mono font-black uppercase tracking-[0.2em] text-vault-blue flex items-center gap-2 group-hover:text-[#B8860B] transition-colors">
                {language === 'en' ? 'BEGIN' : 'ACCEDER'} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;