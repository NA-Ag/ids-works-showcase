import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, LayoutGrid, Baby, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useLite } from '../context/LiteContext';
import { ColegioIDSLogo } from '@/demos/standard/components/IDSLogo';

interface HeaderProps {
  onOpenLogin?: () => void;
  onOpenAdmissions?: () => void;
  onOpenCalendar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenLogin, onOpenAdmissions, onOpenCalendar }) => {
  const { view, setView, isKinder, config } = useLite();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Propuesta', href: '#propuesta' },
    { label: 'Academia', href: '#academia' },
    { label: 'Valores', href: '#valores' },
    { label: 'Campus', href: '#campus' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const logoColor = config.theme.primaryTextColor;
  const bgColor = config.theme.primaryBgColor;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      {/* Top Bar - Clean and Professional */}
      <div className={`bg-gray-50 border-b border-gray-100 transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="container mx-auto px-6 h-full flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone size={12} className={logoColor} /> {config.contact.phone}</span>
            <span className="flex items-center gap-2 lowercase tracking-normal font-bold"><Mail size={12} className={logoColor} /> {config.contact.email}</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
             <span className="text-gray-300">|</span>
             <button onClick={onOpenAdmissions} className="hover:text-vault-darkBlue cursor-pointer transition-colors uppercase">Admisiones 2026</button>
             <span className="text-gray-300">|</span>
             <button onClick={onOpenCalendar} className="hover:text-vault-darkBlue cursor-pointer transition-colors uppercase">Calendario Escolar</button>
          </div>
        </div>
      </div>

      <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        {/* Real School Name Simulation */}
        <Link to="/demos/lite" className="flex items-center space-x-3 group cursor-pointer">
          <ColegioIDSLogo className={isScrolled ? 'h-8' : 'h-10'} />
        </Link>

        {/* View Toggle - Segmented Control */}
        <div className="hidden lg:flex bg-gray-100 p-1 rounded-lg border border-gray-200">
          <button 
            onClick={() => setView('general')}
            className={`px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${view === 'general' ? 'bg-white text-vault-blue shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Demo General
          </button>
          <button 
            onClick={() => setView('kinder')}
            className={`px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${view === 'kinder' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Demo Preescolar
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => {
                e.preventDefault();
                if (isKinder) {
                   confetti({
                      particleCount: 50,
                      spread: 60,
                      origin: { y: 0.1, x: e.clientX / window.innerWidth },
                      colors: ['#fbcfe8', '#fcd34d', '#bae6fd']
                   });
                }
                document.getElementById(item.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative py-2"
            >
              <span className="text-[10px] font-black text-vault-darkBlue hover:text-vault-blue transition-colors uppercase tracking-[0.2em]">
                {item.label}
              </span>
              <div className={`absolute bottom-0 left-0 w-full h-0.5 ${bgColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </a>
          ))}
          <div className="h-6 w-px bg-gray-200"></div>
          <button 
            onClick={onOpenLogin}
            className={`flex items-center gap-2 ${bgColor} text-white px-5 py-2.5 rounded-sm font-black uppercase text-[10px] tracking-widest hover:shadow-lg hover:opacity-90 transition-all active:scale-95`}
          >
            <LogIn size={14} /> Acceso MS-365
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-vault-darkBlue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full p-8 shadow-2xl space-y-8 animate-fade-in">
          {/* Mobile View Toggle */}
          <div className="bg-gray-100 p-1 rounded-lg border border-gray-200 flex">
            <button onClick={() => { setView('general'); setIsMobileMenuOpen(false); }} className={`flex-1 py-3 rounded-md text-xs font-black uppercase tracking-widest ${view === 'general' ? 'bg-white text-vault-blue shadow-sm' : 'text-gray-400'}`}>Demo General</button>
            <button onClick={() => { setView('kinder'); setIsMobileMenuOpen(false); }} className={`flex-1 py-3 rounded-md text-xs font-black uppercase tracking-widest ${view === 'kinder' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`}>Demo Preescolar</button>
          </div>

          <div className="space-y-6">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="block text-xl font-black text-vault-darkBlue uppercase tracking-tighter" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById(item.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;