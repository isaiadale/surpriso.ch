import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title text-foreground mb-3">
            LET'S <span className="text-primary text-glow">TALK</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Fragen oder individuelle Box zusammenstellen? Wir freuen uns auf Sie!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="mailto:hello@surprisebox.ch" className="group p-4 border border-border bg-background rounded-lg hover:border-primary transition-colors text-center">
            <div className="w-10 h-10 bg-primary flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Mail className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">E-Mail</div>
            <div className="font-display text-xs">HELLO@SURPRISEBOX.CH</div>
          </a>

          <a href="tel:+41XXXXXXXXX" className="group p-4 border border-border bg-background rounded-lg hover:border-primary transition-colors text-center">
            <div className="w-10 h-10 bg-primary flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Phone className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Telefon</div>
            <div className="font-display text-xs">+41 XX XXX XX XX</div>
          </a>

          <div className="p-4 border border-border bg-background rounded-lg text-center">
            <div className="w-10 h-10 bg-muted flex items-center justify-center mx-auto mb-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Standort</div>
            <div className="font-display text-xs">ZÜRICH, SCHWEIZ</div>
          </div>

          <div className="p-4 border border-border bg-background rounded-lg text-center">
            <div className="w-10 h-10 bg-muted flex items-center justify-center mx-auto mb-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Antwortzeit</div>
            <div className="font-display text-xs">INNERHALB 24H</div>
          </div>
        </div>
      </div>
    </section>
  );
};
