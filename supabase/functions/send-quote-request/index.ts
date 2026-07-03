import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Rate limiting: track requests per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

// CORS (public endpoint)
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Input validation schema
const quoteRequestSchema = z.object({
  company: z.string().min(1, "Company is required").max(100, "Company too long"),
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email format").max(255, "Email too long"),
  phone: z.string().max(30, "Phone too long").optional().or(z.literal("")),
  quantity: z.string().min(1, "Quantity is required").max(20, "Quantity too long"),
  budget: z.string().min(1, "Budget is required").max(50, "Budget too long"),
  wishes: z.string().max(2000, "Wishes text too long").optional().or(z.literal("")),
  timing: z.string().min(1, "Timing is required").max(100, "Timing too long"),
  hasAddresses: z.enum(["yes", "no"]).default("no"),
});

type QuoteRequest = z.infer<typeof quoteRequestSchema>;

// HTML escape function to prevent XSS
const escapeHtml = (text: string): string => {
  const htmlEscapes: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char] || char);
};

// Rate limiting check
const checkRateLimit = (ip: string): { allowed: boolean; remaining: number } => {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
};

// Clean up old rate limit entries periodically
const cleanupRateLimitMap = () => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";

    // Check rate limit
    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { 
          status: 429, 
          headers: { 
            "Content-Type": "application/json",
            "Retry-After": "3600",
            ...corsHeaders 
          } 
        }
      );
    }

    // Periodically clean up rate limit map
    if (Math.random() < 0.1) {
      cleanupRateLimitMap();
    }

    // Parse and validate input
    const rawData = await req.json();
    console.log("Received quote request from IP:", clientIp);

    const validationResult = quoteRequestSchema.safeParse(rawData);
    if (!validationResult.success) {
      console.log("Validation failed:", validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: "Validation failed", 
          details: validationResult.error.errors.map(e => ({
            field: e.path.join("."),
            message: e.message
          }))
        }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const data: QuoteRequest = validationResult.data;

    // Persist the request to the database (source of truth). Uses the
    // service_role key, which bypasses RLS. Failure is logged but non-fatal
    // so a working email can still capture the lead.
    let insertedId: string | null = null;
    try {
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
      );
      const { data: inserted, error: insertError } = await supabase
        .from("quote_requests")
        .insert({
          company: data.company,
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          quantity: data.quantity,
          budget: data.budget,
          wishes: data.wishes || null,
          timing: data.timing,
          has_addresses: data.hasAddresses === "yes",
          client_ip: clientIp,
        })
        .select("id")
        .single();

      if (insertError) {
        console.error("Failed to store quote request:", insertError);
      } else {
        insertedId = inserted?.id ?? null;
        console.log("Stored quote request:", insertedId);
      }
    } catch (dbError) {
      console.error("Database insert threw:", dbError);
    }

    // Escape all user inputs for HTML
    const safeData = {
      company: escapeHtml(data.company),
      name: escapeHtml(data.name),
      email: escapeHtml(data.email),
      phone: escapeHtml(data.phone || ""),
      quantity: escapeHtml(data.quantity),
      budget: escapeHtml(data.budget),
      wishes: escapeHtml(data.wishes || ""),
      timing: escapeHtml(data.timing),
      hasAddresses: data.hasAddresses,
    };

    const emailHtml = `
      <h1>Neue Offerteanfrage für individuelle Surpriso-Box</h1>
      
      <h2>Kontaktdaten</h2>
      <ul>
        <li><strong>Firma:</strong> ${safeData.company}</li>
        <li><strong>Ansprechperson:</strong> ${safeData.name}</li>
        <li><strong>E-Mail:</strong> ${safeData.email}</li>
        <li><strong>Telefon:</strong> ${safeData.phone || "Nicht angegeben"}</li>
      </ul>
      
      <h2>Anfrage-Details</h2>
      <ul>
        <li><strong>Anzahl Pakete:</strong> ${safeData.quantity}</li>
        <li><strong>Budget pro Paket:</strong> CHF ${safeData.budget}</li>
        <li><strong>Gewünschter Liefertermin:</strong> ${safeData.timing}</li>
        <li><strong>Adressliste vorhanden:</strong> ${safeData.hasAddresses === "yes" ? "Ja" : "Nein"}</li>
      </ul>
      
      <h2>Wünsche zum Inhalt</h2>
      <p>${safeData.wishes || "Keine speziellen Wünsche angegeben"}</p>
      
      <hr>
      <p><em>Diese Anfrage wurde über das Surpriso-Box Formular gesendet.</em></p>
      <p><small>Client IP: ${clientIp}</small></p>
    `;

    // Send the notification email (additional channel). Non-fatal: if the DB
    // insert already succeeded, we still report success to the client.
    let emailSent = false;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured — skipping email");
    } else {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Surpriso-Box <info@surpriso.ch>",
            to: ["info@surpriso.ch"],
            subject: `Neue Offerteanfrage von ${safeData.company} - ${safeData.quantity} Pakete`,
            html: emailHtml,
            reply_to: data.email, // Use original email for reply-to
          }),
        });

        const emailResponse = await response.json();
        console.log("Email response:", emailResponse);

        if (!response.ok) {
          console.error("Resend API error:", emailResponse);
        } else {
          emailSent = true;
        }
      } catch (emailError) {
        console.error("Email send threw:", emailError);
      }
    }

    // Mark the stored request as notified once the email went out.
    if (emailSent && insertedId) {
      try {
        const supabase = createClient(
          Deno.env.get("SUPABASE_URL")!,
          Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
        );
        await supabase
          .from("quote_requests")
          .update({ email_sent: true })
          .eq("id", insertedId);
      } catch (updateError) {
        console.error("Failed to update email_sent flag:", updateError);
      }
    }

    // Only fail if the lead was neither stored nor emailed.
    if (!insertedId && !emailSent) {
      return new Response(
        JSON.stringify({ error: "Could not process your request. Please try again later." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-request function:", error);
    return new Response(
      JSON.stringify({
        error: error?.message ?? "An error occurred processing your request",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
