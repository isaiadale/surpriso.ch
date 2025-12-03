import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="section-title mb-8">
              LET'S
              <br />
              <span className="text-primary">TALK</span>
            </h2>

            <p className="text-xl text-secondary-foreground/80 mb-12 leading-relaxed">
              Haben Sie Fragen oder möchten Sie eine individuelle Box zusammenstellen? 
              Wir freuen uns auf Ihre Nachricht!
            </p>
          </div>

          {/* Right Column - Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:hello@surprisebox.ch"
              className="group p-6 border-2 border-secondary-foreground/20 hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-sm font-bold uppercase tracking-wide text-secondary-foreground/60 mb-1">E-Mail</div>
              <div className="font-display text-xl">HELLO@SURPRISEBOX.CH</div>
            </a>

            <a
              href="tel:+41XXXXXXXXX"
              className="group p-6 border-2 border-secondary-foreground/20 hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-sm font-bold uppercase tracking-wide text-secondary-foreground/60 mb-1">Telefon</div>
              <div className="font-display text-xl">+41 XX XXX XX XX</div>
            </a>

            <div className="p-6 border-2 border-secondary-foreground/20">
              <div className="w-12 h-12 bg-secondary-foreground/20 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="text-sm font-bold uppercase tracking-wide text-secondary-foreground/60 mb-1">Standort</div>
              <div className="font-display text-xl">ZÜRICH, SCHWEIZ</div>
            </div>

            <div className="p-6 border-2 border-secondary-foreground/20">
              <div className="w-12 h-12 bg-secondary-foreground/20 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="text-sm font-bold uppercase tracking-wide text-secondary-foreground/60 mb-1">Antwortzeit</div>
              <div className="font-display text-xl">INNERHALB 24H</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
