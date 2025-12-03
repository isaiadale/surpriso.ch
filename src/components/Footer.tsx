import logoType from "@/assets/logo-type.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="/" className="flex items-center">
            <img src={logoType} alt="Surpriso" className="h-8 w-auto brightness-0 invert" />
          </a>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#produkte" className="text-background/70 hover:text-background transition-colors">
              Produkte
            </a>
            <a href="#vorteile" className="text-background/70 hover:text-background transition-colors">
              Vorteile
            </a>
            <a href="#warum-wir" className="text-background/70 hover:text-background transition-colors">
              Warum wir?
            </a>
            <a href="#faq" className="text-background/70 hover:text-background transition-colors">
              FAQ
            </a>
            <a href="#kontakt" className="text-background/70 hover:text-background transition-colors">
              Kontakt
            </a>
          </nav>

          <p className="text-background/50 text-sm">
            © {currentYear} Surpriso. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
