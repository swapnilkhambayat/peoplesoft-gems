# PeopleSoft Gems

A private, working V1 for finding trustworthy PeopleSoft technical resources.

## Run

Node 22.13+ is required. Install with `pnpm install --frozen-lockfile`. Run `npm run build`, apply the D1 migration as described below, then `npm run dev`.

The application uses Cloudflare D1 through the included Vite integration. Sites configures the execution profile for the hosted checkout.

After building, initialize local storage:

```
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_sturdy_doctor_doom.sql
```

## Test

```
node --experimental-strip-types --test tests/search.test.ts
node node_modules/typescript/bin/tsc --noEmit
```

## What works

Search, category browsing, metadata filters, Gem detail pages, explainable scores, source-linked curated troubleshooting, and durable draft/approval administration. Twelve Oracle resources provide an initial technical collection. Queries and filters can be shared via URLs.

Ask uses curated evidence, not live model generation. Search uses weighted keywords, not vector embeddings. See [release notes](docs/v1-release.md) for implementation decisions, limitations and remaining AI work.

## Access

Keep the deployment owner-private. Its curator API relies on Sites' owner-only access boundary. Add explicit administrator authorization before widening Site access. Never deploy the admin API publicly as-is.

## Source

- `app/`: pages and curator API
- `lib/`: retrieval, scoring, guidance and catalog storage
- `data/gems.json`: reviewed baseline resources
- `db/`, `drizzle/`: schema and migrations
- `tests/`: retrieval and validation cases
- `docs/`, `prototypes/`: original specifications and design history

Summaries are original; external sources remain authoritative. This project is not affiliated with Oracle.
