# Typesense InstantSearch Adapter Example

Use this example when your frontend uses InstantSearch UI components with a Typesense-compatible adapter layer.

The browser talks to SuggestAPI, and SuggestAPI decides which provider configuration to use after the request is received.
Only the SuggestAPI key is used in the client. Any provider-side credential stays behind SuggestAPI.

Files:

- [package.json](./package.json)
- [app.js](./app.js)
- [index.html](./index.html)

Install:

```bash
npm install
```

Then replace the placeholder values at the top of `app.js`.
