import { GraphQLClient } from 'graphql-request'

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL || 'graphql'

const URL = import.meta.env.DEV
    ? `${window.location.origin}/graphql`  // dev: use Vite proxy → magento.local
    : GRAPHQL_URL

const gqlClient = new GraphQLClient(URL)

export default gqlClient