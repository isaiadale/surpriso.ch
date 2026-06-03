import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14?target=deno";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface CartItem {
  productId: string;
  title: string;
  price: { amount: string; currencyCode: string };
  image: string;
  quantity: number;
}

interface RequestBody {
  items: CartItem[];
  successUrl: string;
  cancelUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      console.error("STRIPE_SECRET_KEY not configured");
      return new Response(JSON.stringify({ error: "Payment service not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2024-06-20" });

    const body: RequestBody = await req.json();
    const { items, successUrl, cancelUrl } = body;

    if (!items || items.length === 0) {
      return new Response(JSON.stringify({ error: "No items provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!successUrl || !cancelUrl) {
      return new Response(JSON.stringify({ error: "Missing success or cancel URL" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const lineItems = items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: item.price.currencyCode.toLowerCase(),
        unit_amount: Math.round(parseFloat(item.price.amount) * 100),
        product_data: {
          name: item.title,
          ...(item.image ? { images: [item.image] } : {}),
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      currency: items[0].price.currencyCode.toLowerCase(),
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["CH", "DE", "AT"],
      },
      locale: "de",
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "An error occurred";
    console.error("Error creating checkout session:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
