import { React, useContext, useState } from "react";
import "./NavUserTab.css";
import { ReactComponent as UserProfile } from "../../Assets/NavUser/User_Profile.svg";
import { ReactComponent as Menu } from "../../Assets/NavUser/Menu.svg";
import { ReactComponent as World } from "../../Assets/NavUser/World.svg";
import { useHistory} from "react-router-dom";
import axios from "axios";
import {LoginContext} from "../../Context/LogInContext";
import {ReservationProvider} from "../../Context/ReservationContext";
//import context here


const NavUserTab = () => {

  const {isLoggedIn, 
    setIsLoggedIn, 
    setToken,  
    setUser, 
    setRole, 
    username, 
    token, user, 
    role} = useContext(LoginContext)
  const { setReserves} = useContext(ReservationProvider)

  const history = useHistory();

  const navUserToggler = (e) => {
    // drop down buttons active
    e.preventDefault()
    // if logged in or not different buttons display.

    setButtonClicked(!buttonClicked);
  };


  const [buttonClicked, setButtonClicked] = useState(false);

  return (

    <div className="user">
       
      <div className="userName" onClick={(e) => {
          e.preventDefault()
        //  Redirect to log in page 
        history.push("logIn");
      }}>
        {/* if isLoggedIn is true change the name/text to the User name  */}
        <span>{isLoggedIn ?  JSON.stringify(user)  : "Become a host"}</span>
        <div className="languageIcon">
          <span>
            <i>
              <World />
            </i>
          </span>
        </div>
      </div>

      <div className="profileIcon" onClick={navUserToggler}>
        <div className="menuIcon">
          <span>
            <i>
              {/* Menu Icon */}
              <Menu />
            </i>
          </span>
        </div>


        <div className="userProfile">
          <span>
            <i>
              <UserProfile />
            </i>
          </span>

        </div>

        {/* I am not sure of this operator is it will work or not but 
            try it out ****************************************************
              ***********************************************************
                *******************************************************
                  ************************************************ */}
        {buttonClicked && (
          <div className="menuItems">
            {/* Conditional rendering if logged in is true 
                Change Log in to Log out  and if is false vise versa
                and do not display Reservation Button */}

            {isLoggedIn ? (
              <div className="LoggedInButtons">
                <button
                  onClick={(e) => {
                    e.preventDefault()

                    setIsLoggedIn(false) 
                    setToken(null)
                    setUser(null)
                    setRole(null)
                    // redirect to Home Page Screen
                    history.push("/");
                  }}
                >
                  Sign Out
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault()

                   if (role === 'host'){
                    axios
                    .get(
                      "https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/reservations/admin/reservations",
                      { headers: {"Authorization" : `Bearer ${token}`} }
                    )
                    .then(function (response) {
                      // console.log(response);
                      setReserves(response.data)
                      //  alert successfull
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
            
                   }
                   else if(role === 'user'){
                    axios
                    .get(
                      "https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/reservations/user/reservations",
                      { headers: {"Authorization" : `Bearer ${token}`} }
                    )
                    .then(function (response) {
                      // console.log(response);
                      setReserves(response.data)
                      //  alert successfull
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
            
                   }
                    // Redirect to Reservation screen
                    history.push("/admin");
                  }}
                >
                  Reservations
                </button>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  // redirect to logIn Screen
                  history.push("/logIn");
                }}
              >
                Log In
              </button>
            )}
          </div>
        )}
      </div>

  
    </div>
    
  );
};

export default NavUserTab;


