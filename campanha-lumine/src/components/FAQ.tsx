import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'O que é o Instituto Lumine?',
    answer: 'O Instituto Lumine é uma associação educacional cristã sem fins lucrativos que oferece educação complementar no contraturno escolar para crianças de 4 a 9 anos em situação de vulnerabilidade. Nossa proposta é baseada na educação cristã clássica, com foco em alfabetização, formação de caráter e cuidado integral da criança.',
  },
  {
    question: 'Como o dinheiro das doações será usado?',
    answer: 'A meta de R$ 22.000 é destinada exclusivamente à estrutura inicial para abertura: climatização do espaço, mobiliário básico, fardamento e preparação do ambiente. Após a inauguração em março de 2026, as doações recorrentes mantêm o funcionamento: alimentação das crianças, materiais pedagógicos, equipe e manutenção do espaço.',
  },
  {
    question: 'Como posso acompanhar o projeto?',
    answer: 'Você pode acompanhar o Instituto Lumine pelo Instagram (@instituto.lumine), onde compartilhamos atualizações sobre o projeto. Também enviamos comunicados periódicos para nossos apoiadores. Se preferir um contato mais direto, entre em contato pelo WhatsApp ou e-mail.',
  },
  {
    question: 'O Instituto Lumine já está funcionando?',
    answer: 'Ainda não. Estamos nos preparativos finais para iniciar o projeto piloto com 24 crianças em Gurinhém, no interior da Paraíba. A abertura está prevista para março de 2026. Este é o momento de construir a estrutura inicial e garantir que possamos começar com responsabilidade.',
  },
  {
    question: 'Posso visitar o Instituto Lumine?',
    answer: 'Sim! Após a abertura, receberemos visitantes com agendamento prévio. Entre em contato pelo WhatsApp (83) 99910-1946 ou e-mail contato@institutolumine.org para agendar uma visita ou conversar sobre o projeto.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useReveal();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      id="faq"
      className="reveal py-20 md:py-28 bg-[#FAF7F2] scroll-mt-20"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-[#0B4F6C] mb-3">
            Perguntas frequentes
          </h2>
          <div className="w-6 h-0.5 bg-[#E8850F]"></div>
        </div>

        <div className="divide-y divide-[#E5DED4]">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                openIndex === index ? 'border-l-2 border-l-[#E8850F] pl-4 -ml-4' : 'border-l-2 border-l-transparent pl-4 -ml-4'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center gap-4 py-6 text-left group"
              >
                <span className="text-[#9CA3AF] text-xs font-medium tabular-nums flex-shrink-0 w-5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h4
                  className="text-[#0B4F6C] pr-4 group-hover:text-[#E8850F] transition-colors flex-1"
                  style={{ fontFamily: '"Libre Baskerville", serif' }}
                >
                  {item.question}
                </h4>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 text-[#E8850F]' : 'text-[#9CA3AF]'
                  }`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}>
                <p className="text-[#3D4550] leading-relaxed pl-9">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-[#E5DED4]">
          <p className="text-[#6B7280] mb-3">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="#contato"
            className="link-underline text-[#0B4F6C] hover:text-[#E8850F] font-medium transition-colors inline-flex items-center gap-1"
          >
            Entre em contato conosco <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
