import { motion } from "framer-motion";
import fotoAna from "./assets/index_nutricionista.png";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5522998997631"; 
const WHATSAPP_MESSAGE =
  "Olá, Nutri Ana Carolina! Vim pelo link da bio e gostaria de receber mais informações sobre o seu acompanhamento nutricional."; 

function IconAvaliacao({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-[24px] shadow-xl"
    >
      <g data-name="34. Health Care" id="_34._Health_Care">
        <path
          fill="#7f0e48"
          d="M31.47,16.11a5,5,0,0,0-6.53.87l-3.2,3.65A4,4,0,0,0,18,18h-.93a2.54,2.54,0,0,1-1.41-.43A9.38,9.38,0,0,0,3.84,18.74L.29,22.29a1,1,0,0,0,1.42,1.42l3.55-3.55a7.35,7.35,0,0,1,9.29-.92,4.52,4.52,0,0,0,2.52.76H18a2,2,0,0,1,2,2H13a1,1,0,0,0,0,2h8a1,1,0,0,0,.74-.35h0l4.69-5.36a3,3,0,0,1,3-.92L22.4,26.8A3,3,0,0,1,20,28H11.66a5,5,0,0,0-3.54,1.46l-.83.83a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.83-.83A3,3,0,0,1,11.66,30H20a5,5,0,0,0,4-2l7.8-10.4a1.1,1.1,0,0,0,.15-.8A1.16,1.16,0,0,0,31.47,16.11Z"
        />
        <path
          fill="#7f0e48"
          d="M22,14H18a1,1,0,0,1-1-1V10H14a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V1a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V4h3a1,1,0,0,1,1,1V9a1,1,0,0,1-1,1H23v3A1,1,0,0,1,22,14Zm-3-2h2V9a1,1,0,0,1,1-1h3V6H22a1,1,0,0,1-1-1V2H19V5a1,1,0,0,1-1,1H15V8h3a1,1,0,0,1,1,1Z"
        />
      </g>
    </svg>
  );
}

function IconPlano({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-[24px] shadow-xl"
    >
      <g data-name="30. Receipt" id="_30._Receipt">
        <path
          fill="#7f0e48"
          d="M19,28H13a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2A1,1,0,0,1,19,28Zm-5-2h0Z"
        />
        <path
          fill="#7f0e48"
          d="M31,24V7a3,3,0,0,0-3-3H27V3a3,3,0,0,0-3-3H8A3,3,0,0,0,5,3V4H4A3,3,0,0,0,1,7V24a1,1,0,0,0-1,1v2a5,5,0,0,0,5,5H27a5,5,0,0,0,5-5V25A1,1,0,0,0,31,24ZM28,6a1,1,0,0,1,1,1V24H27V6ZM7,3A1,1,0,0,1,8,2H24a1,1,0,0,1,1,1V24H7ZM3,7A1,1,0,0,1,4,6H5V24H3ZM30,27a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V26H30Z"
        />
        <path fill="#7f0e48" d="M21,21H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" />
        <path
          fill="#7f0e48"
          d="M18,16H14a1,1,0,0,1-1-1V13H11a1,1,0,0,1-1-1V8a1,1,0,0,1,1-1h2V5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7h2a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1H19v2A1,1,0,0,1,18,16Zm-3-2h2V12a1,1,0,0,1,1-1h2V9H18a1,1,0,0,1-1-1V6H15V8a1,1,0,0,1-1,1H12v2h2a1,1,0,0,1,1,1Z"
        />
      </g>
    </svg>
  );
}

