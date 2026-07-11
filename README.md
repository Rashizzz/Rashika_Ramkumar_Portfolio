# Rashika Ramkumar — Portfolio

A dark, futuristic developer portfolio built with React, Vite, Tailwind CSS,
and Framer Motion.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/       Reusable UI pieces (Navbar, Footer, cards, skill bars...)
  sections/         Page sections (Hero, About, Services, Skills, ...)
  hooks/            Custom hooks (active-section scroll tracking)
  App.jsx           Assembles all sections
  main.jsx          React entry point
  index.css         Tailwind directives + shared utility classes
```

## Things to customize

- **Resume link**: the "Download Resume" button in `src/sections/Hero.jsx`
  currently points to `#` — replace `href="#"` with a real PDF path/URL.
- **GitHub / LinkedIn links**: placeholder `https://github.com/` and
  `https://linkedin.com/` links live in `Navbar.jsx`, `Hero.jsx`, `Footer.jsx`,
  and `Contact.jsx` — swap in your real profile URLs.
- **Certifications**: edit the `CERTIFICATIONS` array in
  `src/sections/Certifications.jsx`. Card images are currently an icon
  placeholder — replace with real certificate images/screenshots when ready.
- **Profile photo**: the hero currently shows an "RR" monogram placeholder.
  Drop a photo into `src/assets/` and swap it into `src/sections/Hero.jsx`.
- **Contact form**: `src/sections/Contact.jsx` currently simulates a
  successful submit. Wire it up to a service like
  [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) to
  actually deliver messages.

## Color Theme

| Token      | Value                    |
| ---------- | ------------------------ |
| Primary    | `#7C3AED`                |
| Secondary  | `#8B5CF6`                |
| Accent     | `#A855F7`                |
| Background | `#030712`                |
| Cards      | `#111827`                |
| Borders    | `rgba(255,255,255,0.08)` |

© 2026 Rashika Ramkumar. All Rights Reserved.
