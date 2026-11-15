# Upstash Search Provider

Upstash Search indexes; configure endpoint and token on the SuggestAPI server.

## Client examples

- [cURL example](../examples/upstash-search/curl/search.sh)
- [JavaScript example](../examples/upstash-search/javascript/search.mjs)

These call **SuggestAPI**, not the provider directly. Selecting `upstash-search` and configuring provider credentials happens on the SuggestAPI backend. The public repository does not contain an operational server-side provider adapter.

## Backend adapter implementation checklist (not included)

- Verify the provider's current API endpoints, authentication, rate limits, and account entitlements.
- Translate SuggestAPI's normalized query, limit, filters, sort, and cursor/page inputs into the provider request.
- Normalize hits, IDs, variant IDs, facets, pagination, totals, scores, and errors without dropping merchandising semantics.
- Implement timeout, retry/backoff, and sensitive-header redaction.
- Add fixture-based contract tests and integration tests against a real test account.

**Provider-specific considerations:** Upstash keyword/semantic/hybrid query mapping, metadata filters, pagination and scoring; verify supported SDK/API features for the selected index.

## Status

Public client starter: available. Backend adapter: **not implemented in this repository**; do not mark provider production-supported until validated and deployed.
