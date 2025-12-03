import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie schnell kann ich meine Surprisebox erhalten?",
    answer:
      "Standard-Surpriseboxen versenden wir in der Regel innerhalb von 2-3 Werktagen. Bei grösseren Bestellungen oder individuellen Boxen kontaktieren Sie uns für eine genaue Zeitangabe.",
  },
  {
    question: "Kann ich den Inhalt der Surprisebox selbst bestimmen?",
    answer:
      "Bei unseren Standard-Surpriseboxen ist der Inhalt eine Überraschung. Für individuelle Zusammenstellungen ab 25 Stück können Sie Ihre Wünsche angeben – wir erstellen dann eine massgeschneiderte Offerte.",
  },
  {
    question: "Wohin wird geliefert?",
    answer:
      "Wir liefern in die gesamte Schweiz. Bei individuellen Bestellungen können wir auch direkt an verschiedene Adressen Ihrer Kund:innen oder Mitarbeitenden versenden.",
  },
  {
    question: "Kann ich eigene Produkte in die Box integrieren?",
    answer:
      "Ja! Bei individuellen Surpriseboxen ab 25 Stück können Sie eigene Produkte, Flyer oder gebrandete Artikel hinzufügen. Ideal für Probier-Pakete oder Marketing-Aktionen.",
  },
  {
    question: "Was ist die Mindestbestellmenge für individuelle Boxen?",
    answer:
      "Für individuelle Zusammenstellungen gilt eine Mindestbestellmenge von 25 Stück. Die Standard-Surpriseboxen können einzeln bestellt werden.",
  },
  {
    question: "Wie funktioniert die Zahlung?",
    answer:
      "Für Einzelbestellungen bieten wir sichere Online-Zahlung via Shopify Checkout. Bei grösseren Bestellungen erstellen wir eine Rechnung mit 30 Tagen Zahlungsziel.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Häufige Fragen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Haben Sie weitere Fragen? Kontaktieren Sie uns gerne direkt.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-soft"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
