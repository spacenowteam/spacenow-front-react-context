import React, { createContext, useReducer, useContext } from 'react';
import { listingReducer, initialState } from "../reducers/listing";

export const ListingContext = createContext();

const ListingProvider = props => {

    const contextValue = useReducer(listingReducer, initialState);
    
    return (
        <ListingContext.Provider value={contextValue}>
            { props.children }
        </ListingContext.Provider>
    )
    
}

export default ListingProvider

export const useListing = () => {
    return useContext(ListingContext)
}