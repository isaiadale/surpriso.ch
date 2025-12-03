import { Button } from "@/components/ui/button";
import { ArrowDown, Gift } from "lucide-react";
import { Confetti } from "@/components/Confetti";

export const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("produkte");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/20">
      {/* Confetti Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Confetti />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-wide mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
            <Gift className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Surprise-Geschenkboxen</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up">
            Überraschen Sie mit{" "}
            <span className="text-primary">Surpriso</span>{" "}
            Geschenkboxen.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up delay-100">
            Suchen Sie ein passendes Dankeschön für Ihr Team oder ein Weihnachtsgeschenk für Ihre Kund:innen? 
            Überraschen Sie mit unseren Surpriso-Boxen oder individuell zusammengestellten Geschenkboxen für jeden Anlass.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
            <Button variant="hero" size="xl" onClick={scrollToProducts}>
              <Gift className="h-5 w-5 mr-2" />
              Jetzt bestellen
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 animate-fade-in-up delay-300">
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Swiss Made</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-foreground">♥</div>
              <div className="text-sm text-muted-foreground">Handverlesen</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-foreground">25+</div>
              <div className="text-sm text-muted-foreground">Für Firmen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};
