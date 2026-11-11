import type { MouseEvent } from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoCircle from 'figma:asset/88b7b4c7a18a53700068f70657333846a0fb9141.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Sobre o Lumine', href: '#sobre' },
    { label: 'Meta', href: '#meta' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    if (!isHomePage) {
      window.location.href = '/' + href;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (!isHomePage) {
      window.location.href = '/';
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // On home page: transparent when at top, opaque when scrolled
  // On other pages: always opaque
  const isTransparent = isHomePage && !scrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md border-b border-[#E5DED4]/50 shadow-sm'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group"
          >
            <img
              src={logoCircle}
              alt="Instituto Lumine"
              className={`transition-all duration-300 group-hover:scale-105 ${scrolled ? 'w-10 h-10 sm:w-11 sm:h-11' : 'w-12 h-12 sm:w-14 sm:h-14'}`}
            />
            <span
              className={`hidden sm:block font-semibold text-lg transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-[#0B4F6C]'
              }`}
              style={{ fontFamily: '"Libre Baskerville", serif' }}
            >
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
                className={`px-4 py-2 font-medium transition-colors ${
                  isTransparent
                    ? '!text-white/80 hover:!text-white'
                    : 'text-[#3D4550] hover:text-[#0B4F6C]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/doar"
              className="btn-shine ml-4 bg-[#E8850F] !text-white px-6 py-2.5 rounded-lg hover:bg-[#D4740A] transition-colors font-semibold shadow-md shadow-[#E8850F]/15"
            >
              Apoiar
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
              isTransparent ? 'hover:bg-white/10' : 'hover:bg-[#F0EBE3]'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isTransparent ? 'text-white' : 'text-[#0B4F6C]'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isTransparent ? 'text-white' : 'text-[#0B4F6C]'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#E5DED4]/50 animate-fadeIn" aria-label="Navegação principal mobile">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                className="block w-full text-left py-4 px-4 text-[#3D4550] hover:text-[#0B4F6C] hover:bg-[#F0EBE3] rounded-lg transition-all font-medium min-h-[44px] flex items-center"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/doar"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-shine block w-full text-center bg-[#E8850F] !text-white px-6 py-4 rounded-lg hover:bg-[#D4740A] transition-colors mt-4 min-h-[48px] flex items-center justify-center font-semibold shadow-md shadow-[#E8850F]/15"
            >
              Apoiar
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
