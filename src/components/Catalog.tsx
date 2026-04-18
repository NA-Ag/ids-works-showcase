import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import {
  Users, Calculator, BookOpen, GraduationCap,
  Library, Coffee, UserCircle, AlertTriangle,
  Stethoscope, MonitorPlay, CheckCircle2
} from 'lucide-react';

const MODULES = [
  {
    id: 'admin',
    icon: Users,
    title: 'Core School Admin Suite',
    focus: 'Student registration, enrollment tracking, parent directories, and internal documents.',
    target: 'Main Administrative Office',
    license: '20 PCs',
    price: '$15,000 MXN'
  },
  {
    id: 'finance',
    icon: Calculator,
    title: 'Local Finance & Tuition Tracker',
    focus: 'Tracking paid/unpaid tuition, internal payment receipts, and cash flow management.',
    target: 'Finance/Accounting Office',
    license: '4 PCs',
    price: '$2,500 MXN'
  },
  {
    id: 'learning',
    icon: MonitorPlay,
    title: 'Offline Gamified Learning Lab',
    focus: 'Interactive, curriculum-aligned exercises and quizzes running locally. Replaces Kahoot.',
    target: 'Student Computer Labs',
    license: '30 PCs (One full lab)',
    price: '$20,000 MXN'
  },
  {
    id: 'grades',
    icon: GraduationCap,
    title: 'Centralized Teacher Gradebook',
    focus: 'Local portal for grade input. Calculates averages based on SEP guidelines.',
    target: 'Teachers Lounge / Academic Direction',
    license: '50 PCs',
    price: '$10,000 MXN'
  },
  {
    id: 'library',
    icon: Library,
    title: 'Library Inventory & Check-out',
    focus: 'Book cataloging, USB barcode scanning, and student check-out tracking.',
    target: 'School Library',
    license: '5 PCs',
    price: '$5,000 MXN'
  },
  {
    id: 'pos',
    icon: Coffee,
    title: 'Cafeteria Point of Sale (POS)',
    focus: 'Touch-friendly POS tracking daily sales, inventory, and student pre-paid balances.',
    target: 'School Cafeteria',
    license: '3 PCs',
    price: '$3,000 MXN'
  },
  {
    id: 'hr',
    icon: UserCircle,
    title: 'Local HR & Payroll Calculator',
    focus: 'Tracking teacher hours, absences, and calculating local payroll deductions.',
    target: 'HR Department',
    license: '5 PCs',
    price: '$5,000 MXN'
  },
  {
    id: 'discipline',
    icon: AlertTriangle,
    title: 'Discipline & Attendance Tracker',
    focus: 'Logging tardiness, uniform violations, and disciplinary reports.',
    target: 'Prefectura / Discipline Office',
    license: '15 PCs',
    price: '$8,000 MXN'
  },
  {
    id: 'clinic',
    icon: Stethoscope,
    title: 'School Clinic / Infirmary Log',
    focus: 'Tracking student visits, medication dispensed, and emergency contact details.',
    target: 'Nurses Office',
    license: '2 PCs',
    price: '$2,000 MXN'
  },
  {
    id: 'signage',
    icon: BookOpen,
    title: 'Parent Communication Board',
    focus: 'Kiosk/signage software running on lobby screens. Displays announcements locally.',
    target: 'Lobby / Reception / Hallways',
    license: '5 Screens',
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
          Software a tu medida, sin suscripciones
        </h3>
        <p className="max-w-2xl mx-auto text-vault-gray">
          Adquiere únicamente los módulos que tu institución necesita. Licencias perpetuas que funcionan en tu red local sin depender de internet.
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
          </div>
        ))}
      </div>
    </Section>
  );
};