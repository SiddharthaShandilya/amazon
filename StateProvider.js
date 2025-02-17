import React, { createContext, useContext, useReducer } from "react";

//Creating a data-layer
export const StateContext = createContext();

//wrap our app and provide the data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Pool information from the data layer
export const useStateValue = () => useContext(StateContext);
