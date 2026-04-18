import { LayoutTemplate, Cloud, Fingerprint, Rocket, Zap, ShieldCheck, BookOpen, Users, Globe } from 'lucide-react';
import { ServiceItem, NavItem, Stat, PricingTier } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/#hero' },
  { label: 'Beneficios', href: '/#value-prop' },
  { label: 'Catálogo', href: '/#catalog' },
  { label: 'Sitios Web', href: '/#web-templates' },
  { label: 'FAQ', href: '/#faq' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Sitio Web de Alto Impacto',
    description: 'Diseño bicultural y responsivo optimizado para SEO educativo. La cara digital que su institución merece.',
    icon: Globe
  },
  {
    id: 's2',
    title: 'Panel de Gestión Institucional',
    description: 'Interfaz administrativa intuitiva y segura. Actualice circulares, noticias y calendarios sin depender de programadores.',
    icon: LayoutTemplate
  },
  {
    id: 's3',
    title: 'Ecosistema Integrado',
    description: 'Configuración para clases, tareas y colaboración docente bajo licencias institucionales.',
    icon: Users
  },
  {
    id: 's4',
    title: 'Identidad Institucional',
    description: 'Gestión técnica y administrativa para configurar sus portales educativos oficiales.',
    icon: Fingerprint
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'lite',
    name: 'Lite',
    price: '$100,000',
    description: 'La base de su identidad digital. Entregamos las llaves y el código; su institución mantiene el control total.',
    features: [
      'Sitio Web Estático (Plantilla IDS)',
      'Configuración de Identidad',
      'Cuenta de Administrador Global MS-365',
      'Entrega Total de Repositorio',
      'Gestión Manual (Cero Rentas)',
      'Propiedad Intelectual Total'
    ],
    cta: 'Seleccionar Lite'
  },
  {
    id: 'standard',
    name: 'Estándar',
    price: '$300,000',
    description: 'La infraestructura integral diseñada para la autonomía operativa sin depender de código.',
    features: [
      'Sitio Web Premium Multilingüe',
      'Gestión Visual de Contenido',
      'Estructura de Clases en MS Teams',
      'Portal de Padres (One-Look)',
      'Inscripción Digital (Onboarding)',
      'Propiedad Intelectual Total'
    ],
    recommended: true,
    cta: 'Solicitar Demo Estándar'
  },
  {
    id: 'integrated',
    name: 'Integrado',
    price: '$450,000',
    description: 'Ecosistema digital avanzado para redes escolares que requieren automatización y módulos a medida.',
    features: [
      'Todo lo incluido en Estándar',
      'Sistema de Pagos',
      'Portal de Egresados (Carreras)',
      'Automatización de Matrícula',
      'Bases de Datos en Ecosistema Institucional',
      'Sincronización de Identidad Avanzada'
    ],
    cta: 'Consultar Integrado'
  }
];

export const STATS: Stat[] = [
  { value: '200k+', label: 'Inversión Promedio' },
  { value: '0 MXN', label: 'Costo de Licencias' },
  { value: '100%', label: 'Autonomía Digital' },
];
