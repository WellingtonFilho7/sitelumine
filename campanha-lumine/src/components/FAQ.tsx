import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'O que é educação cristã clássica?',
    answer: 'A educação cristã clássica é uma abordagem formativa que integra a tradição cristã com a pedagogia clássica. Valoriza a formação do caráter, o desenvolvimento da inteligência e o cultivo de virtudes, compreendendo o conhecimento como caminho de verdade, bondade e beleza. O ensino busca formar pessoas inteiras, capazes de pensar com clareza, viver com propósito e servir ao bem comum.',
  },
  {
    question: 'Como o Instituto Lumine está estruturado?',
    answer: 'O Instituto Lumine é uma associação civil sem fins lucrativos, com Estatuto Social registrado, CNPJ próprio e estrutura de governança que inclui Diretoria Executiva e Conselho Fiscal. A organização opera de acordo com as leis brasileiras e boas práticas de gestão do terceiro setor, com total transparência e prestação de contas.',
  },
  {
    question: 'Quem pode se beneficiar dos programas do Instituto?',
    answer: 'O Instituto Lumine trabalha prioritariamente com crianças em situação de vulnerabilidade social, oferecendo educação complementar de qualidade. O trabalho é feito em parceria com as famílias, buscando fortalecer o desenvolvimento integral das crianças em todas as suas dimensões: intelectual, emocional, social e espiritual.',
  },
  {
    question: 'Como posso apoiar o Instituto Lumine?',
    answer: 'Existem várias formas de apoio: contribuições mensais recorrentes, doações pontuais, parcerias institucionais com igrejas ou empresas, doação de materiais pedagógicos, livros e equipamentos. Entre em contato conosco para conhecer as possibilidades e encontrar a forma de apoio mais adequada à sua realidade.',
  },
  {
    question: 'O Instituto Lumine presta contas de suas atividades?',
    answer: 'Sim. O Instituto Lumine segue boas práticas de governança e transparência. A organização não distribui lucros, aplica seus recursos integralmente em suas finalidades educacionais e mantém compromisso com a prestação de contas aos seus apoiadores e à sociedade.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8FAFB] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#EFF5F8] to-[#F8FAFB] rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-[#0B4F6C]" />
          </div>
          <h2 className="text-[#0B4F6C] mb-6">Perguntas frequentes</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F7941D] to-[#E67E00] mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#EFF5F8] rounded-2xl overflow-hidden transition-all hover:border-[#F7941D] hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left group transition-colors"
              >
                <h4 className="text-[#0B4F6C] pr-4 group-hover:text-[#F7941D] transition-colors">
                  {item.question}
                </h4>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index 
                    ? 'bg-[#F7941D] text-white' 
                    : 'bg-[#EFF5F8] text-[#0B4F6C] group-hover:bg-[#F7941D] group-hover:text-white'
                }`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-6 pt-2">
                  <div className="border-t border-[#EFF5F8] pt-4">
                    <p className="text-[#4A5568] leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-[#EFF5F8] to-[#F8FAFB] p-8 rounded-2xl border border-[#EFF5F8] text-center">
          <p className="text-[#4A5568] mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-[#0B4F6C] hover:text-[#F7941D] font-semibold transition-colors"
          >
            <span>Entre em contato conosco</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
}
