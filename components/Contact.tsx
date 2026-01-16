
import React, { FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo contato. Sua solicitação foi encaminhada à equipe do Advogado Paloma.");
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="font-serif text-4xl font-bold mb-8 text-white tracking-tight uppercase">Contato <br /><span className="gold-text italic">Direto</span></h2>
            <p className="font-sans text-gray-400 mb-12 font-light text-lg">
              Sediados na capital federal, oferecemos atuação estratégica nos Tribunais Superiores e consultoria jurídica de elite para todo o Brasil.
            </p>
            
            <div className="space-y-8 font-sans">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-[#c5a022]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 tracking-[0.3em] font-bold mb-1">Telefone</p>
                  <p className="text-white font-semibold">+55 (61) 0000-0000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-[#c5a022]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 tracking-[0.3em] font-bold mb-1">E-mail</p>
                  <p className="text-white font-semibold">contato@advogadopaloma.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-[#c5a022]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 tracking-[0.3em] font-bold mb-1">Endereço</p>
                  <p className="text-white font-semibold">SCN Quadra 2, Bloco D, Torre B<br />Liberty Mall - Asa Norte, Brasília / DF</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-[#111] p-10 border border-white/5 shadow-2xl relative group-form rounded-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 font-sans">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#c5a022] font-bold">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border-b border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#c5a022] transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#c5a022] font-bold">Seu E-mail</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border-b border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#c5a022] transition-all"
                    placeholder="exemplo@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 font-sans">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#c5a022] font-bold">Área de Interesse</label>
                  <select className="w-full bg-white/5 border-b border-white/10 px-4 py-3 text-white/70 focus:outline-none focus:border-[#c5a022] transition-all appearance-none cursor-pointer">
                    <option className="bg-[#111]">Selecione uma área</option>
                    <option className="bg-[#111]">Direito Civil</option>
                    <option className="bg-[#111]">Direito Criminal</option>
                    <option className="bg-[#111]">Direito do Consumidor</option>
                    <option className="bg-[#111]">Tribunais Superiores (STF/STJ)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#c5a022] font-bold">Assunto</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border-b border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#c5a022] transition-all"
                    placeholder="Qual o motivo do contato?"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-12 font-sans">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#c5a022] font-bold">Mensagem</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-white/5 border-b border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#c5a022] transition-all resize-none"
                  placeholder="Descreva brevemente sua situação..."
                ></textarea>
              </div>
              
              <button type="submit" className="group relative w-full overflow-hidden rounded-sm gold-bg py-5 px-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(197,160,34,0.3)] cursor-pointer">
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-10"></div>
                <div className="relative z-20 flex justify-center items-center gap-3">
                  <span className="text-black font-sans font-bold uppercase tracking-[0.3em] text-xs">Solicitar Consultoria</span>
                  <span className="text-black text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;