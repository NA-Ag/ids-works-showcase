import React, { useState } from 'react';
import { Section } from './Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    q: '¿Cómo funciona la licencia de pago único?',
    a: 'Al comprar un módulo, recibe una llave criptográfica que activa el software de forma permanente para el número de computadoras especificado. No hay caducidad ni pagos mensuales. El software es suyo.'
  },
  {
    q: '¿Necesitamos internet para usar el software?',
    a: 'No. Todo el sistema está diseñado para funcionar en la red local (LAN) de su escuela. Solo necesita que las computadoras estén conectadas al mismo módem o switch. Su información nunca sale del edificio.'
  },
  {
    q: '¿Ofrecen soporte técnico 24/7?',
    a: 'No ofrecemos soporte técnico 24/7 para mantener nuestros precios bajos y sin rentas. Nuestro software se entrega "tal cual" (as is). Proporcionamos un manual detallado de uso y le invitamos a probar los demos de las aplicaciones antes de realizar su compra para asegurar que cumplen con sus necesidades.'
  },
  {
    q: '¿Qué pasa si cambiamos de computadoras?',
    a: 'Su licencia está ligada a su institución. Si renueva su equipo de cómputo, puede migrar su base de datos (un simple archivo local) e instalar el software en las máquinas nuevas usando su misma llave.'
  },
  {
    q: '¿Podemos solicitar modificaciones a la medida?',
    a: 'Nuestros módulos de software son productos terminados y estandarizados, lo que nos permite ofrecerlos a un costo tan bajo. Por el momento no realizamos desarrollo de software a la medida. Para nuestros Sitios Web a la Medida, entregamos el código fuente y a partir de ese momento es responsabilidad de la institución mantenerlo o modificarlo.'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" variant="light" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-sm font-mono font-bold text-vault-blue tracking-[0.3em] uppercase mb-3">
          FAQ
        </h2>
        <h3 className="text-3xl font-black text-vault-darkBlue">
          Preguntas Frecuentes
        </h3>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-vault-darkBlue">{faq.q}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-vault-blue" />
              ) : (
                <ChevronDown className="w-5 h-5 text-vault-gray" />
              )}
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 py-4 border-t border-gray-100' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};