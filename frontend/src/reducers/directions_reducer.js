import { GET_DIRECTIONS } from "../actions/directions_actions";

export default function directionsReducer(state = {}, action) {
  console.log("in reducer", action)
  switch (action.type) {
    case GET_DIRECTIONS:
      console.log("reducer", action.directions)
      return Object.assign({}, state, action.directions);
    default:
      return state;
  }
}
