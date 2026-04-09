import React from 'react';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';

const IBLogo = () => (
  <svg viewBox="0 0 100 100" className="h-full w-auto">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#003366" strokeWidth="2"/>
    <text x="50" y="58" textAnchor="middle" fill="#003366" fontSize="28" fontWeight="bold" fontFamily="serif">IB</text>
    <path d="M20 50 A30 30 0 0 1 80 50" fill="none" stroke="#003366" strokeWidth="1"/>
    <path d="M20 50 A30 30 0 0 0 80 50" fill="none" stroke="#003366" strokeWidth="1"/>
  </svg>
);

const CambridgeLogo = () => (
  <svg viewBox="0 0 300 60" className="h-full w-auto">
    <rect width="10" height="40" x="10" y="10" fill="#003366"/>
    <text x="30" y="42" fill="#003366" fontSize="24" fontWeight="900" fontFamily="sans-serif">Cambridge</text>
    <text x="160" y="42" fill="#003366" fontSize="20" fontWeight="100" fontFamily="sans-serif">International</text>
  </svg>
);

const CISLogo = () => (
  <svg viewBox="0 0 100 100" className="h-full w-auto">
    <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="#005C97" opacity="0.2"/>
    <text x="50" y="55" textAnchor="middle" fill="#005C97" fontSize="35" fontWeight="black" fontFamily="sans-serif">CIS</text>
    <circle cx="50" cy="50" r="48" fill="none" stroke="#005C97" strokeWidth="2" strokeDasharray="4 2"/>
  </svg>
);

const Accreditations = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const certifications = [
    { name: "IB World School", component: <IBLogo /> },
    { name: "Cambridge International", component: <CambridgeLogo /> },
    { name: "CIS Accredited", component: <CISLogo /> },
    { name: "NEASC Verified", component: <div className="font-black text-blue-900 text-4xl tracking-tighter">NEASC</div> },
    { name: "Cognia Certified", component: <div className="font-black text-red-800 text-4xl italic tracking-tighter">cognia</div> }
  ];

  // Multiple sets for a truly infinite, dense scroll
  const scrollingItems = [...certifications, ...certifications, ...certifications];

  return (
    <section className="py-24 bg-white border-t-2 border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 text-center mb-16">
        <div className="flex flex-col items-center gap-4">
            <div className="h-1 w-20 bg-vault-yellow mb-2"></div>
            <h3 className="text-sm font-mono font-black text-vault-darkWine uppercase tracking-[0.5em]">
                {isEn ? '// GLOBAL ACCREDITATIONS' : '// ACREDITACIONES GLOBALES'}
            </h3>
        </div>
      </div>

      <div className="relative flex items-center">
        {/* Gradients */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

        <div className="flex animate-marquee whitespace-nowrap gap-32 items-center py-8">
            {scrollingItems.map((cert, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center gap-6 group cursor-pointer">
                    <div className="h-24 md:h-32 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                        {cert.component}
                    </div>
                    <span className="text-[10px] font-black font-mono text-vault-wine/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        {cert.name}
                    </span>
                </div>
            ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Accreditations;