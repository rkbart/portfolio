# Feature Specification: Portfolio Site

**Feature Branch**: `001-portfolio-site`

**Created**: 2026-08-16

**Status**: Draft

**Input**: User description: "Build a single-page portfolio website deployable to Vercel featuring my resume and GitHub projects, built with the spec-kit workflow."

## User Scenarios & Testing

### User Story 1 - View the Complete Resume (Priority: P1)

A visitor lands on the portfolio and reads the owner's story in one scroll: professional summary, technical skills, work experience, and education. All content comes from structured resume data and is rendered on a single page with anchor navigation.

**Why this priority**: The resume is the core purpose of a portfolio; without it the site has no value.

**Independent Test**: Can be fully tested by loading the single page and verifying each resume section renders with accurate content from the data file.

**Acceptance Scenarios**:

1. **Given** the portfolio is deployed, **When** a visitor opens the homepage, **Then** they see hero, about/summary, experience, skills, and education sections in one scroll.
2. **Given** the resume data file is edited, **When** the site is rebuilt, **Then** the updated content appears without component changes.
3. **Given** the page is viewed on a mobile device, **When** the visitor scrolls the sections, **Then** the layout remains readable and responsive.

---

### User Story 2 - Browse Curated GitHub Projects (Priority: P1)

A visitor scrolls to the projects section and sees a curated list of the owner's GitHub repositories with live metadata (name, description, language, stars, link). Only repositories the owner has chosen appear; the owner edits one config file to add or remove them later.

**Why this priority**: Showcasing real, live work is the second core purpose of the portfolio.

**Independent Test**: Can be fully tested by building the site and verifying the projects section contains exactly the curated repos with live metadata.

**Acceptance Scenarios**:

1. **Given** a repo is present in the curated allowlist, **When** the site is built, **Then** that repo appears with live GitHub metadata and a link.
2. **Given** a repo is removed from the allowlist, **When** the site is rebuilt, **Then** it no longer appears.
3. **Given** the GitHub API is unreachable, **When** the site is built, **Then** the page still renders using curated fallback metadata instead of erroring.

---

### User Story 3 - Download the Resume PDF (Priority: P2)

A visitor can download the owner's resume as a PDF for offline reading or sharing.

**Why this priority**: Nice-to-have that complements the in-page resume but is not required for the site's core value.

**Independent Test**: Can be fully tested by clicking the download link and confirming a valid PDF is served.

**Acceptance Scenarios**:

1. **Given** the resume PDF exists in the public assets, **When** a visitor clicks "Download Resume", **Then** a valid PDF file downloads.
2. **Given** a visitor prefers print, **When** they print the page, **Then** the resume sections print cleanly.

---

### User Story 4 - Contact the Owner (Priority: P3)

A visitor can reach the owner via email and LinkedIn links shown in the hero/contact section.

**Why this priority**: Required for a complete portfolio but static and trivial to add.

**Independent Test**: Can be fully tested by clicking each contact link and confirming it points to the correct destination.

**Acceptance Scenarios**:

1. **Given** the portfolio is rendered, **When** a visitor clicks the email link, **Then** their mail client opens addressed to the owner's email.
2. **Given** the portfolio is rendered, **When** a visitor clicks the GitHub or LinkedIn link, **Then** the correct profile opens in a new tab.

---

### Edge Cases

- GitHub API rate limit exceeded (unauthenticated limit of 60 req/hr) during build.
- A curated repo no longer exists or was made private → hide it or show fallback metadata.
- Resume data file is missing a field (e.g., no end date) → render gracefully without breaking layout.
- Very long project descriptions → truncate without layout breakage.

## Requirements

### Functional Requirements

- **FR-001**: The site MUST render all sections (hero, about, experience, projects, skills, education, contact) on a single scrollable page.
- **FR-002**: The site MUST display professional summary, skills, experience, and education sourced from a structured resume data file.
- **FR-003**: The site MUST fetch live repository metadata from the GitHub API for the `rkbart` account at build time.
- **FR-004**: The site MUST display only repositories listed in the curated allowlist, in the owner's chosen order.
- **FR-005**: The site MUST provide a downloadable resume PDF asset.
- **FR-006**: The site MUST fall back to curated static metadata when the GitHub API is unavailable, without failing the page.
- **FR-007**: The site MUST be responsive on mobile, tablet, and desktop viewports.
- **FR-008**: The site MUST provide working contact links (email, GitHub, LinkedIn).
- **FR-009**: The owner MUST be able to add or remove featured projects by editing a single config file.

### Key Entities

- **Resume**: Structured content — name, contact, summary, skills, experience (role, company, dates, bullets), education (school, degree, years).
- **Project**: Curated GitHub repository entry — repo name, custom blurb/description, order; enriched at build time with live GitHub metadata (stars, language, url).
- **GitHubRepo** (external): Live metadata from the GitHub API — name, description, language, stargazers_count, html_url, homepage.

## Success Criteria

### Measurable Outcomes

- **SC-001**: The homepage loads fully in under 2 seconds on a typical connection and scores ≥ 90 on Lighthouse performance.
- **SC-002**: Every curated project renders with live GitHub metadata (stars, primary language, link).
- **SC-003**: The site renders successfully and remains fully usable when the GitHub API is unavailable.
- **SC-004**: The resume PDF downloads as a valid file from the live site.
- **SC-005**: 100% of curated projects the owner wants shown are present, and removed repos disappear after a rebuild.

## Assumptions

- GitHub username is `rkbart`.
- Resume source of truth is `~/Downloads/Ryan Kristopher Bartolome.pdf`; content is transcribed into structured data.
- Site language is English.
- Content is public; no authentication or admin interface is needed.
- No backend, database, or CMS is used.
- The owner creates a Vercel account before deployment; `vercel` CLI is used to deploy.