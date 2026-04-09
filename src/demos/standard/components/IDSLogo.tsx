import React from 'react';

export const ColegioIDSLogo: React.FC<{ className?: string, inverted?: boolean }> = ({ className = "h-12", inverted = false }) => {
  const primary = inverted ? "#FFD700" : "#003366"; // Vault Yellow or Dark Blue
  const secondary = inverted ? "#FFFFFF" : "#005C97"; // White or Vault Blue

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto drop-shadow-md">
        {/* Outer Gear/Sun shape inspired by Vault-Tec */}
        <path 
          d="M50 5 L55 15 L65 12 L68 22 L78 22 L78 32 L88 35 L85 45 L95 50 L85 55 L88 65 L78 68 L78 78 L68 78 L65 88 L55 85 L50 95 L45 85 L35 88 L32 78 L22 78 L22 68 L12 65 L15 55 L5 50 L15 45 L12 35 L22 32 L22 22 L32 22 L35 12 L45 15 Z" 
          fill={primary} 
        />
        {/* Inner Circle */}
        <circle cx="50" cy="50" r="32" fill={secondary} stroke={primary} strokeWidth="4" />
        {/* The "IDS" Shield/Syllabus Mark */}
        <path 
          d="M50 30 L65 35 V55 C65 65 50 72 50 72 C50 72 35 65 35 55 V35 L50 30Z" 
          fill={primary} 
        />
        <text x="50" y="56" textAnchor="middle" fill={secondary} fontSize="12" fontWeight="900" fontFamily="sans-serif">IDS</text>
      </svg>
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-black tracking-tighter text-xl ${inverted ? 'text-white' : 'text-vault-darkBlue'}`}>COLEGIO</span>
        <span className={`font-mono font-bold tracking-[0.3em] text-sm ${inverted ? 'text-vault-yellow' : 'text-vault-blue'}`}>IDS WORKS</span>
      </div>
    </div>
  );
};
