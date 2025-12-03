import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "WIE SCHNELL KANN GELIEFERT WERDEN?", answer: "Standard-Boxen versenden wir in 2-3 Werktagen. Bei grösseren Bestellungen kontaktieren Sie uns für genaue Zeitangaben." },
  { question: "KANN ICH DEN INHALT SELBST BESTIMMEN?", answer: "Bei Standard-Boxen ist der Inhalt eine Überraschung. Ab 25 Stück können Sie Ihre Wünsche angeben." },
  { question: "WOHIN WIRD GELIEFERT?", answer: "Wir liefern in die gesamte Schweiz. Bei individuellen Bestellungen auch direkt an verschiedene Adressen." },
  { question: "KANN ICH EIGENE PRODUKTE INTEGRIEREN?", answer: "Ja! Ab 25 Stück können Sie eigene Produkte, Flyer oder gebrandete Artikel hinzufügen." },
  { question: "WAS IST DIE MINDESTBESTELLMENGE?", answer: "Für individuelle Zusammenstellungen gilt mindestens 25 Stück. Standard-Boxen können einzeln bestellt werden." },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title text-foreground mb-3">
            HÄUFIGE <span className="text-primary text-glow">FRAGEN</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border bg-card rounded-lg px-4 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="font-display text-sm text-left py-3 hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-3">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
