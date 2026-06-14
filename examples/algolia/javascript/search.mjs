const baseUrl = process.env.SUGGESTAPI_BASE_URL;
const apiKey = process.env.SUGGESTAPI_API_KEY;
const engine = process.env.SUGGESTAPI_ENGINE;
const query = process.env.SUGGESTAPI_QUERY || "wireless headphones";

const response = await fetch(`${baseUrl}/v1/search`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    engine,
    query,
    limit: 10,
  }),
});

console.log(JSON.stringify(await response.json(), null, 2));
