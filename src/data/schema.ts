const typeDefs = `#graphql
type Game {
    # ! means required
    id : ID!
    title : String!
    platform :[String!]!
    reviews : [Review!]
}

type Review{
    id :ID!
    rating : Int!
    content :String!
    game :Game!
    author :Author!
}

type Author {
    id :ID!
    name :String!
    verified :Boolean!
    reviews : [Review!]
}


# Query type is the entry point for all GraphQL queries
# It is the type that will be used to define all the queries that can be executed against the server
type Query {
    games : [Game!]!
    review (id:ID!) :Review
    game (id:ID!) :Game
    author (id:ID!) :Author
    reviews : [Review!]!
    authors : [Author!]!
}

type Mutation{
    deleteGame(id:ID!): [Game]
    addGame(game :AddGameInput!):Game
    updateGame(id:ID!, edits :UpdateGameInput!):Game
}

input AddGameInput {
    title : String!
    platform:[String!]!
}
input UpdateGameInput {
    title : String
    platform:[String!]
}
`;
export default typeDefs;
