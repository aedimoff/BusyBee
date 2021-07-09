import { CLEAR_DIRECTIONS, GET_DIRECTIONS } from "../actions/directions_actions";

export default function directionsReducer(state = {}, action) {
  switch (action.type) {
    case GET_DIRECTIONS:
      return Object.assign({}, state, action.directions);
    case CLEAR_DIRECTIONS: 
      return {};
    default:
      return state;
  }
}
