# Rumiku Website

Welcome to the Rumiku platform! This is a playfully modern, highly interactive, and beautiful landing page and ecosystem hub built for the next generation of web and community experiences.

## Screenshots

<div align="center">
  <img src="assets/Screenshot/RUMIKU%20-%20Dark%20Mode.png" alt="Rumiku Dark Mode" width="49%">
  <img src="assets/Screenshot/RUMIKU%20-%20Light%20Mode.png" alt="Rumiku Light Mode" width="49%">
</div>

## Features

- **Modern Design**: High contrast, tactile typography (Outfit, Geist Sans, Geist Mono), and bold lime yellow accents.
- **Dynamic ASCII Background**: An interactive, responsive background grid that acts as a topographic field, shifting and blooming based on mouse movement for extremely satisfying tactile feedback.
- **Dark/Light Mode**: Smooth transitions between a deep space dark theme and a vibrant, bright light theme.
- **Interactive UI Components**: Leveraging Shadcn UI and Base UI for accessible, robust components.
- **Animations**: Silky smooth CSS animations, dynamic gradients, marquee banners, and hover effects that make the page feel alive.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Theming**: `next-themes` (Dark/Light mode support)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: `next/font` (Geist Sans, Geist Mono, Outfit)
- **Language**: TypeScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

- `src/components/sections/` - Core page sections (Hero, Ecosystem, About, Marquee, Footer).
- `src/components/AsciiBackground.tsx` - The dynamic mouse-responsive background component.
- `src/app/globals.css` - Global styles, design system variables, and utility animations.
- `public/images/icons/` - Project icons (star, smiley, pyramid, diamond).

## Building for Production

```bash
npm run build
npm start
```
