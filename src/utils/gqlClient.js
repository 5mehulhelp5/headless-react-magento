import { GraphQLClient } from 'graphql-request'

// const gqlClient = new GraphQLClient(
//     import.meta.env.VITE_GRAPHQL_URL
// )

//const gqlClient = new GraphQLClient('/services/graphql');
const gqlClient = new GraphQLClient(
  `${window.location.origin}/services/graphql`
)

export default gqlClient
