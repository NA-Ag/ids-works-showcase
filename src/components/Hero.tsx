import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ChevronRight, Shield, ArrowRight, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const TERMINAL_LINES = [
  "> INITIALIZING IDS-WORKS PROTOCOL...",
  "> BYPASSING LEGACY WORDPRESS CORE...",
  "> ESTABLISHING .edu.mx HANDSHAKE...",
  "> DEPLOYING STATIC ARCHITECTURE...",
  "> OVERRIDING MS-365 SUBSCRIPTIONS...",
  "> OPTIMIZING CAMPUS CONNECTIVITY...",
  "> SYSTEM READY: 100% AUTONOMOUS."
];

export const Hero: React.FC = () => {
  const [terminalState, setTerminalState] = useState<'booting' | 'granted' | 'preview'>('booting');
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (terminalState === 'booting') {
      if (lineIndex < TERMINAL_LINES.length) {
        const timer = setTimeout(() => setLineIndex(prev => prev + 1), 600);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setTerminalState('granted'), 1000);
        return () => clearTimeout(timer);
      }
    } else if (terminalState === 'granted') {
      const timer = setTimeout(() => setTerminalState('preview'), 1500);
      return () => clearTimeout(timer);
    } else if (terminalState === 'preview') {
      const timer = setTimeout(() => {
        setTerminalState('booting');
        setLineIndex(0);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [terminalState, lineIndex]);

  return (
    <div id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-vault-paper">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-vault-blue transform skew-x-12 translate-x-20"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 border-8 border-vault-blue rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-7xl font-black text-vault-darkBlue leading-[0.9]">
            INFRAESTRUCTURA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vault-blue to-blue-400">
              EDUCATIVA
            </span> <br />
            PARA MÉXICO.
          </h1>

          <p className="text-lg md:text-xl text-vault-gray font-medium max-w-xl leading-relaxed border-l-4 border-vault-yellow pl-6">
            Revolucionando la gestión académica para un mañana digital más brillante. Entregamos soluciones de arquitectura estática que eliminan la obsolescencia técnica, conectando su campus al ecosistema global de Microsoft 365 - en línea con la validez oficial .edu.mx.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth'})}>
              Ver Planes de Inversión
            </Button>
            <Link to="/demos" className="flex items-center justify-center gap-2 group bg-white border-2 border-vault-blue px-8 py-3 rounded-sm text-vault-darkBlue font-bold text-sm uppercase tracking-widest hover:bg-vault-blue hover:text-white transition-all">
              Explorar Demos IDS <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Hero Image/Graphic - Fallout Terminal Animated */}
        <div className="md:w-1/2 relative">
          <div className="relative z-10 bg-vault-darkBlue p-2 rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-vault-gray/20">
             <div className="bg-[#0c1410] p-1 rounded relative overflow-hidden aspect-[4/3] border-2 border-emerald-900/50">
               
               {/* Terminal Screen Scanlines */}
               <div className="absolute inset-0 pointer-events-none z-30 opacity-30" 
                    style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }}></div>
               
               {/* Terminal Content Area */}
               <div className="relative w-full h-full p-6 font-mono text-emerald-500 overflow-hidden">
                 
                 {/* State 1: Booting */}
                 {terminalState === 'booting' && (
                   <div className="space-y-1 text-xs md:text-sm animate-pulse-slow">
                     <div className="flex items-center gap-2 mb-6 border-b border-emerald-900/30 pb-2">
                       <Monitor size={16} />
                       <span className="font-bold tracking-widest uppercase">System Initialization</span>
                     </div>
                     {TERMINAL_LINES.slice(0, lineIndex).map((line, i) => (
                       <p key={i} className="opacity-90">{line}</p>
                     ))}
                     <span className="inline-block w-2 h-4 bg-emerald-500 animate-pulse ml-1"></span>
                   </div>
                 )}

                 {/* State 2: Access Granted */}
                 {terminalState === 'granted' && (
                   <div className="flex flex-col items-center justify-center h-full space-y-4">
                      <Shield size={64} className="text-emerald-400 animate-pulse" />
                      <div className="bg-emerald-500 text-[#0c1410] px-6 py-3 font-black text-center text-sm md:text-base tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(16,185,129,0.8)]">
                        ACCESO DE ADMINISTRADOR CONCEDIDO
                      </div>
                      <p className="text-[10px] tracking-widest opacity-50 uppercase">Loading Campus Portal...</p>
                   </div>
                 )}

                 {/* State 3: School Preview (Animated Scrolling Page) */}
                 {terminalState === 'preview' && (
                   <div className="absolute inset-0 flex flex-col animate-fade-in bg-vault-paper">
                      {/* Browser-like Toolbar */}
                      <div className="bg-slate-800 px-3 py-1.5 border-b border-slate-700 flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="bg-slate-900 px-2 py-0.5 rounded text-[8px] flex-grow font-mono text-slate-400">
                          https://colegio-internacional.edu.mx
                        </div>
                      </div>

                      <div className="flex-grow relative overflow-hidden bg-vault-paper">
                        {/* Fake Scrolling Content Mockup - VAULT-TEC THEMED SCHOOL SITE */}
                        <div className="absolute top-0 left-0 w-full animate-[scroll_12s_linear_infinite] space-y-0">
                          
                          {/* Mock Header */}
                          <div className="h-8 bg-vault-blue w-full flex items-center px-4 justify-between">
                            <div className="w-12 h-2 bg-vault-yellow/50 rounded-full"></div>
                            <div className="flex gap-2">
                              <div className="w-4 h-1 bg-white/30 rounded-full"></div>
                              <div className="w-4 h-1 bg-white/30 rounded-full"></div>
                              <div className="w-4 h-1 bg-white/30 rounded-full"></div>
                            </div>
                          </div>

                          {/* Mock Hero */}
                          <div className="h-32 bg-vault-darkBlue w-full flex flex-col justify-center px-6 space-y-3 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-full bg-vault-yellow/5 -skew-x-12 translate-x-10"></div>
                            <div className="w-3/4 h-4 bg-vault-yellow rounded-sm"></div>
                            <div className="w-1/2 h-2 bg-blue-300/50 rounded-sm"></div>
                            <div className="w-24 h-6 border border-vault-yellow rounded-sm mt-2"></div>
                          </div>

                          {/* Mock Values Section */}
                          <div className="p-4 bg-white grid grid-cols-3 gap-2">
                            <div className="h-16 bg-slate-50 border-b-2 border-vault-blue rounded-sm"></div>
                            <div className="h-16 bg-slate-50 border-b-2 border-vault-blue rounded-sm"></div>
                            <div className="h-16 bg-slate-50 border-b-2 border-vault-blue rounded-sm"></div>
                          </div>

                          {/* Mock Images/Grid */}
                          <div className="p-4 bg-vault-paper space-y-4">
                            <div className="h-24 bg-slate-200 rounded-lg overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
                               <div className="w-full h-full bg-gradient-to-br from-vault-blue/20 to-vault-yellow/20"></div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 w-full bg-slate-300 rounded-full"></div>
                              <div className="h-3 w-5/6 bg-slate-300 rounded-full"></div>
                            </div>
                          </div>

                          {/* Mock Footer */}
                          <div className="h-20 bg-vault-darkBlue w-full p-4">
                            <div className="w-16 h-4 bg-white/10 rounded mb-4"></div>
                            <div className="flex gap-2">
                              <div className="w-4 h-4 rounded-full bg-vault-yellow/20"></div>
                              <div className="w-4 h-4 rounded-full bg-vault-yellow/20"></div>
                              <div className="w-4 h-4 rounded-full bg-vault-yellow/20"></div>
                            </div>
                          </div>

                          {/* DUPLICATE FOR SEAMLESS SCROLL */}
                          <div className="h-8 bg-vault-blue w-full flex items-center px-4 justify-between">
                            <div className="w-12 h-2 bg-vault-yellow/50 rounded-full"></div>
                          </div>
                          <div className="h-32 bg-vault-darkBlue w-full flex flex-col justify-center px-6 space-y-3">
                            <div className="w-3/4 h-4 bg-vault-yellow rounded-sm"></div>
                            <div className="w-1/2 h-2 bg-blue-300/50 rounded-sm"></div>
                          </div>

                        </div>
                      </div>

                      <div className="h-1/4 bg-slate-900 p-4 border-t border-slate-800">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <h4 className="font-bold text-vault-yellow text-[10px] md:text-xs uppercase tracking-tighter">IDS-WORKS ACTIVE DEPLOYMENT</h4>
                            <p className="text-[8px] md:text-[10px] text-slate-500 font-mono italic">OUTPUT: ESTÁTICO / SEGURO / AUTÓNOMO</p>
                          </div>
                          <Link to="/demos" className="text-[8px] md:text-[10px] bg-vault-yellow text-vault-darkBlue px-3 py-1 rounded-sm hover:bg-white transition-colors uppercase font-black tracking-widest whitespace-nowrap shadow-[0_0_10px_rgba(255,215,0,0.3)]">
                            Ver Full Demo
                          </Link>
                        </div>
                        <div className="mt-3 h-0.5 bg-slate-800 w-full overflow-hidden">
                          <div className="h-full bg-vault-yellow w-full animate-[loading_5s_linear]"></div>
                        </div>
                      </div>
                   </div>
                 )}

               </div>

               {/* CRT Glow Effect */}
               <div className="absolute inset-0 bg-emerald-500/5 shadow-inner pointer-events-none"></div>
             </div>
             
             {/* Decorative Badge */}
             <div className="absolute -bottom-6 -right-6 bg-vault-yellow text-vault-darkBlue p-6 rounded-full border-4 border-white shadow-lg flex flex-col items-center justify-center w-32 h-32 z-40">
               <span className="font-black text-3xl font-mono">.edu</span>
               <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight">Certificado<br/>Oficial</span>
             </div>
          </div>
          
          {/* Decorative Pattern Behind */}
          <div className="absolute top-10 -right-10 w-full h-full border-4 border-dashed border-vault-blue/20 rounded-lg -z-10"></div>
        </div>

      </div>
    </div>
  );
};