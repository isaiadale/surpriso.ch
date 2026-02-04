# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Surpriso is a Swiss e-commerce site for premium gift boxes built with React, TypeScript, Vite, and Tailwind CSS. It's a single-page application where all content sections are on the landing page with scroll navigation.

## Commands

```bash
npm run dev      # Start dev server on port 8080
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

### Tech Stack
- **Vite + React 18 + TypeScript** - Core framework
- **Tailwind CSS + shadcn/ui** - Styling with 50+ Radix-based components in `/src/components/ui/`
- **Zustand** - Cart state management with localStorage persistence
- **React Query** - Server state for Shopify product data
- **React Hook Form + Zod** - Form validation

### Key Integrations

**Shopify Storefront API** (`/src/lib/shopify.ts`)
- GraphQL API for fetching products and creating checkouts
- Checkout redirects to Shopify's hosted checkout page
- API credentials are hardcoded (domain: surpriso-ch.myshopify.com)

**Supabase** (`/src/integrations/supabase/`)
- Edge function `send-quote-request` handles custom box form submissions
- Emails sent to info@surpriso.ch

### Data Flow
1. Products fetched from Shopify GraphQL → displayed in ProductsSection
2. Cart managed by Zustand store (`/src/stores/cartStore.ts`) → persisted to localStorage as `surprisebox-cart`
3. Checkout creates Shopify cart → redirects to Shopify checkout URL
4. Custom box requests → Supabase edge function → email

### Directory Structure
```
/src
├── pages/           # Index.tsx (landing page), NotFound.tsx
├── components/      # Page sections (Hero, ProductsSection, CartDrawer, etc.)
│   └── ui/          # shadcn/ui components
├── stores/          # cartStore.ts (Zustand)
├── lib/             # shopify.ts, utils.ts
├── integrations/    # Supabase client and types
├── hooks/           # use-mobile, use-toast
└── assets/          # Images and logos
```

### Design System
- **Primary color**: Magenta (#E60B71)
- **Accent color**: Orange (#FF8000)
- **Background**: Cream (#F9F5F1)
- **Font**: Plus Jakarta Sans
- CSS variables defined in `/src/index.css`
- Custom animations: slide-down, float, fade-in-up

## Important Notes

- All user-facing content is in German (Swiss market)
- Mobile-first responsive design using Tailwind breakpoints
- Path alias `@/*` maps to `/src/*`
- TypeScript config is relaxed (no strict null checks)
