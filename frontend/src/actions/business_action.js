import * as ApiUtil from '../util/business_api_util'

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

export const receiveBusiness = (business) => ({
    type: RECEIVE_BUSINESS,
    business
});

export const addBusiness = (business) => dispatch => (
    ApiUtil.addBusiness(business)
    .then(business => dispatch(receiveBusiness(business)))
);

