import logo from "../../assets/icons/logo.png";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../../services/whatsapp";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center px-8 py-8 text-[#3a2230]">
      <div>
        <div className="font-['Playfair_Display'] text-2xl">Ana Carolina Gonçalves</div>
        <div className="font-['Playfair_Display'] italic text-sm text-[#7f0e48] tracking-wide mt-1">Especialista em Nutrição Oncológica</div>
      </div>

      <div className="hidden md:flex gap-10 text-sm tracking-wide text-[#6b4c5d]">
        <a href="#inicio">Início</a>
        <a href="#programa">Programa</a>
        <a href="#sobre">Sobre</a>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer">Contato</a>
      </div>

      <a href="#inicio" className="block">
        <img src={logo} alt="Logo Ana Carolina" className="h-20 w-auto object-contain" />
      </a>
    </div>
  );
}
