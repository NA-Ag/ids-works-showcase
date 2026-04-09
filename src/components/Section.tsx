import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'blue';
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '',
  variant = 'light',
  fullWidth = false
}) => {
  const bgColors = {
    light: 'bg-vault-paper',
    dark: 'bg-slate-100',
    blue: 'bg-vault-darkBlue text-white'
  };

  return (
    <section id={id} className={`py-20 md:py-32 ${bgColors[variant]} ${className}`}>
      <div className={`mx-auto ${fullWidth ? 'px-4 w-full' : 'container px-6 md:px-12 max-w-7xl'}`}>
        {children}
      </div>
    </section>
  );
};