
  export const logIn = (state, action) => {
    switch (action.type) {
      
      case "INPUT":
        return {
          ...state,
         [action.payload.name]:action.payload.value
        };
  
      case "LOG_IN_SUCCESS":
        return {
          ...state,
          username:null,
          password:null,
          isLoggedIn:null,
          token: null,
          user: null,
          refreshToken:null
        };

      case "LOG_OUT":
        
        return {
          ...state,
          username:null,
          password:null,
          isLoggedIn:null,
          token: null,
          user: null,
          refreshToken:null
        };

      default:
        return state;
    }
  };
