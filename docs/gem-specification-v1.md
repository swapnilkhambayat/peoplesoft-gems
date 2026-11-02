# Gem Specification v1

A Gem is a structured representation of one useful PeopleSoft technical resource.

## Required fields

- `title`
- `original_url`
- `source_name`
- `category`
- `subcategory`
- `content_type`
- `difficulty`
- `summary`
- `why_useful`
- `tags`
- `key_takeaways`
- `has_code_examples`
- `last_checked_date`
- `gem_score`
- `ai_confidence_score`
- `status`

## Optional fields

- `author`
- `publication_date`
- `module`
- `peopletools_versions`
- `application_versions`
- `freshness_score`
- `technical_depth_score`
- `practical_value_score`
- `source_quality_score`
- `clarity_score`
- `version_relevance_score`
- `community_score`
- `outdated_flag`

## Core taxonomy

### Development

- PeopleCode
- Application Engine
- Component Interface
- Application Packages
- Application Designer
- SQR
- XML Publisher
- File Layout
- PS Query

### Integration

- Integration Broker
- REST
- SOAP
- OAuth
- JSON
- XML
- Boomi
- Middleware
- External APIs

### Database

- Oracle SQL
- PL/SQL
- Performance
- Query Optimization
- Effective-dated SQL

### PeopleTools

- Fluid
- Security
- Workflow
- Search Framework
- Process Scheduler
- Reporting
- Upgrade
- PUM
- Configuration

### Applications

- Campus Solutions
- FSCM
- HCM

## Difficulty

- Beginner
- Intermediate
- Advanced

## Content type

Examples:

- Oracle documentation
- technical article
- blog post
- YouTube video
- GitHub repository
- conference presentation
- PDF
- community discussion

## Gem Score v1

Score resources from 0 to 100 using these dimensions:

- Technical Depth — 25%
- Practical Value — 25%
- Source Quality — 20%
- Clarity — 15%
- Freshness / Version Relevance — 15%

The overall score should remain explainable to users. AI may suggest the dimension scores, but an admin should be able to override them.

## Trust rules

- Never fabricate an original source.
- Never infer a PeopleTools version unless the source provides evidence or the inference is clearly marked.
- Do not copy full copyrighted articles into the Gem.
- Summaries should be original, concise, and attributable to the linked source.
- If the source may be outdated, flag it.

## Example Gem

**Title:** Calling External REST APIs from PeopleCode

**Category:** Integration

**Subcategory:** REST

**Difficulty:** Intermediate

**Content Type:** Technical Article

**Summary:** Explains patterns for invoking external REST services from PeopleCode using PeopleSoft Integration Broker and handling HTTP responses.

**Why useful:** Helps developers implementing outbound API integrations understand the interaction between PeopleCode and Integration Broker.

**Tags:** PeopleCode, REST, Integration Broker, HTTP

**Code examples:** Yes

**Gem Score:** 92

