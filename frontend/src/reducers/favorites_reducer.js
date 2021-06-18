import { RECEIVE_FAVORITE, RECEIVE_FAVORITES, REMOVE_FAVORITE } from '../actions/favorites_actions'

const FavoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_FAVORITE:
<<<<<<< HEAD
            nextState[action.favorite.place_id] = action.favorite;
=======
            nextState[action.favorite.placeId] = action.favorite;
        case RECEIVE_FAVORITES:
            return action.favorites;
>>>>>>> e2d596ba9511fa9cc712ea904f17227dfafc093e
        case REMOVE_FAVORITE:
            delete nextState[action.place_id];
            return nextState;
        default:
            return state;
    }
}

export default FavoritesReducer