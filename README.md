<div align="center">
  <br />
    <a href="#" target="_blank">
      <img src="public/readme/hero.webp" alt="Project Banner" />
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"/>
    <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react&logoColor=061E26" />
    <br/>
    <img src="https://img.shields.io/badge/Framer%20Motion-000?style=for-the-badge&logo=framer&logoColor=white" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=111" />
    <img src="https://img.shields.io/badge/Radix%20UI-161618?style=for-the-badge&logo=radixui&logoColor=white" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=111" />
    <img src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" />
  </div>

  <h3 align="center">CCSO Website</h3>

  <div align="center">
    Modern nonprofit website built with Next.js 15, TypeScript, TailwindCSS, and a modular component architecture. Includes program pages, blogs, donations, contact forms, and more.
  </div>
</div>

## 📋 Table of Contents

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🧭 [Project Structure](#structure)
6. 🔗 [Assets](#assets)
7. 🚀 [More](#more)

## ✨ Introduction <a name="introduction"></a>

This repository contains the source code for the CCSO website. It showcases a clean, accessible design with dynamic content sections such as Programs, Blog, Get Involved, Partner, Volunteer, and a Donations flow. Built on Next.js App Router, it emphasizes performance, SEO, and developer experience.

If you’re getting started and need help, feel free to open an issue or discussion in this repo.

## ⚙️ Tech Stack <a name="tech-stack"></a>

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS + tailwind-merge + tailwindcss-animate
- React 19
- Radix UI Primitives
- Framer Motion & GSAP for animations
- Swiper/Splide for carousels
- React Hook Form + Zod (forms & validation)
- Supabase (data/services)
- Stripe (donations)
- Sonner (toasts)

## 🔋 Features <a name="features"></a>

- Landing page with hero, impact stats, testimonials, and CTA
- Program listing and dynamic program detail pages
- Blog listing and blog detail pages
- Get Involved, Partner, and Volunteer pages
- Donations flow with Stripe checkout and thank-you page
- Responsive, accessible UI using Radix and Tailwind
- Theming support (next-themes)
- Typed forms and validation with React Hook Form + Zod

## 🤸 Quick Start <a name="quick-start"></a>

Prerequisites:
- Node.js 18+
- npm (or bun/pnpm/yarn)

Clone & Install:

```bash
git clone <your-repo-url>
cd ccso-website
npm install
```

Environment Variables:
Create a .env file in the project root and set the variables you use. Examples (adjust to your setup):

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Email/Resend (if used)
RESEND_API_KEY=
```

Run the project:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 🧭 Project Structure <a name="structure"></a>

```
src/ (if applicable)
app/
  (root)/
    page.tsx               # Home page (Hero, About, Features, Impact, Testimonials, CTA)
    about/page.tsx
    blog/page.tsx
    blog/[id]/page.tsx
    contact/page.tsx
    donate/page.tsx
    donate/thank-you/page.tsx
    get-involved/page.tsx
    partner/page.tsx
    programs/page.tsx
    programs/[id]/page.tsx
    volunteer/page.tsx
components/
  ... (Hero, About, Features, Impact, Testimonials, CTA, etc.)
constants/
lib/
  ... (client/server utilities, e.g., supabase, stripe helpers)
hooks/
public/
```

Note: The exact directories/components may evolve. Check components and app routes for the most up-to-date structure.

## 🔗 Assets <a name="assets"></a>

- Place site images and media in the public directory. 
- If you have a banner for README, add it at public/readme/hero.webp and it will render at the top.

## 🚀 More <a name="more"></a>

- Scripts
  - npm run dev — start dev server
  - npm run build — production build
  - npm run start — start production server
  - npm run lint — lint the codebase

Contributions, issues, and feature requests are welcome!

—

Copyright © CCSO