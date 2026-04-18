import React, { useState } from 'react';
import { Settings, X, Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const Modal = ({ type }: { type: 'privacy' | 'terms' }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-darkBlue/90 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-sm shadow-2xl border-t-8 border-vault-yellow relative animate-scale-up">
        <button 
          onClick={() => setModalContent(null)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-vault-darkBlue transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8 text-vault-blue">
            {type === 'privacy' ? <Shield size={32} /> : <FileText size={32} />}
            <h3 className="text-2xl font-black uppercase tracking-tighter">
              {type === 'privacy' ? 'Aviso de Privacidad' : 'Términos de Servicio'}
            </h3>
          </div>
          
          <div className="prose prose-slate text-sm text-gray-600 space-y-6 font-medium leading-relaxed">
            {type === 'privacy' ? (
              <>
                <p className="font-bold text-vault-darkBlue uppercase tracking-widest text-[10px]">I.D.S WORKS - PRIVACIDAD DE DATOS</p>
                <p>En cumplimiento con la normativa mexicana de protección de datos, I.D.S Works informa que nuestro software funciona de manera local (offline). No recolectamos, almacenamos ni procesamos información de alumnos o personal de su institución.</p>
                <p>Toda la información académica permanece dentro de la red local de su escuela, garantizando privacidad absoluta.</p>
              </>
            ) : (
              <>
                <p className="font-bold text-vault-darkBlue uppercase tracking-widest text-[10px]">I.D.S WORKS - LICENCIAS Y CONDICIONES</p>
                <p>1. <strong>Licencia Perpetua:</strong> Al adquirir un módulo de I.D.S Works, su institución obtiene una licencia de uso perpetuo para el número de equipos locales especificado en la compra. No hay cobros mensuales recurrentes.</p>
                <p>2. <strong>Propiedad del Software:</strong> La institución educativa tiene el derecho de usar el software de forma indefinida, pero no de revenderlo ni distribuir el código fuente.</p>
                <p>3. <strong>Soporte:</strong> El software se entrega como un producto terminado ("as is"). Proporcionamos manuales detallados, pero no ofrecemos soporte técnico 24/7 de forma estándar.</p>
              </>
            )}
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-100 flex justify-end">
            <button 
              onClick={() => setModalContent(null)}
              className="bg-vault-darkBlue text-white px-8 py-2 font-bold uppercase tracking-widest text-xs hover:bg-vault-blue transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-vault-darkBlue text-white py-12 border-t-4 border-vault-yellow relative">
      {modalContent && <Modal type={modalContent} />}
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center">
            <Link to="/brochure" className="inline-block border border-vault-yellow text-vault-yellow px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-vault-yellow hover:text-vault-darkBlue transition-all">
                Ver Brochure Técnico PDF
            </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
             <Settings className="w-8 h-8 text-vault-yellow animate-spin-slow" style={{ animationDuration: '10s' }} />
             <div className="flex flex-col">
               <span className="text-xl font-black tracking-tight text-white uppercase">I.D.S <span className="text-vault-yellow">Works</span></span>
             </div>
          </div>
          
          <div className="flex space-x-6">
            <button 
              onClick={() => setModalContent('privacy')}
              className="text-gray-400 hover:text-vault-yellow text-sm font-mono uppercase transition-colors"
            >
              Aviso de Privacidad
            </button>
            <button 
              onClick={() => setModalContent('terms')}
              className="text-gray-400 hover:text-vault-yellow text-sm font-mono uppercase transition-colors"
            >
              Términos de Servicio
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-mono text-center md:text-left uppercase tracking-tighter">
            &copy; {new Date().getFullYear()} I.D.S Works México.
          </p>
        </div>
      </div>
    </footer>
  );
};