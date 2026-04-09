import React, { useState, useEffect, useRef } from 'react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
import ValuesGrid from './ValuesGrid';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Globe } from 'lucide-react';

const CountUp: React.FC<{ end: number, duration?: number, suffix?: string, prefix?: string, startTrigger: boolean }> = ({ end, duration = 2000, suffix = "", prefix = "", startTrigger }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startTrigger) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startTrigger]);

  return <span>{prefix}{count}{suffix}</span>;
};

const WelcomeSection: React.FC = () => {
  const { language } = useLanguage();
  const data = getSchoolData(language);
  // Default to visible on mobile to prevent intersection issues, otherwise false for scroll entry
  const [isVisible, setIsVisible] = useState(window.innerWidth < 768);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Award className="w-8 h-8" />, target: 60, suffix: "+", label: language === 'en' ? "Years of Excellence" : "Años de Excelencia" },
    { icon: <Users className="w-8 h-8" />, target: 8, prefix: "1:", label: language === 'en' ? "Teacher-Student Ratio" : "Ratio Profesor-Alumno" },
    { icon: <BookOpen className="w-8 h-8" />, target: 100, suffix: "%", label: language === 'en' ? "University Acceptance" : "Ingreso Universitario" },
    { icon: <Globe className="w-8 h-8" />, target: 20, suffix: "+", label: language === 'en' ? "Student Nationalities" : "Nacionalidades" },
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`py-32 bg-vault-paper border-b-8 border-vault-darkWine transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
      id="about"
    >
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* Welcome Text Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
            <h2 className="text-xs font-mono font-black text-vault-wine tracking-[0.4em] uppercase mb-6 border-b border-vault-wine pb-4 inline-block">
                // INSTITUTIONAL FOUNDATION //
            </h2>
            <h1 className="text-5xl md:text-7xl font-black text-vault-darkWine mb-8 leading-none uppercase tracking-tighter font-serif">
                {data.welcomeTitle}
            </h1>
            <div className="w-24 h-1 bg-vault-yellow mx-auto mb-10"></div>
            <p className="text-gray-600 text-2xl leading-relaxed font-medium mb-12 italic border-l-4 border-vault-yellow pl-8 text-left">
                "{data.welcomeMessage}"
            </p>
            <Link 
                to="/demos/integrated/about-us/mission-vision-values" 
                className="inline-block bg-vault-darkWine text-vault-yellow border border-vault-yellow px-12 py-5 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-vault-yellow hover:text-vault-darkWine transition-all rounded-none shadow-2xl"
            >
                {language === 'en' ? 'OUR PHILOSOPHY' : 'NUESTRA FILOSOFÍA'}
            </Link>
        </div>

        {/* Institutional Metrics Bar with Snappy Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {stats.map((stat, i) => (
                <div 
                    key={i} 
                    className={`flex flex-col items-center text-center p-12 bg-white border border-gray-200 rounded-none shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden`}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-vault-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="text-vault-wine mb-6 transform group-hover:scale-110 transition-transform duration-500">
                        {stat.icon}
                    </div>
                    <div className="text-6xl font-black text-vault-darkWine leading-none mb-4 font-serif italic">
                        <CountUp 
                            end={stat.target} 
                            prefix={stat.prefix} 
                            suffix={stat.suffix} 
                            startTrigger={isVisible} 
                        />
                    </div>
                    <div className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-widest">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>

        {/* Values Section */}
        <div className="border-t border-gray-200 pt-24 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-vault-paper px-8 text-vault-yellow">
                <Award size={32} />
            </div>
            <div className="text-center mb-16">
                <h3 className="text-4xl font-black text-vault-darkWine uppercase tracking-tighter font-serif">{data.resources.characterTitle}</h3>
            </div>
            <ValuesGrid />
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;