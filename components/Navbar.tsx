
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
      const offset = 80; // Altura aproximada do Navbar
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <Scale size={32} className="text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
          <span className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] transition-colors duration-300">
            Advogado Paloma
          </span>
        </a>
        
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#d4af37] transition-colors duration-300 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:block px-6 py-2 border border-[#d4af37] text-[#d4af37] font-sans text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#d4af37] hover:text-black transition-all duration-300 cursor-pointer"
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
