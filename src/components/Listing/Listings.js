import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Listing from "./Listing";

const GET_ALL_LISTINGS = gql`
  {
    getAllListings {
      id
      title
    }
  }
`;

const Listings = () => (
  <Query
    query={GET_ALL_LISTINGS}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.allListings.map((currentListing) =>
        <Listing listing={currentListing}></Listing>
      )
    }}
  </Query>
);
export default Listings;