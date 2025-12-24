
import React from 'react';
import { Scale } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-12 pb-32 md:py-16 bg-black border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Scale size={32} className="text-[#d4af37]" />
          </div>
          
          {/* Copyright Section - Absolute Center on Desktop, Normal flow on Mobile */}
          <div className="flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:-translate-x-1/2 w-full md:w-auto">
            <div className="font-sans text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
              &copy; {new Date().getFullYear()} Advogado Paloma Advocacia.
            </div>
            <a 
              href="https://www.gorinsolucoes.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-[9px] text-gray-600 hover:text-[#d4af37] uppercase tracking-[0.2em] font-bold transition-colors"
            >
              Site desenvolvido por Gorin soluções
            </a>
          </div>
          
          {/* Links Section - Right aligned with padding to avoid chat button overlap on desktop */}
          <div className="font-sans flex gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold md:pr-32">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
