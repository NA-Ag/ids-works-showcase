import React, { useState, useEffect } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { 
  Shield, 
  ExternalLink, 
  CheckCircle2, 
  Cpu,
  Globe,
  Layout,
  Settings,
  Activity,
  ChevronRight,
  X,
  Monitor,
  Database,
  Coffee,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const STATUS_MESSAGES = [
  "> INICIANDO ENTORNO DE PRUEBA...",
  "> CARGANDO INTERFACES LOCALES... OK",
  "> SIMULANDO CONEXIÓN SIN INTERNET... ACTIVA",
  "> MÓDULOS LISTOS PARA EXPLORACIÓN."
];

export const Demos: React.FC = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<'web' | 'admin' | 'pos'>('web');
  const [activeDemoTab, setActiveDemoTab] = useState<'web' | 'software'>('web');

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % (STATUS_MESSAGES.length - 2));
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
                <Activity size={14} className="animate-pulse" /> Área de Demostraciones
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase">
                Software <span className="text-vault-yellow italic text-5xl md:text-6xl">en Acción</span>
              </h1>
              
              <p className="text-xl text-blue-100 font-light leading-relaxed border-l-4 border-vault-yellow pl-6">
                Bienvenido a nuestro espacio de pruebas. Aquí podrá interactuar con las maquetas funcionales de nuestras aplicaciones locales y servicios web para evaluar la calidad de nuestra arquitectura.
              </p>

              <div className="flex gap-4">
                <a href="#demo-selectors" className="bg-white text-vault-darkBlue px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-vault-yellow transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  Ver Demos <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Technical Schematic Graphic */}
            <div className="lg:w-1/2 w-full hidden lg:block">
              <div className="relative p-8 border-2 border-white/10 bg-black/30 rounded-xl backdrop-blur-md">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: Shield, label: "Privacidad", val: "[ GARANTIZADA ]" },
                    { icon: Monitor, label: "Ejecución Local", val: "[ 100% ACTIVA ]" },
                    { icon: Cpu, label: "Rendimiento", val: "[ ÓPTIMO ]" },
                    { icon: Database, label: "Base de Datos", val: "[ AISLADA ]" }
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
                      &gt; INTERFACES PREPARADAS.
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
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono font-bold text-vault-blue tracking-[0.3em] uppercase mb-3">Análisis Comparativo</h2>
          <h3 className="text-4xl font-black text-vault-darkBlue uppercase tracking-tighter">Sistemas en la Nube vs Soluciones Propias</h3>
          <p className="max-w-2xl mx-auto mt-4 text-vault-gray font-medium">Evaluación transparente entre el modelo tradicional de suscripciones y la propuesta de adquisición perpetua de IDS Works.</p>
        </div>

        {/* Tabs for Analysis */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveAnalysisTab('web')}
            className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-colors border-2 ${activeAnalysisTab === 'web' ? 'bg-vault-darkBlue text-white border-vault-darkBlue' : 'border-gray-200 text-gray-500 hover:border-vault-blue'}`}
          >
            Páginas Web
          </button>
          <button 
            onClick={() => setActiveAnalysisTab('admin')}
            className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-colors border-2 ${activeAnalysisTab === 'admin' ? 'bg-vault-darkBlue text-white border-vault-darkBlue' : 'border-gray-200 text-gray-500 hover:border-vault-blue'}`}
          >
            Control Escolar
          </button>
          <button 
            onClick={() => setActiveAnalysisTab('pos')}
            className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-colors border-2 ${activeAnalysisTab === 'pos' ? 'bg-vault-darkBlue text-white border-vault-darkBlue' : 'border-gray-200 text-gray-500 hover:border-vault-blue'}`}
          >
            Punto de Venta
          </button>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          
          {activeAnalysisTab === 'web' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-fade-in">
              <div className="bg-slate-100 p-8 border-l-8 border-slate-400 rounded-r-lg">
                <h4 className="text-xs font-mono font-bold text-slate-600 uppercase mb-4 tracking-widest text-center">Servicios Tradicionales (WordPress)</h4>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3 italic">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Requieren bases de datos propensas a inyecciones de código.
                  </li>
                  <li className="flex items-start gap-3 italic">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Dependen de "plugins" que necesitan actualización constante.
                  </li>
                  <li className="flex items-start gap-3 italic">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Tiempos de carga lentos por el uso del procesador del servidor.
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-8 border-l-8 border-vault-blue rounded-r-lg shadow-lg">
                <h4 className="text-xs font-mono font-bold text-vault-blue uppercase mb-4 tracking-widest text-center">Nuestra Entrega Estática</h4>
                <ul className="space-y-4 text-sm text-vault-darkBlue font-bold">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-vault-blue shrink-0 mt-0.5" /> Entregamos código fuente puro: sin bases de datos asociadas.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-vault-blue shrink-0 mt-0.5" /> Optimizado: la página carga de forma prácticamente instantánea.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-vault-blue shrink-0 mt-0.5" /> Diseño profesional y responsivo de larga duración.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeAnalysisTab === 'admin' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-fade-in">
              <div className="bg-slate-100 p-8 border-l-8 border-slate-400 rounded-r-lg">
                <h4 className="text-xs font-mono font-bold text-slate-600 uppercase mb-4 tracking-widest text-center">Plataformas SaaS Escolares</h4>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3 italic">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Cobros recurrentes por cada alumno o usuario registrado.
                  </li>
                  <li className="flex items-start gap-3 italic">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> La información de los estudiantes se almacena en servidores externos.
                  </li>
                  <li className="flex items-start gap-3 italic">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Si falla el internet de la escuela, el trabajo se detiene.
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-50 p-8 border-l-8 border-emerald-500 rounded-r-lg shadow-lg">
                <h4 className="text-xs font-mono font-bold text-emerald-700 uppercase mb-4 tracking-widest text-center">Suite de Administración Local</h4>
                <ul className="space-y-4 text-sm text-vault-darkBlue font-bold">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Pago único por el módulo, sin importar cuántos alumnos registre.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Los datos residen exclusivamente en las computadoras de su escuela.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Funciona al 100% mediante la red local (LAN) sin requerir internet.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeAnalysisTab === 'pos' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-fade-in">
              <div className="bg-slate-100 p-8 border-l-8 border-slate-400 rounded-r-lg">
                <h4 className="text-xs font-mono font-bold text-slate-600 uppercase mb-4 tracking-widest text-center">Puntos de Venta Comerciales</h4>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3 italic">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Interfaces complejas diseñadas para retail general, no para escuelas.
                  </li>
                  <li className="flex items-start gap-3 italic">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Suscripciones caras por cada caja registradora activa.
                  </li>
                  <li className="flex items-start gap-3 italic">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Interrupciones en el servicio por mantenimiento de los servidores.
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 p-8 border-l-8 border-amber-500 rounded-r-lg shadow-lg">
                <h4 className="text-xs font-mono font-bold text-amber-700 uppercase mb-4 tracking-widest text-center">Módulo POS Escolar</h4>
                <ul className="space-y-4 text-sm text-vault-darkBlue font-bold">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" /> Diseñado específicamente para cafeterías y cooperativas escolares.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" /> Adquisición perpetua; ejecútelo en su hardware existente sin rentas.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" /> Sincronización instantánea en su red local sin retrasos.
                  </li>
                </ul>
              </div>
            </div>
          )}

        </div>
      </Section>

      {/* 3. DEMO SELECTORS */}
      <Section id="demo-selectors" variant="light" className="py-24 bg-vault-paper">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-vault-darkBlue mb-4 uppercase tracking-tighter italic">Seleccione una Experiencia</h2>
          <p className="text-vault-gray max-w-xl mx-auto font-medium">Explore cómo se adapta nuestra tecnología a diferentes necesidades institucionales.</p>
        </div>

        {/* Tabs for Demos */}
        <div className="flex justify-center gap-4 mb-16">
          <button 
            onClick={() => setActiveDemoTab('software')}
            className={`px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-widest transition-all ${activeDemoTab === 'software' ? 'bg-vault-yellow text-vault-darkBlue shadow-lg' : 'bg-white border-2 border-gray-200 text-gray-500 hover:border-vault-yellow'}`}
          >
            Software Local
          </button>
          <button 
            onClick={() => setActiveDemoTab('web')}
            className={`px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-widest transition-all ${activeDemoTab === 'web' ? 'bg-vault-yellow text-vault-darkBlue shadow-lg' : 'bg-white border-2 border-gray-200 text-gray-500 hover:border-vault-yellow'}`}
          >
            Sitios Web
          </button>
        </div>

        {activeDemoTab === 'web' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in">
            {/* Lite Demo Card */}
            <div className="bg-white border-2 border-gray-100 p-8 flex flex-col hover:border-vault-blue transition-all group relative overflow-hidden shadow-sm hover:shadow-xl">
              <div className="mb-6 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-vault-blue/10 transition-colors">
                <Globe className="w-8 h-8 text-gray-400 group-hover:text-vault-blue transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-vault-darkBlue mb-2 uppercase">BÁSICO</h3>
              <p className="text-sm text-gray-500 mb-8 flex-grow">
                Enfoque en una presentación institucional limpia y directa. Una página de inicio rápida que muestra la información vital de su colegio.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <Link
                  to="/demos/lite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-vault-blue text-vault-darkBlue py-4 px-6 rounded-sm font-black text-center flex items-center justify-center gap-2 hover:bg-vault-blue hover:text-white transition-all uppercase tracking-widest"
                >                  Lanzar Demo <ExternalLink size={16} />
                </Link>
              </div>
            </div>

            {/* Standard Demo Card (Colegio IDS) */}
            <div className="bg-vault-darkBlue border-2 border-vault-yellow p-8 flex flex-col shadow-2xl scale-105 z-10 relative overflow-hidden text-white">
              <div className="mb-6 bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
                <Layout className="w-8 h-8 text-vault-yellow" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tight">ESTÁNDAR</h3>
              <p className="text-sm text-blue-100 mb-8 flex-grow leading-relaxed font-light">
                Sitio completo con múltiples secciones para informar a padres de familia. Incluye una arquitectura robusta para expandir contenido.
              </p>
              <div className="pt-6 border-t border-white/10">
                <Link 
                  to="/demos/standard" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-vault-yellow text-vault-darkBlue py-4 px-6 rounded-sm font-black text-center flex items-center justify-center gap-2 hover:bg-white transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,215,0,0.2)]"
                >
                  Lanzar Demo <ExternalLink size={16} />
                </Link>
                <p className="mt-4 text-[9px] font-mono text-center text-vault-yellow/60 uppercase tracking-tighter">Basado en Colegio IDS</p>
              </div>
            </div>
          </div>
        )}

        {activeDemoTab === 'software' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in">
            {/* Software Placeholders */}
            <div className="bg-white border-2 border-gray-100 p-8 flex flex-col items-center text-center opacity-60 grayscale cursor-not-allowed">
              <Users className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-xl font-black text-vault-darkBlue mb-2">Administración Escolar</h3>
              <p className="text-xs text-gray-500 mb-4">Módulo de control de alumnos.</p>
              <button disabled className="bg-gray-200 text-gray-500 py-2 px-4 rounded-sm font-bold uppercase tracking-widest text-xs">Demo Próximamente</button>
            </div>
            
            <div className="bg-white border-2 border-gray-100 p-8 flex flex-col items-center text-center opacity-60 grayscale cursor-not-allowed">
              <Coffee className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-xl font-black text-vault-darkBlue mb-2">Punto de Venta</h3>
              <p className="text-xs text-gray-500 mb-4">Gestión de cafetería local.</p>
              <button disabled className="bg-gray-200 text-gray-500 py-2 px-4 rounded-sm font-bold uppercase tracking-widest text-xs">Demo Próximamente</button>
            </div>

            <div className="bg-white border-2 border-gray-100 p-8 flex flex-col items-center text-center opacity-60 grayscale cursor-not-allowed">
              <Database className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-xl font-black text-vault-darkBlue mb-2">Finanzas</h3>
              <p className="text-xs text-gray-500 mb-4">Control de colegiaturas.</p>
              <button disabled className="bg-gray-200 text-gray-500 py-2 px-4 rounded-sm font-bold uppercase tracking-widest text-xs">Demo Próximamente</button>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
};