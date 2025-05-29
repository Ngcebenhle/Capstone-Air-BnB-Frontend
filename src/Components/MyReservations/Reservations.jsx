import {React, useContext} from 'react'
import './Reservations.css'
import axios from 'axios'
import { LoginContext } from '../../Context/LogInContext'
import { ReservationProvider } from '../../Context/ReservationContext'


// e.preventDefault()
const Reservations = (props) => {
  const id = props.id
    const { isLoggedIn, token } = useContext(LoginContext);
      const {  deleteButtonClick, 
          setDeleteButtonClick} = useContext(ReservationProvider);
  return (
    
    <div className='container'>

        <div className="bookedBy">
            <span>{props.bookedBy}</span>
        </div>
        <div className="property">
        {props.location}
        </div>
        <div className="checkInDate">
        {props.checkIn}
        </div>
        <div className="checkOutDate">
        {props.checkOut}
        </div>
        <div className="action">
            <button onClick={(e) => {
                e.preventDefault()
                // console.log(id)
                setDeleteButtonClick(!deleteButtonClick)
                const params = new URLSearchParams();
                params.append("reservationId", id);
                //  console.log(id)
                axios
                .delete(`https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/reservations/delete/reservation/${id}`,
                  {headers: { Authorization: `Bearer ${token}` },},
                params)
                .then(function (response) {
                  // console.log(response);
                
                })
                .catch(function (error) {
                  console.log(error.response);
                });
            }}>
                Delete
            </button>
        </div>
            
    </div>
  )
}

export default Reservations