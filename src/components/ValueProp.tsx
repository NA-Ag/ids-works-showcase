import React from 'react';
import { Section } from './Section';
import { Shield, Zap, RefreshCw, Lock } from 'lucide-react';

const BENEFITS = [
  {
    icon: Shield,
    title: 'Privacidad Absoluta',
    description: 'Los datos de tus alumnos nunca salen de la escuela. Al funcionar en una red local (LAN), eliminas el riesgo de hackeos masivos en la nube.'
  },
  {
    icon: Zap,
    title: 'Velocidad Inmediata',
    description: 'Sin depender de la conexión a internet de la escuela. Las aplicaciones responden instantáneamente porque se ejecutan en tu propia red.'
  },
  {
    icon: RefreshCw,
    title: 'Cero Rentas Mensuales',
    description: 'La industria del software quiere cobrarte mes tras mes (SaaS). Nosotros creemos en el modelo clásico: pagas una vez y el software es tuyo.'
  },
  {
    icon: Lock,
    title: 'Licencia Perpetua',
    description: 'Nuestras licencias criptográficas offline te garantizan acceso de por vida para los equipos autorizados. Sin sorpresas.'
  }
];

export const ValueProp: React.FC = () => {
  return (
    <Section id="value-prop" variant="light" className="bg-blue-50">
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono font-bold text-vault-blue tracking-[0.3em] uppercase mb-3">
          ¿Por qué software offline?
        </h2>
        <h3 className="text-4xl font-black text-vault-darkBlue mb-6">
          Soberanía Digital para tu Escuela
        </h3>
        <p className="max-w-2xl mx-auto text-vault-gray">
          La nube no siempre es la mejor respuesta. Para las instituciones educativas, el control local de los datos y la eliminación de costos recurrentes son ventajas estratégicas inigualables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {BENEFITS.map((benefit, index) => (
          <div key={index} className="bg-white border border-gray-200 p-8 rounded-lg flex gap-6 hover:border-vault-blue transition-colors shadow-sm">
            <div className="shrink-0">
              <div className="bg-blue-50 p-3 rounded-full">
                <benefit.icon className="w-8 h-8 text-vault-blue" />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-vault-darkBlue mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};