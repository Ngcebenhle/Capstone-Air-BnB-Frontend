import { React, useContext, useEffect, useState } from "react";
import { LocationSearch } from "../../Context/LocationSearchContext";
import { ReservationProvider } from "../../Context/ReservationContext";


const ListingNavSearch = () => {
    const { selectedListing, location } = useContext(LocationSearch);


    const { checkInDate, checkOutDate, guestAdults, guestChildren, CheckOutDay,CheckInDay,checkOutMonthName } =
      useContext(ReservationProvider);
  
       
    
      
  return (
    <div className="ListListingNavSearch">
    <div className="tabs">
      <div className="listListingLocation tab">
         <span>{selectedListing.location}</span>
          {/* {selectedListing
            ? selectedListing.map((loc) => {
                return (
                    <span>{loc.location}</span>
                );
              })
            : null} */}
      
      </div>

      <div className="dates tab">
        {/* <span>We </span> */}
        <span>{`${checkOutMonthName} ${CheckInDay} - ${CheckOutDay}`}</span>
       
      </div>

      <div className="guests tab">
        <span>{guestAdults + guestChildren }</span>
      </div>

      {/* <div className="searchIcon">
              <SearchIcon/>
          </div>  */}
    </div>
  </div>
  )
}

export default ListingNavSearch