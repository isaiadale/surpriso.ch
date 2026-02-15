import { Mail, MapPin, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-secondary/50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie eine Beratung? Wir sind für Sie
            da.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:info@surpriso.ch"
            className="bg-card p-6 rounded-xl border border-border text-center card-hover group"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
            <p className="text-muted-foreground text-sm">info@surpriso.ch</p>
          </a>

          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Standort</h3>
            <p className="text-muted-foreground text-sm">St.Gallen, Schweiz</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Antwortzeit</h3>
            <p className="text-muted-foreground text-sm">Innerhalb 24h</p>
          </div>
        </div>
      </div>
    </section>
  );
};
