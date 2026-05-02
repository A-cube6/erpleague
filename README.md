# ERPLeague Australia Website

A fresh, premium Next.js website for **ERPLeague Australia** — a boutique Australian SAP and ERP services company.

This version uses a cyan/blue ERPLeague-aligned theme, polished enterprise B2B spacing, responsive layouts, and iOS-style glass hover effects for clickable UI elements.

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- Next.js API route for enquiry form handling
- Lucide React icons

No `node_modules` folder is included in this package.

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the GitHub repository into Vercel.
3. Vercel should detect Next.js automatically.
4. Use the default build command:

```bash
npm run build
```

5. Use the default output handled by Next.js/Vercel.

## Project structure

```text
src/app/page.tsx                 Main landing page
src/app/portal/page.tsx          Client portal preview page
src/app/privacy/page.tsx         Privacy placeholder
src/app/api/enquiry/route.ts     Contact/enquiry API route
src/components                   Reusable UI sections and cards
src/lib/content.ts               Main editable website content
src/app/globals.css              Theme, glass hover effects, global polish
```

## Where to update content

Most website copy and structured content is in:

```text
src/lib/content.ts
```

Update services, industries, proof points, contact details and portal feature wording there.

## Contact form

The enquiry form posts to:

```text
/api/enquiry
```

Current behaviour:

- Validates required fields
- Uses a hidden honeypot field for basic spam filtering
- Logs the enquiry on the server
- Returns a success response to the user

To integrate email or CRM later, update:

```text
src/app/api/enquiry/route.ts
```

Suggested future options:

- Resend
- SendGrid
- Mailgun
- Supabase database insert
- HubSpot or Zoho CRM API

## Current design notes

- Theme follows the existing ERPLeague website direction more closely: light blue/white/cyan with deep slate contrast.
- Buttons and clickable areas use a global `glass-hover` effect inspired by modern iOS translucent interaction styles.
- Cards and panels use `premium-card` and `glass-surface` utility classes in `globals.css`.
- Layout is mobile-first and suitable for Australian enterprise SAP/ERP clients.
- The client portal is a public placeholder only; no private data, authentication or subscriptions are implemented yet.

## Future portal build

Recommended next phase:

- Supabase Auth
- Organisation table
- User roles: owner, admin, client, subscriber
- Subscription status table
- Protected `/portal/dashboard` route
- Client-specific products and reports
- Enquiry-to-CRM/email integration

## Important

Do not commit `node_modules` to GitHub.
