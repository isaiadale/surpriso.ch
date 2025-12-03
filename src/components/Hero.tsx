import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Gift } from "lucide-react";
import { Confetti } from "@/components/Confetti";
import logoType from "@/assets/logo-type.png";

export const Hero = () => {
  const [isWobbling, setIsWobbling] = useState(false);

  const scrollToProducts = () => {
    const element = document.getElementById("produkte");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSurprisoHover = () => {
    if (!isWobbling) {
      setIsWobbling(true);
      setTimeout(() => setIsWobbling(false), 600);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/20">
      {/* Confetti Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Confetti />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-wide mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-slide-down delay-0">
            <Gift className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Surprise-Geschenkboxen</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-slide-down delay-100">
            Überraschen Sie
            <br />
            mit{" "}
            <img 
              src={logoType}
              alt="Surpriso"
              className={`inline-block h-[72px] md:h-24 lg:h-[120px] cursor-pointer transition-transform hover:scale-105 align-middle relative z-50 -translate-y-5 ${isWobbling ? 'animate-wobble' : ''}`}
              onMouseEnter={handleSurprisoHover}
            />{" "}
            Geschenkboxen.
          </h1>

          {/* Christmas Badge */}
          <div className="absolute top-24 right-4 md:top-32 md:right-20 animate-float">
            <div className="bg-primary text-primary-foreground rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-default">
              <div className="text-center leading-tight">
                <span className="text-xs md:text-sm font-medium">Merry</span>
                <br />
                <span className="text-base md:text-lg font-display font-bold">Christmas</span>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-down delay-200">
            Suchen Sie ein passendes Dankeschön für Ihr Team oder ein Weihnachtsgeschenk für Ihre Kund:innen? 
            Überraschen Sie mit unseren Surpriso-Boxen oder individuell zusammengestellten Geschenkboxen für jeden Anlass.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-down delay-300">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToProducts}
              className="btn-gradient-sweep group"
            >
              <Gift className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
              Jetzt bestellen
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 animate-slide-down delay-400">
            <div className="text-center group cursor-default">
              <div className="text-2xl font-display font-bold text-foreground transition-transform group-hover:scale-110">100%</div>
              <div className="text-sm text-muted-foreground">Swiss Made</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center group cursor-default">
              <div className="text-2xl font-display font-bold text-foreground transition-transform group-hover:scale-125 group-hover:text-primary">♥</div>
              <div className="text-sm text-muted-foreground">Handverlesen</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center group cursor-default">
              <div className="text-2xl font-display font-bold text-foreground transition-transform group-hover:scale-110">25+</div>
              <div className="text-sm text-muted-foreground">Für Firmen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors animate-slide-down delay-700"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};
