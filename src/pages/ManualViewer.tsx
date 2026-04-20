import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const ManualViewer: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 z-[100] bg-gray-100 overflow-hidden">
            <div className="h-full flex flex-col">
                <header className="p-4 bg-white shadow-sm flex justify-between items-center z-10">
                    <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-black font-bold uppercase text-xs tracking-widest">← Regresar</button>
                    <div className="text-sm font-bold uppercase tracking-widest text-vault-darkBlue">Manual Técnico del Módulo</div>
                    <button onClick={() => window.print()} className="bg-vault-blue text-white px-4 py-2 rounded-full text-xs font-bold uppercase hover:bg-vault-darkBlue transition-colors">Guardar PDF</button>
                </header>
                <iframe 
                    src={`/manuals/${id}.html`} 
                    className="w-full h-full border-none bg-white"
                    title={`Manual Técnico - ${id}`}
                />
            </div>
        </div>
    );
};