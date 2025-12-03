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
      <section id="individuell" className="section-padding bg-muted">
        <div className="container-narrow mx-auto">
          <div className="bg-card border-2 border-border p-12 text-center">
            <div className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="font-display text-4xl mb-4">VIELEN DANK!</h3>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden 
              mit einer massgeschneiderten Offerte bei Ihnen.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="individuell" className="section-padding bg-muted">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider mb-6">
              <Building2 className="h-4 w-4" />
              Für Firmen & Events
            </div>
            <h2 className="section-title text-foreground mb-6">
              INDIVIDUELLE
              <br />
              <span className="text-primary">BOXEN</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Ab 25 Stück erhältlich. Wir erstellen kostenlos eine massgeschneiderte 
              Offerte nach Ihren Wünschen. Von der Idee bis zur Lieferung – alles aus einer Hand.
            </p>
            
            <div className="space-y-4">
              {["Eigenes Branding möglich", "Individuelle Inhalte", "Schweizweiter Versand", "Persönliche Beratung"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border-2 border-border p-8 md:p-10">
            <h3 className="font-display text-3xl mb-6">OFFERTE ANFORDERN</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-bold uppercase tracking-wide">Firma *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Ihre Firma"
                    className="h-12 border-2 border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wide">Ansprechperson *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Vor- und Nachname"
                    className="h-12 border-2 border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wide">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ihre@email.ch"
                    className="h-12 border-2 border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-bold uppercase tracking-wide">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+41 XX XXX XX XX"
                    className="h-12 border-2 border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-sm font-bold uppercase tracking-wide">Anzahl Pakete *</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="25"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    placeholder="Mindestens 25"
                    className="h-12 border-2 border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-sm font-bold uppercase tracking-wide">Budget pro Paket (CHF) *</Label>
                  <Input
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    placeholder="z.B. 35-50"
                    className="h-12 border-2 border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timing" className="text-sm font-bold uppercase tracking-wide">Gewünschter Liefertermin *</Label>
                  <Input
                    id="timing"
                    name="timing"
                    value={formData.timing}
                    onChange={handleChange}
                    required
                    placeholder="z.B. Mitte Dezember"
                    className="h-12 border-2 border-border bg-background"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-bold uppercase tracking-wide">Adressliste vorhanden?</Label>
                  <RadioGroup
                    value={formData.hasAddresses}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, hasAddresses: value }))}
                    className="flex gap-6"
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
                  <Label htmlFor="wishes" className="text-sm font-bold uppercase tracking-wide">Wünsche zum Inhalt</Label>
                  <Textarea
                    id="wishes"
                    name="wishes"
                    value={formData.wishes}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihre Vorstellungen zum Inhalt der Boxen..."
                    rows={4}
                    className="border-2 border-border bg-background resize-none"
                  />
                </div>
              </div>

              <Button type="submit" variant="default" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    WIRD GESENDET...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    OFFERTE ANFORDERN
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
