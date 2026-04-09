import React from 'react';
import PageLayout from '../../components/PageLayout';
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

const Accreditations: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const items = [
    {
        name: "International Baccalaureate",
        fullName: "IB World School",
        component: <IBLogo />,
        desc: isEn 
            ? "The IB offers a continuum of international education. The programmes encourage both personal and academic achievement."
            : "El IB ofrece un continuo de educación internacional. Los programas fomentan tanto el logro personal como académico."
    },
    {
        name: "Cambridge International",
        fullName: "Cambridge Assessment",
        component: <CambridgeLogo />,
        desc: isEn 
            ? "Cambridge International prepares school students for life, helping them develop an informed curiosity and a lasting passion for learning."
            : "Cambridge International prepara a los estudiantes para la vida, ayudándoles a desarrollar una curiosidad informada."
    },
    {
        name: "CIS Accredited",
        fullName: "Council of International Schools",
        component: <CISLogo />,
        desc: isEn 
            ? "CIS is a membership community committed to high quality international education through professional services to schools."
            : "CIS es una comunidad comprometida con la educación internacional de alta calidad a través de servicios profesionales."
    },
    {
        name: "NEASC",
        fullName: "New England Association of Schools and Colleges",
        component: <div className="font-black text-blue-900 text-5xl tracking-tighter">NEASC</div>,
        desc: isEn 
            ? "NEASC is an independent, non-profit organization which connects and serves over 1,500 public, independent, and international schools."
            : "NEASC es una organización independiente y sin fines de lucro que conecta y sirve a más de 1,500 escuelas internacionales."
    }
  ];

  return (
    <PageLayout 
        title={isEn ? "Accreditations" : "Acreditaciones"} 
        breadcrumbs={[
            { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
            { label: isEn ? "About Us" : "Quiénes somos", href: "#" },
            { label: isEn ? "Accreditations" : "Acreditaciones" }
        ]} 
        bannerImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono font-black text-vault-wine tracking-[0.3em] uppercase mb-4">
            {isEn ? "// GLOBAL RECOGNITION" : "// RECONOCIMIENTO GLOBAL"}
        </h2>
        <div className="w-24 h-1.5 bg-vault-yellow mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {items.map((item) => (
            <div key={item.name} className="flex flex-col bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group border-b-8 hover:border-vault-yellow">
                <div className="flex items-center justify-center h-40 mb-10 transition-transform duration-700 group-hover:scale-105">
                    {item.component}
                </div>
                <div className="flex-grow flex flex-col">
                    <h4 className="text-2xl font-black text-vault-darkWine uppercase tracking-tight mb-2 italic">{item.name}</h4>
                    <p className="text-[10px] text-vault-wine font-black uppercase tracking-widest mb-6 opacity-60">{item.fullName}</p>
                    <p className="text-gray-600 font-medium leading-relaxed flex-grow">
                        {item.desc}
                    </p>
                </div>
            </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-vault-darkWine rounded-[3rem] text-white shadow-2xl relative overflow-hidden text-center border-b-8 border-vault-yellow">
        <div className="relative z-10">
            <p className="text-xl md:text-2xl font-black uppercase tracking-tighter italic max-w-3xl mx-auto leading-tight">
                {isEn 
                    ? "Colegio IDS is committed to maintaining the highest international standards of academic excellence and institutional integrity."
                    : "Colegio IDS se compromete a mantener los más altos estándares internacionales de excelencia académica e integridad institucional."}
            </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Accreditations;