import { Gift, Heart, Package, Users, Sparkles, Truck } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Weihnachtsgeschenke",
    description: "Machen Sie Ihren Kund:innen ein spezielles Weihnachtsgeschenk",
  },
  {
    icon: Users,
    title: "Team-Dankeschön",
    description: "Danken Sie Ihrem Team für die intensive Zeit",
  },
  {
    icon: Package,
    title: "Probier-Pakete",
    description: "Verschicken Sie Probier-Pakete Ihrer eigenen Produkte",
  },
  {
    icon: Sparkles,
    title: "Key-Account-Pflege",
    description: "Honorieren Sie die Treue Ihrer Key-Account-Kund:innen",
  },
];

const services = [
  { icon: Gift, text: "Idee & Konzept" },
  { icon: Package, text: "Inhalt & Branding" },
  { icon: Truck, text: "Packaging & Versand" },
];

export const BenefitsSection = () => {
  return (
    <section id="vorteile" className="section-padding bg-secondary/50">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Mit Surpriso-Boxen...
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schenken Sie Freude und Überraschung – für jeden Anlass und jede Beziehung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border text-center card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* All-in-one service */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Alles aus einer Hand
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Wir übernehmen den kompletten Prozess für Sie – von der ersten Idee bis zur Lieferung.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <service.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium text-foreground">{service.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
