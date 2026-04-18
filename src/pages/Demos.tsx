import React, { useState, useEffect } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { 
  Shield, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  TrendingDown, 
  Cpu,
  Globe,
  Layout,
  Layers,
  Settings,
  Activity,
  ChevronRight,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROICalculator } from '../components/ROICalculator';

const STATUS_MESSAGES = [
  "> ANALIZANDO SUBSISTEMAS...",
  "> VALIDANDO DOMINIO INSTITUCIONAL... OK",
  "> ENCRIPTACIÓN DE NUBE... ACTIVA",
  "> INFRAESTRUCTURA LISTA PARA DESPLIEGUE.",
  "> MONITOREO DE IDENTIDAD... 100%",
  "> FIREWALL INSTITUCIONAL... ONLINE"
];

export const Demos: React.FC = () => {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % (STATUS_MESSAGES.length - 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-vault-paper font-sans">
      
      {/* 1. TECHNICAL HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-vault-darkBlue overflow-hidden border-b-8 border-vault-yellow">
        {/* Background Blueprint Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }}>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-vault-blue/20 rounded-full blur-[120px] animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-vault-yellow text-vault-darkBlue px-4 py-1 rounded-sm font-mono font-black text-xs tracking-widest uppercase">
                <Activity size={14} className="animate-pulse" /> SECTOR DE PRUEBAS IDS
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
                PROTO-<span className="text-vault-yellow italic text-5xl md:text-7xl">WORKS</span>
              </h1>
              
              <p className="text-xl text-blue-100 font-light leading-relaxed border-l-4 border-vault-yellow pl-6">
                Bienvenidos al área de despliegue institucional. Aquí podrá interactuar con las simulaciones de nuestras arquitecturas estáticas y validar el plano de soberanía digital diseñado para su plantel.
              </p>

              <div className="flex gap-4">
                <a href="#demo-selectors" className="bg-white text-vault-darkBlue px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-vault-yellow transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  Ver Prototipos <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Technical Schematic Graphic */}
            <div className="lg:w-1/2 w-full hidden lg:block">
              <div className="relative p-8 border-2 border-white/10 bg-black/30 rounded-xl backdrop-blur-md">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: Shield, label: "Integridad de Datos", val: "[ VERIFICADO ]" },
                    { icon: Globe, label: "Soberanía Digital", val: "[ 100% ACTIVA ]" },
                    { icon: Cpu, label: "Resiliencia Estática", val: "[ ÓPTIMA ]" },
                    { icon: Settings, label: "Protocolo MS-365", val: "[ CONFIGURADO ]" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-3 text-vault-yellow">
                        <item.icon size={18} />
                        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/40">{item.label}</span>
                      </div>
                      <div className="bg-emerald-500/5 border border-emerald-500/20 p-3 rounded font-mono text-emerald-400 text-sm flex items-center justify-between">
                        {item.val}
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Simulated Diagnostic Output */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="bg-black/40 p-4 rounded border border-white/5 min-h-[80px]">
                    <p className="font-mono text-[10px] text-emerald-600 animate-pulse">
                      {STATUS_MESSAGES[statusIndex]} <br/>
                      {STATUS_MESSAGES[statusIndex + 1]} <br/>
                      {STATUS_MESSAGES[statusIndex + 2]} <br/>
                      &gt; INFRAESTRUCTURA LISTA PARA DESPLIEGUE.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPARATIVE ANALYSIS REPORT */}
      <Section id="analysis" className="bg-white border-b border-gray-100 py-24">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono font-bold text-vault-blue tracking-[0.3em] uppercase mb-3">// REPORTE TÉCNICO 04-A</h2>
          <h3 className="text-4xl font-black text-vault-darkBlue uppercase tracking-tighter">Análisis de Infraestructura Contemporánea</h3>
          <p className="max-w-2xl mx-auto mt-4 text-vault-gray font-medium">Evaluación de riesgos en sistemas tradicionales vs. el estándar de soberanía digital IDS.</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Comparison Row 1: Security & Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-slate-100 p-8 border-l-8 border-slate-400 rounded-r-lg">
              <h4 className="text-xs font-mono font-bold text-slate-600 uppercase mb-4 tracking-widest text-center">Modelo Tradicional (WordPress)</h4>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3 italic">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Dependencia de bases de datos vulnerables a SQL Injection.
                </li>
                <li className="flex items-start gap-3 italic">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Plugins de terceros con brechas de seguridad críticas.
                </li>
                <li className="flex items-start gap-3 italic">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Carga lenta debido al procesamiento del servidor en tiempo real.
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 border-l-8 border-vault-blue rounded-r-lg shadow-lg">
              <h4 className="text-xs font-mono font-bold text-vault-blue uppercase mb-4 tracking-widest text-center">Infraestructura IDS (Estática)</h4>
              <ul className="space-y-4 text-sm text-vault-darkBlue font-bold">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-vault-blue shrink-0 mt-0.5" /> Arquitectura sin base de datos local: Inmune a ransomware común.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-vault-blue shrink-0 mt-0.5" /> Código pre-renderizado: Velocidad de carga inferior a 1 segundo.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-vault-blue shrink-0 mt-0.5" /> Seguridad de grado institucional sin actualizaciones manuales de riesgo.
                </li>
              </ul>
            </div>
          </div>

          {/* Comparison Row 2: Privacy & Data Sovereignty */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-slate-100 p-8 border-l-8 border-slate-400 rounded-r-lg">
              <h4 className="text-xs font-mono font-bold text-slate-600 uppercase mb-4 tracking-widest text-center">Aplicaciones Fragmentadas</h4>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3 italic">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Uso de apps de terceros que minan datos de alumnos y familias.
                </li>
                <li className="flex items-start gap-3 italic">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Información dispersa en múltiples servidores sin control oficial.
                </li>
                <li className="flex items-start gap-3 italic">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Vulnerabilidad en la comunicación (chats no institucionales).
                </li>
              </ul>
            </div>
            <div className="bg-vault-paper p-8 border-l-8 border-vault-yellow rounded-r-lg shadow-md">
              <h4 className="text-xs font-mono font-bold text-vault-darkBlue uppercase mb-4 tracking-widest text-center">Ecosistema Microsoft 365 (Unificado)</h4>
              <ul className="space-y-4 text-sm text-vault-darkBlue font-black uppercase tracking-tight">
                <li className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-vault-blue shrink-0 mt-0.5" /> Soberanía Total: Los datos nunca abandonan su tenant institucional.
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-vault-blue shrink-0 mt-0.5" /> Estándar Global: Integración nativa con el sistema operativo Windows.
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-vault-blue shrink-0 mt-0.5" /> Memos, correos y archivos bajo el blindaje local.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. DEMO SELECTORS */}
      <Section id="demo-selectors" variant="light" className="py-24 bg-vault-paper">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-vault-darkBlue mb-4 uppercase tracking-tighter italic">Seleccione una Experiencia</h2>
          <p className="text-vault-gray max-w-xl mx-auto font-medium">Explore cómo se adapta nuestra tecnología a diferentes necesidades institucionales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Lite Demo Card */}
          <div className="bg-white border-2 border-gray-100 p-8 flex flex-col hover:border-vault-blue transition-all group relative overflow-hidden shadow-sm hover:shadow-xl">
            <div className="mb-6 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-vault-blue/10 transition-colors">
              <Globe className="w-8 h-8 text-gray-400 group-hover:text-vault-blue transition-colors" />
            </div>
            <h3 className="text-2xl font-black text-vault-darkBlue mb-2 uppercase">LITE</h3>
            <div className="text-[10px] font-mono text-vault-blue font-bold uppercase mb-4 tracking-widest">Entrega: 25 Días</div>
            <p className="text-sm text-gray-500 mb-8 flex-grow">
              Enfoque en velocidad pura y legitimidad institucional. Ideal para validar la eficiencia del dominio y correos oficiales.
            </p>
            <div className="pt-6 border-t border-gray-100">
              <Link 
                to="/demos/lite" 
                className="w-full bg-white border-2 border-vault-blue text-vault-darkBlue py-4 px-6 rounded-sm font-black text-center flex items-center justify-center gap-2 hover:bg-vault-blue hover:text-white transition-all uppercase tracking-widest"
              >
                Lanzar Demo <ExternalLink size={16} />
              </Link>
            </div>
          </div>

          {/* Standard Demo Card (Colegio IDS) */}
          <div className="bg-vault-darkBlue border-2 border-vault-yellow p-8 flex flex-col shadow-2xl scale-105 z-10 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 bg-vault-yellow text-vault-darkBlue text-[10px] font-mono px-4 py-1 uppercase tracking-widest font-black shadow-lg">LIVE READY</div>
            <div className="mb-6 bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
              <Layout className="w-8 h-8 text-vault-yellow" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tight">ESTÁNDAR</h3>
            <div className="text-[10px] font-mono text-vault-yellow font-bold uppercase mb-4 tracking-widest">Entrega: 80 Días</div>
            <p className="text-sm text-blue-100 mb-8 flex-grow leading-relaxed font-light">
              Infraestructura completa con bilingüismo total y arquitectura de aulas virtuales lista para despliegue.
            </p>
            <div className="pt-6 border-t border-white/10">
              <Link 
                to="/demos/standard" 
                className="w-full bg-vault-yellow text-vault-darkBlue py-4 px-6 rounded-sm font-black text-center flex items-center justify-center gap-2 hover:bg-white transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,215,0,0.2)]"
              >
                Lanzar Demo <ExternalLink size={16} />
              </Link>
              <p className="mt-4 text-[9px] font-mono text-center text-vault-yellow/60 uppercase tracking-tighter">Basado en Colegio IDS</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. FINAL CTA SECTION */}
      <Section id="final-cta" variant="light" className="bg-white border-t border-gray-100 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-white max-w-6xl mx-auto bg-vault-darkBlue/50 p-12 rounded-2xl border border-white/10 shadow-2xl">
          <div className="md:w-2/3 space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-white">¿Su institución está lista para el siguiente paso?</h3>
            <p className="text-blue-100 text-lg font-medium leading-relaxed">
              Dé el salto hacia una infraestructura digital blindada y eficiente. Resuelva sus dudas iniciales con nuestros especialistas sin ningún compromiso. (El diseño de arquitectura a medida y pruebas de concepto se cotizan por separado).
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-vault-darkBlue px-4 py-2 rounded-lg text-xs font-bold text-blue-100 border border-white/5">
                <CheckCircle2 size={16} className="text-vault-yellow" /> Rendimiento Superior
              </div>
              <div className="flex items-center gap-2 bg-vault-darkBlue px-4 py-2 rounded-lg text-xs font-bold text-blue-100 border border-white/5">
                <CheckCircle2 size={16} className="text-vault-yellow" /> Datos en su Control
              </div>
              <div className="flex items-center gap-2 bg-vault-darkBlue px-4 py-2 rounded-lg text-xs font-bold text-blue-100 border border-white/5">
                <CheckCircle2 size={16} className="text-vault-yellow" /> Soporte Especializado
              </div>
            </div>
          </div>
          <div className="md:w-1/3 w-full flex justify-end">
            <a href="/#contact" className="w-full md:w-auto px-8 py-5 bg-vault-yellow text-vault-darkBlue hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all font-black uppercase tracking-wider text-sm text-center block rounded-xl shadow-lg">
              Iniciar Consultoría
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};