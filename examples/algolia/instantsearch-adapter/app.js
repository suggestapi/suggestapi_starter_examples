import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { searchBox, hits, pagination } from "instantsearch.js/es/widgets";

const config = {
  appId: "replace-me",
  apiKey: "replace-me",
  engine: "products",
};

const searchClient = algoliasearch(
  config.appId,
  config.apiKey,
  {
    hosts: [
      {
        url: "api.suggestapi.com",
        protocol: "https",
      },
    ],
  },
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
