import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { StudentsView } from './components/StudentsView';
import { StudentLedgerView } from './components/StudentLedgerView';
import { PaymentModal } from './components/PaymentModal';
import { StudentFinance } from './context/FinanceContext';

export const FinanceApp: React.FC = () => {
  const [currentView, setView] = useState('dashboard');
  const [selectedStudent, setSelectedStudent] = useState<StudentFinance | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleSelectStudent = (student: StudentFinance) => {
    setSelectedStudent(student);
    setView('student-ledger');
  };

  const handleBack = () => {
    setSelectedStudent(null);
    setView('students');
  };

  const handleNavClick = (view: string) => {
    setView(view);
    setSelectedStudent(null);
    setShowPaymentModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-slate-800">
      <Sidebar currentView={currentView} setView={handleNavClick} />

      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {currentView === 'dashboard' && (
            <DashboardView />
          )}
          {currentView === 'students' && (
            <StudentsView onSelectStudent={handleSelectStudent} />
          )}
          {currentView === 'student-ledger' && selectedStudent && (
            <StudentLedgerView 
              student={selectedStudent}
              onBack={handleBack}
              onLogPayment={() => setShowPaymentModal(true)}
            />
          )}
        </div>
      </main>

      {showPaymentModal && selectedStudent && (
        <PaymentModal 
          student={selectedStudent}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
};
