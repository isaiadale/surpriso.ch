import { Gift, Heart, Package, Users, Sparkles, Truck, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "KUNDEN-DANKESCHÖN",
    description: "Zeigen Sie Ihren Kunden Wertschätzung mit einer persönlichen Überraschung.",
  },
  {
    icon: Users,
    title: "TEAM-GESCHENKE",
    description: "Motivieren Sie Ihr Team mit durchdachten Geschenkboxen zu besonderen Anlässen.",
  },
  {
    icon: Package,
    title: "PRODUKT-PAKETE",
    description: "Präsentieren Sie Ihre Produkte in attraktiven Testpaketen für neue Kunden.",
  },
  {
    icon: Rocket,
    title: "EVENT-ÜBERRASCHUNGEN",
    description: "Machen Sie Ihr Event unvergesslich mit einzigartigen Giveaways.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="vorteile" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="section-title mb-4">
            PERFEKT <span className="text-primary">FÜR</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 border-2 border-secondary-foreground/20 hover:border-primary transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-3">{benefit.title}</h3>
              <p className="text-secondary-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Full Service Banner */}
        <div className="mt-20 p-8 md:p-12 bg-primary text-primary-foreground">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-4xl md:text-5xl mb-4">
                ALLES AUS EINER HAND
              </h3>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Von der Idee bis zur Lieferung: Wir übernehmen Konzeption, Inhalt, Branding, 
                Verpackung und Versand – Sie lehnen sich zurück.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div className="p-4">
                <div className="font-display text-5xl">100%</div>
                <div className="text-sm font-bold tracking-wider">SWISS MADE</div>
              </div>
              <div className="p-4">
                <div className="font-display text-5xl">24H</div>
                <div className="text-sm font-bold tracking-wider">EXPRESS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
