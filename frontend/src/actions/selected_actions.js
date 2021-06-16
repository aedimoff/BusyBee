import * as ApiUtil from '../util/selecteds_api_util';

export const RECEIVE_SELECTEDS = "RECEIVE_SELECTEDS"
export const RECEIVE_SELECTED = "RECEIVE_SELECTED"
export const REMOVE_SELECTED = "REMOVE_SELECTED"

export const receiveSELECTEDS = (selecteds) => ({
        type: RECEIVE_SELECTEDS,
        selecteds
});

export const receiveSelected = (selected) => ({
        type: RECEIVE_SELECTEDS,
        selected
});

export const removeSelected = (placeId) => ({
        type: REMOVE_SELECTED,
        placeId
});

export const fetchSelecteds = () => dispatch => (
    ApiUtil.fetchSelecteds()
    .then(selecteds => dispatch(receiveSelecteds(selecteds)))
    .catch(err => console.log(err))
);

export const fetchSelected = (placeId) => dispatch => (
    ApiUtil.fetchSelected(placeId)
    .then(selected => dispatch(receiveSelected(selected)))
    .catch(err => console.log(err))
);

export const addSelected = (placeId) => dispatch => (
    ApiUtil.addSelected(placeId)
    .then(selected => dispatch(receiveSelected(selected)))
    .catch(err => console.log(err))
);

export const removeSelected = (placeId) => dispatch => (
    ApiUtil.removeSelected(placeId)
    .then((placeId) => dispatch(removeSelected(placeId)))
    .catch(err => console.log(err))
);