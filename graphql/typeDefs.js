const { gql } = require("apollo-server");

module.exports = gql`
  type Movie {
    id: ID!
    title: String!
    share_value: String!
  }
  type Shareholder {
    id: ID!
    firstname: String!
    address: String!
    iban: String!
    movie_id: String!
    balance: String!
  }
  input AddShareholderInput {
    firstname: String!
    address: String!
    iban: String!
  }
  input AddMovieInput {
    title: String!
    share_value: String!
  }
  type Query {
    getMovies: [Movie]
    getShareholders: [Shareholder]
  }
  type Mutation {
    addshareholder(addShareholderInput: AddShareholderInput): Shareholder!
    addmovie(addMovieInput: AddMovieInput): Movie!
  }
`;
