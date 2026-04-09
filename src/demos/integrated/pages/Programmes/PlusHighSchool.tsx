import React from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';

const PlusHighSchool: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const content = {
    title: isEn ? "High School Co-Curricular" : "Cocurricular Preparatoria",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
        { label: isEn ? "Enrichment" : "Enriquecimiento", href: "#" },
        { label: isEn ? "High School" : "Preparatoria" }
    ],
    welcome: isEn ? "Elevate your academic and professional profile" : "Eleve su perfil académico y profesional",
    gallery: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    ],
    calendarTitle: isEn ? "Specialized Societies" : "Sociedades Especializadas",
    table: {
        headers: isEn ? ["Programme", "Focus", "Schedule"] : ["Programa", "Enfoque", "Horario"],
        rows: [
            [isEn ? "Model United Nations" : "Modelo de Naciones Unidas", isEn ? "Diplomacy & Debate" : "Diplomacia y Debate", "Fridays 15:00 - 17:00"],
            [isEn ? "Career Mentorship" : "Mentoría de Carrera", isEn ? "Industry Connections" : "Conexión con Industria", "Thursdays 15:30 - 16:30"],
            [isEn ? "Advanced Coding" : "Programación Avanzada", isEn ? "Software Development" : "Desarrollo de Software", "Wednesdays 15:00 - 16:30"],
            [isEn ? "Student Council" : "Consejo Estudiantil", isEn ? "Leadership & Legacy" : "Liderazgo y Legado", "Mondays 15:00 - 16:00"]
        ]
    }
  };

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs} 
        bannerImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="space-y-16">
        <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif font-bold text-vault-darkWine">{content.welcome}</h2>
            <div className="w-24 h-1 bg-vault-yellow mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.gallery.map((img, i) => (
                <div key={i} className="rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[3/2]">
                    <img src={img} alt={`Activity ${i+1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
            ))}
        </div>

        {/* Schedule Section */}
        <div className="max-w-4xl mx-auto space-y-10">
            <div className="flex items-center gap-6">
                <h3 className="text-3xl font-serif font-bold text-vault-darkWine">{content.calendarTitle}</h3>
                <div className="flex-grow h-px bg-gray-100"></div>
            </div>

            <div className="overflow-x-auto rounded-3xl shadow-xl border border-gray-100">
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="bg-vault-darkWine text-white">
                        {content.table.headers.map((header, i) => (
                        <th key={i} className="p-6 font-bold uppercase tracking-widest text-sm">{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                    {content.table.rows.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                        {row.map((cell, j) => (
                            <td key={j} className={`p-6 text-gray-600 ${j === 0 ? 'font-bold text-vault-darkWine' : 'font-light'}`}>
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

export default PlusHighSchool;