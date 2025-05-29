import axios from "axios";
import {  React,createContext, useReducer, useState} from "react";
import Reservation from '../Reducer/Reservation/ReservationReducer'

export const ReservationProvider =  createContext();

export const ReservationContext = (props) => {
 
  const [addGuestToggler, setAddGuestToggler] = useState(false);
  const [guestAdults, setGuestAdults] = useState(1)
  const [guestChildren, setGuestChildren] = useState(0)


  const [checkInDate, setCheckInDate] = useState(new Date())
  const [checkOutDate, setCheckOutDate] = useState(new Date())

  const [listingID, setListingID] = useState(0)

  const [reserves, setReserves] = useState([])
  const [deleteButtonClick, setDeleteButtonClick] = useState(false)
   
  const InitialState = {
    reservations:[]
  }
  const Reservations = (e) => {
    
      dispatch({ type: "RESERVATIONS", payload: e });
    
  }
    const [state, dispatch] = useReducer(Reservation, InitialState);
     const checkInDay = new Date(checkInDate) ;
      const checkOutDay = new Date(checkOutDate);
      
    
       const CheckInDay = checkInDay.getDate()
       const CheckInMonth = checkInDay.getMonth()+1
       const CheckInYear = checkInDay.getFullYear()
    
    
       const CheckOutDay = checkOutDay.getDate()
       const CheckOutMonth = checkOutDay.getMonth()+1
       const CheckOutYear = checkOutDay.getFullYear()
    
    
      let unformartedDate = checkOutDay - checkInDay
      
      let NumberOfDays = unformartedDate / (1000 * 60 * 60 *24)
      const Days = Math.floor(NumberOfDays)
    
      const month = ["Months","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    
      const checkInMonthName = month[CheckInMonth]
      const checkOutMonthName = month[CheckOutMonth]
      
  return (
    <ReservationProvider.Provider value={{
      CheckInDay,
      Days,
      CheckOutMonth,
      checkOutMonthName,
      checkInMonthName,
      CheckOutYear,
      CheckOutDay,
      CheckInMonth,
      CheckInYear,
      guestAdults,
      guestChildren,
      checkInDate,
      checkOutDate,
      setGuestAdults,
      setGuestChildren,
      setCheckInDate,
      setCheckOutDate,
      listingID,
      setListingID,
      reserves,
      setReserves,
      addGuestToggler,
      setAddGuestToggler,
      reserves,
      setReserves,
      Reservations,
      rese:state.reservations,
      deleteButtonClick, 
      setDeleteButtonClick
     
    }}>
        {props.children}
    </ReservationProvider.Provider>
  )
}

// export default ReservationContext