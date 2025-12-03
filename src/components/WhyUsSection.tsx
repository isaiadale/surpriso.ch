import { Shield, Zap, Palette, Eye } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "SCHWEIZER ANBIETER",
    description: "Lokale Qualität, persönlicher Service, kurze Wege.",
  },
  {
    icon: Zap,
    title: "SICHERE ABWICKLUNG",
    description: "Von der Bestellung bis zur Lieferung – alles reibungslos.",
  },
  {
    icon: Palette,
    title: "INDIVIDUELLE ZUSAMMENSTELLUNG",
    description: "Jede Box wird nach Ihren Wünschen kuratiert.",
  },
  {
    icon: Eye,
    title: "KEINE VERSTECKTEN KOSTEN",
    description: "Transparente Preise, faire Konditionen, keine Überraschungen.",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="warum-wir" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="section-title text-foreground mb-4">
            WARUM <span className="text-primary">WIR</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-border">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group p-8 md:p-12 ${
                index < 2 ? 'border-b-2' : ''
              } ${index % 2 === 0 ? 'md:border-r-2' : ''} border-border hover:bg-muted transition-colors duration-300`}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <reason.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
