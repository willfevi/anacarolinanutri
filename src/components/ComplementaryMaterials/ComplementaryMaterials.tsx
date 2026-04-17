import ebook24h from "../../assets/img/ebook_24h.png";

export default function ComplementaryMaterials() {
  return (
    <section id="materiais" className="px-8 py-20 border-t border-[#efe7ec] bg-[#fbf8fa]">
      <div className="grid md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
          <p className="italic text-[#7f0e48] mb-2">Materiais Complementares</p>
          <h3 className="font-['Playfair_Display'] text-3xl text-[#3a2230] mb-4">Ferramentas para o seu dia a dia</h3>
          <p className="text-[#6b4c5d] leading-relaxed mb-4">Além das consultas, meus pacientes contam com materiais exclusivos, como o e-book “Manual da Quimioterapia”, “Guia de Mercado” e "24h Onco-Protegidas", com orientações práticas para cada fase.</p>
          <p className="text-[#6b4c5d] leading-relaxed">Também ofereço acesso a um aplicativo com conteúdos, lembretes e ferramentas práticas para facilitar o acompanhamento diário e o registro de sintomas e alimentação.</p>
        </div>

        <div className="flex justify-center">
          <img src={ebook24h} alt="E-book 24h Onco-Protegidas" className="w-full max-w-[300px] h-auto object-contain rounded-[16px] shadow-md" />
        </div>
      </div>
    </section>
  );
}
