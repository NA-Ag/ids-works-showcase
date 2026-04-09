import React from 'react';
import { Section } from './Section';
import { BadgeCheck, Coins, LayoutGrid } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <Section id="features" variant="blue" className="relative overflow-hidden">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20">
             <img 
               src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800" 
               alt="Tecnología robusta" 
               className="rounded-lg shadow-2xl mix-blend-overlay opacity-80"
             />
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8">
          <h3 className="text-4xl font-black text-white mb-6">
            OPTIMIZACIÓN DE <span className="text-vault-yellow">RECURSOS</span>
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-vault-yellow p-2 rounded mt-1">
                <Coins className="w-6 h-6 text-vault-darkBlue" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Ahorro Inteligente</h4>
                <p className="text-blue-100 font-light">
                  Aproveche el "Free Tier" de Microsoft para Educación. Ahorre miles de pesos anuales en licencias de software y almacenamiento.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-vault-yellow p-2 rounded mt-1">
                <LayoutGrid className="w-6 h-6 text-vault-darkBlue" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Gestión Autónoma de Contenido</h4>
                <p className="text-blue-100 font-light">
                  Una interfaz amigable para secretarias y directivos. Suba circulares, fotos y avisos sin conocimientos técnicos avanzados.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-vault-yellow p-2 rounded mt-1">
                <BadgeCheck className="w-6 h-6 text-vault-darkBlue" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Validación .edu.mx</h4>
                <p className="text-blue-100 font-light">
                  Nos encargamos del engorroso trámite burocrático para obtener su dominio educativo oficial en México.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};