import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { language, cmsData } = useLanguage();
  const data = getSchoolData(language);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playlist = [
    "/assets/media/v1.mp4",
    "/assets/media/v2.mp4",
    "/assets/media/v3.mp4"
  ];

  useEffect(() => {
    setIsLoaded(true);
    if (!cmsData.title) {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % data.heroSlides.length);
        }, 6000);
        return () => clearInterval(interval);
    }
  }, [data.heroSlides.length, cmsData.title]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % playlist.length);
  };

  useEffect(() => {
    if (videoRef.current && !cmsData.heroImage) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [currentVideoIndex, cmsData.heroImage]);

  return (
    <div className={`relative h-[80vh] w-full overflow-hidden bg-vault-darkBlue transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Media: Either CMS Image OR Original Playlist Video */}
      <div className={`absolute inset-0 transition-transform duration-[2s] ${isLoaded ? 'scale-100 blur-0' : 'scale-110 blur-xl'}`}>
        {cmsData.heroImage ? (
            <img 
                src={cmsData.heroImage}
                alt="CMS Background"
                className="w-full h-full object-cover opacity-50 pointer-events-none select-none"
            />
        ) : (
            <video 
                ref={videoRef}
                autoPlay 
                muted 
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                onEnded={handleVideoEnd}
                onContextMenu={(e) => e.preventDefault()}
                poster="/assets/media/hero-fallback.jpg"
                className="w-full h-full object-cover opacity-60 pointer-events-none select-none"
            >
                <source src={playlist[currentVideoIndex]} type="video/mp4" />
            </video>
        )}
        
        {/* Very Subtle Scanline Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}>
        </div>
      </div>
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-vault-darkBlue/90 via-vault-darkBlue/40 to-transparent" />

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 lg:px-12 flex flex-col justify-center items-start text-white">
        
        {/* Award Badge */}
        <div className={`inline-flex items-center gap-3 bg-vault-yellow text-vault-darkBlue px-4 py-1 rounded-sm font-sans font-black text-xs tracking-widest uppercase mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Award size={14} /> {language === 'en' ? 'ESTABLISHED EXCELLENCE' : 'EXCELENCIA ESTABLECIDA'}
        </div>

        {/* Heading: Either CMS Title OR Original "World Class" Heading */}
        {cmsData.title ? (
            <h1 className={`font-sans text-5xl md:text-7xl lg:text-9xl font-black mb-8 leading-[0.8] uppercase tracking-tighter transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {cmsData.title.split(' ').slice(0, -1).join(' ')}<br />
                <span className="text-vault-yellow italic">{cmsData.title.split(' ').slice(-1)}</span>
            </h1>
        ) : (
            <h1 className={`font-sans text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none uppercase tracking-tighter transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {language === 'en' ? 'World Class' : 'Educación de'}<br />
                <span className="text-vault-yellow italic">{language === 'en' ? 'Academic Success' : 'Clase Mundial'}</span>
            </h1>
        )}
        
        {/* Content Box: Either CMS Slogan OR Original Text Slider */}
        <div className={`relative w-full max-w-2xl min-h-[100px] md:min-h-[120px] mb-10 bg-white/10 backdrop-blur-md rounded-sm border-l-8 border-vault-yellow transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            {cmsData.slogan ? (
                <div className="p-8 flex items-center h-full">
                    <p className="text-xl md:text-3xl text-blue-50 font-medium leading-tight italic drop-shadow-lg animate-fade-in">
                        "{cmsData.slogan}"
                    </p>
                </div>
            ) : (
                data.heroSlides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 p-8 flex items-center transition-all duration-700 ease-in-out ${
                            index === currentSlide 
                                ? 'opacity-100 translate-y-0 visible scale-100' 
                                : 'opacity-0 translate-y-2 invisible scale-95'
                        }`}
                    >
                        <p className="text-xl md:text-2xl text-blue-50 font-medium leading-relaxed italic">
                            "{slide}"
                        </p>
                    </div>
                ))
            )}
        </div>
        
        <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} relative z-20`}>
          <Link to="/demos/standard/contact" className="bg-vault-yellow text-vault-darkBlue px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl flex items-center justify-center rounded-sm group">
            {language === 'en' ? 'Contact Us' : 'Contáctanos'}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/demos/standard/admissions" className="px-10 py-4 border-2 border-white/30 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-vault-darkBlue transition-all flex items-center justify-center rounded-sm backdrop-blur-sm">
            {language === 'en' ? 'Admissions' : 'Admisiones'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;