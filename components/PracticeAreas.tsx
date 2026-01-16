
import React, { useState } from 'react';
import { PRACTICE_AREAS, ICON_MAP } from '../constants';

const PracticeAreas: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-tight uppercase text-white">Áreas de <span className="gold-text italic">Atuação</span></h2>
          <div className="h-[2px] w-20 mx-auto mb-8 animate-gold-beam"></div>
          <p className="font-serif text-gray-400 max-w-2xl mx-auto text-lg italic font-light">
            "A lei é o equilíbrio entre a ordem e a liberdade. Atuamos onde a justiça se faz necessária."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {PRACTICE_AREAS.map((area) => (
            <div 
              key={area.id} 
              className={`group bg-[#111] border border-white/5 p-8 transition-all duration-500 relative overflow-hidden rounded-sm hover:border-[#c5a022]/30 hover:shadow-[0_0_30px_rgba(197,160,34,0.1)] ${expandedId === area.id ? 'ring-1 ring-[#c5a022]/50 shadow-[0_0_40px_rgba(197,160,34,0.15)]' : ''}`}
            >
              <div className="absolute -right-8 -top-8 text-white/5 group-hover:text-[#c5a022]/10 transition-colors duration-500 -z-0">
                {React.cloneElement(ICON_MAP[area.icon] as React.ReactElement<any>, { size: 140 })}
              </div>
              
              <div className="relative z-10">
                <div className="text-[#c5a022] mb-6 transform group-hover:scale-110 transition-transform duration-500 inline-block">
                  {ICON_MAP[area.icon]}
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-4 tracking-tight text-white">{area.title}</h3>
                {/* Tamanho de fonte aumentado de text-sm para text-[15px] para melhor legibilidade */}
                <p className="font-sans text-gray-400 leading-relaxed font-light mb-6 text-[15px]">
                  {area.description}
                </p>

                <div 
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedId === area.id ? 'max-h-[800px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
                >
                  <div className="font-sans text-gray-300 text-[15px] leading-relaxed border-t border-white/10 pt-6 mt-2">
                    {area.longDescription}
                  </div>
                </div>
                
                {/* Aumento sutil no botão de text-[10px] para text-[11px] */}
                <button 
                  onClick={(e) => toggleExpand(e, area.id)}
                  className="font-sans text-[#c5a022] text-[11px] uppercase tracking-[0.2em] font-bold flex items-center transition-all duration-300 hover:tracking-[0.3em] cursor-pointer"
                >
                  {expandedId === area.id ? 'Ver menos' : 'Saiba Mais'} 
                  <span className={`ml-2 transition-transform duration-300 ${expandedId === area.id ? '-rotate-90' : ''}`}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
