import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "@/components/CartDrawer";
import logo from "@/assets/logo.png";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Surpriso" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("produkte")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Produkte
            </button>
            <button
              onClick={() => scrollToSection("vorteile")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Vorteile
            </button>
            <button
              onClick={() => scrollToSection("warum-wir")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Warum wir?
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
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
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("produkte")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Produkte
              </button>
              <button
                onClick={() => scrollToSection("vorteile")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Vorteile
              </button>
              <button
                onClick={() => scrollToSection("warum-wir")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Warum wir?
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Kontakt
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
