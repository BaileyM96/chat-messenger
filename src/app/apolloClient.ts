import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:3000/graphql/api",
    cache: new InMemoryCache()
});

export default client;