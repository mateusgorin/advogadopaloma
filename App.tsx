
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import DisclaimerPopup from './components/DisclaimerPopup';

const App: React.FC = () => {
  // Simple scroll animation logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      el.classList.add('opacity-0', 'transition-all', 'duration-1000', 'transform', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-[#d4af37] selection:text-black">
      <DisclaimerPopup />
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="scroll-reveal">
          <About />
        </div>
        
        <div className="scroll-reveal">
          <PracticeAreas />
        </div>
        
        {/* Quote Section */}
        <section className="py-24 bg-[#050505] flex justify-center items-center px-6">
          <div className="max-w-5xl text-center scroll-reveal">
            <p className="font-serif italic text-3xl md:text-5xl leading-tight mb-8 text-white">
              "A excelência jurídica reside na precisão técnica aplicada com a força da integridade."
            </p>
            {/* Linha com animação de degrade branco/dourado */}
            <div className="h-1 w-20 mx-auto rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)] animate-gold-beam"></div>
          </div>
        </section>

        <div className="scroll-reveal">
          <Contact />
        </div>
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <AIChat />

      {/* Tailwind animation extensions */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes alivePhoto {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.15) translate(-1%, -1%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }

        @keyframes floatBadge {
          0% {
            transform: translateY(0px);
            box-shadow: 0 0 0 rgba(212, 175, 55, 0);
          }
          50% {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
          }
          100% {
            transform: translateY(0px);
            box-shadow: 0 0 0 rgba(212, 175, 55, 0);
          }
        }

        @keyframes textShimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes beamMove {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-alive-photo {
          animation: alivePhoto 40s ease-in-out infinite;
        }

        .animate-float-badge {
          animation: floatBadge 4s ease-in-out infinite;
        }

        .animate-text-shimmer {
          animation: textShimmer 4s linear infinite;
        }

        .animate-shine {
          animation: shine 1s ease-in-out forwards;
        }

        .animate-gold-beam {
          background: linear-gradient(90deg, #b8860b 0%, #d4af37 25%, #ffffff 50%, #d4af37 75%, #b8860b 100%);
          background-size: 200% 100%;
          animation: beamMove 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
