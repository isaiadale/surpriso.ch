import type { CartItem } from "@/lib/products";

export async function createStripeCheckoutSession(items: CartItem[]): Promise<string> {
  const successUrl = `${window.location.origin}/bestellung-erfolgreich?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${window.location.origin}/bestellung-abgebrochen`;

  const { supabase } = await import("@/integrations/supabase/client");
  const { data, error } = await supabase.functions.invoke("create-checkout-session", {
    body: { items, successUrl, cancelUrl },
  });

  if (error) throw new Error(error.message);
  if (!data?.url) throw new Error("Kein Checkout-URL erhalten");

  return data.url as string;
}
