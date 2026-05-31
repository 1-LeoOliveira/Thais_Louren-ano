import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AreasSection from "@/components/sections/AreasSection";
import BarriersSection from "@/components/sections/BarriersSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AreasSection />
      <BenefitsSection />
      <BarriersSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
