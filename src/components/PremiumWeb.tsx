import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Globe, LayoutTemplate, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PremiumWeb: React.FC = () => {
  return (
    <Section id="web-templates" variant="light" className="bg-gray-50 border-t border-gray-100">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-sm font-mono font-bold text-vault-blue tracking-[0.3em] uppercase mb-3">
            Servicios a la Medida
          </h2>
          <h3 className="text-4xl font-black text-vault-darkBlue uppercase tracking-tighter">
            Sitios Web <br/> de Alto Impacto
          </h3>
          <p className="text-vault-gray leading-relaxed text-lg">
            Además de nuestro software local, construimos la cara digital de su institución. Entregamos el código fuente de plataformas modernas y eficientes.
          </p>
          
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3 text-sm font-bold text-vault-darkBlue">
              <CheckCircle2 className="text-emerald-500" size={20} /> Tecnología de última generación
            </li>
            <li className="flex items-center gap-3 text-sm font-bold text-vault-darkBlue">
              <CheckCircle2 className="text-emerald-500" size={20} /> Optimización para tiempos de carga mínimos
            </li>
            <li className="flex items-center gap-3 text-sm font-bold text-vault-darkBlue">
              <CheckCircle2 className="text-emerald-500" size={20} /> Arquitectura estática de bajo riesgo
            </li>
            <li className="flex items-center gap-3 text-sm font-bold text-vault-darkBlue">
              <CheckCircle2 className="text-emerald-500" size={20} /> Entrega total del código fuente
            </li>
          </ul>

          <div className="pt-6">
             <Link to="/demos" className="inline-flex items-center gap-2 bg-vault-darkBlue text-white px-8 py-4 font-bold uppercase tracking-widest text-xs rounded hover:bg-vault-blue transition-colors">
               Ver Demos de Sitios Web <ArrowRight size={16} />
             </Link>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full grid grid-cols-1 gap-6">
           <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-vault-blue">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-full"><Globe className="text-vault-blue" size={24}/></div>
                <div className="flex-grow">
                  <h4 className="font-bold text-xl text-vault-darkBlue">Tier Básico</h4>
                  <p className="text-sm font-mono text-gray-500">Sitio Estático Informativo</p>
                </div>
                <div className="text-right">
                  <span className="block text-xl font-black text-vault-darkBlue">$15,000 MXN</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-mono">Pago Único</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Sitio web de una sola página (Landing Page). Ideal para presencia en línea profesional con nuestro diseño académico estandarizado. Entregamos el código fuente.</p>
           </div>
           
           <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-vault-yellow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-50 p-3 rounded-full"><LayoutTemplate className="text-vault-yellow" size={24}/></div>
                <div className="flex-grow">
                  <h4 className="font-bold text-xl text-vault-darkBlue">Tier Estándar</h4>
                  <p className="text-sm font-mono text-gray-500">Sitio Multi-página Bilingüe</p>
                </div>
                <div className="text-right">
                  <span className="block text-xl font-black text-vault-darkBlue">$35,000 MXN</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-mono">Pago Único</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Sitio web completo con múltiples secciones e integración bilingüe (Inglés/Español). Entregamos el código fuente de la plataforma.</p>
           </div>
        </div>
      </div>
    </Section>
  );
};