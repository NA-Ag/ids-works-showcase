import React from 'react';
import { Globe } from 'lucide-react';

const LiteLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      <div className="bg-vault-blue p-2 rounded-sm border border-white/20">
        <Globe className="w-5 h-5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tighter text-vault-darkBlue uppercase leading-none">
          INSTITUCIÓN <span className="text-vault-blue">MX</span>
        </span>
        <span className="text-[8px] font-mono text-gray-400 tracking-[0.2em] leading-none mt-1 uppercase font-bold">
          ID OFICIAL INSTITUCIONAL
        </span>
      </div>
    </div>
  );
};

export default LiteLogo;