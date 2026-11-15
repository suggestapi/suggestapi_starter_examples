# SuggestAPI Starter Examples

Public starter examples for teams integrating SuggestAPI with an existing search stack.

This repository is intentionally provider-focused so we can link directly to examples by provider, adapter, or migration path without exposing internal implementation details.

## What this repo includes

- Quick-start setup for calling SuggestAPI from your app
- Provider-specific examples for common search providers
- Adapter notes for teams migrating from one search API shape to another
- Simple `curl` and JavaScript examples that you can copy into your own project

## Quick start

1. Copy `.env.example` to `.env`.
2. Fill in your SuggestAPI base URL, API key, and engine or index name.
3. Open the provider folder that matches your current search stack.
4. Run the `curl` or JavaScript example and adjust the payload for your schema.

## Authentication

- Requests to `api.suggestapi.com` use a SuggestAPI API key.
- Client examples in this repo send the SuggestAPI key only.
- Provider credentials, when required, are managed behind SuggestAPI and are not sent from the client request.

## Repository layout

- `providers/`: public docs for each supported provider path
- `examples/`: runnable examples grouped by provider
- `compatibility-layer.md`: adapter and migration overview
- `provider-sdk.md`: provider integration concepts
- `architecture.md`: high-level public architecture notes
- `cloudflare-for-search.md`: edge and deployment positioning

## Providers

- [Algolia](providers/algolia.md)
- [Typesense](providers/typesense.md)
- [Shopify](providers/shopify.md)
- [Elasticsearch](providers/elasticsearch.md)
- [Meilisearch](providers/meilisearch.md)
- [SeekStorm](providers/seekstorm.md)
- [Vespa](providers/vespa.md)
- [Searchspring (legacy)](providers/searchspring.md)
- [Athos Commerce](providers/athos-commerce.md)
- [Upstash Search](providers/upstash-search.md)

## Example conventions

- Examples use placeholder URLs, keys, and index names only.
- Search requests go to SuggestAPI only. Provider selection is managed in SuggestAPI configuration after the request is received.
- Provider API keys, if a backend provider requires them, stay server-side behind SuggestAPI.
- Responses and field names are intentionally generic.
- Provider docs focus on request shape and migration guidance, not private implementation details.

## Status

Phase 1 examples:

- Algolia
- Typesense
- Shopify

Phase 2 examples:

- Elasticsearch
- Meilisearch
- SeekStorm
- Vespa

Phase 3 examples:

- Searchspring
- Athos Commerce
- Upstash Search
