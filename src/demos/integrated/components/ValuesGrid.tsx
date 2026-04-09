import React from 'react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '../context/LanguageContext';
import * as LucideIcons from 'lucide-react';

const ValuesGrid: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {data.values.map((val) => {
        const IconComponent = (LucideIcons as any)[val.icon] || LucideIcons.HelpCircle;
        
        return (
          <div key={val.name} className="flex flex-col items-center text-center p-10 bg-white border border-gray-200 rounded-none shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-vault-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="bg-gray-50 p-6 rounded-none mb-6 group-hover:bg-vault-darkWine transition-colors border border-gray-100 group-hover:border-vault-darkWine">
               <IconComponent className="w-12 h-12 text-vault-wine group-hover:text-vault-yellow transition-colors" />
            </div>
            <h4 className="text-vault-darkWine font-serif font-black text-2xl mb-4 tracking-tight">{val.name}</h4>
            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xs">{val.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ValuesGrid;