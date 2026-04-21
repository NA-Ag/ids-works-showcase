import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewVisitForm } from './components/NewVisitForm';
import { VisitHistory } from './components/VisitHistory';
import { useClinic, Student } from './context/ClinicContext';

export const ClinicApp: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  return (
    <div className="h-screen flex flex-col bg-slate-100 font-sans text-slate-800">
      <Header />
      
      <main className="flex-1 overflow-hidden flex flex-col md:flex-row">
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {!selectedStudent ? (
              <Dashboard onSelectStudent={setSelectedStudent} />
            ) : (
              <NewVisitForm 
                student={selectedStudent} 
                onCancel={() => setSelectedStudent(null)} 
              />
            )}
          </div>
        </div>

        <aside className="w-full md:w-[400px] shrink-0 p-6 md:p-10 md:pl-0 relative z-0">
          <VisitHistory onSelectStudent={setSelectedStudent} />
        </aside>
      </main>
    </div>
  );
};
