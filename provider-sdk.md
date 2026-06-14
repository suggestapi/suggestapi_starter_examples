# Provider SDK

Provider integrations follow a simple pattern:

- accept a normalized search request
- transform it into the target provider request shape
- execute the provider request
- normalize the response back into a stable SuggestAPI payload

This repository only covers public integration concepts and example request shapes.
