export const GET_DIRECTIONS = "GET_DIRECTIONS";
export const CLEAR_DIRECTIONS = "CLEAR_DIRECTIONS"

export const getDirections = (directions) => ({
    type: GET_DIRECTIONS,
    directions 
});

export const clearDirections = () => ({
    type: CLEAR_DIRECTIONS, 
})