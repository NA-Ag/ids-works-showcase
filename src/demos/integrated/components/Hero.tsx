import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
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
    <div className={`relative h-screen w-full overflow-hidden bg-vault-darkWine transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Media: Either CMS Image OR Original Playlist Video */}
      <div className={`absolute inset-0 transition-transform duration-[2s] ${isLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'}`}>
        {cmsData.heroImage ? (
            <img 
                src={cmsData.heroImage}
                alt="CMS Background"
                className="w-full h-full object-cover opacity-60 pointer-events-none select-none"
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
                className="w-full h-full object-cover opacity-60 pointer-events-none select-none mix-blend-overlay"
            >
                <source src={playlist[currentVideoIndex]} type="video/mp4" />
            </video>
        )}
        
        {/* Very Subtle Scanline Overlay */}
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)', backgroundSize: '100% 4px' }}>
        </div>
      </div>
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-vault-darkWine via-vault-darkWine/80 to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-vault-darkWine via-transparent to-transparent" />

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 lg:px-12 flex flex-col justify-center items-start text-white">
        
        {/* Award Badge */}
        <div className={`inline-flex items-center gap-3 border border-vault-yellow/50 bg-black/40 backdrop-blur-md text-vault-yellow px-6 py-2 rounded-none font-sans font-black text-xs tracking-[0.3em] uppercase mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Award size={14} /> {language === 'en' ? 'ESTABLISHED EXCELLENCE' : 'EXCELENCIA ESTABLECIDA'}
        </div>

        {/* Heading: Either CMS Title OR Original "World Class" Heading */}
        {cmsData.title ? (
            <h1 className={`font-sans text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-[0.85] uppercase tracking-tighter transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} drop-shadow-2xl`}>
                {cmsData.title.split(' ').slice(0, -1).join(' ')}<br />
                <span className="text-vault-yellow italic">{cmsData.title.split(' ').slice(-1)}</span>
            </h1>
        ) : (
            <h1 className={`font-sans text-6xl md:text-8xl lg:text-[10rem] font-black mb-10 leading-[0.85] uppercase tracking-tighter transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} drop-shadow-2xl`}>
                {language === 'en' ? 'WORLD CLASS' : 'EDUCACIÓN DE'}<br />
                <span className="text-vault-yellow italic">{language === 'en' ? 'LEADERSHIP' : 'VANGUARDIA'}</span>
            </h1>
        )}
        
        {/* Content Box: Either CMS Slogan OR Original Text Slider */}
        <div className={`relative w-full max-w-3xl min-h-[100px] md:min-h-[140px] mb-12 bg-black/30 backdrop-blur-md rounded-none border-l-4 border-vault-yellow transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'} shadow-2xl`}>
            {cmsData.slogan ? (
                <div className="p-8 md:p-10 flex items-center h-full">
                    <p className="text-xl md:text-3xl text-gray-200 font-medium leading-relaxed italic drop-shadow-lg animate-fade-in font-serif">
                        "{cmsData.slogan}"
                    </p>
                </div>
            ) : (
                data.heroSlides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 p-8 md:p-10 flex items-center transition-all duration-700 ease-in-out ${
                            index === currentSlide 
                                ? 'opacity-100 translate-y-0 visible scale-100' 
                                : 'opacity-0 translate-y-2 invisible scale-95'
                        }`}
                    >
                        <p className="text-xl md:text-3xl text-gray-200 font-medium leading-relaxed italic drop-shadow-lg font-serif">
                            "{slide}"
                        </p>
                    </div>
                ))
            )}
        </div>
        
        <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} relative z-20`}>
          <Link to="/demos/integrated/contact" className="bg-vault-yellow text-vault-darkWine px-12 py-5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-vault-darkWine transition-all shadow-2xl flex items-center justify-center rounded-none group border border-vault-yellow">
            {language === 'en' ? 'PROSPECTUS' : 'PROSPECTO'}
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link to="/demos/integrated/admissions" className="px-12 py-5 border border-white/20 bg-black/20 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-vault-darkWine hover:border-white transition-all flex items-center justify-center rounded-none backdrop-blur-md shadow-2xl">
            {language === 'en' ? 'ADMISSIONS' : 'ADMISIONES'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;