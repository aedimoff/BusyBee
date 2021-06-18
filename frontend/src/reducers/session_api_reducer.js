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
      const favorites = state.user.favorites;
      favorites.push(JSON.parse(action.favorite.config.data).data.result);
      return {
        ...state,
        user: {
          ...state.user,
          favorites: favorites,
        },
      };
    case REMOVE_FAVORITE:
      let nextState = Object.assign({}, state);
      console.log("reducer", action);
      delete nextState[action.sessionApi.user.favorites.place_id];
      return nextState;
    case RECEIVE_USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
