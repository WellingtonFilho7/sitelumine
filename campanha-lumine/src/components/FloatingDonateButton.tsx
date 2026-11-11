import { Heart, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function FloatingDonateButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de conhecer melhor o Instituto Lumine e saber como posso apoiar.'
  );
  const whatsappNumber = '5583999101946';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* Botão WhatsApp flutuante — pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`no-print fixed bottom-6 right-6 z-40 bg-[#25D366] !text-white px-6 py-3.5 rounded-full shadow-lg shadow-[#25D366]/25 hover:bg-[#20BA5A] hover:shadow-xl transform transition-all duration-500 flex items-center gap-2 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'
        }`}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline font-semibold text-sm">WhatsApp</span>
      </a>

      {/* Botão de doação flutuante — pill */}
      <Link
        to="/doar"
        className={`no-print fixed bottom-20 right-6 z-40 bg-[#E8850F] !text-white px-6 py-3.5 rounded-full shadow-lg shadow-[#E8850F]/25 hover:bg-[#D4740A] hover:shadow-xl hover:shadow-[#E8850F]/35 transform transition-all duration-500 flex items-center gap-2 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'
        }`}
        aria-label="Doar agora"
      >
        <Heart className="w-5 h-5" />
        <span className="hidden sm:inline font-semibold text-sm">Doar agora</span>
      </Link>
    </>
  );
}
