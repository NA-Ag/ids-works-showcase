import React, { useState } from 'react';
import { Server, ShieldCheck, Lock, Activity, RefreshCw, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';

export const NetworkView: React.FC = () => {
  const { isServerRunning, setIsServerRunning, connectedClients } = useData();
  const [isBooting, setIsBooting] = useState(false);

  const handleToggle = () => {
    if (isServerRunning) {
      setIsServerRunning(false);
    } else {
      setIsBooting(true);
      setTimeout(() => {
        setIsServerRunning(true);
        setIsBooting(false);
      }, 1500);
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      
      {/* Banner info */}
      <div className="bg-vault-darkBlue rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 text-white">
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Servidor de Red Local</h3>
          <p className="text-blue-200 text-sm max-w-xl leading-relaxed">
            Esta computadora actúa como el "Host" principal. Otras computadoras en su escuela deben ingresar la dirección IP mostrada abajo en su navegador web para acceder al sistema. Todos los datos viajan encriptados (AES-GCM 256).
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          <button 
            onClick={handleToggle}
            disabled={isBooting}
            className={`px-8 py-3 rounded-lg font-black uppercase tracking-widest text-xs transition-all shadow-lg flex items-center gap-2 disabled:opacity-50 ${
              isServerRunning 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-emerald-500 hover:bg-emerald-600 text-white'
            }`}
          >
            {isBooting ? (
              <>Iniciando... <Loader2 size={16} className="animate-spin" /></>
            ) : isServerRunning ? (
              <>Detener Servidor <Server size={16} /></>
            ) : (
              <>Iniciar Servidor <Server size={16} /></>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Connection Details */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-6">Detalles de Conexión</h4>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-gray-600 mb-2">Dirección IP Local (Host):</p>
              <div className="bg-slate-900 rounded-lg p-4 flex items-center justify-between">
                <code className={`text-lg font-bold ${isServerRunning ? 'text-emerald-400' : 'text-gray-600'}`}>
                  http://192.168.1.105:3000
                </code>
                {isServerRunning && <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-gray-600 mb-2">Estado de Encriptación:</p>
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 flex items-start gap-3 text-emerald-800 text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold mb-1">Criptografía E2E Activa</p>
                  <p className="opacity-80">Se ha generado una llave ECDH y el tráfico está asegurado mediante AES-GCM de 256 bits sin requerir internet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connected Clients */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">Dispositivos Conectados</h4>
            <button className="text-vault-blue hover:text-vault-darkBlue transition-colors"><RefreshCw size={16} /></button>
          </div>
          
          {isServerRunning ? (
            <div className="space-y-3">
              {connectedClients.map((client, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:border-vault-blue/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded text-vault-blue"><Lock size={14} /></div>
                    <div>
                      <p className="font-bold text-sm text-vault-darkBlue">{client.name}</p>
                      <p className="text-[10px] font-mono text-gray-500">{client.ip}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded uppercase">{client.type}</p>
                    <p className="text-[10px] text-gray-400 mt-1">Desde {client.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-48 flex flex-col items-center justify-center text-gray-400">
              <Activity size={32} className="mb-3 opacity-20" />
              <p className="text-sm font-bold uppercase tracking-widest">Servidor Apagado</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};