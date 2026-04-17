import { motion } from "framer-motion";
import { IconAvaliacao, IconPlano, IconAcompanhamento } from "../Icons/Icons";

export default function HowItWorks() {
  return (
    <div id="programa" className="px-8 py-20 bg-gradient-to-b from-[#f7f2f5] to-[#efe4ea]">
      <p className="text-center italic text-[#7f0e48] mb-6">Como Funciona</p>
      <h2 className="text-center font-['Playfair_Display'] text-3xl text-[#3a2230] mb-16">Processo estruturado em 3 etapas</h2>

      <div className="space-y-20">
        {["Avaliação Clínica Completa","Plano Nutricional Personalizado","Acompanhamento Contínuo"].map((step, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="text-5xl text-[#e4d6dd] font-['Playfair_Display']">0{index + 1}</div>
              <h3 className="font-['Playfair_Display'] text-xl text-[#3a2230]">{step}</h3>
              <p className="text-[#6b4c5d]">Cada paciente recebe uma conduta específica de acordo com diagnóstico, exames e fase do tratamento.</p>
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
