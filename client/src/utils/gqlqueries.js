import { gql, useMutation } from "@apollo/client";

export const ADD_SHAREHOLDER = gql`
  mutation addshareholder(
    $firstname: String!
    $address: String!
    $iban: String!
  ) {
    addshareholder(
      addShareholderInput: {
        firstname: $firstname
        address: $address
        iban: $iban
      }
    ) {
      id
      firstname
      address
      iban
      movie_id
      balance
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addmovie($title: String!, $share_value: String!) {
    addmovie(addMovieInput: { title: $title, share_value: $share_value }) {
      id
      title
      share_value
    }
  }
`;

export const FETCH_SHAREHOLDER_MOVIE_QUERY = gql`
  query getShareholders {
    getShareholders {
      id
      firstname
      address
      iban
      movie_id
      balance
    }
    getMovies {
      id
      title
      share_value
    }
  }
`;

export const FETCH_MOVIE_QUERY = gql`
  query getMovies {
    getMovies {
      id
      title
      share_value
    }
  }
`;

export const FETCH_SHAREHOLDER_QUERY = gql`
  query getShareholders {
    getShareholders {
      id
      firstname
      address
      iban
      movie_id
      balance
    }
  }
`;
