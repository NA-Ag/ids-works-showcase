import React from 'react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { User, LogIn, ExternalLink } from 'lucide-react';

const IDSConnect: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);

  return (
    <section className="py-24 bg-vault-darkBlue text-white border-y-8 border-vault-yellow overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* portal column */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-vault-yellow text-vault-darkBlue px-4 py-1 rounded-sm font-sans font-black text-[10px] tracking-widest uppercase">
                <User size={12} /> {language === 'en' ? 'CAMPUS ACCESS' : 'ACCESO AL PLANTEL'}
            </div>
            <h2 className="text-5xl font-black uppercase tracking-tighter italic text-white leading-none">
                {language === 'en' ? 'STUDENT' : 'PORTAL'}<br/>
                <span className="text-vault-yellow">{language === 'en' ? 'PORTAL' : 'ESTUDIANTIL'}</span>
            </h2>
            <p className="text-blue-100 font-medium tracking-wide uppercase text-xs opacity-60 leading-relaxed">{data.idsConnectSub}</p>
            
            <a href="/demos/standard/login" className="group block bg-white text-vault-darkBlue p-10 rounded-2xl shadow-2xl transition-all hover:bg-vault-yellow hover:-translate-y-2 border-b-8 border-black/20">
              <div className="flex flex-col items-center gap-4">
                <LogIn className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-2xl font-black uppercase tracking-tighter">
                    {language === 'en' ? 'PORTAL LOGIN' : 'INICIAR SESIÓN'}
                </span>
                <span className="text-[10px] font-mono font-bold opacity-40 group-hover:opacity-100">Microsoft 365 Integration</span>
              </div>
            </a>
          </div>

          {/* info column */}
          <div className="lg:w-2/3 flex flex-col md:flex-row gap-12 items-center">
             <div className="md:w-2/3 space-y-10">
                <h2 className="text-3xl font-black uppercase tracking-tight text-vault-yellow">{data.valuesSection.title}</h2>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                        <div className="bg-white/10 p-3 rounded-lg group-hover:bg-vault-yellow group-hover:text-vault-darkBlue transition-all">
                            <User size={24} />
                        </div>
                        <p className="text-xl font-light text-blue-50 leading-relaxed">
                          {data.valuesSection.text1}
                        </p>
                    </div>

                    <div className="flex items-start gap-6 group">
                        <div className="bg-white/10 p-3 rounded-lg group-hover:bg-vault-yellow group-hover:text-vault-darkBlue transition-all">
                            <ExternalLink size={24} />
                        </div>
                        <p className="text-xl font-light text-blue-50 leading-relaxed">
                          {data.valuesSection.text2}
                        </p>
                    </div>
                </div>
             </div>

             <div className="md:w-1/3 w-full">
                <div className="relative rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                        alt="Academic Life" 
                        className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-vault-blue/20"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDSConnect;