import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const defaultState = { type: null, params: {} }

export default function modalReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {type: action.modal, params: action.params};
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
}