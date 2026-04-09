import React, { useEffect } from 'react';
import { X, CheckCircle2, GraduationCap, Clock, BookOpen, Shield } from 'lucide-react';

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  age?: string;
  description: string;
  features: string[];
  color?: string;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  age, 
  description, 
  features,
  color = "bg-vault-blue"
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-vault-darkBlue/80 backdrop-blur-md animate-fade-in" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-scale-up border-t-8 border-vault-yellow">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-vault-darkBlue hover:bg-gray-100 rounded-full transition-all z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col">
          {/* Header */}
          <div className={`${color} p-10 text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={20} className="text-vault-yellow" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Curriculum Preview</span>
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-tight">{title}</h3>
              {age && (
                <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold">
                  <Clock size={14} /> Age Group: {age}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-10 space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <BookOpen size={14} /> Overview
              </h4>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                {description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Shield size={14} /> Key Learning Outcomes
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <CheckCircle2 size={18} className="text-vault-blue shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-vault-darkBlue leading-tight uppercase tracking-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onClose}
                className="flex-grow bg-vault-darkBlue text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-vault-blue transition-all"
              >
                Close Preview
              </button>
              <a 
                href="/demos/standard/admissions"
                className="flex-grow bg-vault-yellow text-vault-darkBlue py-4 rounded-xl font-black uppercase tracking-widest text-xs text-center hover:bg-white border-2 border-transparent hover:border-vault-yellow transition-all"
              >
                Apply for this Stage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
