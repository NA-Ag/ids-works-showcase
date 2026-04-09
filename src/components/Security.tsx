import React from 'react';
import { Section } from './Section';
import { ShieldCheck, Lock, EyeOff, ServerOff, Users, DatabaseZap } from 'lucide-react';

const SECURITY_CARDS = [
  {
    id: 'sec1',
    title: 'Resiliencia Estructural',
    description: 'Nuestra arquitectura de sitio estático elimina los vectores de ataque comunes como inyecciones SQL y vulnerabilidades de servidor, garantizando que su portal sea una fortaleza inquebrantable.',
    icon: DatabaseZap
  },
  {
    id: 'sec2',
    title: 'Soberanía de Datos',
    description: 'Toda la identidad y documentos residen exclusivamente en el centro de datos de Microsoft. Su institución mantiene el control absoluto sin intermediarios ni nubes privadas vulnerables.',
    icon: Lock
  },
  {
    id: 'sec3',
    title: 'Privacidad Blindada',
    description: 'Diseñamos bajo el estándar de cero filtraciones, asegurando el cumplimiento total con las normativas de protección de datos personales y minimizando la superficie de exposición institucional.',
    icon: EyeOff
  },
  {
    id: 'sec4',
    title: 'Protección de Menores',
    description: 'Entorno de comunicación cerrado y monitoreado. Centralizamos la interacción académica para prevenir el uso de plataformas externas no supervisadas por la dirección del plantel.',
    icon: Users
  }
];

export const Security: React.FC = () => {
  return (
    <Section id="security" variant="dark" className="bg-slate-900">
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono font-bold text-vault-yellow tracking-[0.3em] uppercase mb-3">
          Protocolo de Blindaje
        </h2>
        <h3 className="text-4xl font-black text-white mb-6">
          Seguridad Institucional Total
        </h3>
        <p className="max-w-3xl mx-auto text-blue-100 font-light leading-relaxed">
          Salvaguardando la integridad de su comunidad para las generaciones del mañana. Implementamos protocolos de blindaje digital grado institucional que aseguran la información más valiosa de su plantel, garantizando un entorno de paz y control absoluto dentro del ecosistema Microsoft 365.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SECURITY_CARDS.map((item) => (
          <div 
            key={item.id}
            className="group bg-slate-800/50 p-8 border-b-4 border-vault-blue hover:border-vault-yellow transition-all duration-300 shadow-xl relative overflow-hidden"
          >
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-vault-yellow opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

            <div className="mb-6 inline-block p-4 bg-vault-yellow/10 rounded-full group-hover:bg-vault-yellow/20 transition-colors">
              <item.icon className="w-8 h-8 text-vault-yellow transition-colors" />
            </div>
            
            <h4 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-vault-yellow transition-colors uppercase tracking-tighter">
              {item.title}
            </h4>
            
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              {item.description}
            </p>

            <div className="mt-6 w-8 h-1 bg-slate-700 group-hover:bg-vault-yellow transition-colors"></div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.5em] animate-pulse">
          // Estatus del Sistema: Protección Activa // Cifrado AES-256 Detectado //
        </p>
      </div>
    </Section>
  );
};