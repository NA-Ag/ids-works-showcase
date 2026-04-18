import React from 'react';
import { Section } from './Section';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <Section id="final-cta" variant="dark" className="bg-vault-darkBlue py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          ¿Listo para modernizar su escuela?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
          Pruebe la eficiencia de nuestros sistemas hoy mismo. Sin compromisos, sin instalaciones previas. Explore nuestras maquetas funcionales directamente desde su navegador.
        </p>
        
        <Link 
          to="/demos" 
          className="inline-flex items-center gap-3 bg-vault-yellow text-vault-darkBlue px-10 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,215,0,0.3)]"
        >
          Explorar los Demos <ArrowRight size={20} />
        </Link>
      </div>
    </Section>
  );
};