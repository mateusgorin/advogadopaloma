
import React, { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
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
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${scrolled || isMenuOpen ? 'bg-black/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="relative flex items-center gap-3 group cursor-pointer px-0 md:px-4 py-2 rounded-sm"
          >
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id="logo-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#926d0a" />
                  <stop offset="50%" stopColor="#c5a022" />
                  <stop offset="100%" stopColor="#f4d78a" />
                </linearGradient>
              </defs>
            </svg>
            
            <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 shrink-0">
              <div className="absolute inset-0 border border-[#c5a022]/30 rounded-full"></div>
              <Scale 
                size={16} 
                stroke="url(#logo-gold-gradient)" 
                className="relative z-10" 
                strokeWidth={1.5}
              />
            </div>

            <div className="flex flex-col relative z-10">
              <span className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] gold-text whitespace-nowrap">
                Advogado Paloma
              </span>
            </div>
          </a>
          
          {/* Desktop Nav */}
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

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:block px-6 py-2 border border-[#c5a022]/40 text-[#c5a022] font-sans text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#c5a022] hover:text-black transition-all duration-300 rounded-sm"
            >
              Contato
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-[#c5a022] p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-black transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-3xl text-white hover:text-[#c5a022] transition-colors tracking-tight uppercase italic"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full text-center py-4 bg-[#c5a022] text-black font-sans font-bold uppercase tracking-[0.3em] text-sm rounded-sm"
          >
            Solicitar Consultoria
          </a>
          
          <div className="pt-12 border-t border-white/10 w-full text-center">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-4">Brasília - DF</p>
            <div className="flex justify-center gap-6 text-[#c5a022]">
               <Scale size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
