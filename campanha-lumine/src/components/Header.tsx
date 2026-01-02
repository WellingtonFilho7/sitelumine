import type { MouseEvent } from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoCircle from 'figma:asset/88b7b4c7a18a53700068f70657333846a0fb9141.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Sobre o Lumine', href: '#sobre' },
    { label: 'Como apoiar', href: '#apoiar' },
    { label: 'Perguntas frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm bg-opacity-98">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <img 
              src={logoCircle} 
              alt="Instituto Lumine" 
              className="w-14 h-14 sm:w-16 sm:h-16 transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:block text-[#0B4F6C] font-semibold text-lg">
              Instituto Lumine
            </span>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                className="text-gray-700 hover:text-[#0B4F6C] px-4 py-2 rounded-lg hover:bg-[#EFF5F8] transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F6C] focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#apoiar"
              onClick={(event) => scrollToSection(event, '#apoiar')}
              className="ml-4 bg-[#F7941D] text-white px-6 py-2.5 rounded-full hover:bg-[#E67E00] transition-all shadow-md hover:shadow-lg transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:ring-offset-2"
            >
              Apoiar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-[#EFF5F8] rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0B4F6C]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0B4F6C]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#EFF5F8] animate-fadeIn" aria-label="Navegação principal mobile">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-[#0B4F6C] hover:bg-[#EFF5F8] rounded-lg transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F6C] focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#apoiar"
              onClick={(event) => scrollToSection(event, '#apoiar')}
              className="block w-full text-center bg-[#F7941D] text-white px-6 py-3 rounded-full hover:bg-[#E67E00] transition-all mt-4 shadow-md"
            >
              Apoiar
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
