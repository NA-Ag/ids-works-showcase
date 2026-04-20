import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { DirectoryView } from './components/DirectoryView';
import { IncidenceModal } from './components/IncidenceModal';
import { PreNomina } from './components/PreNomina';
import { useHR, Employee } from './context/HRContext';

export const HRApp: React.FC = () => {
  const { employees, addIncidence, period, setPeriod } = useHR();
  const [currentView, setView] = useState('dashboard');
  const [showIncidenceModal, setShowIncidenciaModal] = useState(false);
  const [selectedEmpId, setSelectedEmpId] = useState<string | null>(null);

  const handleAddIncident = (id: string) => {
    setSelectedEmpId(id);
    setShowIncidenciaModal(true);
  };

  const handleSaveIncidence = (inc: any) => {
    addIncidence(inc);
  };

  const selectedEmployee = selectedEmpId ? employees.find(e => e.id === selectedEmpId) : null;

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans text-slate-800">
      <Header currentView={currentView} setView={setView} period={period} setPeriod={setPeriod} />
      
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'directorio' && <DirectoryView onAddIncident={handleAddIncident} setView={setView} />}
          {currentView === 'prenomina' && <PreNomina />}
        </div>
      </main>

      {showIncidenceModal && selectedEmployee && (
        <IncidenceModal 
          employee={selectedEmployee} 
          onClose={() => {
            setShowIncidenciaModal(false);
            setSelectedEmpId(null);
          }} 
          onSave={handleSaveIncidence} 
        />
      )}
    </div>
  );
};
