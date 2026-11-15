#!/usr/bin/env bash
set -euo pipefail
: "${SUGGESTAPI_BASE_URL:?Set SUGGESTAPI_BASE_URL}"
: "${SUGGESTAPI_API_KEY:?Set SUGGESTAPI_API_KEY}"
: "${SUGGESTAPI_ENGINE:?Set SUGGESTAPI_ENGINE}"
# Use Node to JSON-encode values safely (queries can contain quotes).
payload="$(node -e 'console.log(JSON.stringify({engine:process.env.SUGGESTAPI_ENGINE,query:process.env.SUGGESTAPI_QUERY||"wireless headphones",limit:10}))')"
curl --fail-with-body --show-error --silent -X POST "${SUGGESTAPI_BASE_URL%/}/v1/search" \
  -H "Authorization: Bearer ${SUGGESTAPI_API_KEY}" \
  -H 'Content-Type: application/json' \
  --data "$payload"
echo
