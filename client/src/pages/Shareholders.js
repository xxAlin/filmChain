import React from "react";
import { Table } from "semantic-ui-react";

import { gql, useQuery } from "@apollo/client";

import { FETCH_SHAREHOLDER_QUERY } from "../utils/gqlqueries";

function Shareholders() {
  const { loading, data, error } = useQuery(FETCH_SHAREHOLDER_QUERY, {
    fetchPolicy: "network-only",
  });
  if (data) {
    console.log(data);
  }

  return (
    <>
      <h1>List of shareholders</h1>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>IBAN</Table.HeaderCell>
            <Table.HeaderCell>Movie ID</Table.HeaderCell>
            <Table.HeaderCell>Balance</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {(() => {
          if (data) {
            return (
              <Table.Body>
                {data.getShareholders.map((shareholders) => {
                  return (
                    <Table.Row key={shareholders.id}>
                      <Table.Cell>{shareholders.id} </Table.Cell>
                      <Table.Cell>{shareholders.firstname}</Table.Cell>
                      <Table.Cell>{shareholders.address} </Table.Cell>
                      <Table.Cell>{shareholders.iban}</Table.Cell>
                      <Table.Cell>{shareholders.movie_id} </Table.Cell>
                      <Table.Cell>{shareholders.balance} </Table.Cell>
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

export default Shareholders;
