import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import typeDefs from "./data/schema.ts";
import { games, reviews, authors } from "./data/db.ts";
const resolvers = {
  Query: {
    games() {
      return games;
    },
    reviews() {
      return reviews;
    },
    authors() {
      return authors;
    },
    review(_: any, args: any) {
      return reviews.find((review) => review.id === args.id);
    },
    author(_: any, args: any) {
      return authors.find((author) => author.id === args.id);
    },
    game(_: any, args: any) {
      return games.find((game) => game.id === args.id);
    },
  },

  Game: {
    reviews(parent: any) {
      return reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent: any) {
      return reviews.filter((r) => r.author_id === parent.id);
    },
  },
  //   Review: {
  //     author(parent: any) {
  //       return reviews.find((author) => parent.id === author.author_id);
  //     },
  //     reviews(parent: any) {
  //       return games.find((g) => parent.game_id === g.id);
  //     },
  //   },

  Mutation: {
    deleteGame(_: any, args: any) {
      const game: any = games.filter((e) => e.id !== args.id);
      return game;
    },
    addGame(_: any, arg: any) {
      let game = {
        ...arg.game,
        id: Math.floor(Math.random() * 1000).toString(),
      };

      const gamesNew = games.push(game);
      return game;
    },
  },
};

//SCHEMA - describes the shape of the data that the server can send and receive
//    Type def -> Def of different types we have on the GraphQL server
//

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log(`🚀  Server ready at: ${url}`);
