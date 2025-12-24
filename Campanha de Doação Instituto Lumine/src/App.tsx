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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Pilares Institucionais */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#0B4F6C] mb-4">Educação cristã clássica</h3>
              <p className="text-[#4A5568] leading-relaxed">
                Formação fundamentada na tradição cristã e na pedagogia clássica
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#0B4F6C] mb-4">Formação integral da criança</h3>
              <p className="text-[#4A5568] leading-relaxed">
                Desenvolvimento intelectual, moral e espiritual de cada criança
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#0B4F6C] mb-4">Compromisso com contextos de vulnerabilidade</h3>
              <p className="text-[#4A5568] leading-relaxed">
                Atuação dedicada a crianças em situação de vulnerabilidade social
              </p>
            </div>
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
                className="px-8 py-3 border-2 border-[#0B4F6C] text-[#0B4F6C] rounded-full hover:bg-[#0B4F6C] hover:text-white transition-all"
              >
                Formas de apoiar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="py-20 md:py-28 bg-gradient-to-b from-[#F8FAFB] to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            <div className="space-y-8">
              <div>
                <h2 className="text-[#0B4F6C] mb-6">Quem somos</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] rounded-full mb-6"></div>
              </div>

              <p className="text-[#4A5568] text-lg leading-relaxed">
                O Instituto Lumine existe para promover uma educação que forme pessoas inteiras. Inspirado pela tradição cristã e pela pedagogia clássica, o Lumine atua no desenvolvimento intelectual, emocional, social e espiritual das crianças, reconhecendo cada uma como portadora de dignidade, vocação e valor.
              </p>

              <p className="text-[#4A5568] leading-relaxed">
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
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D]"></span>
                      <span className="text-[#4A5568]">Fé cristã</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D]"></span>
                      <span className="text-[#4A5568]">Excelência educacional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D]"></span>
                      <span className="text-[#4A5568]">Formação do caráter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D]"></span>
                      <span className="text-[#4A5568]">Serviço e responsabilidade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D]"></span>
                      <span className="text-[#4A5568]">Cuidado com a pessoa inteira</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Proposta Educacional */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-[#0B4F6C] mb-6">Educação cristã clássica</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] rounded-full mb-6"></div>
              </div>

              <p className="text-[#4A5568] text-lg leading-relaxed">
                A proposta educacional do Lumine se fundamenta na educação cristã clássica, que compreende o aprendizado como um processo formativo integral. O ensino não se limita à transmissão de conteúdos, mas busca cultivar virtudes, hábitos de pensamento, amor pela verdade e senso de responsabilidade.
              </p>

              <p className="text-[#4A5568] leading-relaxed">
                A criança é acompanhada em suas dimensões intelectual, emocional, social e espiritual, por meio de práticas pedagógicas que valorizam a leitura, a linguagem, as artes, a vida prática, o movimento e o cuidado.
              </p>

              <div className="bg-[#F8FAFB] p-6 rounded-2xl border border-[#EFF5F8]">
                <h4 className="text-[#0B4F6C] mb-4">Ênfases pedagógicas</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-1" />
                    <span className="text-[#4A5568]">Alfabetização e linguagem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-1" />
                    <span className="text-[#4A5568]">Leitura orientada e formação do hábito leitor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-1" />
                    <span className="text-[#4A5568]">Artes e expressão criativa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-1" />
                    <span className="text-[#4A5568]">Atividades físicas e vida prática</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-1" />
                    <span className="text-[#4A5568]">Acompanhamento pedagógico e cuidado integral</span>
                  </li>
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

      {/* Impacto Esperado */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#F8FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0B4F6C] mb-6">Compromisso com impacto real</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] mx-auto rounded-full mb-6"></div>
            <p className="text-[#4A5568] text-lg max-w-3xl mx-auto leading-relaxed">
              O Instituto Lumine atua para promover mudanças profundas e duradouras na vida das crianças e de suas comunidades. Seu trabalho busca fortalecer o desenvolvimento acadêmico, a formação de virtudes e a proteção social, oferecendo um ambiente educativo que favorece crescimento, pertencimento e esperança.
            </p>
            <p className="text-[#4A5568] max-w-3xl mx-auto leading-relaxed mt-4">
              O impacto do Lumine é pensado de forma responsável, com acompanhamento contínuo, cuidado com as famílias e compromisso com a realidade local.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#EFF5F8] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-[#0B4F6C] mb-3">Melhoria no desempenho escolar</h4>
              <p className="text-[#4A5568]">
                Fortalecimento das habilidades acadêmicas e desenvolvimento do potencial de aprendizagem.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EFF5F8] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-[#0B4F6C] mb-3">Formação de valores e virtudes cristãs</h4>
              <p className="text-[#4A5568]">
                Cultivo de caráter sólido, baseado em princípios cristãos de fé, esperança e amor.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EFF5F8] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-[#0B4F6C] mb-3">Fortalecimento emocional e social</h4>
              <p className="text-[#4A5568]">
                Desenvolvimento de habilidades socioemocionais e construção de relacionamentos saudáveis.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EFF5F8] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-[#0B4F6C] mb-3">Proteção contra riscos sociais</h4>
              <p className="text-[#4A5568]">
                Ambiente seguro que protege as crianças de vulnerabilidades e oferece cuidado integral.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#EFF5F8] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-[#0B4F6C] mb-3">Envolvimento comunitário</h4>
              <p className="text-[#4A5568]">
                Fortalecimento dos laços com famílias e a comunidade local através do diálogo e parceria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Apoiar */}
      <section id="apoiar" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0B4F6C] mb-6">Caminhe conosco</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] mx-auto rounded-full mb-6"></div>
            <p className="text-[#4A5568] text-lg max-w-3xl mx-auto leading-relaxed">
              O trabalho do Instituto Lumine é sustentado por pessoas, famílias e instituições que acreditam na educação como instrumento de cuidado e transformação social. Existem diferentes formas de apoiar o Lumine, de acordo com a realidade e o desejo de cada apoiador.
            </p>
            <p className="text-[#4A5568] max-w-3xl mx-auto leading-relaxed mt-4">
              O apoio pode acontecer por meio de contribuições financeiras, doações de materiais, parcerias institucionais ou relacionamento contínuo com a causa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-white to-[#F8FAFB] rounded-2xl p-8 border border-[#EFF5F8]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[#0B4F6C] mb-4">Apoio recorrente</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                Contribuições mensais que sustentam o funcionamento contínuo das atividades educacionais.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[#F8FAFB] rounded-2xl p-8 border border-[#EFF5F8]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[#0B4F6C] mb-4">Doações pontuais</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                Apoio em momentos específicos para projetos ou necessidades particulares.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[#F8FAFB] rounded-2xl p-8 border border-[#EFF5F8]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[#0B4F6C] mb-4">Parcerias institucionais</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                Colaborações com igrejas, empresas e organizações para ampliar o alcance e impacto.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[#F8FAFB] rounded-2xl p-8 border border-[#EFF5F8]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-xl flex items-center justify-center mb-6">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[#0B4F6C] mb-4">Doação de materiais e recursos</h3>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                Contribuições em espécie: livros, materiais pedagógicos, mobiliário e equipamentos.
              </p>
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
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0B4F6C] mb-6">Entre em contato</h2>
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
                <Mail className="w-8 h-8 text-[#0B4F6C]" />
              </div>
              <p className="text-[#718096] text-sm mb-2">E-mail</p>
              <p className="text-[#0B4F6C] font-medium break-all">
                contato@institutolumine.org
              </p>
            </a>

            <a
              href="https://wa.me/5583999101946"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all border border-[#EFF5F8] hover:border-[#F7941D] hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#EFF5F8] to-[#F8FAFB] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-[#0B4F6C]" />
              </div>
              <p className="text-[#718096] text-sm mb-2">WhatsApp</p>
              <p className="text-[#0B4F6C] font-medium">(83) 99910-1946</p>
              <p className="text-[#0B4F6C] font-medium">(83) 99994-3792</p>
            </a>

            <a
              href="https://instagram.com/instituto.lumine"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all border border-[#EFF5F8] hover:border-[#F7941D] hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#EFF5F8] to-[#F8FAFB] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-[#0B4F6C]" />
              </div>
              <p className="text-[#718096] text-sm mb-2">Instagram</p>
              <p className="text-[#0B4F6C] font-medium">@instituto.lumine</p>
            </a>
          </div>
        </div>
      </section>

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
