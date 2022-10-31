import { ApolloClient, InMemoryCache } from "@apollo/client";
import CONST from "../utils/constan";
const client = new ApolloClient({
  uri: CONST.GRAPHQL_BASE_URL,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": CONST.HASURA_SECRET,
  },
});

export default client;
