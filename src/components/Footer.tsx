import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <span className="font-display text-4xl tracking-tight">
              SURPRISE<span className="text-primary">BOX</span>
            </span>
            <p className="mt-4 text-background/60 max-w-md text-lg">
              Schweizer Geschenkboxen, handverlesen mit Liebe. 
              Für Unternehmen und Privatpersonen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-4">NAVIGATION</h4>
            <ul className="space-y-3">
              <li>
                <a href="#produkte" className="text-background/60 hover:text-primary transition-colors">
                  Produkte
                </a>
              </li>
              <li>
                <a href="#vorteile" className="text-background/60 hover:text-primary transition-colors">
                  Vorteile
                </a>
              </li>
              <li>
                <a href="#individuell" className="text-background/60 hover:text-primary transition-colors">
                  Offerte anfordern
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/60 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-background/60 hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xl mb-4">SOCIAL</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {currentYear} Surprisebox. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-background/40">
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
