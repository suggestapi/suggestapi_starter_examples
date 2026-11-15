# Athos Commerce starter

Use this folder after configuring the `athos-commerce` provider in your SuggestAPI backend. See [provider notes](../../providers/athos-commerce.md).

Both examples require `SUGGESTAPI_BASE_URL`, `SUGGESTAPI_API_KEY`, and `SUGGESTAPI_ENGINE`. Set `SUGGESTAPI_QUERY` optionally.

```bash
set -a; source .env; set +a
bash examples/athos-commerce/curl/search.sh
node examples/athos-commerce/javascript/search.mjs
```

These examples demonstrate client compatibility; they do not install or implement a backend adapter.
