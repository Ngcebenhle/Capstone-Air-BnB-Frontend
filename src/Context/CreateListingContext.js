import { createContext, useState, React } from "react";
import { CreateListing } from "../Reducer/CreateListing/CreateListingReducer";
import instance from "../Axios";


export const CreateListingContext = createContext();

import React from 'react'

const CreateListingContext = () => {

    const initialState = { 
        images:[],
    
       };
  const [state, dispatch] = useReducer(CreateListingContext, initialState);

    // All create listing methods.
    
  const createListing = () => {

//     const response = await instance({
//     method: "post",
//     url: "/payments/create?total=" + getBasketTotal(basket) * 100, // how can i make this into an interger ??????????
//   });

 //empty state
dispatch({
    type: "LISTING_CREATED_SUCCESS",
  });
  }
  return (
    <CreateListingContext.Provider 
    value={{
         createListing
        }}>
        {props.children}
    </CreateListingContext.Provider>
  )
}

export default CreateListingContext