# Upstash Search starter

Use this folder after configuring the `upstash-search` provider in your SuggestAPI backend. See [provider notes](../../providers/upstash-search.md).

Both examples require `SUGGESTAPI_BASE_URL`, `SUGGESTAPI_API_KEY`, and `SUGGESTAPI_ENGINE`. Set `SUGGESTAPI_QUERY` optionally.

```bash
set -a; source .env; set +a
bash examples/upstash-search/curl/search.sh
node examples/upstash-search/javascript/search.mjs
```

These examples demonstrate client compatibility; they do not install or implement a backend adapter.
