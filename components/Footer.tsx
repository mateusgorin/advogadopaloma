
import React from 'react';
import { Scale } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo Section replicate form Navbar */}
          <div className="flex items-center gap-3">
            <Scale size={32} className="text-[#d4af37]" />
            <span className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Advogado Paloma
            </span>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="font-sans text-center text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
              &copy; {new Date().getFullYear()} Advogado Paloma Advocacia. Todos os direitos reservados.
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
          
          <div className="font-sans flex gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
