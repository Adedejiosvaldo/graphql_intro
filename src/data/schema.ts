export const typeDefs = `#graphql
type Game {
    # ! means required
    id : ID!
    title : String!
    platform :[String!]!
}


type Review{
    id :ID!
    rating : Int!
    content :String!
}

type Author {
    id :ID!
    name :String!
    verified :Boolean!
}


# Query type is the entry point for all GraphQL queries
# It is the type that will be used to define all the queries that can be executed against the server
type Query {
    games : [Game!]!
    reviews : [Review!]!
    authors : [Author!]!
}
`;
