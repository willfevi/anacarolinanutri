import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { text: "Além de ótima profissional, uma excelente pessoa lidando com os pacientes. Foi fundamental na minha recuperação após uma cirurgia.", name: "João • 67 anos" },
  { text: "Bom dia. Acabei de sair da quimioterapia. Estou bem. Muito obrigada por seu carinho, profissionalismo e quero que saiba que confio e sei que está fazendo o melhor por mim. Gratidão!❤️❤️ Amém, obrigada por caminhar comigo rumo à minha cura! 🙌🙌🙌 Que bom, fico feliz por estar conseguindo melhorar e estou muito agradecida por me acompanhar com tanta atenção e carinho. Tem feito muita diferença em meu tratamento e na minha vida tb! ❤️❤️❤️", name: "Marilea • 57 anos" },
  { text: "Como paciente oncológico, encontrar a nutricionista Ana Carolina fez muita diferença no meu acompanhamento. A consulta foi extremamente esclarecedora e muito humana. Hoje em dia é difícil encontrar profissionais que realmente escutam o paciente e orientam de forma individualizada. A dieta foi bem estruturada e fácil de seguir no dia a dia. Além disso, o suporte para tirar dúvidas pelo WhatsApp traz muita segurança durante o acompanhamento. Desde que comecei, percebi melhora na fadiga, mais disposição e evolução nos treinos de musculação, principalmente em relação à força, o que tem ajudado no ganho de massa muscular mesmo durante essa fase. Recomendo muito o trabalho da nutricionista Ana Carolina.", name: "Fabiano Matos • 37 anos" },
  { text: "Obrigada, espero que um dia eu possa estar contigo e te dar um abraço de gratidão ❤️ Pode ter certeza que você também está em minhas orações eternamente 🙏😘", name: "Rosane • Esposa do Gustavo de 64 anos" },
  { text: "Tem gente que é anjo disfarçado de nutricionista 🥹🙌🏻🩷 Tenho certeza, vc é MT sensível e atenta ao chamado de Deus. Sua profissão é complementar ao que vc carrega!! Amor ao próximo!!", name: "Simone • 37 anos" },
  { text: "Procuramos a nutricionista quanto teve início a quimioterapia de cancer gástrico do meu marido. Ao chegarmos ao consultório nos deparamos com uma jovem muito capacitada que nos acolheu naquele momento atendendo as nossas demandas e necessidades para que além de nos dar o suporte durante a quimio, o acompanhamento nutricional foi impiedade para que ele chegasse a cirurgia em boas condições físicas e para que após a cirurgia se adaptasse as novas condições com a gastrectomia total. Em todo o periodo de acompanhamento ela foi acessível, atenciosa e competente em suas orientações. Meu marido encontra-se em remissão do câncer.", name: "Claudia • Esposa do Denivaldo de 66 anos" },
  { text: "Bom dia doutora!! Graças a Deus ela está bem melhor, desde o dia que conversamos com a senhora. Estamos seguindo conforme as orientações da senhora, e o frio já passou, e o melhor, ela já sente até fome rs. Muito obrigada que Deus abençoe a senhora. Esses últimos dias tem sido produtivos demais, ela tem se alimentado melhor, já está sentindo o cheiro, o sabor. Nós só temos que agradecer, agradecer a Deus, a senhora e a Rosana pela indicação, pq eu já estava desesperada e já não sabia o que fazer. E aí a senhora apareceu e nos ajudou e está ajudando.", name: "Mariete • Filha da Dona Nilzete de 63 anos" },
  { text: "Ana Carolina é uma profissional muito dedicada, atenciosa, procura conhecer o perfil de seus pacientes para concluir seu trabalho. Profissional de excelência, tive uma ótima experiência com Ana Carolina, o cardápio montado por ela para mim me fez ficar saudável e ter uma alimentação mais completa e aprender ter horário e a valorizar a importância de uma boa alimentação.", name: "Ana Paula • 55 anos" },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <div className="px-8 py-24 border-t border-[#efe7ec] bg-[#fbf8fa] text-center">
      <p className="italic text-[#7f0e48] mb-6">Depoimentos</p>
      <h2 className="font-['Playfair_Display'] text-3xl text-[#3a2230] mb-16">Resultados reais com acompanhamento especializado</h2>

      <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-md mx-auto bg-white rounded-3xl p-8 relative" style={{ boxShadow: '0 20px 40px rgba(127,14,72,0.12)' }}>
        <button onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)} aria-label="Anterior" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7f0e48] p-2 hover:bg-transparent">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#7f0e48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <button onClick={() => setIndex((index + 1) % testimonials.length)} aria-label="Próximo" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7f0e48] p-2 hover:bg-transparent">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="#7f0e48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <span className="absolute -left-3 -top-3 text-6xl text-[#f3e9ef] opacity-40">“</span>

        <p className="italic text-[#6b4c5d] leading-relaxed mb-4 text-sm pl-4 pr-4">{current.text}</p>

        <span className="absolute -right-3 -bottom-3 text-6xl text-[#f3e9ef] opacity-40">”</span>

        <div className="text-sm text-[#7f0e48] font-semibold tracking-wide mt-4">{current.name}</div>
      </motion.div>
    </div>
  );
}
