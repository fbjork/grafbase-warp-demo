import { graph, connector, config } from "@grafbase/sdk";

const g = graph.Standalone();

const vendure = connector.GraphQL("Vendure", {
  url: "https://demo.vendure.io/shop-api",
});

g.datasource(vendure, { namespace: false });

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
  cache: {
    rules: [
      {
        types: ["Query"],
        maxAge: 120,
        staleWhileRevalidate: 120,
      },
    ],
  },
});
