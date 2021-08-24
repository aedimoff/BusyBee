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

      return Object.assign({}, { selected: [...state.selected, action.favorite] });
    case DELETE_SELECTED:
      // for (let i = 0; i < state.selected.length; i++) {
      //   if (action.favorite.place_id === state.selected[i].place_id) {
      //     state.selected.splice(i, 1);
      //     break;
      //   }
      // }

      const selected = state.selected.filter(
        (selected) => selected.place_id != action.favorite.place_id
      );

      return Object.assign({}, { selected } );
    default:
      return state;
  }
};

export default SelectedReducer;
