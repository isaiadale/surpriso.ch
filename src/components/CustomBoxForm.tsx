import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Send, Building2, Loader2, Check } from "lucide-react";
import { toast } from "sonner";

export const CustomBoxForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    quantity: "",
    budget: "",
    wishes: "",
    timing: "",
    hasAddresses: "no",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Anfrage erfolgreich gesendet!", {
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      position: "top-center",
    });
  };

  if (isSubmitted) {
    return (
      <section id="individuell" className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Vielen Dank für Ihre Anfrage!
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden 
              mit einer massgeschneiderten Offerte bei Ihnen.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="individuell" className="section-padding bg-secondary/50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Building2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Für Firmen & Events</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Individuelle Surprisebox
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ab 25 Stück erhältlich. Wir erstellen kostenlos eine massgeschneiderte Offerte nach Ihren Wünschen.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">Firma *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Ihre Firma"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Ansprechperson *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Vor- und Nachname"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-Mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ihre@email.ch"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+41 XX XXX XX XX"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Anzahl Pakete *</Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                min="25"
                value={formData.quantity}
                onChange={handleChange}
                required
                placeholder="Mindestens 25"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget pro Paket (CHF) *</Label>
              <Input
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                placeholder="z.B. 35-50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timing">Gewünschter Liefertermin *</Label>
              <Input
                id="timing"
                name="timing"
                value={formData.timing}
                onChange={handleChange}
                required
                placeholder="z.B. Mitte Dezember"
              />
            </div>

            <div className="space-y-3">
              <Label>Adressliste vorhanden?</Label>
              <RadioGroup
                value={formData.hasAddresses}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, hasAddresses: value }))}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="addresses-yes" />
                  <Label htmlFor="addresses-yes" className="font-normal">Ja</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="addresses-no" />
                  <Label htmlFor="addresses-no" className="font-normal">Nein</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="wishes">Wünsche zum Inhalt</Label>
              <Textarea
                id="wishes"
                name="wishes"
                value={formData.wishes}
                onChange={handleChange}
                placeholder="Beschreiben Sie Ihre Vorstellungen zum Inhalt der Boxen..."
                rows={4}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button type="submit" variant="hero" size="xl" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Offerte anfordern
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
