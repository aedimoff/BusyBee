export const GET_DIRECTIONS = "GET_DIRECTIONS";
export const FETCH_DIRECTIONS = "FETCH_DIRECTIONS"

export const getDirections = (directions) => ({
    type: GET_DIRECTIONS,
    directions 
});

export const fetchDirections = () => ({
    type: FETCH_DIRECTIONS,
    
})