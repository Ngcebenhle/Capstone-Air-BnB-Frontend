import { React, createContext, useReducer, useState } from "react";
import { Location } from "./LocationReducer";

export const locationDetails = createContext();

// import React from 'react'
// import { type } from "@testing-library/user-event/dist/type";

export const LocationState = (props) => {
  // const [updateListing, setUpdateListing] = useState()
  const InitialState = {
    selectedLocation: null,
    selectedListingId: null
  };

  const [state, dispatch] = useReducer(Location, InitialState);

  const selectLocation = (e) => {
    dispatch({ type: "SELECT_LOCATION", payload: e });

    
  };

  const selectListingId = (e) => {
    dispatch({ type: "SELECT_LISTING", payload: e });
   
  };

  return (
    <locationDetails.Provider
      value={{
        state,
        selectLocation,
        selectListingId,
        selectedLocation:state.selectedLocation,
        selectedListingId:state.selectedListingId
      }}
    >
      {props.children}
    </locationDetails.Provider>
  );
};
