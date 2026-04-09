import React, { useState, useEffect } from 'react';
import { X, GraduationCap, Calendar } from 'lucide-react';

const AdmissionsPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('ids_admissions_popup_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('ids_admissions_popup_seen', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-vault-darkBlue/80 backdrop-blur-md animate-fade-in">
      <div className="relative bg-white max-w-lg w-full rounded-3xl shadow-2xl overflow-hidden border-4 border-vault-yellow animate-scale-up">
        
        {/* Header Decor */}
        <div className="bg-vault-darkBlue p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Calendar size={20} className="text-vault-yellow" />
                <span className="font-sans font-black uppercase tracking-widest text-xs">Admissions 2026 - 2027</span>
            </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-vault-yellow transition-colors"
            >
                <X size={24} />
            </button>
        </div>

        {/* Content */}
        <div className="p-10 text-center space-y-8">
            <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto border-2 border-vault-yellow">
                <GraduationCap size={40} className="text-vault-darkBlue" />
            </div>
            
            <div className="space-y-4">
                <h3 className="text-3xl font-black text-vault-darkBlue uppercase tracking-tighter italic">Join Our Community</h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                    We are now accepting applications for the upcoming academic cycle. Secure your place in Mexico's premier educational environment.
                </p>
            </div>

            <a 
                href="/demos/standard/admissions" 
                onClick={() => setIsOpen(false)}
                className="block bg-vault-yellow text-vault-darkBlue py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-vault-darkBlue hover:text-white transition-all shadow-xl"
            >
                Apply Now
            </a>
        </div>

        {/* Footer Decor */}
        <div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
            <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest">Verified by IDS Security Systems</span>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPopup;