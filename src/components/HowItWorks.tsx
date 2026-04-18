import React from 'react';
import { Section } from './Section';
import { CreditCard, Download, Key } from 'lucide-react';

const STEPS = [
  {
    icon: CreditCard,
    title: '1. Pago Seguro',
    description: 'Seleccione el módulo que su institución necesita y realice el pago de forma segura a través de MercadoPago con cualquier tarjeta o transferencia.'
  },
  {
    icon: Download,
    title: '2. Descarga Inmediata',
    description: 'Al confirmarse su pago, recibirá acceso inmediato para descargar el instalador del software directamente desde nuestros servidores seguros.'
  },
  {
    icon: Key,
    title: '3. Llave Criptográfica',
    description: 'Recibirá en su correo electrónico una llave de licencia perpetua única que activará el sistema localmente para las computadoras adquiridas.'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" variant="light" className="bg-white border-b border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono font-bold text-vault-blue tracking-[0.3em] uppercase mb-3">
          El Proceso de Compra
        </h2>
        <h3 className="text-3xl font-black text-vault-darkBlue mb-4">
          Transparente, Rápido y Automatizado
        </h3>
        <p className="max-w-2xl mx-auto text-vault-gray">
          Hemos optimizado nuestra plataforma para que adquiera su software institucional sin fricciones ni esperas. Todo el proceso toma menos de 5 minutos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        {/* Connection Line (Desktop Only) */}
        <div className="hidden md:block absolute top-1/4 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>

        {STEPS.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center text-center group">
            <div className="bg-white p-4 rounded-full border-4 border-vault-paper mb-6 group-hover:border-vault-blue transition-colors shadow-sm">
              <div className="bg-vault-paper p-4 rounded-full group-hover:bg-vault-blue group-hover:text-white transition-colors text-vault-blue">
                <step.icon size={32} />
              </div>
            </div>
            <h4 className="text-xl font-bold text-vault-darkBlue mb-3">{step.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed px-4">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};