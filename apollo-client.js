import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clevtdags44dp01szbi7o4c87/master",
    cache: new InMemoryCache(),
});

export default client;

