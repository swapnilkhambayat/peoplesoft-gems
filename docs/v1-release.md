# Working V1 — November 1, 2026

## Implemented
- Responsive search-first homepage preserving the approved dark/gold design.
- 12 reviewed Oracle resources, original links, version metadata, and original AI-assisted summaries.
- Weighted keyword search with CI/AE/IB expansion, URL-persisted query/filter state, browser back support, topic/version/source/code filters and Gem Score sort.
- Individual Gem URLs, related resources, transparent score dimensions and older-source notices.
- Ask: retrieved summaries and curated diagnostic sequences for supported questions; explicit insufficient-evidence handling. No runtime model calls.
- Owner-private curator workspace. Add drafts, edit, approve and return approved records to draft. Persistent D1 overrides plus a version-controlled baseline catalog. Duplicate URLs and malformed records rejected server-side.

## Architecture decision
The original Next.js/Supabase/OpenAI/Vercel stack was provisional. This pilot uses the provided Vinext React/TypeScript runtime, Sites hosting, and D1 so it can be deployed without new external accounts. Search over this 12-resource corpus is weighted keyword retrieval; it is **not hybrid or semantic search**. No embeddings or OpenAI secrets are configured. This is a functioning private search/curation pilot; the live AI and hybrid-search portions of the original roadmap remain incomplete.

## Trust and access
The Site must stay owner-private: administration relies on the platform's owner-only gate, plus same-origin mutation checks. Before expanding access, implement an explicit server-side admin allowlist and protect both catalog management endpoints. No arbitrary source URLs are fetched on the server. Curators read sources manually. No API credentials belong in the browser or Git.

## Validation
Run `node --experimental-strip-types --test tests/search.test.ts` and `node node_modules/typescript/bin/tsc --noEmit`. Build with the Sites build helper or `npm run build`. Database schema is in db/schema.ts, migrations in drizzle/. Do not change applied migrations.

## Remaining roadmap
1. Connect OpenAI server-side through an approved API connection, implement cited structured generation with evidence validation, then evaluate unsupported-question behavior.
2. Add embeddings/hybrid retrieval only alongside retrieval benchmarks; keep keyword search as fallback.
3. Expand reviewed coverage beyond the 12 resources, including Fluid, Security, Search Framework, CS and FSCM.
4. Implement explicit administrator authorization before any shared/public launch.
5. Automated ingestion, analytics, feedback, community functionality and launch announcements remain outside this private pilot.
