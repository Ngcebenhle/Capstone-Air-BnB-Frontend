import { React, useContext } from "react";
import "./ListingCard.css";
import { useHistory } from "react-router-dom";
import { ReservationProvider } from "../../Context/ReservationContext";
import { LoginContext } from "../../Context/LogInContext";
import { listingDetails } from "../../Reducer/CreateListing/CreateListingState";
import axios from "axios";
import { locationDetails } from "../../Reducer/Location/LocationState";
import { CreateListingState } from "../../Reducer/CreateListing/CreateListingState";


const ListingCard = (props) => {
  const key = props.Key;
  const value = props.value;
  const amenities = props.amenities;
  const bedrooms = props.bedrooms;
  const bathrooms = props.bathrooms;
  const type = props.type;
  const guest = props.guest;
  const ratings = props.ratings;
  const review = props.review;
  const price = props.price;
  const image = props.image;
  const name = props.name;
  // const displayImage = props.displayImage
  const {  setRes,
     setList,
    setForm} = useContext(listingDetails)

  const { token } = useContext(LoginContext);
  const { setListingID, listingID } = useContext(ReservationProvider);
  const { user,role } = useContext(LoginContext);
  const history = useHistory();

  const {updateListing,
         setUpdateListing,
         listingFormDetails, 
        UpdateAll,
         setListingFormDetail}  = useContext(listingDetails);

  const {   state,
           selectListingId,
           selectedListingIdResult,
           selectedListingId} =
useContext(locationDetails);

  const handleviewListing = (e) => {
    e.preventDefault()
    // get the listing id
    // console.log(selectedListingId)
    // populate the listing page with its information
    selectListingId(value)
    // redirect to listing page
    history.push("listing");
  };
  /*click event on the content div and redirect  
      click event on the content div and redirect,

      make sure to keep the ide of each separate listing
      uniqe
        */

  // Only if logged in as Admin Show
  // click event on the update button
  // click event on the delete button

  return (

    <div className="listingCardContainer">
      
      <div className="content" onClick={handleviewListing}>
        <div className="displayImage">
       
          <img src={`https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/Uploads/`+image} />
        
        </div>

        <div className="displayData">
          <div className="listingDetails">
            <div className="location-name">
              {/* <span>Location / Name in small font and gray text</span> */}
              <span>{type}</span>

              {/* <h3>Location / Name title</h3> */}
              <h3>{name}</h3>
            </div>

            <div className="likeIcon">
              <span>
                Heart
                <i>{/* heart toggle icon */}</i>
              </span>
            </div>
          </div>

          <hr />

          <div className="listingDescription">
            {/* Number of bedrooms, guest number, 
                    type of location, amendeties */}
            <div>
              <span>{bedrooms}.</span>
              <span>{guest}</span>
              <span>{type}</span>
              <span>{bathrooms}</span>
            </div>

            <div>
              {/* {amenities.map((ameni) => {
                return <span>{ameni}</span>;
              })} */}

              <span>{amenities} .</span>
              {/* <span>Data .</span>
              <span>broken .</span>
              <span>down</span> */}
            </div> 
          </div>

          <hr />

          <div className="ratingPrice">
            <div className="rating">
              <span>{ratings}</span>
              {/* <span>Rating star</span> */}
              <span>{review}</span>
            </div>

            <div className="price">
              <span className="price" id="price">
                {price}
              </span>
              <span>/night</span>
            </div>
          </div>
        </div>
      </div>

       {/* if user type === host  then display*/}

      {/* { role == 'host' ? (
        <div className="adminButtons">

          <button
            className="update"
            onClick={(e) => {
              e.preventDefault()
              //retrive the selected listing data and populate the form
              // send updated data bac to 
                // setListingID(value);
                selectListingId(value)
                // console.log(selectedListingId)
              const params = new URLSearchParams();
              params.append("search", value);
              axios
              .post("https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/accommodation/listing/id",
                params
                
              )
              .then(function (response) {
              // console.log(response)
                const data = response.data.listings;
                console.log(data)
                setUpdateListing(data)
                
                // UpdateAll(data)
                data.map((updateListingDetails) => {
                  // console.log(updateListingDetails)
                  setListingFormDetail({
                    ...listingFormDetails,
                    // images: [],
                    listingID:updateListingDetails._id,
                    listingName:updateListingDetails.listingName,
                    type: updateListingDetails.type,
                    location:updateListingDetails.location,
                    guests: updateListingDetails.guests,
                    bedrooms: updateListingDetails.bedrooms,
                    bathrooms:updateListingDetails.bathrooms,
                    amenities: updateListingDetails.amenities,
                    rating:updateListingDetails.rating,
                    reviews: 320,
                    price:updateListingDetails.price,
                    title: updateListingDetails.title,
                    weeklyDiscount:updateListingDetails.weeklyDiscount,
                    cleaningFee:updateListingDetails.cleaningFee,
                    serviceFee: updateListingDetails.serviceFee,
                    occupancyTaxes:updateListingDetails.occupancyTaxes,
                    enhancedCleaning: updateListingDetails.enhancedCleaning,
                    selfCheckIn:updateListingDetails.selfCheckIn,
                    description:updateListingDetails.description,
                    cleanliness: updateListingDetails.specificRatings.cleanliness,
                    communication:updateListingDetails.specificRatings.communication,
                    checkIn: updateListingDetails.specificRatings.checkIn,
                    accuracy: updateListingDetails.specificRatings.accuracy,
                    locationRating:updateListingDetails.specificRatings.location,
                    // value: null,
  
                  });

                })
               
              
              
              })
              .catch(function (error) {
                console.log(error.response);
              });
              setRes(false);
              setList(false);
              setForm(true);
              
              history.push("/admin");
            }}
          >
            Update
          </button>

          <button
            className="delete"
            onClick={(e) => {
              e.preventDefault() 
              // const params = new URLSearchParams();
              // params.append("listingID", value);

              axios
                .delete(
                  `https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/accommodation/delete/accommodation/${value}`, 
                  { headers: { Authorization: `Bearer ${token}` } },
                  // params
                )
                
                .then(function (response) {
                  // console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            Delete
          </button>

        </div>
      ) : null} */}


    </div>

  );
};

export default ListingCard;
