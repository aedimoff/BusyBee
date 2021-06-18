import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/session_actions";

const initialState = {
  isAuthenticated: false,
  user: {
    favorites: [],
  },
};

export default function (state = initialState, action) {
  let favorites
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.user,
        user: action.user,
        isSignedIn: true,
      };
    case RECEIVE_FAVORITE:
      console.log("ACTION", action)
      favorites = state.user.favorites;
      favorites.push(action.favorite);
      return {
        ...state,
        user: {
          ...state.user,
          favorites: favorites,
        },
      };
    case REMOVE_FAVORITE:
      favorites = state.user.favorites;
      let index = favorites.findIndex(function(fav){
          return fav.place_id === action.place_id;
      })

      // if index not in favorites, don't remove.
      // index of -1 means not found. 
      if (index !== -1) favorites.splice(index, 1);

      return {
        ...state,
        user: {
          ...state.user,
          favorites: favorites,
        },
      };
      
    case RECEIVE_USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
