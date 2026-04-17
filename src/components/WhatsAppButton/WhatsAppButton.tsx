import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../../services/whatsapp";

export default function WhatsAppButton() {
  return (
    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-gradient-to-r from-[#7f0e48] to-[#b76e79] text-white px-8 py-4 rounded-full shadow-xl hover:scale-[1.02] transition transform z-50">Agende seu atendimento</a>
  );
}
