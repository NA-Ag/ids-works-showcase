import React, { useState } from 'react';
import { Users, GraduationCap, AlertCircle, FileText, Download, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';

export const DashboardView: React.FC = () => {
  const { stats, activities, setIsNewStudentModalOpen, addActivity } = useData();
  const [isGeneratingDoc, setIsGeneratingDoc] = useState(false);

  const handleGenerateDocument = () => {
    setIsGeneratingDoc(true);
    setTimeout(() => {
      setIsGeneratingDoc(false);
      addActivity("Constancia de Estudios (Batch) generada", "doc");
      // Simulate opening a printable PDF containing QR codes
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write('<html><head><title>Constancia SEP</title></head><body style="font-family: sans-serif; padding: 40px;"><h2>Constancia de Estudios (Vista Previa)</h2><p>Este documento es generado offline y cuenta con un código QR seguro para validación local.</p><button onclick="window.print()">Imprimir Constancia</button></body></html>');
        printWindow.document.close();
      }
    }, 1500);
  };

  const handleManualPayment = () => {
    addActivity("Cobro de colegiatura registrado (Caja 01)", "finance");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Alumnos Activos</p>
            <h3 className="text-3xl font-black text-vault-darkBlue">{stats.activeStudents}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 text-vault-blue flex items-center justify-center">
            <Users size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Personal Docente</p>
            <h3 className="text-3xl font-black text-vault-darkBlue">{stats.staff}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <GraduationCap size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Inscripciones (2026)</p>
            <h3 className="text-3xl font-black text-vault-darkBlue">{stats.enrollmentPercentage}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center">
            <FileText size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Ausencias Hoy</p>
            <h3 className="text-3xl font-black text-red-600">{stats.absencesToday}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
            <AlertCircle size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-sm font-bold text-vault-darkBlue uppercase tracking-widest mb-6">Acciones Rápidas</h3>
          <div className="space-y-3">
            <button 
              onClick={() => setIsNewStudentModalOpen(true)}
              className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-vault-blue hover:text-white rounded-lg font-bold transition-colors"
            >
              + Nuevo Alumno
            </button>
            <button 
              onClick={handleManualPayment}
              className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-vault-blue hover:text-white rounded-lg font-bold transition-colors"
            >
              + Registrar Pago Manual
            </button>
            <button 
              onClick={handleGenerateDocument}
              disabled={isGeneratingDoc}
              className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-vault-blue hover:text-white rounded-lg font-bold transition-colors flex justify-between items-center disabled:opacity-50"
            >
              {isGeneratingDoc ? (
                <>Generando PDF... <Loader2 size={16} className="animate-spin" /></>
              ) : (
                <>Generar Constancia SEP <Download size={16} /></>
              )}
            </button>
            <button 
              onClick={() => addActivity("Lista de asistencia exportada a CSV", "doc")}
              className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-vault-blue hover:text-white rounded-lg font-bold transition-colors flex justify-between items-center"
            >
              Exportar Lista de Asistencia <Download size={16} />
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-sm font-bold text-vault-darkBlue uppercase tracking-widest mb-6">Actividad Reciente en Red Local</h3>
          <div className="space-y-6">
            {activities.map(activity => (
              <div key={activity.id} className="flex items-start gap-4">
                <div className={`w-2 h-2 mt-2 rounded-full ${activity.type === 'add' ? 'bg-emerald-500' : activity.type === 'doc' ? 'bg-blue-500' : activity.type === 'finance' ? 'bg-yellow-500' : 'bg-gray-400'}`}></div>
                <div>
                  <p className="font-bold text-sm text-gray-800">{activity.action}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono font-bold text-gray-500">{activity.user}</span>
                    <span className="text-xs text-gray-400">• {activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};