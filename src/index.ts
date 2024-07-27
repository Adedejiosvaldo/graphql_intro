import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./data/schema";
import db from "./_db";
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  //SCHEMA - describes the shape of the data that the server can send and receive
  //    Type def -> Def of different types we have on the GraphQL server
  //

  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log(`🚀  Server ready at: ${url}`);
