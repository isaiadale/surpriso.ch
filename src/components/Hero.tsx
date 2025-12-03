import { Button } from "@/components/ui/button";
import { ArrowDown, Gift } from "lucide-react";
import heroImage from "@/assets/hero-gift-boxes.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("produkte");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCustom = () => {
    const element = document.getElementById("individuell");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Geschenkboxen"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>

      <div className="relative z-10 container-wide mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-sm mb-4 animate-fade-in">
            <Gift className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Schweizer Qualität</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-none mb-4 animate-fade-in-up">
            ÜBERRASCHEN SIE MIT{" "}
            <span className="text-primary text-glow">EINZIGARTIGEN</span>{" "}
            GESCHENKBOXEN
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl animate-fade-in-up delay-100">
            Suchen Sie ein passendes Dankeschön für Ihr Team oder ein Weihnachtsgeschenk für Ihre Kund:innen? 
            Überraschen Sie mit unseren Surpriseboxen.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-200">
            <Button variant="default" size="lg" onClick={scrollToProducts} className="font-bold uppercase tracking-wider">
              <Gift className="h-5 w-5 mr-2" />
              Jetzt bestellen
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToCustom} className="font-bold uppercase tracking-wider border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
              Offerte anfordern
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6 animate-fade-in-up delay-300">
            <div className="text-center">
              <div className="text-xl font-display text-primary">100%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Swiss Made</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-xl font-display text-primary">24H</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Express</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-xl font-display text-primary">♥</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Handverlesen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-primary"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
};
