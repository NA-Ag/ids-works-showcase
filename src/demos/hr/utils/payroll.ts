export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(amount);
};

export const getPeriodDates = (period: any) => {
  const start = new Date(period.year, period.month, period.quincena === 1 ? 1 : 16);
  const end = new Date(period.year, period.month, period.quincena === 1 ? 15 : new Date(period.year, period.month + 1, 0).getDate());
  return { start, end };
};

export const getPeriodLabel = (period: any) => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const { start, end } = getPeriodDates(period);
  return `${start.getDate()} al ${end.getDate()} de ${months[period.month]} ${period.year}`;
};

export const isInPeriod = (dateStr: string, period: any) => {
  if (!dateStr) return false;
  const { start, end } = getPeriodDates(period);
  const d = new Date(dateStr + 'T00:00:00');
  start.setHours(0,0,0,0);
  end.setHours(23,59,59,999);
  return d >= start && d <= end;
};

export const calcPrePayroll = (employee: any, incidences: any[], period: any) => {
  const empIncidences = incidences.filter(i => i.empleadoId === employee.id && isInPeriod(i.fecha, period));
  const retardos = empIncidences.filter(i => i.tipo === 'retardo').length;
  const faltas = empIncidences.filter(i => i.tipo === 'falta_injustificada').length;
  const incapacidades = empIncidences.filter(i => i.tipo === 'incapacidad_imss').length;
  const permisos = empIncidences.filter(i => i.tipo === 'permiso').length;

  let deduccion = 0;
  let faltasEquivalentes = 0;

  if (employee.tipoPago === 'fijo') {
      const diario = employee.salarioBase / 30;
      const faltasPorRetardos = Math.floor(retardos / 3);
      faltasEquivalentes = faltas + faltasPorRetardos;
      deduccion = (faltasEquivalentes + incapacidades) * diario;
  } else {
      // Por hora: assume 40 hrs/week = ~80 hrs/quincena
      // Deduction per absence: 8 hours (1 day) * hourly rate
      const faltasPorRetardos = Math.floor(retardos / 3);
      faltasEquivalentes = faltas + faltasPorRetardos;
      const horasPerdidas = (faltasEquivalentes + incapacidades) * 8;
      deduccion = horasPerdidas * employee.salarioBase;
  }

  const basePay = employee.tipoPago === 'fijo' ? (employee.salarioBase / 2) : employee.salarioBase * 80;
  
  return {
      empleado: employee,
      retardos,
      faltas,
      faltasEquivalentes,
      incapacidades,
      permisos,
      base: basePay,
      deduccion,
      neto: basePay - deduccion,
      incidencias: empIncidences
  };
};