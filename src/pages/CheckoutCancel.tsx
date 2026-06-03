import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CheckoutCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <XCircle className="h-20 w-20 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <h1 className="font-display text-3xl font-semibold text-foreground">
            Zahlung abgebrochen
          </h1>
          <p className="text-muted-foreground">
            Deine Bestellung wurde nicht abgeschlossen. Dein Warenkorb ist noch gespeichert.
          </p>
        </div>

        <Button asChild size="lg" variant="hero">
          <Link to="/">Zurück zum Shop</Link>
        </Button>
      </div>
    </div>
  );
};

export default CheckoutCancel;
