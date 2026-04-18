import React from 'react';
import PageLayout from '../components/PageLayout';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { Quote, Star, Award, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const content = {
    title: isEn ? "Institutional Testimonials" : "Testimonios Institucionales",
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/standard" },
        { label: isEn ? "Admissions" : "Admisiones", href: "/demos/standard/admissions" },
        { label: isEn ? "Testimonials" : "Testimonios" }
    ],
    intro: isEn 
        ? "Discover the experiences of our global community. From parents witnessing their children's growth to alumni excelling in world-class universities, these stories reflect our commitment to pedagogical excellence."
        : "Descubra las experiencias de nuestra comunidad global. Desde padres que ven el crecimiento de sus hijos hasta exalumnos que destacan en universidades de clase mundial.",
    categories: [
        { title: isEn ? "Parent Perspectives" : "Perspectivas de Padres", icon: Users },
        { title: isEn ? "Alumni Success" : "Éxito de Exalumnos", icon: GraduationCap },
        { title: isEn ? "Academic Recognition" : "Reconocimiento Académico", icon: Award }
    ],
    items: [
        {
            name: "Sofia Villalobos",
            role: isEn ? "Parent of Year 9 Student" : "Madre de alumno en Año 9",
            text: isEn 
                ? "The transition to Colegio IDS was the best decision for our family. The academic rigour combined with the bicultural environment has truly prepared our daughter for a global future."
                : "La transición a Colegio IDS fue la mejor decisión para nuestra familia. El rigor académico y el ambiente bicultural han preparado a nuestra hija para un futuro global.",
            category: "Parent"
        },
        {
            name: "Dr. Julian Herzog",
            role: isEn ? "Alumni Class of 2018" : "Exalumno Generación 2018",
            text: isEn 
                ? "The IB Diploma Programme at IDS gave me the analytical foundations required for my medical degree. I felt miles ahead of my peers in my first year of university."
                : "El Programa del Diploma IB en IDS me dio las bases analíticas necesarias para mi carrera de medicina.",
            category: "Alumni"
        },
        {
            name: "Elena Richardson",
            role: isEn ? "Parent of Primary Student" : "Madre de alumno en Primaria",
            text: isEn
                ? "What impresses me most is how the teachers nurture individual curiosity. My son doesn't just learn facts; he learns how to investigate and think for himself."
                : "Lo que más me impresiona es cómo los maestros fomentan la curiosidad individual. Mi hijo no solo aprende datos; aprende a investigar.",
            category: "Parent"
        },
        {
            name: "Marcus Thorne",
            role: isEn ? "Alumni Class of 2020" : "Exalumno Generación 2020",
            text: isEn
                ? "Digital sovereignty is a reality at IDS. Learning to master professional tools early on gave me a significant edge in my Engineering studies."
                : "La soberanía digital es una realidad en IDS. Aprender a dominar herramientas profesionales me dio una ventaja significativa.",
            category: "Alumni"
        }
    ]
  };

  return (
    <PageLayout title={content.title} breadcrumbs={content.breadcrumbs} bannerImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000">
      <div className="space-y-24 animate-fade-in">
        
        {/* Intro */}
        <section className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-vault-darkBlue text-white px-6 py-2 rounded-sm font-black text-[10px] tracking-[0.4em] uppercase shadow-lg">
                <Star size={14} className="text-vault-yellow" /> {isEn ? 'VOICES OF EXCELLENCE' : 'VOCES DE EXCELENCIA'}
            </div>
            <p className="text-2xl text-vault-darkBlue font-black uppercase tracking-tighter italic leading-tight">
                "{content.intro}"
            </p>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.categories.map((cat, i) => (
                <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group hover:border-vault-yellow transition-all">
                    <div className="bg-white p-4 rounded-2xl text-vault-blue mb-6 shadow-sm group-hover:bg-vault-darkBlue group-hover:text-white transition-colors">
                        <cat.icon size={32} />
                    </div>
                    <h4 className="text-xl font-black text-vault-darkBlue uppercase tracking-tighter italic">{cat.title}</h4>
                </div>
            ))}
        </section>

        {/* Testimonials Masonry-ish Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {content.items.map((item, i) => (
                <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl relative group flex flex-col justify-between border-b-8 hover:border-idsRed transition-all">
                    <div className="absolute top-10 right-10 text-vault-blue/5">
                        <Quote size={80} />
                    </div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-vault-paper px-3 py-1 rounded-full text-[9px] font-black text-gray-400 uppercase tracking-widest mb-8 border border-vault-blue/5">
                            {item.category}
                        </div>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed italic mb-10">
                            "{item.text}"
                        </p>
                    </div>
                    <div className="pt-8 border-t border-gray-50 flex items-center gap-6 relative z-10">
                        <div className="w-16 h-16 bg-vault-paper rounded-2xl flex items-center justify-center text-vault-blue font-black text-2xl border border-vault-blue/10 uppercase">
                            {item.name.charAt(0)}
                        </div>
                        <div>
                            <h5 className="font-black text-vault-darkBlue uppercase tracking-widest text-sm">{item.name}</h5>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{item.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>

        {/* Closing CTA */}
        <div className="bg-vault-darkBlue text-white p-12 md:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden border-b-8 border-vault-yellow">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight italic">
                    {isEn ? "Join Our Legacy of Success" : "Únase a Nuestro Legado de Éxito"}
                </h3>
                <Link 
                    to="/demos/standard/admissions" 
                    className="inline-block bg-vault-yellow text-vault-darkBlue px-16 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-xl"
                >
                    {isEn ? "START ADMISSIONS PROCESS" : "INICIAR PROCESO DE ADMISIÓN"}
                </Link>
            </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Testimonials;
