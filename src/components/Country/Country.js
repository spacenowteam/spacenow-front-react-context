import React from 'react'
const Country = props => (
  <div key={props.country.id}>
    <p>{`${props.country.countryName}`}</p>
  </div>
)
export default Country
