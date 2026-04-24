# Portfolio Site Spec

## Status
- Draft
- Repo: `personal-portfolio-nextjs`
- Primary scope: `Home`, `Articles`, `Projects`

## Goal
Refine the existing portfolio into a clearer, stronger personal site built around three main surfaces:

- Home
- Articles
- Projects

The site should keep the current UI/UX system, but all current copy, story, article content, project content, and positioning should be treated as placeholders.

## Core Positioning
The homepage should describe Alex as:

`Systems Engineer | Full-Stack Development | Solutions Engineer | AI Integration`

This replaces the current positioning and should become the main framing for the site.

## Content Direction
- Everything currently written in the app is placeholder content.
- The current personal story is placeholder content.
- Current article titles, summaries, bodies, and project case studies are placeholder content.
- Existing content files can remain as the implementation structure, but not as the final messaging.
- The final site should sound direct, credible, technical, and practical.

## Non-Negotiables
- Maintain the current UI/UX.
- Preserve the existing layout shell and overall visual language.
- Preserve the current dark/light theme support.
- Preserve the current neutral palette and orange accent.
- Preserve the rounded card surfaces and soft shadows.
- Preserve the current floating header, avatar behavior, and theme toggle.
- Preserve bilingual route support.
- Do not introduce a radically different design system.

## Design Reference
The attached image is the reference for the `Articles` page layout only.

Interpret it as:

- centered section intro
- strong editorial grid
- image-first cards
- large titles
- short summaries
- dense but readable 3-column desktop layout

Do not copy the reference literally. Adapt its structure into the current portfolio UI/UX.

## Current Technical Base
- Next.js App Router
- React 19
- Tailwind CSS
- `next-themes`
- localized route structure under `/{lng}`
- shared content in `lib/site-copy.js` and `lib/site-content.js`

## Primary Routes
- `/{lng}`: Home
- `/{lng}/articles`: Articles index
- `/{lng}/articles/[slug]`: Article detail
- `/{lng}/projects`: Projects index
- `/{lng}/projects/[slug]`: Project detail

## Secondary Routes
- `/{lng}/about`
- `/{lng}/blog`
- `/{lng}/work`
- `/{lng}/speaking`
- `/{lng}/uses`

## IA Direction
- Main navigation should prioritize `Home`, `Articles`, and `Projects`.
- `Articles` should be the primary writing/archive route.
- `Blog` should be treated as legacy, transitional, or removed later.
- `About` may remain secondary, but the homepage must stand on its own.

## Page Spec

## 1. Home

### Purpose
Introduce Alex clearly, establish credibility fast, and route users into articles and projects.

### Required Outcome
The homepage should no longer feel like a placeholder about page. It should feel like the real landing page for the portfolio.

### Required Content
- Hero with the new core positioning:
  `Systems Engineer | Full-Stack Development | Solutions Engineer | AI Integration`
- Short supporting intro that explains what Alex builds and how he thinks
- Clear CTA to `Articles`
- Clear CTA to `Projects`
- Featured articles preview
- Featured projects preview
- Experience or credibility section
- Contact or social access

### Home Content Rules
- Do not preserve the current story verbatim.
- Rewrite the story from scratch later.
- Keep the tone concise, technical, and grounded.
- Avoid generic personal-brand language.
- The page should communicate capability, systems thinking, and practical delivery.

### Home UX Rules
- Keep the current layout shell.
- Keep the current header behavior.
- Keep the visual rhythm and spacing language.
- Make the value proposition visible above the fold.
- Make `Articles` and `Projects` easy to reach.

## 2. Articles Index

### Purpose
Present Alex's technical writing in a stronger editorial archive.

### Required Layout
- Intro section above the grid
- Centered or visually balanced heading block
- Responsive grid:
  - 1 column mobile
  - 2 columns tablet
  - 3 columns desktop
- Image-first cards
- Large article titles
- Short summaries
- Compact metadata

### Card Content
Each article card should include:

- Cover image
- Category or eyebrow
- Title
- Summary
- Meta row
- Full-card click target

### Visual Rules
- The page should feel premium and editorial, not generic.
- The grid should be visually stronger than the current version.
- The page must still feel like part of the current portfolio.
- Dark mode should look especially strong here because the reference image leans dark.
- Light mode must still work cleanly.

### Content Rules
- Current article content is placeholder content.
- The card system stays.
- The content model can stay.
- Final article entries will be rewritten later.
- The page must support both `en` and `es`.

## 3. Article Detail

### Purpose
Support readable long-form technical content.

### Keep
- Back link
- Hero title block
- Cover image
- Structured body sections
- Metadata sidebar
- Localized routing

### Update
- Treat current article bodies as placeholders.
- Keep the layout, replace the content.
- Ensure the reading width and section rhythm remain clean.

## 4. Projects Index

### Purpose
Show case studies and practical work in a portfolio-first format.

### Required Layout
- Intro section
- Responsive card grid
- Visual system aligned with `Articles`
- Project cards that feel like case-study previews, not blog posts

### Card Content
Each project card should include:

- Cover image
- Role or project eyebrow
- Title
- Summary
- Timeline and/or stack preview
- Full-card click target

