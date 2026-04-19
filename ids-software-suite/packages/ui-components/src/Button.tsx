import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-mono font-bold uppercase tracking-wider transition-all duration-200 border-2 rounded-sm px-8 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-vault-yellow border-vault-yellow text-vault-darkBlue hover:bg-yellow-300 hover:border-yellow-300 focus:ring-vault-yellow",
    secondary: "bg-vault-blue border-vault-blue text-white hover:bg-blue-600 hover:border-blue-600 focus:ring-vault-blue",
    outline: "bg-transparent border-vault-blue text-vault-blue hover:bg-vault-blue hover:text-white focus:ring-vault-blue"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
