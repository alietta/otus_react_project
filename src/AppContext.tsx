import React, { createContext, useReducer } from 'react';

const initialState = {
  name: '',
  isAuth: true,
  loader: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
        name: action.payload
      }
    case "LOGOUT":
      return {
        ...state,
        isAuth: true,
        name: '',
      }
    case "LOADER_SHOW":
      return {
        ...state,
        loader: true,
      }
    case "LOADER_HIDE":
      return {
        ...state,
        loader: false,
      }
    default:
      return state
  }
}

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
  const value = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

