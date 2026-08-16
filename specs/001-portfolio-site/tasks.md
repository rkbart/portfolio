---

description: "Task list template for feature implementation"
---

# Tasks: Portfolio Site

**Input**: Design documents from `/specs/001-portfolio-site/`

**Prerequisites**: plan.md, spec.md

**Organization**: Tasks are grouped by phase; implementation is sequential but components are independent.

## Format: `[ID] [P?] [Story] Description`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Next.js project and tooling

- [ ] T001 Scaffold Next.js App Router + TypeScript + Tailwind project (create-next-app) in project root
- [ ] T002 Configure fonts and root layout (app/layout.tsx) with metadata
- [ ] T003 Configure globals.css with Tailwind and base styles
- [ ] T004 Copy resume PDF to public/resume.pdf

---

## Phase 2: Data Layer (Foundational)

**Purpose**: Typed content that all sections depend on

- [ ] T005 Create data/resume.ts with typed resume content (name, contact, summary, skills, experience, education) from the resume PDF
- [ ] T006 Create data/featured-projects.ts with curated allowlist (ntbk, inkbound, stock-trading-app, emergency_guide_app, chat-app, sql-translator) with blurbs and order
- [ ] T007 Create lib/github.ts — build-time fetch of users/rkbart/repos + fallback to curated metadata on failure

---

## Phase 3: User Story 1 - View the Complete Resume (Priority: P1) 🎯 MVP

**Goal**: Single page showing hero, about, experience, skills, education

**Independent Test**: Load homepage; all resume sections render from data/resume.ts

- [ ] T008 Create components/Section.tsx shared wrapper with anchor id
- [ ] T009 Create components/Hero.tsx (name, title, contact links, download resume button)
- [ ] T010 Create components/About.tsx (professional summary)
- [ ] T011 Create components/Experience.tsx (timeline from resume data)
- [ ] T012 Create components/Skills.tsx (grouped skills)
- [ ] T013 Create components/Education.tsx (education entries)
- [ ] T014 Compose app/page.tsx with all sections + sticky header nav (anchors)

**Checkpoint**: Resume fully rendered on a single page with navigation

---

## Phase 4: User Story 2 - Browse Curated GitHub Projects (Priority: P1)

**Goal**: Projects section showing curated repos with live GitHub metadata

**Independent Test**: Rebuild; projects section shows exactly the allowlist with live data

- [ ] T015 Create components/Projects.tsx — server component reading lib/github.ts result and rendering project cards
- [ ] T016 Handle fallback when GitHub API fails (curated metadata shown, no crash)

**Checkpoint**: Projects section complete with graceful degradation

---

## Phase 5: User Story 3 & 4 - Resume PDF + Contact (Priority: P2/P3)

**Goal**: Downloadable PDF and working contact links

**Independent Test**: Click download; PDF served. Click contact links; correct destinations.

- [ ] T017 Add download-resume link in Hero/Contact pointing to /resume.pdf
- [ ] T018 Create components/Contact.tsx (email, GitHub, LinkedIn links, footer)

**Checkpoint**: PDF and contact links verified

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Quality gates and deployment readiness

- [ ] T019 Run npm run lint and fix issues
- [ ] T020 Run tsc --noEmit and fix type errors
- [ ] T021 Run npm run build and verify production build
- [ ] T022 Test npm run dev locally and confirm sections/navigation/fallback
- [ ] T023 Prepare Vercel deployment (vercel.json not required for Next.js; document `vercel --prod`)

---

## Dependencies & Execution Order

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Data Layer (Phase 2)**: Depends on Setup; blocks all user stories
- **User Stories (Phase 3-5)**: Depend on Data Layer; sequential
- **Polish (Phase 6)**: Depends on all stories complete

## Implementation Strategy

### MVP First

1. Phase 1 + 2 → Foundation ready
2. Phase 3 (US1) → Resume renders; STOP and VALIDATE
3. Phase 4 (US2) → Projects render; VALIDATE
4. Phase 5 (US3/US4) → PDF + contact; VALIDATE
5. Phase 6 → quality gates → deploy

## Notes

- Content changes happen in data/ files only
- Curated project allowlist in data/featured-projects.ts is the single file the owner edits to pick/remove projects later