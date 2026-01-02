import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#F8FAFB] to-[#EFF5F8] py-20 md:py-32 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-[#F7941D] to-[#E67E00] rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-[#0B4F6C] leading-tight">
                Formação integral de crianças
              </h1>
              <p className="text-[#4A5568] text-xl leading-relaxed max-w-xl">
                Através da educação cristã clássica
              </p>
              <p className="text-[#718096] text-lg leading-relaxed max-w-xl">
                Fundamentado nos princípios da educação cristã clássica, o Lumine entende o conhecimento como um caminho de verdade, bondade e beleza, e a educação como um serviço à pessoa e à comunidade.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#sobre"
                className="bg-[#0B4F6C] text-white px-8 py-4 rounded-full hover:bg-[#2B7A9B] transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Conheça o Lumine</span>
                <ArrowDown className="w-4 h-4" aria-hidden />
              </a>
              
              <a
                href="#apoiar"
                className="border-2 border-[#0B4F6C] text-[#F7941D] px-8 py-4 rounded-full hover:bg-[#0B4F6C] hover:text-white transition-all inline-flex items-center justify-center font-semibold"
              >
                <span>Formas de apoiar</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761208662734-fb46f1398551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0Mjk0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Crianças aprendendo e estudando"
                className="w-full h-auto"
              />
            </div>
            {/* Elementos decorativos ao redor da imagem */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#F7941D] to-[#E67E00] rounded-3xl opacity-20 blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-[#4A90A4] to-[#2B7A9B] rounded-3xl opacity-15 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
