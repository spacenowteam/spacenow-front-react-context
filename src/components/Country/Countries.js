import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Country from "./Country";

const GET_ALL_COUNTRIES = gql`
  {
    getCountries {
      id
      countryName
    }
  }
`;

const Countries = () => (
  <Query
    query={GET_ALL_COUNTRIES}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.getCountries.map((currentCountry) => 
        <Country country={currentCountry}></Country>
      )
    }}
  </Query>
);
export default Countries;