import { createContext, useState, useReducer, useContext } from "react";
import React from "react";
import axios from "axios";
import { Airbnb } from "../Reducer/CreateListing/CreateListingReducer";
import { logIn } from "../Reducer/LogIn/LogInReducer";

import { ReservationProvider } from "./ReservationContext";

export const LoginContext = createContext();

export const LogInContext = (props) => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");

  const { listingID } = useContext(ReservationProvider);

  

  const InitialState = {
    username: null,
    password: null,
  };

  const [state, dispatch] = useReducer(logIn, InitialState);

  const Input = (e) => {
    dispatch({
      type: "INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };


  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        user,
        setUser,
        Input,
        role,
        setRole,
        username: state.username,
        password: state.password
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

// export default LogInContext;
