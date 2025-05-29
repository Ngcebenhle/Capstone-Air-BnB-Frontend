 
 
  export const Location = (state, action) => {
    switch (action.type) {
      
      case "SELECT_LOCATION":
        return {
            ...state,
            selectedLocation: action.payload
          };
  
      case "SELECT_LISTING":
        return {
          ...state,
          selectedListingId: action.payload
       
        };

      default:
        return state;
    }
  };
