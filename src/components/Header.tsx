import React, { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b-4 ${
        isScrolled 
          ? 'bg-vault-darkBlue border-vault-yellow shadow-lg py-2' 
          : 'bg-vault-blue border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="bg-vault-yellow p-2 rounded-full border-2 border-white group-hover:rotate-180 transition-transform duration-700">
            <Settings className="w-6 h-6 text-vault-darkBlue" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white font-sans uppercase leading-none">
              I.D.S <span className="text-vault-yellow">Works</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-bold text-sm tracking-widest hover:text-vault-yellow transition-colors font-mono uppercase"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            <Link 
              to="/demos" 
              className="bg-vault-yellow text-vault-darkBlue px-5 py-2 rounded-sm font-bold font-mono text-xs uppercase hover:bg-white transition-colors border-2 border-transparent hover:border-vault-yellow"
            >
              Demos
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-vault-yellow"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-vault-darkBlue border-t-4 border-vault-yellow absolute top-full left-0 w-full p-6 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-bold text-lg tracking-widest hover:text-vault-yellow font-mono uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
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