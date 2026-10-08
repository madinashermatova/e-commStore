# SHOP.CO

E-commerce front-end built with React. Pages: Home, Shop, On Sale, New Arrivals, Brands.

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- React Router v7
- lucide-react (icons)

## Requirements

- [Node.js](https://nodejs.org) 20 or newer
- npm (comes with Node.js)

Check your versions:

```bash
node -v
npm -v
```

## Getting started

1. Clone the repository:

```bash
   git clone <repo-url>
   cd vite-project
```

2. Install dependencies:

```bash
   npm install
```

3. Start the dev server:

```bash
   npm run dev
```

4. Open http://127.0.0.1:3000 in your browser.

The port and host are set in `vite.config.ts`. The page reloads automatically when you save a file.

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server               |
| `npm run build`   | Build for production (`dist/`)     |
| `npm run preview` | Preview the production build       |

## Production build

```bash
npm run build
npm run preview
```

The built files are created in the `dist/` folder and can be deployed to any static hosting (Vercel, Netlify, GitHub Pages).

## Troubleshooting

- **`EACCES: permission denied` on port 5173 (Windows):** the port is reserved by the system. Change `server.port` in `vite.config.ts` or run `npm run dev -- --port 3000`.
- **`EPERM` error in `node_modules/.vite`:** stop the dev server, delete the cache folder, and start again:

```bash
  rm -rf node_modules/.vite
  npm run dev
```

  On Windows PowerShell: `Remove-Item -Recurse -Force node_modules\.vite`
- **Styles are missing:** make sure `src/index.css` starts with `@import "tailwindcss";` and `vite.config.ts` includes the `tailwindcss()` plugin.

## Project structure

```
src/
  assets/        # images (hero, dress styles, products)
  components/
    layout/      # Header, Footer, Layout, Newsletter, AnnouncementBar
    home/        # Hero, BrandsStrip, NewArrivals, TopSelling, BrowseByStyle, Reviews
    product/     # ProductCard
    ui/          # StarRating
  data/          # mock data (products, reviews)
  pages/         # Home, Shop, OnSale, NewArrivals, Brands
  types/         # TypeScript types
  App.tsx        # routes
  main.tsx
```

## Roadmap

- [ ] Product details page
- [ ] Cart (Zustand)
- [ ] Shop filters
- [ ] Connect to a backend API
- [ ] Checkout and auth