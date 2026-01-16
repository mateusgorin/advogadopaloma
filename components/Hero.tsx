
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070" 
          alt="Escritório de Advocacia" 
          className="w-full h-full object-cover opacity-30 grayscale animate-alive-photo"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-white">
          Advogado <br />
          <span className="gold-text italic">Paloma</span>
        </h1>
        
        <p className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Com maestria jurídica e dedicação inabalável, transformamos desafios complexos em vitórias estratégicas sob a liderança do Advogado Paloma.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a 
            href="#services"
            onClick={(e) => handleScrollTo(e, 'services')}
            className="gold-bg text-black font-sans font-bold py-4 px-10 rounded-sm uppercase tracking-[0.2em] text-xs hover:brightness-110 transition-all shadow-lg shadow-[#c5a022]/20 inline-block cursor-pointer"
          >
            Conhecer Atuação
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="bg-transparent border border-white/20 text-white font-sans font-bold py-4 px-10 rounded-sm uppercase tracking-[0.2em] text-xs hover:border-[#c5a022] hover:text-[#c5a022] transition-all inline-block cursor-pointer"
          >
            Falar com Especialista
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => handleScrollTo(e, 'about')}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 cursor-pointer hover:border-[#c5a022] transition-colors"
        >
          <div className="w-1 h-2 bg-[#c5a022] rounded-full"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;