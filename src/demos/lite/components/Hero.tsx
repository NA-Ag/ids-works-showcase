import React from 'react';
import { ShieldCheck, ChevronRight, ArrowRight, Award } from 'lucide-react';
import { useLite } from '../context/LiteContext';

interface HeroProps {
  onOpenAdmissions?: () => void;
  onOpenLogin?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAdmissions, onOpenLogin }) => {
  const { isKinder, config } = useLite();
  const { theme, hero } = config;
  
  const accentColor = theme.accentColor;
  const bgColor = theme.primaryBgColor;
  const bgSoft = theme.softBgColor;
  const borderSoft = theme.softBorderColor;
  const textSoft = theme.softTextColor;

  return (
    <section id="inicio" className={`relative pt-40 pb-32 ${isKinder ? 'bg-gradient-to-br from-pink-50 via-white to-sky-50' : 'bg-gray-50'} overflow-hidden`}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#003366 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      {isKinder && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
           {/* Abstract paint blobs and splashes */}
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
           <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
           <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[45%] bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
           
           {/* Decorative floating shapes */}
           <div className="absolute top-[15%] left-[10%] text-pink-400 opacity-60 animate-bounce" style={{animationDuration: '5s'}}>
              <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor"><path d="M50 0 L100 50 L50 100 L0 50 Z" /></svg>
           </div>
           <div className="absolute top-[30%] right-[15%] text-sky-400 opacity-60 animate-bounce" style={{animationDuration: '6s'}}>
              <svg width="50" height="50" viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="50" r="50" /></svg>
           </div>
           <div className="absolute bottom-[20%] right-[30%] text-amber-400 opacity-60 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
              <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor"><polygon points="50,0 100,100 0,100" /></svg>
           </div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-3/5 space-y-8 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 ${bgSoft} ${textSoft} px-4 py-1.5 rounded-full border ${borderSoft} text-[10px] font-black uppercase tracking-[0.2em]`}>
              <ShieldCheck size={14} /> Certificación Académica Internacional
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-vault-darkBlue leading-[0.9] tracking-tighter uppercase italic transition-all duration-500">
              {hero.titleLines[0]} <br />
              {hero.titleLines[1]} <br />
              <span className={`${accentColor} transition-colors duration-500`}>{hero.highlightedLine}</span>
            </h1>

            <p className="text-xl text-gray-500 font-medium max-w-2xl leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={onOpenAdmissions}
                className={`group ${bgColor} text-white px-8 py-4 ${isKinder ? 'rounded-[2rem] shadow-[0_8px_0_#be185d] hover:shadow-[0_12px_0_#be185d] hover:-translate-y-1 hover:rotate-2 active:shadow-[0_0px_0_#be185d] active:translate-y-2' : 'rounded-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95'} font-black uppercase tracking-widest text-[11px] whitespace-nowrap transition-all duration-300 flex items-center justify-center gap-2`}
              >
                {hero.buttonText} <ChevronRight size={16} className={`transition-all duration-300 ${isKinder ? 'group-hover:translate-x-1 group-hover:scale-125 group-hover:rotate-12' : 'group-hover:translate-x-1'}`} />
              </button>
              <button 
                onClick={onOpenLogin}
                className={`group bg-white border ${isKinder ? 'border-pink-200 text-pink-500 rounded-[2rem] shadow-[0_8px_0_#fbcfe8] hover:shadow-[0_12px_0_#fbcfe8] hover:-translate-y-1 hover:-rotate-2 active:shadow-[0_0px_0_#fbcfe8] active:translate-y-2' : 'border-gray-200 text-gray-400 rounded-sm hover:border-vault-blue hover:text-vault-blue hover:shadow-lg hover:-translate-y-1 active:scale-95'} font-black uppercase tracking-widest text-[11px] whitespace-nowrap px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2`}
              >
                {hero.secondaryButtonText} <ArrowRight size={16} className={`transition-all duration-300 ${isKinder ? 'group-hover:translate-x-1 group-hover:scale-125 group-hover:-rotate-12' : 'group-hover:translate-x-1'}`} />
              </button>
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="relative">
              {isKinder ? (
                <div className="relative h-[450px] w-full group cursor-pointer mt-12 lg:mt-0">
                  <div className="absolute top-0 right-4 w-48 h-48 rounded-[3rem] border-8 border-pink-200 overflow-hidden shadow-2xl rotate-12 group-hover:-rotate-6 transition-all duration-700 z-20 hover:scale-110 hover:z-50">
                     <img src={hero.image} alt="Diversión 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-24 left-0 w-56 h-56 rounded-full border-8 border-sky-200 overflow-hidden shadow-xl -rotate-6 group-hover:rotate-12 transition-all duration-700 z-10 hover:scale-110 hover:z-50">
                     <img src={hero.image} alt="Diversión 2" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100" />
                  </div>
                  <div className="absolute bottom-4 right-10 w-64 h-48 rounded-[2rem] border-8 border-amber-200 overflow-hidden shadow-2xl rotate-3 group-hover:-rotate-3 transition-all duration-700 z-30 hover:scale-110 hover:z-50">
                     <img src={hero.image} alt="Diversión 3" className="w-full h-full object-cover" />
                  </div>
                  <div className={`absolute -bottom-8 left-10 ${bgColor} text-white p-6 rounded-[2rem] shadow-[0_8px_0_#be185d] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 z-40`}>
                    <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">{hero.badgeText}</p>
                    <p className="text-2xl font-black italic tracking-tighter">CICLO 2026</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-white p-4 rounded-sm shadow-2xl border border-gray-100 rotate-3 hover:rotate-0 transition-all duration-700 relative z-10 group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100">
                      <img 
                        key="g"
                        src={hero.image} 
                        alt="Colegio IDS" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 animate-fade-in"
                      />
                      {/* Fill empty space/Official Seal */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full border border-gray-100 shadow-lg flex flex-col items-center justify-center w-16 h-16 transition-transform group-hover:scale-110">
                        <Award size={24} className={`${accentColor} animate-pulse-slow`} />
                        <span className="text-[6px] font-black uppercase tracking-tighter text-gray-400">{hero.badgeText}</span>
                      </div>
                    </div>
                    
                    <div className={`absolute -bottom-6 -left-6 ${bgColor} text-white p-6 rounded-sm shadow-xl transition-all duration-500 group-hover:scale-105`}>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1 opacity-60">Matrícula Abierta</p>
                      <p className="text-2xl font-black italic tracking-tighter">CICLO 2026</p>
                    </div>
                  </div>
                  {/* Decorative Frame */}
                  <div className={`absolute top-10 -right-10 w-full h-full border-4 border-dashed border-gray-200 rounded-sm -z-10 transition-colors`}></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;