import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {
  Users, Calculator, BookOpen, GraduationCap,
  Library, Coffee, UserCircle, AlertTriangle,
  Stethoscope, MonitorPlay, CheckCircle2
} from 'lucide-react';

export const MODULES = [
  {
    id: 'admin',
    icon: Users,
    title: 'Suite de Administración Escolar',
    focus: 'Registro de estudiantes, seguimiento de inscripciones, directorios de padres y documentos internos.',
    target: 'Oficina Administrativa Principal',
    license: '20 PCs',
    price: '$15,000 MXN'
  },
  {
    id: 'finance',
    icon: Calculator,
    title: 'Control Local de Finanzas y Colegiaturas',
    focus: 'Seguimiento de colegiaturas pagadas/pendientes, recibos de pago internos y gestión de flujo de caja.',
    target: 'Oficina de Finanzas/Contabilidad',
    license: '4 PCs',
    price: '$2,500 MXN'
  },
  {
    id: 'learning',
    icon: MonitorPlay,
    title: 'Laboratorio de Aprendizaje Gamificado',
    focus: 'Ejercicios interactivos y cuestionarios alineados al plan de estudios, funcionando localmente. Reemplaza a Kahoot.',
    target: 'Laboratorios de Computación',
    license: '30 PCs (Un laboratorio completo)',
    price: '$20,000 MXN'
  },
  {
    id: 'grades',
    icon: GraduationCap,
    title: 'Control Centralizado de Calificaciones',
    focus: 'Portal local para captura de calificaciones. Calcula promedios basados en los lineamientos de la SEP.',
    target: 'Sala de Maestros / Dirección Académica',
    license: '50 PCs',
    price: '$10,000 MXN'
  },
  {
    id: 'library',
    icon: Library,
    title: 'Inventario y Préstamos de Biblioteca',
    focus: 'Catalogación de libros, escaneo de códigos de barras USB y seguimiento de préstamos de alumnos.',
    target: 'Biblioteca Escolar',
    license: '5 PCs',
    price: '$5,000 MXN'
  },
  {
    id: 'pos',
    icon: Coffee,
    title: 'Punto de Venta de Cafetería (POS)',
    focus: 'Punto de venta táctil para seguimiento de ventas diarias, inventario y saldos prepagados de alumnos.',
    target: 'Cafetería Escolar',
    license: '3 PCs',
    price: '$3,000 MXN'
  },
  {
    id: 'hr',
    icon: UserCircle,
    title: 'Nómina y Recursos Humanos Local',
    focus: 'Seguimiento de horas de maestros, ausencias y cálculo de deducciones de nómina locales.',
    target: 'Departamento de Recursos Humanos',
    license: '5 PCs',
    price: '$5,000 MXN'
  },
  {
    id: 'discipline',
    icon: AlertTriangle,
    title: 'Control de Disciplina y Asistencia',
    focus: 'Registro de retardos, violaciones de uniforme y reportes disciplinarios.',
    target: 'Prefectura / Oficina de Disciplina',
    license: '15 PCs',
    price: '$8,000 MXN'
  },
  {
    id: 'clinic',
    icon: Stethoscope,
    title: 'Bitácora de Enfermería Escolar',
    focus: 'Seguimiento de visitas de alumnos, medicamentos dispensados y detalles de contacto de emergencia.',
    target: 'Enfermería',
    license: '2 PCs',
    price: '$2,000 MXN'
  },
  {
    id: 'signage',
    icon: BookOpen,
    title: 'Tablero de Comunicación para Padres',
    focus: 'Software de kiosco/señalización digital para pantallas de lobby. Muestra anuncios localmente.',
    target: 'Recepción / Pasillos / Lobby',
    license: '5 Pantallas',
    price: '$4,000 MXN'
  }
];

export const Catalog: React.FC = () => {
  return (
    <Section id="catalog" variant="light">
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono font-bold text-vault-blue tracking-[0.3em] uppercase mb-3">
          Catálogo de Módulos
        </h2>
        <h3 className="text-4xl font-black text-vault-darkBlue mb-6">
          Software a su medida, sin suscripciones
        </h3>
        <p className="max-w-2xl mx-auto text-vault-gray">
          Adquiera únicamente los módulos que su institución necesita. Licencias perpetuas que funcionan en su red local sin depender de internet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MODULES.map((mod) => (
          <div 
            key={mod.id}
            className="flex flex-col bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-xl hover:border-vault-blue transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <mod.icon className="w-6 h-6 text-vault-blue" />
              </div>
              <div className="text-right">
                <span className="block text-2xl font-black text-vault-darkBlue">{mod.price}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold font-mono">Pago Único</span>
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-vault-darkBlue mb-2 leading-tight">
              {mod.title}
            </h4>
            
            <p className="text-sm text-gray-600 mb-4 flex-grow">
              {mod.focus}
            </p>

            <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
              <div className="flex items-center text-xs text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                <span className="font-semibold text-gray-700 mr-1">Uso sugerido:</span> {mod.target}
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                <span className="font-semibold text-gray-700 mr-1">Licencia:</span> {mod.license} locales
              </div>
            </div>

            <Button 
              variant="primary"
              className="w-full flex items-center justify-center font-bold uppercase tracking-widest text-xs py-3"
              onClick={() => alert('Integración con MercadoPago próximamente...')}
            >
              Comprar Módulo
            </Button>
            <div className="mt-3 text-center">
              <Link 
                to={`/manual/${mod.id}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] font-bold text-vault-blue hover:text-vault-darkBlue uppercase tracking-widest underline transition-colors"
              >
                Ver Manual Técnico
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};