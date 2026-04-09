import React from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';

const PlusKinder: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const content = {
    title: isEn ? "Kinder Co-Curricular" : "Cocurricular Kinder",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
        { label: isEn ? "Enrichment" : "Enriquecimiento", href: "#" },
        { label: isEn ? "Kinder" : "Kinder" }
    ],
    sections: [
        {
            title: isEn ? "Extended Care Program" : "Programa de Horario Extendido",
            text: isEn 
                ? "A variety of activities that complement children's learning in a nurturing and caring environment."
                : "Una variedad de actividades que complementan el aprendizaje de los niños.",
            image: "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?auto=format&fit=crop&q=80&w=800",
            table: {
                headers: isEn ? ["Activities", "Day", "Time"] : ["Actividades", "Día", "Horario"],
                rows: [
                    [isEn ? "Discovery Club" : "Club de Descubrimiento", isEn ? "Mondays to Fridays" : "Lunes a Viernes", "13:15 - 17:00"],
                    [isEn ? "Creative Arts" : "Artes Creativas", isEn ? "Mondays to Fridays" : "Lunes a Viernes", "13:15 - 17:00"]
                ]
            }
        },
        {
            title: isEn ? "Specialized Activities" : "Actividades Especializadas",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
            table: {
                headers: isEn ? ["Activities", "Day", "Time"] : ["Actividades", "Día", "Horario"],
                rows: [
                    [isEn ? "Movement & Dance" : "Movimiento y Danza", isEn ? "Tuesdays and Thursdays" : "Martes y Jueves", "13:10 - 14:00"],
                    [isEn ? "Martial Arts" : "Artes Marciales", isEn ? "Mondays and Wednesdays" : "Lunes y Miércoles", "13:10 - 14:00"],
                    [isEn ? "Junior Sports" : "Deportes Junior", isEn ? "Monday & Wednesday" : "Lunes y Miércoles", "13:10 - 14:00"]
                ]
            }
        }
    ]
  };

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs} 
        bannerImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="space-y-24">
        {content.sections.map((section, idx) => (
          <div key={idx} className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-vault-darkWine border-b-2 border-vault-yellow pb-4">
              {section.title}
            </h2>
            
            {section.text && (
              <p className="text-lg text-gray-600 leading-relaxed italic">
                {section.text}
              </p>
            )}

            <div className={`grid grid-cols-1 ${section.image ? 'lg:grid-cols-2' : ''} gap-12 items-start`}>
              {section.image && (
                <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white group">
                  <img src={section.image} alt={section.title} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                </div>
              )}
              
              <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-vault-darkWine text-white">
                      {section.table.headers.map((header, i) => (
                        <th key={i} className="p-4 font-bold uppercase tracking-wider text-sm">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {section.table.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className={`p-4 text-gray-600 ${j === 0 ? 'font-bold text-vault-darkWine' : 'font-light'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default PlusKinder;