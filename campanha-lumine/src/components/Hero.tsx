import { Link } from 'react-router-dom';

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* Background photo */}
      <img
        src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80&auto=format&fit=crop"
        alt="Criança lendo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#052F42]/90 via-[#052F42]/50 to-[#052F42]/20" />

      {/* Content — positioned at bottom */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <p className="text-white/60 text-[13px] font-medium uppercase tracking-[0.2em] mb-5 animate-fade-in-up">
          Gurinhém, Paraíba
        </p>

        <h1
          className="text-white mb-6 animate-fade-in-up max-w-2xl"
          style={{ animationDelay: '100ms' }}
        >
          O Instituto Lumine vai começar.
        </h1>

        <p
          className="text-white/75 text-lg leading-relaxed max-w-xl mb-10 animate-fade-in-up"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', animationDelay: '200ms' }}
        >
          Educação cristã, cuidado e formação leitora para crianças em situação de vulnerabilidade.
        </p>

        <div
          className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <Link
            to="/doar"
            className="btn-shine bg-[#E8850F] !text-white px-8 py-4 rounded-lg hover:bg-[#D4740A] transition-all font-semibold shadow-lg shadow-black/20 hover:shadow-xl"
          >
            Apoiar o início
          </Link>

          <a
            href="#sobre"
            onClick={(e) => scrollToSection(e, '#sobre')}
            className="!text-white/80 hover:!text-white transition-colors font-medium inline-flex items-center gap-2 py-3.5"
          >
            Conhecer o projeto <span aria-hidden className="transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
