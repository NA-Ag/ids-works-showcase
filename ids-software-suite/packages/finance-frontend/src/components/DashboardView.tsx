import React, { useMemo } from 'react';
import { useFinance } from '../context/FinanceContext';
import { TrendingUp, AlertTriangle, PieChart, Users, CalendarDays, Receipt, ArrowRight } from 'lucide-react';

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
    yellow: 'bg-yellow-50 text-vault-yellow border-yellow-100'
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
      <div>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{title}</p>
        <p className="text-3xl font-black text-vault-darkBlue font-mono">{value}</p>
        <p className="text-xs text-gray-400 mt-2">{subtitle}</p>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${colorClasses[color]}`}>
        <Icon size={24} />
      </div>
    </div>
  );
};

export const DashboardView: React.FC = () => {
  const { students, payments } = useFinance();
  const currentYear = new Date().getFullYear();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(amount);
  };

  const formatDate = (isoString: string | null) => {
    if (!isoString) return '-';
    return new Date(isoString).toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const monthlyIncome = useMemo(() => {
    return payments
      .filter(p => p.estado === 'Pagado' && p.fecha && p.fecha.startsWith(currentYear.toString()))
      .reduce((sum, p) => sum + p.monto, 0);
  }, [payments, currentYear]);

  const pastDue = useMemo(() => {
    return payments
      .filter(p => p.estado === 'Pendiente' || p.estado === 'Vencido')
      .reduce((sum, p) => sum + p.monto, 0);
  }, [payments]);

  const collectionRate = useMemo(() => {
    const total = payments.reduce((sum, p) => sum + p.monto, 0);
    return total > 0 ? Math.round((monthlyIncome / total) * 100) : 0;
  }, [monthlyIncome, payments]);

  const recentPayments = useMemo(() => {
    return payments
      .filter(p => p.estado === 'Pagado')
      .sort((a, b) => new Date(b.fecha!).getTime() - new Date(a.fecha!).getTime())
      .slice(0, 8);
  }, [payments]);

  const getStudentName = (id: string) => {
    return students.find(s => s.id === id)?.nombre || 'Desconocido';
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter">Panel de Control</h2>
          <p className="text-gray-500 font-medium">Resumen financiero del ciclo escolar {currentYear}-{currentYear + 1}</p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg border border-emerald-200 font-bold text-sm">
          <CalendarDays size={16} />
          <span>{new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Ingresos del Año" value={formatCurrency(monthlyIncome)} subtitle="Cobros registrados" icon={TrendingUp} color="green" />
        <MetricCard title="Cartera Vencida" value={formatCurrency(pastDue)} subtitle="Pagos pendientes de cobro" icon={AlertTriangle} color="red" />
        <MetricCard title="Tasa de Cobranza" value={`${collectionRate}%`} subtitle="Eficiencia de cobro" icon={PieChart} color="blue" />
        <MetricCard title="Alumnos Activos" value={students.length.toString()} subtitle="Padrón de estudiantes" icon={Users} color="yellow" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <h3 className="text-lg font-black text-vault-darkBlue uppercase tracking-widest flex items-center gap-2">
            <Receipt className="text-emerald-500" /> Últimos Pagos Registrados
          </h3>
          <button className="text-xs font-bold text-vault-blue hover:text-vault-darkBlue uppercase tracking-widest flex items-center gap-1 transition-colors">
            Ver todos <ArrowRight size={14} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Folio</th>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Alumno</th>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Concepto</th>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Forma de Pago</th>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200 text-right">Monto</th>
                <th className="py-4 px-6 text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {recentPayments.map(payment => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                  <td className="py-4 px-6 font-mono text-sm font-bold text-vault-blue">{payment.folio}</td>
                  <td className="py-4 px-6 font-bold text-gray-800">{getStudentName(payment.studentId)}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{payment.concepto} {payment.mes ? `• ${payment.mes}` : ''}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded bg-gray-100 text-gray-700 text-xs font-bold">
                      {payment.formaPago}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-sm font-black text-emerald-600">{formatCurrency(payment.monto)}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{formatDate(payment.fecha)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
