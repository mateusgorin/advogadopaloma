
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { generateLegalAdvice } from '../services/geminiService';
import { Message } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Saudações. Sou o assistente virtual do escritório Advogado Paloma. Como posso auxiliá-lo?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await generateLegalAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response || "Lamentamos, ocorreu um erro na comunicação." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Desculpe, ocorreu uma instabilidade. Por favor, tente novamente em breve." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button - Adjusted for Mobile to stack with WhatsApp */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-[88px] right-6 md:bottom-28 md:right-8 z-50 p-3.5 md:p-4 gold-bg rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare className="text-black" size={24} md:size={28} />
        <span className="absolute -top-12 right-0 bg-black/80 text-white text-[10px] py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest border border-gold hidden md:block">Assistente Jurídico</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-0 right-0 md:bottom-8 md:right-8 z-[100] w-full md:max-w-[400px] h-full md:h-[600px] bg-[#0f0f0f] border-t md:border border-[#d4af37]/30 shadow-2xl md:rounded-lg flex flex-col transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full md:translate-y-20 opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="p-4 gold-bg flex justify-between items-center md:rounded-t-lg">
          <div className="flex items-center gap-3">
            <Bot size={20} className="text-black" />
            <div>
              <p className="text-black font-bold font-serif text-sm">Assistente Advogado Paloma</p>
              <span className="text-[10px] text-black/70 font-bold uppercase tracking-tighter">Online</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-black hover:scale-110 p-2">
            <X size={28} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#151515] via-[#0a0a0a] to-black">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#d4af37] text-black font-medium' : 'bg-[#1a1a1a] border border-white/5 text-gray-200'}`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1a1a1a] p-3 rounded-lg flex gap-1">
                <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-black/90 border-t border-white/10 pb-8 md:pb-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua dúvida..."
              className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] text-white"
            />
            <button 
              onClick={handleSend}
              className="px-4 gold-bg rounded-sm text-black"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;
