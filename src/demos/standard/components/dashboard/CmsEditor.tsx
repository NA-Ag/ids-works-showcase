import React, { useState } from 'react';
import { 
  Save, Eye, FileText, Layout, Image as ImageIcon, 
  CheckCircle, Github, Globe, Loader2, MessageSquare 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const CmsEditor = ({ isEn }: { isEn: boolean }) => {
    const { cmsData, updateCMS } = useLanguage();
    const [title, setTitle] = useState(cmsData.title);
    const [slogan, setSlogan] = useState(cmsData.slogan);
    const [bgImage, setBgImage] = useState(cmsData.heroImage);
    const [isPublishing, setIsPublishing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const images = [
        { name: "Campus", url: "https://images.unsplash.com/photo-1523050853064-dbad3507016a?auto=format&fit=crop&q=80&w=1000" },
        { name: "Library", url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000" },
        { name: "Laboratory", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" }
    ];

    const handlePublish = () => {
        setIsPublishing(true);
        setTimeout(() => {
            updateCMS({ title, slogan, heroImage: bgImage });
            setIsPublishing(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 2000);
    };

    return (
        <div className="flex flex-col lg:flex-row h-[750px] bg-white rounded-md shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
            {/* Sidebar Editor */}
            <aside className="w-full lg:w-96 bg-[#f3f2f1] border-r border-gray-200 flex flex-col shrink-0">
                <header className="p-4 bg-white border-b border-gray-200 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#0078d4] rounded flex items-center justify-center text-white">
                            <Layout size={14} />
                        </div>
                        <span className="font-bold text-xs text-gray-700 uppercase tracking-widest">Decap CMS</span>
                    </div>
                    <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded">AUTH: MS-ENTRA</span>
                </header>

                <div className="flex-grow overflow-y-auto p-6 space-y-8">
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                            <FileText size={14} /> {isEn ? "Homepage Content" : "Contenido Inicio"}
                        </h4>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-500 uppercase">{isEn ? "Main Heading" : "Título Principal"}</label>
                            <input 
                                type="text" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-3 bg-white border border-gray-200 rounded text-sm outline-none focus:border-[#0078d4] transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-500 uppercase">{isEn ? "Institutional Slogan" : "Eslogan Institucional"}</label>
                            <textarea 
                                value={slogan} 
                                onChange={(e) => setSlogan(e.target.value)}
                                className="w-full h-20 p-3 bg-white border border-gray-200 rounded text-sm outline-none focus:border-[#0078d4] transition-all font-medium resize-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-gray-200">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                            <ImageIcon size={14} /> {isEn ? "Hero Background" : "Fondo del Hero"}
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                            {images.map((img, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => setBgImage(img.url)}
                                    className={`aspect-video rounded-md cursor-pointer border-2 transition-all overflow-hidden ${bgImage === img.url ? 'border-[#0078d4] ring-2 ring-blue-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img.url} className="w-full h-full object-cover" alt={img.name} />
                                </div>
                            ))}
                        </div>
                        <p className="text-[9px] text-gray-400 italic font-medium">{isEn ? "Select an image from the school repository or upload a new one." : "Seleccione una imagen del repositorio o suba una nueva."}</p>
                    </div>
                </div>

                <footer className="p-6 bg-white border-t border-gray-200">
                    <button 
                        onClick={handlePublish}
                        disabled={isPublishing}
                        className={`w-full py-4 rounded-sm flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest transition-all ${isPublishing ? 'bg-gray-100 text-gray-400' : 'bg-[#0078d4] text-white hover:bg-[#005a9e] shadow-lg shadow-blue-500/20'}`}
                    >
                        {isPublishing ? (
                            <><Loader2 className="animate-spin" size={16} /> {isEn ? "Committing to Git..." : "Enviando a Git..."}</>
                        ) : (
                            <><Github size={16} /> {isEn ? "Sync to Production" : "Sincronizar"} Sync</>
                        )}
                    </button>
                    {showSuccess && (
                        <div className="mt-4 p-3 bg-emerald-50 text-emerald-700 rounded border border-emerald-100 flex items-center gap-2 text-[10px] font-bold animate-bounce">
                            <CheckCircle size={14} /> {isEn ? "Asset Updated & Deployed!" : "¡Activo Actualizado!"}
                        </div>
                    )}
                </footer>
            </aside>

            {/* Live Preview */}
            <main className="flex-grow bg-[#f8fafc] flex flex-col relative overflow-hidden">
                <header className="p-4 bg-white border-b border-gray-100 flex items-center gap-4 shrink-0 relative z-20">
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-grow bg-gray-100 rounded-full px-4 py-1.5 flex items-center gap-2">
                        <Globe size={12} className="text-gray-400" />
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">https://colegioids.com/preview</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-1.5 bg-gray-50 rounded text-gray-400 hover:text-[#0078d4] cursor-pointer"><Eye size={14} /></div>
                    </div>
                </header>

                <div className="flex-grow overflow-hidden relative">
                    {/* Background Layer */}
                    <img 
                        src={bgImage} 
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-105"
                        style={{ filter: 'brightness(0.4)' }}
                        alt="Preview Background"
                    />
                    
                    {/* Content Layer */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 text-white z-10">
                        <div className="max-w-xl space-y-6 animate-fade-in" key={title + bgImage}>
                            <div className="inline-block px-4 py-1 bg-vault-yellow text-vault-darkBlue text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-xl">Live Preview Mode</div>
                            <h1 className="text-5xl font-black uppercase tracking-tighter italic leading-none drop-shadow-2xl">{title}</h1>
                            <p className="text-xl font-medium italic drop-shadow-lg opacity-90">"{slogan}"</p>
                            
                            <div className="pt-8 flex justify-center gap-4">
                                <div className="px-8 py-3 bg-vault-yellow text-vault-darkBlue text-[10px] font-black uppercase tracking-widest shadow-lg">Our Vision</div>
                                <div className="px-8 py-3 border border-white text-white text-[10px] font-black uppercase tracking-widest">Learn More</div>
                            </div>
                        </div>
                    </div>

                    {/* Scanline Effect overlay for preview */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 z-15" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }}></div>
                </div>

                <div className="absolute bottom-6 right-6 z-30">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/20 flex items-center gap-4">
                        <Github className="text-gray-800" size={20} />
                        <div>
                            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Last Commited</p>
                            <p className="text-[10px] font-mono font-bold text-gray-700">6f2a1b9 • main branch</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );

};
