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
            Servicios Premium
          </h2>
          <h3 className="text-4xl font-black text-vault-darkBlue uppercase tracking-tighter">
            Sitios Web <br/> de Alto Impacto
          </h3>
          <p className="text-vault-gray leading-relaxed text-lg">
            Además de nuestro software local, construimos la cara digital de tu institución. Entregamos el código fuente de plataformas ultrarrápidas y seguras.
          </p>
          
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3 text-sm font-bold text-vault-darkBlue">
              <CheckCircle2 className="text-emerald-500" size={20} /> Tecnología Jamstack (React 19)
            </li>
            <li className="flex items-center gap-3 text-sm font-bold text-vault-darkBlue">
              <CheckCircle2 className="text-emerald-500" size={20} /> Tiempos de carga inferiores a 1 segundo
            </li>
            <li className="flex items-center gap-3 text-sm font-bold text-vault-darkBlue">
              <CheckCircle2 className="text-emerald-500" size={20} /> Sin bases de datos vulnerables a hackeos
            </li>
            <li className="flex items-center gap-3 text-sm font-bold text-vault-darkBlue">
              <CheckCircle2 className="text-emerald-500" size={20} /> Entrega total del código repositorio
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
                <div>
                  <h4 className="font-bold text-xl text-vault-darkBlue">Tier Lite</h4>
                  <p className="text-sm font-mono text-gray-500">Sitio Estático Informativo</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Ideal para presencia online profesional y segura con nuestro diseño académico estandarizado.</p>
           </div>
           
           <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-vault-yellow transform lg:-translate-x-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-50 p-3 rounded-full"><LayoutTemplate className="text-vault-yellow" size={24}/></div>
                <div>
                  <h4 className="font-bold text-xl text-vault-darkBlue">Tier Estándar</h4>
                  <p className="text-sm font-mono text-gray-500">Con Gestor de Contenido (CMS)</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Incluye un CMS visual para que tu personal administrativo pueda publicar noticias y avisos fácilmente sin saber programar.</p>
           </div>
        </div>
      </div>
    </Section>
  );
};