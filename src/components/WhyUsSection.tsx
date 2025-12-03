import { Check, Shield, Clock, Palette, BadgeSwissFranc } from "lucide-react";

const reasons = [
  {
    icon: BadgeSwissFranc,
    title: "Schweizer Anbieter",
    description: "Lokale Qualität und persönlicher Service aus der Schweiz",
  },
  {
    icon: Clock,
    title: "Sichere Ausführung",
    description: "Auch bei knappen Deadlines liefern wir zuverlässig",
  },
  {
    icon: Palette,
    title: "Individuelle Zusammenstellung",
    description: "Nach Ihren Wünschen und Budget zusammengestellt",
  },
  {
    icon: Shield,
    title: "Keine versteckten Kosten",
    description: "Keine Billig-Inhalte, transparente Preise",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="warum-wir" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Warum <span className="text-primary">Surpriso</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Wir sind Ihr zuverlässiger Partner für hochwertige Geschenkboxen in der Schweiz. 
              Qualität, Zuverlässigkeit und persönlicher Service stehen bei uns an erster Stelle.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-soft group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <reason.icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 transition-colors group-hover:text-primary">{reason.title}</h4>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Garantiert</span>
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Qualität, die überzeugt
              </h3>
              
              <p className="text-muted-foreground">
                Jede Surpriso-Box wird mit Sorgfalt zusammengestellt. Wir verwenden nur 
                hochwertige Produkte und achten auf eine ansprechende Präsentation.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Handverlesene Premium-Produkte",
                  "Liebevolles Packaging",
                  "Persönliche Karte inklusive",
                  "Schweizweiter Versand",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group cursor-default">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 transition-transform group-hover:scale-125" />
                    <span className="text-foreground transition-colors group-hover:text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
