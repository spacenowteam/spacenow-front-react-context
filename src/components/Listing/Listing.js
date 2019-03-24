import React from 'react';
const Listing = (props) => (
    <div key={props.listing.id}>
        <p>{`${props.listing.title}`}</p>
    </div>
);
export default Listing;