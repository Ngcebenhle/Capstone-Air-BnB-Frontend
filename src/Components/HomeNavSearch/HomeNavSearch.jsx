import { React, useEffect, useState, useContext } from "react";
import "./HomeNacSearch.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import { ReactComponent as Search } from "../../Assets/Search.svg";
import { LoginContext } from "../../Context/LogInContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ReservationProvider } from "../../Context/ReservationContext";
import { LocationSearch } from "../../Context/LocationSearchContext";
import GuestAdder from "../GuestAdder/GuestAdder";
import { locationDetails } from "../../Reducer/Location/LocationState";

const HomeNavSearch = () => {
  
  const [hoverOnGuestAdder, setHoverOnGuestAdder] = useState(false);
  const [locations, setLocations] = useState([])
  const { setSelectedLocation, location, setLocation } =
    useContext(LocationSearch);

    const { state,  
      selectLocation,
             selectListingId,
             selectedLocation,
             selectedListingId} =
    useContext(locationDetails);

  //  const locations = [];

  // Dates
  const { 
    checkInDate,  
    guestAdults,
    guestChildren,
    setGuestAdults, 
    setGuestChildren, 
    checkOutDate, 
    setCheckInDate, 
    setCheckOutDate,
    addGuestToggler,
    setAddGuestToggler,
    addGuest } = useContext(ReservationProvider);
 
  // Guest

  const history = useHistory();

  const isLoggedIn = useContext(LoginContext);

  // Reading Locations from database
  const res = useEffect(() => {
    axios
      .get("https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/accommodation/listing")
      .then(function (response) {
        
        const data = response.data.listings;

       // run through the array and pic os locations 
       data.map((loc) => {

           if(!locations.includes(loc.location)){
            locations.push(loc.location)
            
            // setLocations([...locations, loc.location]);
           }
        
          // <option key={loc._id} value={loc.id}>
          //   {loc.location}
          // </option>
        
      })

        setLocation(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);

  // Guest adder toggler function

 

  // Search Button Function
  const HandleSearchLocation = (e) => {
    e.preventDefault();
    history.push("/listListings");

  };
 
  
  // const addG =(e) => {
  //   addGuest(e)
  // }

  return (
    <div>
      <div className="homeNavSearch">
        <div className="location">
          <h4 className="headingText">Location</h4>
          {/* <span className='subText'>Where are you going ?</span> */}

          {/* Location Selection list /dropdown  */}

          <select
            onChange={(e) => {
              e.preventDefault();
              // setSelectedLocation(e.target.value);
              console.log(e.target.value)
              selectLocation(e.target.value)
              
            }}
          >
            <option></option>
              <option value={"all locations"}>All Locations</option>
            {locations
              ? locations.map((locationList) => {
                  return (
                    <option value={locationList.index}>
                      {locationList}
                     
                    </option>
                  );
                })
              : null}
          </select>
          {/* <h2>{locations}</h2> */}
        </div>

        <div className="checkIn">
          <h4 className="headingText">Check In</h4>
          {/* <span className='subText'>Add Date</span> */}

          <span>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => {
                setCheckInDate(date);
              }}
            />
          </span>
        </div>

        <div className="checkOut">
          <h4 className="headingText">Check Out</h4>
          {/* <span className='subText'>Add Date</span> */}
          <span>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => {
                setCheckOutDate(date);
              }}
            />
          </span>
          {/* selected={dates.checkOutDate} onChange={(date) => setDates({checkOutDate:date})} */}
        </div>

        <div className="guest">
          <h4 className="headingText" onClick={(e) => {
             e.preventDefault();
            setAddGuestToggler(true)
          }}>
            Guests
          </h4>
          <span className="subText" onClick = { (e) => {
             e.preventDefault();
            setAddGuestToggler(true)
          } }>
            Add Guests
          </span>
          {addGuestToggler && (
             <GuestAdder/>
          )}
           </div>

        <div className="searchIcon" onClick={HandleSearchLocation}>
          <Search />
        </div>

        {/* <div>
         {console.log(cID)}
         </div> */}
      </div>
    </div>
  );
};

export default HomeNavSearch;
