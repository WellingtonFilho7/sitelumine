import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FAQ } from "./components/FAQ";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Heart,
  Home,
  Book,
  Users,
  CheckCircle,
  Mail,
  Phone,
  Instagram,
  TrendingUp,
  Target,
  Award,
  ShoppingBag,
} from "lucide-react";
import logoOrange from "figma:asset/5cc9005e4edc31a427bdeaeb8d45d71da74bb01c.png";

const pillars = [
  {
    icon: Book,
    title: "Educação cristã clássica",
    description: "Formação fundamentada na tradição cristã e na pedagogia clássica",
  },
  {
    icon: Heart,
    title: "Formação integral da criança",
    description: "Desenvolvimento intelectual, moral e espiritual de cada criança",
  },
  {
    icon: Users,
    title: "Compromisso com contextos de vulnerabilidade",
    description: "Atuação dedicada a crianças em situação de vulnerabilidade social",
  },
] as const;

const impactItems = [
  {
    icon: TrendingUp,
    title: "Melhoria no desempenho escolar",
    description: "Fortalecimento das habilidades acadêmicas e desenvolvimento do potencial de aprendizagem.",
  },
  {
    icon: Heart,
    title: "Formação de valores e virtudes cristãs",
    description: "Cultivo de caráter sólido, baseado em princípios cristãos de fé, esperança e amor.",
  },
  {
    icon: Users,
    title: "Fortalecimento emocional e social",
    description: "Desenvolvimento de habilidades socioemocionais e construção de relacionamentos saudáveis.",
  },
  {
    icon: Award,
    title: "Proteção contra riscos sociais",
    description: "Ambiente seguro que protege as crianças de vulnerabilidades e oferece cuidado integral.",
  },
  {
    icon: Home,
    title: "Envolvimento comunitário",
    description: "Fortalecimento dos laços com famílias e a comunidade local através do diálogo e parceria.",
  },
] as const;

const supportOptions = [
  {
    icon: Heart,
    title: "Apoio recorrente",
    description: "Contribuições mensais que sustentam o funcionamento contínuo das atividades educacionais.",
  },
  {
    icon: Target,
    title: "Doações pontuais",
    description: "Apoio em momentos específicos para projetos ou necessidades particulares.",
  },
  {
    icon: Users,
    title: "Parcerias institucionais",
    description: "Colaborações com igrejas, empresas e organizações para ampliar o alcance e impacto.",
  },
  {
    icon: ShoppingBag,
    title: "Doação de materiais e recursos",
    description: "Contribuições em espécie: livros, materiais pedagógicos, mobiliário e equipamentos.",
  },
] as const;

