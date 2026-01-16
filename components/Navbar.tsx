
import React, { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
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

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'O Advogado', href: '#about' },
    { name: 'Áreas de Atuação', href: '#services' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="relative flex items-center gap-3 group cursor-pointer px-4 py-2 rounded-sm"
        >
          {/* Definição de Gradiente SVG para o Ícone */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="logo-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#926d0a" />
                <stop offset="50%" stopColor="#c5a022" />
                <stop offset="100%" stopColor="#f4d78a" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
            {/* Círculo de contenção elegante */}
            <div className="absolute inset-0 border border-[#c5a022]/30 rounded-full group-hover:border-[#c5a022]/60 transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-[#c5a022]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            
            <Scale 
              size={18} 
              stroke="url(#logo-gold-gradient)" 
              className="relative z-10 group-hover:scale-110 transition-all duration-500" 
              strokeWidth={1.5}
            />
            
            {/* Brilho sutil atrás do ícone */}
            <div className="absolute inset-0 bg-[#c5a022]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full -z-10"></div>
          </div>

          <div className="flex flex-col relative z-10">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] gold-text group-hover:brightness-125 transition-all duration-300 whitespace-nowrap">
              Advogado Paloma
            </span>
          </div>
        </a>
        
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-[#c5a022] transition-colors duration-300 cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a022] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:block px-6 py-2 border border-[#c5a022]/40 text-[#c5a022] font-sans text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#c5a022] hover:text-black hover:border-[#c5a022] transition-all duration-300 cursor-pointer rounded-sm shadow-[0_0_10px_rgba(197,160,34,0.05)] hover:shadow-[0_0_15px_rgba(197,160,34,0.2)]"
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
