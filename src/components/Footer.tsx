import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-2xl">
            SURPRISE<span className="text-primary">BOX</span>
          </span>

          <nav className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider">
            {["produkte", "vorteile", "individuell", "faq", "kontakt"].map((section) => (
              <a key={section} href={`#${section}`} className="text-background/60 hover:text-primary transition-colors">
                {section}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-background/40">
          <p>© {new Date().getFullYear()} Surprisebox. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
