
import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const DisclaimerPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeno delay para garantir que a animação de entrada funcione suavemente
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity duration-500"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#111] border border-[#d4af37] p-8 md:p-10 max-w-lg w-full shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-fade-in-up rounded-sm">
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#d4af37] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="mb-6 p-4 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37]">
            <AlertTriangle size={40} />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4 uppercase tracking-wide">
            Atenção <span className="gold-text italic">Visitante</span>
          </h2>

          <div className="h-[1px] w-16 bg-[#d4af37] mb-6"></div>

          <p className="font-sans text-gray-300 mb-4 leading-relaxed font-light">
            Este site está atualmente em fase de <strong className="text-[#d4af37]">construção e desenvolvimento</strong>.
          </p>

          <p className="font-sans text-gray-400 text-sm mb-8 leading-relaxed">
            Todas as informações, nomes, casos jurídicos e dados de contato apresentados aqui são meramente <strong className="text-white">fictícios e ilustrativos</strong>, servindo apenas para demonstração de layout e funcionalidades.
          </p>

          <button 
            onClick={handleClose}
            className="group relative w-full overflow-hidden rounded-sm gold-bg py-4 px-8 transition-all duration-300 hover:brightness-110"
          >
            <span className="relative z-10 text-black font-sans font-bold uppercase tracking-[0.2em] text-xs">
              Compreendo e Desejo Acessar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
