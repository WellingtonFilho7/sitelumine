import { CheckCircle, Mail, Phone, Instagram } from "lucide-react";

export default function ContactSuccess() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        {/* Ícone de sucesso */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">
          Mensagem enviada com sucesso!
        </h2>

        {/* Mensagem */}
        <p className="text-lg text-gray-700 mb-6">
          Obrigado por entrar em contato com o Instituto Lumine. Recebemos sua mensagem e 
          responderemos em breve, geralmente em até 24 horas úteis.
        </p>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-4">
            <strong>O que acontece agora?</strong>
          </p>
          <ol className="text-left text-sm text-gray-600 space-y-2 list-decimal list-inside">
            <li>Você receberá um e-mail de confirmação no endereço informado</li>
            <li>Nossa equipe analisará sua mensagem</li>
            <li>Entraremos em contato através do e-mail ou telefone fornecido</li>
          </ol>
        </div>

        {/* Outras formas de contato */}
        <div className="border-t pt-8">
          <p className="text-sm text-gray-600 mb-4">
            Ou entre em contato diretamente através de:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contato@institutolumine.org"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
            >
              <Mail className="w-4 h-4 text-[#0B4F6C]" />
              <span className="text-sm text-gray-700">E-mail</span>
            </a>
            <a
              href="https://wa.me/5583999101946?text=Olá!%20Gostaria%20de%20conhecer%20melhor%20o%20Instituto%20Lumine."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
            >
              <Phone className="w-4 h-4 text-[#0B4F6C]" />
              <span className="text-sm text-gray-700">WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/instituto.lumine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
            >
              <Instagram className="w-4 h-4 text-[#0B4F6C]" />
              <span className="text-sm text-gray-700">Instagram</span>
            </a>
          </div>
        </div>

        {/* Botão voltar */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-[#0B4F6C] hover:bg-[#2B7A9B] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
}
