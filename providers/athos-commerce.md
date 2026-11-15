# Athos Commerce Provider

Athos Commerce Site Search deployments; configure Athos site ID and credentials on the SuggestAPI server.

## Client examples

- [cURL example](../examples/athos-commerce/curl/search.sh)
- [JavaScript example](../examples/athos-commerce/javascript/search.mjs)

These call **SuggestAPI**, not the provider directly. Selecting `athos-commerce` and configuring provider credentials happens on the SuggestAPI backend. The public repository does not contain an operational server-side provider adapter.

## Backend adapter implementation checklist (not included)

- Verify the provider's current API endpoints, authentication, rate limits, and account entitlements.
- Translate SuggestAPI's normalized query, limit, filters, sort, and cursor/page inputs into the provider request.
- Normalize hits, IDs, variant IDs, facets, pagination, totals, scores, and errors without dropping merchandising semantics.
- Implement timeout, retry/backoff, and sensitive-header redaction.
- Add fixture-based contract tests and integration tests against a real test account.

**Provider-specific considerations:** Athos v1 search response mapping, product/variant identity, facets, sorting, pagination, and merchandising. Validate live account API contract before enabling.

## Status

Public client starter: available. Backend adapter: **not implemented in this repository**; do not mark provider production-supported until validated and deployed.
