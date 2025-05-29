import "./App.css";
import ListingCard from "./Components/ListingCard/ListingCard.jsx";
import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import { Route, Router, BrowserRouter, Switch } from "react-router-dom";
import ListListing from "./Pages/ListListing/ListListing";
import Listing from "./Pages/Listing/Listing.jsx";
import LogInPage from "./Pages/LogIn/LogInPage.jsx";
import Admin from "./Pages/Admin/Admin.jsx";
import NotFound from "./Pages/NotFound.jsx";
import CreateListingPage from "./Pages/CreateListingPage/CreateListingPage.jsx";
import axios from "axios";
// import instance from './axios.js';
function App() {


  // const homeWebApi = async () =>{
  //   // const response = await instance(
  //   //   method: "get",
  //   //   url: "/"
  //   // });
  // }

  // const logInWebApi = async () =>{

  //   // const web = {

  //   // username:'ngcebo',
  //   // password:123456789140,
  //   // role:'user'

  //   // }
  //   // const response = await instance({
  //   //   method: "POST",
  //   //   headers:{'content-type': 'application/x-www-form-urlencoded'},
  //   //   url: "/signUp",
  //   //   body: JSON.stringify(web)
  //   // });

  //   // console.log(response)

  //   // Log In\

  //   // axios.post('https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/user/login',{
  //   // })
  //   // .then(function (response) {
  //   //   console.log(response);
  //   //   // setMe(response)
  //   //   // console.log(me)
  //   // })
  //   // .catch(function (error) {
  //   //   console.log(error);
  //   // });

  //   // Reservation

  //   // axios.get('https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/reservations/user/reservations',{
  //   // })
  //   // .then(function (response) {
  //   //   console.log(response);
  //   //   // setMe(response)
  //   //   // console.log(me)
  //   // })
  //   // .catch(function (error) {
  //   //   console.log(error);
  //   // });

  //   // Listing / Accommodation

  //   // const params = new URLSearchParams();
  //   // params.append('username', username);
  //   // params.append('password', password);
  //   //

  //   // axios.get('https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/accommodation/listing',{
  //   // })
  //   // .then(function (response) {
  //   //   console.log(response);
  //   //   // setMe(response)
  //   //   // console.log(me)
  //   // })
  //   // .catch(function (error) {
  //   //   console.log(error);
  //   // });

  //   // const username = 'ngcebo'
  //   // const password = 123456789140
  //   // const role = 'user'

  //   // const params = new URLSearchParams();
  //   // params.append('username', username);
  //   // params.append('password', password);
  //   // params.append('role', role);

  //   // const send = await axios.post('https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/user/signUp',
  //   //  params
  //   // )
  //   // .then(function (response) {
  //   //   console.log(response);

  //   // })
  //   // .catch(function (error) {
  //   //   console.log(error.response.data);
  //   // });

  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* Home Routes */}
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/home">{/* <Home/> */}</Route>

          {/* Listing Routes  */}

          <Route path="/listListings">
            <ListListing />
          </Route>

          <Route path="/listing">
            <Listing />
          </Route>

          {/* LogIn Routes  */}
          <Route path="/logIn">
            <LogInPage />
          </Route>

          {/* Admin Routes  */}
          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/createListing">
            <CreateListingPage />
          </Route>
          <Route path="/reservations">
            <CreateListingPage />
          </Route>

          {/* Page Not Found Routes  */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
