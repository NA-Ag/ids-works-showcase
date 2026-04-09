import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
  isEn: boolean;
}

export const Toast = ({ message, isEn }: ToastProps) => {
  if (!message) return null;
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-vault-darkBlue text-white px-6 py-3 rounded-full shadow-2xl border-2 border-vault-yellow flex items-center gap-3 animate-fade-in-up max-w-[90vw] text-center">
        <AlertCircle size={18} className="text-vault-yellow shrink-0" />
        <span className="text-xs font-bold uppercase tracking-tight">{message}</span>
    </div>
  );
};
