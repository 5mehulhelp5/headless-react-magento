import { GraphQLClient } from 'graphql-request'

const GQL_URL = import.meta.env.VITE_GRAPHQL_URL || 'https://demo2.tyrescart.ae/graphql'

const gqlClient = new GraphQLClient(GQL_URL, {
    headers: {
        'Content-Type': 'application/json',
        'Store':        'default',          // Magento store code
    },
})

export default gqlClient
