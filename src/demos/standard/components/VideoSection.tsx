import React from 'react';
import { Shield } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-vault-paper border-y border-gray-200">
      <div className="container mx-auto px-4 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex flex-col items-center gap-4">
                <Shield className="w-16 h-16 text-vault-blue opacity-20" />
                <h2 className="text-4xl md:text-5xl font-black text-vault-darkBlue uppercase tracking-tighter italic">
                  Institutional Integrity
                </h2>
                <div className="w-24 h-1 bg-vault-yellow"></div>
            </div>
            
            <p className="text-xl text-gray-500 font-medium leading-relaxed italic">
                "We build the infrastructure, you own the sovereignty. A unified ecosystem designed for the future of education."
            </p>

            <div className="pt-8 font-mono text-[10px] font-black uppercase tracking-[0.5em] text-vault-blue/40">
                // System Secured by IDS Works
            </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;