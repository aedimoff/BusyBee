import { RECEIVE_BUSINESS } from '../actions/business_action'

const businessReducer = (state = {}, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BUSINESS:
            return action.business;
        default:
            return state;
    }
}

export default businessReducer