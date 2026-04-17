// no default React import needed with the new JSX transform

export default function AboutProgram() {
  return (
    <div id="sobre" className="text-center px-8 py-20 border-t border-[#efe7ec]">
      <p className="italic text-[#7f0e48] mb-4">Sobre o Atendimento</p>
      <h2 className="font-['Playfair_Display'] text-3xl text-[#3a2230] max-w-2xl mx-auto leading-relaxed">Estratégia nutricional baseada em evidências científicas e cuidado humanizado.</h2>

      <div className="grid md:grid-cols-4 gap-10 mt-16 text-sm text-[#6b4c5d]">
        {["Suporte nutricional durante quimioterapia e radioterapia","Controle de inflamação e sintomas gastrointestinais","Preservação de massa muscular","Plano alimentar individualizado e seguro"].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#f3e9ef] flex items-center justify-center text-[#7f0e48] font-semibold shadow-sm">{i + 1}</div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
