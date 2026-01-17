
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#050505] overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-2 md:-inset-4 border-2 border-[#c5a022]/20 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
            <img 
              src="https://i.ibb.co/20XvpCYM/Chat-GPT-Image-24-de-dez-de-2025-11-50-07.png" 
              alt="Advogado Paloma" 
              className="relative z-10 w-full h-[350px] md:h-[600px] object-contain grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl bg-[#0a0a0a]/50"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 gold-bg text-black p-4 md:p-8 z-20 animate-float-badge shadow-2xl">
              <p className="font-serif text-2xl md:text-3xl font-bold">15+</p>
              <p className="font-sans text-[8px] md:text-[10px] uppercase font-bold tracking-widest">Anos de Excelência</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <span className="font-serif text-[#c5a022] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4 block">A Mente Por Trás da Estratégia</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight text-white">Advogado <span className="gold-text italic">Paloma</span></h2>
            
            <div className="space-y-4 md:space-y-6 font-sans text-gray-400 font-light leading-relaxed md:leading-loose text-base md:text-lg">
              <p>
                Bacharel em Direito com especialização em alta complexidade jurídica, o Advogado Paloma consolidou sua carreira através da defesa intransigente dos interesses de seus clientes, unindo tradição técnica à inovação estratégica.
              </p>
              <p>
                Seu escritório é reconhecido pela discrição absoluta e pela capacidade de resolver litígios de grande impacto nacional.
              </p>
              <p className="italic border-l-4 border-[#c5a022] pl-4 md:pl-6 font-serif text-lg md:text-xl text-white">
                "Advocacia não é apenas o domínio das leis, mas a arte de aplicá-las com sabedoria, ética e coragem."
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12">
              <div>
                <h4 className="font-serif text-[#c5a022] font-bold mb-2 text-xs md:text-sm uppercase tracking-widest">Formação</h4>
                <p className="font-sans text-xs md:text-sm text-gray-500">Doutorado em Direito Civil pela USP e Especialização em Compliance.</p>
              </div>
              <div>
                <h4 className="font-serif text-[#c5a022] font-bold mb-2 text-xs md:text-sm uppercase tracking-widest">Diferencial</h4>
                <p className="font-sans text-xs md:text-sm text-gray-500">Atendimento personalizado e disponibilidade 24/7 para urgências.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
