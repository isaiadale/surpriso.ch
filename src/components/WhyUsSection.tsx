import { Shield, Zap, Palette, Eye } from "lucide-react";

const reasons = [
  { icon: Shield, title: "SCHWEIZER ANBIETER", description: "Lokale Qualität, persönlicher Service." },
  { icon: Zap, title: "SICHERE ABWICKLUNG", description: "Von der Bestellung bis zur Lieferung." },
  { icon: Palette, title: "INDIVIDUELL", description: "Jede Box nach Ihren Wünschen kuratiert." },
  { icon: Eye, title: "KEINE VERSTECKTEN KOSTEN", description: "Transparente Preise, faire Konditionen." },
];

export const WhyUsSection = () => {
  return (
    <section id="warum-wir" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title text-foreground mb-3">
            WARUM <span className="text-primary text-glow">WIR</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group p-4 border border-border bg-card rounded-lg hover:border-primary transition-colors"
            >
              <div className="w-10 h-10 bg-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <reason.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-sm mb-1">{reason.title}</h3>
              <p className="text-muted-foreground text-xs">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
