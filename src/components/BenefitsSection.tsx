import { Gift, Heart, Package, Users, Rocket } from "lucide-react";

const benefits = [
  { icon: Heart, title: "KUNDEN-DANKESCHÖN", description: "Zeigen Sie Ihren Kunden Wertschätzung." },
  { icon: Users, title: "TEAM-GESCHENKE", description: "Motivieren Sie Ihr Team mit Überraschungen." },
  { icon: Package, title: "PRODUKT-PAKETE", description: "Präsentieren Sie Ihre Produkte attraktiv." },
  { icon: Rocket, title: "EVENT-ÜBERRASCHUNGEN", description: "Machen Sie Ihr Event unvergesslich." },
];

export const BenefitsSection = () => {
  return (
    <section id="vorteile" className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title text-foreground mb-3">
            PERFEKT <span className="text-primary text-glow">FÜR</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-4 border border-border bg-background rounded-lg hover:border-primary transition-colors"
            >
              <div className="w-10 h-10 bg-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-sm mb-1">{benefit.title}</h3>
              <p className="text-muted-foreground text-xs">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl mb-2">ALLES AUS EINER HAND</h3>
              <p className="text-primary-foreground/80 text-sm max-w-lg">
                Von der Idee bis zur Lieferung: Konzeption, Inhalt, Branding, Verpackung und Versand.
              </p>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <div className="font-display text-3xl">100%</div>
                <div className="text-xs font-bold tracking-wider">SWISS MADE</div>
              </div>
              <div>
                <div className="font-display text-3xl">24H</div>
                <div className="text-xs font-bold tracking-wider">EXPRESS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
