import React from 'react';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { getSchoolData } from '../data/schoolData';
import { Award, Globe, Cpu, GraduationCap, Star } from 'lucide-react';

const Timeline: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';

  const icons = [<Star />, <Globe />, <Cpu />, <GraduationCap />, <Award />];

  return (
    <div className="relative py-20 px-4 md:px-0">
      {/* Vertical Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-100 md:block hidden"></div>

      <div className="space-y-16">
        {data.timeline.map((item: any, index: number) => (
          <div key={item.year} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Year Bubble */}
            <div className="absolute left-1/2 -translate-x-1/2 md:flex hidden items-center justify-center w-12 h-12 bg-white border-4 border-vault-yellow rounded-full z-10 shadow-lg font-black text-xs text-vault-darkWine">
              {item.year.slice(2)}
            </div>

            {/* Content Card */}
            <div className="md:w-1/2 w-full">
              <div className={`p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group ${index % 2 !== 0 ? 'md:text-right md:border-r-8 md:border-vault-wine' : 'md:text-left md:border-l-8 md:border-vault-darkWine'}`}>
                <div className={`flex items-center gap-4 mb-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-3 bg-gray-50 rounded-xl text-vault-wine group-hover:bg-vault-yellow group-hover:text-vault-darkWine transition-colors">
                        {icons[index % icons.length]}
                    </div>
                    <div>
                        <span className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic">{item.year}</span>
                        <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">{item.title}</h4>
                    </div>
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Empty space for the other side on desktop */}
            <div className="md:w-1/2 md:block hidden"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
