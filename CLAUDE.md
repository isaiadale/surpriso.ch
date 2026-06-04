# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Surpriso is a Swiss e-commerce site for premium gift boxes built with React, TypeScript, Vite, and Tailwind CSS. It's a single-page application where all content sections are on the landing page (`/src/pages/Index.tsx`) with scroll navigation. Originally scaffolded with Lovable.

## Commands

```bash
npm run dev      # Start dev server on port 8080
npm run build    # Production build
npm run build:dev # Development build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

No test framework is configured.

## Architecture

### Tech Stack
- **Vite + React 18 + TypeScript** - Core framework (SWC plugin for fast refresh)
- **Tailwind CSS + shadcn/ui** - Styling with Radix-based components in `/src/components/ui/`
- **Zustand** - Cart state management with localStorage persistence (`surprisebox-cart` key)
- **React Query** - Available but products are now static; no longer used for data fetching
- **React Hook Form + Zod** - Form validation

### Key Integrations

**Stripe Checkout** (`/src/lib/stripe.ts`)
- Calls the Supabase edge function `create-checkout-session` with cart items
- The edge function creates a Stripe Checkout Session and returns a URL
- Checkout redirects to Stripe's hosted page; on return, routes are `/bestellung-erfolgreich` (clears cart) and `/bestellung-abgebrochen`

**Supabase** (`/src/integrations/supabase/`)
- Client initialized from env vars: `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`
- Edge function `create-checkout-session` (`/supabase/functions/`) — creates Stripe sessions (Deno runtime, requires `STRIPE_SECRET_KEY` env var on Supabase)
- Edge function `send-quote-request` — handles custom box form submissions; uses Resend API (`RESEND_API_KEY` env var on Supabase) to email quotes to info@surpriso.ch

### Products
Products are defined statically in `/src/lib/products.ts` (no external API). Each product has `id`, `title`, `description`, `price` (`amount`/`currencyCode`), and `image`. Adding a new product means editing this file and adding an image to `/src/assets/`.

### State Management (Zustand)
Two stores, both persisted to localStorage:
- `cartStore.ts` — cart items, checkout flow; `createCheckout()` calls Stripe via Supabase (key: `surprisebox-cart`)
- `cookieConsentStore.ts` — cookie consent preferences (key: `surpriso-cookie-consent`)

### Data Flow
1. Products loaded from static `PRODUCTS` array in `/src/lib/products.ts` → displayed in ProductsSection
2. Cart managed by Zustand store → persisted to localStorage
3. Checkout: `createCheckout()` → Supabase edge function → Stripe Session URL → `window.location.href` redirect
4. Custom box requests → Supabase edge function → Resend API → email

### Routing & Navigation
`App.tsx` uses React Router with routes: `/` (Index), `/impressum`, `/datenschutz`, `/unsubscribe`, `/bestellung-erfolgreich`, `/bestellung-abgebrochen`, `*` (NotFound). New routes must be added above the catch-all `*` route.

`CookieConsentManager` is rendered inside `<QueryClientProvider>/<TooltipProvider>` but after `<BrowserRouter>` closes in `App.tsx`, so it appears on all pages but has no React Router context — don't use router hooks inside it.

Navigation on the landing page uses `scrollToSection(id)` with `document.getElementById`. Section IDs: `produkte`, `vorteile`, `warum-wir`, `individuelle-box`, `faq`, `kontakt`.

### Key Components
- `CartDrawer` — slide-out cart panel (shadcn `Sheet`), rendered inside `Header`. Calls `createCheckout()` then redirects to `window.location.href` with Stripe URL.
- `CookieConsent/CookieConsentManager` — auto-shows banner 1s after load if no valid consent; switches between `CookieBanner` and `CookieSettings` views.

### Design System
- Colors use HSL CSS variables in `/src/index.css`, referenced via `hsl(var(--name))` in Tailwind
- Key tokens: `--primary` (magenta), `--accent` (orange), `--cream`, `--gold`, `--kraft`, `--pink`
- Tailwind font families: `font-display` and `font-body` (Plus Jakarta Sans), `font-script` (Abril Fatface)
- Note: `index.css` imports Space Grotesk + Inter but Tailwind config references Plus Jakarta Sans — there is a mismatch
- Custom animations: fade-in, fade-in-up, scale-in (defined in `tailwind.config.ts`)

## Important Notes

- All user-facing content is in German (Swiss market)
- Mobile-first responsive design using Tailwind breakpoints
- Path alias `@/*` maps to `/src/*`
- TypeScript config is relaxed (no strict null checks, no implicit any allowed)
