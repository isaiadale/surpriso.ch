import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductsSection } from "@/components/ProductsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CustomBoxForm } from "@/components/CustomBoxForm";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <BenefitsSection />
        <WhyUsSection />
        <CustomBoxForm />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
