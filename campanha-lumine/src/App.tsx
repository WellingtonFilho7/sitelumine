import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FAQ } from "./components/FAQ";
import { FloatingDonateButton } from "./components/FloatingDonateButton";
import ContactForm from "./components/ContactForm";
import ContactSuccess from "./components/ContactSuccess";
import { useReveal } from "./hooks/useReveal";
import {
  Mail,
  Phone,
  Instagram,
  MapPin,
  BookOpen,
  Lightbulb,
  Clock,
  Apple,
  Shield,
} from "lucide-react";
import logoOrange from "figma:asset/5cc9005e4edc31a427bdeaeb8d45d71da74bb01c.png";

const pilotoItems = [
  { text: "Alfabetização e pré-alfabetização", icon: BookOpen },
  { text: "Estímulo à leitura e à linguagem", icon: Lightbulb },
  { text: "Rotina educativa no contraturno escolar", icon: Clock },
  { text: "Alimentação adequada nos dias de atividade", icon: Apple },
  { text: "Ambiente seguro, organizado e preparado para crianças", icon: Shield },
];

const metaItems = [
  "Climatização do espaço",
  "Mobiliário básico",
  "Fardamento",
  "Preparação da sala temática",
];

const apoioRecorrente = [
  {
    valor: "R$ 50",
    periodo: "/mês",
    descricao: "Ajuda a garantir a alimentação de uma criança nos dias de atividade",
    label: "alimentação",
    borderColor: "bg-[#E8850F]",
  },
  {
    valor: "R$ 150",
    periodo: "/mês",
    descricao: "Contribui para o funcionamento contínuo do espaço",
    label: "funcionamento",
    borderColor: "bg-[#2B7A9B]",
  },
  {
    valor: "R$ 300+",
    periodo: "/mês",
    descricao: "Ajuda o Lumine a ter estabilidade e se preparar para atender mais crianças",
    label: "estabilidade",
    borderColor: "bg-[#0B4F6C]",
  },
];

// Unsplash photos — will be replaced with real photos later
const photos = {
  gurinhemLandscape: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop",
  kidsActivity: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80&auto=format&fit=crop",
  childReading: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80&auto=format&fit=crop",
  teacherWithKids: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80&auto=format&fit=crop",
};

function RevealSection({ children, className = "", ...props }: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
  const ref = useReveal();
  return (
    <section ref={ref} className={`reveal ${className}`} {...props}>
      {children}
    </section>
  );
}

