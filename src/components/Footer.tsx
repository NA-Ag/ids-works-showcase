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
                <p className="font-bold text-vault-darkBlue uppercase tracking-widest text-[10px]">I.D.S WORKS - PROTOCOLO DE PRIVACIDAD V1.0</p>
                <p>En cumplimiento con la normativa mexicana de protección de datos, I.D.S Works informa que la información recabada en nuestro formulario de contacto se utiliza exclusivamente para iniciar la comunicación institucional y el diagnóstico técnico de su proyecto.</p>
                <p>No almacenamos bases de datos de alumnos ni registros académicos; toda la infraestructura final reside bajo el control absoluto de la institución en su propio ecosistema Microsoft.</p>
                <p>Para solicitar la eliminación de su información de contacto de nuestros registros, favor de enviar un mensaje a través de los canales oficiales proporcionados durante su proceso de consultoría.</p>
              </>
            ) : (
              <>
                <p className="font-bold text-vault-darkBlue uppercase tracking-widest text-[10px]">I.D.S WORKS - CONDICIONES DE INFRAESTRUCTURA</p>
                <p>1. <strong>Modelo de Entrega:</strong> I.D.S Works se compromete a la entrega total del código fuente y acceso administrativo global tras la liquidación del proyecto. La institución asume la responsabilidad total del manejo de sus llaves digitales una vez finalizado el periodo de vigilancia operativa.</p>
                <p>2. <strong>Propiedad Intelectual:</strong> Al concluir el proceso de Entrega, la institución educativa adquiere la propiedad absoluta del repositorio y la arquitectura implementada, sin cargos de licencia recurrente por parte de I.D.S Works.</p>
                <p>3. <strong>Servicios de Terceros:</strong> El uso del ecosistema Microsoft 365 está sujeto a los términos y condiciones de Microsoft Corporation. I.D.S Works actúa como integrador y facilitador técnico mas no como proveedor de la nube.</p>
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
               <span className="text-[10px] text-gray-400 tracking-widest uppercase">Systems Div.</span>
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
            &copy; {new Date().getFullYear()} I.D.S Works México. Control de Calidad Asegurado.
          </p>
          <div className="mt-4 md:mt-0 px-4 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] text-emerald-500 font-mono font-bold tracking-widest uppercase">
              System Status: Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};