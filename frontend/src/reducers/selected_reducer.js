import {
  RECEIVE_SELECTED,
  DELETE_SELECTED,
  CLEAR_SELECTED
} from "../actions/selected_actions";

const initialState = {
  selected: []
};

const SelectedReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SELECTED:

      return Object.assign({}, { selected: [...state.selected, action.favorite] });
    case DELETE_SELECTED:

      const selected = state.selected.filter(
        (selected) => selected.place_id != action.favorite.place_id
      );

      return Object.assign({}, { selected } );
    case CLEAR_SELECTED: 
        return initialState;
    default:
      return state;
  }
};

export default SelectedReducer;
