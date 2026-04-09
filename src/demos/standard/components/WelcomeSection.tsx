import React, { useState, useEffect, useRef } from 'react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
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
      className={`py-32 bg-white transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
      id="about"
    >
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* Welcome Text Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
            <h2 className="text-sm font-mono font-black text-vault-blue tracking-[0.3em] uppercase mb-6">
                // Academic Foundation
            </h2>
            <h1 className="text-5xl md:text-7xl font-black text-vault-darkBlue mb-8 leading-none uppercase tracking-tighter">
                {data.welcomeTitle}
            </h1>
            <div className="w-24 h-2 bg-vault-yellow mx-auto mb-10"></div>
            <p className="text-gray-600 text-2xl leading-relaxed font-medium mb-12 italic">
                "{data.welcomeMessage}"
            </p>
            <Link 
                to="/demos/standard/about-us/mission-vision-values" 
                className="inline-block bg-vault-darkBlue text-white px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-vault-yellow hover:text-vault-darkBlue transition-all rounded-sm shadow-2xl"
            >
                {language === 'en' ? 'OUR PHILOSOPHY' : 'NUESTRA FILOSOFÍA'}
            </Link>
        </div>

        {/* Institutional Metrics Bar with Snappy Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
            {stats.map((stat, i) => (
                <div 
                    key={i} 
                    className={`flex flex-col items-center text-center p-10 bg-gray-50 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-transparent hover:border-vault-yellow group`}
                >
                    <div className="text-[#B8860B] mb-6 transform group-hover:scale-110 transition-transform">
                        {stat.icon}
                    </div>
                    <div className="text-5xl font-black text-vault-darkBlue leading-none mb-4">
                        <CountUp 
                            end={stat.target} 
                            prefix={stat.prefix} 
                            suffix={stat.suffix} 
                            startTrigger={isVisible} 
                        />
                    </div>
                    <div className="text-xs font-mono font-black text-vault-darkBlue uppercase tracking-widest">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>

        {/* Values Section */}
        <div className="border-t-4 border-vault-yellow pt-24">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter italic">{data.resources.characterTitle}</h3>
            </div>
            <ValuesGrid />
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;