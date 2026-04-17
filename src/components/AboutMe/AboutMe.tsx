import { motion } from "framer-motion";
import quem from "../../assets/img/quem_e_voce.jpg";

export default function AboutMe() {
  return (
    <div id="quem" className="px-8 py-20 border-t border-[#efe7ec] bg-white">
      <div className="grid md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <img src={quem} alt="Ana Carolina Gonçalves" className="w-full max-w-[420px] sm:w-64 md:w-96 lg:w-[520px] h-auto object-contain rounded-[24px]" style={{ boxShadow: '0 20px 40px rgba(127,14,72,0.12)' }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-lg mx-auto text-left">
          <p className="italic text-[#7f0e48] mb-2">Quem é Ana Carolina Goncalves</p>
          <h3 className="font-['Playfair_Display'] text-3xl text-[#3a2230] mb-4">Sou nutricionista especialista em Nutrição Oncológica</h3>
          <p className="text-[#6b4c5d] leading-relaxed">Sou nutricionista especialista em Nutrição Oncológica pela Sociedade Brasileira de Nutrição Oncológica (SBNO). Além do atendimento clínico online ou presencial, dedico-me ao voluntariado na AMMA e à criação de espaços de acolhimento como o Grupo ALENTO. Minha missão é mostrar que a nutrição faz parte do tratamento, é uma ferramenta de força e esperança para quem enfrenta o câncer.</p>
        </motion.div>
      </div>
    </div>
  );
}
