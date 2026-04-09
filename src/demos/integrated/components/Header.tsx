import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Search, Globe, ChevronDown, ChevronUp, Facebook, Twitter, Instagram, Youtube, MessageCircle, Music, Shield, RefreshCcw } from 'lucide-react';
import { getSchoolData } from '../data/schoolData';
import { useLanguage } from '@/demos/integrated/context/LanguageContext';
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
        window.location.href = '/demos/integrated/about-us/library';
    } else if (query.includes('adm') || query.includes('ins')) {
        window.location.href = '/demos/integrated/admissions';
    } else if (query.includes('con') || query.includes('tel')) {
        window.location.href = '/demos/integrated/contact';
    } else if (query.includes('log') || query.includes('int')) {
        window.location.href = '/demos/integrated/login';
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
    <header className="fixed w-full z-[100] bg-vault-darkWine/95 backdrop-blur-md shadow-2xl transition-all duration-300 border-b border-vault-yellow/20">
      
      {/* Top Bar */}
      <div className={`container mx-auto px-4 lg:px-12 bg-black/40 border-b border-white/10 transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="flex justify-between items-center h-full text-xs font-medium text-gray-300">
            <div className="flex items-center gap-6">
                <a href={`tel:${data.phone}`} className="flex items-center hover:text-vault-yellow transition-colors">
                    <Phone className="w-3 h-3 mr-2 text-vault-yellow" />
                    {data.phone}
                </a>
                <button 
                    onClick={handleReset}
                    className="flex items-center gap-2 px-3 py-1 bg-vault-yellow/20 text-vault-yellow rounded-none text-[9px] font-black uppercase tracking-widest hover:bg-vault-yellow hover:text-vault-darkWine transition-all"
                >
                    <RefreshCcw size={10} /> {language === 'en' ? 'Reset Demo' : 'Reiniciar Demo'}
                </button>
            </div>
            
            <div className="flex items-center space-x-2 border-l pl-4 border-white/20 select-none">
                <span 
                    onClick={() => setLanguage('en')}
                    className={`font-bold cursor-pointer transition-colors ${language === 'en' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                >
                    EN
                </span>
                <span className="text-gray-600">|</span>
                <span 
                    onClick={() => setLanguage('es')}
                    className={`font-bold cursor-pointer transition-colors ${language === 'es' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                >
                    ES
                </span>
            </div>
        </div>
      </div>

      <div className={`container mx-auto px-4 lg:px-12 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-5'}`}>
        <Link to="/demos/integrated" className="flex items-center group">
          <ColegioIDSLogo className={isScrolled ? 'h-8 text-white' : 'h-10 md:h-12 text-white'} inverted={true} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-full">
          {data.navItems.map((item) => {
            const active = isActive(item.href, item.subItems);
            
            return (
              <div key={item.label} className="relative group h-full flex items-center">
                <NavLink
                  href={item.href}
                  className={`text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center h-full py-6 relative ${active ? 'text-vault-yellow' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="ml-1 w-3 h-3" />}
                  <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-vault-yellow transition-all duration-300 transform ${active ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`}></div>
                </NavLink>
                
                {item.subItems && (
                  <div className="absolute left-0 top-full mt-0 w-64 bg-vault-darkWine shadow-2xl rounded-none overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 border-t-2 border-vault-yellow">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.label}
                        href={subItem.href}
                        className={`block px-6 py-4 text-xs font-black uppercase tracking-widest transition-colors border-b border-white/5 last:border-0 ${location.pathname === subItem.href ? 'bg-vault-yellow/10 text-vault-yellow' : 'text-gray-300 hover:bg-black/20 hover:text-white hover:pl-8'}`}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          
          <div className="relative flex items-center pl-6 border-l border-white/10">
            {isSearchOpen && (
                <form onSubmit={handleSearch} className="absolute right-full mr-4 animate-fade-in">
                    <input 
                        type="text" 
                        autoFocus
                        placeholder={language === 'en' ? "SEARCH..." : "BUSCAR..."}
                        className="w-48 xl:w-64 bg-black/40 border-b-2 border-vault-yellow/50 rounded-none px-4 py-2 text-xs font-mono text-white placeholder-gray-500 outline-none focus:border-vault-yellow transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            )}
            <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-none transition-colors ${isSearchOpen ? 'bg-vault-yellow text-vault-darkWine' : 'text-gray-300 hover:text-vault-yellow'}`}
            >
                {isSearchOpen ? <X size={18} /> : <Search className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button - Elevated Z-Index */}
        <button
          className="lg:hidden p-2 rounded-none text-white hover:text-vault-yellow z-[110] relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-vault-darkWine z-[105] transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 overflow-y-auto`}>
        <div className="container mx-auto px-6 pb-10">
          {/* Close Header for Mobile */}
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/10">
             <ColegioIDSLogo className="h-8 text-white" inverted={true} />
             <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:text-white">
                CLOSE <X size={16} />
             </button>
          </div>

          <div className="flex flex-col space-y-2 font-sans">
             {data.navItems.map((item) => (
            <div key={item.label} className="border-b border-white/10 last:border-0">
              <div 
                className="flex justify-between items-center py-5 cursor-pointer"
                onClick={() => item.subItems ? toggleMobileSubmenu(item.label) : setIsMobileMenuOpen(false)}
              >
                <NavLink
                  href={item.href}
                  className={`text-xl font-black uppercase tracking-widest transition-colors ${isActive(item.href, item.subItems) ? 'text-vault-yellow' : 'text-white'}`}
                  onClick={() => {
                    if (!item.subItems) setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </NavLink>
                {item.subItems && (
                  <button className="text-white p-2">
                    {expandedMobileMenu === item.label ? <ChevronUp className="w-6 h-6 text-vault-yellow" /> : <ChevronDown className="w-6 h-6" />}
                  </button>
                )}
              </div>
              
              <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === item.label ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                {item.subItems && (
                  <div className="pl-6 space-y-4 border-l-2 border-vault-yellow/50 ml-2">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.label}
                        href={subItem.href}
                        className={`block text-xs font-black uppercase tracking-[0.2em] ${location.pathname === subItem.href ? 'text-vault-yellow' : 'text-gray-400 hover:text-white'}`}
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

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col space-y-6">
             <a href={`tel:${data.phone}`} className="flex items-center text-white font-bold tracking-widest text-sm">
                <Phone className="w-5 h-5 mr-4 text-vault-yellow" /> {data.phone}
             </a>
             <a href="#contact" className="flex items-center text-white font-bold tracking-widest text-sm uppercase" onClick={() => setIsMobileMenuOpen(false)}>
                <Mail className="w-5 h-5 mr-4 text-vault-yellow" /> {language === 'en' ? 'CONTACT US' : 'CONTÁCTANOS'}
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;