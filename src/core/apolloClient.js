import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'same-origin',
});

export const client = () => new ApolloClient({
  link,
  cache: new InMemoryCache()
});