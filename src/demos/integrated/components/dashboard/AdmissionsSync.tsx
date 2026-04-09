import React, { useState, useEffect } from 'react';
import { UserPlus, CheckCircle2, Loader2, Key, Database, Mail, Monitor, Server } from 'lucide-react';

export const AdmissionsSync = ({ isEn }: { isEn: boolean }) => {
    const [isSyncing, setIsSyncing] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);

    const startSync = () => {
        setIsSyncing(true);
        setLogs([]);
        setProgress(0);

        const syncSteps = [
            isEn ? "[OK] Validating student record: a.garcia..." : "[OK] Validando expediente: a.garcia...",
            isEn ? "[SYSTEM] Generating .edu.mx digital identity..." : "[SISTEMA] Generando identidad digital .edu.mx...",
            isEn ? "[OK] Identity created: a.garcia@colegio-ids.edu.mx" : "[OK] Identidad creada: a.garcia@colegioids.edu.mx",
            isEn ? "[MS-GRAPH] Assigning Microsoft 365 A1 License..." : "[MS-GRAPH] Asignando Licencia Microsoft 365 A1...",
            isEn ? "[OK] 1TB OneDrive Storage Provisioned." : "[OK] Almacenamiento 1TB OneDrive provisionado.",
            isEn ? "[TEAMS] Auto-enrolling in Math 10A, Physics 10A..." : "[TEAMS] Auto-inscripción en Matemáticas 10A, Física 10A...",
            isEn ? "[OK] Teams Classrooms synced." : "[OK] Aulas de Teams sincronizadas.",
            isEn ? "[FINANCE] Syncing parent contact to billing system..." : "[FINANZAS] Sincronizando contacto de tutor con facturación...",
            isEn ? "[SUCCESS] Enrollment Automation Complete." : "[ÉXITO] Automatización de Matrícula Completada."
        ];

        let currentStep = 0;
        const interval = setInterval(() => {
            if (currentStep < syncSteps.length) {
                setLogs(prev => [...prev, syncSteps[currentStep]]);
                setProgress(Math.floor(((currentStep + 1) / syncSteps.length) * 100));
                currentStep++;
            } else {
                clearInterval(interval);
                setIsSyncing(false);
            }
        }, 800);
    };

    return (
        <div className="bg-white p-6 md:p-10 rounded-md shadow-sm border border-gray-200 animate-fade-in space-y-8">
            <header className="flex justify-between items-center border-b border-gray-100 pb-6">
                <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight text-vault-darkWine">
                        {isEn ? 'Automated Enrollment Sync' : 'Sincronización Automática de Matrícula'}
                    </h2>
                    <p className="text-gray-500 font-medium mt-1">
                        {isEn ? 'MS Graph API & ERP Integration Engine' : 'Motor de Integración MS Graph API y ERP'}
                    </p>
                </div>
                <div className="hidden md:flex gap-2 text-vault-wine">
                    <Database size={20} /> <Server size={20} /> <Monitor size={20} />
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-vault-wine mx-auto mb-4 text-vault-darkWine">
                            <UserPlus size={24} />
                        </div>
                        <div className="text-center space-y-2">
                            <h4 className="font-black text-gray-800">Alejandro García</h4>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">{isEn ? 'New Admission • Year 10' : 'Nuevo Ingreso • Año 10'}</p>
                            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-black uppercase rounded-full">
                                {isEn ? 'Pending Provisioning' : 'Pendiente de Provisión'}
                            </span>
                        </div>
                    </div>
                    <button 
                        onClick={startSync}
                        disabled={isSyncing || progress === 100}
                        className="w-full py-4 bg-vault-wine text-white rounded-md font-black uppercase tracking-widest text-xs hover:bg-vault-darkWine transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                    >
                        {isSyncing ? <Loader2 size={16} className="animate-spin" /> : <Key size={16} />}
                        {isSyncing 
                            ? (isEn ? 'Syncing...' : 'Sincronizando...') 
                            : (progress === 100 ? (isEn ? 'Synced' : 'Sincronizado') : (isEn ? 'Enroll Student' : 'Matricular Alumno'))}
                    </button>
                    {progress === 100 && (
                        <div className="p-4 bg-emerald-50 text-emerald-700 rounded-lg flex items-center gap-3 border border-emerald-100">
                            <CheckCircle2 size={20} />
                            <p className="text-[10px] font-black uppercase tracking-widest leading-tight">
                                {isEn ? 'Student successfully onboarded to all platforms.' : 'Alumno incorporado exitosamente a todas las plataformas.'}
                            </p>
                        </div>
                    )}
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-[#1e1e1e] rounded-lg p-6 font-mono text-[11px] md:text-sm h-80 flex flex-col shadow-inner relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-8 bg-[#2d2d2d] flex items-center px-4 border-b border-black/50 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-4 text-gray-400 text-[10px]">ms-graph-terminal ~ /admin/sync</span>
                        </div>
                        <div className="mt-8 flex-grow overflow-y-auto space-y-2 text-green-400 pt-2 pb-8">
                            {logs.map((log, index) => (
                                <div key={index} className="animate-fade-in opacity-80">
                                    <span className="text-gray-500 mr-2">{'>'}</span> {log}
                                </div>
                            ))}
                            {isSyncing && (
                                <div className="animate-pulse flex gap-2 items-center text-gray-500">
                                    <span>{'>'}</span> <span className="w-2 h-4 bg-gray-500 inline-block"></span>
                                </div>
                            )}
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between text-[10px] text-gray-500 mb-1 font-bold">
                                <span>{isEn ? 'PROVISIONING PROGRESS' : 'PROGRESO DE PROVISIÓN'}</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-vault-yellow transition-all duration-300 ease-out"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};