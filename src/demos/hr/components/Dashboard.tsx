import React, { useMemo } from 'react';
import { useHR } from '../context/HRContext';
import { calcPrePayroll, formatCurrency, getPeriodLabel, isInPeriod } from '../utils/payroll';
import { Users, FileInvoiceDollar, AlertCircle, TrendingDown, Info } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: any;
  color: 'green' | 'red' | 'blue' | 'yellow';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtitle, icon: Icon, color }) => {
  const colorClasses = {
    green: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    blue: 'bg-blue-50 text-vault-blue border-blue-100',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-100'
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
      <div>
        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{title}</p>
        <p className={`text-3xl font-black font-mono ${color === 'red' ? 'text-red-600' : color === 'green' ? 'text-emerald-600' : color === 'yellow' ? 'text-yellow-600' : 'text-vault-blue'}`}>{value}</p>
        <p className="text-xs font-bold text-gray-400 mt-2 uppercase tracking-widest">{subtitle}</p>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${colorClasses[color]}`}>
        <Icon size={24} />
      </div>
    </div>
  );
};

export const Dashboard: React.FC = () => {
  const { employees, incidences, period } = useHR();

  const metrics = useMemo(() => {
    const preCalculations = employees.map(emp => calcPrePayroll(emp, incidences, period));
    const totalDeductions = preCalculations.reduce((sum, c) => sum + c.deduccion, 0);
    const totalNeto = preCalculations.reduce((sum, c) => sum + c.neto, 0);
    const incidenciasPeriod = incidences.filter(i => isInPeriod(i.fecha, period));
    const retardos = incidenciasPeriod.filter(i => i.tipo === 'retardo').length;
    const faltas = incidenciasPeriod.filter(i => i.tipo === 'falta_injustificada').length;
    return { totalDeductions, totalNeto, retardos, faltas, empleados: employees.length };
  }, [employees, incidences, period]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter">Panel Principal</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Resumen de nómina • {getPeriodLabel(period)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Empleados Activos" value={metrics.empleados.toString()} subtitle="Padrón Actual" icon={Users} color="blue" />
        <MetricCard title="Total Pre-nómina" value={formatCurrency(metrics.totalNeto)} subtitle="Neto a pagar" icon={Receipt} color="green" />
        <MetricCard title="Deducciones" value={formatCurrency(metrics.totalDeductions)} subtitle="Descuentos aplicados" icon={TrendingDown} color="red" />
        <MetricCard title="Incidencias" value={`${metrics.faltas} F, ${metrics.retardos} R`} subtitle="En este periodo" icon={AlertCircle} color="yellow" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-lg font-black text-vault-darkBlue uppercase tracking-widest mb-4 flex items-center gap-2">
          <Info className="text-vault-blue" size={20} /> Notas de Periodo
        </h3>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm font-medium text-blue-900">
          <p className="font-black uppercase tracking-widest mb-2 text-xs text-vault-blue">📋 Regla de Retardos Aplicable</p>
          <p>De acuerdo con la política interna escolar: <strong>3 retardos equivalen a 1 falta</strong> para efectos de deducción en nómina. Las incapacidades IMSS se descuentan proporcionalmente al salario base. Los permisos con goce de sueldo no generan deducción automática.</p>
        </div>
      </div>
    </div>
  );
};
