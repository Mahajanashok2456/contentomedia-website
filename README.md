# Contentora Media - Professional Content Writing Service Website

This repository contains the frontend scaffold for Contentora Media — a professional content writing agency. The project uses React and Vite for a fast developer experience and modern build system.

Tech stack

- React 18
- Vite
- Tailwind CSS (planned)
- GSAP for animations
- Framer Motion (optional)
- EmailJS for contact forms
- React Router for client-side routing

Quick start

Prerequisites: Node.js 18+ recommended

Install dependencies

```powershell
npm install
```

Run dev server

```powershell
npm run dev
```

Build for production

```powershell
npm run build
```

Preview production build locally

```powershell
npm run preview
```

Project structure

- `src/components/` — reusable UI components (Header, Footer, ContactForm, etc.)
- `src/pages/` — route-level pages (Home, About, FAQ)
- `src/assets/` — images, icons, and other static assets

Environment variables

Create an `.env` file for secrets such as EmailJS keys. Do not commit `.env` to the repository.

Deployment

Deploy to Vercel or Netlify. The `dist/` folder is created by `npm run build`.
