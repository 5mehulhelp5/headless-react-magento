import { GraphQLClient } from 'graphql-request'

// const gqlClient = new GraphQLClient(
//     import.meta.env.VITE_GRAPHQL_URL
// )

const gqlClient = new GraphQLClient('/api/graphql');

export default gqlClient
