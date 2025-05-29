const Reservation = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATES":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "INCREASE_NUMBER_OF_GUEST":
      return {
        ...state,
        adults: state.guest.adults + 1,
      };

    case "DECREASE_NUMBER_OF_GUEST":
      return {
        ...state,
        adults: state.guest.adults - 1,
      };

    case "INCREASE_NUMBER_OF_CHILDREN_GUEST":
      return {
        ...state,
        children: state.guest.children - 1,
      };

    case "DECREASE_NUMBER_OF_CHILDREN_GUEST":
      return {
        ...state,
        children: state.guest.children - 1,
      };
    case "RESERVATIONS":
      return {
        ...state,
        reservations:[...state.reservations, action.payload]
      };

    default:
      return state;
  }
};

// ...state,
// quntity:state.quntity +1

export default Reservation;
