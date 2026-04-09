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
    <div className="w-full">
      <div className="bg-vault-paper rounded-none shadow-2xl border-4 border-vault-darkWine overflow-hidden">
        <div className="bg-vault-darkWine px-8 py-6 border-b-4 border-vault-yellow">
            <h3 className="font-black text-xs text-vault-yellow uppercase tracking-[0.4em] text-center">
                {sidebarMenu.label}
            </h3>
        </div>
        <nav className="p-0 bg-white">
            <ul className="flex flex-col">
            {sidebarMenu.subItems.map((item, idx) => {
                const isActive = location.pathname === item.href;

                return (
                <li key={item.label} className="border-b border-gray-100 last:border-0">
                    <Link 
                    to={item.href} 
                    className={`group flex items-center justify-between text-[11px] font-black py-5 px-8 transition-all uppercase tracking-[0.2em] ${isActive ? 'bg-vault-darkWine text-vault-yellow' : 'bg-white text-gray-500 hover:bg-vault-paper hover:text-vault-darkWine hover:pl-10'}`}
                    >
                    <span>{item.label}</span>
                    <span className={`font-mono text-[9px] ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-vault-wine'}`}>
                        {idx < 9 ? `0${idx + 1}` : idx + 1}
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