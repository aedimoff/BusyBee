import {
  RECEIVE_SELECTED,
  DELETE_SELECTED,
} from "../actions/selected_actions";

const initialState = {
  selected: []
};

const SelectedReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SELECTED:
      state.selected.push(action.favorite);
      return state;
    case DELETE_SELECTED:
      for (let i = 0; i < state.selected.length; i++) {
        if (action.favorite.place_id === state.selected[i].place_id) {
          state.selected.splice(i, 1);
          break;
        }
      }
      return state;
    default:
      return state;
  }
};

export default SelectedReducer;
