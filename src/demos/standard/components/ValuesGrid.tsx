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
          <div key={val.name} className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="bg-gray-50 p-6 rounded-2xl mb-6 group-hover:bg-vault-blue/10 transition-colors">
               <IconComponent className="w-12 h-12 text-vault-darkBlue group-hover:text-vault-blue transition-colors" />
            </div>
            <h4 className="text-vault-darkBlue font-serif font-bold text-xl mb-3">{val.name}</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">{val.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ValuesGrid;