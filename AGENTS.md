# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages, layouts, and route handlers (API routes live under `app/api/`).
- `components/`: shared UI components (Tailwind/Shadcn patterns).
- `providers/`: React context providers and app-level wrappers.
- `lib/`, `utils/`: shared helpers, environment validation, and utilities.
- `types/`, `models/`: TypeScript types and domain models.
- `sanity/`: Sanity Studio schemas and CMS configuration.
- `public/`: static assets (images, icons).
- `dist/`: generated build output (avoid manual edits unless intentionally updating static builds).

## Build, Test, and Development Commands
- `npm run dev`: start the local dev server at `http://localhost:3000`.
- `npm run build`: create a production build.
- `npm run start`: serve the production build locally.
- `npm run lint`: run Next.js ESLint checks.
- `npm run precommit`: run `tsc`, `lint`, and Prettier formatting.
- `npm run preview-email`: launch the React Email dev server.

## Coding Style & Naming Conventions
- Language: TypeScript + React. Use Tailwind utility classes for styling.
- Formatting: Prettier (with `prettier-plugin-tailwindcss`). Prefer auto-formatting over manual alignment.
- Naming: Components in `PascalCase.tsx`, hooks as `useThing.ts`, and App Router routes as `app/**/page.tsx` and `app/**/layout.tsx`.

## Testing Guidelines
- There is no automated test suite configured yet. Use `npm run lint` and `tsc` (via `npm run precommit`) for basic validation.
- If adding tests, prefer `*.test.ts(x)` names and document the run command in this file.

## Commit & Pull Request Guidelines
- Commit format follows Conventional Commits: `type(scope): summary` (e.g., `feat(image): add object position to image component`).
- PRs should include a short description, linked issue (if any), and screenshots or screen recordings for UI changes.

## Security & Configuration Tips
- Required env vars are read from `.env`, including Sanity settings (`NEXT_PUBLIC_SANITY_*` or `SANITY_STUDIO_*`), email credentials (`MY_EMAIL`, `MY_PASSWORD`), and `PEXELS_API_KEY`.
- Never commit secrets; keep `.env` local and rotate credentials if exposed.
