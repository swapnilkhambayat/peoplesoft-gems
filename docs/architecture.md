# Architecture Direction — V1

## Default stack

- **Application:** Next.js + TypeScript
- **UI:** Tailwind CSS
- **Database:** Supabase PostgreSQL
- **Keyword search:** PostgreSQL full-text search
- **Semantic search:** pgvector
- **AI:** OpenAI API
- **Hosting:** Vercel
- **Source control:** GitHub

## Why this stack

The goal is to minimize the number of systems a solo developer must learn and operate while keeping a credible path to early scale.

Next.js can host both the user interface and simple server-side application logic. PostgreSQL can hold Gem metadata, full-text search indexes, and vector embeddings, which avoids introducing a separate search engine or vector database prematurely.

## V1 logical architecture

```text
Browser
  |
  v
Next.js application
  |
  +--> PostgreSQL / Supabase
  |      +-- Gem metadata
  |      +-- taxonomy
  |      +-- full-text search index
  |      +-- pgvector embeddings
  |
  +--> OpenAI API
         +-- summaries
         +-- classification
         +-- tagging
         +-- embeddings
         +-- retrieval-based answers
```

## Search strategy

Use hybrid retrieval:

1. PostgreSQL full-text relevance
2. vector similarity
3. metadata filters
4. combine the candidate scores
5. optionally rerank only when evaluation shows it materially improves results

Do not introduce Elasticsearch, Pinecone, Weaviate, or a custom retrieval service in the MVP unless testing demonstrates a concrete need.

## Data ingestion strategy

Start with manually curated Gems. Add controlled URL ingestion only after the Gem specification is stable.

Future ingestion steps:

1. fetch resource
2. clean content
3. extract metadata
4. classify
5. summarize
6. generate tags
7. propose Gem Score
8. chunk relevant content
9. generate embeddings
10. store attribution and source URL

## RAG trust model

Ask PeopleSoft Gems should:

1. retrieve relevant Gem chunks
2. construct an answer only from strong retrieved evidence where possible
3. cite technical claims
4. distinguish source-backed facts from AI recommendations
5. explicitly state when evidence is insufficient

## V1 constraint

Do not build a separate Python/FastAPI service initially. Add a worker or Python service later only if ingestion or document processing becomes awkward inside the main application.
