import { React, createContext, useState, useEffect } from "react";
import axios from "axios";

export const LocationSearch = createContext();

/////////////////////////////////////////////////////


const LocationSearchContext = (props) => {
   
    const [location, setLocation] = useState([])  // List of all available Location 
    const [selectedLocation, setSelectedLocation] = useState()
    const [selectedListing, setSelectedListing] = useState()
   
    
  return (
    <LocationSearch.Provider value={{
      selectedLocation,
      setSelectedLocation,
      location,
      setLocation,
      selectedListing, 
      setSelectedListing
    }}>
        {props.children}
    </LocationSearch.Provider>
  )
}

export default LocationSearchContext