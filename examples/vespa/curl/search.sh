#!/usr/bin/env bash

curl -X POST "${SUGGESTAPI_BASE_URL}/v1/search" \
  -H "Authorization: Bearer ${SUGGESTAPI_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "engine": "'"${SUGGESTAPI_ENGINE}"'",
    "query": "'"${SUGGESTAPI_QUERY}"'",
    "limit": 10
  }'
