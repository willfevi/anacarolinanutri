import { useState } from "react";

export default function FAQ() {
  const faqs = [
    { question: "O atendimento é indicado apenas para quem está em tratamento ativo?", answer: "Não. O acompanhamento pode ser realizado antes, durante ou após o tratamento oncológico, sempre respeitando a individualidade clínica." },
    { question: "As consultas podem ser online?", answer: "Sim. O atendimento pode ser presencial ou online, com protocolo completo e acompanhamento contínuo." },
    { question: "Como agendar a primeira consulta?", answer: "O agendamento é realizado diretamente pelo WhatsApp, onde você receberá todas as orientações iniciais." },
    { question: "A alimentação será muito rígida durante o tratamento?", answer: "Não. O plano alimentar é adaptado conforme o que você consegue consumir em cada etapa do tratamento, levando em conta sintomas, apetite e como seu corpo reage. Sem regras rígidas ou imposições." },
    { question: "Posso esclarecer dúvidas mesmo fora das consultas?", answer: "Sim. Você conta com suporte ao longo do acompanhamento, justamente para não precisar lidar com dúvidas ou decisões sozinha conforme surgem mudanças nos sintomas." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="px-8 py-20 bg-[#f7f2f5] text-center">
      <p className="italic text-[#7f0e48] mb-6">Perguntas Frequentes</p>
      <h2 className="font-['Playfair_Display'] text-3xl text-[#3a2230] mb-10">Dúvidas Comuns</h2>

      <div className="max-w-2xl mx-auto text-left space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="bg-gradient-to-br from-white to-[#f8eef3] rounded-xl shadow-md border border-[#eadde4] overflow-hidden">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full text-left p-6 text-[#3a2230] font-medium flex justify-between items-center">
              {item.question}
              <span className="text-[#7f0e48]">{openIndex === i ? "−" : "+"}</span>
            </button>

            {openIndex === i && <div className="px-6 pb-6 text-sm text-[#6b4c5d] leading-relaxed">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
