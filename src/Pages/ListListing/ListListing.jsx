import { React, useEffect, useState, useContext } from "react";
import "./ListListing.css";
import ListListingNavSearch from "../../Components/ListListingNavSearch/ListListingNavSearch";
import NavUserTab from "../../Components/NavUserTab/NavUserTab";
import { ReactComponent as LogoRed } from "../../Assets/Logo_Red.svg";
import { ReactComponent as SearchIcon } from "../../Assets/Search.svg";
import { ReactComponent as Filter } from "../../Assets/Small_FIlter.svg";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ListingCard from "../../Components/ListingCard/ListingCard";
import { LocationSearch } from "../../Context/LocationSearchContext";
import { locationDetails } from "../../Reducer/Location/LocationState";


const ListListing = () => {
  
  const [listingCards, setListingCards] = useState();

  // Location context
  const { location } = useContext(LocationSearch);

  const {  selectLocation,
    selectListingId,
    selectedLocation,
    selectedListingId} =
useContext(locationDetails);


  // redirect
  const history = useHistory();

  // get the list of the listing of the selected location
  // double check the link
  const params = new URLSearchParams();
  params.append("search", selectedLocation);

  const listOfListings = useEffect(() => {
    axios
      .post(`https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/accommodation/listing/location`, params)
      .then(function (response) {
        // set listing
        const data = response.data.listings;
        setListingCards(data)
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }, [selectedLocation,listingCards]);


  return (
    <div className="listListingPage">

      <div className="listListingNav">
        <div
          className="listListingLogo"
          onClick={(e) => {
            e.preventDefault();
            history.push("/");
          }}
        >
          <LogoRed />
        </div>

        <div className="middleSection">
          <ListListingNavSearch/>
          {/* <SearchIcon /> */}
        </div>

        <div className="listListingNavUserProfile">
          <div>
            <NavUserTab />
          </div>
        </div>
      </div>

      <p className="NoListings">{location.length}  Listings in:  {selectedLocation}</p>

      <div className="filterRow">
        <div className="filters">
          <div className="filterList">
            <div className="filterOptions">
              <button> Price</button>
              {/* <button>Type Of Place</button> */}
              <button>Free Cancellation</button>
              <button>Washer</button>
              <button>Self Check-In</button>
              <button>Wi-Fi</button>
              <button>Kitchen</button>
              <button>Air Conditioning</button>
              <button>Free Parking</button>
              <button>Dryer</button>
              <button>Dedicated Workspace</button>
              <button>Pets</button>
              <button>Smoking</button>
              <button>Parties Allowed</button>
              <button>More</button>
            </div>
          </div>

          <div className="filterButton">
            <div>
              <Filter />
            </div>
            <span>Filter</span>
          </div>
        </div>
      </div>

      <div className="listListingPageListings">
        {/* Listing Component */}
        {listingCards     
        // <h3>{listing._id}</h3>
          ? listingCards.map((listing) => {
              //pump the listing info through props to the card
              return (
                  <ListingCard
                  key={listing._id}
                  value={listing._id}
                  amenities={listing.amenities}
                  bedrooms={listing.bedrooms}
                  bathrooms={listing.bathrooms}
                  type={listing.type}
                  guest={listing.guest}
                  ratings={listing.rating}
                  review={listing.reviews}
                  price={listing.price}
                  image={listing.images[0]}
                  name={listing.location}
                /> 
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ListListing;
