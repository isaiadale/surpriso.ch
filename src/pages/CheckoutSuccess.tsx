import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";

const CheckoutSuccess = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>

        <div className="space-y-2">
          <h1 className="font-display text-3xl font-semibold text-foreground">
            Vielen Dank für deine Bestellung!
          </h1>
          <p className="text-muted-foreground">
            Deine Zahlung war erfolgreich. Du erhältst in Kürze eine Bestätigungs-E-Mail.
          </p>
        </div>

        <Button asChild size="lg" variant="hero">
          <Link to="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
