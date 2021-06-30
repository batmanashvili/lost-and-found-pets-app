import React, { useReducer } from "react";

export const initialState = {
  authenticated: false,
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { authenticated: true };
    case "SIGNIN":
      return { authenticated: true };
    case "SIGNOUT":
      return { authenticated: false };
    case "GET_AUTH_STATE":
      return state;
    default:
      return state;
  }
};

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
