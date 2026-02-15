import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Impressum | Surpriso"
        description="Impressum der Surpriso-Box Webseite. Angaben gemäss Schweizer Recht."
        canonicalUrl="https://surpriso-box.ch/impressum"
      />
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="container-wide mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">
            Impressum
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="font-display font-semibold text-foreground mb-1">
                Angaben gemäss Schweizer Recht
              </h2>
              <p>
                Isaia D'Alessandro
                <br />
                9014 St.Gallen
                <br />
                Schweiz
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-foreground mb-1">
                Kontakt
              </h2>
              <p>E-Mail: isaia@surpriso.ch</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-foreground mb-1">
                Haftungsausschluss
              </h2>
              <p>
                Der Autor übernimmt keine Gewähr für die Richtigkeit,
                Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der
                Informationen auf dieser Webseite. Haftungsansprüche gegen den
                Autor wegen Schäden materieller oder immaterieller Art, die aus
                dem Zugriff oder der Nutzung bzw. Nichtnutzung der
                veröffentlichten Informationen entstanden sind, werden
                ausgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-foreground mb-1">
                Urheberrecht
              </h2>
              <p>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
                oder anderen Dateien auf dieser Webseite gehören ausschliesslich
                Isaia D'Alessandro oder den speziell genannten Rechteinhabern.
                Für die Reproduktion jeglicher Elemente ist die schriftliche
                Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
