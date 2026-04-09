import React from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/standard/context/LanguageContext';

const PlusSecondary: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const content = {
    title: isEn ? "Secondary Co-Curricular" : "Cocurricular Secundaria",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/standard" },
        { label: isEn ? "Enrichment" : "Enriquecimiento", href: "#" },
        { label: isEn ? "Secondary" : "Secundaria" }
    ],
    welcome: isEn ? "Join our secondary activities" : "Únete a nuestras actividades de secundaria",
    gallery: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800"
    ],
    calendarTitle: isEn ? "Schedule" : "Horario",
    table: {
        headers: isEn ? ["Activities", "Day", "Time"] : ["Actividades", "Día", "Horario"],
        rows: [
            [isEn ? "Team Sports" : "Deportes de Equipo", isEn ? "Mondays and Wednesdays" : "Lunes y Miércoles", "14:45 - 16:00"],
            [isEn ? "Media & Journalism" : "Medios y Periodismo", isEn ? "Tuesdays" : "Martes", "14:30 - 15:30"],
            [isEn ? "Debate Club" : "Club de Debate", isEn ? "Tuesdays and Thursdays" : "Martes y Jueves", "15:00 - 16:00"],
            [isEn ? "Advanced STEM" : "STEM Avanzado", isEn ? "Tuesdays" : "Martes", "14:45 - 16:00"]
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

        {/* Schedule Section */}
        <div className="max-w-4xl mx-auto space-y-10">
            <div className="flex items-center gap-6">
                <h3 className="text-3xl font-serif font-bold text-idsBlue">{content.calendarTitle}</h3>
                <div className="flex-grow h-px bg-gray-100"></div>
            </div>

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
      </div>
    </PageLayout>
  );
};

export default PlusSecondary;