# Professional Portfolio Website

## Business Requirements

- A polished professional portfolio website for Alexey Martinez as a web app
- The website should present Alexey as a full-stack systems/software engineer
- The site should include a strong Home page, About page, Projects page, Services page, Contact page, and AI Digital Twin chat
- The Home page should immediately communicate the brand: enterprise meets edgy, practical systems, AI workflows, and operational software
- The About page should explain Alexey’s background, career path, working style, experience, and technical strengths
- The Projects page should show selected case studies with clear problem, architecture, role, stack, and outcomes
- The Services page should present business services for companies looking to improve operations using software, AI, automation, and infrastructure
- The Contact page should be professional, memorable, slightly funny, and direct
- The AI Digital Twin should answer questions about Alexey’s career, projects, skills, services, and working style
- The design priority is a slick, professional, gorgeous UI/UX with restrained but strategic color usage
- Keep the experience focused: no unnecessary pages, no generic blog emphasis, no clutter

## Technical Details

- Implemented as a modern Next.js app using the App Router
- Use Tailwind CSS for styling
- Prefer server components unless client-side interaction is needed
- The AI Digital Twin chat should be client-rendered, backed by a server API route
- Use OpenRouter for AI responses with the model `openai/gpt-oss-120b`
- Keep `OPENROUTER_API_KEY` private in the server environment only
- Use local portfolio content and career context to ground the AI Digital Twin
- No authentication or user management
- No database persistence required for chat MVP
- Use existing project structure and visual language
- Keep implementation simple, maintainable, and production-ready

## Color Scheme

- Accent Orange: existing orange palette for highlights, active states, borders, and CTAs
- Dark Zinc / Near Black: primary background for edgy enterprise sections
- White / Zinc Light: clean content cards and readable surface areas
- Zinc Gray: supporting text, metadata, labels, and secondary content
- Orange Glow: subtle radial accents used sparingly for depth and visual energy

## Strategy

1. Write plan with success criteria for each phase to be checked off, including content structure, routing, responsive layout, AI chat behavior, and verification
2. Execute the plan while preserving the existing look and feel of the website
3. Build each page around clear business value: who Alexey is, what he has built, what services he provides, and how to contact him
4. Integrate the AI Digital Twin with a secure server-side OpenRouter API route and career-grounded system prompt
5. Carry out rigorous build and lint checks, then use browser testing where possible to verify layout, responsiveness, navigation, and chat behavior
6. Only complete when the site is polished, tested, and ready for the user to review locally

## Coding Standards

1. Use current Next.js, React, and Tailwind best practices
2. Keep it simple: avoid unnecessary abstractions, extra features, or over-engineered state management
3. Preserve the existing design system, spacing, typography, and component patterns
4. Keep copy professional, direct, and specific to Alexey’s actual career and services
5. Never expose secrets or API keys in client-side code
6. Keep README and documentation minimal
7. No emojis ever
