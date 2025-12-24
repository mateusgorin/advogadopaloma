
import React from 'react';
import { PRACTICE_AREAS, ICON_MAP } from '../constants';

const PracticeAreas: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-tight uppercase">Áreas de <span className="gold-text italic">Atuação</span></h2>
          <div className="h-[2px] w-20 mx-auto mb-8 animate-gold-beam"></div>
          <p className="font-sans text-gray-400 max-w-2xl mx-auto text-lg italic font-light">
            "A lei é o equilíbrio entre a ordem e a liberdade. Atuamos onde a justiça se faz necessária."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area) => (
            <div 
              key={area.id} 
              className="group bg-[#111] border border-white/5 p-8 hover:border-[#d4af37]/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-[#d4af37]/10 transition-colors duration-500">
                {React.cloneElement(ICON_MAP[area.icon] as React.ReactElement, { size: 140 })}
              </div>
              
              <div className="text-[#d4af37] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {ICON_MAP[area.icon]}
              </div>
              
              <h3 className="font-serif text-xl font-bold mb-4 tracking-tight">{area.title}</h3>
              <p className="font-sans text-gray-400 leading-relaxed font-light mb-6 text-sm">
                {area.description}
              </p>
              
              <a 
                href="#contact"
                onClick={handleScrollToContact}
                className="font-sans text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-bold flex items-center group-hover:translate-x-2 transition-transform duration-300 inline-flex cursor-pointer"
              >
                Saiba Mais <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
