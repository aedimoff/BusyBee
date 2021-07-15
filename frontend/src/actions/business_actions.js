export const SET_BUSINESS_TO_STATE = "SET_BUSINESS_TO_STATE";
export const CLEAR_BUSINESS_FROM_STATE = "CLEAR_BUSINESS_FROM_STATE";

export const setBusinessToState = (placeId) => ({
  type: SET_BUSINESS_TO_STATE,
  placeId
});

export const clearBusinessFromState = () => ({
  type: CLEAR_BUSINESS_FROM_STATE
});