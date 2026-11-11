import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Copy, Check, Mail, ChevronDown } from 'lucide-react';
import logoCircle from 'figma:asset/88b7b4c7a18a53700068f70657333846a0fb9141.png';

const valoresSugeridos = [
  {
    valor: 50,
    descricao: "alimentação",
  },
  {
    valor: 150,
    descricao: "funcionamento",
  },
  {
    valor: 300,
    descricao: "estabilidade",
  },
];

const faqDoacao = [
  {
    pergunta: "O pagamento é seguro?",
    resposta: "Sim. O PIX é uma forma de pagamento segura e regulamentada pelo Banco Central do Brasil. Você pode verificar os dados do recebedor antes de confirmar a transferência.",
  },
  {
    pergunta: "Posso doar de forma recorrente?",
    resposta: "Por enquanto, as doações são feitas manualmente via PIX. Em breve, teremos a opção de doação recorrente automatizada. Você pode configurar um lembrete mensal no seu banco.",
  },
  {
    pergunta: "Quero contribuir de outra forma. Como faço?",
    resposta: "Entre em contato conosco pelo e-mail contato@institutolumine.org ou pelo WhatsApp (83) 99910-1946. Podemos conversar sobre parcerias, doações de materiais ou outras formas de apoio.",
  },
];

export default function Doar() {
  const pixKey = "eae0b735-1a54-4b66-a791-3d0dc30aa728";
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = pixKey;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header Simplificado */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5DED4]/50 py-4">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-[#0B4F6C] hover:text-[#E8850F] transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>

            <Link to="/" className="flex items-center gap-2">
              <img src={logoCircle} alt="Instituto Lumine" className="w-10 h-10" />
              <span
                className="hidden sm:inline text-[#0B4F6C] font-semibold text-sm"
                style={{ fontFamily: '"Libre Baskerville", serif' }}
              >
                Instituto Lumine
              </span>
            </Link>

            <div className="w-16 sm:w-24"></div>
          </div>
        </div>
      </header>

      {/* Photo Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80&auto=format&fit=crop"
          alt="Crianças sorrindo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#052F42]/30 to-transparent" />
      </div>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-[#0B4F6C] text-2xl md:text-3xl mb-4">
            Ajude a tornar possível o início do Lumine
          </h1>
          <p className="text-[#3D4550]">
            Sua contribuição prepara o espaço e viabiliza a abertura em março de 2026.
          </p>
        </div>

        {/* Card Principal de Doação */}
        <div
          className="relative bg-white rounded-2xl border border-[#E5DED4] p-6 md:p-10 mb-10 text-center overflow-hidden"
          style={{ boxShadow: '0 4px 40px -12px rgba(11, 79, 108, 0.08)' }}
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E8850F] via-[#D4740A] to-[#E8850F]" />

          {/* PIX badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8850F]/10 text-[#E8850F] text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8850F]" />
            PIX · Instituto Lumine
          </div>

          {/* QR Code */}
          <div
            className="bg-[#FDFCFA] rounded-xl p-6 inline-block mb-4 border border-[#F0EBE3]"
            style={{ boxShadow: '0 2px 20px -8px rgba(0,0,0,0.06)' }}
          >
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${pixKey}`}
              alt="QR Code para PIX"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] mx-auto rounded-lg"
              loading="lazy"
            />
          </div>

          <p className="text-[#6B7280] text-sm mb-6">
            Escaneie com o app do seu banco
          </p>

          <div className="bg-[#FAF7F2] border border-[#E5DED4] rounded-xl p-4 mb-4">
            <p className="text-[#0B4F6C] font-mono text-sm break-all mb-4">
              {pixKey}
            </p>
            <button
              onClick={copyPix}
              className={`btn-shine w-full py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-base ${
                copied
                  ? 'bg-green-600 !text-white shadow-lg shadow-green-600/20'
                  : 'bg-[#E8850F] !text-white hover:bg-[#D4740A] shadow-lg shadow-[#E8850F]/20 hover:shadow-xl hover:shadow-[#E8850F]/30'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Código copiado!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copiar código PIX
                </>
              )}
            </button>
          </div>
        </div>

        {/* Valores Sugeridos */}
        <div className="mb-10">
          <p className="text-[#6B7280] text-sm mb-4">Valores sugeridos:</p>
          <div className="grid grid-cols-3 gap-3">
            {valoresSugeridos.map((item) => (
              <div
                key={item.valor}
                className="card-premium bg-white p-5 rounded-xl border border-[#E5DED4] text-center cursor-default"
              >
                <p
                  className="text-[#0B4F6C] text-lg mb-1"
                  style={{ fontFamily: '"Libre Baskerville", serif', fontWeight: 700 }}
                >
                  R$ {item.valor}
                </p>
                <p className="text-[#9CA3AF] text-xs uppercase tracking-wider">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            'CNPJ registrado',
            'Sem fins lucrativos',
            'Gurinhém, Paraíba',
          ].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 bg-[#EDE6DA] text-[#6B7280] text-xs px-4 py-2 rounded-full border border-[#E5DED4]/50"
            >
              <span className="w-1 h-1 rounded-full bg-[#0B4F6C]/30" />
              {badge}
            </span>
          ))}
        </div>

        {/* FAQ de Doação */}
        <div className="mb-10">
          <p className="text-[#6B7280] text-sm mb-4">Dúvidas:</p>
          <div className="divide-y divide-[#E5DED4]">
            {faqDoacao.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center py-4 text-left group"
                >
                  <span
                    className="text-[#0B4F6C] text-sm pr-4 group-hover:text-[#E8850F] transition-colors"
                    style={{ fontFamily: '"Libre Baskerville", serif' }}
                  >
                    {item.pergunta}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                      openFaq === index ? 'rotate-180 text-[#E8850F]' : 'text-[#9CA3AF]'
                    }`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}>
                  <p className="text-[#3D4550] text-sm leading-relaxed">{item.resposta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outras Formas de Apoio */}
        <div
          className="rounded-2xl p-10 text-center text-white"
          style={{
            background: 'linear-gradient(to bottom, #073D54, #052F42)',
          }}
        >
          <h3 className="text-lg text-white mb-2">Quer contribuir de outra forma?</h3>
          <p className="text-white/70 text-sm mb-5">
            Parcerias, doações de materiais ou outras formas de apoio
          </p>
          <a
            href="mailto:contato@institutolumine.org"
            className="btn-shine inline-flex items-center gap-2 bg-white text-[#0B4F6C] px-6 py-3 rounded-lg font-semibold hover:bg-[#FAF7F2] transition-colors text-sm shadow-lg shadow-black/10"
          >
            <Mail className="w-4 h-4" />
            contato@institutolumine.org
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5DED4] py-8 mt-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#9CA3AF] text-xs">
            © {new Date().getFullYear()} Instituto Lumine. Todos os direitos reservados.
          </p>
          <Link
            to="/"
            className="text-[#0B4F6C] hover:text-[#E8850F] text-xs font-medium mt-2 inline-block"
          >
            Voltar para o site principal
          </Link>
        </div>
      </footer>
    </div>
  );
}
