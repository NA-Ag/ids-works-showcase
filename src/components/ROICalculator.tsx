import React, { useState } from 'react';
import { TrendingDown, Users, CheckCircle2, AlertTriangle, CheckSquare, Square } from 'lucide-react';

interface CostFactor {
  id: string;
  name: string;
  legacyPrice: number;
  type: 'per-user' | 'fixed';
  description: string;
}

const COST_FACTORS: CostFactor[] = [
  { id: 'video', name: 'Video Conferencias (Zoom/Meet Pro)', legacyPrice: 280, type: 'per-user', description: 'Sustituido por MS Teams (Gratis A1)' },
  { id: 'storage', name: 'Almacenamiento Cloud (Dropbox/Drive)', legacyPrice: 180, type: 'per-user', description: 'Sustituido por OneDrive 1TB (Gratis A1)' },
  { id: 'collab', name: 'Mensajería y Chat (Slack/Other)', legacyPrice: 140, type: 'per-user', description: 'Sustituido por MS Teams Channels (Gratis A1)' },
  { id: 'lms', name: 'Apps de Control Escolar / LMS', legacyPrice: 45, type: 'per-user', description: 'Sustituido por Módulos Internos IDS' },
  { id: 'wp', name: 'Hosting & Soporte WordPress', legacyPrice: 2500, type: 'fixed', description: 'Sustituido por Arquitectura Estática IDS' },
  { id: 'security', name: 'Seguridad de Correo / Antivirus', legacyPrice: 65, type: 'per-user', description: 'Sustituido por Blindaje Nativo MS-365' },
  { id: 'forms', name: 'Encuestas y Formularios (Typeform)', legacyPrice: 120, type: 'per-user', description: 'Sustituido por Microsoft Forms' },
  { id: 'mailing', name: 'Boletines / Mailing (Mailchimp)', legacyPrice: 150, type: 'per-user', description: 'Sustituido por SharePoint News' },
  { id: 'creative', name: 'Herramientas de Diseño (Canva Pro)', legacyPrice: 190, type: 'per-user', description: 'Sustituido por Microsoft Designer' },
  { id: 'esign', name: 'Firmas Digitales (DocuSign)', legacyPrice: 350, type: 'per-user', description: 'Sustituido por Approvals Flow' }
];

