import { Heart, ArrowUp, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingDonateButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão após rolar 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Mostra scroll to top após rolar 800px
      if (window.scrollY > 800) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToDonate = () => {
    const element = document.querySelector('#apoiar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de conhecer melhor o Instituto Lumine e saber como posso apoiar.'
  );
  const whatsappNumber = '5583999101946';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* Botão WhatsApp flutuante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`no-print fixed bottom-6 right-6 z-40 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:bg-[#20BA5A] transform transition-all duration-300 flex items-center gap-2 group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-semibold">WhatsApp</span>
      </a>

      {/* Botão de doação flutuante */}
      <button
        onClick={scrollToDonate}
        className={`no-print fixed bottom-24 right-6 z-40 bg-gradient-to-r from-[#F7941D] to-[#E67E00] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 flex items-center gap-2 group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        aria-label="Doar agora"
      >
        <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-semibold">Doar agora</span>
      </button>

      {/* Botão scroll to top */}
      <button
        onClick={scrollToTop}
        className={`no-print fixed bottom-[11.5rem] right-6 z-40 bg-[#0B4F6C] text-white p-3 rounded-full shadow-xl hover:bg-[#2B7A9B] transform transition-all duration-300 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
