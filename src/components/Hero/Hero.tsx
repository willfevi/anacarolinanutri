import { motion } from "framer-motion";
import fotoAna from "../../assets/img/index_nutricionista.jpg";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../../services/whatsapp";

export default function Hero() {
  return (
    <div id="inicio" className="grid md:grid-cols-2 items-center px-8 pt-10 pb-20 gap-10 relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-['Playfair_Display'] text-5xl leading-tight text-[#3a2230]">
          Nutrição Oncológica Especializada
          <br />
        </h1>
        <span className="font-['Playfair_Display'] italic text-[#7f0e48] text-xl md:text-2xl leading-tight mt-6 block">Onde o cuidado técnico encontra o acolhimento humano.</span>
        <p className="mt-6 text-[#6b4c5d] max-w-md">Atendimento individualizado para pacientes oncológicos com foco em suporte metabólico, imunológico e qualidade de vida durante todas as fases do tratamento.</p>

        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-gradient-to-r from-[#7f0e48] to-[#b76e79] text-white px-8 py-4 rounded-full shadow-xl hover:scale-[1.02] transition">Agende seu atendimento</a>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex justify-center">
        <img src={fotoAna} alt="Ana Carolina Gonçalves" className="w-full max-w-[360px] sm:w-64 md:w-96 lg:w-[520px] h-auto object-contain mx-auto rounded-[24px]" style={{ boxShadow: '0 20px 40px rgba(127,14,72,0.12)' }} />
      </motion.div>
    </div>
  );
}
