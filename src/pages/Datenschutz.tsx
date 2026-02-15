import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Datenschutz | Surpriso"
        description="Datenschutzerklärung der Surpriso-Box Webseite nach Art. 19 nDSG."
        canonicalUrl="https://surpriso-box.ch/datenschutz"
      />
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="container-wide mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">
            Datenschutz
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <p className="font-medium text-foreground/80">
              Datenschutzerklärung nach Art. 19 nDSG
            </p>

            <section>
              <h2 className="font-display font-semibold text-foreground mb-1">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenbearbeitungen auf dieser Webseite
                ist:
                <br />
                Isaia D'Alessandro, 9014 St.Gallen, Schweiz, E-Mail:
                isaia@surpriso.ch
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-foreground mb-1">
                2. Zweck der Datenbearbeitung
              </h2>
              <p>
                Wir bearbeiten Personendaten zur Bereitstellung der Webseite
                (Server-Logfiles für die Sicherheit) und zur Kommunikation mit
                Projektbeteiligten.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-foreground mb-1">
                3. Empfänger der Daten
              </h2>
              <p>
                Innerhalb unseres Betriebs erhalten nur berechtigte Personen
                Zugriff auf Ihre Daten.
                <br />
                Wir geben Daten zudem an IT-Dienstleister (Hosting, Support)
                weiter, sofern dies für die Zweckerfüllung notwendig ist.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-foreground mb-1">
                4. Bekanntgabe ins Ausland
              </h2>
              <p>
                Eine Übermittlung von Daten erfolgt primär innerhalb der
                Schweiz. Sollten Daten in Staaten ohne angemessenes
                Datenschutzniveau (z. B. USA) fliessen, stellen wir den Schutz
                durch anerkannte Standarddatenschutzklauseln sicher.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-foreground mb-1">
                5. Ihre Rechte
              </h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung sowie
                auf Herausgabe Ihrer Daten. Kontaktieren Sie uns hierzu unter
                der oben genannten E-Mail-Adresse.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
