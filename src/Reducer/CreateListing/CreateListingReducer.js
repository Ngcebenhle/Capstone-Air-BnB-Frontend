 
 
  export const CreateListing = (state, action) => {
    switch (action.type) {
      
      case "CHANGE_INPUT":
        return {
          ...state,
         [action.payload.name]:action.payload.value
        };
  
      case "LISTING_CREATED_SUCCESS":
        return {
          ...state,
        };

      case "ADD_AMENITIES":
      
        return {
          ...state,
          amenities:[...state.amenities, action.payload]
        };
  
      case "REMOVE_AMENITIES":

        return {
          ...state,
          amenities: state.amenities.filter((ameni) => ameni !== action.payload)
        };

        case "ADD_OBJECT":

        return {
          ...state,
          [action.payload.name]:[...state.payload.name, action.payload.value],
        };
  
        case "ADD_IMAGES": 
        
        return {
          ...state,
          images:[...state.images, action.payload]
        };

        case "REMOVE_IMAGES":
        
        return {
          ...state,
          images: state.images.filter((Img) => Img !== action.payload)
        };

        case "UPDATE_ALL":
        
        return {
          ...state,
          description:[...state.description, action.payload],
          location:[...state.location, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
          // images:[...state.images, action.payload],
        };

      default:
        return state;
    }
  };
