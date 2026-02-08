<!--
Sync Impact Report (speckit.constitution)
- Version change: (none) → 1.0.0
- Modified principles: N/A (initial fill from template)
- Added sections: Core Principles I–V, Additional Constraints, Development Workflow, Governance
- Removed sections: None
- Templates requiring updates: plan-template.md (Constitution Check references this file) ✅ aligned; spec-template.md ✅ no mandatory section changes; tasks-template.md ✅ no principle-driven task type changes
- Follow-up TODOs: None
-->

# 台味命名大師 (Taiwan Namer) Constitution

## Core Principles

### I. User-First & Free Tools

All core product value (AI domain naming, domain search, guides) MUST remain free and usable without paywall. UX MUST be clear: no dark patterns, no forced sign-up for core flows. Rationale: Trust and discoverability drive affiliate and organic growth; obfuscation harms both.

### II. Affiliate & Legal Compliance (NON-NEGOTIABLE)

Affiliate links (GoDaddy, Namecheap, Bluehost, etc.) MUST be disclosed in a **clear and conspicuous** manner per FTC expectations. Every page with affiliate links MUST have a visible disclosure (e.g. reader rights / Affiliate Disclosure box) near the top. Footer MUST include a site-wide Affiliate Disclosure in readable contrast (e.g. `text-zinc-300` on dark background). Rationale: Compliance is required for program approval and long-term sustainability.

### III. Real Person & Trust Signals

The site MUST present a real operator (e.g. About page with named founder, Contact with real email, reply commitment such as “We typically reply within 24 hours”). Content MUST avoid generic “we” where a first-person or named voice is appropriate. Rationale: Affiliate programs and users expect a real, maintainable site, not a zombie or purely automated presence.

### IV. Technical Quality & Maintainability

Primary stack: Next.js (App Router), TypeScript, Tailwind CSS. New features MUST follow existing patterns (layout, metadata, components). Shared affiliate link logic MUST live in a single place (e.g. `getAffiliateLink` / constants) so program URLs can be updated once. Rationale: Consistency and single-source-of-truth reduce errors and ease future program changes.

### V. SEO & Shareability

Global metadata MUST define `metadataBase`, `title.template`, and `title.default`. Pages SHOULD set appropriate `description` and OpenGraph fields. `siteName` and `locale` (e.g. `zh_TW`) MUST be set for social sharing. Rationale: Correct metadata improves search and link previews (Google, FB, LINE).

## Additional Constraints

- **Tech stack**: Next.js 14+ (App Router), TypeScript, Tailwind CSS, Lucide React. No new heavy runtimes without justification.
- **Affiliate programs**: All affiliate URLs MUST be configurable via constants or config; deep links MUST preserve “named” destination URLs (e.g. domain-specific search) where applicable, wrapped with affiliate redirect.
- **Design**: Dark mode default, gradient glows, glassmorphism cards, Noto Sans TC; new UI MUST align with existing style.

## Development Workflow

- **Spec/plan/tasks**: Use speckit commands (`/speckit.specify`, `/speckit.plan`, `/speckit.tasks`) for new features when scope is non-trivial; constitution principles MUST be reflected in plan “Constitution Check” and task coverage.
- **Content**: New tutorial or guide pages MUST include a reader rights / affiliate disclosure block near the top and MUST link to Privacy (and Terms where relevant).
- **Deployment**: Build MUST pass (`npm run build`); no secrets or live API keys in repo.

## Governance

- This constitution supersedes ad-hoc practices for principles listed above. Any conflict between spec/plan/tasks and the constitution MUST be resolved in favor of the constitution unless the constitution is amended.
- **Amendments**: Require updating this file, bumping version per semver (MAJOR: principle removal/redefinition; MINOR: new principle/section; PATCH: wording/clarification), and updating `LAST_AMENDED_DATE`. Document change in Sync Impact Report (HTML comment at top).
- **Compliance**: PRs and reviews SHOULD verify that new or changed features do not violate Core Principles; violations MUST be called out and fixed before merge.

**Version**: 1.0.0 | **Ratified**: 2026-02-04 | **Last Amended**: 2026-02-04
