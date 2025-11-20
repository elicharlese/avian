# Avian

Bootstrap README generated via `/windsprint-workflow` Step 1 (bootstrap-templates).

## Overview

This repository currently hosts a Next.js + TypeScript web application. The long‑term goal and feature set are tracked in `END_GOAL.md`.

## Tech stack

- Next.js
- React + TypeScript
- Tailwind CSS
- Zod for runtime validation

## Getting started

- Install dependencies with your preferred package manager.
- Run `dev` for local development.
- Run `build` for production builds.

## Windsprint workflow

Development follows the patch→batch spiral defined in `/windsprint-workflow`:

- Implement patches aligned with `END_GOAL.md`.
- Group patches into batches (releases).
- Automate CI/CD via Kilo + Vercel.
- Keep guidelines and architecture docs up to date in `docs/`.
