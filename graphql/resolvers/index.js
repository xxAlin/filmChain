const moviesResolvers = require("./movies");

const shareholdersResolvers = require("./shareholders");

module.exports = {
  Query: {
    ...moviesResolvers.Query,
    ...shareholdersResolvers.Query,
  },
  Mutation: {
    ...shareholdersResolvers.Mutation,
    ...moviesResolvers.Mutation,
  },
};
