import { useEffect, useRef } from "react";
import logo from "../../assets/icons/logo.png";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../../services/whatsapp";

export default function Navigation() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function setScrollPadding() {
      if (headerRef.current) {
        // Using a slightly larger padding to ensure content clears the header
        document.documentElement.style.scrollPaddingTop = `${headerRef.current.offsetHeight + 32}px`;
      }
    }

    // Small timeout to ensure DOM is fully rendered
    setTimeout(setScrollPadding, 100);
    window.addEventListener("resize", setScrollPadding);
    return () => window.removeEventListener("resize", setScrollPadding);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-[#fbf8fa]/90 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-6 text-[#3a2230]">
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
  </header>
  );
}
