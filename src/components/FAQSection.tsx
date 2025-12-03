import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "WIE SCHNELL KANN GELIEFERT WERDEN?",
    answer:
      "Standard-Surpriseboxen versenden wir in der Regel innerhalb von 2-3 Werktagen. Bei grösseren Bestellungen oder individuellen Boxen kontaktieren Sie uns für eine genaue Zeitangabe.",
  },
  {
    question: "KANN ICH DEN INHALT SELBST BESTIMMEN?",
    answer:
      "Bei unseren Standard-Surpriseboxen ist der Inhalt eine Überraschung. Für individuelle Zusammenstellungen ab 25 Stück können Sie Ihre Wünsche angeben – wir erstellen dann eine massgeschneiderte Offerte.",
  },
  {
    question: "WOHIN WIRD GELIEFERT?",
    answer:
      "Wir liefern in die gesamte Schweiz. Bei individuellen Bestellungen können wir auch direkt an verschiedene Adressen Ihrer Kund:innen oder Mitarbeitenden versenden.",
  },
  {
    question: "KANN ICH EIGENE PRODUKTE IN DIE BOX INTEGRIEREN?",
    answer:
      "Ja! Bei individuellen Surpriseboxen ab 25 Stück können Sie eigene Produkte, Flyer oder gebrandete Artikel hinzufügen. Ideal für Probier-Pakete oder Marketing-Aktionen.",
  },
  {
    question: "WAS IST DIE MINDESTBESTELLMENGE?",
    answer:
      "Für individuelle Zusammenstellungen gilt eine Mindestbestellmenge von 25 Stück. Die Standard-Surpriseboxen können einzeln bestellt werden.",
  },
  {
    question: "WIE FUNKTIONIERT DIE ZAHLUNG?",
    answer:
      "Für Einzelbestellungen bieten wir sichere Online-Zahlung via Shopify Checkout. Bei grösseren Bestellungen erstellen wir eine Rechnung mit 30 Tagen Zahlungsziel.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Title */}
          <div>
            <h2 className="section-title text-foreground mb-4 lg:sticky lg:top-32">
              HÄUFIGE
              <br />
              <span className="text-primary">FRAGEN</span>
            </h2>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-border bg-card px-6"
                >
                  <AccordionTrigger className="font-display text-xl md:text-2xl text-left py-6 hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
