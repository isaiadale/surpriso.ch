import { Button } from "@/components/ui/button";
import { FileText, Building2 } from "lucide-react";
import customBoxImage from "@/assets/custom-box.jpg";

export const CustomBoxCard = () => {
  const scrollToForm = () => {
    const element = document.getElementById("individuell");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden border-2 border-primary/20 card-hover relative">
      {/* Badge */}
      <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
        <Building2 className="h-3 w-3" />
        Für Firmen
      </div>

      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={customBoxImage}
          alt="Individuelle Surprisebox"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          Individuelle Surpriso-Box
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          Ab 25 Stück für Firmen und Events. Wir erstellen kostenlos eine massgeschneiderte Offerte nach Ihren Wünschen.
        </p>
        
        <div className="flex items-center justify-between">
          <div className="font-display">
            <span className="text-lg text-muted-foreground">ab </span>
            <span className="text-2xl font-bold text-primary">CHF 35</span>
          </div>
          
          <Button onClick={scrollToForm} variant="gold">
            <FileText className="h-4 w-4 mr-2" />
            Offerte anfordern
          </Button>
        </div>
      </div>
    </div>
  );
};
