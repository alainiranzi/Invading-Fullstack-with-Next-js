## Purpose
Provide concise, repo-specific guidance for AI coding agents to be productive quickly.

## Project Overview
- This is a Next.js app (App Router) located under `src/app`. It uses Next 16 and React 19.
- Routes are file-based: top-level folders in `src/app` map to routes (e.g. `src/app/meals`, `src/app/community`).
- Dynamic routes use bracket syntax (example: `src/app/meals/[mealSlug]/page.js`).

## Key Files & Examples
- Home entry: `src/app/page.js` — main landing component and hero sections.
- Global layout: `src/app/layout.js` and global styles in `src/app/globals.css`.
- Components: `src/app/components/*` (e.g. `components/images/image-slideshow.js`, `components/main-header/main-header.js`).
- CSS modules: components and pages use module CSS files (e.g. `page.module.css`, `main-header.module.css`).

## Conventions & Patterns (Project-specific)
- File-based routing: add a folder with `page.js` to create a route.
- Use CSS Modules for component styling — prefer `*.module.css` adjacent to components.
- Client vs Server components: the app folder uses Server Components by default. If a component is interactive (e.g. slideshow), mark it with `"use client"` at the top.
- Navigation: use `next/link` (see `src/app/page.js`) rather than raw anchor tags for internal links.
- Component placement: reusable UI lives under `src/app/components/<area>/` with a paired `.module.css` file.

## Dev Workflows & Commands
- Start development server: `npm run dev` (serves at http://localhost:3000).
- Build for production: `npm run build` then `npm start`.
- Linting: `npm run lint` (project uses `eslint`).
- Tailwind/PostCSS present: there is `postcss.config.mjs` and `tailwindcss` is in `devDependencies`.

## Dependencies & Integration Points
- Key deps from `package.json`: `next@16.0.10`, `react@19.2.1`, `react-dom@19.2.1`.
- Dev tools: `eslint`, `tailwindcss`, `@tailwindcss/postcss` (postcss pipeline configured).
- No API routes folder detected under `src/app/api` — data is likely fetched client- or server-side inside page components.

## Typical Code Changes — Concrete Examples
- Add a new route: create `src/app/<route>/page.js` (and optional `layout.js` / `page.module.css`).
- Create an interactive component: add `src/app/components/<name>/index.js` with `"use client"` and a paired `index.module.css`.
- Update header: edit [src/app/components/main-header/main-header.js](src/app/components/main-header/main-header.js).

## What Agents Should Not Do
- Do not move the `src/app` folder out of the app router structure.
- Avoid converting all components to client components — prefer server components unless interactivity requires otherwise.

## Where To Look First When Investigating
- `src/app/page.js` — root page and examples of Link + CSS Modules.
- `src/app/components/` — common component patterns and layout pieces.
- `src/app/meals/[mealSlug]/page.js` — example of dynamic route usage.
- `package.json` — scripts and dependency versions.

## Questions for Maintainers
- Are there any backend/data-fetching conventions (external API, CMS, or local JSON)? If yes, point to the data layer.

---
If anything here is unclear or you want more detail (testing, CI, or deployment specifics), tell me what to expand. 
