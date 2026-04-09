import React from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/standard/context/LanguageContext';

const PlusPrimary: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const content = {
    title: isEn ? "Primary Co-Curricular" : "Cocurricular Primaria",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/standard" },
        { label: isEn ? "Enrichment" : "Enriquecimiento", href: "#" },
        { label: isEn ? "Primary" : "Primaria" }
    ],
    welcome: isEn ? "Explore our primary activities" : "Explore nuestras actividades de primaria",
    gallery: [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    ],
    table: {
        headers: isEn ? ["Activities", "Day", "Time"] : ["Actividades", "Día", "Horario"],
        rows: [
            [isEn ? "Sports Club" : "Club Deportivo", isEn ? "Mondays and Wednesdays" : "Lunes y Miércoles", "14:45 - 16:00"],
            [isEn ? "Creative Arts" : "Artes Creativas", isEn ? "Tuesdays and Thursdays" : "Martes y Jueves", "14:45 - 16:00"],
            [isEn ? "Technology & Robotics" : "Tecnología y Robótica", isEn ? "Tuesdays" : "Martes", "14:30 - 16:00"],
            [isEn ? "Academic Support" : "Apoyo Académico", isEn ? "Mondays and Wednesdays" : "Lunes y Miércoles", "14:45 - 16:00"]
        ]
    }
  };

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs} 
        bannerImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="space-y-16">
        <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif font-bold text-idsBlue">{content.welcome}</h2>
            <div className="w-24 h-1 bg-idsGold mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.gallery.map((img, i) => (
                <div key={i} className="rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[3/2] group">
                    <img src={img} alt={`Activity ${i+1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                </div>
            ))}
        </div>

        {/* Activity Table */}
        <div className="overflow-x-auto rounded-3xl shadow-xl border border-gray-100">
            <table className="w-full text-left border-collapse">
                <thead>
                <tr className="bg-idsBlue text-white">
                    {content.table.headers.map((header, i) => (
                    <th key={i} className="p-6 font-bold uppercase tracking-widest text-sm">{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                {content.table.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                    {row.map((cell, j) => (
                        <td key={j} className={`p-6 text-gray-600 ${j === 0 ? 'font-bold text-idsBlue' : 'font-light'}`}>
                        {cell}
                        </td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      </div>
    </PageLayout>
  );
};

export default PlusPrimary;