import {React, useContext, useState }from 'react'
import { ReservationProvider } from '../../Context/ReservationContext';
import {ReactComponent as Close} from '../../Assets/Close.svg'
const GuestAdder = () => {
  

    const { 
        guestAdults,
        guestChildren,
        setGuestAdults, 
        setGuestChildren,
        setAddGuestToggler 
        
         } = useContext(ReservationProvider);

    const increaseGuestAdults = (e) => {
        e.preventDefault();
        setGuestAdults(guestAdults + 1);
      };
    
      const increaseGuestChildren = (e) => {
        e.preventDefault();
        setGuestChildren(guestChildren + 1);
      };
    
      const decreaseGuestAdults = (e) => {
        e.preventDefault();
        setGuestAdults(guestAdults - 1);
      };
    
      const decreaseGuestChildren = (e) => {
        e.preventDefault();
        setGuestChildren(guestChildren - 1);
      };

   
  return (
    <div>
        

        <div className="guestAdder">
              <div
                className="close"
                onClick={(e) => {
                  e.preventDefault();
                  setAddGuestToggler(false);
                }}
              >
                <span><Close/></span>
              </div>

              <div className="adults">
                <span>adults</span>
                <button onClick={decreaseGuestAdults}>-</button>
                <p>{guestAdults}</p>
                <button onClick={increaseGuestAdults}>+</button>
              </div>

              <div className="children">
                <span>Children</span>
                <button onClick={decreaseGuestChildren}>-</button>
                <p>{guestChildren}</p>
                <button onClick={increaseGuestChildren}>+</button>
              </div>
            </div>
    </div>
  )
}

export default GuestAdder