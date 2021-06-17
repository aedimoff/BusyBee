import { RECEIVE_FAVORITE, RECEIVE_FAVORITES, REMOVE_FAVORITE } from '../actions/favorites_actions'

const FavoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_FAVORITES:
            return action.favorites;
        case RECEIVE_FAVORITE:
            nextState[action.favorite.place_id] = action.favorite;
        case REMOVE_FAVORITE:
            delete nextState[action.place_id];
            return nextState;
        default:
            return state;
    }
}

export default FavoritesReducer