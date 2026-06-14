# Algolia InstantSearch Adapter Example

Use this example when your frontend already uses Algolia InstantSearch and you want SuggestAPI to sit behind the existing search client shape.

The request still goes to SuggestAPI. The provider is selected by SuggestAPI configuration after the request is received.
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
