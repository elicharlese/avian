# Engineering Guidelines – Avian

These guidelines summarize the working agreements for this repo and complement `END_GOAL.md`.

## 1. Languages & frameworks

- TypeScript only for application code.
- React + Tailwind CSS for UI, with atomic components and PascalCase filenames.
- Use Next.js for the web app entrypoint.

## 2. Code style

- Use named exports only; barrel files allowed only as `index.ts` within a folder.
- Centralize shared types in `src/types/` (or equivalent) and validate at runtime with Zod.
- Prefer small, focused components and hooks.

## 3. Project structure

- Move toward an Nx React/TS monorepo with `app/`, `apps/`, and `libs/` as the project grows.
- Keep shared UI, business logic, and types in dedicated libraries.

## 4. Testing

- Use Jest (and React Testing Library where applicable).
- Aim for ≥90% coverage on critical paths.

## 5. Workflow

- Follow the patch→batch spiral defined in `/windsprint-workflow`.
- Every patch should trace back to items in `END_GOAL.md`.
- Document significant changes under `docs/patches/` and batch summaries under `docs/batches/` as they are introduced.
