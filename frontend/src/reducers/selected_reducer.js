import {
  RECEIVE_SELECTED,
  REMOVE_SELECTED,
  CLEAR_SELECTED,
} from "../actions/selected_actions";
// import { GET_DIRECTIONS } from "../actions/directions_actions";
const initialState = {
  selected: []
};

const SelectedReducer = (state = initialState, action) => {
  console.log("selected reducer", action)
  Object.freeze(state);
  let selected = [];

  switch (action.type) {
    case RECEIVE_SELECTED:
      state.selected.push(action.favorite);
      return state;
    case REMOVE_SELECTED:
      selected.splice(selected.indexOf(action.placeId), 1);
      return selected;
    case CLEAR_SELECTED:
        selected = [];
      return selected;
    default:
      return state;
  }
};

export default SelectedReducer;
