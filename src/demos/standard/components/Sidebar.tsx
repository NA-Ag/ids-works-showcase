import React from 'react';
import { NavItem } from '../types/types';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';
import { useLocation, Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const location = useLocation();

  // Determine which menu to show based on current path
  const isAboutSection = location.pathname.includes('/about-us');
  const isEnrichmentSection = location.pathname.includes('/plus');
  const isProgrammesSection = ['/kinder', '/primary', '/secondary', '/high-school'].some(path => location.pathname.includes(path)) && !isEnrichmentSection;
  const isAdmissionsSection = location.pathname.includes('/admissions') || location.pathname.includes('/testimonials');

  let sidebarMenu = null;
  
  if (isAboutSection) {
    sidebarMenu = data.navItems.find(item => item.label === 'About Us' || item.label === 'Quiénes Somos');
  } else if (isEnrichmentSection) {
    sidebarMenu = data.navItems.find(item => item.label === 'Enrichment' || item.label === 'Cocurricular');
  } else if (isProgrammesSection) {
    sidebarMenu = data.navItems.find(item => item.label === 'Academic Offering' || item.label === 'Oferta Académica');
  } else if (isAdmissionsSection) {
    sidebarMenu = data.navItems.find(item => item.label === 'Admissions' || item.label === 'Admisiones');
  }

  if (!sidebarMenu || !sidebarMenu.subItems) return null;

  return (
    <div className="w-full lg:w-1/4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-vault-darkBlue px-6 py-4 border-b border-vault-yellow">
            <h3 className="font-black text-[10px] text-vault-yellow uppercase tracking-[0.3em]">
                {sidebarMenu.label}
            </h3>
        </div>
        <nav className="p-4 bg-gray-50/50">
            <ul className="space-y-1">
            {sidebarMenu.subItems.map((item, idx) => {
                const isActive = location.pathname === item.href;

                return (
                <li key={item.label}>
                    <Link 
                    to={item.href} 
                    className={`group flex items-center justify-between text-[11px] font-black py-4 px-5 rounded-xl transition-all uppercase tracking-widest border-2 ${isActive ? 'bg-white border-vault-blue text-vault-blue shadow-md' : 'text-gray-400 border-transparent hover:bg-white hover:text-vault-darkBlue hover:border-gray-100'}`}
                    >
                    <span>{item.label}</span>
                    <span className={`font-mono text-[9px] ${isActive ? 'text-vault-yellow' : 'text-gray-300 group-hover:text-vault-blue'}`}>
                        0{idx + 1}
                    </span>
                    </Link>
                </li>
                );
            })}
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;