import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductsSection } from "@/components/ProductsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CustomBoxForm } from "@/components/CustomBoxForm";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  // FAQ Structured Data for rich snippets
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist eine Surpriso-Box?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine Surpriso-Box ist eine handverlesene Premium-Geschenkbox mit ausgewählten Schweizer Produkten, perfekt für Firmengeschenke und besondere Anlässe."
        }
      },
      {
        "@type": "Question",
        "name": "Ab welcher Stückzahl kann ich individuelle Boxen bestellen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Individuelle Surpriso-Boxen sind ab 25 Stück erhältlich. Wir erstellen kostenlos eine massgeschneiderte Offerte nach Ihren Wünschen."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert die Lieferung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard-Boxen werden innerhalb von 2-3 Werktagen geliefert. Für individuelle Bestellungen besprechen wir den Liefertermin persönlich mit Ihnen."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich die Box personalisieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja! Bei individuellen Bestellungen ab 25 Stück können Sie die Box mit Ihrem Logo, individuellen Grußkarten und speziellen Produktwünschen personalisieren."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Surpriso-Box | Premium Geschenkboxen aus der Schweiz"
        description="Überraschen Sie mit einzigartigen Geschenkboxen. Surpriso-Boxen für Weihnachten, Teamgeschenke und individuelle Firmenboxen ab 25 Stück. 100% Schweizer Qualität, handverlesen und mit Liebe zusammengestellt."
        keywords="Geschenkbox Schweiz, Surprisebox, Weihnachtsgeschenk Firma, Firmengeschenk, Premium Geschenke Schweiz, Teamgeschenke, Corporate Gifts, Geschenkbox personalisiert, Mitarbeitergeschenke"
        structuredData={faqStructuredData}
      />
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
