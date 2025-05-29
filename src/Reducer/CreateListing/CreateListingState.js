import { React, createContext, useReducer, useState } from "react";
import { CreateListing } from "./CreateListingReducer";

export const listingDetails = createContext();

// import React from 'react'
// import { type } from "@testing-library/user-event/dist/type";

export const CreateListingState = (props) => {

  const [listingFormDetails, setListingFormDetail] = useState({
    images: [],
    type: null,
    listingName: null,
    location: null,
    guests: null,
    bedrooms: null,
    bathrooms:null,
    amenities: [],
    rating:null,
    reviews: 320,
    price: null,
    title: null,
    weeklyDiscount:null,
    cleaningFee: null,
    serviceFee: null,
    occupancyTaxes:null,
    enhancedCleaning: null,
    selfCheckIn: null,
    description: null,
    cleanliness: null,
    communication:null,
    checkIn: null,
    accuracy: null,
    locationRating:null,
    value: null,
  })



  const [res, setRes] = useState(true);
  const [list, setList] = useState(false);
  const [form, setForm] = useState(false);


  const [updateListing, setUpdateListing] = useState()
  
  const InitialState = {
    images: [],
    listingName: null,
    type: null,
    location: null,
    guests: null,
    bedrooms: null,
    bathrooms:null,
    amenities: [],
    rating:null,
    reviews: 320,
    price: null,
    title: null,
    weeklyDiscount:null,
    cleaningFee: null,
    serviceFee: null,
    occupancyTaxes:null,
    enhancedCleaning: null,
    selfCheckIn: null,
    description: null,
    cleanliness: null,
    communication:null,
    checkIn: null,
    accuracy: null,
    locationRating:null,
    value: null,
  };

  const [state, dispatch] = useReducer(CreateListing, InitialState);

  const changeInput = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const addImage = (e) => {
    dispatch({ type: "ADD_IMAGES", payload: e });

    // dispatchEvent({type: "ADD_AMENITIES", payload: ameni})
  };

  const addAmenitiesMethod = (e) => {
    dispatch({ type: "ADD_AMENITIES", payload: e });
  };

  const UpdateAll= (e) => {
    dispatch({ 
      type: "UPDATE_ALL", 
      payload: { location: e.location , 
                 name: e.target.name, value: e.target.value
      },
     
      
    });
  };
  return (
    <listingDetails.Provider
      value={{
        updateListing,
        setUpdateListing,
        state,
        changeInput,
        addImage,
        addAmenitiesMethod,
        images: state.images,
        type: state.type,
        location: state.location,
        guests: state.guests,
        bedrooms: state.bedrooms,
        bathrooms: state.bathrooms,
        amenities: state.amenities,
        rating: state.rating,
        reviews: state.reviews,
        price: state.price,
        title: state.title,
        weeklyDiscount: state.weeklyDiscount,
        cleaningFee: state.cleaningFee,
        serviceFee: state.serviceFee,
        occupancyTaxes: state.occupancyTaxes,
        enhancedCleaning: state.enhancedCleaning,
        selfCheckIn: state.selfCheckIn,
        description: state.description,
        cleanliness: state.cleanliness,
        communication: state.communication,
        checkIn:state.checkIn,
        accuracy: state.accuracy,
        locationRating: state.locationRating,
        listingName: state.listingName,
        value: state.value,
        res, setRes,
        list, setList,
        form, setForm,
        listingFormDetails, 
        setListingFormDetail,
        UpdateAll
      }}
    >
      {props.children}
    </listingDetails.Provider>
  );
};
