import React from 'react';
import { Section } from './Section';
import { PRICING_TIERS } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" variant="light">
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono font-bold text-vault-blue tracking-[0.3em] uppercase mb-3">
          Modelos de Inversión
        </h2>
        <h3 className="text-4xl font-black text-vault-darkBlue mb-6">
          Transparencia Total, Sin Rentas
        </h3>
        <p className="max-w-2xl mx-auto text-vault-gray">
          Un pago único por su infraestructura digital. Entregamos el código, el dominio y el control total de su ecosistema institucional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_TIERS.map((tier) => (
          <div 
            key={tier.id}
            className={`relative flex flex-col p-8 bg-white border-2 transition-all duration-300 ${
              tier.recommended 
                ? 'border-vault-blue shadow-2xl scale-105 z-10' 
                : 'border-gray-100 hover:border-vault-yellow shadow-sm'
            }`}
          >
            {tier.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-vault-blue text-white px-4 py-1 text-xs font-mono font-bold uppercase tracking-widest">
                Recomendado
              </div>
            )}

            <div className="mb-8">
              <h4 className="text-xl font-bold text-vault-darkBlue mb-2">{tier.name}</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-vault-blue">{tier.price}</span>
                <span className="text-vault-gray font-mono text-xs">MXN</span>
              </div>
              <p className="mt-4 text-sm text-vault-gray leading-relaxed min-h-[3rem]">
                {tier.description}
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-vault-blue shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={tier.recommended ? 'primary' : 'outline'}
              className="w-full flex items-center justify-center gap-2 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {tier.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-8 bg-vault-darkBlue text-white rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-vault-yellow">
        <div>
          <h4 className="text-xl font-bold mb-2">¿Necesita una propuesta formal para su patronato?</h4>
          <p className="text-blue-100 text-sm">Generamos documentación técnica y desglose de ROI para procesos de aprobación institucional.</p>
        </div>
        <a 
          href="/assets/IDS_Works_Brochure_Tecnico.pdf" 
          download
          className="font-mono font-bold uppercase tracking-wider transition-all duration-200 border-2 rounded-sm px-8 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 border-white text-white hover:bg-white hover:text-vault-blue whitespace-nowrap inline-flex items-center justify-center gap-2"
        >
          Descargar Brochure Técnico
        </a>
      </div>
    </Section>
  );
};