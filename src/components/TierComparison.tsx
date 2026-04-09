import React, { useState } from 'react';
import { Section } from './Section';
import { PRICING_TIERS } from '../constants';
import { Check, X, Info } from 'lucide-react';

const COMPARISON_DATA = [
  { feature: 'Arquitectura de Contenido', lite: 'Basado en Plantilla', standard: 'Diseño de Alto Impacto', integrated: 'Diseño de Alto Impacto' },
  { feature: 'Multilingüe (EN/ES)', lite: <X className="text-red-400" />, standard: <Check className="text-green-500" />, integrated: <Check className="text-green-500" /> },
  { feature: 'Actualización de Contenido', lite: 'Manual (Vía Código)', standard: 'Interfaz Visual', integrated: 'Personalización Avanzada' },
  { feature: 'Portal de Padres (One-Look)', lite: <X className="text-red-400" />, standard: <Check className="text-green-500" />, integrated: <Check className="text-green-500" /> },
  { feature: 'Sistema de Pagos', lite: <X className="text-red-400" />, standard: <X className="text-red-400" />, integrated: <Check className="text-green-500" /> },
  { feature: 'Portal de Egresados', lite: <X className="text-red-400" />, standard: <X className="text-red-400" />, integrated: <Check className="text-green-500" /> },
  { feature: 'Soberanía del Código', lite: <Check className="text-green-500" />, standard: <Check className="text-green-500" />, integrated: <Check className="text-green-500" /> },
  { feature: 'Periodo de Entrega', lite: '25 días', standard: '80 días', integrated: '140 días' },
  { feature: 'Costo de Mantenimiento', lite: '0 MXN (Autónomo)', standard: '0 MXN (Autónomo)', integrated: '0 MXN (Autónomo)' },
];

export const TierComparison: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'lite' | 'standard' | 'integrated'>('standard');

  return (
    <Section id="comparison" className="bg-white">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-black text-vault-darkBlue mb-4">Comparativa de Capacidades</h3>
        <p className="text-vault-gray max-w-xl mx-auto">Seleccione un nivel para ver el detalle de la infraestructura que recibirá su institución.</p>
      </div>

      {/* Mobile Selector */}
      <div className="flex lg:hidden mb-8 border-2 border-vault-blue p-1 rounded-sm">
        {(['lite', 'standard', 'integrated'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveTier(t)}
            className={`flex-1 py-2 text-xs font-mono font-bold uppercase tracking-widest transition-colors ${
              activeTier === t ? 'bg-vault-blue text-white' : 'text-vault-blue'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-vault-paper">
              <th className="text-left p-4 border-b-2 border-vault-blue font-mono text-xs uppercase text-vault-gray">Funcionalidad</th>
              <th className={`p-4 border-b-2 transition-colors ${activeTier === 'lite' ? 'bg-blue-50 border-vault-blue' : 'border-gray-100'} hidden lg:table-cell`}>
                <span className="font-bold text-vault-darkBlue">Lite</span>
              </th>
              <th className={`p-4 border-b-2 transition-colors ${activeTier === 'standard' ? 'bg-blue-50 border-vault-blue' : 'border-gray-100'} hidden lg:table-cell`}>
                <span className="font-bold text-vault-darkBlue">Estándar</span>
              </th>
              <th className={`p-4 border-b-2 transition-colors ${activeTier === 'integrated' ? 'bg-blue-50 border-vault-blue' : 'border-gray-100'} hidden lg:table-cell`}>
                <span className="font-bold text-vault-darkBlue">Integrado</span>
              </th>
              {/* Mobile column */}
              <th className="p-4 border-b-2 border-vault-blue bg-blue-50 lg:hidden">
                <span className="font-bold text-vault-darkBlue uppercase">{activeTier}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b border-gray-100 text-sm font-medium text-vault-darkBlue">
                  <div className="flex items-center gap-2">
                    {row.feature}
                    <Info className="w-3 h-3 text-gray-300 cursor-help" />
                  </div>
                </td>
                <td className={`p-4 border-b border-gray-100 text-sm ${activeTier === 'lite' ? 'bg-blue-50/30' : ''} hidden lg:table-cell`}>
                  <div className="flex justify-center items-center">
                    {row.lite}
                  </div>
                </td>
                <td className={`p-4 border-b border-gray-100 text-sm ${activeTier === 'standard' ? 'bg-blue-50/30' : ''} hidden lg:table-cell`}>
                  <div className="flex justify-center items-center">
                    {row.standard}
                  </div>
                </td>
                <td className={`p-4 border-b border-gray-100 text-sm ${activeTier === 'integrated' ? 'bg-blue-50/30' : ''} hidden lg:table-cell`}>
                  <div className="flex justify-center items-center">
                    {row.integrated}
                  </div>
                </td>
                {/* Mobile cell */}
                <td className="p-4 border-b border-gray-100 text-sm bg-blue-50/30 lg:hidden">
                  <div className="flex justify-center items-center">
                    {row[activeTier]}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center lg:text-left">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
          * Todas las entregas incluyen documentación técnica del sistema y manual de operaciones para el personal responsable.
        </p>
      </div>
    </Section>
  );
};