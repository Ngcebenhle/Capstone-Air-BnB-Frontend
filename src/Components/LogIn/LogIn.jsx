import { React, useRef, useContext, useState } from "react";
import "./LogIn.css";
import { LoginContext } from "../../Context/LogInContext";
import axios from "axios";
import { json } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LogIn = () => {

  const { 
    Input, 
    role,setRole,
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    user,
    setUser,
    username,
    password} = useContext(LoginContext);

    const history = useHistory();


  const data = (e) => {
    Input(e);
  };

  const handleLogIn = (e) => {
    e.preventDefault()

    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    axios
      .post("https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/user/login", params)
      .then(function (response) {
        // set user, isloggedin and the tokens here
        
      
        setIsLoggedIn(true);
        setUser(username);
        setToken(response.data.accessToken);
        setRole(response.data.role)
        // console.log(response)
         
        // if (listingID) {
        //   //  go to listing of the selected listing
        //   history.push("listing");
        // } else {
        //   if (role === "host") {
        //     // send to admin page
        //     history.push("admin");
        //   } else if (role === "user") {
        //     //   send to home page
        //     history.push("/");
        //   }
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
    localStorage.setItem("currentUser", token);

    history.push('/')
  };

  //   Log Out Function
  const LogOut = () => {
    // dispatch({
    //   type: "INPUT",
    //   // payload: { name: e.target.name, value: e.target.value },
    // });
    localStorage.clear();
    setUser(null);
    setIsLoggedIn(false);
    setToken(null);
  };


  return (
    <div className="loginContainer">
      <div className="form">
        <h2>Log IN</h2>
        <h2>{user}</h2>

        <div className="texteares">
          <div className="username">
            <h5>Username</h5>
            <input type="text" name="username" id="" onChange={data} />
          </div>

          <div className="password">
            <h5>Password</h5>
            <input type="text" name="password" id="" onChange={data} />
          </div>
        </div>

        <span>
          <a href="">Forgot Password ?</a>
        </span>

        <button className="logInButton" onClick={handleLogIn}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default LogIn;
