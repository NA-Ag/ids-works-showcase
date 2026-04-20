import React, { useState } from 'react';
import { Header } from './components/Header';
import { StudentSearch } from './components/StudentSearch';
import { TodayLog } from './components/TodayLog';
import { ReportForm } from './components/ReportForm';
import { PrintableReport } from './components/PrintableReport';
import { useDiscipline, Student, DisciplineRecord } from './context/DisciplineContext';
import { Clock, Shirt, FileText, Printer, ArrowLeft } from 'lucide-react';

export const DisciplineApp: React.FC = () => {
  const { students, records, addRecord } = useDiscipline();
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showReportForm, setShowReportForm] = useState(false);
  const [generatedReport, setGeneratedReport] = useState<DisciplineRecord | null>(null);

  const handleQuickLog = (tipo: 'retardo' | 'uniforme') => {
    if (!selectedStudent) return;
    addRecord({
      studentId: selectedStudent.id,
      tipo,
      fecha: new Date().toISOString(),
      severidad: 'leve'
    });
    setSelectedStudent(null);
  };

  return (
    <div className="h-screen flex flex-col bg-slate-100 font-sans">
      <Header />

      <main className="flex-1 overflow-hidden flex flex-col md:flex-row">
        {/* Main Content Area */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto no-print">
          <div className="max-w-4xl mx-auto space-y-8">
            <StudentSearch students={students} onSelect={setSelectedStudent} />

            {selectedStudent && !showReportForm && !generatedReport && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 animate-fade-in">
                <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-100">
                  <div>
                    <h2 className="text-2xl font-black text-vault-darkBlue uppercase tracking-tighter">{selectedStudent.nombre}</h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mt-1">
                      <span className="font-mono text-vault-blue mr-2">{selectedStudent.matricula}</span>
                      {selectedStudent.grado} - Grupo {selectedStudent.grupo}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedStudent(null)} 
                    className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-colors"
                  >
                    Cerrar
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <button 
                    onClick={() => handleQuickLog('retardo')} 
                    className="bg-yellow-50 hover:bg-yellow-100 border-2 border-yellow-200 text-yellow-700 p-6 rounded-2xl transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-3 active:scale-95 shadow-sm"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Clock size={32} className="text-yellow-500" />
                    </div>
                    <span className="font-black uppercase tracking-widest text-sm text-center">Registrar Retardo</span>
                  </button>
                  
                  <button 
                    onClick={() => handleQuickLog('uniforme')} 
                    className="bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 text-purple-700 p-6 rounded-2xl transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-3 active:scale-95 shadow-sm"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Shirt size={32} className="text-purple-500" />
                    </div>
                    <span className="font-black uppercase tracking-widest text-sm text-center">Falta de Uniforme</span>
                  </button>
                  
                  <button 
                    onClick={() => setShowReportForm(true)} 
                    className="bg-red-50 hover:bg-red-100 border-2 border-red-200 text-red-700 p-6 rounded-2xl transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-3 active:scale-95 shadow-sm"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <FileText size={32} className="text-red-500" />
                    </div>
                    <span className="font-black uppercase tracking-widest text-sm text-center">Reporte Disciplinario</span>
                  </button>
                </div>
              </div>
            )}

            {selectedStudent && showReportForm && (
              <ReportForm 
                student={selectedStudent} 
                onSave={(rec) => {
                  addRecord(rec);
                  // Temporary hack to find the ID generated by addRecord context
                  setTimeout(() => {
                    setGeneratedReport({ ...rec, id: 'REC_NEW' } as DisciplineRecord);
                    setShowReportForm(false);
                  }, 2000); // match ReportForm success timeout
                }}
                onCancel={() => setShowReportForm(false)}
              />
            )}

            {generatedReport && selectedStudent && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 animate-fade-in text-center">
                <FileText className="w-16 h-16 text-vault-blue mx-auto mb-4" />
                <h2 className="text-2xl font-black text-vault-darkBlue mb-6 uppercase tracking-tighter">Documento Listo</h2>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => {
                      setSelectedStudent(null);
                      setGeneratedReport(null);
                    }} 
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft size={16} /> Volver
                  </button>
                  <button 
                    onClick={() => window.print()} 
                    className="px-8 py-3 bg-vault-blue hover:bg-vault-darkBlue text-white rounded-xl font-black uppercase tracking-widest text-xs transition-colors shadow-md flex items-center gap-2"
                  >
                    <Printer size={16} /> Imprimir Reporte
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Log Area */}
        <aside className="w-full md:w-96 shrink-0 p-6 md:p-10 md:pl-0 relative z-0 no-print">
          <TodayLog records={records} students={students} />
        </aside>
      </main>

      {/* Hidden Print Layout */}
      {generatedReport && selectedStudent && (
        <PrintableReport record={generatedReport} student={selectedStudent} />
      )}
    </div>
  );
};
