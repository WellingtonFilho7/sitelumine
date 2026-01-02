import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // FormSubmit will handle the actual submission
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        action="https://formsubmit.co/contato@institutolumine.org"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_subject" value="Nova mensagem do site Instituto Lumine" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://sitelumine.vercel.app/#contato-sucesso" />
        
        {/* Honeypot (anti-spam) */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nome completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={3}
            maxLength={100}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4F6C] focus:border-transparent transition-all"
            placeholder="Seu nome completo"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4F6C] focus:border-transparent transition-all"
            placeholder="seu@email.com"
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefone (opcional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4F6C] focus:border-transparent transition-all"
            placeholder="(83) 99999-9999"
          />
        </div>

        {/* Assunto */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Assunto *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4F6C] focus:border-transparent transition-all"
          >
            <option value="">Selecione um assunto</option>
            <option value="Quero apoiar financeiramente">Quero apoiar financeiramente</option>
            <option value="Quero ser voluntário">Quero ser voluntário</option>
            <option value="Quero conhecer o projeto">Quero conhecer o projeto</option>
            <option value="Parceria institucional">Parceria institucional</option>
            <option value="Dúvidas gerais">Dúvidas gerais</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={1000}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B4F6C] focus:border-transparent transition-all resize-none"
            placeholder="Conte-nos como você gostaria de apoiar ou conhecer melhor o Instituto Lumine..."
          />
          <p className="text-sm text-gray-500 mt-1">Mínimo 10 caracteres, máximo 1000</p>
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0B4F6C] hover:bg-[#2B7A9B] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar mensagem
            </>
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          Ao enviar, você concorda que entraremos em contato através das informações fornecidas.
        </p>
      </form>
    </div>
  );
}