function IconAcompanhamento({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-[24px] shadow-xl"
    >
      <g data-name="5. Smartphone Heart Rate" id="_5._Smartphone_Heart_Rate">
        <path
          fill="#7f0e48"
          d="M16.21,32H5.79A4.8,4.8,0,0,1,1,27.21V4.79A4.8,4.8,0,0,1,5.79,0H16.21A4.8,4.8,0,0,1,21,4.79V5a1,1,0,0,1-2,0V4.79A2.79,2.79,0,0,0,16.21,2H5.79A2.79,2.79,0,0,0,3,4.79V27.21A2.79,2.79,0,0,0,5.79,30H16.21A2.79,2.79,0,0,0,19,27.21V27a1,1,0,0,1,2,0v.21A4.8,4.8,0,0,1,16.21,32Z"
        />
        <path
          fill="#7f0e48"
          d="M11,28a2,2,0,1,1,2-2A2,2,0,0,1,11,28Zm0-2h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z"
        />
        <path fill="#7f0e48" d="M14,6H8A1,1,0,0,1,8,4h6a1,1,0,0,1,0,2Z" />
        <path
          fill="#7f0e48"
          d="M20,24a1,1,0,0,1-.51-.14L18,23A17.18,17.18,0,0,1,12.05,17,7.3,7.3,0,0,1,11,13.24a5.24,5.24,0,0,1,9-3.7l.05.05.05-.05a5.24,5.24,0,0,1,9,3.7A7.3,7.3,0,0,1,28,17,17.18,17.18,0,0,1,22,23l-1.51.91A1,1,0,0,1,20,24ZM16.24,10A3.24,3.24,0,0,0,13,13.24,5.32,5.32,0,0,0,13.76,16,15.34,15.34,0,0,0,19,21.24l1,.59,1-.59A15.34,15.34,0,0,0,26.24,16,5.32,5.32,0,0,0,27,13.24,3.24,3.24,0,0,0,21.47,11l-.76.76a1,1,0,0,1-1.42,0L18.54,11A3.25,3.25,0,0,0,16.24,10Z"
        />
        <path
          fill="#7f0e48"
          d="M21,19h-.17a1,1,0,0,1-.66-.44l-1.45-2.16L17.06,17.5a3,3,0,0,1-1.67.5H10a1,1,0,0,1,0-2h5.39a1,1,0,0,0,.56-.17l2.5-1.66a1,1,0,0,1,1.38.28l1.42,2.12,2.62-2a3,3,0,0,1,1.8-.6H30a1,1,0,0,1,0,2H25.67a1,1,0,0,0-.6.2L21.6,18.8A1,1,0,0,1,21,19Z"
        />
      </g>
    </svg>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f1f3] via-[#f8f3f6] to-[#efe7ec] flex items-center justify-center py-10 px-6 font-[Inter]">
      <div className="w-full max-w-6xl bg-gradient-to-b from-[#fbf8fa] to-[#f6eef3] rounded-[40px] shadow-2xl overflow-hidden border border-[#efe7ec]">
        <Navigation />
        <Hero />
        <AboutProgram />
        <HowItWorks />
        <TestimonialsCarousel />
        <FAQ />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex justify-between items-center px-12 py-8 text-[#3a2230]">
      <div>
        <div className="font-['Playfair_Display'] text-xl">
          Ana Carolina Gonçalves
        </div>
        <div className="text-xs text-[#7f0e48] tracking-wide">
          Especialista em Nutrição Oncológica
        </div>
      </div>

      <div className="hidden md:flex gap-10 text-sm tracking-wide text-[#6b4c5d]">
        <a href="#inicio">Início</a>
        <a href="#programa">Programa</a>
        <a href="#sobre">Sobre</a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contato
        </a>
      </div>

      <a href="#inicio" className="block">
        <img src="/logo.png" alt="Logo Ana Carolina" className="h-16 w-auto object-contain" />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <div
      id="inicio"
      className="grid md:grid-cols-2 items-center px-12 pt-10 pb-20 gap-10 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-['Playfair_Display'] text-5xl leading-tight text-[#3a2230]">
          Nutrição Oncológica Especializada
          <br />
          <span className="italic text-[#7f0e48]">
            Cuidado Clínico Humanizado
          </span>
        </h1>

        <p className="mt-6 text-[#6b4c5d] max-w-md">
          Atendimento individualizado para pacientes oncológicos com foco em
          suporte metabólico, imunológico e qualidade de vida durante todas as
          fases do tratamento.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-gradient-to-r from-[#7f0e48] to-[#b76e79] text-white px-8 py-4 rounded-full shadow-xl hover:scale-[1.02] transition"
        >
          Agende seu atendimento
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex justify-center"
      >
        <img src={fotoAna} alt="Ana Carolina Gonçalves" />
      </motion.div>
    </div>
  );
}

function AboutProgram() {
  return (
    <div
      id="sobre"
      className="text-center px-12 py-20 border-t border-[#efe7ec]"
    >
      <p className="italic text-[#7f0e48] mb-4">Sobre o Atendimento</p>
      <h2 className="font-['Playfair_Display'] text-3xl text-[#3a2230] max-w-2xl mx-auto leading-relaxed">
        Estratégia nutricional baseada em evidências científicas e cuidado
        humanizado.
      </h2>

      <div className="grid md:grid-cols-4 gap-10 mt-16 text-sm text-[#6b4c5d]">
        {[
          "Suporte nutricional durante quimioterapia e radioterapia",
          "Controle de inflamação e sintomas gastrointestinais",
          "Preservação de massa muscular",
          "Plano alimentar individualizado e seguro",
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#f3e9ef] flex items-center justify-center text-[#7f0e48] font-semibold shadow-sm">
              {i + 1}
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div
      id="programa"
      className="px-12 py-20 bg-gradient-to-b from-[#f7f2f5] to-[#efe4ea]"
    >
      <p className="text-center italic text-[#7f0e48] mb-6">Como Funciona</p>
      <h2 className="text-center font-['Playfair_Display'] text-3xl text-[#3a2230] mb-16">
        Processo estruturado em 3 etapas
      </h2>

      <div className="space-y-20">
        {[
          "Avaliação Clínica Completa",
          "Plano Nutricional Personalizado",
          "Acompanhamento Contínuo",
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-4">
              <div className="text-5xl text-[#e4d6dd] font-['Playfair_Display']">
                0{index + 1}
              </div>
              <h3 className="font-['Playfair_Display'] text-xl text-[#3a2230]">
                {step}
              </h3>
              <p className="text-[#6b4c5d]">
                Cada paciente recebe uma conduta específica de acordo com
                diagnóstico, exames e fase do tratamento.
              </p>
            </div>

            <div className="flex justify-center">
              {index === 0 && <IconAvaliacao size={200} />}
              {index === 1 && <IconPlano size={200} />}
              {index === 2 && <IconAcompanhamento size={200} />}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
const testimonials = [
  {
    text: "Além de ótima profissional, uma excelente pessoa lidando com os pacientes. Foi fundamental na minha recuperação após uma cirurgia.",
    name: "João • 67 anos",
  },
  {
    text: "Bom dia. Acabei de sair da quimioterapia. Estou bem. Muito obrigada por seu carinho, profissionalismo e quero que saiba que confio e sei que está fazendo o melhor por mim. Gratidão!❤️❤️ Amém, obrigada por caminhar comigo rumo à minha cura! 🙌🙌🙌 Que bom, fico feliz por estar conseguindo melhorar e estou muito agradecida por me acompanhar com tanta atenção e carinho. Tem feito muita diferença em meu tratamento e na minha vida tb! ❤️❤️❤️",
    name: "Marilea • 57 anos",
  },
  {
    text: "Como paciente oncológico, encontrar a nutricionista Ana Carolina fez muita diferença no meu acompanhamento. A consulta foi extremamente esclarecedora e muito humana. Hoje em dia é difícil encontrar profissionais que realmente escutam o paciente e orientam de forma individualizada. A dieta foi bem estruturada e fácil de seguir no dia a dia. Além disso, o suporte para tirar dúvidas pelo WhatsApp traz muita segurança durante o acompanhamento. Desde que comecei, percebi melhora na fadiga, mais disposição e evolução nos treinos de musculação, principalmente em relação à força, o que tem ajudado no ganho de massa muscular mesmo durante essa fase. Recomendo muito o trabalho da nutricionista Ana Carolina.",
    name: "Fabiano Matos • 37 anos",
  },
  {
    text: "Obrigada, espero que um dia eu possa estar contigo e te dar um abraço de gratidão ❤️ Pode ter certeza que você também está em minhas orações eternamente 🙏😘",
    name: "Rosane • Esposa do Gustavo de 64 anos",
  },
  {
    text: "Tem gente que é anjo disfarçado de nutricionista 🥹🙌🏻🩷 Tenho certeza, vc é MT sensível e atenta ao chamado de Deus. Sua profissão é complementar ao que vc carrega!! Amor ao próximo!!",
    name: "Simone • 37 anos",
  },
  {
    text: "Procuramos a nutricionista quanto teve início a quimioterapia de cancer gástrico do meu marido. Ao chegarmos ao consultório nos deparamos com uma jovem muito capacitada que nos acolheu naquele momento atendendo as nossas demandas e necessidades para que além de nos dar o suporte durante a quimio, o acompanhamento nutricional foi impiedade para que ele chegasse a cirurgia em boas condições físicas e para que após a cirurgia se adaptasse as novas condições com a gastrectomia total. Em todo o periodo de acompanhamento ela foi acessível, atenciosa e competente em suas orientações. Meu marido encontra-se em remissão do câncer.",
    name: "Claudia • Esposa do Denivaldo de 66 anos",
  },
  {
    text: "Bom dia doutora!! Graças a Deus ela está bem melhor, desde o dia que conversamos com a senhora. Estamos seguindo conforme as orientações da senhora, e o frio já passou, e o melhor, ela já sente até fome rs. Muito obrigada que Deus abençoe a senhora. Esses últimos dias tem sido produtivos demais, ela tem se alimentado melhor, já está sentindo o cheiro, o sabor. Nós só temos que agradecer, agradecer a Deus, a senhora e a Rosana pela indicação, pq eu já estava desesperada e já não sabia o que fazer. E aí a senhora apareceu e nos ajudou e está ajudando.",
    name: "Mariete • Filha da Dona Nilzete de 63 anos",
  },
  {
    text: "Ana Carolina é uma profissional muito dedicada, atenciosa, procura conhecer o perfil de seus pacientes para concluir seu trabalho. Profissional de excelência, tive uma ótima experiência com Ana Carolina, o cardápio montado por ela para mim me fez ficar saudável e ter uma alimentação mais completa e aprender ter horário e a valorizar a importância de uma boa alimentação.",
    name: "Ana Paula • 55 anos",
  },
];

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[index];

  return (
    <div className="px-12 py-24 border-t border-[#efe7ec] bg-[#fbf8fa] text-center">
      <p className="italic text-[#7f0e48] mb-6">Depoimentos</p>
      <h2 className="font-['Playfair_Display'] text-3xl text-[#3a2230] mb-16">
        Resultados reais com acompanhamento especializado
      </h2>

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-xl relative"
      >
        <button
          onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
          aria-label="Anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7f0e48] p-2 hover:bg-transparent"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#7f0e48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={() => setIndex((index + 1) % testimonials.length)}
          aria-label="Próximo"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7f0e48] p-2 hover:bg-transparent"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="#7f0e48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span className="absolute -left-3 -top-3 text-6xl text-[#f3e9ef] opacity-40">“</span>

        <p className="italic text-[#6b4c5d] leading-relaxed mb-4 text-sm pl-4 pr-4">
          {current.text}
        </p>

        <span className="absolute -right-3 -bottom-3 text-6xl text-[#f3e9ef] opacity-40">”</span>

        <div className="text-sm text-[#7f0e48] font-semibold tracking-wide mt-4">
          {current.name}
        </div>
      </motion.div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question:
        "O atendimento é indicado apenas para quem está em tratamento ativo?",
      answer:
        "Não. O acompanhamento pode ser realizado antes, durante ou após o tratamento oncológico, sempre respeitando a individualidade clínica.",
    },
    {
      question: "As consultas podem ser online?",
      answer:
        "Sim. O atendimento pode ser presencial ou online, com protocolo completo e acompanhamento contínuo.",
    },
    {
      question: "Como agendar a primeira consulta?",
      answer:
        "O agendamento é realizado diretamente pelo WhatsApp, onde você receberá todas as orientações iniciais.",
    },
    {
      question: "A alimentação será muito rígida durante o tratamento?",
      answer:
        "Não. O plano alimentar é adaptado conforme o que você consegue consumir em cada etapa do tratamento, levando em conta sintomas, apetite e como seu corpo reage. Sem regras rígidas ou imposições.",
    },
    {
      question: "Posso esclarecer dúvidas mesmo fora das consultas?",
      answer:
        "Sim. Você conta com suporte ao longo do acompanhamento, justamente para não precisar lidar com dúvidas ou decisões sozinha conforme surgem mudanças nos sintomas.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="px-12 py-20 bg-[#f7f2f5] text-center">
      <p className="italic text-[#7f0e48] mb-6">Perguntas Frequentes</p>
      <h2 className="font-['Playfair_Display'] text-3xl text-[#3a2230] mb-10">
        Dúvidas Comuns
      </h2>

      <div className="max-w-2xl mx-auto text-left space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-white to-[#f8eef3] rounded-xl shadow-md border border-[#eadde4] overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left p-6 text-[#3a2230] font-medium flex justify-between items-center"
            >
              {item.question}
              <span className="text-[#7f0e48]">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            {openIndex === i && (
              <div className="px-6 pb-6 text-sm text-[#6b4c5d] leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="text-center text-xs italic text-[#a08a96] py-10 border-t border-[#efe7ec]">
      © {new Date().getFullYear()} Ana Carolina Gonçalves CRN-4 23100301 • Nutricionista Especialista em Oncologia.
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#7f0e48] text-white px-6 py-3 rounded-full shadow-2xl hover:bg-[#5f0a34] transition z-50"
    >
      Agende sua consulta
    </a>
  );
}
