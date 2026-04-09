import React from 'react';
import { Section } from './Section';
import { SERVICES } from '../constants';
import { MicrosoftLoginDemo } from './MicrosoftLoginDemo';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <Section id="services" variant="dark">
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono font-bold text-vault-blue tracking-[0.3em] uppercase mb-3">
          Arquitectura de Sistemas
        </h2>
        <h3 className="text-4xl font-black text-vault-darkBlue mb-6">
          Autonomía Operativa
        </h3>
        <p className="max-w-2xl mx-auto text-vault-gray">
          Potenciamos la independencia técnica de su plantel. A través de nuestra interfaz de gestión, su equipo administrativo mantiene el control total del contenido, mientras la infraestructura de la nube asegura la continuidad académica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {SERVICES.map((service) => (
          <div 
            key={service.id}
            className="group bg-white p-8 border-b-4 border-vault-blue hover:border-vault-yellow transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-vault-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

            <div className="mb-6 inline-block p-4 bg-blue-50 rounded-full group-hover:bg-yellow-50 transition-colors">
              <service.icon className="w-8 h-8 text-vault-blue group-hover:text-yellow-600 transition-colors" />
            </div>
            
            <h4 className="text-xl font-bold text-vault-darkBlue mb-3 font-sans group-hover:text-blue-700">
              {service.title}
            </h4>
            
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              {service.description}
            </p>

            <div className="mt-6 w-8 h-1 bg-gray-200 group-hover:bg-vault-yellow transition-colors"></div>
          </div>
        ))}
      </div>

      <div className="bg-vault-paper border-2 border-vault-blue/20 rounded-xl p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter">Simulación de Acceso Unificado</h3>
            <p className="text-vault-gray leading-relaxed">
              La integración con <strong>Microsoft 365 - en línea</strong> permite que una sola cuenta institucional sea la llave maestra para todo: el sitio web, las aulas virtuales en Teams y la gestión administrativa.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-bold text-vault-blue">
                <ArrowRight size={16} /> SSO (Single Sign-On) con dominio .edu.mx
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-vault-blue">
                <ArrowRight size={16} /> Seguridad de grado empresarial (MFA)
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-vault-blue">
                <ArrowRight size={16} /> Sincronización automática de grupos/clases
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <MicrosoftLoginDemo />
          </div>
        </div>
      </div>
    </Section>
  );
};