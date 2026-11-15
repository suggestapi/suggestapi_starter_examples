# Searchspring (legacy) Provider

Legacy Searchspring search deployments; configure the Searchspring site ID and credentials on the SuggestAPI server.

## Client examples

- [cURL example](../examples/searchspring/curl/search.sh)
- [JavaScript example](../examples/searchspring/javascript/search.mjs)

These call **SuggestAPI**, not the provider directly. Selecting `searchspring` and configuring provider credentials happens on the SuggestAPI backend. The public repository does not contain an operational server-side provider adapter.

## Backend adapter implementation checklist (not included)

- Verify the provider's current API endpoints, authentication, rate limits, and account entitlements.
- Translate SuggestAPI's normalized query, limit, filters, sort, and cursor/page inputs into the provider request.
- Normalize hits, IDs, variant IDs, facets, pagination, totals, scores, and errors without dropping merchandising semantics.
- Implement timeout, retry/backoff, and sensitive-header redaction.
- Add fixture-based contract tests and integration tests against a real test account.

**Provider-specific considerations:** Legacy Searchspring search.json responses, facets, pagination, sorting, and merchandising metadata. Validate live account API contract before enabling.

## Status

Public client starter: available. Backend adapter: **not implemented in this repository**; do not mark provider production-supported until validated and deployed.
