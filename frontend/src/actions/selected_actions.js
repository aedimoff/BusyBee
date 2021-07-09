export const RECEIVE_SELECTED = "RECEIVE_SELECTED"
export const REMOVE_SELECTED = "REMOVE_SELECTED"
export const CLEAR_SELECTED = "CLEAR_SELECTED"

export const receiveSelected = (favorite) => ({
        type: RECEIVE_SELECTED,
        favorite
});

export const removeSelected = (placeId) => ({
        type: REMOVE_SELECTED,
        placeId
});

export const clearSelected = () => ({
    type: CLEAR_SELECTED,
})