export const ROICalculator: React.FC = () => {
  const [userCountInput, setUserCountInput] = useState<string>('100');
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set(COST_FACTORS.map(f => f.id)));

  const userCount = parseInt(userCountInput) || 0;

  const toggleService = (id: string) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedServices(newSelected);
  };

  const calculateMonthlyLegacy = () => {
    return COST_FACTORS.reduce((acc, f) => {
      if (!selectedServices.has(f.id)) return acc;
      return acc + (f.type === 'per-user' ? f.legacyPrice * userCount : f.legacyPrice);
    }, 0);
  };

  const monthlySavings = calculateMonthlyLegacy();
  const annualSavings = monthlySavings * 12;

  return (
    <div className="mt-8 w-full px-4 lg:px-8">
      <div className="bg-vault-darkBlue border-4 border-vault-yellow shadow-2xl rounded-sm overflow-hidden">
        {/* Header Section */}
        <div className="bg-vault-yellow p-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-vault-darkBlue text-vault-yellow p-2.5 rounded-full shrink-0 shadow-md">
              <TrendingDown size={28} />
            </div>
            <div>
              <h3 className="text-xl font-black text-vault-darkBlue uppercase tracking-tighter leading-none">Simulador de Overhead Operativo</h3>
              <p className="text-vault-darkBlue/70 text-[9px] font-mono font-bold mt-1 uppercase tracking-widest">// Technical Memo: Análisis de Fuga de Capital</p>
            </div>
          </div>
          
          <div className="bg-vault-darkBlue/10 p-3 rounded border border-vault-darkBlue/20 flex items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-3">
              <label className="text-vault-darkBlue font-mono font-black text-[10px] uppercase tracking-widest whitespace-nowrap">Usuarios Totales:</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-vault-darkBlue w-3.5 h-3.5" />
                <input 
                  type="text" 
                  value={userCountInput}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, '');
                    setUserCountInput(val);
                  }}
                  className="bg-white border-2 border-vault-darkBlue rounded-sm py-1.5 pl-9 pr-3 w-32 font-mono font-black text-sm text-vault-darkBlue focus:outline-none"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row">
          {/* Detailed Table */}
          <div className="flex-grow p-6 md:p-8 bg-slate-900 border-r border-white/5 overflow-x-auto">
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2 opacity-50 font-mono">
              <AlertTriangle className="text-vault-yellow w-3.5 h-3.5" /> Selección de Servicios en Infraestructura Actual
            </h4>
            
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">
                  <th className="pb-4 font-bold px-2 text-center">Estado</th>
                  <th className="pb-4 font-bold">Servicio / Alternativa Tradicional</th>
                  <th className="pb-4 font-bold text-right px-6">Costo Mensual</th>
                  <th className="pb-4 font-bold text-right px-6">Costo Anual</th>
                  <th className="pb-4 font-bold text-center">I.D.S Works</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COST_FACTORS.map((factor) => {
                  const isSelected = selectedServices.has(factor.id);
                  const monthlyVal = factor.type === 'per-user' ? factor.legacyPrice * userCount : factor.legacyPrice;
                  
                  return (
                    <tr 
                      key={factor.id} 
                      onClick={() => toggleService(factor.id)}
                      className={`group cursor-pointer transition-all ${isSelected ? 'bg-white/5' : 'opacity-20 hover:opacity-40'}`}
                    >
                      <td className="py-4 px-2 text-center">
                        {isSelected ? <CheckSquare className="text-vault-yellow w-5 h-5 mx-auto" /> : <Square className="text-slate-600 w-5 h-5 mx-auto" />}
                      </td>
                      <td className="py-4 pr-6">
                        <p className={`text-sm font-black transition-colors tracking-tight ${isSelected ? 'text-white' : 'text-slate-400'}`}>{factor.name}</p>
                        <p className={`text-xs font-mono uppercase mt-1 italic tracking-wider transition-colors ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>{factor.description}</p>
                      </td>
                      <td className="py-4 text-right px-6 font-mono text-sm text-red-400 font-bold whitespace-nowrap">
                        ${isSelected ? monthlyVal.toLocaleString() : '0'} <span className="text-[10px] opacity-50 uppercase ml-1">MXN</span>
                      </td>
                      <td className="py-4 text-right px-6 font-mono text-sm text-red-500 font-black whitespace-nowrap">
                        ${isSelected ? (monthlyVal * 12).toLocaleString() : '0'} <span className="text-[10px] opacity-50 uppercase ml-1">MXN</span>
                      </td>
                      <td className="py-4 text-center">
                        <div className="flex flex-col items-center">
                          <span className={`text-xs font-black font-mono transition-colors ${isSelected ? 'text-emerald-400' : 'text-slate-600'}`}>$0 MXN</span>
                          <span className={`text-[8px] font-bold uppercase tracking-tighter transition-colors ${isSelected ? 'text-emerald-600' : 'text-slate-700'}`}>Incluido</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Results Card */}
          <div className="w-full xl:w-[380px] p-8 bg-black/40 flex flex-col justify-center items-center text-center border-t xl:border-t-0 border-white/5 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
            <div className="space-y-8 w-full relative z-10">
              <div className="space-y-3">
                <p className="text-vault-yellow font-mono text-xs font-bold uppercase tracking-[0.4em]">Ahorro Anual Proyectado</p>
                <div className="text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  ${annualSavings.toLocaleString()}
                </div>
                <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.2em] mt-2 flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} /> 100% CAPITAL RECUPERADO
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 w-full">
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex justify-between items-center group hover:border-vault-yellow/20 transition-colors">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Ahorro Mensual</p>
                  <p className="text-xl font-black text-white font-mono">${monthlySavings.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex justify-between items-center group hover:border-vault-yellow/20 transition-colors">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Inversión Recurrente</p>
                  <p className="text-xl font-black text-vault-yellow font-mono">$0 MXN</p>
                </div>
              </div>

              <div className="w-full h-px bg-white/10"></div>

              <p className="text-[11px] text-slate-400 leading-relaxed font-medium px-2">
                La consolidación de su ecosistema bajo el plano IDS libera recursos operativos de forma inmediata.
              </p>

              <button 
                onClick={() => document.getElementById('demo-selectors')?.scrollIntoView({ behavior: 'smooth'})}
                className="w-full bg-vault-yellow text-vault-darkBlue py-3.5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:scale-[1.02] transition-all rounded-sm shadow-xl active:scale-95"
              >
                Validar Plano Técnico
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-xs font-mono text-slate-400 text-center uppercase tracking-widest italic max-w-5xl mx-auto">
        * Análisis técnico basado en costos promedio de licenciamiento corporativo en México. El retorno calculado es una proyección de capital liberado para inversión institucional.
      </p>
    </div>
  );
};