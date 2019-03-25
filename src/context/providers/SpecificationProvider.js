import React, { createContext, useReducer, useContext } from 'react';
import { specificationReducer, initialState } from "../reducers/specification";

export const SpecificationContext = createContext();

const SpecificationProvider = props => {

    const contextValue = useReducer(specificationReducer, initialState);
    
    return (
        <SpecificationContext.Provider value={contextValue}>
            { props.children }
        </SpecificationContext.Provider>
    )
    
}

export default SpecificationProvider

export const useSpecification = () => {
    return useContext(SpecificationContext)
}