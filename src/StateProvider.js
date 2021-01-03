import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

export const StateProvider = ({ initialization, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialization)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
