import React, { useState } from 'react';
import { Button } from './Button';
import { Shield, Lock, ArrowRight, User } from 'lucide-react';

export const MicrosoftLoginDemo: React.FC = () => {
  const [step, setStep] = useState<'start' | 'login' | 'success'>('start');
  const [email, setEmail] = useState('');

  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-gray-200 shadow-inner max-w-md mx-auto">
      {step === 'start' && (
        <div className="text-center space-y-4">
          <div className="bg-vault-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-vault-blue" />
          </div>
          <h4 className="font-bold text-vault-darkBlue uppercase tracking-widest text-sm">Demo: Autenticación Unificada</h4>
          <p className="text-xs text-vault-gray">Experimente cómo sus alumnos y staff acceden con su dominio oficial .edu.mx</p>
          <Button variant="primary" fullWidth onClick={() => setStep('login')}>
            Probar Flujo Microsoft
          </Button>
        </div>
      )}

      {step === 'login' && (
        <div className="bg-white p-8 shadow-xl border border-gray-100 animate-scale-up">
          <div className="flex items-center gap-2 mb-8">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2.5 h-2.5 bg-[#f25022]"></div>
              <div className="w-2.5 h-2.5 bg-[#7fba00]"></div>
              <div className="w-2.5 h-2.5 bg-[#00a4ef]"></div>
              <div className="w-2.5 h-2.5 bg-[#ffb900]"></div>
            </div>
            <span className="text-xl font-semibold text-gray-500 font-sans">Microsoft</span>
          </div>
          
          <h3 className="text-2xl font-semibold mb-2">Iniciar sesión</h3>
          <p className="text-sm mb-6">Usar su cuenta de Colegio Internacional</p>
          
          <input 
            type="email" 
            placeholder="alumno@colegio-internacional.edu.mx"
            className="w-full border-b border-gray-400 py-1 focus:outline-none focus:border-vault-blue mb-8"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <div className="flex justify-end gap-2">
            <Button variant="outline" className="text-sm px-6" onClick={() => setStep('start')}>Atrás</Button>
            <Button variant="primary" className="bg-[#0067b8] hover:bg-[#005da6] text-sm px-6" onClick={() => setStep('success')}>Siguiente</Button>
          </div>
        </div>
      )}

      {step === 'success' && (
        <div className="text-center space-y-4 animate-fade-in">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="font-bold text-green-800">Acceso Concedido</h4>
          <p className="text-xs text-vault-gray">
            El usuario ha sido redirigido a su clase en <strong>Microsoft Teams</strong> o a su panel en el <strong>Portal de Alumnos</strong>.
          </p>
          <div className="bg-white p-3 rounded border border-gray-100 text-left">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-full text-white"><User size={16} /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Identidad Confirmada</p>
                <p className="text-xs font-mono">{email || 'usuario@colegio.edu.mx'}</p>
              </div>
            </div>
          </div>
          <Button variant="outline" fullWidth onClick={() => setStep('start')}>Reiniciar Demo</Button>
        </div>
      )}
    </div>
  );
};