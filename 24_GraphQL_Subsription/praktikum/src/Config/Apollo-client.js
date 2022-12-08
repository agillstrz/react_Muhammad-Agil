import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://closing-pelican-41.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "RXrbu7P69hfuU62OTItOK5RbilsIYZZaXa27QRjYX9BmErHqQcVCF6429gID5cj7",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://closing-pelican-41.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "RXrbu7P69hfuU62OTItOK5RbilsIYZZaXa27QRjYX9BmErHqQcVCF6429gID5cj7",
      },
    },
  },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
