import React, { createContext, useContext, useReducer } from "react";

// Preparing The data Layer (To create The Data Layer by the help of (creatContext() Hook))
export const StateContext = createContext();

// in this Function (StateProvider) we say the DataLayer to whom(children),where(initialstate),and how(reducer) to set information by the help of one clever Hook (useReducer)..
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook(useContext()) Which Allow us to pull information form Data Layer .. Note It is a Function
export const useStateValue = () => useContext(StateContext);
