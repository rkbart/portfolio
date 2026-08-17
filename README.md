# Portfolio — Ryan Kristopher Bartolome

A single-page portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**. It presents a resume and a curated selection of GitHub projects, fetching live project data from the GitHub API at build time.

Live site: <https://rkbart.vercel.app>

## Tech Stack

| Layer       | Choice                                              |
| ----------- | --------------------------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack)                  |
| Language    | TypeScript                                          |
| Styling     | Tailwind CSS v4                                     |
| Data source | GitHub REST API (fetched at build time)             |
| Deploy      | Vercel (auto-deploy from `main` via Git)            |

## Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout, metadata, Header
│   └── page.tsx            # Single page composing all sections (force-static)
├── components/             # Page sections (Hero, About, Experience, Projects, Skills, Education, Contact)
├── data/
│   ├── resume.ts           # Resume content — the source of truth for experience/education/skills
│   └── featured-projects.ts# Curated allowlist of GitHub repos to display
├── lib/github.ts           # Build-time GitHub fetch with static fallback
├── public/
│   └── resume.pdf          # Resume download file
├── specs/                  # spec-kit SDD workflow documents
└── checklists/             # spec-kit requirements checklists
```

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (static prerender)
npm run lint       # ESLint
npx tsc --noEmit   # type-check
```

## Editing Content

- **Resume**: edit `data/resume.ts` (typed, single source of truth). Replace `public/resume.pdf` with an updated resume file for the download button.
- **Projects**: add or remove repos in `data/featured-projects.ts` (an array of GitHub repository names). Only repos on this allowlist are fetched and shown.
- **Layout/content**: edit the sections in `components/` and their composition in `app/page.tsx`.

Project data is fetched from the GitHub API at build time (`lib/github.ts`, `cache: "force-cache"`). The page is statically prerendered, so new or changed repos require a rebuild (a `git push` to `main` redeploys on Vercel).

## Deployment

The repository is connected to Vercel via Git — every push to `main` triggers a production deployment:

```bash
git push origin main
```

Manual deploy (if needed):

```bash
vercel --prod
```

## Development Workflow (spec-kit)

This project follows the spec-kit specification-driven development workflow:

```bash
specify plan    # plan a new change
specify code    # implement from the plan
specify check   # verify requirements
```

- Constitution: `.specify/memory/constitution.md`
- Specifications: `specs/001-portfolio-site/`
- Requirements: `checklists/requirements.md`

`.specify/` and `.opencode/` are git-ignored (they contain tooling state, not source).