### Content Rules
- Current project entries are placeholders.
- The structure can stay.
- The content will be rewritten later.
- Projects should highlight problem framing, implementation, and outcomes.

## 5. Project Detail

### Purpose
Provide deeper case-study storytelling.

### Keep
- Back link
- Title and summary
- Cover image
- Main narrative sections
- Sidebar with role, timeline, stack, and links

### Update
- Treat all current project detail copy as placeholder content.
- Keep the structure, replace the substance.

## Shared Design Rules
- Reuse the current layout shell from the app.
- Reuse the current container widths and spacing rhythm.
- Reuse the current header and footer system.
- Reuse the current card language, then refine it.
- Favor evolving current components over adding duplicate ones.

## Navigation Rules
- Re-enable primary navigation once page hierarchy is finalized.
- Primary nav should focus on `Home`, `Articles`, and `Projects`.
- Mobile and desktop nav should be consistent.
- Active state should stay subtle and current-brand aligned.

## Content Model Rules
- Keep content file-driven for now.
- `lib/site-copy.js` should hold UI/page copy structure.
- `lib/site-content.js` should hold structured article/project entries.
- Existing data structures can stay, but the actual written content must be replaced.
- Add fields only if needed for better metadata, SEO, or card presentation.

## Localization Rules
- English and Spanish remain required.
- All primary pages must work under `/{lng}`.
- Metadata, page intros, cards, and detail pages must localize correctly.

## Accessibility Rules
- Semantic heading hierarchy
- Keyboard-accessible links and cards
- Visible focus states
- Good contrast in both themes
- Meaningful alt text for real content images

## Performance Rules
- Keep content pages mostly server-rendered.
- Avoid unnecessary client-side logic.
- Preserve static generation for article and project detail routes where practical.
- Use optimized image handling when feasible.

## Implementation Notes
- The current app already has usable structure for routes, cards, detail pages, and localization.
- The main work is not inventing a new architecture; it is refining structure and replacing placeholder content.

## Implementation Addendum (2026-04-19)

This addendum defines the implemented baseline for the three primary surfaces in this repo:

- `/{lng}` (Home)
- `/{lng}/articles` (Articles index)
- `/{lng}/projects` (Projects index)

### Home (Implemented Baseline)

The homepage must include and keep:

- Hero section with the core positioning string:
  `Systems Engineer | Full-Stack Development | Solutions Engineer | AI Integration`
- Short technical intro copy (concise, practical, no personal-brand filler)
- Primary CTA to `/{lng}/articles`
- Secondary CTA to `/{lng}/projects`
- Featured Articles preview section using shared card patterns
- Selected Projects preview section using shared card patterns
- Experience/Credibility section using role history from localized profile copy
- Contact/Social access block with direct links

Implementation direction:

- Keep the existing page shell and theme behavior
- Keep content file-driven via `lib/site-copy.js` and `lib/site-content.js`
- Keep route server-rendered and localized
- Reuse existing card language (`components/content/content-card.jsx`) for previews

### Articles Index (Implemented Baseline)

The articles index must include and keep:

- Intro block above the grid with centered/balanced heading treatment
- Strong editorial card grid:
  - 1 column mobile
  - 2 columns tablet
  - 3 columns desktop
- Image-first cards with:
  - category eyebrow
  - large title
  - short summary
  - compact metadata row
  - full-card click target

Implementation direction:

- Preserve existing dark/light compatibility
- Keep visual language aligned with existing portfolio shell
- Continue using structured article entries from `lib/site-content.js`

### Projects Index (Implemented Baseline)

The projects index must include and keep:

- Intro block above the grid with centered/balanced heading treatment
- Responsive case-study card grid aligned with Articles
- Project cards with:
  - cover image
  - role eyebrow
  - title
  - summary
  - timeline/stack preview metadata
  - full-card click target

Implementation direction:

- Keep projects visually parallel to articles while preserving project-specific metadata
- Continue using structured project entries from `lib/site-content.js`

### Copy and Content Structure (Required)

Primary page copy and section copy must remain in `lib/site-copy.js`, including:

- `home` hero/intro/CTA/credibility/contact copy
- `articles` intro copy
- `projects` intro copy

Structured entries and featured subsets must remain in `lib/site-content.js`:

- articles (including featured flags and metadata)
- projects (including featured flags and metadata)

## Likely Files To Update Later
- `app/[lng]/(default)/page.js`
- `app/[lng]/(default)/articles/page.js`
- `app/[lng]/(default)/projects/page.js`
- `components/content/content-card.jsx`
- `components/content/page-intro.jsx`
- `components/ui/header.jsx`
- `components/ui/footer/footer.jsx`
- `lib/site-copy.js`
- `lib/site-content.js`

## Acceptance Criteria
- The site clearly centers on `Home`, `Articles`, and `Projects`.
- The homepage uses the new core positioning.
- The current UI/UX is preserved.
- The articles page reflects the attached image structurally without breaking the current brand.
- The projects page feels like the same design system as articles.
- All current placeholder content is understood to be temporary and replaceable.
- English and Spanish routes still work.
