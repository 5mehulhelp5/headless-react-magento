import { GraphQLClient } from 'graphql-request'

// In production on Vercel — use relative /graphql (Vercel proxies it)
// In local dev — Vite proxy handles it (vite.config.js)
const GQL_URL = import.meta.env.VITE_GRAPHQL_URL || '/graphql'

const gqlClient = new GraphQLClient(GQL_URL, {
    headers: {
        'Content-Type': 'application/json',
        'Store': 'default',
    },
})

export default gqlClient
