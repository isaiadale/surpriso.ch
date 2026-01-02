import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  company: string;
  name: string;
  email: string;
  phone: string;
  quantity: string;
  budget: string;
  wishes: string;
  timing: string;
  hasAddresses: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: QuoteRequest = await req.json();
    console.log("Received quote request:", data);

    const emailHtml = `
      <h1>Neue Offerteanfrage für individuelle Surpriso-Box</h1>
      
      <h2>Kontaktdaten</h2>
      <ul>
        <li><strong>Firma:</strong> ${data.company}</li>
        <li><strong>Ansprechperson:</strong> ${data.name}</li>
        <li><strong>E-Mail:</strong> ${data.email}</li>
        <li><strong>Telefon:</strong> ${data.phone || "Nicht angegeben"}</li>
      </ul>
      
      <h2>Anfrage-Details</h2>
      <ul>
        <li><strong>Anzahl Pakete:</strong> ${data.quantity}</li>
        <li><strong>Budget pro Paket:</strong> CHF ${data.budget}</li>
        <li><strong>Gewünschter Liefertermin:</strong> ${data.timing}</li>
        <li><strong>Adressliste vorhanden:</strong> ${data.hasAddresses === "yes" ? "Ja" : "Nein"}</li>
      </ul>
      
      <h2>Wünsche zum Inhalt</h2>
      <p>${data.wishes || "Keine speziellen Wünsche angegeben"}</p>
      
      <hr>
      <p><em>Diese Anfrage wurde über das Surpriso-Box Formular gesendet.</em></p>
    `;

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Surpriso-Box <onboarding@resend.dev>",
        to: ["nois.automate@gmail.com"],
        subject: `Neue Offerteanfrage von ${data.company} - ${data.quantity} Pakete`,
        html: emailHtml,
        reply_to: data.email,
      }),
    });

    const emailResponse = await response.json();
    console.log("Email response:", emailResponse);

    if (!response.ok) {
      throw new Error(emailResponse.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
