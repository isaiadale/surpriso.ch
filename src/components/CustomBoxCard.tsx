import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import customBoxImage from "@/assets/custom-box.jpg";

export const CustomBoxCard = () => {
  const scrollToForm = () => {
    const element = document.getElementById("individuell");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="group bg-secondary text-secondary-foreground overflow-hidden card-hover">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={customBoxImage}
          alt="Individuelle Surprisebox"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-2 uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            AB 25 STÜCK
          </div>
          <h3 className="font-display text-3xl md:text-4xl leading-tight uppercase">
            INDIVIDUELLE SURPRISEBOX
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-display text-3xl text-primary">AB CHF 35</span>
          <span className="text-secondary-foreground/60">/ Stück</span>
        </div>

        <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
          Massgeschneidert für Ihr Unternehmen. Sie bestimmen Inhalt, Branding und Budget – wir kümmern uns um den Rest.
        </p>

        <Button 
          variant="default" 
          size="lg" 
          className="w-full"
          onClick={scrollToForm}
        >
          OFFERTE ANFORDERN
          <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};
