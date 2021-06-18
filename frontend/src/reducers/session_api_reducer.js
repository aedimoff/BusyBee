import { RECEIVE_CURRENT_USER, 
    RECEIVE_USER_LOGOUT, 
    RECEIVE_FAVORITE } from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    currentUser: {
        favorites: []
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !!action.currentUser,
          currentUser: action.currentUser,
          isSignedIn: true
        };
    case RECEIVE_FAVORITE:
        const favorites = state.user.favorites
        favorites.push(JSON.parse(action.favorite.config.data).data.result)
        return {
            ...state,
            user: {
                ...state.user,
                favorites: favorites
            }
        }
    case RECEIVE_USER_LOGOUT:
        return initialState;
    default:
        return state;
    }
}