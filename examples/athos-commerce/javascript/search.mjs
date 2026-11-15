const required = ["SUGGESTAPI_BASE_URL", "SUGGESTAPI_API_KEY", "SUGGESTAPI_ENGINE"];
for (const key of required) {
  if (!process.env[key]) throw new Error(`Missing environment variable: ${key}`);
}
const baseUrl = process.env.SUGGESTAPI_BASE_URL.replace(/\/$/, "");
const response = await fetch(`${baseUrl}/v1/search`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.SUGGESTAPI_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    engine: process.env.SUGGESTAPI_ENGINE,
    query: process.env.SUGGESTAPI_QUERY || "wireless headphones",
    limit: 10,
  }),
});
const body = await response.text();
if (!response.ok) throw new Error(`SuggestAPI returned HTTP ${response.status}: ${body}`);
try { console.log(JSON.stringify(JSON.parse(body), null, 2)); }
catch { console.log(body); }
