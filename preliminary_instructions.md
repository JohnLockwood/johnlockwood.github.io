# Spanish Writing Lab — Astro Proof of Concept

## Objective

Build a minimal Astro-based website to support advanced Spanish language learning through reading, writing, and exploring alternative expressions.

The initial milestone is a working website containing one Spanish-language article and approximately six expressions selected from that article.

**Time budget:** 1–2 days. Prioritize simplicity and working functionality over architectural sophistication.

## Technology

- Astro static-site generator
- Markdown for article content
- Simple structured metadata for expressions
- Minimal JavaScript
- No database, authentication, CMS, or external API required
- Start from an existing Astro blog template where practical

## Initial features

1. Display a Spanish-language article in a clean, readable layout.
2. Show approximately six selected expressions associated with the article.
3. For each expression, provide alternative ways of communicating the same idea.
4. Include brief explanations of differences in meaning, nuance, and register.
5. Keep the linguistic explorations separate from the article text.

## Content structure

Each article should have basic metadata: title, date, source, and optional topic tags.

Each expression should have:

- Original expression
- Meaning or explanation
- Alternative expressions
- Example sentences
- Notes about register and nuance

Use the simplest content organization that works. Avoid elaborate schemas or premature abstractions.

## Scope restrictions

Do not implement:

- User accounts or authentication
- Databases
- Automatic AI-generated suggestions
- Anki integration
- Revision tracking
- A content management system
- Complex interactive interfaces

## Implementation principles

- Prefer Astro's native capabilities.
- Keep content separate from presentation.
- Favor readable code and simple components.
- Make adding a second article straightforward.
- Avoid unnecessary dependencies.
- Build incrementally, testing each feature before proceeding.

## First milestone

A working local Astro site displaying one article and six expressions with their alternatives and explanations.

Deployment is optional until the local proof of concept works.

## Development workflow

Before implementing, propose a minimal file structure and identify any decisions that genuinely need to be made.

Then implement the smallest working version.

Do not add features beyond the agreed scope without asking.

## Possible Themes for this are:

* https://arghyadipchak.github.io/academicpages-astro/ Academic Pages Astro

Can you suggest others, or do you see any limitations with that one as a starting point?