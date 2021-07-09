export const RECEIVE_SELECTED = "RECEIVE_SELECTED"
export const DELETE_SELECTED = "DELETE_SELECTED"
export const CLEAR_SELECTED = "CLEAR_SELECTED"

export const receiveSelected = (favorite) => ({
        type: RECEIVE_SELECTED,
        favorite
});

export const deleteSelected = (favorite) => ({
        type: DELETE_SELECTED,
        favorite
});

export const clearSelected = () => ({
    type: CLEAR_SELECTED,
})

// export const addSelected = (favorite) => dispatch => (
//     ApiUtil.addSelected(favorite)
//     .then(favorite => dispatch(receiveSelected(favorite)))
//     .catch(err => console.log(err))
// );

// export const removeSelected = (placeId) => dispatch => (
//     ApiUtil.removeSelected(placeId)
//     .then((placeId) => dispatch(removeSelected(placeId)))
//     .catch(err => console.log(err))
// );