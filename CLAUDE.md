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
- **React Query** - Server state for Shopify product data
- **React Hook Form + Zod** - Form validation

### Key Integrations

**Shopify Storefront API** (`/src/lib/shopify.ts`)
- GraphQL API for fetching products and creating cart checkouts
- Checkout redirects to Shopify's hosted checkout page
- Storefront access token and domain are hardcoded in the file

**Supabase** (`/src/integrations/supabase/`)
- Client initialized from env vars: `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`
- Edge function `send-quote-request` (`/supabase/functions/`) handles custom box form submissions
- Uses Resend API (`RESEND_API_KEY` env var on Supabase) to email quotes to info@surpriso.ch

### Data Flow
1. Products fetched from Shopify GraphQL → displayed in ProductsSection
2. Cart managed by Zustand store (`/src/stores/cartStore.ts`) → persisted to localStorage
3. Checkout creates Shopify cart → redirects to Shopify checkout URL
4. Custom box requests → Supabase edge function → Resend API → email

### Routing
Single route app — `App.tsx` uses React Router with `/` (Index) and `*` (NotFound). New routes must be added above the catch-all `*` route.

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
