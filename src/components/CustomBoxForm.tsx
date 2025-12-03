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
    company: "", name: "", email: "", phone: "",
    quantity: "", budget: "", wishes: "", timing: "", hasAddresses: "no",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Anfrage erfolgreich gesendet!", { position: "top-center" });
  };

  if (isSubmitted) {
    return (
      <section id="individuell" className="section-padding bg-muted">
        <div className="container-narrow mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="w-14 h-14 bg-primary flex items-center justify-center mx-auto mb-4">
              <Check className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl mb-2">VIELEN DANK!</h3>
            <p className="text-muted-foreground text-sm">
              Wir melden uns innerhalb von 24 Stunden mit einer massgeschneiderten Offerte.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="individuell" className="section-padding bg-muted">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="h-3 w-3" />
              Für Firmen & Events
            </div>
            <h2 className="section-title text-foreground mb-4">
              INDIVIDUELLE <span className="text-primary text-glow">BOXEN</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Ab 25 Stück erhältlich. Kostenlose Offerte nach Ihren Wünschen.
            </p>
            
            <div className="space-y-2">
              {["Eigenes Branding möglich", "Individuelle Inhalte", "Schweizweiter Versand", "Persönliche Beratung"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl mb-4">OFFERTE ANFORDERN</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="company" className="text-xs uppercase tracking-wide">Firma *</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Ihre Firma" className="h-9 border-border bg-background text-sm" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs uppercase tracking-wide">Ansprechperson *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Vor- und Nachname" className="h-9 border-border bg-background text-sm" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs uppercase tracking-wide">E-Mail *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="ihre@email.ch" className="h-9 border-border bg-background text-sm" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-xs uppercase tracking-wide">Telefon</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+41 XX XXX XX XX" className="h-9 border-border bg-background text-sm" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="quantity" className="text-xs uppercase tracking-wide">Anzahl Pakete *</Label>
                  <Input id="quantity" name="quantity" type="number" min="25" value={formData.quantity} onChange={handleChange} required placeholder="Min. 25" className="h-9 border-border bg-background text-sm" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="budget" className="text-xs uppercase tracking-wide">Budget / Paket *</Label>
                  <Input id="budget" name="budget" value={formData.budget} onChange={handleChange} required placeholder="z.B. 35-50 CHF" className="h-9 border-border bg-background text-sm" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="timing" className="text-xs uppercase tracking-wide">Liefertermin *</Label>
                  <Input id="timing" name="timing" value={formData.timing} onChange={handleChange} required placeholder="z.B. Mitte Dezember" className="h-9 border-border bg-background text-sm" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wide">Adressliste vorhanden?</Label>
                  <RadioGroup value={formData.hasAddresses} onValueChange={(value) => setFormData((prev) => ({ ...prev, hasAddresses: value }))} className="flex gap-4">
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="yes" id="addresses-yes" />
                      <Label htmlFor="addresses-yes" className="font-normal text-sm">Ja</Label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="no" id="addresses-no" />
                      <Label htmlFor="addresses-no" className="font-normal text-sm">Nein</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <Label htmlFor="wishes" className="text-xs uppercase tracking-wide">Wünsche zum Inhalt</Label>
                  <Textarea id="wishes" name="wishes" value={formData.wishes} onChange={handleChange} placeholder="Ihre Vorstellungen..." rows={3} className="border-border bg-background resize-none text-sm" />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full uppercase font-bold tracking-wider" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" />WIRD GESENDET...</>
                ) : (
                  <><Send className="h-4 w-4 mr-2" />OFFERTE ANFORDERN</>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
