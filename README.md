# Harish Mallipeddi - Personal Portfolio

A modern, responsive, and high-performance personal portfolio website built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and Lucide React.

## 🚀 Tech Stack
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (with fully integrated Dark & Light mode)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (scroll-triggered effects, micro-interactions, page entries)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure
- `src/app/`: Next.js App Router core layouts, page entries, and global styles.
- `src/components/`: Modular React components (Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer, ThemeProvider).
- `src/data/`: Centralized content repository (`portfolioData.ts`) for easy maintenance.
- `public/`: Static asset storage.

## 🛠️ Getting Started

First, install the package dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open https://my-portfolio-kappa-three-83.vercel.app/ with your browser to see the website.

## 📝 Customization

All personal and professional information is centralized in a single file to make updates straightforward. Modify the data in:
`src/data/portfolioData.ts`

## 🛫 Deployment

This project is ready to compile and deploy. The easiest way is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
