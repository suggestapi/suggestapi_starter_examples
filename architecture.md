# Architecture

SuggestAPI sits between your application and one or more search providers.

For public starter examples, the important idea is simple:

- your app sends a search request to SuggestAPI
- SuggestAPI normalizes request and response handling
- SuggestAPI routes the request to the configured provider or adapter

This repo stays focused on the integration surface, not internal implementation details.
