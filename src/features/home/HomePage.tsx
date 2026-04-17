import fotoFundo from "../../assets/img/root_background.png";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import WhyNutrition from "../../components/WhyNutrition/WhyNutrition";
import AboutProgram from "../../components/AboutProgram/AboutProgram";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import TestimonialsCarousel from "../../components/Testimonials/TestimonialsCarousel";
import AboutMe from "../../components/AboutMe/AboutMe";
import ComplementaryMaterials from "../../components/ComplementaryMaterials/ComplementaryMaterials";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={fotoFundo} alt="" className="w-full h-full object-cover" style={{ filter: 'blur(12px)', opacity: 0.9, transform: 'scale(1.03)' }} />
      </div>

      <div className="w-full max-w-7xl bg-gradient-to-b from-[#fbf8fa] to-[#f6eef3] rounded-[40px] shadow-2xl overflow-clip border border-[#efe7ec] relative z-10">
        <Navigation />
        <Hero />
        <WhyNutrition />
        <AboutProgram />
        <HowItWorks />
        <TestimonialsCarousel />
        <AboutMe />
        <ComplementaryMaterials />
        <FAQ />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
