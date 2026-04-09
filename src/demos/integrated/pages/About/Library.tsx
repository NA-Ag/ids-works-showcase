import React from 'react';
import PageLayout from '../../components/PageLayout';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import { getSchoolData } from '../../data/schoolData';
import { BookOpen, Globe, Clock, Library as LibraryIcon, Search, ShieldCheck, Database, Users, GraduationCap, Award, ChevronRight } from 'lucide-react';

const Library: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  const isEn = language === 'en';

  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('all');

  const resources = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", type: "Physical", cat: "Literature", year: "1925", language: "English" },
    { title: "Cien Años de Soledad", author: "Gabriel García Márquez", type: "Digital", cat: "Literature", year: "1967", language: "Spanish" },
    { title: "Introduction to Robotics", author: "IDS Tech", type: "Video", cat: "STEM", year: "2024", language: "English" },
    { title: "Physics for Secondary", author: "Cambridge", type: "Digital", cat: "STEM", year: "2023", language: "English" },
    { title: "Historia de México", author: "SEP", type: "Physical", cat: "History", year: "2022", language: "Spanish" },
    { title: "Global Economics 101", author: "Oxford", type: "Video", cat: "Economics", year: "2024", language: "English" },
  ];

  const filteredResources = resources.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || r.type.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const content = {
    title: isEn ? "IDS Multi-modal Library" : "Biblioteca Multi-modal IDS",
    // ... rest of content remains same
    breadcrumbs: [
        { label: isEn ? "Home" : "Inicio", href: "/demos/integrated" },
        { label: isEn ? "About Us" : "Quiénes somos", href: "#" },
        { label: isEn ? "Library" : "Biblioteca" }
    ],
    quote: isEn
        ? "In Colegio IDS Library, books are just the beginning of your journey!"
        : "En la Biblioteca Colegio IDS, los libros son sólo el comienzo!",
    history: {
        title: isEn ? "Overview" : "Descripción General",
        text: [
            isEn
            ? "Colegio IDS Library houses an extensive collection of books in English and Spanish, supporting our academic curriculum and recreational needs."
            : "La Biblioteca Colegio IDS alberga una extensa colección de libros en inglés y español, apoyando nuestro currículo académico.",
            isEn
            ? "Our resources are updated regularly to provide for the evolving needs of our students and staff across all levels."
            : "Nuestros recursos se actualizan periódicamente para satisfacer las necesidades de nuestros estudiantes y staff.",
            isEn
            ? "The Library is staffed by dedicated professionals available to assist pupils during school hours."
            : "La Biblioteca cuenta con profesionales dedicados disponibles para asistir a los alumnos durante el horario escolar."
        ]
    },
    servicesTitle: isEn ? "Library Services" : "Servicios de Biblioteca"
  };

  return (
    <PageLayout 
        title={content.title} 
        breadcrumbs={content.breadcrumbs} 
        bannerImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="space-y-24 animate-fade-in">
        
        {/* Intro Quote */}
        <section className="relative py-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-vault-yellow rounded-full"></div>
            <p className="text-3xl md:text-5xl font-black text-vault-darkWine text-center max-w-4xl mx-auto leading-tight pt-12 uppercase tracking-tighter italic">
                "{content.quote}"
            </p>

            {/* Library Stats Dashboard */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
                {data.library.stats.map((stat: any, idx: number) => (
                    <div key={idx} className="bg-vault-paper p-8 rounded-[2rem] border border-vault-wine/10 shadow-sm text-center hover:border-vault-yellow transition-all group">
                        <p className="text-4xl font-black text-vault-wine group-hover:scale-110 transition-transform italic tracking-tighter">{stat.value}</p>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Interactive Resource Explorer */}
        <section className="bg-white p-8 md:p-16 rounded-[4rem] border border-vault-wine/10 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <Database size={200} />
            </div>
            
            <div className="relative z-10 space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-100 pb-12">
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic">
                            {isEn ? "Resource Explorer" : "Explorador de Recursos"}
                        </h3>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{isEn ? "Unified Catalog (Physical + Digital + Video)" : "Catálogo Unificado (Físico + Digital + Video)"}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-vault-wine transition-colors" size={18} />
                            <input 
                                type="text" 
                                placeholder={isEn ? "Search catalog..." : "Buscar en catálogo..."}
                                className="pl-12 pr-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-vault-wine focus:bg-white outline-none w-full sm:w-80 transition-all font-medium text-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2 p-1 bg-gray-100 rounded-2xl shrink-0">
                            {['all', 'physical', 'digital', 'video'].map(f => (
                                <button 
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === f ? 'bg-vault-wine text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map((res, i) => (
                        <div key={i} className="group bg-gray-50 p-8 rounded-[2rem] border-2 border-transparent hover:border-vault-yellow hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-4 rounded-2xl ${res.type === 'Physical' ? 'bg-vault-wine text-white' : res.type === 'Digital' ? 'bg-emerald-600 text-white' : 'bg-[#8B0000] text-white'} transition-transform group-hover:rotate-12`}>
                                    {res.type === 'Physical' ? <LibraryIcon size={20} /> : res.type === 'Digital' ? <Globe size={20} /> : <BookOpen size={20} />}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-vault-wine transition-colors">{res.type}</span>
                            </div>
                            <h4 className="text-xl font-black text-vault-darkWine uppercase tracking-tighter italic leading-tight mb-2 group-hover:text-vault-wine transition-colors">{res.title}</h4>
                            <p className="text-gray-500 font-bold text-sm mb-6">{res.author}</p>
                            <div className="flex justify-between items-end border-t border-gray-100 pt-6">
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">{isEn ? "Category" : "Categoría"}</p>
                                    <span className="text-xs font-bold text-vault-darkWine">{res.cat}</span>
                                </div>
                                <button className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-vault-yellow hover:text-vault-darkWine hover:border-vault-yellow transition-all">
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredResources.length === 0 && (
                    <div className="py-20 text-center space-y-4">
                        <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                            <Search size={32} className="text-gray-200" />
                        </div>
                        <p className="text-gray-400 font-black uppercase tracking-widest text-sm italic">{isEn ? "No matching resources found" : "No se encontraron recursos coincidentes"}</p>
                    </div>
                )}
            </div>
        </section>

        {/* Overview Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-4 border-b-4 border-vault-yellow pb-4 w-fit">
                    <div className="bg-vault-wine p-3 rounded-xl text-white">
                        <LibraryIcon className="w-6 h-6 text-vault-yellow" />
                    </div>
                    <h3 className="text-3xl font-black text-vault-darkWine uppercase tracking-tighter italic leading-none">
                        {content.history.title}
                    </h3>
                </div>
                <div className="space-y-6">
                    {content.history.text.map((p, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed font-medium text-lg border-l-4 border-vault-paper pl-6">
                            {p}
                        </p>
                    ))}
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                    <img 
                        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000" 
                        alt="Library Main Area" 
                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-110"
                    />
                </div>
            </div>
        </section>

        {/* Services Grid */}
        <section className="bg-vault-wine -mx-4 lg:-mx-12 px-4 lg:px-12 py-24 text-white relative overflow-hidden border-b-8 border-vault-yellow">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-4">{content.servicesTitle}</h2>
                    <div className="h-1 w-24 bg-vault-yellow mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.library.services.map((service: any, idx: number) => (
                        <div key={idx} className="bg-white/10 p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/20 transition-all group flex gap-6 items-start">
                            <div className="bg-vault-yellow p-4 rounded-2xl text-vault-darkWine shrink-0 group-hover:rotate-12 transition-transform">
                                <Search size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black uppercase tracking-tighter italic mb-2">{service.title}</h4>
                                <p className="text-blue-50 font-light leading-relaxed">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <div className="bg-vault-paper p-12 md:p-24 rounded-[4rem] text-center shadow-inner relative overflow-hidden border border-vault-wine/10">
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
                <div className="space-y-6">
                    <Award className="w-12 h-12 text-vault-wine mx-auto opacity-50" />
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight italic text-vault-darkWine">
                        {isEn ? "A Sanctuary for Intellectual Inquiry and Scholarship" : "Un Santuario para la Indagación Intelectual y la Academia"}
                    </h3>
                </div>
                
                <div className="pt-8">
                    <a 
                        href="/demos/integrated/contact" 
                        className="inline-block bg-vault-wine text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-vault-darkWine hover:-translate-y-1 transition-all shadow-xl"
                    >
                        {isEn ? "INQUIRE ABOUT SCHOLARLY RESOURCES" : "SOLICITAR RECURSOS ACADÉMICOS"}
                    </a>
                </div>
            </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Library;