# ERPLeague Australia Website

A fresh, modern B2B website for ERPLeague Australia built with Next.js, TypeScript and Tailwind CSS.

## What is included

- Next.js App Router project
- TypeScript
- Tailwind CSS
- Responsive mobile-first design
- SEO metadata, sitemap and robots file
- Reusable components:
  - Navbar
  - Hero
  - ServiceCard
  - IndustryCard
  - CTA / Health Check section
  - ContactForm
  - Footer
- Client Portal preview page for future registered/subscriber products
- API route for enquiry form handling: `src/app/api/enquiry/route.ts`
- Privacy Policy placeholder page

## Requirements

Install Node.js 20 or newer if possible.

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build production version

```bash
npm run build
```

## Start production build locally

```bash
npm run start
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Create a new Vercel project.
3. Import the GitHub repository.
4. Framework preset should be Next.js.
5. Deploy.

No separate Express backend is required. The enquiry form uses a Next.js API route, which will run as a serverless function on Vercel.

## Where to update content

Main content lives here:

```text
src/lib/content.ts
```

Update this file for:

- Services
- Industries
- Proof points / typical outcomes
- Health Check bullets
- Portal feature copy
- Email and phone details

Page structure lives here:

```text
src/app/page.tsx
```

Reusable visual sections live here:

```text
src/components/
```

## Contact form setup

The contact form currently posts to:

```text
src/app/api/enquiry/route.ts
```

At the moment, this route validates the enquiry and logs it on the server/Vercel console.

Later you can integrate:

- Resend
- SendGrid
- Mailgun
- Microsoft Graph
- FormSubmit
- Supabase table storage
- CRM webhook

Look for comments inside `src/app/api/enquiry/route.ts`.

## Client Portal next phase

The current portal page is a public placeholder:

```text
src/app/portal/page.tsx
```

Recommended future additions:

- Supabase Auth
- Organisation / tenant table
- User roles: owner, admin, client, subscriber
- Subscription status
- Secure dashboard routes
- Product cards connected to actual tools
- Support request tracking
- Document/report workspace

## Notes

- `node_modules` is not included.
- `.next` build output is not included.
- Keep secrets out of source code. Use Vercel environment variables for API keys and provider credentials.
