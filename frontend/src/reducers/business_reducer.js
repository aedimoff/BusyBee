import { SET_BUSINESS_TO_STATE, CLEAR_BUSINESS_FROM_STATE } from "../actions/business_actions";

const BusinessReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case SET_BUSINESS_TO_STATE:
      return action.placeId
    case CLEAR_BUSINESS_FROM_STATE:
      return {};
    default:
      return state;
  }
};

export default BusinessReducer;