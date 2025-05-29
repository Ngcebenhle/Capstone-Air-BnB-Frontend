import { React, useContext, useEffect, useState } from "react";
import "./ListSlistingNavSearch.css";
import { LocationSearch } from "../../Context/LocationSearchContext";
import { ReservationProvider } from "../../Context/ReservationContext";

// e.preventDefault()
const ListListingNavSearch = () => {
  const { setSelectedLocation, location } = useContext(LocationSearch);


  const { checkInDate, checkOutDate, guestAdults, guestChildren } =
    useContext(ReservationProvider);

     
      // const checkInMonth = checkInDate.getMonth() + 1;
      const checkInDay = checkInDate.getDay() ;
      const checkInYear = checkInDate.getYear() ;

      // const checkOutMonth = checkOutDate.getMonth() + 1;
      const checkOutDay = checkOutDate.getDay() ;
      const checkOutYear = checkOutDate.getYear() ;

      const checkInMonth = checkInDate.toLocaleString('default', { month: 'short' });
      const checkOutMonth = checkOutDate.toLocaleString('default', { month: 'short' });
  
    
    

  return (
    <div className="ListListingNavSearch">
      <div className="tabs">
        <div className="listListingLocation tab">
          {/* <span>{setSelectedLocation}</span> */}

          <select
            onChange={(e) => {
              e.preventDefault();
              setSelectedLocation(e.target.value);
            }}
          >
            <option value={"all loacations"}>All Locations</option>
            {location
              ? location.map((loc) => {
                  return (
                    <option key={loc._id} value={loc.id}>
                      {loc.location}
                    </option>
                  );
                })
              : null}
          </select>

        </div>

        <div className="dates tab">
          {/* <span>We </span> */}
          <span>{checkInMonth +'/'}</span>
          <span>{checkInDay +'-'}</span>
          <span>{checkOutDay +'/'}</span>
          {/* <span>{checkInYear}</span> */}
                {/* <span>-</span>
                <span>{checkOutDate}</span> */}
                {/* JSON.stringify(checkInDate) */}
        </div>

        <div className="guests tab">
          <span>{guestAdults + guestChildren}</span>
        </div>

        {/* <div className="searchIcon">
                <SearchIcon/>
            </div>  */}
      </div>
    </div>
  );
};

export default ListListingNavSearch;