export default function App() {
  const pixKey = "eae0b735-1a54-4b66-a791-3d0dc30aa728";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />

        {/* Pilares Institucionais */}
        <section className="py-20 md:py-28 bg-white" aria-labelledby="pilares-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-12 space-y-4">
              <h2 id="pilares-title" className="text-[#0B4F6C] mb-4">
                Como transformamos vidas
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <pillar.icon className="w-8 h-8 text-white" aria-hidden />
                  </div>
                  <h3 className="text-[#0B4F6C] mb-4">{pillar.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{pillar.description}</p>
                </article>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#sobre"
                  className="px-8 py-3 bg-[#0B4F6C] text-white rounded-full hover:bg-[#2B7A9B] transition-all"
                >
                  Conheça o Lumine
                </a>
                <a
                  href="#apoiar"
                  className="px-8 py-3 border-2 border-[#0B4F6C] text-[#F7941D] rounded-full hover:bg-[#0B4F6C] hover:text-white transition-all"
                  >
                  Formas de apoiar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Proposta Educacional */}
        <section className="py-20 md:py-28 bg-white" aria-labelledby="proposta-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-7">
                <div>
                  <h2 id="proposta-title" className="text-[#0B4F6C] mb-6">
                    O método que funciona
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] rounded-full mb-6"></div>
                </div>

                <p className="text-[#4A5568] text-lg leading-relaxed">
                  A proposta educacional do Lumine se fundamenta na educação cristã clássica, que compreende o aprendizado como um processo formativo integral. O ensino não se limita à transmissão de conteúdos, mas busca cultivar virtudes, hábitos de pensamento, amor pela verdade e senso de responsabilidade.
                </p>

                <p className="text-[#4A5568] leading-relaxed text-center lg:text-left">
                  A criança é acompanhada em suas dimensões intelectual, emocional, social e espiritual, por meio de práticas pedagógicas que valorizam a leitura, a linguagem, as artes, a vida prática, o movimento e o cuidado.
                </p>

                <div className="bg-[#F8FAFB] p-6 rounded-2xl border border-[#EFF5F8]">
                  <h4 className="text-[#0B4F6C] mb-4">Ênfases pedagógicas</h4>
                  <ul className="space-y-3">
                    {[
                      "Alfabetização e linguagem",
                      "Leitura orientada e formação do hábito leitor",
                      "Artes e expressão criativa",
                      "Atividades físicas e vida prática",
                      "Acompanhamento pedagógico e cuidado integral",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-1" aria-hidden />
                        <span className="text-[#4A5568]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1574758324765-a29c77fb9c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3R1ZHlpbmclMjBoYXBweXxlbnwxfHx8fDE3NjQyOTQ4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Crianças estudando"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quem Somos */}
        <section
          id="sobre"
          className="py-20 md:py-28 bg-gradient-to-b from-[#F8FAFB] to-white scroll-mt-20"
          aria-labelledby="sobre-title"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-last lg:order-first">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1633219664502-f7c0ad898f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBsZWFybmluZ3xlbnwxfHx8fDE3NjQyNzM3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Crianças aprendendo juntas"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="space-y-7">
                <div>
                  <h2 id="sobre-title" className="text-[#0B4F6C] mb-6">
                    Quem somos
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] rounded-full mb-6"></div>
                </div>

                <p className="text-[#4A5568] text-lg leading-relaxed">
                  O Instituto Lumine existe para promover uma educação que forme pessoas inteiras. Inspirado pela tradição cristã e pela pedagogia clássica, o Lumine atua no desenvolvimento intelectual, emocional, social e espiritual das crianças, reconhecendo cada uma como portadora de dignidade, vocação e valor.
                </p>

                <p className="text-[#4A5568] leading-relaxed text-center lg:text-left">
                  Como associação educacional sem fins lucrativos, o Lumine atua em diálogo com famílias, educadores e a comunidade local, buscando oferecer um ambiente de aprendizado sério, acolhedor e comprometido com o bem comum.
                </p>

                <div className="bg-white p-6 rounded-2xl border border-[#EFF5F8] space-y-6">
                  <div>
                    <h4 className="text-[#0B4F6C] mb-3">Missão</h4>
                    <p className="text-[#4A5568]">
                      Proporcionar educação cristã clássica que forme o caráter, desenvolva a inteligência e fortaleça a vida comunitária de crianças em contextos de vulnerabilidade.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#0B4F6C] mb-3">Visão</h4>
                    <p className="text-[#4A5568]">
                      Ser uma referência em educação complementar cristã, comprometida com a formação integral da criança e com o fortalecimento das comunidades onde atua.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#0B4F6C] mb-3">Valores</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {["Fé cristã", "Excelência educacional", "Formação do caráter", "Serviço e responsabilidade", "Cuidado com a pessoa inteira"].map(
                        (value) => (
                          <div key={value} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D]"></span>
                            <span className="text-[#4A5568]">{value}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impacto Esperado */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#F8FAFB] to-white" aria-labelledby="impacto-title">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-14 space-y-4">
              <h2 id="impacto-title" className="text-[#0B4F6C] mb-6">
                Resultados reais
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] mx-auto rounded-full mb-6"></div>
              <p className="text-[#4A5568] text-lg max-w-4xl mx-auto leading-relaxed text-center">
                O Instituto Lumine atua para promover mudanças profundas e duradouras na vida das crianças e de suas comunidades. Seu trabalho busca fortalecer o desenvolvimento acadêmico, a formação de virtudes e a proteção social, oferecendo um ambiente educativo que favorece crescimento, pertencimento e esperança.
              </p>
              <p className="text-[#4A5568] max-w-4xl mx-auto leading-relaxed mt-3 text-center">
                O impacto do Lumine é pensado de forma responsável, com acompanhamento contínuo, cuidado com as famílias e compromisso com a realidade local.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 justify-items-center">
              {impactItems.map((item) => (
                <article
                  key={item.title}
                  className="bg-white rounded-2xl p-7 border border-[#EFF5F8] hover:shadow-lg transition-all text-center w-full max-w-sm flex flex-col gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h4 className="text-[#0B4F6C] mb-3">{item.title}</h4>
                  <p className="text-[#4A5568]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Como Apoiar */}
        <section id="apoiar" className="py-20 md:py-28 bg-white scroll-mt-20" aria-labelledby="apoiar-title">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-14 space-y-4">
              <h2 id="apoiar-title" className="text-[#0B4F6C] mb-6">
                Faça parte
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] mx-auto rounded-full mb-6"></div>
              <p className="text-[#4A5568] text-lg max-w-4xl mx-auto leading-relaxed text-center">
                O trabalho do Instituto Lumine é sustentado por pessoas, famílias e instituições que acreditam na educação como instrumento de cuidado e transformação social. Existem diferentes formas de apoiar o Lumine, de acordo com a realidade e o desejo de cada apoiador.
              </p>
              <p className="text-[#4A5568] max-w-4xl mx-auto leading-relaxed mt-4 text-center">
                O apoio pode acontecer por meio de contribuições financeiras, doações de materiais, parcerias institucionais ou relacionamento contínuo com a causa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-12 items-stretch">
              {supportOptions.map((option) => (
                <article
                  key={option.title}
                  className="bg-gradient-to-br from-white to-[#F8FAFB] rounded-2xl p-8 border border-[#EFF5F8] text-center flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <option.icon className="w-7 h-7 text-white" aria-hidden />
                    </div>
                    <h3 className="text-[#0B4F6C] mb-4">{option.title}</h3>
                    <p className="text-[#4A5568] leading-relaxed mb-6">{option.description}</p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-[#EFF5F8] via-[#F8FAFB] to-[#EFF5F8] rounded-full mt-4"></div>
                </article>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#F8FAFB] to-white rounded-3xl p-8 border border-[#EFF5F8] shadow-lg mb-12">
              <div className="text-center space-y-3">
                <h3 className="text-[#0B4F6C] text-2xl">Doação via Pix</h3>
                <p className="text-[#4A5568] leading-relaxed max-w-2xl mx-auto">
                  Para transferir, use o QR code ou copie o código Pix abaixo no seu banco.
                </p>
              </div>
              <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
                <div className="flex justify-center">
                  <div className="bg-white rounded-3xl border border-[#EFF5F8] shadow-md p-5 max-w-xs w-full">
                    <div className="text-center mb-3">
                      <p className="text-[#F7941D] font-semibold">Pix • Missão João Pessoa</p>
                    </div>
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=eae0b735-1a54-4b66-a791-3d0dc30aa728"
                      alt="QR code para Pix"
                      className="w-full rounded-2xl border border-[#EFF5F8] bg-white p-3 shadow-sm"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="space-y-4 text-center lg:text-left">
                  <p className="text-[#4A5568] font-medium">Código Pix (copia e cola):</p>
                  <div className="bg-white border border-[#EFF5F8] rounded-full px-5 py-3 text-[#0B4F6C] font-semibold break-all inline-block">
                    {pixKey}
                  </div>
                  <p className="text-[#718096] text-sm">
                    Copie o código acima ou escaneie o QR code com o app do seu banco.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <a
                href="#contato"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#F7941D] to-[#E67E00] text-white rounded-full hover:from-[#E67E00] hover:to-[#F7941D] transition-all shadow-lg"
              >
                Fale conosco sobre apoio
              </a>
            </div>
          </div>
        </section>

        <FAQ />

        {/* Contato */}
        <section
          id="contato"
          className="py-20 md:py-28 bg-gradient-to-b from-[#F8FAFB] to-white scroll-mt-20"
          aria-labelledby="contato-title"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="contato-title" className="text-[#0B4F6C] mb-6">
                Entre em contato
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] mx-auto rounded-full mb-6"></div>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto leading-relaxed">
                Se você deseja conhecer melhor o Instituto Lumine, apoiar o trabalho ou conversar sobre parcerias, estamos à disposição para dialogar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:contato@institutolumine.org"
                className="group bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all border border-[#EFF5F8] hover:border-[#F7941D] hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#EFF5F8] to-[#F8FAFB] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-[#0B4F6C]" aria-hidden />
                </div>
                <p className="text-[#718096] text-sm mb-2">E-mail</p>
                <p className="text-[#0B4F6C] font-medium break-all">
                  contato@institutolumine.org
                </p>
              </a>

              <a
                href="tel:+5583999101946"
                className="group bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all border border-[#EFF5F8] hover:border-[#F7941D] hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#EFF5F8] to-[#F8FAFB] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-[#0B4F6C]" aria-hidden />
                </div>
                <p className="text-[#718096] text-sm mb-2">Telefone / WhatsApp</p>
                <p className="text-[#0B4F6C] font-medium">(83) 99910-1946</p>
                <p className="text-[#0B4F6C] font-medium">(83) 99994-3792</p>
                <a
                  href="https://wa.me/5583999101946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B4F6C] text-sm underline block mt-2"
                >
                  Fale pelo WhatsApp
                </a>
              </a>

              <a
                href="https://instagram.com/instituto.lumine"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all border border-[#EFF5F8] hover:border-[#F7941D] hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#EFF5F8] to-[#F8FAFB] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="w-8 h-8 text-[#0B4F6C]" aria-hidden />
                </div>
                <p className="text-[#718096] text-sm mb-2">Instagram</p>
                <p className="text-[#0B4F6C] font-medium">@instituto.lumine</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gradient-to-br from-[#0B4F6C] to-[#083D54] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <img
                src={logoOrange}
                alt="Instituto Lumine"
                className="w-24 h-24"
              />
            </div>
            <h3 className="mb-3 text-xl">Instituto Lumine – Associação Lumine</h3>
            <p className="text-white/70 text-lg">
              Associação cristã sem fins lucrativos
            </p>
            <p className="text-white/60 mt-2">Gurinhém, Paraíba</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="#sobre"
              className="text-white/70 hover:text-white transition-colors"
            >
              Sobre o Lumine
            </a>
            <span className="text-white/30">•</span>
            <a
              href="#apoiar"
              className="text-white/70 hover:text-white transition-colors"
            >
              Como apoiar
            </a>
            <span className="text-white/30">•</span>
            <a
              href="#faq"
              className="text-white/70 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <span className="text-white/30">•</span>
            <a
              href="#contato"
              className="text-white/70 hover:text-white transition-colors"
            >
              Contato
            </a>
          </div>

          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-white/50 text-sm">
              © 2024 Instituto Lumine. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
