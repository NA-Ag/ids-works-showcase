import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Shield, Lock, Activity, ChevronLeft, Layout, Globe, Layers } from 'lucide-react';

export const PlaceholderDemo: React.FC = () => {
  const location = useLocation();
  const isLite = location.pathname.includes('lite');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    title: isLite ? 'PROTOCOLO LITE' : 'PROTOCOLO INTEGRADO',
    icon: isLite ? Globe : Layers,
    description: isLite 
      ? 'La simulación de identidad básica y despliegue de dominio oficial está siendo procesada.'
      : 'La arquitectura de alta fidelidad con módulos de pago y bases de datos está en fase de despliegue.',
    status: isLite ? 'VALIDANDO DOMINIO' : 'CONSTRUYENDO MÓDULOS DE PAGO',
    progress: isLite ? '85%' : '40%'
  };

  return (
    <div className="min-h-screen bg-vault-darkBlue flex flex-col items-center justify-center p-6 text-white font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      <div className="relative z-10 max-w-2xl w-full space-y-12 text-center">
        <div className="inline-flex items-center gap-2 bg-vault-yellow text-vault-darkBlue px-4 py-1 rounded-sm font-mono font-black text-xs tracking-widest uppercase">
          <Activity size={14} className="animate-pulse" /> SECTOR DE PRUEBAS IDS: DESPLIEGUE EN CURSO
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto border-4 border-vault-yellow shadow-[0_0_30px_rgba(255,215,0,0.2)]">
            <content.icon size={48} className="text-vault-yellow" />
          </div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">{content.title}</h1>
          <p className="text-xl text-blue-100 font-light leading-relaxed max-w-lg mx-auto">
            {content.description}
          </p>
        </div>

        <div className="bg-black/30 border-2 border-white/10 p-8 rounded-xl backdrop-blur-md space-y-6">
          <div className="flex justify-between items-end">
            <div className="text-left">
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold mb-1">Estatus del Sistema</p>
              <p className="text-sm font-mono text-vault-yellow font-black uppercase tracking-tight">{content.status}</p>
            </div>
            <p className="text-2xl font-black font-mono text-vault-yellow">{content.progress}</p>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-vault-yellow transition-all duration-1000 shadow-[0_0_10px_rgba(255,215,0,0.5)]" 
              style={{ width: content.progress }}
            ></div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-white/5">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-vault-yellow animate-ping"></div>
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Sincronizando con base de datos local...</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/demos" className="bg-white text-vault-darkBlue px-10 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-vault-yellow transition-all flex items-center justify-center gap-3">
            <ChevronLeft size={16} /> Volver a Prototipos
          </Link>
          <Link to="/demos/standard" className="bg-vault-blue text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-vault-darkBlue transition-all flex items-center justify-center gap-3">
            Ver Modelo Estándar (Activo) <ChevronLeft size={16} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};