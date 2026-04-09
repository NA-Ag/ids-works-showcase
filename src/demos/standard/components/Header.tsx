import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Search, Globe, ChevronDown, ChevronUp, Facebook, Twitter, Instagram, Youtube, MessageCircle, Music, Shield, RefreshCcw } from 'lucide-react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/standard/context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { ColegioIDSLogo } from './IDSLogo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { language, setLanguage, resetCMS } = useLanguage();
  const data = getSchoolData(language);
  const location = useLocation();

  const handleReset = () => {
    resetCMS();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query.includes('lib') || query.includes('bib')) {
        window.location.href = '/demos/standard/about-us/library';
    } else if (query.includes('adm') || query.includes('ins')) {
        window.location.href = '/demos/standard/admissions';
    } else if (query.includes('con') || query.includes('tel')) {
        window.location.href = '/demos/standard/contact';
    } else if (query.includes('log') || query.includes('int')) {
        window.location.href = '/demos/standard/login';
    }
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileSubmenu = (label: string) => {
    if (expandedMobileMenu === label) {
      setExpandedMobileMenu(null);
    } else {
      setExpandedMobileMenu(label);
    }
  };

  const isActive = (href: string, subItems?: any[]) => {
    if (location.pathname === href) return true;
    if (subItems) {
      return subItems.some(sub => location.pathname === sub.href);
    }
    return false;
  };

  const NavLink = ({ href, children, className, onClick }: { href: string, children: React.ReactNode, className?: string, onClick?: () => void }) => {
      const isInternal = href.startsWith('/');
      if (isInternal) {
          return <Link to={href} className={className} onClick={onClick}>{children}</Link>;
      }
      return <a href={href} className={className} onClick={onClick}>{children}</a>;
  };

  return (
    <header className="fixed w-full z-[100] bg-white shadow-md transition-all duration-300">
      
      {/* Top Bar */}
      <div className={`container mx-auto px-4 lg:px-12 bg-gray-50 border-b border-gray-100 transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="flex justify-between items-center h-full text-xs font-medium text-gray-600">
            <div className="flex items-center gap-6">
                <a href={`tel:${data.phone}`} className="flex items-center hover:text-vault-blue transition-colors">
                    <Phone className="w-3 h-3 mr-2 text-[#B8860B]" />
                    {data.phone}
                </a>
                <button 
                    onClick={handleReset}
                    className="flex items-center gap-2 px-3 py-1 bg-vault-yellow/20 text-vault-darkBlue rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-vault-yellow transition-all"
                >
                    <RefreshCcw size={10} /> {language === 'en' ? 'Reset Demo' : 'Reiniciar Demo'}
                </button>
            </div>
            
            <div className="flex items-center space-x-2 border-l pl-4 border-gray-300 select-none">
                <span 
                    onClick={() => setLanguage('en')}
                    className={`font-bold cursor-pointer ${language === 'en' ? 'text-vault-darkBlue' : 'text-gray-400 hover:text-vault-darkBlue'}`}
                >
                    EN
                </span>
                <span className="text-gray-300">|</span>
                <span 
                    onClick={() => setLanguage('es')}
                    className={`font-bold cursor-pointer ${language === 'es' ? 'text-vault-darkBlue' : 'text-gray-400 hover:text-vault-darkBlue'}`}
                >
                    ES
                </span>
            </div>
        </div>
      </div>

      <div className={`container mx-auto px-4 lg:px-12 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <Link to="/demos/standard" className="flex items-center group">
          <ColegioIDSLogo className={isScrolled ? 'h-8' : 'h-10 md:h-12'} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-full">
          {data.navItems.map((item) => {
            const active = isActive(item.href, item.subItems);
            
            return (
              <div key={item.label} className="relative group h-full flex items-center">
                <NavLink
                  href={item.href}
                  className={`text-xs font-black uppercase tracking-widest transition-all flex items-center h-full py-6 relative ${active ? 'text-vault-blue' : 'text-vault-darkBlue hover:text-vault-blue'}`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="ml-1 w-3 h-3" />}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-[#B8860B] transition-all duration-300 transform ${active ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'}`}></div>
                </NavLink>
                
                {item.subItems && (
                  <div className="absolute left-0 top-full mt-0 w-60 bg-white shadow-xl rounded-b-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 border-t-2 border-[#B8860B]">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.label}
                        href={subItem.href}
                        className={`block px-6 py-3 text-sm transition-colors border-b border-gray-100 last:border-0 font-medium ${location.pathname === subItem.href ? 'bg-[#B8860B]/10 text-vault-blue font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-vault-darkBlue'}`}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          
          <div className="relative flex items-center">
            {isSearchOpen && (
                <form onSubmit={handleSearch} className="absolute right-full mr-4 animate-fade-in">
                    <input 
                        type="text" 
                        autoFocus
                        placeholder={language === 'en' ? "Search..." : "Buscar..."}
                        className="w-48 xl:w-64 bg-gray-50 border-2 border-vault-blue/20 rounded-full px-4 py-2 text-xs outline-none focus:border-vault-blue transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            )}
            <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full transition-colors ${isSearchOpen ? 'bg-vault-blue text-white' : 'text-vault-darkBlue hover:bg-gray-100'}`}
            >
                {isSearchOpen ? <X size={18} /> : <Search className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button - Elevated Z-Index */}
        <button
          className="lg:hidden p-2 rounded-md text-vault-darkBlue hover:bg-gray-100 z-[110] relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 overflow-y-auto`}>
        <div className="container mx-auto px-6 pb-10">
          {/* Close Header for Mobile */}
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
             <ColegioIDSLogo className="h-8" />
             <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                CLOSE <X size={16} />
             </button>
          </div>

          <div className="flex flex-col space-y-2 font-sans">
             {data.navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100 last:border-0">
              <div 
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => item.subItems ? toggleMobileSubmenu(item.label) : setIsMobileMenuOpen(false)}
              >
                <NavLink
                  href={item.href}
                  className={`text-lg font-black uppercase tracking-tight transition-colors ${isActive(item.href, item.subItems) ? 'text-vault-blue' : 'text-vault-darkBlue'}`}
                  onClick={() => {
                    if (!item.subItems) setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </NavLink>
                {item.subItems && (
                  <button className="text-vault-darkBlue p-1">
                    {expandedMobileMenu === item.label ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                )}
              </div>
              
              <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === item.label ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                {item.subItems && (
                  <div className="pl-4 space-y-3 border-l-2 border-[#B8860B]/50 ml-2">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.label}
                        href={subItem.href}
                        className={`block text-sm font-bold uppercase tracking-widest ${location.pathname === subItem.href ? 'text-vault-blue' : 'text-gray-500 hover:text-vault-blue'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col space-y-4">
             <a href={`tel:${data.phone}`} className="flex items-center text-gray-600 font-bold">
                <Phone className="w-4 h-4 mr-3 text-[#B8860B]" /> {data.phone}
             </a>
             <a href="#contact" className="flex items-center text-gray-600 font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                <Mail className="w-4 h-4 mr-3 text-[#B8860B]" /> {language === 'en' ? 'CONTACT US' : 'CONTÁCTANOS'}
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;