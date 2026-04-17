import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const BrochureViewer: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-gray-100 overflow-hidden">
            <div className="h-full flex flex-col">
                <header className="p-4 bg-white shadow-sm flex justify-between items-center z-10">
                    <button onClick={() => window.history.back()} className="text-gray-600 hover:text-black font-bold uppercase text-xs tracking-widest">← Regresar</button>
                    <div className="text-sm font-bold uppercase tracking-widest">Vista de Folleto Técnico</div>
                    <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase hover:bg-blue-700">Guardar PDF</button>
                </header>
                <iframe 
                    src="/brochure-content.html" 
                    className="w-full h-full border-none"
                    title="Brochure Técnico"
                />
            </div>
        </div>
    );
};
