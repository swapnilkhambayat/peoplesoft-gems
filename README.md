# PeopleSoft Gems

**PeopleSoft Gems** is an AI-curated knowledge platform for PeopleSoft developers and techno-functional professionals.

> ERP knowledge is everywhere. PeopleSoft Gems is the interface to it.

## V1 goal

Build the fastest way for a PeopleSoft professional to find trustworthy technical resources and source-backed troubleshooting guidance.

The first version focuses on:

- PeopleCode
- Integration Broker
- REST APIs
- Application Engine
- Component Interfaces
- Oracle SQL
- PeopleTools

## Product principles

1. Search first.
2. Quality over volume.
3. Original sources stay visible.
4. Source-backed information must be distinguishable from AI interpretation.
5. Uncertainty should be explicit rather than hidden.
6. Prefer a small, useful implementation over premature infrastructure.

## Initial stack direction

- Next.js + TypeScript
- Tailwind CSS
- Supabase PostgreSQL
- PostgreSQL full-text search
- pgvector
- OpenAI API
- Vercel

This stack is provisional until the MVP data model and search flow are validated.

## Repository structure

```text
peoplesoft-gems/
├── README.md
├── docs/
│   ├── product-vision.md
│   ├── gem-specification-v1.md
│   └── architecture.md
├── prototypes/
│   └── homepage-v2.html
└── .gitignore
```

## Current status

Product definition and homepage prototype are in progress. The next major UX artifact is the search results page.
