import React from "react";

import { Table } from "semantic-ui-react";

import { gql, useQuery } from "@apollo/client";

import { FETCH_MOVIE_QUERY } from "../utils/gqlqueries";

function Movies() {
  const { loading, data, error } = useQuery(FETCH_MOVIE_QUERY, {
    fetchPolicy: "network-only",
  });
  if (data) {
    console.log(data.getMovies);
  }

  return (
    <>
      <h1>List of movies</h1>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Share value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {(() => {
          if (data) {
            return (
              <Table.Body>
                {data.getMovies.map((movies) => {
                  return (
                    <Table.Row key={movies.id}>
                      <Table.Cell>{movies.id} </Table.Cell>
                      <Table.Cell>{movies.title}</Table.Cell>
                      <Table.Cell>{movies.share_value}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            );
          }
        })()}
      </Table>
    </>
  );
}

export default Movies;
