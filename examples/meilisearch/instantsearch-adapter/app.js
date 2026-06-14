import instantsearch from "instantsearch.js";
import { searchBox, hits, pagination } from "instantsearch.js/es/widgets";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const config = {
  baseUrl: "https://api.suggestapi.com",
  apiKey: "replace-me",
  engine: "products",
};

const { searchClient } = instantMeiliSearch(
  config.baseUrl,
  config.apiKey,
);

const search = instantsearch({
  indexName: config.engine,
  searchClient,
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
