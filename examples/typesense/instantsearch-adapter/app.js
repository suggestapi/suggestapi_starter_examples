import instantsearch from "instantsearch.js";
import { searchBox, hits, pagination } from "instantsearch.js/es/widgets";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const config = {
  apiKey: "replace-me",
  engine: "products",
};

const adapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: config.apiKey,
    nodes: [
      {
        host: "api.suggestapi.com",
        port: 443,
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "name,description",
  },
});

const search = instantsearch({
  indexName: config.engine,
  searchClient: adapter.searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchbox",
  }),
  hits({
    container: "#hits",
    templates: {
      item(hit) {
        return `
          <article>
            <strong>${hit.name || hit.title || "Untitled result"}</strong>
          </article>
        `;
      },
    },
  }),
  pagination({
    container: "#pagination",
  }),
]);

search.start();