export default function App() {
  const isContactSuccess = window.location.hash === "#contato-sucesso";

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />
      <main>
        <Hero />

        {/* ============================================
            Seção 1 — Onde o Lumine nasce
            Layout: Grid 2 colunas (foto | texto)
           ============================================ */}
        <RevealSection
          id="sobre"
          className="py-20 md:py-28 bg-[#FAF7F2] scroll-mt-20"
          aria-labelledby="onde-nasce-title"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              {/* Photo */}
              <div className="order-1">
                <img
                  src={photos.gurinhemLandscape}
                  alt="Paisagem do agreste paraibano"
                  className="rounded-2xl object-cover w-full aspect-[4/3] shadow-lg"
                />
              </div>

              {/* Text */}
              <div className="order-2">
                <h2
                  id="onde-nasce-title"
                  className="text-[#0B4F6C] mb-3"
                >
                  Onde o Lumine nasce
                </h2>
                <div className="w-6 h-0.5 bg-[#E8850F] mb-8"></div>

                <div className="space-y-5">
                  <p className="text-[#3D4550] text-lg leading-relaxed">
                    Gurinhém é uma pequena cidade do interior da Paraíba. Conhecida como a joia rara do Agreste, carrega beleza, história e potencial.
                  </p>

                  <p className="text-[#3D4550] leading-relaxed">
                    Mas também enfrenta desafios reais. Muitas crianças crescem com pouco acesso à leitura, a espaços educativos de qualidade e a acompanhamento que fortaleça seu desenvolvimento desde cedo.
                  </p>

                  <div className="border-l-[3px] border-[#E8850F] pl-5 py-1">
                    <p className="text-[#0B4F6C] text-xl italic" style={{ fontFamily: '"Libre Baskerville", serif' }}>
                      É nesse contexto que o Instituto Lumine começa.
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 bg-white border border-[#E5DED4] rounded-full px-4 py-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E8850F]" />
                      <span className="text-[#6B7280] text-sm">Gurinhém, Paraíba</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* ============================================
            Seção 2 — O que é o Instituto Lumine
            Background: navy-deep — contraste real
           ============================================ */}
        <RevealSection
          className="py-24 md:py-36 relative overflow-hidden"
          aria-labelledby="o-que-e-title"
          style={{
            background: 'linear-gradient(135deg, #073D54 0%, #0A5A78 50%, #073D54 100%)',
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2
              id="o-que-e-title"
              className="text-white mb-6"
            >
              O que é o Instituto Lumine
            </h2>

            <p className="text-white/75 text-lg leading-relaxed mb-16">
              Um projeto de contraturno escolar voltado para crianças de 4 a 9 anos em situação de vulnerabilidade.
            </p>

            {/* THE "24" — impactful centered number */}
            <div className="my-12 flex flex-col items-center justify-center">
              <p
                className="text-[#E8850F] leading-none"
                style={{
                  fontFamily: '"Libre Baskerville", serif',
                  fontSize: 'clamp(6rem, 15vw, 10rem)',
                  fontWeight: 700,
                }}
              >
                24
              </p>

              <div className="flex items-center justify-center gap-3 mt-4">
                <span className="w-8 h-px bg-[#E8850F]/40" />
                <p className="text-white/50 text-sm font-medium uppercase tracking-[0.2em]">
                  crianças
                </p>
                <span className="w-8 h-px bg-[#E8850F]/40" />
              </div>
            </div>

            <p className="text-white/60 text-sm font-medium uppercase tracking-[0.1em] mb-10">
              com foco em alfabetização e pré-alfabetização
            </p>

            <p className="text-white/75 leading-relaxed max-w-xl mx-auto">
              O Lumine nasce para ser um espaço de educação cristã clássica, acolhimento e cuidado. Um lugar que vai além da sala de aula.
            </p>

            <p className="text-white/75 leading-relaxed max-w-xl mx-auto mt-4">
              Aqui, o aprendizado caminha junto com a formação do caráter, o cuidado com a criança inteira e o apoio às famílias.
            </p>
          </div>
        </RevealSection>

        {/* ============================================
            Seção 3 — O que oferecemos no piloto
            Cards com ícones + foto wide abaixo
           ============================================ */}
        <RevealSection
          className="py-20 md:py-28 bg-[#FAF7F2]"
          aria-labelledby="piloto-title"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2
                id="piloto-title"
                className="text-[#0B4F6C] mb-3"
              >
                O que oferecemos no piloto
              </h2>
              <div className="w-6 h-0.5 bg-[#E8850F] mb-6"></div>

              <p className="text-[#3D4550] text-lg leading-relaxed">
                No início, o Instituto Lumine vai concentrar seus esforços no essencial.
              </p>
            </div>

            {/* Icon cards grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10 stagger">
              {pilotoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="card-premium reveal bg-white rounded-xl p-6 border border-[#E5DED4] text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0B4F6C]/5 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-5 h-5 text-[#0B4F6C]" />
                    </div>
                    <p className="text-[#3D4550] text-sm leading-snug">{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Wide photo */}
            <img
              src={photos.kidsActivity}
              alt="Crianças em atividade educativa"
              className="w-full rounded-2xl object-cover aspect-[21/9] shadow-lg"
            />

            <p className="text-[#6B7280] text-sm leading-relaxed mt-8 max-w-2xl">
              O projeto contará com apoios pontuais de profissionais, como psicólogos, médicos e outros parceiros, sempre que necessário, para orientar, acolher e cuidar melhor das crianças e de suas famílias.
            </p>
          </div>
        </RevealSection>

        {/* ============================================
            Seção 4 — Por que precisamos de apoio agora
            Navy com foto ao lado (grid invertido)
           ============================================ */}
        <RevealSection
          className="py-24 md:py-36 relative overflow-hidden"
          aria-labelledby="apoio-agora-title"
          style={{
            background: 'linear-gradient(to bottom, #073D54, #052F42)',
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              {/* Text */}
              <div>
                <h2
                  id="apoio-agora-title"
                  className="text-white mb-8"
                >
                  Por que precisamos de apoio agora
                </h2>

                <div className="space-y-6">
                  <p className="text-white/80 text-lg leading-relaxed">
                    O Lumine está nos seus primeiros passos. E este é o momento mais decisivo.
                  </p>

                  <p className="text-white/75 leading-relaxed">
                    Antes de abrir as portas, precisamos preparar o espaço, organizar o funcionamento e garantir que tudo esteja pronto para receber as crianças com dignidade.
                  </p>

                  <div className="border-l-2 border-[#E8850F]/60 pl-6 my-8">
                    <p className="text-[#E8850F] italic text-xl" style={{ fontFamily: '"Libre Baskerville", serif' }}>
                      Este financiamento viabiliza a abertura em março de 2026.
                    </p>
                  </div>

                  <p className="text-white/75 leading-relaxed">
                    Abrir as portas exige estrutura mínima e preparada.
                  </p>
                </div>
              </div>

              {/* Photo */}
              <div>
                <img
                  src={photos.childReading}
                  alt="Criança lendo um livro"
                  className="rounded-2xl object-cover w-full aspect-[3/4] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </RevealSection>

        {/* ============================================
            Seção 5 — Meta do financiamento
           ============================================ */}
        <RevealSection
          id="meta"
          className="py-24 md:py-32 bg-[#FAF7F2] scroll-mt-20"
          aria-labelledby="meta-title"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="meta-title"
              className="text-[#0B4F6C] mb-8"
            >
              Meta do financiamento
            </h2>

            <div className="relative inline-block mb-4">
              <p
                className="text-[#0B4F6C] relative z-10"
                style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}
              >
                R$ 22.000
              </p>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#E8850F]/20 rounded-full" />
            </div>

            <p className="text-[#6B7280] text-sm mb-14">
              Meta de abertura. Estrutura física mínima para iniciar em março de 2026.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-lg mx-auto stagger">
              {metaItems.map((item, index) => (
                <div
                  key={index}
                  className="card-premium reveal bg-white p-6 rounded-lg border border-[#F0EBE3] text-left"
                >
                  <span className="text-[#3D4550] text-sm font-medium flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8850F] flex-shrink-0" />
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[#6B7280] mb-8">
              Abertura: <span className="text-[#0B4F6C] font-semibold">março de 2026</span>
            </p>

            <Link
              to="/doar"
              className="btn-shine inline-block bg-[#E8850F] !text-white px-8 py-4 rounded-lg hover:bg-[#D4740A] transition-all font-semibold shadow-lg shadow-[#E8850F]/20 hover:shadow-xl hover:shadow-[#E8850F]/30"
            >
              Apoiar o início do Lumine
            </Link>
          </div>
        </RevealSection>

        {/* ============================================
            Seção 6 — Apoio recorrente
           ============================================ */}
        <RevealSection
          id="apoio-recorrente"
          className="py-20 md:py-28 bg-[#EDE6DA] scroll-mt-20"
          aria-labelledby="recorrente-title"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                id="recorrente-title"
                className="text-[#0B4F6C] mb-6"
              >
                Apoio recorrente
              </h2>

              <p className="text-[#3D4550] text-lg leading-relaxed max-w-xl mx-auto">
                Abrir as portas é o primeiro passo. A permanência será construída com responsabilidade, passo a passo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-12 stagger">
              {apoioRecorrente.map((item, index) => (
                <div
                  key={index}
                  className="card-premium reveal bg-white p-8 rounded-xl border border-[#F0EBE3] text-center overflow-hidden relative"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 ${item.borderColor}`} />

                  <p
                    className="text-[#0B4F6C] mb-1"
                    style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '2.25rem', fontWeight: 700 }}
                  >
                    {item.valor}
                  </p>
                  <p className="text-[#9CA3AF] text-xs font-medium uppercase tracking-wider mb-4">{item.periodo}</p>

                  <div className="w-8 h-px bg-[#E5DED4] mx-auto mb-4" />

                  <p className="text-[#3D4550] text-sm leading-relaxed">{item.descricao}</p>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <p className="text-[#3D4550] italic" style={{ fontFamily: '"Libre Baskerville", serif' }}>
                Para muitos, esse valor é um gasto comum do mês.<br />
                Para o Lumine, é continuidade.
              </p>

              <p className="text-[#6B7280]">
                Existem muitos projetos que começam. Poucos conseguem permanecer.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* ============================================
            Seção 7 — Nosso compromisso
            Grid texto | foto (educadora com crianças)
           ============================================ */}
        <RevealSection
          className="py-24 md:py-32 bg-[#FAF7F2]"
          aria-labelledby="compromisso-title"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              {/* Text */}
              <div>
                <h2
                  id="compromisso-title"
                  className="text-[#0B4F6C] mb-3"
                >
                  Nosso compromisso
                </h2>
                <div className="w-6 h-0.5 bg-[#E8850F] mb-10"></div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    {[
                      "Educação levada a sério.",
                      "Cuidado responsável.",
                      "Dignidade no trato com cada criança e cada família.",
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-1 self-stretch bg-[#E8850F]/30 rounded-full flex-shrink-0" />
                        <p className="text-[#0B4F6C] text-xl" style={{ fontFamily: '"Libre Baskerville", serif' }}>
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1 text-[#6B7280] text-sm uppercase tracking-wider pt-2">
                    <p>Sem distinção.</p>
                    <p>Com verdade.</p>
                  </div>

                  <p className="text-[#3D4550] leading-relaxed pt-4">
                    Se você acredita que educação é cuidado colocado em prática, caminhe com a gente nesse começo.
                  </p>

                  <Link
                    to="/doar"
                    className="btn-shine inline-block bg-[#E8850F] !text-white px-8 py-4 rounded-lg hover:bg-[#D4740A] transition-all font-semibold shadow-lg shadow-[#E8850F]/20 hover:shadow-xl hover:shadow-[#E8850F]/30"
                  >
                    Apoiar o Instituto Lumine
                  </Link>
                </div>
              </div>

              {/* Photo */}
              <div className="order-first md:order-last">
                <img
                  src={photos.teacherWithKids}
                  alt="Educadora com crianças em atividade de aprendizado"
                  className="rounded-2xl object-cover w-full aspect-[4/5] shadow-lg"
                />
              </div>
            </div>
          </div>
        </RevealSection>

        <FAQ />

        {/* ============================================
            Contato
           ============================================ */}
        <RevealSection
          id="contato"
          className="py-20 md:py-28 bg-[#FAF7F2] scroll-mt-20"
          aria-labelledby="contato-title"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="contato-title" className="text-[#0B4F6C] mb-3">
                Entre em contato
              </h2>
              <div className="w-6 h-0.5 bg-[#E8850F] mx-auto mb-6"></div>
              <p className="text-[#3D4550] text-lg max-w-xl mx-auto leading-relaxed">
                Se você deseja conhecer melhor o Instituto Lumine, apoiar o trabalho ou conversar sobre parcerias, estamos à disposição.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-12 stagger">
              <a
                href="mailto:contato@institutolumine.org"
                className="card-premium reveal bg-white rounded-xl p-6 text-center border border-[#E5DED4]"
              >
                <div className="w-12 h-12 rounded-full bg-[#0B4F6C]/5 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-5 h-5 text-[#0B4F6C]" aria-hidden />
                </div>
                <p className="text-[#9CA3AF] text-xs mb-1 uppercase tracking-wider">E-mail</p>
                <p className="text-[#0B4F6C] font-medium text-sm break-all">
                  contato@institutolumine.org
                </p>
              </a>

              <div className="card-premium reveal bg-white rounded-xl p-6 text-center border border-[#E5DED4]">
                <div className="w-12 h-12 rounded-full bg-[#0B4F6C]/5 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-5 h-5 text-[#0B4F6C]" aria-hidden />
                </div>
                <p className="text-[#9CA3AF] text-xs mb-1 uppercase tracking-wider">Telefone / WhatsApp</p>
                <p className="text-[#0B4F6C] font-medium text-sm">(83) 99910-1946</p>
                <a
                  href="https://wa.me/5583999101946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B4F6C] text-xs font-semibold mt-2 inline-block hover:text-[#E8850F]"
                >
                  Fale pelo WhatsApp
                </a>
              </div>

              <a
                href="https://instagram.com/instituto.lumine"
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium reveal bg-white rounded-xl p-6 text-center border border-[#E5DED4]"
              >
                <div className="w-12 h-12 rounded-full bg-[#0B4F6C]/5 flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-5 h-5 text-[#0B4F6C]" aria-hidden />
                </div>
                <p className="text-[#9CA3AF] text-xs mb-1 uppercase tracking-wider">Instagram</p>
                <p className="text-[#0B4F6C] font-medium text-sm">@instituto.lumine</p>
              </a>
            </div>

            {isContactSuccess ? (
              <ContactSuccess />
            ) : (
              <ContactForm />
            )}
          </div>
        </RevealSection>
      </main>

      {/* ============================================
          Footer
         ============================================ */}
      <footer
        className="text-white py-20"
        style={{ background: '#052F42' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <img
                src={logoOrange}
                alt="Instituto Lumine"
                className="w-20 h-20"
              />
            </div>
            <h3 className="mb-2 text-lg text-white">Instituto Lumine — Associação Lumine</h3>
            <p className="text-white/70 text-sm">
              Associação cristã sem fins lucrativos
            </p>
            <p className="text-white/50 text-sm mt-1">Gurinhém, Paraíba</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="#sobre"
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              Sobre o Lumine
            </a>
            <span className="text-white/20">·</span>
            <Link
              to="/doar"
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              Apoiar
            </Link>
            <span className="text-white/20">·</span>
            <a
              href="#faq"
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              FAQ
            </a>
            <span className="text-white/20">·</span>
            <a
              href="#contato"
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              Contato
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Instituto Lumine. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <FloatingDonateButton />
    </div>
  );
}
