# Search Results V1

## Goal

Turn a developer's PeopleSoft problem into a short, credible path to the best sources.

The results page should feel closer to a technical search engine than a chatbot or content portal.

## Core layout

1. Compact header with PeopleSoft Gems logo and the query kept in the search box.
2. Search / Ask mode toggle.
3. One compact source-backed troubleshooting summary for problem-style queries.
4. Filter chips, not a large sidebar.
5. Single-column ranked Gem results.
6. Every result keeps the original source, version relevance, and Gem Score visible.

## Example query

`Integration Broker REST service returns HTTP 500`

## Source-backed summary

The summary should contain only claims supported by retrieved Gems.

Example:

- An HTTP target connector can surface a gateway exception when the external system returns HTTP 500.
- Inspect the Service Operations Monitor and Integration Gateway logs to determine whether the failure occurred in PeopleSoft processing, the gateway, or the external endpoint.
- Gateway message logging can capture the outbound HTTP request and returned response.

AI-only guidance should be visually separated, for example:

**AI diagnostic suggestion:** Compare the PeopleSoft outbound request with a known-good Postman request after collecting the exact headers, URL, payload, and response from gateway logging.

## Result card

Each result should show:

- Title
- Gem Score
- Source / publisher
- Source type
- Short AI summary
- Why useful
- PeopleTools version relevance
- Tags
- Last checked date
- Open original source action

Do not show the full Gem Score breakdown until the user opens a Gem or expands the score.

## Filters for V1

Keep filters intentionally small:

- Topic
- Source type
- PeopleTools version
- Has code example

Default sort: **Best Match**.

Other V1 sort option: **Gem Score**.

## Ranking behavior

Search ranking and Gem Score are separate concepts.

**Search relevance** answers: "How well does this Gem match the current query?"

**Gem Score** answers: "How good is this resource in general?"

A high Gem Score resource should not outrank a lower-scored resource if it is much less relevant to the query.

Recommended retrieval order:

1. PostgreSQL full-text search candidate set.
2. pgvector semantic candidate set.
3. Merge candidates.
4. Apply metadata boosts for category/version/source.
5. Rerank the top candidates against the query.
6. Use Gem Score as a quality prior and tie-breaker, not the primary relevance score.

## Trust rules

- Never fabricate a source or documentation title.
- Show original source links directly.
- Prefer current Oracle documentation when it directly answers the question.
- Clearly label older documentation or community material.
- Separate source-backed facts from AI interpretation.
- If the retrieved sources do not support a confident answer, say so and return the best available Gems without inventing a solution.

## V1 visual direction

- Dark developer-tool interface matching Homepage V2.
- One main column, approximately 800–900px wide.
- Minimal borders and decoration.
- Gold accent only for active controls and Gem Score.
- Blue reserved for source links/citations.
- No right sidebar, charts, marketing panels, or recommendation carousels.

