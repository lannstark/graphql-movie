import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "http://localhost:4000" // Where is GraphQL API
})

export default client;