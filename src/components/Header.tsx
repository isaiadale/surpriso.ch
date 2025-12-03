import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "@/components/CartDrawer";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden">
        <div className="marquee flex whitespace-nowrap">
          <span className="mx-8 text-sm font-bold tracking-wider">SCHWEIZER QUALITÄT</span>
          <span className="mx-8 text-sm">•</span>
          <span className="mx-8 text-sm font-bold tracking-wider">24H EXPRESS VERSAND</span>
          <span className="mx-8 text-sm">•</span>
          <span className="mx-8 text-sm font-bold tracking-wider">HANDVERLESEN MIT LIEBE</span>
          <span className="mx-8 text-sm">•</span>
          <span className="mx-8 text-sm font-bold tracking-wider">SCHWEIZER QUALITÄT</span>
          <span className="mx-8 text-sm">•</span>
          <span className="mx-8 text-sm font-bold tracking-wider">24H EXPRESS VERSAND</span>
          <span className="mx-8 text-sm">•</span>
          <span className="mx-8 text-sm font-bold tracking-wider">HANDVERLESEN MIT LIEBE</span>
          <span className="mx-8 text-sm">•</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-border">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <span className="font-display text-2xl md:text-3xl tracking-tight text-foreground">
                SURPRISE<span className="text-primary">BOX</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("produkte")}
                className="font-bold text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                Produkte
              </button>
              <button
                onClick={() => scrollToSection("vorteile")}
                className="font-bold text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                Vorteile
              </button>
              <button
                onClick={() => scrollToSection("warum-wir")}
                className="font-bold text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                Warum wir?
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="font-bold text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="font-bold text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                Kontakt
              </button>
            </nav>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              <CartDrawer />
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-foreground"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-6 border-t-2 border-border animate-fade-in bg-background">
              <div className="flex flex-col gap-1">
                {["produkte", "vorteile", "warum-wir", "faq", "kontakt"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left font-display text-3xl py-3 hover:text-primary transition-colors uppercase"
                  >
                    {section === "warum-wir" ? "Warum wir?" : section}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};
