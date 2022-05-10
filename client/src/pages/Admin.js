import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

import { gql, useMutation, useQuery } from "@apollo/client";

import {
  ADD_SHAREHOLDER,
  ADD_MOVIE,
  FETCH_SHAREHOLDER_MOVIE_QUERY,
} from "../utils/gqlqueries";

function Admin() {
  //QUERIES

  let dataMovies;
  let dataShareholders;
  const { data } = useQuery(FETCH_SHAREHOLDER_MOVIE_QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first", // Used for subsequent executions
  });
  if (data) {
    console.log("Working");
    console.log(data);

    dataMovies = data.getMovies;
    dataShareholders = data.getShareholders;
  }

  //SHAREHOLDER FIELDS
  const [shareholderValue, setShareholderValue] = useState({
    firstname: "",
    address: "",
    iban: "",
  });

  const onChangeShareholder = (event) => {
    setShareholderValue({
      ...shareholderValue,
      [event.target.name]: event.target.value,
    });
  };

  const [addShareholder, { loading }] = useMutation(ADD_SHAREHOLDER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: shareholderValue,
    refetchQueries: [{ query: FETCH_SHAREHOLDER_MOVIE_QUERY }],
  });

  const onSubmitShareholder = (event) => {
    event.preventDefault();

    setShareholderValue({
      firstname: "",
      address: "",
      iban: "",
    });

    addShareholder();
  };

  //MOVIE FIELDS
  const [movieValue, setMovieValue] = useState({
    title: "",
    share_value: "",
  });

  const onChangeMovie = (event) => {
    setMovieValue({
      ...movieValue,
      [event.target.name]: event.target.value,
    });
  };

  const [addMovie, {}] = useMutation(ADD_MOVIE, {
    update(proxy, result) {
      console.log(result);
    },
    variables: movieValue,
    refetchQueries: [{ query: FETCH_SHAREHOLDER_MOVIE_QUERY }],
  });

  const onSubmitMovie = (event) => {
    event.preventDefault();
    setMovieValue({
      title: "",
      share_value: "",
    });
    addMovie();
  };

  return (
    <>
      <div className="shareholderDiv">
        <h2>Add a new shareholder</h2>
        <Form onSubmit={onSubmitShareholder}>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              name="firstname"
              value={shareholderValue.firstname}
              onChange={onChangeShareholder}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
              placeholder="Address"
              name="address"
              value={shareholderValue.address}
              onChange={onChangeShareholder}
            />
          </Form.Field>
          <Form.Field>
            <label>IBAN</label>
            <input
              placeholder="IBAN"
              name="iban"
              value={shareholderValue.iban}
              onChange={onChangeShareholder}
            />
          </Form.Field>

          <Button type="submit">Add shareholder</Button>
        </Form>
      </div>

      <div className="movieDiv">
        <h2>Add a new movie</h2>
        <Form onSubmit={onSubmitMovie}>
          <Form.Field>
            <label>Movie Title</label>
            <input
              placeholder="Movie Title"
              onChange={onChangeMovie}
              name="title"
              value={movieValue.title}
            />
          </Form.Field>

          <Form.Field>
            <label>Share value</label>
            <input
              placeholder="Share value"
              onChange={onChangeMovie}
              name="share_value"
              value={movieValue.share_value}
            />
          </Form.Field>

          <Button type="submit">Add movie</Button>
        </Form>
      </div>

      <div className="transferMovieDiv">
        <h2>Transfer movie to a shareholder</h2>
        <Form>
          {(() => {
            if (data) {
              return (
                <Form.Group widths="equal">
                  <Form.Field
                    label="Select the movie (ID) you want to transfer"
                    control="select"
                  >
                    {dataMovies.map((movies) => {
                      return (
                        <option value={movies.id} key={movies.id}>
                          {movies.id}, {movies.title}
                        </option>
                      );
                    })}
                  </Form.Field>

                  <Form.Field
                    label="Select the shareholder (ID)"
                    control="select"
                  >
                    {dataShareholders.map((shareholders) => {
                      if (shareholders.movie_id == 0) {
                        //SHOW ONLY SHAREHOLDERS THAT DON'T HAVE A MOVIE
                        return (
                          <option value={shareholders.id} key={shareholders.id}>
                            {shareholders.id}, {shareholders.firstname}
                          </option>
                        );
                      }
                    })}
                  </Form.Field>
                </Form.Group>
              );
            }
          })()}
          <Button type="submit">Transfer movie</Button>
        </Form>
      </div>
    </>
  );
}

export default Admin;
