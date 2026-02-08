# Gulsum Oran Gunes | Portfolio

Personal portfolio website built to showcase my work, background, and skills, with a strong focus on a serverless AWS architecture. The stack uses S3 and CloudFront for hosting, API Gateway and Lambda for the visitor counter, DynamoDB for storage, and ACM for HTTPS.

## Live
- https://gulsumoran.com/

## Features
- Responsive, mobile-first layout
- Smooth animations and micro-interactions
- Modular component structure
- Easy content updates through React components
- Fast builds and hot reload with Vite
- Serverless AWS visitor counter (API Gateway + Lambda + DynamoDB)

## AWS Architecture (Serverless Visitor Counter)
This project uses a serverless AWS setup to host the site and track visits:
- **S3** stores the static build output (`dist/`).
- **CloudFront** serves the site globally with CDN caching.
- **AWS Certificate Manager (ACM)** provides the SSL/TLS certificate for HTTPS.
- **API Gateway** receives a request on each site visit.
- **Lambda** updates the visitor counter logic.
- **DynamoDB** stores the total visit count.

To avoid increasing the count on every refresh, the last visitor count is saved in **localStorage**. If a user refreshes the page, the count remains the same on the client.

## Sections
- Hero / Intro
- About
- Skills
- Experience
- Education
- Projects
- Contact
- Blog

## Tech Stack
- React (Vite)
- Tailwind CSS
- Framer Motion
- React Router
- React Icons
- Radix UI (component primitives)
- Lenis (smooth scrolling)

## Getting Started
Prerequisites: Node.js (>=18) and npm.

```
git clone https://github.com/<username>/<repo-name>.git
cd portfolio
npm install
npm run dev
```

Open `http://localhost:5173/` in your browser.

## Scripts
```
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview the build locally
npm run lint      # run ESLint
```

## Project Structure
```
src/
  assets/         # images, fonts, static files
  components/     # reusable UI pieces
  pages/          # section-level components
  App.jsx         # routes / main layout
  main.jsx        # app entry point
```

## Updating Content
- Section content lives under `src/pages/` (each section is its own component).
- Shared UI elements live under `src/components/`.
- Images and static files are in `src/assets/`.

## Build
```
npm run build
```
The production build is generated in `dist/`.

## Deployment
This is a static site. My current deployment uses **AWS S3 + CloudFront**.

You can also upload the `dist/` folder to any static host:
- Vercel
- Netlify
- GitHub Pages

Domain and DNS are managed with **Cloudflare**.

## CI/CD
Deployments are automated with **GitHub Actions**.
Workflow summary (`.github/workflows/deploy.yml`):
- Trigger: push to `master`
- Build: Node.js 18, `npm install`, `npm run build`
- Deploy: sync `dist/` to S3
- Cache: CloudFront invalidation (`/*`)

Required GitHub Secrets:
- `S3_BUCKET_NAME`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `CLOUDFRONT_DISTRIBUTION_ID`

---

