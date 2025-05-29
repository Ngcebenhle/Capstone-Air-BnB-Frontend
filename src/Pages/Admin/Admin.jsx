import { React, useContext, useEffect, useState } from "react";
import "./Admin.css";
import Reservations from "../../Components/MyReservations/Reservations";
import { ReactComponent as LogoRed } from "../../Assets/Logo_Red.svg";
import NavUserTab from "../../Components/NavUserTab/NavUserTab";
import CreateListingForm from "../../Components/CreateListingForm/CreateListingForm";
import Footer from "../../Components/Footer/Footer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ReservationProvider } from "../../Context/ReservationContext";
import axios from "axios";
import { LoginContext } from "../../Context/LogInContext";
import { listingDetails } from "../../Reducer/CreateListing/CreateListingState";
import Card from "../../Components/AdminListingCard/Card";

const Admin = () => {
  const [reservations, setReservations] = useState([]);
  const [adminListing, setAdminListing] = useState();
  const { isLoggedIn, token,role } = useContext(LoginContext);
  const { res, setRes, list, setList, form, setForm } =
    useContext(listingDetails);
    const { setListingID, listingID, deleteButtonClick, 
         } = useContext(ReservationProvider);
  const history = useHistory();

  const SetListings = (data) => {
    setAdminListing(data)
  }
  // Reservation
  useEffect(() => {

    if(role == 'user'){
           axios
      .get("http://localhost:8000/api/reservations/user/reservations", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        // console.log(response.data)
        setReservations(response.data.Reservations);
      })
      .catch(function (error) {
        console.log(error.response);
        // console.log(token);
      });
    }
    else{
        axios
      .get("https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/reservations/admin/reservations", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        // console.log(response.data)
        setReservations(response.data.Reservations);

        SetListings(response.data.accomodatins)
        // setAdminListing(response.data.accomodatins)
      })
      .catch(function (error) {
        console.log(error.response);
        // console.log(token);
      });
    }
    axios
      .get("https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/reservations/admin/reservations", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        // console.log(response.data)
        setReservations(response.data.Reservations);

        SetListings(response.data.accomodatins)
        // setAdminListing(response.data.accomodatins)
      })
      .catch(function (error) {
        console.log(error.response);
        // console.log(token);
      });
  }, [isLoggedIn,deleteButtonClick]);
  // , reservations

  return (
    <div>
      <div className="main">
    
        <div className="adminNav">
          <div
            className="adminLogo"
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
            }}
          >
            <LogoRed />
          </div>

          <div className="userProfile">
            <NavUserTab />
          </div>
        </div>
        <div className="adminNavButtons">
          <div className="navigation">
            <button
              onClick={(e) => {
                e.preventDefault();

                setRes(true);
                setList(false);
                setForm(false);
              }}
            >
              View reservations
              {/* View only listing reserved that belong to the Logged in Admin */}
            </button>

             {role == 'host' ? 
             <div>
              <button
              onClick={(e) => {
                e.preventDefault();

                setRes(false);
                setList(true);
                setForm(false);


              }}
            >
              View Listing
              {/* read only listing that belong to the logged in ID */}
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();

                setRes(false);
                setList(false);
                setForm(true);
              }}
            >
              Create Listing
              {/* Open Creat Linsting form */}
            </button>
             </div>  : null}
            
          </div>
        </div>
        <div className="adminPages">
          {res ? (
            <div className="reservationsList" id="resList">
              <h2>My Reservations</h2>

              <div className="container">
                <div className="bookedBy">
                  <span>Booked By</span>
                </div>

                <div className="property">
                  <span>Property</span>
                </div>

                <div className="checkInDate">
                  <span>Check In Date</span>
                </div>

                <div className="checkOutDate">
                  <span>Check out Date</span>
                </div>

                <div className="action">
                  <span>Action</span>
                </div>
              </div>

              {reservations
                ? reservations.map((rev) => {
                    // console.log(rev)
                    return (
                      <Reservations
                        key={rev._id}
                        id={rev._id}
                        checkIn={rev.checkInDate}
                        checkOut={rev.checkOutDate}
                        bedrooms={rev.bedrooms}
                        bookedBy={rev.username}
                        location={rev.accommodationLocation}
                      />
                    );
                  })
                : null}
            </div>
          ) : list ? (
            <div className="listingsList" id="accommList">

{adminListing     
        // <h3>{listing._id}</h3>
          ? adminListing.map((listing) => {
              //pump the listing info through props to the card
              return (
                  <Card
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
          ) : form ? (
            <div className="createlisting" id="">
              <CreateListingForm />
            </div>
          ) : null}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Admin;
