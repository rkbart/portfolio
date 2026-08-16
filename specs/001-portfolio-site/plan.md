# Implementation Plan: Portfolio Site

**Branch**: `001-portfolio-site` | **Date**: 2026-08-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-portfolio-site/spec.md`

## Summary

Build a single-page Next.js (App Router) + Tailwind CSS + TypeScript portfolio for `rkbart`, rendered statically at build time. Resume content lives in `data/resume.ts`. GitHub projects are fetched live from `https://api.github.com/users/rkbart/repos` at build time and filtered through a curated allowlist in `data/featured-projects.ts`; if the API fails, curated fallback metadata keeps the page functional. Deployed to Vercel via the `vercel` CLI.

## Technical Context

**Language/Version**: TypeScript 5.x, Node 22+

**Primary Dependencies**: Next.js (App Router), React 19, Tailwind CSS

**Storage**: None — content stored as typed TS data modules

**Testing**: `npm run build` + `npm run lint` + `tsc --noEmit` as the quality gates

**Target Platform**: Modern web browsers (static site on Vercel)

**Project Type**: Static web application

**Performance Goals**: Lighthouse performance ≥ 90; page loads in under 2 seconds

**Constraints**: Static-only (no runtime server); graceful degradation when GitHub API is unavailable; single-page layout

**Scale/Scope**: 1 page, ~7 sections, ~5 curated projects

## Constitution Check

*GATE: Must pass before Phase 0 research.*

- [x] Single-Page Focus — one route, anchor navigation only
- [x] Static-First — build-time rendering, no runtime server deps
- [x] Content as Structured Data — resume + project allowlist in `data/`
- [x] Live-but-Curated Projects — GitHub API fetch filtered by allowlist
- [x] Graceful Degradation — static fallback when API fails
- [x] Fast & Accessible — Tailwind, semantic HTML, minimal client JS

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-site/
├── spec.md               # Feature specification
├── plan.md               # This file
├── checklists/
│   └── requirements.md   # Spec quality checklist
└── tasks.md              # Task breakdown (next phase)
```

### Source Code (repository root)

```text
portfolio/
├── app/
│   ├── layout.tsx            # Root layout: fonts, metadata, header nav
│   ├── page.tsx              # Single page composing all sections
│   └── globals.css           # Tailwind entry
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx          # Renders curated + live GitHub data
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Section.tsx           # Shared section wrapper with anchor id
├── lib/
│   └── github.ts             # Build-time GitHub API fetch + fallback logic
├── data/
│   ├── resume.ts             # Typed resume content (source of truth)
│   └── featured-projects.ts  # Curated allowlist (owner edits to pick/remove)
├── public/
│   └── resume.pdf            # Downloadable resume
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── tailwind config / CSS
```

**Structure Decision**: Standard Next.js App Router single-page layout. `data/` holds typed content; `lib/github.ts` centralizes the live-fetch + fallback logic; components are presentational and receive props.

## Complexity Tracking

> Not required — no constitution violations.