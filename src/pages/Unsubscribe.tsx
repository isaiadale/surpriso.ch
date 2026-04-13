import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WEBHOOK_URL = import.meta.env.VITE_N8N_UNSUBSCRIBE_WEBHOOK as string;

const REASONS = [
  "Ich erhalte zu viele E-Mails",
  "Die E-Mails sind nicht relevant für mich",
  "Ich nutze diese E-Mail-Adresse nicht mehr",
  "Anderer Grund",
];

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const customerId = searchParams.get("id") ?? "";

  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason) {
      toast.error("Bitte wähle einen Grund aus.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId, reason }),
      });
      if (!response.ok) {
        throw new Error("Webhook-Fehler");
      }
      setSuccess(true);
    } catch {
      toast.error(
        "Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Abmelden | Surpriso"
        description="Von der Surpriso Mailingliste abmelden."
        canonicalUrl="https://surpriso.ch/unsubscribe"
      />
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="container-wide mx-auto px-4 md:px-8 max-w-lg">
          {!customerId ? (
            <div className="text-center space-y-4">
              <h1 className="font-display text-3xl font-bold text-foreground">
                Ungültiger Link
              </h1>
              <p className="text-muted-foreground">
                Dieser Link ist leider ungültig. Bitte verwende den Link aus
                deiner E-Mail.
              </p>
            </div>
          ) : success ? (
            <div className="text-center space-y-4">
              <h1 className="font-display text-3xl font-bold text-foreground">
                Erfolgreich abgemeldet
              </h1>
              <p className="text-muted-foreground">
                Du hast dich erfolgreich von unserem Newsletter abgemeldet. Wir
                werden dir keine weiteren E-Mails senden.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                  Von der Mailingliste abmelden
                </h1>
                <p className="text-muted-foreground">
                  Es tut uns leid, dich gehen zu sehen. Bitte teile uns mit,
                  warum du dich abmelden möchtest.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Grund für die Abmeldung
                  </label>
                  <Select onValueChange={setReason} value={reason}>
                    <SelectTrigger>
                      <SelectValue placeholder="Grund auswählen…" />
                    </SelectTrigger>
                    <SelectContent>
                      {REASONS.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={loading || !reason}
                  className="w-full"
                >
                  {loading ? "Wird verarbeitet…" : "Abmelden"}
                </Button>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
